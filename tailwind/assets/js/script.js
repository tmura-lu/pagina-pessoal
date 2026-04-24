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
  }
}

applyTheme(localStorage.getItem("theme") || "light");

if (btn) {
  btn.addEventListener("click", function () {
    var isDark = html.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
  });
}
