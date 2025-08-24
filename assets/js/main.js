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

async function init() {
  // Carregar CSS de AOS e Swiper
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

  // Inicializar Lottie (exemplo para prótese)
  const proteseContainer = document.getElementById('protese-lottie');
  if (proteseContainer) {
    lottie.loadAnimation({
      container: proteseContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_yg9snycb.json'
    });
  }

  // Inicializar Swiper para banners
const swiper = new Swiper('.banner.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: true
});

  // Inicializar Swiper para depoimentos (separado, se necessário)
  const depoimentosSwiper = new Swiper('.depoimentos .swiper', {
    loop: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.depoimentos .swiper-pagination',
      clickable: true,
    },
    autoHeight: true,
  });
}

document.addEventListener("DOMContentLoaded", init);
