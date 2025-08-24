document.addEventListener("DOMContentLoaded", () => {
  // Inicializa AOS
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-in-out',
  });

  // Inicializa Lottie para o ícone de prótese
  const proteseContainer = document.getElementById('protese-lottie');
  if(proteseContainer) {
    lottie.loadAnimation({
      container: proteseContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_yg9snycb.json' // JSON da animação
    });
  }

// Inicializa Swiper para o banner principal
const bannerSwiper = new Swiper('.banner.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: true, // ESSENCIAL para ajustar à altura da imagem
});

// Inicializa Swiper para o banner hero

new Swiper('.hero.swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

});
