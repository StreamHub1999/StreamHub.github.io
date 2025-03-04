document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for Season 1 (with embed URLs)
    const season1Videos = {
        "1": "https://voe.sx/e/rnztugmhy5cf",
        "2": "https://voe.sx/e/kibxavimlszr",
        "3": "https://voe.sx/e/ttmrhvvxa85m",
        "4": "https://voe.sx/e/se8bmkxul7km",
        "5": "https://voe.sx/e/xlbrwctspc0d",
        "6": "https://voe.sx/e/t9cdhpemyta1",
        "7": "https://voe.sx/e/fxlxm1gifxfa",
        "8": "https://voe.sx/e/6vpakn8k8bo2",
        "9": "https://voe.sx/e/pj6obhihanmx",
        "10": "https://voe.sx/e/gm0bq8huue8u"
    };
    
    // Episode video URLs for Season 2 (with embed URLs)
    const season2Videos = {
        "1": "https://voe.sx/e/xxpj8nq50igc",
        "2": "https://voe.sx/e/ae9hnjyxhxoz",
        "3": "https://voe.sx/e/mparfozzcwj0",
        "4": "https://voe.sx/e/yjlmlgcaexlo",
        "5": "https://voe.sx/e/c8jxenl8whad",
        "6": "https://voe.sx/e/3pfiajfh4cw9",
        "7": "https://voe.sx/e/qgob7xdbtvzl",
        "8": "https://voe.sx/e/sgwbhgeiejzz",
        "9": "https://voe.sx/e/40xrks3re3ro",
        "10": "https://voe.sx/e/4fs5hi3e9ycc"
    };
    
    // Episode video URLs for Season 3 (with embed URLs)
    const season3Videos = {
        "1": "https://voe.sx/e/b7n6okwdyttn",
        "2": "https://voe.sx/e/xnysuy8l5mmj",
        "3": "https://voe.sx/e/sbvxquopayes",
        "4": "https://voe.sx/e/fjcthja9gcua",
        "5": "https://voe.sx/e/4dswpbp4egvi",
        "6": "https://voe.sx/e/ifq149bnnzao",
        "7": "https://voe.sx/e/tqholrjzrkag",
        "8": "https://voe.sx/e/6jtychh9dayt",
        "9": "https://voe.sx/e/sl5ikrmrrq2p",
        "10": "https://voe.sx/e/vz2ebatv16wq"
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {};
    const season2VideosEng = {};
    const season3VideosEng = {};
    
    // Single thumbnail for all episodes
    const seriesThumbnail = "https://s.to/public/img/cover/from-stream-cover-lDUcOqk1x2G3wrwNiMEbMwxFgWXgy48r_220x330.jpg";
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    const episodesTitle = document.querySelector('.episodes-container h2');
    const episodesLists = {
        season1: document.getElementById('season1-episodes'),
        season2: document.getElementById('season2-episodes'),
        season3: document.getElementById('season3-episodes')
    };
    
    // Set the same thumbnail for all episodes
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.src = seriesThumbnail;
        img.alt = "FROM";
        // Adjust the image display to show properly in the thumbnail container
        img.style.objectPosition = "top center";
    });
    
    // Current playing episode tracking
    let currentSeason = "1";
    let currentEpisode = "1";
    let currentLanguage = "de"; // Default language is German
    
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
        const langText = language === 'de' ? 'German' : 'English';
        modalTitle.textContent = `FROM - S${season}:E${episode} ${episodeTitle} (${langText})`;
        
        // Get the correct video source based on season and language
        let videoSrc = null;
        
        if (language === 'de') {
            // German version
            if (season === '1' && season1Videos[episode]) {
                videoSrc = season1Videos[episode];
            } else if (season === '2' && season2Videos[episode]) {
                videoSrc = season2Videos[episode];
            } else if (season === '3' && season3Videos[episode]) {
                videoSrc = season3Videos[episode];
            }
        } else {
            // English version (placeholder for now)
            if (season === '1' && season1VideosEng[episode]) {
                videoSrc = season1VideosEng[episode];
            } else if (season === '2' && season2VideosEng[episode]) {
                videoSrc = season2VideosEng[episode];
            } else if (season === '3' && season3VideosEng[episode]) {
                videoSrc = season3VideosEng[episode];
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
    document.getElementById('langGerman').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'de';
        
        // Update active state of language buttons
        document.getElementById('langEnglish').classList.remove('active');
        this.classList.add('active');
        
        loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
    });
    
    document.getElementById('langEnglish').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'en';
        
        // Update active state of language buttons
        document.getElementById('langGerman').classList.remove('active');
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
        modalTitle.textContent = 'FROM - Official Trailer';
        
        // Use the official trailer embed URL
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/pDHqAj4eJcM";
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