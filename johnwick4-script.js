document.addEventListener('DOMContentLoaded', function() {
    // Movie video URLs in different languages
    const movieVideos = {
        "de": "https://voe.sx/e/cxjtcdsopius", // German version of John Wick 4
        "en": "" // English version (placeholder for future)
    };
    
    // Trailer URL
    const trailerUrl = "https://www.youtube.com/embed/qEVUtrk8_B4"; // John Wick 4 official trailer
    
    // Current language setting
    let currentLanguage = "de"; // Default language is German
    
    // Video player related elements
    const videoModal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoContainer = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');
    const playMovieBtn = document.getElementById('playMovie');
    
    // Play movie button handler
    playMovieBtn.addEventListener('click', function() {
        loadAndPlayMovie(currentLanguage);
    });
    
    // Function to load and play the movie with language selection
    function loadAndPlayMovie(language) {
        // Set the modal title with language indicator
        const langText = language === 'de' ? 'German' : 'English';
        modalTitle.textContent = `John Wick: Chapter 4 (${langText})`;
        
        // Get the correct video source based on language
        const videoSrc = movieVideos[language];
        
        // Create video player if video source is available
        if (videoSrc) {
            // Clear previous content
            videoContainer.innerHTML = '';
            
            // Create and append the iframe
            const iframe = document.createElement('iframe');
            iframe.src = videoSrc;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.frameBorder = '0';
            iframe.scrolling = 'no';
            iframe.allowFullscreen = true;
            
            videoContainer.appendChild(iframe);
        } else {
            // Show placeholder message (especially for English version not yet available)
            videoContainer.innerHTML = `
                <div class="video-placeholder">
                    <div class="play-button">▶</div>
                    <p>${language === 'en' ? 'English version coming soon' : 'Video not available'}</p>
                </div>
            `;
        }
        
        // Show the modal
        videoModal.style.display = 'flex';
        
        console.log(`Playing movie in ${language}`);
    }
    
    // Language selection handlers
    document.getElementById('langGerman').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'de';
        
        // Update active state of language buttons
        document.getElementById('langEnglish').classList.remove('active');
        this.classList.add('active');
        
        // If the modal is already open, update the video
        if (videoModal.style.display === 'flex') {
            loadAndPlayMovie(currentLanguage);
        }
    });
    
    document.getElementById('langEnglish').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'en';
        
        // Update active state of language buttons
        document.getElementById('langGerman').classList.remove('active');
        this.classList.add('active');
        
        // If the modal is already open, update the video
        if (videoModal.style.display === 'flex') {
            loadAndPlayMovie(currentLanguage);
        }
    });
    
    // Trailer button handler
    document.querySelector('.trailer-btn').addEventListener('click', function() {
        // Set the modal title for trailer
        modalTitle.textContent = 'John Wick: Chapter 4 - Official Trailer';
        
        // Clear previous content
        videoContainer.innerHTML = '';
        
        // Create and append the iframe for trailer
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = trailerUrl;
        trailerIframe.width = '100%';
        trailerIframe.height = '100%';
        trailerIframe.style.position = 'absolute';
        trailerIframe.style.top = '0';
        trailerIframe.style.left = '0';
        trailerIframe.frameBorder = '0';
        trailerIframe.allowFullscreen = true;
        
        videoContainer.appendChild(trailerIframe);
        
        // Show the modal
        videoModal.style.display = 'flex';
        console.log('Playing movie trailer');
    });
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', () => {
        videoModal.style.display = 'none';
        // Stop any playing videos by clearing the container
        videoContainer.innerHTML = '';
    });
    
    // Close modal when clicking outside the content
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            // Stop any playing videos by clearing the container
            videoContainer.innerHTML = '';
        }
    });
    
    // Star rating functionality
    const stars = document.querySelectorAll('.star-rating .star');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            
            // Clear all active stars
            stars.forEach(s => s.classList.remove('active'));
            
            // Set active stars up to the clicked one
            stars.forEach(s => {
                if (parseInt(s.dataset.rating) <= rating) {
                    s.classList.add('active');
                }
            });
            
            console.log(`User rated the movie ${rating}/10`);
        });
    });
    
    // Watchlist button functionality
    const watchlistBtn = document.querySelector('.watchlist-btn');
    
    watchlistBtn.addEventListener('click', () => {
        // Toggle watchlist status
        const isInWatchlist = watchlistBtn.classList.toggle('in-watchlist');
        
        if (isInWatchlist) {
            watchlistBtn.innerHTML = '<i class="icon">✓</i> In Watchlist';
            watchlistBtn.style.backgroundColor = '#1565C0';
        } else {
            watchlistBtn.innerHTML = '<i class="icon">➕</i> Add to Watchlist';
            watchlistBtn.style.backgroundColor = '#2196F3';
        }
        
        console.log(`User ${isInWatchlist ? 'added movie to' : 'removed movie from'} watchlist`);
    });
    
    // Quality selector (for demonstration - would need real implementation)
    const qualitySelector = document.querySelector('.quality-selector');
    qualitySelector.addEventListener('change', function() {
        console.log(`Quality changed to: ${this.value}`);
        // In a real implementation, this would change the video quality
    });
});