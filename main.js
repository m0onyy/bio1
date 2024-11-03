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
