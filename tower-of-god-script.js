document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for Season 1 (updated links)
    const season1Videos = {
        "1": "https://voe.sx/e/7qifgybcofks", // Episode 1
        "2": "https://voe.sx/e/ia687gpvu75g", // Episode 2
        "3": "https://voe.sx/e/48zvdtowql0d", // Episode 3
        "4": "https://voe.sx/e/pmchj513h6ha", // Episode 4
        "5": "https://voe.sx/e/vs5cmzu7egho", // Episode 5
        "6": "https://voe.sx/e/ozj1vqwixeam", // Episode 6
        "7": "https://voe.sx/e/5pfzanvjsmea", // Episode 7
        "8": "https://voe.sx/e/rv2dmmebsbla", // Episode 8
        "9": "https://voe.sx/e/bcf48ovshdst", // Episode 9
        "10": "https://voe.sx/e/flss0wbjly90", // Episode 10
        "11": "https://voe.sx/e/oobq7tpmlxmm", // Episode 11
        "12": "https://voe.sx/e/wpd9plyo09ms", // Episode 12
        "13": "https://voe.sx/e/y4ijote3fi5i"  // Episode 13
    };
    
    // Season 2 videos (updated with all 26 episodes)
    const season2Videos = {
        "1": "https://voe.sx/e/3s7jnuuq8epf", // Episode 1
        "2": "https://voe.sx/e/ruopn6lr0nln", // Episode 2
        "3": "https://voe.sx/e/llenwgxs3z5w", // Episode 3
        "4": "https://voe.sx/e/wyv3kxkv33rh", // Episode 4
        "5": "https://voe.sx/e/pht60rkobqcb", // Episode 5
        "6": "https://voe.sx/e/tvedxs46kkxw", // Episode 6
        "7": "https://voe.sx/e/r9icgzmf85ch", // Episode 7
        "8": "https://voe.sx/e/gmkcp9qryhfb", // Episode 8
        "9": "https://voe.sx/e/i0ufazig31zq", // Episode 9
        "10": "https://voe.sx/e/hhlolcdklyeg", // Episode 10
        "11": "https://voe.sx/e/d4zgmzpmvlfo", // Episode 11
        "12": "https://voe.sx/e/opdbivwntvwf", // Episode 12
        "13": "https://voe.sx/e/h41epqvpljru", // Episode 13
        "14": "https://voe.sx/e/iwswxmakvmru", // Episode 14
        "15": "https://voe.sx/e/d1rojiradxge", // Episode 15
        "16": "https://voe.sx/e/nz8u1ldfdqcr", // Episode 16
        "17": "https://voe.sx/e/ufqet0peszd9", // Episode 17
        "18": "https://voe.sx/e/bwfotmaonrlc", // Episode 18
        "19": "https://voe.sx/e/q57ehj8owy2u", // Episode 19
        "20": "https://voe.sx/e/suvwmhqqag3n", // Episode 20
        "21": "https://voe.sx/e/iyqgcotznirf", // Episode 21
        "22": "https://voe.sx/e/t3breorqojok", // Episode 22
        "23": "https://voe.sx/e/xrjpoputn1rt", // Episode 23
        "24": "https://voe.sx/e/hkto9ap9bxma", // Episode 24
        "25": "https://voe.sx/e/bqovjsyqhg57", // Episode 25
        "26": "https://voe.sx/e/ufxjw3xat0wq"  // Episode 26
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {};
    const season2VideosEng = {};
    
    // Series thumbnail
    const seriesThumbnail = "https://aniworld.to/public/img/cover/tower-of-god-stream-cover-8nCCJxa8YByM62sG2rhj2bG2LtGm6iRX_220x330.jpg";
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    const episodesTitle = document.querySelector('.episodes-container h2');
    const episodesLists = {
        season1: document.getElementById('season1-episodes'),
        season2: document.getElementById('season2-episodes')
    };
    
    // Set the same thumbnail for all episodes
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.src = seriesThumbnail;
        img.alt = "Tower of God";
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
        modalTitle.textContent = `Tower of God - S${season}:E${episode} ${episodeTitle} (${langText})`;
        
        // Get the correct video source based on season and language
        let videoSrc = null;
        
        if (language === 'jp') {
            // Japanese version
            if (season === '1' && season1Videos[episode]) {
                videoSrc = season1Videos[episode];
            } else if (season === '2' && season2Videos[episode]) {
                videoSrc = season2Videos[episode];
            }
        } else {
            // English version (placeholder for now)
            if (season === '1' && season1VideosEng[episode]) {
                videoSrc = season1VideosEng[episode];
            } else if (season === '2' && season2VideosEng[episode]) {
                videoSrc = season2VideosEng[episode];
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
        modalTitle.textContent = 'Tower of God - Official Trailer';
        
        // Use the official trailer embed URL
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/VT1KT8skP5c"; // Official Tower of God trailer
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