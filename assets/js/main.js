// Main JavaScript file for Bug Bounty site

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navTrigger = document.getElementById('nav-trigger');
    const trigger = document.querySelector('.trigger');
    
    if (navTrigger && trigger) {
        navTrigger.addEventListener('change', function() {
            if (this.checked) {
                trigger.style.display = 'flex';
            } else {
                trigger.style.display = 'none';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Copy code blocks functionality
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'העתק';
        button.className = 'copy-btn';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
        `;
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'הועתק!';
                setTimeout(() => {
                    button.textContent = 'העתק';
                }, 2000);
            });
        });
    });
});
