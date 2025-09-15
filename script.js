// Enhanced mobile navigation functionality
function myFunction() {
    var x = document.getElementById("nav-links");
    var icon = document.querySelector('.icon i');
    
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        document.body.style.overflow = "auto";
    } else {
        x.classList.add("responsive");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        document.body.style.overflow = "hidden";
    }
}

function closeMenu() {
    var x = document.getElementById("nav-links");
    var icon = document.querySelector('.icon i');
    
    x.classList.remove("responsive");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    document.body.style.overflow = "auto";
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById("nav-links");
    var icon = document.querySelector('.icon');
    
    if (navLinks.classList.contains("responsive") && 
        !navLinks.contains(event.target) && 
        !icon.contains(event.target)) {
        closeMenu();
    }
});

// Close menu on window resize if it's open
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

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
            closeMenu(); // Close mobile menu after clicking
        }
    });
});

// FAQ functionality for contact page
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});