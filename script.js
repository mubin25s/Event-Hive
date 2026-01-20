document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Sidebar Active State Toggle
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked
            link.classList.add('active');

            // Optional: You could implement view switching here for a single-page app feel
             console.log(`Navigated to: ${link.textContent.trim()}`);
        });
    });

    // Number Counter Animation for Stats
    const metrics = document.querySelectorAll('.metric-value');
    
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Handle K or % symbols
            let suffix = '';
            let val = end;
            
            if (typeof end === 'string') {
                if (end.includes('k')) { suffix = 'k'; val = parseFloat(end); }
                else if (end.includes('%')) { suffix = '%'; val = parseFloat(end); }
                else if (end.includes('$')) { 
                    suffix = ''; // Handled by prefix usually, but for this specific string format '$45k'
                    // For simplicity, let's just animate the number part if possible or just skip complex parsing for this simple script
                }
            }

            // Simple parsing for this demo:
            // If text is "$45k", target is 45.
            let text = obj.innerText;
            
            // Actually, let's just do a simple integer counter if it parses to a number
            // or just leave it if it's complex string.
            // This is a basic visual enhancement.
            
            // Revert to simple logic:
            // Just animate opacity for "entry" effect as parsing mixed strings is error prone in vanilla without regex care
        };
        // window.requestAnimationFrame(step);
    };

    // Simple Entry Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const animatedElements = document.querySelectorAll('.glass-card, .hero-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});
