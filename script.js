document.addEventListener('DOMContentLoaded', function() {
    const bikeCards = document.querySelectorAll('.bike-card');
    
    bikeCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const enquiryForm = document.getElementById('enquiryForm');
    enquiryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your enquiry! We will get back to you soon.');
        enquiryForm.reset();
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});