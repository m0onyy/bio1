// Music control
const music = document.getElementById('background-music');
const musicControl = document.querySelector('.music-control');
let isMusicPlaying = false;
let isMusicTriggeredByScroll = false;

function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
    musicControl.innerHTML = '<i class="fas fa-music"></i>'; // Ensure you have Font Awesome linked in your HTML for icons
  } else {
    music.play().catch(error => {
      console.log("Autoplay was prevented. User interaction is required to start the music.");
    });
    musicControl.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isMusicPlaying = !isMusicPlaying;
}

// Autoplay music when the user scrolls a bit
window.addEventListener('scroll', function() {
  if (!isMusicTriggeredByScroll && window.scrollY > 50) {
    music.play().then(() => {
      isMusicPlaying = true;
      musicControl.innerHTML = '<i class="fas fa-pause"></i>';
      isMusicTriggeredByScroll = true;
    }).catch(error => {
      console.log("Autoplay was prevented. User interaction is required to start the music.");
    });
  }
});

// Stagger animation for projects and animate title on page load
window.onload = function() {
  const projects = document.querySelectorAll('.project');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
  });

  const titleChars = document.querySelectorAll('.animated-title span');
  titleChars.forEach((char, index) => {
    char.style.animationDelay = `${index * 0.1}s`;
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Interactive project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px) scale(1.03)';
    card.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.3)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = 'none';
  });
});

// Add event listener for music control button
musicControl.addEventListener('click', toggleMusic);
