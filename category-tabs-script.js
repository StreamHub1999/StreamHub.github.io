// Category tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const movieCards = document.querySelectorAll('.movie-card');
    
    // Add click event to each tab
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get the selected category (lowercase)
            const selectedCategory = tab.textContent.toLowerCase();
            
            // Filter content based on the selected category
            movieCards.forEach(card => {
                const cardCategories = card.dataset.categories ? card.dataset.categories.split(',') : [];
                
                if (selectedCategory === 'all' || cardCategories.includes(selectedCategory)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            console.log(`Filtered content by category: ${selectedCategory}`);
        });
    });
});