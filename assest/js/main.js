let currentScrollPos = 0;
let targetScrollPos = window.scrollY;
const scrollSpeed = 1;
const easeFactor = 1;
let disableSmoothScroll = false;

function smoothScroll() {
  if (disableSmoothScroll) return;
  const distance = targetScrollPos - currentScrollPos;
  if (Math.abs(distance) > 0.5) {
    currentScrollPos += distance * easeFactor;
    window.scrollTo(0, currentScrollPos);
    requestAnimationFrame(smoothScroll);
  } else {
    window.scrollTo(0, targetScrollPos);
  }
}

window.addEventListener('wheel', function(event) {
  event.preventDefault();
  targetScrollPos += event.deltaY * scrollSpeed;
  targetScrollPos = Math.max(0, Math.min(targetScrollPos, document.documentElement.scrollHeight - window.innerHeight));
  smoothScroll();
}, { passive: false });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetScrollPos = targetElement.offsetTop;
      disableSmoothScroll = true;
      window.scrollTo(0, targetScrollPos);
      setTimeout(() => disableSmoothScroll = false, 500);
    }
  });
});

window.onload = function() {
  targetScrollPos = window.scrollY;
  window.scrollTo(0, 0); // Scroll to the top on page load
};

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
let hasScrolled = false;

const debounce = (func, wait) => {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

window.addEventListener("scroll", debounce(function() {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  
  if (!hasScrolled) {
    navbar.classList.add('navbar-background');
    hasScrolled = true;
  }

  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-120px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, 100));

window.onload = function() {
  navbar.classList.remove('navbar-background');
  hasScrolled = false;
};

const banner = document.querySelector('.hero');
const bannerHeight = banner.offsetHeight;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const transformValue = Math.min(scrollY / 2, bannerHeight);
  banner.style.transform = `translateY(-${transformValue}px)`;
});

document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
      } else {
        entry.target.classList.add('hidden');
      }
    });
  });

  boxes.forEach(box => {
    observer.observe(box);
  });
});

const emailInput = document.getElementById('email');
const invalidFeedback = document.querySelector('.invalid-feedback');
const emailForm = document.getElementById('emailForm');

emailInput.addEventListener('input', function () {
  if (emailInput.checkValidity()) {
    invalidFeedback.style.display = 'none';
    emailInput.classList.remove('is-invalid');
  } else {
    invalidFeedback.style.display = 'block';
    emailInput.classList.add('is-invalid');
  }
});

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  if (emailInput.checkValidity()) {
    alert('Form submitted successfully!');
    emailInput.value = '';
  } else {
    invalidFeedback.style.display = 'block';
    emailInput.classList.add('is-invalid');
  }
});

const pos = document.documentElement;
pos.addEventListener('mousemove', e => {
  pos.style.setProperty('--x', e.clientX + 'px');
  pos.style.setProperty('--y', e.clientY + 'px');
});

const button = document.querySelector('.ball-btn');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => {
    window.open('https://example.com', '_blank');
  }, 700);
});

var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
  setTimeout(function() {
    loader.style.display = 'none';
  }, 1600);
});
