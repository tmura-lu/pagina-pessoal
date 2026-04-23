// Pega referências dos elementos
var root = document.documentElement; // a tag <html>
var btn = document.getElementById("themeToggle");

// Aplica um tema e salva no localStorage
function applyTheme(theme) {
  root.setAttribute("data-bs-theme", theme); // Bootstrap reage automaticamente
  localStorage.setItem("theme", theme); // persiste entre sessões

  // Troca o ícone do botão
  if (btn) {
    btn.innerHTML =
      theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>' // escuro → mostrar sol
        : '<i class="fa-solid fa-moon"></i>'; // claro  → mostrar lua
  }
}

// Na carga da página: restaurar o tema salvo, ou usar claro
var savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || "light");

// Ao clicar no botão: alterna entre light e dark
if (btn) {
  btn.addEventListener("click", function () {
    var atual = root.getAttribute("data-bs-theme");
    applyTheme(atual === "light" ? "dark" : "light");
  });
}

// Atualizar o ano no rodapé automaticamente
var yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
