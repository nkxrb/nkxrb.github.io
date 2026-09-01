const STORAGE_KEY = "tvm.secret.v1";
const STORAGE_UPDATED_AT_KEY = "tvm.secret.v1.updatedAt";
const accessChannel = "BroadcastChannel" in window ? new BroadcastChannel("tvm-access") : null;

const form = document.getElementById("gateForm");
const input = document.getElementById("secretInput");
const statusEl = document.getElementById("gateStatus");
const metaEl = document.getElementById("gateMeta");

metaEl.textContent = "就绪";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const secret = input.value;
  localStorage.setItem(STORAGE_KEY, secret);
  accessChannel?.postMessage({ type: "secret", secret });
  localStorage.setItem(STORAGE_UPDATED_AT_KEY, String(Date.now()));
  setStatus("已保存");
});

function setStatus(text, isError = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle("error", isError);
}
