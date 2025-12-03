// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (!slides || slides.length === 0) return;

  let index = 0;
  let autoTimer = null;
  const AUTO_INTERVAL = 4000; // troca a cada 4 segundos

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => {
      if (idx === index) s.classList.add('active');
      else s.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(index - 1);
      restartAuto();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(index + 1);
      restartAuto();
    });
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      showSlide(index + 1);
    }, AUTO_INTERVAL);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  showSlide(0);
  startAuto();

  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAuto);
    carouselContainer.addEventListener('mouseleave', startAuto);
  }
});



