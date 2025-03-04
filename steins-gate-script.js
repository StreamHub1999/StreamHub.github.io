document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for Season 1 (placeholder URLs - replace with actual links when available)
    const season1Videos = {
        // These are placeholder URLs - you'll need to replace these with the actual links
        "1": "https://voe.sx/e/placeholder1", // Episode 1
        "2": "https://voe.sx/e/placeholder2", // Episode 2
        "3": "https://voe.sx/e/placeholder3", // Episode 3
        "4": "https://voe.sx/e/placeholder4", // Episode 4
        "5": "https://voe.sx/e/placeholder5", // Episode 5
        "6": "https://voe.sx/e/placeholder6", // Episode 6
        "7": "https://voe.sx/e/placeholder7", // Episode 7
        "8": "https://voe.sx/e/placeholder8", // Episode 8
        "9": "https://voe.sx/e/placeholder9", // Episode 9
        "10": "https://voe.sx/e/placeholder10", // Episode 10
        "11": "https://voe.sx/e/placeholder11", // Episode 11
        "12": "https://voe.sx/e/placeholder12", // Episode 12
        "13": "https://voe.sx/e/placeholder13", // Episode 13
        "14": "https://voe.sx/e/placeholder14", // Episode 14
        "15": "https://voe.sx/e/placeholder15", // Episode 15
        "16": "https://voe.sx/e/placeholder16", // Episode 16
        "17": "https://voe.sx/e/placeholder17", // Episode 17
        "18": "https://voe.sx/e/placeholder18", // Episode 18
        "19": "https://voe.sx/e/placeholder19", // Episode 19
        "20": "https://voe.sx/e/placeholder20", // Episode 20
        "21": "https://voe.sx/e/placeholder21", // Episode 21
        "22": "https://voe.sx/e/placeholder22", // Episode 22
        "23": "https://voe.sx/e/placeholder23", // Episode 23
        "24": "https://voe.sx/e/placeholder24"  // Episode 24
    };

    // English dubbed version URLs (placeholder - replace with actual links when available)
    const season1VideosEng = {
        // These are placeholder URLs - you'll need to replace these with the actual links
        "1": "https://voe.sx/e/placeholder1e", // Episode 1 (English)
        "2": "https://voe.sx/e/placeholder2e", // Episode 2 (English)
        "3": "https://voe.sx/e/placeholder3e", // Episode 3 (English)
        "4": "https://voe.sx/e/placeholder4e", // Episode 4 (English)
        "5": "https://voe.sx/e/placeholder5e", // Episode 5 (English)
        "6": "https://voe.sx/e/placeholder6e", // Episode 6 (English)
        "7": "https://voe.sx/e/placeholder7e", // Episode 7 (English)
        "8": "https://voe.sx/e/placeholder8e", // Episode 8 (English)
        "9": "https://voe.sx/e/placeholder9e", // Episode 9 (English)
        "10": "https://voe.sx/e/placeholder10e", // Episode 10 (English)
        "11": "https://voe.sx/e/placeholder11e", // Episode 11 (English)
        "12": "https://voe.sx/e/placeholder12e", // Episode 12 (English)
        "13": "https://voe.sx/e/placeholder13e", // Episode 13 (English)
        "14": "https://voe.sx/e/placeholder14e", // Episode 14 (English)
        "15": "https://voe.sx/e/placeholder15e", // Episode 15 (English)
        "16": "https://voe.sx/e/placeholder16e", // Episode 16 (English)
        "17": "https://voe.sx/e/placeholder17e", // Episode 17 (English)
        "18": "https://voe.sx/e/placeholder18e", // Episode 18 (English)
        "19": "https://voe.sx/e/placeholder19e", // Episode 19 (English)
        "20": "https://voe.sx/e/placeholder20e", // Episode 20 (English)
        "21": "https://voe.sx/e/placeholder21e", // Episode 21 (English)
        "22": "https://voe.sx/e/placeholder22e", // Episode 22 (English)
        "23": "https://voe.sx/e/placeholder23e", // Episode 23 (English)
        "24": "https://voe.sx/e/placeholder24e"  // Episode 24 (English)
    };
    
    // Series thumbnail
    const seriesThumbnail = "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg";
    
    // Fix any broken episode thumbnails by setting the series image as fallback
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.onerror = function() {
            this.src = seriesThumbnail;
            // Adjust the image display to show properly in the thumbnail container
            this.style.objectFit = "cover";
            this.style.objectPosition = "top center";
        };
    });
    
    // Current playing episode tracking
    let currentSeason = "1";
    let currentEpisode = "1";
    let currentLanguage = "jp"; // Default language is Japanese
    
    // Video player related elements
    const videoModal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoContainer = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');
    
    // Episode click handler - Open video modal
    const episodeItems = document.querySelectorAll('.episode-item');
    
    episodeItems.forEach(episode => {
        episode.addEventListener('click', () => {
            // Update tracking variables
            currentEpisode = episode.dataset.episode;
            
            // Get episode details for the modal title
            const episodeNumber = episode.querySelector('.episode-number').textContent;
            const episodeTitle = episode.querySelector('.episode-title').textContent;
            
            // Set modal title
            modalTitle.textContent = `Steins;Gate - ${episodeNumber} ${episodeTitle} (${currentLanguage === 'jp' ? 'Japanese' : 'English'})`;
            
            loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
        });
    });
    
    // Function to load and play an episode with language selection
    function loadAndPlayEpisode(season, episode, language) {
        // Get the correct video source based on season and language
        let videoSrc = null;
        
        if (language === 'jp') {
            // Japanese version
            if (season === '1' && season1Videos[episode]) {
                videoSrc = season1Videos[episode];
            }
        } else {
            // English version
            if (season === '1' && season1VideosEng[episode]) {
                videoSrc = season1VideosEng[episode];
            }
        }
        
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
                    <p>${language === 'en' ? 'English version coming soon' : 'Video not available for this episode'}</p>
                </div>
            `;
        }
        
        // Show the modal
        videoModal.style.display = 'flex';
        
        console.log(`Playing Season ${season}, Episode ${episode} in ${language === 'jp' ? 'Japanese' : 'English'}`);
    }
    
    // Language selection handlers
    document.getElementById('langJapanese').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'jp';
        
        // Update active state of language buttons
        document.getElementById('langEnglish').classList.remove('active');
        this.classList.add('active');
        
        loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
    });
    
    document.getElementById('langEnglish').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'en';
        
        // Update active state of language buttons
        document.getElementById('langJapanese').classList.remove('active');
        this.classList.add('active');
        
        loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
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
    const stars = document.querySelectorAll('.star');
    
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
            
            console.log(`User rated the series ${rating}/10`);
        });
    });
    
    // Action buttons functionality
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const watchlistBtn = document.querySelector('.watchlist-btn');
    const trailerBtn = document.querySelector('.trailer-btn');
    
    subscribeBtn.addEventListener('click', () => {
        // Toggle subscribe status
        const isSubscribed = subscribeBtn.classList.toggle('subscribed');
        
        if (isSubscribed) {
            subscribeBtn.innerHTML = '<i class="icon">✓</i> Subscribed';
            subscribeBtn.style.backgroundColor = '#388E3C';
        } else {
            subscribeBtn.innerHTML = '<i class="icon">🔔</i> Subscribe to Series';
            subscribeBtn.style.backgroundColor = '#4CAF50';
        }
        
        console.log(`User ${isSubscribed ? 'subscribed to' : 'unsubscribed from'} the series`);
    });
    
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
        
        console.log(`User ${isInWatchlist ? 'added series to' : 'removed series from'} watchlist`);
    });
    
    trailerBtn.addEventListener('click', () => {
        // Open the video modal with the trailer
        modalTitle.textContent = 'Steins;Gate - Official Trailer';
        
        // Use the official trailer embed URL
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/uMYhjVwp0Fk"; // Official Steins;Gate trailer
        trailerIframe.width = '100%';
        trailerIframe.height = '100%';
        trailerIframe.style.position = 'absolute';
        trailerIframe.style.top = '0';
        trailerIframe.style.left = '0';
        trailerIframe.frameBorder = '0';
        trailerIframe.allowFullscreen = true;
        
        videoContainer.appendChild(trailerIframe);
        
        videoModal.style.display = 'flex';
        console.log('Playing series trailer');
    });
    
    // Quality selector implementation
    const qualitySelector = document.querySelector('.quality-selector');
    qualitySelector.addEventListener('change', function() {
        const selectedQuality = this.value;
        console.log(`Quality changed to: ${selectedQuality}`);
        
        // Actually change the video quality (this would need to communicate with the video player)
        // This is a placeholder implementation since most embed players handle quality internally
        if (videoContainer.querySelector('iframe')) {
            // In a real implementation, you might need to reload the iframe with a quality parameter
            // or use player API to set quality
            
            // For demonstration purposes, show a notification
            const notification = document.createElement('div');
            notification.className = 'quality-notification';
            notification.textContent = `Quality changing to ${selectedQuality}...`;
            notification.style.position = 'absolute';
            notification.style.bottom = '10px';
            notification.style.left = '50%';
            notification.style.transform = 'translateX(-50%)';
            notification.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            notification.style.color = 'white';
            notification.style.padding = '8px 12px';
            notification.style.borderRadius = '4px';
            notification.style.zIndex = '10';
            
            videoContainer.appendChild(notification);
            
            // Remove notification after 2 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 2000);
        }
    });

    // Add keyboard shortcuts for video player
    document.addEventListener('keydown', (e) => {
        if (videoModal.style.display === 'flex') {
            // Escape key to close modal
            if (e.key === 'Escape') {
                closeModal.click();
            }
            
            // Space bar to play/pause (if player API allows it)
            if (e.key === ' ' && !e.target.matches('input, textarea')) {
                e.preventDefault(); // Prevent page scroll
                // This would require direct integration with the video player API
                console.log('Play/Pause toggle');
            }
            
            // Arrow keys for seeking (if player API allows it)
            if (e.key === 'ArrowRight') {
                // Seek forward 10 seconds
                console.log('Seek forward');
            }
            
            if (e.key === 'ArrowLeft') {
                // Seek backward 10 seconds
                console.log('Seek backward');
            }
        }
    });
    
    // Custom CSS styles for episode list
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .episode-item {
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .episode-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        
        .episode-thumbnail {
            position: relative;
            overflow: hidden;
            border-radius: 4px;
        }
        
        .episode-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .episode-item:hover .play-overlay {
            opacity: 1;
        }
        
        .play-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: rgba(229, 9, 20, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
        }
    `;
    
    document.head.appendChild(styleElement);
});