const fadeElements = document.querySelectorAll('.fade-in');

function handleScroll() {
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    console.log("This is the rect",rect.top)
    const triggerPoint = window.innerHeight * 0.8; // Adjust when you want to start fading

    if (rect.top < triggerPoint) {
      element.classList.add('visible'); 
    } else {
      element.classList.remove('visible'); 
    }
  });
}

window.addEventListener('scroll', handleScroll);
