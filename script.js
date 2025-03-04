// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Category tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // This is where you would add code to filter content based on the selected category
            // For now it just changes the active tab styling
        });
    });
    
    // Search functionality - could be expanded in the future
    const searchInput = document.querySelector('.search input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Here you would add search functionality
                console.log('Searching for:', searchInput.value);
                // Placeholder for future search implementation
            }
        });
    }
    
    // Add hover effect for movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            // This is where you would add code to open the movie details or start playback
            console.log('Opening movie:', card.querySelector('.movie-title').textContent);
            // Placeholder for future movie selection implementation
        });
    });
});