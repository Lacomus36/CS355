
// Theme handling
function applyTheme() {
  const dark = localStorage.getItem("darkMode") === "true";
  if (dark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  updateToggleText();
}

function setupThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDark);

    updateToggleText();
  });
}

function updateToggleText() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "Light Mode";
  } else {
    toggle.textContent = "Dark Mode";
  }
}
// Page 2: Render query parameters

function renderQueryParams(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const params = new URLSearchParams(location.search);

  for (const [key, value] of params.entries()) {
    const keyDiv = document.createElement("div");
    keyDiv.className = "key";
    keyDiv.textContent = key;

    const valueDiv = document.createElement("div");
    valueDiv.textContent = value;

    container.appendChild(keyDiv);
    container.appendChild(valueDiv);
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  setupThemeToggle();
});
