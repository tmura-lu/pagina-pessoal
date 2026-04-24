var root = document.documentElement;
var btn = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);

  if (btn) {
    btn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
  }
}

var savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "light");

// Ao clicar no botão alterna entre light e dark
if (btn) {
  btn.addEventListener("click", function () {
    var atual = root.getAttribute("data-bs-theme");
    applyTheme(atual === "light" ? "dark" : "light");
  });
}

// Atualizar o ano no rodapé automaticamente
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
