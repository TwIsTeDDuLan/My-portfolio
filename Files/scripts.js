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
        const frontBg = document.getElementById('front-bg');
        const skillsSection = document.getElementById('skills-projects');
        
        sideBg.classList.remove('active'); // Show side image initially
        
        const bgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // When skills section comes into view
                    sideBg.classList.remove('active');
                    frontBg.classList.add('active');
                } else {
                    // When skills section leaves view
                    sideBg.classList.add('active');
                    frontBg.classList.remove('active');
                }
            });
        }, {
            threshold: 0.3
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