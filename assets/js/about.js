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

// progress bar
const skills = [
  { id: 'progressHTML', percentage: 88 },
  { id: 'progressCSS', percentage: 77 },
  { id: 'progressJS', percentage: 58 },
  { id: 'progressBootstrap', percentage: 68 },
  { id: 'progressPHP', percentage: 32 },
  { id: 'progressLaravel', percentage: 5 }
];

// Function to start the animation for a specific skill
function startAnimation(skill) {
  const progressElement = document.getElementById(skill.id);
  const circleElement = document.getElementById(`circle${skill.id.replace('progress', '')}`);
  const radius = 45; // Circle radius (as specified in HTML)
  const totalLength = 2 * Math.PI * radius; // Calculate circumference
  const targetOffset = totalLength * (1 - (skill.percentage / 100)); // Calculate target offset

  // Check if elements exist
  if (!progressElement || !circleElement) return;

  // Set the stroke-dasharray to the total length
  circleElement.style.strokeDasharray = totalLength;

  // Timing configuration
  const duration = 2000; // Total duration for the animation in milliseconds
  const intervalTime = (duration / skill.percentage) || 100; // Interval based on percentage
  let counter = 0; // Start from 0

  // Animate percentage from 0 to target percentage
  const updatePercentage = setInterval(() => {
    if (counter >= skill.percentage) {
      clearInterval(updatePercentage);
      // Add final value with specified styles
      progressElement.innerHTML = `<span class="number" style="color: var(--team-color); font-size: 18px; font-weight: 600;">${skill.percentage}</span><span class="percentage-symbol" style="color: #ffc107; font-size: 25px; font-weight: 400;">%</span>`;
    } else {
      counter++;
      // Update number value with specified styles
      progressElement.innerHTML = `<span class="number" style="color: var(--team-color); font-size: 18px; font-weight: 600;">${counter}</span><span class="percentage-symbol" style="color: #ffc107; font-size: 25px; font-weight: 400;">%</span>`;
    }
  }, intervalTime); // Use calculated interval time

  // Apply the target stroke-dashoffset
  circleElement.style.strokeDashoffset = totalLength; // Start hidden
  setTimeout(() => {
    circleElement.style.strokeDashoffset = targetOffset; // Animate to target offset
  }, 50); // Delay to ensure styles are applied
}

// Function to start text animations when the skill section is visible
function startTextAnimation() {
  const skillTitles = document.querySelectorAll('.skills h5');
  const skillDescriptions = document.querySelectorAll('.skills p');

  skillTitles.forEach(title => {
    title.style.animation = 'drop 3s forwards';
  });

  skillDescriptions.forEach(description => {
    description.style.animation = 'up 1.5s forwards';
  });
}

// Function to handle the intersection for the skill section
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillId = entry.target.getAttribute('data-skill-id');
      const skill = skills.find(skill => skill.id === skillId);
      if (skill) {
        startAnimation(skill); // Start skill bar animation
        startTextAnimation(); // Start text animations
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    }
  });
}

// Create an IntersectionObserver instance
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Observe each skill section
skills.forEach(skill => {
  const skillSection = document.querySelector(`[data-skill-id="${skill.id}"]`);
  if (skillSection) {
    observer.observe(skillSection); // Start observing each section
  }
});

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})