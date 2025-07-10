// Função para carregar scripts dinamicamente
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

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

async function init() {
  await includeHTML("#header-include", "../partials/header.html");
  await includeHTML("#footer-include", "../partials/footer.html");

  // Carregar CSS de AOS e Swiper (inserir no head)
  const head = document.head;
  const aosCss = document.createElement('link');
  aosCss.rel = 'stylesheet';
  aosCss.href = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css';
  head.appendChild(aosCss);

  const swiperCss = document.createElement('link');
  swiperCss.rel = 'stylesheet';
  swiperCss.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
  head.appendChild(swiperCss);

  // Aguarda carregamento dos CSS antes de continuar
  await Promise.all([
    new Promise(res => aosCss.onload = res),
    new Promise(res => swiperCss.onload = res)
  ]);

  // Carregar scripts JS
  await loadScript('https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js');
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.6/lottie.min.js');
  await loadScript('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js');

  // Inicializar AOS
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
  });

  // Inicializar Lottie - exemplo para protese
  lottie.loadAnimation({
    container: document.getElementById('protese-lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets8.lottiefiles.com/packages/lf20_yg9snycb.json'
  });

  // Inicializar Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

// Inicia tudo quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
