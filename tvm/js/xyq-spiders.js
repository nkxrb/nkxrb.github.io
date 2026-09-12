const DEFAULT_TIMEOUT_MS = 15000;
const MEDIA_RE = /\.(?:m3u8|mp4|mpd|mkv|webm|flv|avi|mov|ts)(?:$|[?#])/i;
const XYQ_STRING_KEY = 'QrNKWf';

const SOURCE_DEFINITIONS = {
  csp_JianPian: {
    key: 'jianpian',
    name: '荐片',
    status: 'implemented',
    base: 'https://api2.rinhome.com',
    headers: {
      'User-Agent': 'jianpian-version365',
      Referer: 'www.jianpianapp.com'
    }
  },
  csp_New6v: {
    key: 'new6v',
    name: '新6V',
    status: 'implemented',
    base: 'https://www.xb6v.com',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.54 Safari/537.36',
      Referer: 'https://www.xb6v.com/'
    }
  },
  csp_AppYs: {
    key: 'appys',
    name: 'App影视',
    status: 'blocked',
    reason: 'XYQ AppYs multiplexes many api.php/app variants and external parse APIs; source-specific ext data is required before generating a deterministic browser spider.'
  },
  csp_Bdys: {
    key: 'bdys',
    name: '哔嘀影视',
    status: 'blocked',
    reason: 'XYQ Bdys playerContent contains AES and session-bound line resolution; port after collecting matching runtime samples from the Android spider.'
  },
  csp_Kuaikan: {
    key: 'kuaikan',
    name: '快看',
    status: 'blocked',
    reason: 'XYQ Kuaikan uses signed API requests, RSA/AES helpers, login/config state, and callback classes; port as a separate pass.'
  }
};

function withTimeout(signal, timeoutMs = DEFAULT_TIMEOUT_MS) {
  if (signal) return signal;
  if (typeof AbortSignal !== 'undefined' && AbortSignal.timeout) return AbortSignal.timeout(timeoutMs);
  return undefined;
}

function headers(definition, extra) {
  const values = { ...(definition.headers || {}), ...(extra || {}) };
  for (const name of Object.keys(values)) {
    if (values[name] == null || values[name] === '') delete values[name];
  }
  if (typeof window === 'undefined') return values;
  for (const name of Object.keys(values)) {
    if (/^(?:user-agent|referer|host|origin|cookie|content-length)$/i.test(name)) delete values[name];
  }
  return values;
}

function sourceBase(source, definition) {
  return String(source?.ext || source?.base || definition.base || '').replace(/\/+$/, '');
}

function absoluteUrl(value, base) {
  if (!value) return '';
  try {
    return new URL(value, `${base}/`).href;
  } catch {
    return String(value);
  }
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers: options.headers || {},
    body: options.body,
    signal: withTimeout(options.signal, options.timeoutMs)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} ${url}`);
  return response.text();
}

async function fetchJson(url, options = {}) {
  const text = await fetchText(url, options);
  return JSON.parse(text);
}

function parseHtml(text) {
  if (typeof DOMParser === 'undefined') {
    throw new Error('DOMParser is required. Load this spider in a browser runtime.');
  }
  return new DOMParser().parseFromString(text, 'text/html');
}

function textOf(node) {
  return String(node?.textContent || '').replace(/\s+/g, ' ').trim();
}

function attr(node, name) {
  return String(node?.getAttribute?.(name) || '').trim();
}

function pick(...values) {
  return values.map(value => String(value ?? '').trim()).find(Boolean) || '';
}

function stripHtml(value) {
  return String(value || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

function decodeHtmlEntities(value) {
  return String(value || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function htmlAttr(markup, name) {
  const pattern = new RegExp(`${name}\\s*=\\s*([\"'])(.*?)\\1`, 'i');
  return decodeHtmlEntities(markup.match(pattern)?.[2] || '');
}

function firstHtmlMatch(html, pattern) {
  return decodeHtmlEntities(html.match(pattern)?.[1] || '');
}

function decodeXyqString(hex) {
  const bytes = String(hex || '').match(/../g) || [];
  return bytes.map((value, index) =>
    String.fromCharCode(parseInt(value, 16) ^ XYQ_STRING_KEY.charCodeAt(index % XYQ_STRING_KEY.length))
  ).join('');
}

function normalizeVideo(item) {
  return {
    vod_id: String(item.vod_id ?? item.id ?? ''),
    vod_name: String(item.vod_name ?? item.name ?? item.title ?? ''),
    vod_pic: String(item.vod_pic ?? item.pic ?? item.thumbnail ?? item.img_url ?? ''),
    vod_remarks: String(item.vod_remarks ?? item.remarks ?? item.mask ?? item.note ?? ''),
    type_name: String(item.type_name ?? item.type ?? ''),
    vod_year: String(item.vod_year ?? item.year ?? ''),
    vod_area: String(item.vod_area ?? item.area ?? ''),
    vod_actor: String(item.vod_actor ?? item.actor ?? item.actors ?? ''),
    vod_director: String(item.vod_director ?? item.director ?? ''),
    vod_content: stripHtml(item.vod_content ?? item.content ?? item.description ?? item.intro ?? ''),
    vod_play_from: String(item.vod_play_from ?? item.play_from ?? ''),
    vod_play_url: String(item.vod_play_url ?? item.play_url ?? '')
  };
}

function okList(list, page = 1, pagecount = 1, total = list.length) {
  return { page, pagecount, limit: list.length, total, list: list.map(normalizeVideo) };
}

function parseEpisodesFromLinks(links, name = '播放') {
  const episodes = [];
  for (const link of links) {
    const href = attr(link, 'href');
    if (!href) continue;
    const label = pick(textOf(link), href);
    episodes.push(`${label}$${href}`);
  }
  return {
    vod_play_from: episodes.length ? name : '',
    vod_play_url: episodes.join('#')
  };
}

function mediaPlayer(url, extra = {}) {
  const clean = String(url || '').trim();
  if (!clean) return { parse: 1, url: '', ...extra };
  if (/^tvbox-xg:/i.test(clean)) return { parse: 1, url: clean, resolver: 'tvbox-xg', ...extra };
  if (/^(?:magnet|ed2k|thunder):/i.test(clean)) return { parse: 0, url: clean, ...extra };
  if (/^https?:\/\//i.test(clean) && MEDIA_RE.test(clean)) return { parse: 0, url: clean, ...extra };
  if (/^https?:\/\//i.test(clean)) return { parse: 1, url: clean, ...extra };
  return { parse: 1, url: clean, ...extra };
}

class BaseSpider {
  constructor(source = {}) {
    this.source = source;
    this.definition = SOURCE_DEFINITIONS[source.api] || SOURCE_DEFINITIONS[source.key] || {};
    this.base = sourceBase(source, this.definition);
  }

  requestHeaders(extra) {
    return headers(this.definition, { ...(this.source.headers || {}), ...extra });
  }

  unsupported(method) {
    throw new Error(`${this.definition.name || this.source.api || 'source'} ${method} is not implemented: ${this.definition.reason || 'missing generated JS implementation'}`);
  }

  async homeContent() {
    return { class: [], filters: {} };
  }

  async categoryContent() {
    this.unsupported('categoryContent');
  }

  async searchContent() {
    this.unsupported('searchContent');
  }

  async detailContent() {
    this.unsupported('detailContent');
  }

  async playerContent(_flag, id) {
    return mediaPlayer(id);
  }
}

class JianPianSpider extends BaseSpider {
  async homeContent() {
    return {
      class: [
        { type_id: '0', type_name: '全部' },
        { type_id: '1', type_name: '电影' },
        { type_id: '2', type_name: '电视剧' },
        { type_id: '3', type_name: '动漫' },
        { type_id: '4', type_name: '综艺' }
      ],
      filters: {}
    };
  }

  async categoryContent(tid, pg = 1) {
    const url = `${this.base}/api/crumb/list?area=0&code=unknown66e77c26fa3b1b31&category_id=${encodeURIComponent(tid)}&year=0&limit=24&channel=wandoujia&page=${encodeURIComponent(pg)}&sort=hot&type=0`;
    const json = await fetchJson(url, { headers: this.requestHeaders() });
    const data = json.data || {};
    const list = (data.data || data.list || []).map(item => ({
      id: item.path || item.id,
      name: item.title || item.name,
      pic: item.thumbnail || item.path,
      remarks: item.episodes_count ? `${item.episodes_count}集` : ''
    }));
    return okList(list, Number(pg) || 1, Number(data.pagecount || data.last_page || 1), Number(data.total || list.length));
  }

  async searchContent(keyword) {
    const url = `${this.base}/api/video/search?page=1&key=${encodeURIComponent(keyword)}`;
    const json = await fetchJson(url, { headers: this.requestHeaders() });
    const data = json.data || {};
    const rows = Array.isArray(data) ? data : (data.data || data.list || []);
    const list = rows.map(item => ({
      id: item.path || item.id,
      name: item.title || item.name,
      pic: item.thumbnail || item.path,
      remarks: item.mask || item.episodes_count || ''
    }));
    return okList(list, 1, Number(data.pagecount || 1), Number(data.total || list.length));
  }

  async detailContent(ids) {
    const id = Array.isArray(ids) ? ids[0] : ids;
    const url = `${this.base}/api/node/detail?channel=wandoujia&id=${encodeURIComponent(id)}`;
    const json = await fetchJson(url, { headers: this.requestHeaders() });
    const data = json.data || {};
    const play = [];
    for (const item of data.new_m3u8_list || []) {
      const name = pick(item.title, item.name, `第${play.length + 1}集`);
      const value = pick(item.url, item.path);
      if (value) play.push(`${name}$${value}`);
    }
    for (const item of data.m3u8_downlist || []) {
      const name = pick(item.title, item.name, `下载${play.length + 1}`);
      const value = pick(item.url, item.path);
      if (value) play.push(`${name}$${value}`);
    }
    const video = normalizeVideo({
      id,
      name: data.title || data.name,
      pic: data.thumbnail,
      remarks: data.episodes_count ? `${data.episodes_count}集` : '',
      year: data.year,
      area: data.area,
      actors: data.actors,
      director: data.director,
      description: data.description,
      type: data.category,
      vod_play_from: play.length ? '边下边播超清版' : '',
      vod_play_url: play.join('#')
    });
    return { list: [video] };
  }

  async playerContent(_flag, id) {
    const url = String(id || '').startsWith('tvbox-xg:') ? String(id).slice(9) : String(id || '');
    return mediaPlayer(url || id);
  }
}

class New6vSpider extends BaseSpider {
  async homeContent() {
    return {
      class: [
        { type_id: '/', type_name: '首页' },
        { type_id: '/qian', type_name: '最新' }
      ],
      filters: {}
    };
  }

  async categoryContent(tid = '/', pg = 1) {
    const path = pg <= 1 ? tid : `${String(tid).replace(/\/$/, '')}index_${pg}.html`;
    const html = await fetchText(absoluteUrl(path, this.base), { headers: this.requestHeaders() });
    return this.parseList(html, pg);
  }

  async searchContent(keyword) {
    const body = new URLSearchParams({
      show: 'title',
      tempid: '1',
      tbname: 'article',
      mid: '1',
      dopost: 'search',
      submit: '',
      keyboard: keyword
    });
    const html = await fetchText(`${this.base}/e/search/index.php`, {
      method: 'POST',
      headers: this.requestHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      body
    });
    return this.parseList(html, 1);
  }

  parseList(html, page) {
    if (typeof DOMParser === 'undefined') return this.parseListText(html, page);
    const doc = parseHtml(html);
    const nodes = [...doc.querySelectorAll('ul#post_container li, div#tab-content li')];
    const list = nodes.map(node => {
      const link = node.querySelector('h2 a, a[href]');
      const image = node.querySelector('img');
      return normalizeVideo({
        id: absoluteUrl(attr(link, 'href'), this.base),
        name: textOf(link || node.querySelector('h2')),
        pic: absoluteUrl(pick(attr(image, 'src'), attr(image, 'data-src')), this.base),
        remarks: textOf(node.querySelector('.info_date'))
      });
    }).filter(item => item.vod_id && item.vod_name);
    return okList(list, Number(page) || 1, 1, list.length);
  }

  parseListText(html, page) {
    const body = String(html || '');
    const postBody = firstHtmlMatch(body, /<ul\b[^>]*id=["']post_container["'][^>]*>([\s\S]*?)<\/ul>/i);
    const tabBody = firstHtmlMatch(body, /<div\b[^>]*id=["']tab-content["'][^>]*>([\s\S]*?)<\/div>/i);
    const blocks = (postBody || tabBody || body).match(/<li\b[^>]*(?:class=["'][^"']*post[^"']*["'][^>]*)?[\s\S]*?<\/li>/gi) || [];
    const list = blocks.map(block => {
      const h2Link = block.match(/<h2\b[\s\S]*?<a\b([^>]*)>([\s\S]*?)<\/a>[\s\S]*?<\/h2>/i);
      const firstLink = h2Link || block.match(/<a\b([^>]*)>([\s\S]*?)<\/a>/i);
      const image = block.match(/<img\b([^>]*)>/i)?.[1] || '';
      return normalizeVideo({
        id: absoluteUrl(htmlAttr(firstLink?.[1] || '', 'href'), this.base),
        name: stripHtml(decodeHtmlEntities(firstLink?.[2] || '')),
        pic: absoluteUrl(pick(htmlAttr(image, 'src'), htmlAttr(image, 'data-src')), this.base),
        remarks: stripHtml(firstHtmlMatch(block, /class=["'][^"']*info_date[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/i))
      });
    }).filter(item => item.vod_id && item.vod_name);
    return okList(list, Number(page) || 1, 1, list.length);
  }

  async detailContent(ids) {
    const id = Array.isArray(ids) ? ids[0] : ids;
    const html = await fetchText(absoluteUrl(id, this.base), { headers: this.requestHeaders() });
    if (typeof DOMParser === 'undefined') return this.detailContentText(id, html);
    const doc = parseHtml(html);
    const links = [...doc.querySelectorAll('div#post_content a[href^="magnet"], div#post_content a[href^="ed2k"]')];
    const play = parseEpisodesFromLinks(links, '新6V');
    const image = doc.querySelector('div#post_content img');
    const title = doc.querySelector('div#content > div > h1, h1');
    const video = normalizeVideo({
      id,
      name: textOf(title),
      pic: absoluteUrl(attr(image, 'src'), this.base),
      content: textOf(doc.querySelector('div#post_content')),
      ...play
    });
    return { list: [video] };
  }

  detailContentText(id, html) {
    const content = firstHtmlMatch(html, /id=["']post_content["'][^>]*>([\s\S]*?)(?:<div\b[^>]*class=["'][^"']*post_tags|<\/article>|<\/body>)/i) || html;
    const anchors = [...content.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
      .map(match => ({ href: htmlAttr(match[1], 'href'), label: stripHtml(decodeHtmlEntities(match[2])) }))
      .filter(link => /^(?:magnet|ed2k):/i.test(link.href));
    const play = {
      vod_play_from: anchors.length ? '新6V' : '',
      vod_play_url: anchors.map((link, index) => `${link.label || `下载 ${index + 1}`}$${link.href}`).join('#')
    };
    const image = html.match(/id=["']post_content["'][\s\S]*?<img\b([^>]*)>/i)?.[1] || '';
    const video = normalizeVideo({
      id,
      name: stripHtml(firstHtmlMatch(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i)),
      pic: absoluteUrl(htmlAttr(image, 'src'), this.base),
      content: stripHtml(content),
      ...play
    });
    return { list: [video] };
  }
}

const SPIDER_CLASSES = {
  csp_JianPian: JianPianSpider,
  csp_New6v: New6vSpider,
  csp_AppYs: BaseSpider,
  csp_Bdys: BaseSpider,
  csp_Kuaikan: BaseSpider
};

function createSpider(source) {
  const api = typeof source === 'string' ? source : source?.api;
  const SourceClass = SPIDER_CLASSES[api] || BaseSpider;
  return new SourceClass(typeof source === 'string' ? { api } : source);
}

function availableSpiders() {
  return Object.entries(SOURCE_DEFINITIONS).map(([api, definition]) => ({
    api,
    key: definition.key,
    name: definition.name,
    status: definition.status,
    reason: definition.reason || ''
  }));
}

const runtime = { createSpider, availableSpiders, decodeXyqString, definitions: SOURCE_DEFINITIONS };

if (typeof window !== 'undefined') window.KidarTvboxSpiders = runtime;

export { BaseSpider, JianPianSpider, New6vSpider, availableSpiders, createSpider, decodeXyqString, SOURCE_DEFINITIONS };
export default runtime;
