document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for Season 1 (embedded format)
    const season1Videos = {
        "1": "https://voe.sx/e/d25turolc96r", // Episode 1
        "2": "https://voe.sx/e/uwfzh6qx0h48", // Episode 2
        "3": "https://voe.sx/e/k98o1t2tn9oa", // Episode 3
        "4": "https://voe.sx/e/tohxreu7vgxd", // Episode 4
        "5": "https://voe.sx/e/m1veeinojkat", // Episode 5
        "6": "https://voe.sx/e/lugtwvoap0br", // Episode 6
        "7": "https://voe.sx/e/zzro6qilocpt", // Episode 7
        "8": "https://voe.sx/e/i5pclvxc6bu8", // Episode 8
        "9": "https://voe.sx/e/8r2weqt037cn", // Episode 9
        "10": "https://voe.sx/e/cbrzemj3qa0z", // Episode 10
        "11": "https://voe.sx/e/orjccfo7mqnz", // Episode 11
        "12": "https://voe.sx/e/jmcrkqxpwrsy", // Episode 12
        "13": "https://voe.sx/e/onpkm81hobfn", // Episode 13
        "14": "https://voe.sx/e/odaptdfhdgrv", // Episode 14
        "15": "https://voe.sx/e/qanrn0r2xymc", // Episode 15
        "16": "https://voe.sx/e/9monpxepnso8", // Episode 16
        "17": "https://voe.sx/e/fquuhwkcgfq9", // Episode 17
        "18": "https://voe.sx/e/eukgbrruaerc", // Episode 18
        "19": "https://voe.sx/e/ncgkwcz7grss", // Episode 19
        "20": "https://voe.sx/e/qdqv5igz16ii", // Episode 20
        "21": "https://voe.sx/e/fbrdat4mfhca", // Episode 21
        "22": "https://voe.sx/e/wk2lt8c2kpud"  // Episode 22
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {};
    
    // Series thumbnail
    const seriesThumbnail = "https://aniworld.to/public/img/cover/your-lie-in-april-stream-cover-Dh4NQ6b0M2mKWei4c5hzugmntqN9WuYh_220x330.jpg";
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    const episodesTitle = document.querySelector('.episodes-container h2');
    const episodesLists = {
        season1: document.getElementById('season1-episodes')
    };
    
    // Set the same thumbnail for all episodes
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.src = seriesThumbnail;
        img.alt = "Your Lie in April";
        // Adjust the image display to show properly in the thumbnail container
        img.style.objectPosition = "top center";
    });
    
    // Current playing episode tracking
    let currentSeason = "1";
    let currentEpisode = "1";
    let currentLanguage = "jp"; // Default language is Japanese
    
    seasonBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove active class from all boxes
            seasonBoxes.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked box
            box.classList.add('active');
            
            // Update episodes title
            const seasonNumber = box.dataset.season;
            episodesTitle.textContent = `Episodes - Season ${seasonNumber}`;
            
            // Hide all episodes lists
            Object.values(episodesLists).forEach(list => {
                list.classList.add('hidden');
            });
            
            // Show the selected season's episodes
            episodesLists[`season${seasonNumber}`].classList.remove('hidden');
            
            // Update current season
            currentSeason = seasonNumber;
            
            console.log(`Viewing episodes for Season ${seasonNumber}`);
        });
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
            // Update tracking variables
            currentSeason = document.querySelector('.season-box.active').dataset.season;
            currentEpisode = episode.dataset.episode;
            
            loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
        });
    });
    
    // Function to load and play an episode with language selection
    function loadAndPlayEpisode(season, episode, language) {
        const episodeItem = document.querySelector(`.episode-item[data-episode="${episode}"]`);
        if (!episodeItem) return;
        
        const episodeTitle = episodeItem.querySelector('.episode-title').textContent;
        
        // Set the modal title with language indicator
        const langText = language === 'jp' ? 'Japanese' : 'English';
        modalTitle.textContent = `Your Lie in April - S${season}:E${episode} ${episodeTitle} (${langText})`;
        
        // Get the correct video source based on season and language
        let videoSrc = null;
        
        if (language === 'jp') {
            // Japanese version
            if (season === '1' && season1Videos[episode]) {
                videoSrc = season1Videos[episode];
            }
        } else {
            // English version (placeholder for now)
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
        
        console.log(`Playing Season ${season}, Episode ${episode} in ${language}`);
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
        modalTitle.textContent = 'Your Lie in April - Official Trailer';
        
        // Use the official trailer embed URL
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/3aL0gDZtFbE"; // Official Your Lie in April trailer
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
    
    // Quality selector (for demonstration - would need real implementation)
    const qualitySelector = document.querySelector('.quality-selector');
    qualitySelector.addEventListener('change', function() {
        console.log(`Quality changed to: ${this.value}`);
        // In a real implementation, this would change the video quality
    });
});