// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show loading status
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status';
            
            // Simulate form submission (in a real implementation, this would be an actual API call)
            setTimeout(function() {
                // In a real implementation, you would use fetch or XMLHttpRequest to send the data to a server
                // For example:
                /*
                fetch('your-server-endpoint', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        showSuccess();
                    } else {
                        showError(data.message || 'An error occurred. Please try again.');
                    }
                })
                .catch(error => {
                    showError('An error occurred. Please try again.');
                    console.error('Error:', error);
                });
                */
                
                // For demonstration purposes, we'll simulate a successful submission
                showSuccess();
                
                // In a real implementation, you would integrate with a backend service or email API
                // such as EmailJS, Formspree, or your own server-side code to send emails to info@asiticgypsum.com
            }, 1500);
        });
    }
    
    function showSuccess() {
        formStatus.textContent = 'Message sent successfully! We\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(function() {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
    
    function showError(message) {
        formStatus.textContent = message || 'An error occurred. Please try again.';
        formStatus.className = 'form-status error';
        
        // Clear error message after 5 seconds
        setTimeout(function() {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
    
    // Form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add focus animation
        input.addEventListener('focus', function() {
            gsap.to(this, {
                borderColor: '#3498db',
                boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
                duration: 0.3
            });
        });
        
        // Remove focus animation
        input.addEventListener('blur', function() {
            if (!this.value) {
                gsap.to(this, {
                    borderColor: '#ddd',
                    boxShadow: 'none',
                    duration: 0.3
                });
            }
        });
    });
    
    // Animate form elements on scroll
    gsap.from('.contact-form-container', {
        scrollTrigger: {
            trigger: '.contact-form-section',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate contact info cards
    gsap.utils.toArray('.contact-info-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Animate social connect cards
    gsap.utils.toArray('.social-connect-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
});