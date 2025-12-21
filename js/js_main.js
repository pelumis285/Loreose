document.addEventListener('DOMContentLoaded', function() {
    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('[data-filter]');
    if(filterTabs.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('text-[#4A1F1F]', 'border-b-2', 'border-[#4A1F1F]'));
                filterTabs.forEach(t => t.classList.add('text-[#8B7355]'));
                
                // Add active class to clicked tab
                this.classList.remove('text-[#8B7355]');
                this.classList.add('text-[#4A1F1F]', 'border-b-2', 'border-[#4A1F1F]');
            });
        });
    }

    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.hover-lift');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});