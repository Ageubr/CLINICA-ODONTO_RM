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

document.addEventListener("DOMContentLoaded", async () => {
  await includeHTML("#header-include", "../partials/header.html");
  await includeHTML("#footer-include", "../partials/footer.html");
});

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.header nav a');
  const currentPage = location.pathname.split('/').pop();

  navLinks.forEach(link => {
    // Remove qualquer 'active' existente
    link.classList.remove('active');
    // Adiciona 'active' se o href corresponde ao arquivo atual
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
    // Para index.html na raiz ou vazio
    if ((currentPage === '' || currentPage === 'index.html') && link.getAttribute('href') === 'index.html') {
      link.classList.add('active');
    }
  });
});