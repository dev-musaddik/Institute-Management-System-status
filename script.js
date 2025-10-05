document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.anim-fade-in');
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate general elements
                entry.target.classList.add('is-visible');

                // Animate progress bars specifically
                const progressBar = entry.target.querySelector('.progress-bar-fill');
                if (progressBar) {
                    const progress = entry.target.querySelector('.progress-bar').getAttribute('data-progress');
                    progressBar.style.width = progress + '%';
                }
                
                // Stop observing the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements that need fading in
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});