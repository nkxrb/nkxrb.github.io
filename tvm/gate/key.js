const STORAGE_KEY = "tvm.secret.v1";
const STORAGE_UPDATED_AT_KEY = "tvm.secret.v1.updatedAt";
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const accessChannel = "BroadcastChannel" in window ? new BroadcastChannel("tvm-access") : null;

const form = document.getElementById("gateForm");
const input = document.getElementById("secretInput");
const statusEl = document.getElementById("gateStatus");
const metaEl = document.getElementById("gateMeta");

let rootConfig = null;

initGate();

async function initGate() {
  try {
    rootConfig = await fetchJson("../data/c");
    const config = await loadEncryptionConfig(rootConfig);
    if (!config) throw new Error("Missing encryption config");
    rootConfig.encryption = config;
    metaEl.textContent = `配置 ${config.keyHour || ""}`;
  } catch (error) {
    console.error(error);
    metaEl.textContent = "配置读取失败";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const secret = input.value.trim();
  if (!secret || !rootConfig?.encryption) return;
  setStatus("校验中");
  try {
    const key = await deriveKey(secret, rootConfig.encryption);
    const probePath = `../data/p/${rootConfig.r}/0`;
    const probe = await fetchJson(probePath);
    await decryptEnvelope(probe, key);
    sessionStorage.setItem(STORAGE_KEY, secret);
    accessChannel?.postMessage({ type: "secret", secret });
    localStorage.setItem(STORAGE_UPDATED_AT_KEY, String(Date.now()));
    setStatus("已保存");
  } catch (error) {
    console.error(error);
    sessionStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_UPDATED_AT_KEY, String(Date.now()));
    setStatus("秘钥无效", true);
  }
});

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Fetch failed: ${path}`);
  return response.json();
}

async function loadEncryptionConfig(rootConfig) {
  if (rootConfig?.config) {
    try {
      return await fetchJson(`../${rootConfig.config}`);
    } catch (error) {
      console.warn(error);
    }
  }
  return rootConfig?.encryption || null;
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
  return JSON.parse(textDecoder.decode(plain));
}

function base64UrlToBytes(value) {
  const base64 = String(value).replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (char) => char.charCodeAt(0));
}

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle("error", isError);
}
