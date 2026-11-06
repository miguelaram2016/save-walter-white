// This is a fictional fan-site interaction. Inputs are never uploaded or stored.
(() => {
  const KEY = "save-walter-white-demo-count-v1";
  const BASE = 247941;
  const form = document.getElementById("support-form");
  const count = document.getElementById("signup-count");
  const status = document.getElementById("submitted");
  const button = form.querySelector("button");
  let local = 0;
  try { local = Math.min(100000, Math.max(0, Number(localStorage.getItem(KEY)) || 0)); } catch (_) {}
  count.textContent = (BASE + local).toLocaleString("en-US");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.namedItem("name").value.trim();
    if (!name) return;
    local += 1;
    try { localStorage.setItem(KEY, String(local)); } catch (_) {}
    count.textContent = (BASE + local).toLocaleString("en-US");
    status.textContent = "Thank you for supporting Walter, " + name + "!";
    button.disabled = true;
    form.reset();
  });
})();