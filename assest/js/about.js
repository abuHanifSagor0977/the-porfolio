/*=================================ABOUT PAGE======================================= */



document.addEventListener('DOMContentLoaded', function () {
  const aboutText = document.querySelector('.about_text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutText.classList.add('animated');
        
      } else {
        aboutText.classList.remove('animated');
        
      }
    });
  }, { threshold: 0.5 }); 

  if (aboutText) {
    observer.observe(aboutText);
  } else {
    
  }
});

