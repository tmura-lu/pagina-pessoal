var html = document.documentElement;
var btn = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);

  if (btn) {
    btn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro",
    );
  }
}

// Restaurar tema salvo ou usar claro como padrão
applyTheme(localStorage.getItem("theme") || "light");

if (btn) {
  btn.addEventListener("click", function () {
    var isDark = html.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
  });
}

//  Ano automático no rodapé
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
