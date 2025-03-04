document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for all seasons
    // Season 1 videos (25 episodes)
    const season1Videos = {
        "1": "https://voe.sx/e/gc7axhoqyakl", // Episode 1
        "2": "https://voe.sx/e/4njnpj4h2toa", // Episode 2
        "3": "https://voe.sx/e/69cees2bgau8", // Episode 3
        "4": "https://voe.sx/e/zricpfscm7m6", // Episode 4
        "5": "https://voe.sx/e/zaea32xgyy3j", // Episode 5
        "6": "https://voe.sx/e/mmopj2jls4ks", // Episode 6
        "7": "https://voe.sx/e/5phsvrhjwqe2", // Episode 7
        "8": "https://voe.sx/e/jw596xuo4kst", // Episode 8
        "9": "https://voe.sx/e/rspcgw5lmjfy", // Episode 9
        "10": "https://voe.sx/e/cldbt03cgfma", // Episode 10
        "11": "https://voe.sx/e/lvtzvdcldaiz", // Episode 11
        "12": "https://voe.sx/e/oa0psvx70nor", // Episode 12
        "13": "https://voe.sx/e/ialfzxke3zlk", // Episode 13
        "14": "https://voe.sx/e/ufwtluztehd9", // Episode 14
        "15": "https://voe.sx/e/u5xkuwheojof", // Episode 15
        "16": "https://voe.sx/e/xwpltyu6eejh", // Episode 16
        "17": "https://voe.sx/e/5ikuzmg5edro", // Episode 17
        "18": "https://voe.sx/e/fmxbi5e5cbn2", // Episode 18
        "19": "https://voe.sx/e/pj6e3vncq55r", // Episode 19
        "20": "https://voe.sx/e/mwpcic9vt3nt", // Episode 20
        "21": "https://voe.sx/e/omiytfcrmoxj", // Episode 21
        "22": "https://voe.sx/e/imtxxkgpjama", // Episode 22
        "23": "https://voe.sx/e/qvpfpfqqsynn", // Episode 23
        "24": "https://voe.sx/e/kegz5c8d0gh3", // Episode 24
        "25": "https://voe.sx/e/a7iigur0h3ru"  // Episode 25
    };
    
    // Season 2 videos (12 episodes)
    const season2Videos = {
        "1": "https://voe.sx/e/ilixrwjyuhks", // Episode 1
        "2": "https://voe.sx/e/gkgcorpfzjy6", // Episode 2
        "3": "https://voe.sx/e/1m0qzvyvvcut", // Episode 3
        "4": "https://voe.sx/e/tef1salvzgyc", // Episode 4
        "5": "https://voe.sx/e/qcicufbcy418", // Episode 5
        "6": "https://voe.sx/e/4g3b2td7tzyo", // Episode 6
        "7": "https://voe.sx/e/abtebiowl346", // Episode 7
        "8": "https://voe.sx/e/eb4d0r16ezb9", // Episode 8
        "9": "https://voe.sx/e/evx3falphqah", // Episode 9
        "10": "https://voe.sx/e/eotaipvpgvgy", // Episode 10
        "11": "https://voe.sx/e/beteqruynbmi", // Episode 11
        "12": "https://voe.sx/e/5ofrjadxhoz9"  // Episode 12
    };
    
    // Season 3 videos (22 episodes)
    const season3Videos = {
        "1": "https://voe.sx/e/cez1lmkjby6l", // Episode 1
        "2": "https://voe.sx/e/ozqjkpqjbwkp", // Episode 2
        "3": "https://voe.sx/e/paixqsovlzph", // Episode 3
        "4": "https://voe.sx/e/xxcxikxqkmwi", // Episode 4
        "5": "https://voe.sx/e/ysawrelzpao0", // Episode 5
        "6": "https://voe.sx/e/zis5p7wsxmq3", // Episode 6
        "7": "https://voe.sx/e/jnqtuhpyfgfm", // Episode 7
        "8": "https://voe.sx/e/1hs04xmelhip", // Episode 8
        "9": "https://voe.sx/e/abytl609zuhr", // Episode 9
        "10": "https://voe.sx/e/vmzi0gd5kism", // Episode 10
        "11": "https://voe.sx/e/lfgsu3pckmkp", // Episode 11
        "12": "https://voe.sx/e/bwkkyahffgaw", // Episode 12
        "13": "https://voe.sx/e/vwp08fzogfx0", // Episode 13
        "14": "https://voe.sx/e/jdcgxnn34etp", // Episode 14
        "15": "https://voe.sx/e/siiwykj2b7ix", // Episode 15
        "16": "https://voe.sx/e/hn2t0xotgndf", // Episode 16
        "17": "https://voe.sx/e/ovx5fo2hfnks", // Episode 17
        "18": "https://voe.sx/e/wseknpi4dsuw", // Episode 18
        "19": "https://voe.sx/e/hvdej4d5hqwf", // Episode 19
        "20": "https://voe.sx/e/2fcdkurfajqy", // Episode 20
        "21": "https://voe.sx/e/nmmaek6czqxb", // Episode 21
        "22": "https://voe.sx/e/tgoiaywb2fob"  // Episode 22
    };
    
    // Season 4 videos (30 episodes)
    const season4Videos = {
        "1": "https://voe.sx/e/nofwflxnx3th", // Episode 1
        "2": "https://voe.sx/e/uhot06xndyht", // Episode 2
        "3": "https://voe.sx/e/zcfclysosyd5", // Episode 3
        "4": "https://voe.sx/e/ugygo95zdmx2", // Episode 4
        "5": "https://voe.sx/e/20qwxu29dmjs", // Episode 5
        "6": "https://voe.sx/e/vzsuy5dodmfv", // Episode 6
        "7": "https://voe.sx/e/w4qrbwyxrvul", // Episode 7
        "8": "https://voe.sx/e/tu2bhpxdvvmu", // Episode 8
        "9": "https://voe.sx/e/dqaotcaazmlp", // Episode 9
        "10": "https://voe.sx/e/qihd7nbxukeg", // Episode 10
        "11": "https://voe.sx/e/zpeaisquraum", // Episode 11
        "12": "https://voe.sx/e/wmlwhgpk36w9", // Episode 12
        "13": "https://voe.sx/e/dkk9nqca8gkj", // Episode 13
        "14": "https://voe.sx/e/svhbmvg9qmno", // Episode 14
        "15": "https://voe.sx/e/ihhc7syob2vu", // Episode 15
        "16": "https://voe.sx/e/scswihdkxzgx", // Episode 16
        "17": "https://voe.sx/e/2cycb1ndojsu", // Episode 17
        "18": "https://voe.sx/e/is6csfsdxykt", // Episode 18
        "19": "https://voe.sx/e/ro55b2c5zfa2", // Episode 19
        "20": "https://voe.sx/e/hcbjmpmxfo37", // Episode 20
        "21": "https://voe.sx/e/6znv37vuzprp", // Episode 21
        "22": "https://voe.sx/e/6zhcmxmvqir2", // Episode 22
        "23": "https://voe.sx/e/nfpwy8svk5ke", // Episode 23
        "24": "https://voe.sx/e/fb0poyv5yl7i", // Episode 24
        "25": "https://voe.sx/e/e5w9qsnhk4ds", // Episode 25
        "26": "https://voe.sx/e/2o1szfxbrnpg", // Episode 26
        "27": "https://voe.sx/e/mi4y3nxmmybl", // Episode 27
        "28": "https://voe.sx/e/cvabbr1etzck", // Episode 28
        "29": "https://voe.sx/e/tb9mmpqzeco9", // Episode 29
        "30": "https://voe.sx/e/dc4xexywh8v6"  // Episode 30
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {};
    const season2VideosEng = {};
    const season3VideosEng = {};
    const season4VideosEng = {};
    
    // Series thumbnail
    const seriesThumbnail = "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_FMjpg_UX1000_.jpg";
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    const episodesTitle = document.querySelector('.episodes-container h2');
    const episodesLists = {
        season1: document.getElementById('season1-episodes'),
        season2: document.getElementById('season2-episodes'),
        season3: document.getElementById('season3-episodes'),
        season4: document.getElementById('season4-episodes')
    };
    
    // Set the same thumbnail for all episodes
    document.querySelectorAll('.episode-item .episode-thumbnail img').forEach(img => {
        img.src = seriesThumbnail;
        img.alt = "Attack on Titan";
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
        const episodeItem = document.querySelector(`#season${season}-episodes .episode-item[data-episode="${episode}"]`);
        if (!episodeItem) return;
        
        const episodeTitle = episodeItem.querySelector('.episode-title').textContent;
        
        // Set the modal title with language indicator
        const langText = language === 'jp' ? 'Japanese' : 'English';
        modalTitle.textContent = `Attack on Titan - S${season}:E${episode} ${episodeTitle} (${langText})`;
        
        // Get the correct video source based on season and language
        let videoSrc = null;
        
        if (language === 'jp') {
            // Japanese version
            switch(season) {
                case '1':
                    videoSrc = season1Videos[episode];
                    break;
                case '2':
                    videoSrc = season2Videos[episode];
                    break;
                case '3':
                    videoSrc = season3Videos[episode];
                    break;
                case '4':
                    videoSrc = season4Videos[episode];
                    break;
            }
        } else {
            // English version (placeholder for now)
            switch(season) {
                case '1':
                    videoSrc = season1VideosEng[episode];
                    break;
                case '2':
                    videoSrc = season2VideosEng[episode];
                    break;
                case '3':
                    videoSrc = season3VideosEng[episode];
                    break;
                case '4':
                    videoSrc = season4VideosEng[episode];
                    break;
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
        modalTitle.textContent = 'Attack on Titan - Official Trailer';
        
        // Use the official trailer embed URL
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/MGRm4IzK1SQ"; // Official Attack on Titan trailer
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