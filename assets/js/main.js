// assets/js/main.js

async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
    const html = await response.text();
    el.innerHTML = html;
  } catch (err) {
    console.error(`Erro ao incluir HTML de ${url}:`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("#header-include", "../partials/header.html");
  includeHTML("#footer-include", "../partials/footer.html");
});
