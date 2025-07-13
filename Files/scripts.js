// Timeline animation on scroll
const containers = document.querySelectorAll('.container');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1
        });
        
        containers.forEach(container => {
            observer.observe(container);
        });
        
        // Social media hover effect
        const socialIcons = document.querySelectorAll('.social-icon');
        const profilePreview = document.querySelector('.profile-preview');
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                const previewImage = icon.getAttribute('data-preview');
                profilePreview.style.backgroundImage = `url(${previewImage})`;
                profilePreview.classList.add('active');
            });
            
            icon.addEventListener('mouseleave', () => {
                profilePreview.classList.remove('active');
            });
        });
        
        // Background image transition effect
const sideBg = document.getElementById('side-bg');
const skillsSection = document.getElementById('skills-projects');
sideBg.classList.remove('active'); // Hide initially
const bgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            sideBg.classList.add('active'); // Show when skills section is in view
        } else {
            sideBg.classList.remove('active'); // Hide otherwise
        }
    });
}, {
    threshold: 0.24
});
bgObserver.observe(skillsSection);
        
        // Scroll indicator disappears when at bottom
        window.addEventListener('scroll', () => {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });


document.addEventListener('DOMContentLoaded', function() {
                const email = "thualanadj@gmail.com";
                const copyEmailBtn = document.querySelector('.copy-email');
                copyEmailBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    navigator.clipboard.writeText(email).then(function() {
                        // Create popup message
                        const popup = document.createElement('div');
                        popup.textContent = "Email copied to clipboard!";
                        popup.style.position = "fixed";
                        popup.style.bottom = "30px";
                        popup.style.left = "50%";
                        popup.style.transform = "translateX(-50%)";
                        popup.style.background = "#333";
                        popup.style.color = "#fff";
                        popup.style.padding = "10px 20px";
                        popup.style.borderRadius = "5px";
                        popup.style.zIndex = "9999";
                        document.body.appendChild(popup);
                        setTimeout(function() {
                            popup.remove();
                        }, 2000);
                    });
                });
            });