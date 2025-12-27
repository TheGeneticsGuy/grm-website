document.addEventListener('DOMContentLoaded', () => {

    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Hamburger Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const isExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
            btn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Image Lightbox
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-content');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    if (modal && modalImg) {
        // Open Modal
        triggers.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent immediate closing
                modalImg.src = img.src; // Use the clicked image source
                modal.classList.remove('hidden');
                modal.classList.add('flex'); // Center it
                document.body.style.overflow = 'hidden'; // Stop background scrolling
            });
        });

        // Close functions
        const closeModal = () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // Restore scrolling
            modalImg.src = ''; // Clear src
        };

        // Close on Background Click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on ESC Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    }

    // FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');

        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');

                // Close all others when opening.
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('.faq-icon')?.classList.remove('rotate-180');
                    }
                });

                // Toggle current
                if (isOpen) {
                    content.classList.add('hidden');
                    icon?.classList.remove('rotate-180');
                } else {
                    content.classList.remove('hidden');
                    icon?.classList.add('rotate-180');
                }
            });
        }
    });

});