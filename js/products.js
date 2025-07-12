// Products JS - Gypnova

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animations
    gsap.to('.product-hero h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.to('.product-hero p', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Parallax Effect for Hero Background
    gsap.to('.product-hero::before', {
        scrollTrigger: {
            trigger: '.product-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: '20%',
        ease: 'none'
    });
    
    // Overview Section Animations
    ScrollTrigger.batch('.overview-text h2, .overview-text p', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out'
        }),
        start: 'top 80%'
    });
    
    gsap.to('.overview-image', {
        scrollTrigger: {
            trigger: '.overview-image',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Section Title Animations
    ScrollTrigger.batch('.section-title', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }),
        start: 'top 80%'
    });
    
    // Product Item Animations
    ScrollTrigger.batch('.product-item', {
        onEnter: batch => gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        }),
        start: 'top 80%'
    });
    
    // CTA Section Animations
    gsap.to('.cta-content h2', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.to('.cta-content p', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
    
    gsap.to('.cta-content .btn', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
    });
    
    // Image Viewer Modal Functionality
    const modal = document.querySelector('.image-viewer-modal');
    const modalImg = document.querySelector('.modal-image');
    const closeModal = document.querySelector('.close-modal');
    const productImages = document.querySelectorAll('.product-image img');
    
    productImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            
            // Animate modal opening
            gsap.fromTo(modal, 
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            
            gsap.fromTo(modalImg, 
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
            );
        });
    });
    
    closeModal.addEventListener('click', function() {
        // Animate modal closing
        gsap.to(modalImg, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
        });
        
        gsap.to(modal, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal.click();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add hover effects for product items
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -3,
                boxShadow: '0 8px 20px rgba(52, 152, 219, 0.4)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                boxShadow: '0 5px 15px rgba(52, 152, 219, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Add hover effects for product images
    const images = document.querySelectorAll('.product-image img, .overview-image img, .guide-image img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        img.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
});