document.addEventListener("DOMContentLoaded", function() {
    // Remove loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            body.classList.remove('hidden');
            body.classList.add('visible');
        }, 1000); // Extended to 1s to match fade-out transition
    }, 1500);

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});
