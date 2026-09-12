const STORAGE = {
  history: "tvm.history.v2",
  ui: "tvm.ui.v2",
  configProfiles: "tvm.configProfiles.v1",
  activeConfigProfileKey: "tvm.activeConfigProfileKey.v1",
  selectedSourceKeys: "tvm.selectedSourceKeys.v1",
};

const DEFAULT_CONFIG_PROFILES = [
  {
    key: "yingshicang",
    name: "影视仓",
    url: "http://www.影视仓.com",
    requestURL: "https://700sjro44343.vicp.fun/vip/vip/tv.json",
    enabled: true,
    builtIn: true,
  },
  {
    key: "fantaihard",
    name: "饭太硬",
    url: "http://www.饭太硬.cc/tv",
    requestURL: "http://www.xn--sss604efuw.net/tv",
    enabled: true,
    builtIn: true,
  },
  {
    key: "iduo",
    name: "iduo / config.bin",
    url: "https://iduo.us.ci/gt/leevi0709/one/main/config.bin",
    requestURL: "",
    enabled: true,
    builtIn: true,
  },
];

const MAX_HOME_SOURCES = 8;
const MAX_HOME_ITEMS_PER_SOURCE = 20;
const MAX_CONCURRENT_REQUESTS = 6;
const rates = [0.75, 1, 1.25, 1.5, 2];

const state = {
  configProfiles: [],
  activeConfigProfileKey: "",
  sources: [],
  selectedSourceKeys: new Set(),
  unsupportedSourceCount: 0,
  homeVideos: [],
  videos: [],
  selectedCategory: "all",
  selectedId: "",
  selectedVideo: null,
  query: "",
  lastSearchQuery: "",
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
  searchTimer: 0,
  searchToken: 0,
};

const els = {
  app: document.getElementById("app"),
  searchInput: document.getElementById("searchInput"),
  configProfileSelect: document.getElementById("configProfileSelect"),
  configUrlInput: document.getElementById("configUrlInput"),
  loadConfigButton: document.getElementById("loadConfigButton"),
  configStatus: document.getElementById("configStatus"),
  sourceList: document.getElementById("sourceList"),
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
  restoreConfigState();
  state.history = loadHistory();
  bindGlobalEvents();
  renderAll();
  await loadActiveConfig();
}

function bindGlobalEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim();
    window.clearTimeout(state.searchTimer);

    if (!state.query) {
      state.lastSearchQuery = "";
      state.videos = state.homeVideos;
      renderCatalog();
      return;
    }

    renderCatalog();
    if (state.query.length >= 2) {
      state.searchTimer = window.setTimeout(() => searchRemoteCatalog(state.query), 450);
    }
  });

  els.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      window.clearTimeout(state.searchTimer);
      if (state.query) searchRemoteCatalog(state.query);
    }
  });

  els.configProfileSelect.addEventListener("change", async (event) => {
    state.activeConfigProfileKey = event.target.value;
    const profile = activeConfigProfile();
    els.configUrlInput.value = profile?.url || "";
    localStorage.setItem(STORAGE.activeConfigProfileKey, state.activeConfigProfileKey);
    await loadActiveConfig();
  });

  els.loadConfigButton.addEventListener("click", async () => {
    const value = els.configUrlInput.value.trim();
    if (value) activateConfigURL(value);
    await loadActiveConfig();
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

async function loadActiveConfig() {
  releasePlayer();
  state.sources = [];
  state.homeVideos = [];
  state.videos = [];
  state.selectedCategory = "all";
  state.selectedId = "";
  state.selectedVideo = null;
  state.playable = null;
  renderAll();

  const profile = activeConfigProfile();
  const input = (profile?.requestURL || profile?.url || els.configUrlInput.value || "").trim();
  if (!input) {
    setConfigStatus("请输入配置源地址", true);
    return;
  }

  setConfigStatus("正在加载配置源");
  try {
    const config = await loadConfig(input);
    state.sources = normalizeSources(config.sites, config.spider, config.baseURL);
    state.unsupportedSourceCount = state.sources.filter((source) => !isSupportedSource(source)).length;
    syncSelectedSources();
    saveSelectedSources();
    renderConfigControls();
    renderSources();
    setConfigStatus(sourceLoadSummary());
    await loadHomeCatalog();
  } catch (error) {
    console.error(error);
    setConfigStatus(readableError(error), true);
    renderAll();
  }
}

async function loadHomeCatalog() {
  const sources = selectedSources();
  if (!sources.length) {
    state.homeVideos = [];
    state.videos = [];
    renderAll();
    setConfigStatus("没有可用 HTTP 影视源", true);
    return;
  }

  setResultMeta(`正在从 ${Math.min(sources.length, MAX_HOME_SOURCES)} 个源加载首页`);
  const candidates = sources.slice(0, MAX_HOME_SOURCES);
  const sections = await mapConcurrent(candidates, MAX_CONCURRENT_REQUESTS, async (source) => {
    try {
      const items = await loadHomeItems(source);
      return items.map((item) => videoFromVod(source, item));
    } catch (error) {
      console.warn(`${source.name}: ${readableError(error)}`);
      return [];
    }
  });

  state.homeVideos = dedupeVideos(sections.flat()).slice(0, MAX_HOME_SOURCES * MAX_HOME_ITEMS_PER_SOURCE);
  if (!state.query) state.videos = state.homeVideos;
  renderAll();
}

async function searchRemoteCatalog(query) {
  const word = query.trim();
  if (!word || word === state.lastSearchQuery) return;
  const sources = selectedSources();
  if (!sources.length) {
    setResultMeta("没有可用 HTTP 影视源");
    return;
  }

  const token = ++state.searchToken;
  state.lastSearchQuery = word;
  setResultMeta(`正在搜索 ${sources.length} 个源`);

  const results = [];
  let completed = 0;
  await mapConcurrent(sources, MAX_CONCURRENT_REQUESTS, async (source) => {
    try {
      const items = await searchSource(source, word);
      results.push(...items.map((item) => videoFromVod(source, item)));
    } catch (error) {
      console.warn(`${source.name}: ${readableError(error)}`);
    } finally {
      completed += 1;
      if (token === state.searchToken) setResultMeta(`已完成 ${completed} / ${sources.length} 个源`);
    }
  });

  if (token !== state.searchToken) return;
  state.videos = dedupeVideos(results);
  renderCatalog();
}

function renderAll() {
  renderChrome();
  renderConfigControls();
  renderSources();
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

function renderConfigControls() {
  els.configProfileSelect.innerHTML = state.configProfiles.map((profile) => `
    <option value="${escapeAttr(profile.key)}">${escapeHtml(profile.name)}</option>
  `).join("");
  els.configProfileSelect.value = state.activeConfigProfileKey;
  els.configUrlInput.value = activeConfigProfile()?.url || els.configUrlInput.value || "";
}

function renderSources() {
  const supported = state.sources.filter(isSupportedSource);
  if (!supported.length) {
    els.sourceList.className = "source-list-panel empty";
    els.sourceList.textContent = state.sources.length ? "没有可用 HTTP 源" : "待加载配置";
    return;
  }

  els.sourceList.className = "source-list-panel";
  els.sourceList.innerHTML = supported.map((source) => `
    <label class="source-item">
      <input type="checkbox" value="${escapeAttr(source.key)}" ${state.selectedSourceKeys.has(source.key) ? "checked" : ""} />
      <span>
        <strong>${escapeHtml(source.name)}</strong>
        <small>${escapeHtml(source.supportLabel)}</small>
      </span>
    </label>
  `).join("");

  els.sourceList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", async () => {
      if (input.checked) {
        state.selectedSourceKeys.add(input.value);
      } else {
        state.selectedSourceKeys.delete(input.value);
      }
      saveSelectedSources();
      await loadHomeCatalog();
    });
  });
}

function renderCategories() {
  const allCount = state.videos.length;
  const categories = buildCategories(state.videos);
  const buttons = [
    { id: "all", name: "全部", count: allCount },
    ...categories,
  ];
  els.categoryList.innerHTML = buttons.map((item) => `
    <button class="category-button ${state.selectedCategory === item.id ? "active" : ""}" type="button" data-category="${escapeAttr(item.id)}">
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
  setResultMeta(`${videos.length} 部影片`);
  els.videoList.className = `video-grid${state.listMode ? " list-mode" : ""}`;

  if (!videos.length) {
    els.videoList.innerHTML = `<div class="loader">${state.sources.length ? "没有匹配结果" : "正在加载片库"}</div>`;
    return;
  }

  els.videoList.innerHTML = videos.map((video) => `
    <article class="video-card ${state.selectedId === video.id ? "active" : ""}" data-id="${escapeAttr(video.id)}" tabindex="0">
      <div class="poster">
        ${video.cover ? `<img src="${escapeAttr(video.cover)}" alt="${escapeAttr(video.name || "视频封面")}" loading="lazy" referrerpolicy="no-referrer" />` : ""}
        <span class="poster-badge">${escapeHtml(video.latestEpisode || video.source.name)}</span>
      </div>
      <div class="video-info">
        <div class="video-title">${escapeHtml(video.name || "未命名")}</div>
        <div class="video-meta">
          <span>${escapeHtml(video.category?.name || "未分类")}</span>
          <span>${escapeHtml(video.source.name || "")}</span>
        </div>
      </div>
    </article>
  `).join("");

  els.videoList.querySelectorAll(".video-card").forEach((card) => {
    const open = () => selectVideo(card.dataset.id);
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
    <button class="history-item" type="button" data-id="${escapeAttr(item.id)}">
      <div class="history-title">${escapeHtml(item.name)}</div>
      <div class="history-meta">${escapeHtml(item.episodeName || item.sourceName || "")} · ${formatTime(item.currentTime || 0)}</div>
    </button>
  `).join("");

  els.historyList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => selectVideo(button.dataset.id, true));
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

  const history = findHistory(video.id);
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
        <span class="tag">${escapeHtml(video.source.name || "未知源")}</span>
        <span class="tag">${escapeHtml(video.category?.name || "未分类")}</span>
        ${video.latestEpisode ? `<span class="tag">${escapeHtml(video.latestEpisode)}</span>` : ""}
      </div>
      <p class="detail-intro">${escapeHtml(video.intro || "暂无简介")}</p>
      ${renderPlayableSection(video, history)}
    </div>
  `;

  document.getElementById("detailClose")?.addEventListener("click", closeDetail);
  bindDetailEvents();
  syncDetailMode();
}

function renderPlayableSection(video, history) {
  if (!state.playable || state.playable.id !== video.id) {
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
    <div id="playSourceList" class="source-list">
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

async function selectVideo(id, fromHistory = false) {
  const video = state.videos.find((item) => item.id === id)
    || state.homeVideos.find((item) => item.id === id)
    || historyVideo(id);
  if (!video) return;

  releasePlayer();
  state.selectedId = id;
  state.selectedVideo = video;
  state.playable = null;
  state.detailOpen = true;
  const history = findHistory(id);
  state.episodeIndex = fromHistory && history ? history.episodeIndex || 0 : 0;
  state.sourceIndex = fromHistory && history ? history.sourceIndex || 0 : 0;
  renderCatalog();
  renderDetail();
  if (fromHistory) await loadPlayableForSelected();
}

function closeDetail() {
  state.detailOpen = false;
  releasePlayer();
  syncDetailMode();
}

async function loadPlayableForSelected() {
  if (!state.selectedVideo) return;
  setStatus("detailStatus", "加载播放数据中");
  try {
    const video = state.selectedVideo;
    const detail = await loadDetail(video.source, video.item);
    const playable = normalizePlayable(video, detail);
    state.playable = playable;
    state.selectedVideo = { ...video, item: detail, intro: detail.vodContent || video.intro };
    const history = findHistory(video.id);
    if (history) {
      state.episodeIndex = clamp(history.episodeIndex || 0, 0, state.playable.episodes.length - 1);
      const sources = state.playable.episodes[state.episodeIndex]?.sources || [];
      state.sourceIndex = clamp(history.sourceIndex || 0, 0, Math.max(0, sources.length - 1));
    }
    renderDetail();
  } catch (error) {
    console.error(error);
    setStatus("detailStatus", readableError(error), true);
  }
}

async function loadCurrentSource(options = {}) {
  const player = document.getElementById("player");
  const episode = state.playable?.episodes[state.episodeIndex];
  const source = episode?.sources?.[state.sourceIndex];
  if (!player || !source?.url) return;

  const keepTime = Number(options.resumeAt || state.pendingResumeAt || (options.keepTime ? player.currentTime : 0));
  state.pendingResumeAt = 0;
  setStatus("playerStatus", source.name || "加载中");

  if (state.hls) {
    state.hls.destroy();
    state.hls = null;
  }

  try {
    const resolved = await resolvePlaybackURL(source.url, state.playable.source);
    if (isHlsUrl(resolved) && !player.canPlayType("application/vnd.apple.mpegurl") && window.MediaSource) {
      const Hls = await ensureHls();
      if (Hls?.isSupported()) {
        state.hls = new Hls({ enableWorker: true, lowLatencyMode: true });
        state.hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data?.fatal) setStatus("playerStatus", "当前线路播放异常", true);
        });
        state.hls.loadSource(resolved);
        state.hls.attachMedia(player);
      } else {
        player.src = resolved;
      }
    } else {
      player.src = resolved;
    }
  } catch (error) {
    console.warn(error);
    player.src = source.url;
    setStatus("playerStatus", "解析失败，尝试原始地址", true);
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
    id: state.selectedVideo.id,
    name: state.selectedVideo.name,
    cover: state.selectedVideo.cover,
    sourceKey: state.selectedVideo.source.key,
    sourceName: state.selectedVideo.source.name,
    item: state.selectedVideo.item,
    episodeIndex: state.episodeIndex,
    sourceIndex: state.sourceIndex,
    episodeName: episode.name,
    currentTime: Math.floor(player.currentTime || 0),
    duration: Math.floor(player.duration || 0),
    updatedAt: Date.now(),
  };
  state.history = [item, ...state.history.filter((entry) => entry.id !== item.id)].slice(0, 60);
  localStorage.setItem(STORAGE.history, JSON.stringify(state.history));
  renderHistory();
}

function seekFromHistory(player) {
  const history = findHistory(state.selectedVideo?.id);
  if (!history || history.episodeIndex !== state.episodeIndex) return;
  const resumeAt = Number(player.dataset.resumeAt || history.currentTime || 0);
  if (resumeAt > 5 && player.duration && resumeAt < player.duration - 6) {
    player.currentTime = resumeAt;
  }
  delete player.dataset.resumeAt;
}

async function loadConfig(input, visited = new Set()) {
  const url = configURL(input);
  if (!url || visited.has(url.href) || visited.size >= 10) throw new Error("配置源地址无效");
  visited.add(url.href);

  const response = await fetchText(url.href);
  const baseURL = response.url || url.href;
  const config = decodeConfig(response.text, baseURL);
  if (config) return config;

  const warehouse = decodeWarehouse(response.text);
  if (warehouse?.length) {
    const sites = [];
    const seen = new Set();
    let lastError = null;
    for (const entry of warehouse.slice(0, 12)) {
      try {
        const candidate = new URL(htmlUnescaped(entry.url), baseURL).href;
        const child = await loadConfig(candidate, visited);
        for (const source of child.sites || []) {
          const key = source.key || `${source.name}:${source.api}`;
          if (seen.has(key)) continue;
          seen.add(key);
          sites.push(source);
        }
      } catch (error) {
        lastError = error;
      }
    }
    if (sites.length) return { sites, spider: null, baseURL };
    if (lastError) throw lastError;
  }

  for (const candidate of configCandidates(response.text, baseURL)) {
    try {
      return await loadConfig(candidate, visited);
    } catch (error) {
      console.warn(error);
    }
  }
  throw new Error("配置源无法解析");
}

function decodeConfig(raw, baseURL) {
  const candidates = [raw, cleanedJSONText(raw), decodeBase64(raw.trim())]
    .filter(Boolean);
  candidates.push(...base64Candidates(raw).map(decodeBase64).filter(Boolean));

  for (const text of candidates) {
    const value = parseJSON(text);
    if (value?.sites?.length) {
      return { sites: value.sites, spider: value.spider || value.jar || null, baseURL };
    }
  }
  return null;
}

function decodeWarehouse(raw) {
  for (const text of [raw, cleanedJSONText(raw)]) {
    const value = parseJSON(text);
    if (!value) continue;
    if (Array.isArray(value)) return value.map(normalizeWarehouseEntry).filter(Boolean);
    if (Array.isArray(value.storeHouse)) return value.storeHouse.map(normalizeWarehouseEntry).filter(Boolean);
    if (Array.isArray(value.urls)) return value.urls.map(normalizeWarehouseEntry).filter(Boolean);
    const url = stringField(value, ["sourceUrl", "url"]);
    if (url) return [{ name: stringField(value, ["sourceName", "name"]) || url, url }];
  }
  return [];
}

function normalizeWarehouseEntry(entry) {
  if (!entry || typeof entry !== "object") return null;
  const url = stringField(entry, ["sourceUrl", "url"]);
  if (!url) return null;
  return { name: stringField(entry, ["sourceName", "name"]) || url, url };
}

function normalizeSources(sources, spider, baseURL) {
  return (sources || []).map((source, index) => {
    const key = String(source.key || source.name || `source-${index}`);
    const api = resolveMaybeURL(String(source.api || ""), baseURL);
    const ext = resolveMaybeURL(stringField(source, ["ext"]), baseURL);
    const script = resolveMaybeURL(stringField(source, ["script", "js"]) || (looksLikeJavaScriptPath(spider) ? spider : ""), baseURL);
    const headers = normalizeHeaders(source.header, source.headers);
    const normalized = {
      ...source,
      key,
      name: String(source.name || key),
      type: numberValue(source.type, -1),
      api,
      ext,
      script,
      searchable: numberValue(source.searchable, 1),
      quickSearch: numberValue(source.quickSearch, 1),
      headers,
    };
    normalized.supportLabel = isStandardSource(normalized) ? "HTTP" : (isJavaScriptSource(normalized) ? "JS Spider 未启用" : "待迁移");
    return normalized;
  }).filter((source) => source.api);
}

async function loadHomeItems(source) {
  const response = await firstVODResponse(source, [
    { ac: "videolist", pg: "1" },
    { ac: "videolist" },
    { pg: "1" },
    { ac: "detail", pg: "1" },
    { ac: "list" },
    {},
  ]);
  const items = response.list.slice();
  if (!items.length && response.categories.length) {
    for (const category of response.categories.slice(0, 6)) {
      try {
        const categoryResponse = await firstVODResponse(source, [
          { ac: "videolist", t: category.typeId, pg: "1" },
          { t: category.typeId, pg: "1" },
        ]);
        items.push(...categoryResponse.list);
        if (items.length >= MAX_HOME_ITEMS_PER_SOURCE) break;
      } catch {
        continue;
      }
    }
  }
  return items.slice(0, MAX_HOME_ITEMS_PER_SOURCE);
}

async function searchSource(source, keyword) {
  const response = await firstVODResponse(source, [
    { ac: "videolist", wd: keyword },
    { ac: "videolist", wd: keyword, pg: "1" },
    { ac: "videolist", wd: keyword, quick: "false" },
    { wd: keyword },
    { wd: keyword, pg: "1" },
    { ac: "detail", wd: keyword },
    { searchword: keyword },
    { keyword },
  ]);
  return response.list;
}

async function loadDetail(source, item) {
  const response = await firstVODResponse(source, [
    { ac: "detail", ids: item.vodId },
    { ids: item.vodId },
  ], true);
  return response.list[0] || item;
}

async function firstVODResponse(source, parameterSets, allowEmpty = false) {
  let lastError = null;
  let emptyResponse = null;
  for (const parameters of parameterSets) {
    try {
      const url = endpoint(source, parameters);
      const data = await fetchText(url, source.headers);
      const response = decodeVODResponse(data.text);
      if (allowEmpty || response.list.length) return response;
      emptyResponse = response;
    } catch (error) {
      lastError = error;
    }
  }
  if (emptyResponse) return emptyResponse;
  if (lastError) throw lastError;
  return { list: [], categories: [] };
}

function decodeVODResponse(raw) {
  if (looksLikeUnsupportedSearchResponse(raw)) return { list: [], categories: [] };
  for (const text of [raw, cleanedJSONText(raw)]) {
    const value = parseJSON(text);
    if (!value) continue;
    const list = vodListArray(value).map(normalizeVodItem).filter(Boolean);
    const categories = categoryArray(value).map(normalizeCategory).filter(Boolean);
    if (list.length || categories.length) return { list, categories };
  }
  if (raw.trim().startsWith("<")) return decodeXMLVODResponse(raw);
  throw new Error("接口返回无法解析");
}

function vodListArray(value) {
  if (Array.isArray(value) && value.some(looksLikeVodItem)) return value;
  if (!value || typeof value !== "object") return [];
  for (const key of ["list", "videos", "items", "records", "rows", "vodrows"]) {
    const nested = vodListArray(value[key]);
    if (nested.length) return nested;
  }
  for (const key of ["data", "result", "results"]) {
    const nested = vodListArray(value[key]);
    if (nested.length) return nested;
  }
  return [];
}

function categoryArray(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return [];
  for (const key of ["class", "categories", "types"]) {
    if (Array.isArray(value[key])) return value[key];
  }
  for (const key of ["data", "result"]) {
    const nested = categoryArray(value[key]);
    if (nested.length) return nested;
  }
  return [];
}

function looksLikeVodItem(item) {
  if (!item || typeof item !== "object") return false;
  const keys = Object.keys(item).map((key) => key.toLowerCase());
  const hasIdentity = keys.some((key) => ["vod_id", "id", "vodid", "vod_name", "name", "title"].includes(key));
  const isCategoryOnly = keys.includes("type_id") && keys.includes("type_name") && keys.length <= 4;
  return hasIdentity && !isCategoryOnly;
}

function normalizeVodItem(item) {
  const vodId = stringField(item, ["vod_id", "id", "vodid"]);
  const vodName = stringField(item, ["vod_name", "name", "title"]);
  if (!vodId && !vodName) return null;
  return {
    vodId: vodId || vodName,
    vodName: vodName || vodId || "未命名",
    vodPic: stringField(item, ["vod_pic", "pic", "img", "poster"]),
    vodRemarks: stringField(item, ["vod_remarks", "remarks", "remark"]),
    typeName: stringField(item, ["type_name", "type"]),
    vodYear: stringField(item, ["vod_year", "year"]),
    vodArea: stringField(item, ["vod_area", "area"]),
    vodContent: stripTags(stringField(item, ["vod_content", "content", "desc"])),
    vodPlayFrom: stringField(item, ["vod_play_from", "play_from", "playFrom"]),
    vodPlayUrl: stringField(item, ["vod_play_url", "play_url", "playUrl"]),
  };
}

function normalizeCategory(item) {
  const typeId = stringField(item, ["type_id", "id"]);
  const typeName = stringField(item, ["type_name", "name"]);
  return typeId || typeName ? { typeId: typeId || typeName, typeName: typeName || typeId } : null;
}

function decodeXMLVODResponse(xml) {
  const bodies = regexCaptures(/<list\b[^>]*>([\s\S]*?)<\/list>/gi, xml);
  const roots = bodies.length ? bodies : [xml];
  const videos = roots.flatMap((body) => regexCaptures(/<video\b[^>]*>([\s\S]*?)<\/video>/gi, body));
  return {
    list: videos.map((body) => normalizeVodItem({
      vod_id: xmlTag("id", body) || xmlTag("vod_id", body),
      vod_name: xmlTag("name", body) || xmlTag("vod_name", body),
      vod_pic: xmlTag("pic", body) || xmlTag("vod_pic", body),
      vod_remarks: xmlTag("note", body) || xmlTag("remarks", body),
      type_name: xmlTag("type", body) || xmlTag("type_name", body),
      vod_year: xmlTag("year", body),
      vod_area: xmlTag("area", body),
      vod_content: xmlTag("des", body) || xmlTag("vod_content", body),
      ...xmlPlayValues(body),
    })).filter(Boolean),
    categories: [],
  };
}

function xmlTag(name, xml) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`<${escaped}\\b[^>]*>([\\s\\S]*?)<\\/${escaped}>`, "i").exec(xml);
  return stripTags(stripCDATA(htmlUnescaped(match?.[1] || ""))).trim();
}

function xmlPlayValues(xml) {
  const names = [];
  const urls = [];
  for (const match of xml.matchAll(/<dd\b([^>]*)>([\s\S]*?)<\/dd>/gi)) {
    const attrs = match[1] || "";
    const flag = /flag\s*=\s*["']([^"']+)["']/i.exec(attrs)?.[1] || `线路 ${names.length + 1}`;
    const value = stripTags(stripCDATA(htmlUnescaped(match[2] || ""))).trim();
    if (!value) continue;
    names.push(flag);
    urls.push(value);
  }
  if (urls.length) return { vod_play_from: names.join("$$$"), vod_play_url: urls.join("$$$") };
  return {
    vod_play_from: xmlTag("vod_play_from", xml) || xmlTag("play_from", xml),
    vod_play_url: xmlTag("vod_play_url", xml) || xmlTag("play_url", xml),
  };
}

function videoFromVod(source, item) {
  const id = `${source.key}:${item.vodId}`;
  const categoryName = item.typeName || source.name;
  return {
    id,
    source,
    item,
    name: item.vodName || "未命名",
    cover: absolutizeMediaURL(item.vodPic, source.api),
    latestEpisode: item.vodRemarks,
    category: { id: categoryName, name: categoryName },
    language: item.vodArea || item.vodYear,
    intro: item.vodContent,
    searchText: [
      item.vodName,
      item.vodRemarks,
      item.typeName,
      item.vodYear,
      item.vodArea,
      item.vodContent,
      source.name,
    ].filter(Boolean).join(" ").toLowerCase(),
  };
}

function normalizePlayable(video, item) {
  const names = splitPlayField(item.vodPlayFrom);
  const rawGroups = splitPlayField(item.vodPlayUrl);
  const directGroups = rawGroups.map((rawGroup, groupIndex) => {
    const lineName = names[groupIndex] || `线路 ${groupIndex + 1}`;
    const episodes = rawGroup.split("#").map((rawEpisode, episodeIndex) => {
      const parts = rawEpisode.split("$");
      const title = (parts.shift() || "").trim();
      const requestUrl = parts.join("$").trim() || rawEpisode.trim();
      return {
        name: title || `第 ${episodeIndex + 1} 集`,
        requestUrl,
      };
    }).filter((episode) => episode.requestUrl);
    return { name: lineName, episodes };
  }).filter((group) => group.episodes.length);

  if (!directGroups.length) throw new Error("详情未返回播放线路");

  const episodeCount = Math.max(...directGroups.map((group) => group.episodes.length));
  const episodes = [];
  for (let episodeIndex = 0; episodeIndex < episodeCount; episodeIndex += 1) {
    const firstEpisode = directGroups.find((group) => group.episodes[episodeIndex])?.episodes[episodeIndex];
    const sources = directGroups.map((group) => {
      const episode = group.episodes[episodeIndex];
      return episode ? { name: group.name, url: episode.requestUrl } : null;
    }).filter(Boolean);
    if (sources.length) {
      episodes.push({
        name: firstEpisode?.name || `第 ${episodeIndex + 1} 集`,
        order: episodeIndex,
        sources,
      });
    }
  }

  return { id: video.id, source: video.source, name: video.name, episodes };
}

async function resolvePlaybackURL(value, source) {
  const trimmed = String(value || "").trim();
  if (!trimmed) throw new Error("播放地址为空");
  if (looksDirectPlayback(trimmed)) return absolutizeMediaURL(trimmed, source.api);

  const url = absolutizeMediaURL(trimmed, source.api);
  const response = await fetchText(url, source.headers);
  const text = htmlUnescaped(response.text)
    .replace(/\\\//g, "/")
    .replace(/\\u002f/gi, "/");
  const candidates = playbackURLCandidates(text, response.url || url);
  if (!candidates.length) throw new Error("无法解析播放直链");
  return candidates[0];
}

function playbackURLCandidates(text, baseURL) {
  const values = [
    ...regexCaptures(/["']([^"']+\.(?:m3u8|mp4|mpd|mov|mkv|ts)(?:\?[^"']*)?)["']/gi, text),
    ...regexCaptures(/(https?:\/\/[^\s"'<>\\]+\.(?:m3u8|mp4|mpd|mov|mkv|ts)(?:\?[^\s"'<>\\]+)?)/gi, text),
  ];
  const seen = new Set();
  return values.map((raw) => absolutizeMediaURL(raw, baseURL))
    .filter((url) => looksDirectPlayback(url))
    .filter((url) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
}

function endpoint(source, parameters) {
  const url = new URL(source.api);
  const finalParameters = { ...parameters };
  if (source.type === 4 && source.ext && finalParameters.ext == null) {
    finalParameters.ext = utf8Base64(source.ext);
  }
  for (const [key, value] of Object.entries(finalParameters).sort()) {
    url.searchParams.delete(key);
    url.searchParams.set(key, value);
  }
  return url.href;
}

async function fetchText(url, headers = {}) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: allowedFetchHeaders(headers),
  });
  if (!response.ok) throw new Error(`请求失败 ${response.status}`);
  return { text: await response.text(), url: response.url || url };
}

function allowedFetchHeaders(headers) {
  const blocked = new Set(["user-agent", "referer", "origin", "host", "cookie"]);
  const next = {};
  for (const [key, value] of Object.entries(headers || {})) {
    if (!value || blocked.has(key.toLowerCase())) continue;
    next[key] = value;
  }
  return next;
}

function configURL(input) {
  const trimmed = String(input || "")
    .trim()
    .replace(/www\.影视仓\.com/g, "www.xn--5mqx81b535a.com")
    .replace(/影视仓\.com/g, "xn--5mqx81b535a.com")
    .replace(/www\.饭太硬\.com/g, "www.xn--sss604efuw.com")
    .replace(/饭太硬\.com/g, "xn--sss604efuw.com")
    .replace(/www\.饭太硬\.net/g, "www.xn--sss604efuw.net")
    .replace(/饭太硬\.net/g, "xn--sss604efuw.net")
    .replace(/www\.饭太硬\.cc/g, "www.xn--sss604efuw.cc")
    .replace(/饭太硬\.cc/g, "xn--sss604efuw.cc");
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    return ["http:", "https:"].includes(url.protocol) ? url : null;
  } catch {
    return null;
  }
}

function configCandidates(text, baseURL) {
  const values = [];
  if (text.includes("影视仓") || text.includes("700sjro44343.vicp.fun")) {
    values.push("https://700sjro44343.vicp.fun/vip/vip/tv.json");
  }
  if (text.includes("饭太硬") || text.includes("cdn09022024.gitlink.org.cn")) {
    values.push("http://www.xn--sss604efuw.net/tv");
    values.push("https://cdn09022024.gitlink.org.cn/api/v1/repos/xxooo/in/raw/in.bmp");
  }
  values.push(...regexCaptures(/(?:data-copy|data-clipboard-text|href|src)\s*=\s*["']([^"']+)["']/gi, text));
  values.push(...regexCaptures(/https?:\/\/[^\s"'<>\\]+/gi, text, 0));

  const seen = new Set();
  return values.map((value) => candidateURL(value, baseURL))
    .filter(Boolean)
    .map((url) => ({ url, score: configCandidateScore(url, baseURL) }))
    .filter((item) => item.score > 0 && !seen.has(item.url) && seen.add(item.url))
    .sort((a, b) => b.score - a.score || a.url.length - b.url.length)
    .map((item) => item.url);
}

function candidateURL(value, baseURL) {
  let raw = htmlUnescaped(String(value || "")).trim().replace(/^["'`<]+|[>"'`]+$/g, "");
  if (!raw || raw.startsWith("#") || raw.toLowerCase().startsWith("javascript:")) return "";
  if (raw.startsWith("//")) raw = `${new URL(baseURL).protocol}${raw}`;
  try {
    return new URL(raw, baseURL).href;
  } catch {
    return "";
  }
}

function configCandidateScore(url, baseURL) {
  const parsed = new URL(url);
  const absolute = parsed.href.toLowerCase();
  const path = parsed.pathname.toLowerCase();
  if (absolute === String(baseURL).toLowerCase()) return 0;
  if (/\.(jpe?g|png|gif|webp|ico|svg|css|js)$/i.test(path)) return 0;
  let score = 0;
  if (path.endsWith(".json")) score += 70;
  if (absolute.includes("config")) score += 55;
  if (absolute.includes("tvbox")) score += 50;
  if (path.endsWith(".bin")) score += 48;
  if (path.endsWith(".bmp")) score += 45;
  if (absolute.includes("/tv") || path === "/tv") score += 38;
  if (absolute.includes("/one") || absolute.includes("duo")) score += 34;
  if (absolute.includes("api.php") || absolute.includes("provide/vod")) score += 25;
  if (absolute.includes("githubusercontent") || absolute.includes("gitlink.org.cn")) score += 14;
  if (parsed.host === new URL(baseURL).host) score += 6;
  return score;
}

function isSupportedSource(source) {
  return isStandardSource(source) && source.searchable !== 0 && !isIgnoredSource(source);
}

function isStandardSource(source) {
  return [0, 1, 4].includes(source.type) && /^https?:\/\//i.test(source.api);
}

function isJavaScriptSource(source) {
  return source.type === 3 && looksLikeJavaScriptPath(source.script || source.api || "");
}

function isIgnoredSource(source) {
  const value = [source.key, source.name, source.api, source.ext, source.script, source.jar]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return ["看球", "体育", "球赛", "赛事", "足球", "篮球", "nba", "cba", "英超", "西甲", "欧冠", "世界杯", "88js", "sport"]
    .some((keyword) => value.includes(keyword));
}

function selectedSources() {
  const supported = state.sources.filter(isSupportedSource);
  const keys = state.selectedSourceKeys;
  return supported.filter((source) => !keys.size || keys.has(source.key));
}

function syncSelectedSources() {
  const supportedKeys = new Set(state.sources.filter(isSupportedSource).map((source) => source.key));
  state.selectedSourceKeys = new Set([...state.selectedSourceKeys].filter((key) => supportedKeys.has(key)));
  if (!state.selectedSourceKeys.size) {
    state.selectedSourceKeys = new Set([...supportedKeys].slice(0, MAX_HOME_SOURCES));
  }
}

function sourceLoadSummary() {
  const supported = state.sources.filter(isSupportedSource).length;
  const js = state.sources.filter(isJavaScriptSource).length;
  const ignored = state.sources.filter(isIgnoredSource).length;
  const parts = [`共 ${state.sources.length} 个源`, `可用 HTTP ${supported} 个`];
  if (js) parts.push(`JS 待启用 ${js} 个`);
  if (state.unsupportedSourceCount) parts.push(`待迁移 ${state.unsupportedSourceCount} 个`);
  if (ignored) parts.push(`已忽略体育 ${ignored} 个`);
  return parts.join("，");
}

function buildCategories(videos) {
  const counts = new Map();
  for (const video of videos) {
    const key = video.category?.id || "未分类";
    const name = video.category?.name || key;
    counts.set(key, { id: key, name, count: (counts.get(key)?.count || 0) + 1 });
  }
  return [...counts.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "zh-CN"));
}

function getFilteredVideos() {
  const query = state.query.toLowerCase();
  let videos = state.videos.filter((video) => {
    const categoryMatched = state.selectedCategory === "all" || video.category?.id === state.selectedCategory;
    const queryMatched = !query || video.searchText.includes(query) || state.lastSearchQuery === state.query;
    return categoryMatched && queryMatched;
  });

  if (state.sort === "name") {
    videos = videos.slice().sort((a, b) => String(a.name).localeCompare(String(b.name), "zh-CN"));
  }
  if (state.sort === "episodes") {
    videos = videos.slice().sort((a, b) => episodeHint(b) - episodeHint(a));
  }
  return videos;
}

function episodeHint(video) {
  return Number(String(video.latestEpisode || "").match(/\d+/)?.[0] || 0);
}

function dedupeVideos(videos) {
  const seen = new Set();
  return videos.filter((video) => {
    const key = video.id || `${video.source.key}:${video.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function activeConfigProfile() {
  return state.configProfiles.find((profile) => profile.key === state.activeConfigProfileKey) || state.configProfiles[0];
}

function activateConfigURL(url) {
  const existing = state.configProfiles.find((profile) => profile.url === url || profile.requestURL === url);
  if (existing) {
    state.activeConfigProfileKey = existing.key;
  } else {
    const profile = {
      key: `custom-${Date.now()}`,
      name: "自定义配置",
      url,
      requestURL: "",
      enabled: true,
      builtIn: false,
    };
    state.configProfiles = [profile, ...state.configProfiles];
    state.activeConfigProfileKey = profile.key;
    saveConfigProfiles();
  }
  localStorage.setItem(STORAGE.activeConfigProfileKey, state.activeConfigProfileKey);
  renderConfigControls();
}

function restoreConfigState() {
  const savedProfiles = parseJSON(localStorage.getItem(STORAGE.configProfiles) || "[]");
  const profiles = mergeDefaultProfiles(Array.isArray(savedProfiles) ? savedProfiles : []);
  state.configProfiles = profiles;
  const savedActive = localStorage.getItem(STORAGE.activeConfigProfileKey);
  state.activeConfigProfileKey = profiles.some((profile) => profile.key === savedActive) ? savedActive : profiles[0]?.key || "";
  state.selectedSourceKeys = new Set(parseJSON(localStorage.getItem(STORAGE.selectedSourceKeys) || "[]") || []);
}

function mergeDefaultProfiles(profiles) {
  const byKey = new Map();
  for (const profile of [...profiles, ...DEFAULT_CONFIG_PROFILES]) {
    if (!profile?.key || byKey.has(profile.key)) continue;
    byKey.set(profile.key, profile);
  }
  return [...byKey.values()].filter((profile) => profile.enabled !== false);
}

function saveConfigProfiles() {
  localStorage.setItem(STORAGE.configProfiles, JSON.stringify(state.configProfiles));
  localStorage.setItem(STORAGE.activeConfigProfileKey, state.activeConfigProfileKey);
}

function saveSelectedSources() {
  localStorage.setItem(STORAGE.selectedSourceKeys, JSON.stringify([...state.selectedSourceKeys].sort()));
}

function loadHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.history) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function findHistory(id) {
  return state.history.find((item) => item.id === id);
}

function historyVideo(id) {
  const item = findHistory(id);
  if (!item) return null;
  const source = state.sources.find((entry) => entry.key === item.sourceKey) || {
    key: item.sourceKey || "history",
    name: item.sourceName || "历史源",
    api: "",
    type: 0,
    headers: {},
  };
  return videoFromVod(source, item.item || {
    vod_id: id,
    vod_name: item.name,
    vod_pic: item.cover,
  });
}

function splitPlayField(value) {
  return String(value || "").split("$$$").map((item) => item.trim()).filter(Boolean);
}

function stringField(source, names) {
  if (!source || typeof source !== "object") return "";
  for (const name of names) {
    const value = source[name];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number" || typeof value === "boolean") return String(value);
  }
  return "";
}

function numberValue(value, fallback) {
  if (value === "" || value == null) return fallback;
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function normalizeHeaders(...values) {
  return values.reduce((headers, value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return headers;
    for (const [key, item] of Object.entries(value)) headers[key] = String(item);
    return headers;
  }, {});
}

function resolveMaybeURL(value, baseURL) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  if (trimmed.includes(";")) {
    return trimmed.split(";").map((part) => resolveMaybeURL(part, baseURL)).filter(Boolean).join(";");
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return trimmed;
  try {
    return new URL(trimmed, baseURL).href;
  } catch {
    return trimmed;
  }
}

function absolutizeMediaURL(value, baseURL) {
  let raw = String(value || "").trim();
  if (raw.startsWith("//")) {
    try {
      raw = `${new URL(baseURL).protocol}${raw}`;
    } catch {
      raw = `https:${raw}`;
    }
  }
  try {
    return new URL(raw, baseURL).href;
  } catch {
    return raw;
  }
}

function parseJSON(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function cleanedJSONText(raw) {
  let value = String(raw || "")
    .trim()
    .replace(/^\uFEFF/, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/,\s*([}\]])/g, "$1");
  if (!value.trim().startsWith("{")) {
    const start = value.indexOf("{");
    const end = value.lastIndexOf("}");
    if (start >= 0 && end > start) value = value.slice(start, end + 1);
  }
  return value;
}

function decodeBase64(value) {
  const normalized = String(value || "").trim().replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
  if (normalized.length < 40) return "";
  try {
    const binary = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "="));
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return "";
  }
}

function base64Candidates(text) {
  return regexCaptures(/[A-Za-z0-9+/_-]{80,}={0,2}/g, text, 0);
}

function utf8Base64(value) {
  const bytes = new TextEncoder().encode(String(value));
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function regexCaptures(pattern, text, captureIndex = 1) {
  return [...String(text || "").matchAll(pattern)]
    .map((match) => match[captureIndex] || "")
    .filter(Boolean);
}

function stripCDATA(value) {
  return String(value || "")
    .replace(/^\s*<!\[CDATA\[/i, "")
    .replace(/\]\]>\s*$/i, "");
}

function stripTags(value) {
  return String(value || "").replace(/<[^>]*>/g, "");
}

function htmlUnescaped(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#34;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function looksLikeJavaScriptPath(value) {
  return String(value || "").split(";")[0].trim().toLowerCase().includes(".js");
}

function looksLikeUnsupportedSearchResponse(raw) {
  const lower = String(raw || "").toLowerCase();
  return raw.includes("暂不支持搜索")
    || raw.includes("不支持搜索")
    || lower.includes("search not supported")
    || lower.includes("not support search");
}

function looksDirectPlayback(value) {
  return /\.(m3u8|mp4|mpd|mov|mkv|ts)(\?|#|$)/i.test(String(value || ""));
}

function isHlsUrl(url) {
  return /\.m3u8(\?|#|$)/i.test(url);
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

function setConfigStatus(text, isError = false) {
  els.configStatus.textContent = text;
  els.configStatus.classList.toggle("error", isError);
}

function setResultMeta(text) {
  els.resultMeta.textContent = text;
}

function setStatus(id, text, isError = false) {
  const target = document.getElementById(id);
  if (!target) return;
  target.textContent = text;
  target.classList.toggle("error", isError);
}

function readableError(error) {
  if (error instanceof TypeError && /fetch/i.test(error.message)) {
    return "请求失败，可能是配置源或站点不允许浏览器跨域访问";
  }
  return error?.message || String(error);
}

async function mapConcurrent(items, limit, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
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
