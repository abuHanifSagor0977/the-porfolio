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







document.addEventListener('DOMContentLoaded', function () {
    const introText = document.getElementById('intro');
    const bioText = document.getElementById('bio');

    // Function to start typing effect
    function startTyping() {
        new Typed('#bio', {
            strings: [
                "I’ll be honest<span class='highlight'>’</span>I’m a bit of a slacker<span class='highlight'>.</span> You know, the kind of person who’s great at finishing tasks<span class='highlight'>…</span> right before the deadline<span class='highlight'>.</span> There’s something about that rush, the pressure<span class='highlight'>,</span> it’s kind of exciting<span class='highlight'>.</span> As a full-stack developer, I love playing with design elements<span class='highlight'>.</span> It’s like having a creative playground where I can play with animations, hover effects, and transitions<span class='highlight'>.</span> And while working on the backend can sometimes feel like a horror movie<span class='highlight'>,</span> with bugs popping up like ghosts<span class='highlight'>.</span> But there’s nothing quite like the satisfaction when everything works perfectly<span class='highlight'>.</span>"
            ],
            typeSpeed: 10,
            backSpeed: 15,
            startDelay: 0,
            loop: false,
            showCursor: false
        });
    }

    setTimeout(function () {
        introText.style.display = 'block'; 
        setTimeout(function () {
            bioText.classList.remove('hidden'); 
            startTyping(); 
        }, 10);
    }, 30); 
});


