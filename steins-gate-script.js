document.addEventListener('DOMContentLoaded', function() {
    // Array of working thumbnail images for episodes
    const episodeThumbnails = {
        "1": "https://static.wikia.nocookie.net/steins-gate/images/3/38/Sg-ep1.jpg/revision/latest?cb=20130717063817",
        "2": "https://static.wikia.nocookie.net/steins-gate/images/6/68/Sg-ep2.jpg/revision/latest?cb=20130717064014",
        "3": "https://static.wikia.nocookie.net/steins-gate/images/1/18/Sg-ep3.jpg/revision/latest?cb=20130717064149",
        "4": "https://static.wikia.nocookie.net/steins-gate/images/d/dc/Sg-ep4.jpg/revision/latest?cb=20130717064318",
        "5": "https://static.wikia.nocookie.net/steins-gate/images/8/89/Sg-ep5.jpg/revision/latest?cb=20130717064423",
        "6": "https://static.wikia.nocookie.net/steins-gate/images/9/93/Sg-ep6.jpg/revision/latest?cb=20130717064531",
        "7": "https://static.wikia.nocookie.net/steins-gate/images/f/f2/Sg-ep7.jpg/revision/latest?cb=20130717064633",
        "8": "https://static.wikia.nocookie.net/steins-gate/images/c/c1/Sg-ep8.jpg/revision/latest?cb=20130717064738",
        "9": "https://static.wikia.nocookie.net/steins-gate/images/2/26/Sg-ep9.jpg/revision/latest?cb=20130717064847",
        "10": "https://static.wikia.nocookie.net/steins-gate/images/3/34/Sg-ep10.jpg/revision/latest?cb=20130717064953",
        "11": "https://static.wikia.nocookie.net/steins-gate/images/a/a9/Sg-ep11.jpg/revision/latest?cb=20130717065057",
        "12": "https://static.wikia.nocookie.net/steins-gate/images/7/7a/Sg-ep12.jpg/revision/latest?cb=20130717065155",
        "13": "https://static.wikia.nocookie.net/steins-gate/images/1/1e/Sg-ep13.jpg/revision/latest?cb=20130717065256",
        "14": "https://static.wikia.nocookie.net/steins-gate/images/2/27/Sg-ep14.jpg/revision/latest?cb=20130717065359",
        "15": "https://static.wikia.nocookie.net/steins-gate/images/c/c4/Sg-ep15.jpg/revision/latest?cb=20130717065457",
        "16": "https://static.wikia.nocookie.net/steins-gate/images/1/12/Sg-ep16.jpg/revision/latest?cb=20130717065553",
        "17": "https://static.wikia.nocookie.net/steins-gate/images/0/08/Sg-ep17.jpg/revision/latest?cb=20130717065650",
        "18": "https://static.wikia.nocookie.net/steins-gate/images/7/77/Sg-ep18.jpg/revision/latest?cb=20130717065749",
        "19": "https://static.wikia.nocookie.net/steins-gate/images/9/90/Sg-ep19.jpg/revision/latest?cb=20130717065846",
        "20": "https://static.wikia.nocookie.net/steins-gate/images/a/a6/Sg-ep20.jpg/revision/latest?cb=20130717065943",
        "21": "https://static.wikia.nocookie.net/steins-gate/images/a/ac/Sg-ep21.jpg/revision/latest?cb=20130717070037",
        "22": "https://static.wikia.nocookie.net/steins-gate/images/e/e5/Sg-ep22.jpg/revision/latest?cb=20130717070136",
        "23": "https://static.wikia.nocookie.net/steins-gate/images/2/2e/Sg-ep23.jpg/revision/latest?cb=20130717070234",
        "24": "https://static.wikia.nocookie.net/steins-gate/images/0/08/Sg-ep24.jpg/revision/latest?cb=20130717070336"
    };

    // Alternative thumbnails from other sources
    const backupThumbnails = {
        "1": "https://i.ytimg.com/vi/rBkYW1B__3Q/mqdefault.jpg",
        "2": "https://i.ytimg.com/vi/Z-mZMiguMdw/mqdefault.jpg",
        "3": "https://i.ytimg.com/vi/UjAMAgk5Pfc/mqdefault.jpg",
        "4": "https://i.ytimg.com/vi/jbgShRRN6AI/mqdefault.jpg",
        "5": "https://i.ytimg.com/vi/pSPdnUqUb-8/mqdefault.jpg",
        "6": "https://i.ytimg.com/vi/V_RgOfaPPD4/mqdefault.jpg",
        "7": "https://i.ytimg.com/vi/P-dV7Y9F9lc/mqdefault.jpg",
        "8": "https://i.ytimg.com/vi/n2pzL2ZFbWs/mqdefault.jpg",
        "9": "https://i.ytimg.com/vi/ffXHimOzr1k/mqdefault.jpg",
        "10": "https://i.ytimg.com/vi/rZi_1YSrIQw/mqdefault.jpg",
        "11": "https://i.ytimg.com/vi/znUzH7rHKeo/mqdefault.jpg",
        "12": "https://i.ytimg.com/vi/Wz9O5ZwGS8Q/mqdefault.jpg",
        "13": "https://i.ytimg.com/vi/dU10J-5h8M4/mqdefault.jpg",
        "14": "https://i.ytimg.com/vi/IIrCDAV3BgI/mqdefault.jpg",
        "15": "https://i.ytimg.com/vi/TfJIASllXTI/mqdefault.jpg",
        "16": "https://i.ytimg.com/vi/UemfCylcQCw/mqdefault.jpg",
        "17": "https://i.ytimg.com/vi/lUdKV0jnCWE/mqdefault.jpg",
        "18": "https://i.ytimg.com/vi/uD_ZR5QRG0s/mqdefault.jpg",
        "19": "https://i.ytimg.com/vi/oRq_OYT5KGQ/mqdefault.jpg",
        "20": "https://i.ytimg.com/vi/HnYEzc1UL6c/mqdefault.jpg",
        "21": "https://i.ytimg.com/vi/RdZ0VcX2aLM/mqdefault.jpg",
        "22": "https://i.ytimg.com/vi/3gJL08wa_ck/mqdefault.jpg",
        "23": "https://i.ytimg.com/vi/Yn7nigQbr4M/mqdefault.jpg",
        "24": "https://i.ytimg.com/vi/pCp-vSQEHMk/mqdefault.jpg"
    };

    // Episode video URLs for Season 1 with updated VOE links
    const season1Videos = {
        "1": "https://voe.sx/e/zcrrmw6me2e8", // Episode 1
        "2": "https://voe.sx/e/zkmwgdbyhzcp", // Episode 2
        "3": "https://voe.sx/e/8av6k19tpnhl", // Episode 3
        "4": "https://voe.sx/e/zwdg0ygdqmyy", // Episode 4
        "5": "https://voe.sx/e/oe5gys6mvhhh", // Episode 5
        "6": "https://voe.sx/placeholder6", // Episode 6 (no link provided)
        "7": "https://voe.sx/e/z3jljpuzlmvm", // Episode 7
        "8": "https://voe.sx/e/i0ep8g7r4sij", // Episode 8
        "9": "https://voe.sx/e/qgnaly0vdzgi", // Episode 9
        "10": "https://voe.sx/e/xsrqac5yccfd", // Episode 10
        "11": "https://voe.sx/e/1innavsqmsit", // Episode 11
        "12": "https://voe.sx/e/gcensw4pvjvn", // Episode 12
        "13": "https://voe.sx/e/oithddaqxm8f", // Episode 13
        "14": "https://voe.sx/e/renpkf8nm4oy", // Episode 14
        "15": "https://voe.sx/e/41zeakbjxc8y", // Episode 15
        "16": "https://voe.sx/e/lkzkxbfsvkkg", // Episode 16
        "17": "https://voe.sx/e/74q06mdvd39c", // Episode 17
        "18": "https://voe.sx/e/5ia1sk4y0onf", // Episode 18
        "19": "https://voe.sx/e/ovg7ovmatxiv", // Episode 19
        "20": "https://voe.sx/e/p4z9n9gcjlyw", // Episode 20
        "21": "https://voe.sx/e/ejxxqyombqg1", // Episode 21
        "22": "https://voe.sx/e/pn1d0fzgy4sz", // Episode 22
        "23": "https://voe.sx/e/fwkzzab8ubpc", // Episode 23
        "24": "https://voe.sx/e/3jc8pccuebs2"  // Episode 24
    };

    // English dubbed version URLs (placeholder - replace with actual links when available)
    const season1VideosEng = {
        // These are placeholder URLs - you'll need to replace these with the actual links
        "1": "https://voe.sx/placeholder1e", // Episode 1 (English)
        "2": "https://voe.sx/placeholder2e", // Episode 2 (English)
        "3": "https://voe.sx/placeholder3e", // Episode 3 (English)
        "4": "https://voe.sx/placeholder4e", // Episode 4 (English)
        "5": "https://voe.sx/placeholder5e", // Episode 5 (English)
        "6": "https://voe.sx/placeholder6e", // Episode 6 (English)
        "7": "https://voe.sx/placeholder7e", // Episode 7 (English)
        "8": "https://voe.sx/placeholder8e", // Episode 8 (English)
        "9": "https://voe.sx/placeholder9e", // Episode 9 (English)
        "10": "https://voe.sx/placeholder10e", // Episode 10 (English)
        "11": "https://voe.sx/placeholder11e", // Episode 11 (English)
        "12": "https://voe.sx/placeholder12e", // Episode 12 (English)
        "13": "https://voe.sx/placeholder13e", // Episode 13 (English)
        "14": "https://voe.sx/placeholder14e", // Episode 14 (English)
        "15": "https://voe.sx/placeholder15e", // Episode 15 (English)
        "16": "https://voe.sx/placeholder16e", // Episode 16 (English)
        "17": "https://voe.sx/placeholder17e", // Episode 17 (English)
        "18": "https://voe.sx/placeholder18e", // Episode 18 (English)
        "19": "https://voe.sx/placeholder19e", // Episode 19 (English)
        "20": "https://voe.sx/placeholder20e", // Episode 20 (English)
        "21": "https://voe.sx/placeholder21e", // Episode 21 (English)
        "22": "https://voe.sx/placeholder22e", // Episode 22 (English)
        "23": "https://voe.sx/placeholder23e", // Episode 23 (English)
        "24": "https://voe.sx/placeholder24e"  // Episode 24 (English)
    };
    
    // Series thumbnail
    const seriesThumbnail = "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg";
    
    // Add CSS for improved thumbnail display
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
            background-color: #111;
        }
        
        .episode-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: all 0.3s ease;
        }
        
        .episode-item:hover .episode-thumbnail img {
            transform: scale(1.1);
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
        
        .thumbnail-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #111;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            transition: opacity 0.3s ease;
        }
        
        .thumbnail-loader::after {
            content: "";
            width: 24px;
            height: 24px;
            border: 3px solid rgba(255, 255, 255, 0.2);
            border-top-color: #E50914;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleElement);
    
    // Function to fix episode thumbnails
    function fixEpisodeThumbnails() {
        document.querySelectorAll('.episode-item').forEach(episode => {
            const episodeNumber = episode.dataset.episode;
            const thumbnailContainer = episode.querySelector('.episode-thumbnail');
            const thumbnailImg = thumbnailContainer.querySelector('img');
            
            // Add loading indicator if not already present
            if (!thumbnailContainer.querySelector('.thumbnail-loader')) {
                const loader = document.createElement('div');
                loader.className = 'thumbnail-loader';
                thumbnailContainer.appendChild(loader);
            }
            
            if (thumbnailImg) {
                // Set the correct working thumbnail from our arrays
                if (episodeThumbnails[episodeNumber]) {
                    thumbnailImg.src = episodeThumbnails[episodeNumber];
                }
                
                // Handle successful load
                thumbnailImg.onload = function() {
                    const loader = thumbnailContainer.querySelector('.thumbnail-loader');
                    if (loader) {
                        loader.style.opacity = '0';
                        setTimeout(() => {
                            loader.parentNode.removeChild(loader);
                        }, 300);
                    }
                };
                
                // Add error handling in case the primary source fails
                thumbnailImg.onerror = function() {
                    // Try the backup thumbnail
                    if (backupThumbnails[episodeNumber]) {
                        this.src = backupThumbnails[episodeNumber];
                    } else {
                        // If both fail, use the series poster
                        this.src = seriesThumbnail;
                    }
                    
                    // Handle loader removal
                    const loader = thumbnailContainer.querySelector('.thumbnail-loader');
                    if (loader) {
                        loader.style.opacity = '0';
                        setTimeout(() => {
                            if (loader.parentNode) {
                                loader.parentNode.removeChild(loader);
                            }
                        }, 300);
                    }
                    
                    // Adjust the image display to show properly in the thumbnail container
                    this.style.objectFit = "cover";
                    this.style.objectPosition = "center center";
                };
            }
        });
    }
    
    // Fix thumbnails immediately
    fixEpisodeThumbnails();
    
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
});