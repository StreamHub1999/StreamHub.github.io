document.addEventListener('DOMContentLoaded', function() {
    // Episode video URLs for all seasons
    // Season 1 videos (30 episodes)
    const season1Videos = {
        "1": "https://voe.sx/e/axltryclziue", // Episode 1
        "2": "https://voe.sx/e/p8wgjbun4jka", // Episode 2
        "3": "https://voe.sx/e/2dv5dc8oaaoh", // Episode 3
        "4": "https://voe.sx/e/wvgjwuxhbwtz", // Episode 4
        "5": "https://voe.sx/e/kntsecdeyo5h", // Episode 5
        "6": "https://voe.sx/e/trfv2qig7ihg", // Episode 6
        "7": "https://voe.sx/e/n3tzeqgrquwe", // Episode 7
        "8": "https://voe.sx/e/w9wvoonzfrtx", // Episode 8
        "9": "https://voe.sx/e/4eiyolzbjcii", // Episode 9
        "10": "https://voe.sx/e/nunaxjiu1rn7", // Episode 10
        "11": "https://voe.sx/e/bwvi3fxmalij", // Episode 11
        "12": "https://voe.sx/e/ncd0v19bhzao", // Episode 12
        "13": "https://voe.sx/e/tujen00kah2r", // Episode 13
        "14": "https://voe.sx/e/bo29qnpedqra", // Episode 14
        "15": "https://voe.sx/e/ijkaebsrdwkv", // Episode 15
        "16": "https://voe.sx/e/gtmfiefpjiia", // Episode 16
        "17": "https://voe.sx/e/xtpsxealxkkc", // Episode 17
        "18": "https://voe.sx/e/ijtoqrfyf0n6", // Episode 18
        "19": "https://voe.sx/e/qhybhwgssvlj", // Episode 19
        "20": "https://voe.sx/e/dznalit8walp", // Episode 20
        "21": "https://voe.sx/e/xtjd8huyy4az", // Episode 21
        "22": "https://voe.sx/e/uagfymi0q58n", // Episode 22
        "23": "https://voe.sx/e/s1atx4k62iml", // Episode 23
        "24": "https://voe.sx/e/cucwkturv2zv", // Episode 24
        "25": "https://voe.sx/e/qvsu9jelgato", // Episode 25
        "26": "https://voe.sx/e/x7m1mfgvw6tw", // Episode 26
        "27": "https://voe.sx/e/2b8zmoaj84ar", // Episode 27
        "28": "https://voe.sx/e/sbnmphsxodey", // Episode 28
        "29": "https://voe.sx/e/odnbvhmwds6s", // Episode 29
        "30": "https://voe.sx/e/ropk3lnbxubc"  // Episode 30
    };
    
    // Season 2 videos (30 episodes)
    const season2Videos = {
        "1": "https://voe.sx/e/10ibzao2evev", // Episode 1
        "2": "https://voe.sx/e/7uranturfpsq", // Episode 2
        "3": "https://voe.sx/e/kdku1s2yzkws", // Episode 3
        "4": "https://voe.sx/e/hai77qhjdcvs", // Episode 4
        "5": "https://voe.sx/e/kx9hg6b0iipm", // Episode 5
        "6": "https://voe.sx/e/gihi6bdif5pe", // Episode 6
        "7": "https://voe.sx/e/e6xvhiu7h4uv", // Episode 7
        "8": "https://voe.sx/e/th1mchd7dcqa", // Episode 8
        "9": "https://voe.sx/e/ve6uoytif3qv", // Episode 9
        "10": "https://voe.sx/e/ekwcgeg8izcn", // Episode 10
        "11": "https://voe.sx/e/da9s1kwvpmaw", // Episode 11
        "12": "https://voe.sx/e/qmxgrzekseus", // Episode 12
        "13": "https://voe.sx/e/amjwjqrlhimb", // Episode 13
        "14": "https://voe.sx/e/wstc22w7fupg", // Episode 14
        "15": "https://voe.sx/e/yieepl1ltxeh", // Episode 15
        "16": "https://voe.sx/e/kutqhv0vi81s", // Episode 16
        "17": "https://voe.sx/e/ndel8zchyr6c", // Episode 17
        "18": "https://voe.sx/e/tgmd4loyepje", // Episode 18
        "19": "https://voe.sx/e/iesxvxvbfdkd", // Episode 19
        "20": "https://voe.sx/e/tz1eannwpmfw", // Episode 20
        "21": "https://voe.sx/e/qoyi8ovnrn9y", // Episode 21
        "22": "https://voe.sx/e/npu88iw96ros", // Episode 22
        "23": "https://voe.sx/e/alr60fznkypn", // Episode 23
        "24": "https://voe.sx/e/wssxmfrdir7y", // Episode 24
        "25": "https://voe.sx/e/mbotpkfbncsr", // Episode 25
        "26": "https://voe.sx/e/pnuxcpxb8wqm", // Episode 26
        "27": "https://voe.sx/e/f5gih1foofau", // Episode 27
        "28": "https://voe.sx/e/bfz60ixmhmk7", // Episode 28
        "29": "https://voe.sx/e/z7bexuwdmi30", // Episode 29
        "30": "https://voe.sx/e/pbeeght9xzta"  // Episode 30
    };
    
    // Season 3 videos (30 episodes)
    const season3Videos = {
        "1": "https://voe.sx/e/nqepmvg32prb", // Episode 1
        "2": "https://voe.sx/e/lujrxykeitpq", // Episode 2
        "3": "https://voe.sx/e/jsnsbxhmf6vf", // Episode 3
        "4": "https://voe.sx/e/cxyktyjon3cw", // Episode 4
        "5": "https://voe.sx/e/9uh8qgtwwpkz", // Episode 5
        "6": "https://voe.sx/e/t7qgeco4s2iq", // Episode 6
        "7": "https://voe.sx/e/krdcambruhqn", // Episode 7
        "8": "https://voe.sx/e/qeprwozvgt0j", // Episode 8
        "9": "https://voe.sx/e/d2ukv7bxkfho", // Episode 9
        "10": "https://voe.sx/e/dz763yzkbxy3", // Episode 10
        "11": "https://voe.sx/e/x4kqolrdzmdi", // Episode 11
        "12": "https://voe.sx/e/u2jfgnv5snmf", // Episode 12
        "13": "https://voe.sx/e/guczbpozsrlc", // Episode 13
        "14": "https://voe.sx/e/uhxcuoi0tz8l", // Episode 14
        "15": "https://voe.sx/e/xznwkw2ye2nm", // Episode 15
        "16": "https://voe.sx/e/8aivaryk6cex", // Episode 16
        "17": "https://voe.sx/e/urkbwikdmll1", // Episode 17
        "18": "https://voe.sx/e/uxjxxmy7mzkq", // Episode 18
        "19": "https://voe.sx/e/lufhnsvcraia", // Episode 19
        "20": "https://voe.sx/e/gawapaq7fnph", // Episode 20
        "21": "https://voe.sx/e/u9j28qgqfoo9", // Episode 21
        "22": "https://voe.sx/e/iqs6r3wtzrew", // Episode 22
        "23": "https://voe.sx/e/jih1di4ad60m", // Episode 23
        "24": "https://voe.sx/e/dxmnqc9b8str", // Episode 24
        "25": "https://voe.sx/e/zn41qackwhl9", // Episode 25
        "26": "https://voe.sx/e/fbod7coqy4ye", // Episode 26
        "27": "https://voe.sx/e/cnml4qhkslt1", // Episode 27
        "28": "https://voe.sx/e/rpwkryp8kmey", // Episode 28
        "29": "https://voe.sx/e/cyacxkfr3xci", // Episode 29
        "30": "https://voe.sx/e/mkjfpuuruubf"  // Episode 30
    };
    
    // Season 4 videos (30 episodes)
    const season4Videos = {
        "1": "https://voe.sx/e/qczwnvkxg9vn", // Episode 1
        "2": "https://voe.sx/e/gufke8o4ijbs", // Episode 2
        "3": "https://voe.sx/e/jzi9qxlbxuoi", // Episode 3
        "4": "https://voe.sx/e/4ff1cb2fcqd0", // Episode 4
        "5": "https://voe.sx/e/zlvtpkwf4mnu", // Episode 5
        "6": "https://voe.sx/e/q8xfrbhxsamr", // Episode 6
        "7": "https://voe.sx/e/spunxiw1ljbt", // Episode 7
        "8": "https://voe.sx/e/wg07bpyp9uaf", // Episode 8
        "9": "https://voe.sx/e/ijkpavqe23fj", // Episode 9
        "10": "https://voe.sx/e/0ahelmybxwe6", // Episode 10
        "11": "https://voe.sx/e/skeru8ngewwz", // Episode 11
        "12": "https://voe.sx/e/viyqgn2uttg8", // Episode 12
        "13": "https://voe.sx/e/egwyrc37w1hr", // Episode 13
        "14": "https://voe.sx/e/hetpfcingy4w", // Episode 14
        "15": "https://voe.sx/e/ombsgqmsqjry", // Episode 15
        "16": "https://voe.sx/e/k1t1njgrnkma", // Episode 16
        "17": "https://voe.sx/e/ed30ghyqbk8d", // Episode 17
        "18": "https://voe.sx/e/x4wv5lfvnjat", // Episode 18
        "19": "https://voe.sx/e/dl9jy4r3queg", // Episode 19
        "20": "https://voe.sx/e/y5ycgefjsmbe", // Episode 20
        "21": "https://voe.sx/e/ybsulryyseeq", // Episode 21
        "22": "https://voe.sx/e/2znpkyauwosd", // Episode 22
        "23": "https://voe.sx/e/adc8ai9ffhbl", // Episode 23
        "24": "https://voe.sx/e/bhcitztcunnx", // Episode 24
        "25": "https://voe.sx/e/8jvdokwbliru", // Episode 25
        "26": "https://voe.sx/e/bwluk2uoovcd", // Episode 26
        "27": "https://voe.sx/e/ukutk3ecrgzw", // Episode 27
        "28": "https://voe.sx/e/afa63vw1zlxe", // Episode 28
        "29": "https://voe.sx/e/tfrikbphf7cj", // Episode 29
        "30": "https://voe.sx/e/yxtxscqu557x"  // Episode 30
    };
    
    // Season 5 videos (9 episodes)
    const season5Videos = {
        "1": "https://voe.sx/e/ze7rgzjxgeft", // Episode 1
        "2": "https://voe.sx/e/gmquok77ga5d", // Episode 2
        "3": "https://voe.sx/e/gz5c5lnrovmv", // Episode 3
        "4": "https://voe.sx/e/qzuzcxvszxp7", // Episode 4
        "5": "https://voe.sx/e/8cm8pcgygwzv", // Episode 5
        "6": "https://voe.sx/e/h0rr0ngq8szj", // Episode 6
        "7": "https://voe.sx/e/dmg6szyaqjvb", // Episode 7
        "8": "https://voe.sx/e/campdeuefgnh", // Episode 8
        "9": "https://voe.sx/e/vmecno8mqvvv"  // Episode 9
    };
    
    // Season titles
    const seasonTitles = {
        "1": "Al Maddah",
        "2": "Ostouret Al Wadi",
        "3": "Ostouret El Ishq",
        "4": "Ostouret El Awda",
        "5": "Ostouret El Ahd"
    };
    
    // Placeholder for English version videos (to be filled later)
    const season1VideosEng = {};
    const season2VideosEng = {};
    const season3VideosEng = {};
    const season4VideosEng = {};
    const season5VideosEng = {};
    
    // Series thumbnail
    const seriesThumbnail = "http://i.epvpimg.com/yq5Xbab.jpg";
    
    // Initialize episodes lists
    const generateEpisodes = () => {
        // Generate episodes for each season
        generateSeasonEpisodes(1, season1Videos, seasonTitles[1]);
        generateSeasonEpisodes(2, season2Videos, seasonTitles[2]);
        generateSeasonEpisodes(3, season3Videos, seasonTitles[3]);
        generateSeasonEpisodes(4, season4Videos, seasonTitles[4]);
        generateSeasonEpisodes(5, season5Videos, seasonTitles[5]);
        
        // Set the active season
        setActiveSeason(5); // Default to season 5
    };
    
    // Function to generate episodes for a season
    const generateSeasonEpisodes = (seasonNumber, videos, seasonTitle) => {
        const episodesList = document.getElementById(`season${seasonNumber}-episodes`);
        
        // Clear the list
        episodesList.innerHTML = '';
        
        // Generate episodes
        for (const [episodeNumber, videoUrl] of Object.entries(videos)) {
            const episodeItem = document.createElement('div');
            episodeItem.className = 'episode-item';
            episodeItem.dataset.episode = episodeNumber;
            episodeItem.dataset.video = videoUrl.split('/').pop();
            
            episodeItem.innerHTML = `
                <div class="episode-thumbnail">
                    <img src="${seriesThumbnail}" alt="Episode ${episodeNumber}">
                    <div class="play-overlay">
                        <div class="play-icon">▶</div>
                    </div>
                </div>
                <div class="episode-details">
                    <div class="episode-number">Episode ${episodeNumber}</div>
                    <div class="episode-title">${seasonTitle}</div>
                    <div class="episode-duration">45 min</div>
                    <div class="episode-info">Season ${seasonNumber}</div>
                    <div class="episode-description">
                        Episode ${episodeNumber} of ${seasonTitle}
                    </div>
                </div>
            `;
            
            // Add click event
            episodeItem.addEventListener('click', () => {
                const videoId = episodeItem.dataset.video;
                loadAndPlayEpisode(seasonNumber, episodeNumber, currentLanguage, videoId);
            });
            
            episodesList.appendChild(episodeItem);
        }
        
        // Update count in the season box
        const seasonCount = Object.keys(videos).length;
        const seasonBox = document.querySelector(`.season-box[data-season="${seasonNumber}"]`);
        if (seasonBox) {
            seasonBox.textContent = `${seasonNumber} (${seasonCount})`;
        }
    };
    
    // Function to set the active season
    const setActiveSeason = (seasonNumber) => {
        // Update the active class on season boxes
        const seasonBoxes = document.querySelectorAll('.season-box');
        seasonBoxes.forEach(box => {
            if (box.dataset.season === seasonNumber.toString()) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
        
        // Show the corresponding episode list
        const episodesLists = document.querySelectorAll('.episodes-list');
        episodesLists.forEach(list => {
            if (list.id === `season${seasonNumber}-episodes`) {
                list.classList.remove('hidden');
            } else {
                list.classList.add('hidden');
            }
        });
        
        // Update the episodes title
        const episodesTitle = document.querySelector('.episodes-container h2');
        const seasonCount = document.querySelector(`.season-box[data-season="${seasonNumber}"]`).textContent.match(/\((\d+)\)/)[1];
        episodesTitle.textContent = `Episodes - Season ${seasonNumber} (${seasonCount} episodes)`;
        
        // Update current season
        currentSeason = seasonNumber.toString();
    };
    
    // Seasons selector functionality
    const seasonBoxes = document.querySelectorAll('.season-box');
    
    // Current playing episode tracking
    let currentSeason = "5";
    let currentEpisode = "1";
    let currentLanguage = "ar"; // Default language is Arabic
    
    seasonBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const seasonNumber = box.dataset.season;
            setActiveSeason(seasonNumber);
        });
    });
    
    // Video player related elements
    const videoModal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const videoContainer = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');
    
    // Function to load and play an episode with language selection
    function loadAndPlayEpisode(season, episode, language, videoId = null) {
        // Get the episode title
        const seasonTitle = seasonTitles[season] || `Season ${season}`;
        
        // Set the modal title with language indicator
        const langText = language === 'ar' ? 'Arabic' : 'English';
        modalTitle.textContent = `El Maddah - S${season}:E${episode} ${seasonTitle} (${langText})`;
        
        // Get the correct video source if not provided
        if (!videoId) {
            if (language === 'ar') {
                // Arabic version
                switch(season) {
                    case '1':
                        videoId = season1Videos[episode]?.split('/').pop();
                        break;
                    case '2':
                        videoId = season2Videos[episode]?.split('/').pop();
                        break;
                    case '3':
                        videoId = season3Videos[episode]?.split('/').pop();
                        break;
                    case '4':
                        videoId = season4Videos[episode]?.split('/').pop();
                        break;
                    case '5':
                        videoId = season5Videos[episode]?.split('/').pop();
                        break;
                }
            } else {
                // English version (placeholder for now)
                switch(season) {
                    case '1':
                        videoId = season1VideosEng[episode]?.split('/').pop();
                        break;
                    case '2':
                        videoId = season2VideosEng[episode]?.split('/').pop();
                        break;
                    case '3':
                        videoId = season3VideosEng[episode]?.split('/').pop();
                        break;
                    case '4':
                        videoId = season4VideosEng[episode]?.split('/').pop();
                        break;
                    case '5':
                        videoId = season5VideosEng[episode]?.split('/').pop();
                        break;
                }
            }
        }
        
        // Create video player if video source is available
        if (videoId) {
            // Clear previous content
            videoContainer.innerHTML = '';
            
            // Create the embed URL
            const videoSrc = `https://voe.sx/e/${videoId}`;
            
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
            // Show placeholder message
            videoContainer.innerHTML = `
                <div class="video-placeholder">
                    <div class="play-button">▶</div>
                    <p>${language === 'en' ? 'English version coming soon' : 'Video not available for this episode'}</p>
                </div>
            `;
        }
        
        // Show the modal
        videoModal.style.display = 'flex';
        
        // Update current episode and season
        currentEpisode = episode;
        currentSeason = season;
    }
    
    // Language selection handlers
    document.getElementById('langArabic').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'ar';
        
        // Update active state of language buttons
        document.getElementById('langEnglish').classList.remove('active');
        this.classList.add('active');
        
        loadAndPlayEpisode(currentSeason, currentEpisode, currentLanguage);
    });
    
    document.getElementById('langEnglish').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        currentLanguage = 'en';
        
        // Update active state of language buttons
        document.getElementById('langArabic').classList.remove('active');
        this.classList.add('active');
        
        // Show English not available message
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <div class="play-button">▶</div>
                <p>English version coming soon</p>
            </div>
        `;
        
        // Update the modal title
        const seasonTitle = seasonTitles[currentSeason] || `Season ${currentSeason}`;
        modalTitle.textContent = `El Maddah - S${currentSeason}:E${currentEpisode} ${seasonTitle} (English)`;
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
    });
    
    trailerBtn.addEventListener('click', () => {
        // Open the video modal with the trailer
        modalTitle.textContent = 'El Maddah - Official Trailer';
        
        // Use a YouTube trailer or placeholder
        videoContainer.innerHTML = '';
        
        const trailerIframe = document.createElement('iframe');
        trailerIframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with actual El Maddah trailer
        trailerIframe.width = '100%';
        trailerIframe.height = '100%';
        trailerIframe.style.position = 'absolute';
        trailerIframe.style.top = '0';
        trailerIframe.style.left = '0';
        trailerIframe.frameBorder = '0';
        trailerIframe.allowFullscreen = true;
        
        videoContainer.appendChild(trailerIframe);
        
        videoModal.style.display = 'flex';
    });
    
    // Quality selector (for demonstration - would need real implementation)
    const qualitySelector = document.querySelector('.quality-selector');
    qualitySelector.addEventListener('change', function() {
        // In a real implementation, this would change the video quality
    });
    
    // Initialize the page
    generateEpisodes();
});