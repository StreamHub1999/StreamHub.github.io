document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for Season 1 (12 episodes)
    const season1Videos = {
        "1": "https://voe.sx/e/tcdudchm5qcp", // Episode 1
        "2": "https://voe.sx/e/hlcnxt3erxjb", // Episode 2
        "3": "https://voe.sx/e/wxv858za3klt", // Episode 3
        "4": "https://voe.sx/e/7rai9drjj42u", // Episode 4
        "5": "https://voe.sx/e/tirre8dzgyli", // Episode 5
        "6": "https://voe.sx/e/t6qwgwatdpdm", // Episode 6
        "7": "https://voe.sx/e/btkh3rfprios", // Episode 7
        "8": "https://voe.sx/e/1qgamprgoka2", // Episode 8
        "9": "https://voe.sx/e/mcbblraulvkc", // Episode 9
        "10": "https://voe.sx/e/vbfyzabq4afu", // Episode 10
        "11": "https://voe.sx/e/oxxwglbka9gc", // Episode 11
        "12": "https://voe.sx/e/wwlkyiyrddin"  // Episode 12
    };
    
    // OVA Episode URLs
    const ovaVideos = {
        "1": "https://voe.sx/e/3q3z9l3jcw6i" // Another: The Other - Inga OVA
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {
        "1": "https://voe.sx/e/tcdudchm5qcp", // Same links as Japanese for now
        "2": "https://voe.sx/e/hlcnxt3erxjb",
        "3": "https://voe.sx/e/wxv858za3klt",
        "4": "https://voe.sx/e/7rai9drjj42u",
        "5": "https://voe.sx/e/tirre8dzgyli",
        "6": "https://voe.sx/e/t6qwgwatdpdm",
        "7": "https://voe.sx/e/btkh3rfprios",
        "8": "https://voe.sx/e/1qgamprgoka2",
        "9": "https://voe.sx/e/mcbblraulvkc",
        "10": "https://voe.sx/e/vbfyzabq4afu",
        "11": "https://voe.sx/e/oxxwglbka9gc",
        "12": "https://voe.sx/e/wwlkyiyrddin"
    };
    
    const ovaVideosEng = {
        "1": "https://voe.sx/e/3q3z9l3jcw6i" // Same link as Japanese for now
    };
    
    // Series thumbnail
    const seriesThumbnail = "https://aniworld.to/public/img/cover/another-stream-cover-b6AzljvYW1fg6QclAXZGsjGCa3mxvzn1_220x330.jpg";
    
    // Current playing episode tracking
    let currentSeason = "1";
    let currentEpisode = "1";
    let currentLanguage = "jp"; // Default language is Japanese
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    const episodesTitle = document.querySelector('.episodes-container h2');
    const episodesLists = {
        season1: document.getElementById('season1-episodes')
    };
    
    // Fix episode thumbnails - set same series image for all thumbnails
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.src = seriesThumbnail;
        img.alt = "Another";
        // Adjust the image display to show properly in the thumbnail container
        img.style.objectFit = "cover";
        img.style.objectPosition = "top center";
    });
    
    // Video player related elements
    const videoModal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoContainer = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');
    
    // Episode click handler - Open video modal
    const episodeItems = document.querySelectorAll('.episode-item');
    episodeItems.forEach(episode => {
        episode.addEventListener('click', () => {
            // Get the current episode number from the clicked element
            currentEpisode = episode.getAttribute('data-episode');
            
            // Get season number (default to 1 if not found)
            const activeSeasonBox = document.querySelector('.season-box.active');
            currentSeason = activeSeasonBox ? activeSeasonBox.getAttribute('data-season') : '1';
            
            // Get episode details for the modal title
            const episodeNumber = episode.querySelector('.episode-number').textContent;
            const episodeTitle = episode.querySelector('.episode-title').textContent;
            
            // Set modal title
            modalTitle.textContent = `Another - ${episodeNumber} ${episodeTitle}`;
            
            // Get video source based on language and episode
            let videoSrc = null;
            if (currentLanguage === 'jp') {
                videoSrc = season1Videos[currentEpisode];
            } else {
                videoSrc = season1VideosEng[currentEpisode];
            }
            
            // Set up the video player
            if (videoSrc) {
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
                
                // Show the modal
                videoModal.style.display = 'flex';
                console.log(`Playing Episode ${currentEpisode} in ${currentLanguage === 'jp' ? 'Japanese' : 'English'}`);
            } else {
                console.error('Video source not found for the selected episode');
                
                // Show error message in the video container
                videoContainer.innerHTML = `
                    <div class="video-placeholder">
                        <div class="play-button">⚠️</div>
                        <p>Video source not available for this episode</p>
                    </div>
                `;
                
                // Show the modal anyway to display the error
                videoModal.style.display = 'flex';
            }
        });
    });
    
    // Language selection handlers
    const langJapanese = document.getElementById('langJapanese');
    const langEnglish = document.getElementById('langEnglish');
    
    if (langJapanese) {
        langJapanese.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            currentLanguage = 'jp';
            
            // Update active state of language buttons
            langEnglish.classList.remove('active');
            this.classList.add('active');
            
            // If a video is currently playing, reload it with the new language
            if (videoModal.style.display === 'flex') {
                loadVideoWithCurrentSettings();
            }
        });
    }
    
    if (langEnglish) {
        langEnglish.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            currentLanguage = 'en';
            
            // Update active state of language buttons
            langJapanese.classList.remove('active');
            this.classList.add('active');
            
            // If a video is currently playing, reload it with the new language
            if (videoModal.style.display === 'flex') {
                loadVideoWithCurrentSettings();
            }
        });
    }
    
    // Helper function to load video with current settings
    function loadVideoWithCurrentSettings() {
        let videoSrc = null;
        
        if (currentLanguage === 'jp') {
            videoSrc = season1Videos[currentEpisode];
        } else {
            videoSrc = season1VideosEng[currentEpisode];
        }
        
        if (videoSrc) {
            const iframe = videoContainer.querySelector('iframe');
            if (iframe) {
                iframe.src = videoSrc;
            } else {
                // Create new iframe if it doesn't exist
                const newIframe = document.createElement('iframe');
                newIframe.src = videoSrc;
                newIframe.width = '100%';
                newIframe.height = '100%';
                newIframe.style.position = 'absolute';
                newIframe.style.top = '0';
                newIframe.style.left = '0';
                newIframe.frameBorder = '0';
                newIframe.scrolling = 'no';
                newIframe.allowFullscreen = true;
                
                videoContainer.innerHTML = '';
                videoContainer.appendChild(newIframe);
            }
            
            // Update modal title with language
            const langText = currentLanguage === 'jp' ? 'Japanese' : 'English';
            if (modalTitle.textContent.includes('(')) {
                modalTitle.textContent = modalTitle.textContent.split('(')[0] + `(${langText})`;
            } else {
                modalTitle.textContent = modalTitle.textContent + ` (${langText})`;
            }
        }
    }
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', () => {
        videoModal.style.display = 'none';
        // Stop any playing videos by clearing the container
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <div class="play-button">▶</div>
                <p>Select an episode to watch</p>
            </div>
        `;
    });
    
    // Close modal when clicking outside the content
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            // Stop any playing videos by clearing the container
            videoContainer.innerHTML = `
                <div class="video-placeholder">
                    <div class="play-button">▶</div>
                    <p>Select an episode to watch</p>
                </div>
            `;
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
    
    if (subscribeBtn) {
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
    }
    
    if (watchlistBtn) {
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
    }
    
    if (trailerBtn) {
        trailerBtn.addEventListener('click', () => {
            // Open the video modal with the trailer
            modalTitle.textContent = 'Another - Official Trailer';
            
            // Use the official trailer embed URL
            videoContainer.innerHTML = '';
            
            const trailerIframe = document.createElement('iframe');
            trailerIframe.src = "https://www.youtube.com/embed/kupW7eDG48s"; // Official Another trailer
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
    }
    
    // Quality selector implementation
    const qualitySelector = document.querySelector('.quality-selector');
    if (qualitySelector) {
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
    }

    // Add keyboard shortcuts for video player
    document.addEventListener('keydown', (e) => {
        if (videoModal.style.display === 'flex') {
            // Escape key to close modal
            if (e.key === 'Escape') {
                closeModal.click();
            }
        }
    });
    
    // Add CSS styles for fixed elements
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .episode-item {
            cursor: pointer;
            transition: transform 0.2s ease;
        }
        
        .episode-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .episode-thumbnail {
            position: relative;
            overflow: hidden;
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
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
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
            width: 40px;
            height: 40px;
            background-color: rgba(229, 9, 20, 0.8);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 20px;
        }
    `;
    
    document.head.appendChild(styleElement);
});