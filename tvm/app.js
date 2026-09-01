const STORAGE = {
  secret: "tvm.secret.v1",
  secretUpdatedAt: "tvm.secret.v1.updatedAt",
  history: "tvm.history.v1",
  ui: "tvm.ui.v1",
};

const rates = [0.75, 1, 1.25, 1.5, 2];
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
const accessChannel = "BroadcastChannel" in window ? new BroadcastChannel("tvm-access") : null;

const state = {
  root: null,
  config: null,
  key: null,
  unlocked: false,
  categories: [],
  videos: [],
  selectedCategory: "all",
  selectedIndex: -1,
  selectedVideo: null,
  query: "",
  sort: "default",
  listMode: false,
  history: [],
  playable: null,
  episodeIndex: 0,
  sourceIndex: 0,
  rate: 1,
  hls: null,
  saveTimer: 0,
  detailOpen: false,
  pendingResumeAt: 0,
};

const els = {
  app: document.getElementById("app"),
  searchInput: document.getElementById("searchInput"),
  categoryList: document.getElementById("categoryList"),
  historyList: document.getElementById("historyList"),
  videoList: document.getElementById("videoList"),
  detailPanel: document.getElementById("detailPanel"),
  resultMeta: document.getElementById("resultMeta"),
  sortSelect: document.getElementById("sortSelect"),
  viewToggle: document.getElementById("viewToggle"),
};

init();

async function init() {
  restoreUi();
  bindGlobalEvents();
  await loadCatalog();
  await restoreSecret();
  renderAll();
}

function bindGlobalEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    renderCatalog();
  });

  els.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    saveUi();
    renderCatalog();
  });

  els.viewToggle.addEventListener("click", () => {
    state.listMode = !state.listMode;
    saveUi();
    renderCatalog();
  });

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE.secretUpdatedAt) {
      restoreSecret().then(renderDetail);
    }
  });

  accessChannel?.addEventListener("message", (event) => {
    if (event.data?.type !== "secret" || typeof event.data.secret !== "string") return;
    localStorage.setItem(STORAGE.secret, event.data.secret);
    restoreSecret().then(renderDetail);
  });

  window.addEventListener("resize", syncDetailMode, { passive: true });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.detailOpen) {
      closeDetail();
      return;
    }
    const video = document.querySelector("video");
    if (!video || event.target.matches("input, select, textarea")) return;
    if (event.key === " ") {
      event.preventDefault();
      video.paused ? video.play() : video.pause();
    }
    if (event.key === "ArrowRight") video.currentTime = Math.min(video.duration || Infinity, video.currentTime + 5);
    if (event.key === "ArrowLeft") video.currentTime = Math.max(0, video.currentTime - 5);
  });
}

async function loadCatalog() {
  try {
    state.root = await fetchJson("./data/c");
    state.config = await loadEncryptionConfig(state.root, "./");
    const indexPath = state.root.i ? `./${state.root.i}` : "./data/recommend.json";
    const catalog = await fetchJson(indexPath);
    applyCatalog(catalog);
  } catch (error) {
    console.warn(error);
    const fallback = await fetchJson("./data/recommend.json");
    applyCatalog(fallback);
  }
  state.history = loadHistory();
}

function applyCatalog(catalog) {
  state.categories = Array.isArray(catalog.categories) ? catalog.categories : [];
  state.videos = (catalog.videos || []).map((video, index) => ({
    ...video,
    id: String(index),
    index,
    searchText: [
      video.name,
      video.intro,
      video.latestEpisode,
      video.language,
      video.category?.name,
      video.category?.id,
    ].filter(Boolean).join(" ").toLowerCase(),
  }));
}

async function restoreSecret() {
  const hasSecret = localStorage.getItem(STORAGE.secret) !== null;
  const secret = localStorage.getItem(STORAGE.secret) || "";
  state.key = null;
  state.unlocked = false;
  if (!hasSecret || !state.config) return;
  try {
    state.key = await deriveKey(secret, state.config);
    state.unlocked = true;
  } catch (error) {
    console.warn(error);
    state.key = null;
    state.unlocked = false;
  }
}

function renderAll() {
  renderChrome();
  renderCategories();
  renderHistory();
  renderCatalog();
  renderDetail();
}

function renderChrome() {
  els.viewToggle.classList.toggle("active", state.listMode);
  els.sortSelect.value = state.sort;
  syncDetailMode();
}

function renderCategories() {
  const allCount = state.videos.length;
  const buttons = [
    { id: "all", name: "全部", count: allCount },
    ...state.categories,
  ];
  els.categoryList.innerHTML = buttons.map((item) => `
    <button class="category-button ${state.selectedCategory === item.id ? "active" : ""}" type="button" data-category="${escapeHtml(item.id)}">
      <span>${escapeHtml(item.name)}</span>
      <span class="category-count">${item.count || 0}</span>
    </button>
  `).join("");

  els.categoryList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.category;
      renderCategories();
      renderCatalog();
    });
  });
}

function renderCatalog() {
  const videos = getFilteredVideos();
  els.resultMeta.textContent = `${videos.length} 部影片`;
  els.videoList.className = `video-grid${state.listMode ? " list-mode" : ""}`;

  if (!videos.length) {
    els.videoList.innerHTML = '<div class="loader">没有匹配结果</div>';
    return;
  }

  els.videoList.innerHTML = videos.map((video) => `
    <article class="video-card ${state.selectedIndex === video.index ? "active" : ""}" data-index="${video.index}" tabindex="0">
      <div class="poster">
        ${video.cover ? `<img src="${escapeAttr(video.cover)}" alt="${escapeAttr(video.name || "视频封面")}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
        <span class="poster-badge">${escapeHtml(video.latestEpisode || `${video.episodeCount || 0} 集`)}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${escapeHtml(video.name || "未命名")}</div>
        <div class="video-meta">
          <span>${escapeHtml(video.category?.name || "未分类")}</span>
          <span>${escapeHtml(video.language || "")}</span>
        </div>
      </div>
    </article>
  `).join("");

  els.videoList.querySelectorAll(".video-card").forEach((card) => {
    const open = () => selectVideo(Number(card.dataset.index));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") open();
    });
  });
}

function renderHistory() {
  if (!state.history.length) {
    els.historyList.className = "history-list empty";
    els.historyList.textContent = "暂无记录";
    return;
  }

  els.historyList.className = "history-list";
  els.historyList.innerHTML = state.history.slice(0, 12).map((item) => `
    <button class="history-item" type="button" data-index="${item.index}">
      <div class="history-title">${escapeHtml(item.name)}</div>
      <div class="history-meta">${escapeHtml(item.episodeName || "")} · ${formatTime(item.currentTime || 0)}</div>
    </button>
  `).join("");

  els.historyList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectVideo(Number(button.dataset.index), true));
  });
}

function renderDetail() {
  renderChrome();
  const video = state.selectedVideo;
  if (!video) {
    releasePlayer();
    els.detailPanel.innerHTML = `
      <div class="detail-empty">
        <div class="empty-icon">TV</div>
        <p>选择影片</p>
      </div>
    `;
    return;
  }

  const history = findHistory(video.index);
  const canPlay = state.unlocked;
  els.detailPanel.innerHTML = `
    <button id="detailClose" class="detail-close icon-button" type="button" title="关闭" aria-label="关闭">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
    <div class="detail-cover">
      ${video.cover ? `<img src="${escapeAttr(video.cover)}" alt="${escapeAttr(video.name || "视频封面")}" referrerpolicy="no-referrer" />` : ""}
    </div>
    <div class="detail-body">
      <h2 class="detail-title">${escapeHtml(video.name || "未命名")}</h2>
      <div class="detail-tags">
        <span class="tag">${escapeHtml(video.category?.name || "未分类")}</span>
        <span class="tag">${escapeHtml(video.latestEpisode || `${video.episodeCount || 0} 集`)}</span>
        ${video.language ? `<span class="tag">${escapeHtml(video.language)}</span>` : ""}
      </div>
      <p class="detail-intro">${escapeHtml(video.intro || "暂无简介")}</p>
      ${canPlay ? renderPlayableSection(video, history) : ""}
    </div>
  `;

  document.getElementById("detailClose")?.addEventListener("click", closeDetail);
  if (canPlay) bindDetailEvents();
  syncDetailMode();
}

function renderPlayableSection(video, history) {
  if (!state.playable || state.playable.index !== video.index) {
    return `
      <div class="actions">
        <button id="loadPlayButton" class="primary-button" type="button">${history ? "继续播放" : "播放"}</button>
      </div>
      ${history ? `<div class="status-line">上次看到 ${escapeHtml(history.episodeName || "")} ${formatTime(history.currentTime || 0)}</div>` : ""}
      <div id="detailStatus" class="status-line"></div>
    `;
  }

  const playable = state.playable;
  const episode = playable.episodes[state.episodeIndex] || playable.episodes[0];
  const sources = episode?.sources || [];
  return `
    <div class="player-wrap">
      <video id="player" controls playsinline preload="metadata" crossorigin="anonymous"></video>
      <div class="player-controls">
        <div id="nowPlaying" class="now-playing">${escapeHtml(composePlayingTitle(playable, episode))}</div>
        <div class="rate-tabs">
          ${rates.map((rate) => `<button class="rate-button ${rate === state.rate ? "active" : ""}" type="button" data-rate="${rate}">${rate}x</button>`).join("")}
        </div>
      </div>
      <div id="playerStatus" class="status-line"></div>
    </div>
    <div class="source-title">线路</div>
    <div id="sourceList" class="source-list">
      ${sources.map((source, index) => `<button class="source-button ${index === state.sourceIndex ? "active" : ""}" type="button" data-source="${index}">${escapeHtml(source.name || `线路 ${index + 1}`)}</button>`).join("")}
    </div>
    <div class="source-title">剧集</div>
    <div id="episodeList" class="episode-list">
      ${playable.episodes.map((item, index) => `<button class="episode-button ${index === state.episodeIndex ? "active" : ""}" type="button" data-episode="${index}">${escapeHtml(item.name || `第 ${index + 1} 集`)}</button>`).join("")}
    </div>
  `;
}

function bindDetailEvents() {
  const loadButton = document.getElementById("loadPlayButton");
  if (loadButton) {
    loadButton.addEventListener("click", () => loadPlayableForSelected());
    return;
  }

  const player = document.getElementById("player");
  if (player) {
    player.addEventListener("timeupdate", () => scheduleHistorySave(player));
    player.addEventListener("loadedmetadata", () => seekFromHistory(player));
    player.addEventListener("ended", playNextEpisode);
    player.addEventListener("error", () => setStatus("playerStatus", "当前线路播放异常", true));
    player.addEventListener("ratechange", () => syncRateButtons(player.playbackRate));
    bindSourceButtons();
    bindEpisodeButtons();
    bindRateButtons(player);
    loadCurrentSource({ autoplay: true });
  }
}

function bindSourceButtons() {
  document.querySelectorAll(".source-button").forEach((button) => {
    button.addEventListener("click", () => {
      const player = document.getElementById("player");
      state.pendingResumeAt = player?.currentTime || 0;
      state.sourceIndex = Number(button.dataset.source);
      renderDetail();
    });
  });
}

function bindEpisodeButtons() {
  document.querySelectorAll(".episode-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.episodeIndex = Number(button.dataset.episode);
      state.sourceIndex = 0;
      state.pendingResumeAt = 0;
      renderDetail();
    });
  });
}

function bindRateButtons(player) {
  document.querySelectorAll(".rate-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.rate = Number(button.dataset.rate);
      player.playbackRate = state.rate;
      syncRateButtons(player.playbackRate);
    });
  });
}

async function selectVideo(index, fromHistory = false) {
  releasePlayer();
  state.selectedIndex = index;
  state.selectedVideo = state.videos[index];
  state.playable = null;
  state.detailOpen = true;
  const history = findHistory(index);
  state.episodeIndex = fromHistory && history ? history.episodeIndex || 0 : 0;
  state.sourceIndex = fromHistory && history ? history.sourceIndex || 0 : 0;
  renderCatalog();
  renderDetail();
  if (fromHistory && state.unlocked) await loadPlayableForSelected();
}

function closeDetail() {
  state.detailOpen = false;
  releasePlayer();
  syncDetailMode();
}

async function loadPlayableForSelected() {
  if (!state.selectedVideo || !state.key || !state.root?.r) return;
  setStatus("detailStatus", "解析播放数据中");
  try {
    const index = state.selectedVideo.index;
    const [p, m] = await Promise.all([
      loadEncryptedJson(`./data/p/${state.root.r}/${index}`),
      loadEncryptedJson(`./data/m/${state.root.r}/${index}`).catch(() => null),
    ]);
    state.playable = normalizePlayable(index, state.selectedVideo, [p, m].filter(Boolean));
    const history = findHistory(index);
    if (history) {
      state.episodeIndex = clamp(history.episodeIndex || 0, 0, state.playable.episodes.length - 1);
      const sources = state.playable.episodes[state.episodeIndex]?.sources || [];
      state.sourceIndex = clamp(history.sourceIndex || 0, 0, Math.max(0, sources.length - 1));
    }
    renderDetail();
  } catch (error) {
    console.error(error);
    setStatus("detailStatus", "播放数据解密失败", true);
  }
}

async function loadEncryptedJson(path) {
  const envelope = await fetchJson(path);
  return decryptEnvelope(envelope, state.key);
}

async function loadCurrentSource(options = {}) {
  const player = document.getElementById("player");
  const episode = state.playable?.episodes[state.episodeIndex];
  const source = episode?.sources?.[state.sourceIndex];
  if (!player || !source?.url) return;

  const keepTime = Number(options.resumeAt || state.pendingResumeAt || (options.keepTime ? player.currentTime : 0));
  state.pendingResumeAt = 0;
  const url = source.url;
  setStatus("playerStatus", source.name || "加载中");

  if (state.hls) {
    state.hls.destroy();
    state.hls = null;
  }

  if (isHlsUrl(url) && !player.canPlayType("application/vnd.apple.mpegurl") && window.MediaSource) {
    try {
      const Hls = await ensureHls();
      if (Hls?.isSupported()) {
        state.hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        state.hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data?.fatal) setStatus("playerStatus", "当前线路播放异常", true);
        });
        state.hls.loadSource(url);
        state.hls.attachMedia(player);
      } else {
        player.src = url;
      }
    } catch (error) {
      console.warn(error);
      player.src = url;
    }
  } else {
    player.src = url;
  }

  player.playbackRate = state.rate;
  player.onloadedmetadata = () => {
    if (keepTime > 0) player.currentTime = Math.min(keepTime, Math.max(0, (player.duration || keepTime) - 4));
    seekFromHistory(player);
  };
  if (options.autoplay) {
    player.play().catch(() => setStatus("playerStatus", "等待手动播放"));
  }
  syncNowPlaying();
}

function playNextEpisode() {
  if (!state.playable) return;
  if (state.episodeIndex + 1 >= state.playable.episodes.length) return;
  state.episodeIndex += 1;
  state.sourceIndex = 0;
  state.pendingResumeAt = 0;
  renderDetail();
}

function releasePlayer() {
  if (state.hls) {
    state.hls.destroy();
    state.hls = null;
  }
  const player = document.getElementById("player");
  if (!player) return;
  player.pause();
  player.removeAttribute("src");
  player.load();
}

function scheduleHistorySave(player) {
  if (!state.selectedVideo || !state.playable || !Number.isFinite(player.currentTime)) return;
  window.clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(() => savePlaybackHistory(player), 450);
}

function savePlaybackHistory(player) {
  const episode = state.playable?.episodes[state.episodeIndex];
  if (!episode) return;
  const item = {
    index: state.selectedVideo.index,
    name: state.selectedVideo.name,
    cover: state.selectedVideo.cover,
    episodeIndex: state.episodeIndex,
    sourceIndex: state.sourceIndex,
    episodeName: episode.name,
    currentTime: Math.floor(player.currentTime || 0),
    duration: Math.floor(player.duration || 0),
    updatedAt: Date.now(),
  };
  state.history = [item, ...state.history.filter((entry) => entry.index !== item.index)].slice(0, 60);
  localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
  renderHistory();
}

function seekFromHistory(player) {
  const history = findHistory(state.selectedVideo?.index);
  if (!history || history.episodeIndex !== state.episodeIndex) return;
  const resumeAt = Number(player.dataset.resumeAt || history.currentTime || 0);
  if (resumeAt > 5 && player.duration && resumeAt < player.duration - 6) {
    player.currentTime = resumeAt;
  }
  delete player.dataset.resumeAt;
}

function loadHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.history) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function findHistory(index) {
  return state.history.find((item) => item.index === index);
}

function getFilteredVideos() {
  const query = state.query.toLowerCase();
  let videos = state.videos.filter((video) => {
    const categoryMatched = state.selectedCategory === "all" || video.category?.id === state.selectedCategory;
    const queryMatched = !query || video.searchText.includes(query);
    return categoryMatched && queryMatched;
  });

  if (state.sort === "name") {
    videos = videos.slice().sort((a, b) => String(a.name).localeCompare(String(b.name), "zh-CN"));
  }
  if (state.sort === "episodes") {
    videos = videos.slice().sort((a, b) => (b.episodeCount || 0) - (a.episodeCount || 0));
  }
  return videos;
}

function normalizePlayable(index, video, payloads) {
  for (const payload of payloads) {
    const standardEpisodes = normalizeStandardEpisodes(payload);
    if (standardEpisodes.length) {
      return { index, name: video.name, episodes: standardEpisodes };
    }
  }

  const episodes = [];
  const seen = new Set();

  for (const payload of payloads) {
    collectEpisodes(payload, episodes, seen);
  }

  if (!episodes.length) {
    throw new Error("No playable source");
  }

  episodes.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return { index, name: video.name, episodes };
}

function normalizeStandardEpisodes(payload) {
  if (!payload || !Array.isArray(payload.episodes)) return [];
  return payload.episodes.map((episode, episodeIndex) => {
    const rawSources = Array.isArray(episode.sources) ? episode.sources : [];
    const sources = rawSources
      .map((source, sourceIndex) => normalizeSource(source, sourceIndex))
      .filter((source) => source.url);
    return {
      name: episode.name || `第 ${episodeIndex + 1} 集`,
      order: episodeIndex,
      sources,
    };
  }).filter((episode) => episode.sources.length);
}

function normalizeSource(source, sourceIndex) {
  if (typeof source === "string") {
    return { name: `线路 ${sourceIndex + 1}`, url: source.trim() };
  }
  if (!source || typeof source !== "object") {
    return { name: `线路 ${sourceIndex + 1}`, url: "" };
  }
  return {
    name: stringField(source, ["source", "sourceName", "line", "lineName", "from", "provider", "site"]) || originName(source) || `线路 ${sourceIndex + 1}`,
    url: stringField(source, ["url", "playUrl", "play_url", "m3u8", "src", "href", "link"]),
  };
}

function collectEpisodes(value, episodes, seen, context = {}) {
  if (!value) return;
  if (typeof value === "string") {
    if (looksPlayable(value)) addSourceToEpisode(episodes, seen, context.name, context.sourceName, value, context.order);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectEpisodes(item, episodes, seen, { ...context, order: context.order ?? index }));
    return;
  }
  if (typeof value !== "object") return;

  const name = stringField(value, ["episode", "episodeName", "name", "title", "label", "part"]) || context.name;
  const sourceName = stringField(value, ["source", "sourceName", "line", "lineName", "from", "provider", "site"]) || originName(value) || context.sourceName;
  const url = stringField(value, ["url", "playUrl", "play_url", "m3u8", "src", "href", "link"]);
  if (url && looksPlayable(url)) addSourceToEpisode(episodes, seen, name, sourceName, url, context.order);

  for (const [key, child] of Object.entries(value)) {
    if (["url", "playUrl", "play_url", "m3u8", "src", "href", "link"].includes(key)) continue;
    const nextContext = { ...context };
    if (/episode|part|list|urls?|source/i.test(key)) nextContext.name = name;
    if (/source|line|from|site|provider/i.test(key) && !nextContext.sourceName) nextContext.sourceName = sourceName || key;
    collectEpisodes(child, episodes, seen, nextContext);
  }
}

function addSourceToEpisode(episodes, seen, name, sourceName, url, order = 0) {
  const cleanUrl = String(url).trim();
  const episodeName = String(name || `第 ${episodes.length + 1} 集`).trim();
  const sourceLabel = String(sourceName || `线路 ${episodes.length + 1}`).trim();
  const key = `${episodeName}\n${cleanUrl}`;
  if (seen.has(key)) return;
  seen.add(key);

  let episode = episodes.find((item) => item.name === episodeName);
  if (!episode) {
    episode = { name: episodeName, order, sources: [] };
    episodes.push(episode);
  }
  episode.sources.push({ name: sourceLabel || `线路 ${episode.sources.length + 1}`, url: cleanUrl });
}

function stringField(source, names) {
  for (const name of names) {
    const value = source[name];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

function originName(source) {
  const origin = Array.isArray(source.origins) ? source.origins[0] : null;
  if (!origin) return "";
  return origin.siteName || origin.siteKey || origin.line || "";
}

function looksPlayable(value) {
  return /^https?:\/\//i.test(value) && !/\.(jpe?g|png|gif|webp|svg|avif)(\?|#|$)/i.test(value);
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Fetch failed: ${path}`);
  return response.json();
}

async function loadEncryptionConfig(root, basePath) {
  if (root?.config) {
    try {
      return await fetchJson(`${basePath}${root.config}`);
    } catch (error) {
      console.warn(error);
    }
  }
  return root?.encryption || null;
}

async function deriveKey(secret, config) {
  const material = `${config.keyHour || ""}${secret}${config.randomNumber || ""}`;
  const hash = await crypto.subtle.digest("SHA-256", textEncoder.encode(material));
  return crypto.subtle.importKey("raw", hash, "AES-GCM", false, ["decrypt"]);
}

async function decryptEnvelope(envelope, key) {
  const iv = base64UrlToBytes(envelope.n);
  const data = base64UrlToBytes(envelope.c);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  const text = textDecoder.decode(plain);
  return JSON.parse(text);
}

function base64UrlToBytes(value) {
  const base64 = String(value).replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

function ensureHls() {
  if (window.Hls) return Promise.resolve(window.Hls);
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js";
    script.async = true;
    script.onload = () => resolve(window.Hls);
    script.onerror = () => reject(new Error("hls.js load failed"));
    document.head.appendChild(script);
  });
}

function isHlsUrl(url) {
  return /\.m3u8(\?|#|$)/i.test(url);
}

function syncRateButtons(rate) {
  document.querySelectorAll(".rate-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.rate) === rate);
  });
}

function syncNowPlaying() {
  const episode = state.playable?.episodes[state.episodeIndex];
  const target = document.getElementById("nowPlaying");
  if (target) target.textContent = composePlayingTitle(state.playable, episode);
}

function composePlayingTitle(playable, episode) {
  return [playable?.name, episode?.name].filter(Boolean).join(" · ");
}

function setStatus(id, text, isError = false) {
  const target = document.getElementById(id);
  if (!target) return;
  target.textContent = text;
  target.classList.toggle("error", isError);
}

function restoreUi() {
  try {
    const ui = JSON.parse(localStorage.getItem(STORAGE.ui) || "{}");
    state.listMode = Boolean(ui.listMode);
    state.sort = ui.sort || "default";
  } catch {
    state.listMode = false;
    state.sort = "default";
  }
}

function saveUi() {
  localStorage.setItem(STORAGE.ui, JSON.stringify({
    listMode: state.listMode,
    sort: state.sort,
  }));
}

function syncDetailMode() {
  const mobile = window.matchMedia("(max-width: 760px)").matches;
  document.body.classList.toggle("detail-open", mobile && state.detailOpen);
  els.detailPanel.classList.toggle("open", mobile && state.detailOpen);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatTime(seconds) {
  const value = Math.max(0, Math.floor(seconds));
  const h = Math.floor(value / 3600);
  const m = Math.floor((value % 3600) / 60);
  const s = value % 60;
  if (h) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}
