document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const moviesGrid = document.getElementById('moviesGrid');
    const moviesList = document.getElementById('moviesList');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const genreFilter = document.getElementById('genreFilter');
    const yearFilter = document.getElementById('yearFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const sortSelect = document.getElementById('sortBy');
    const noResults = document.getElementById('noResults');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const paginationContainer = document.getElementById('pagination');
    
    // Current state
    let currentView = 'grid';
    let currentFilters = {
        genre: 'all',
        year: 'all',
        rating: 'all'
    };
    let currentSort = 'popular';
    let currentPage = 1;
    let itemsPerPage = 18; // Adjust based on your design
    
    // All movie items (for filtering)
    const allMovieCards = Array.from(moviesGrid.querySelectorAll('.movie-card'));
    const allMovieListItems = Array.from(moviesList.querySelectorAll('.movie-list-item'));
    
    // View Switching
    gridViewBtn.addEventListener('click', function() {
        if (currentView !== 'grid') {
            currentView = 'grid';
            updateView();
            savePreferences();
        }
    });
    
    listViewBtn.addEventListener('click', function() {
        if (currentView !== 'list') {
            currentView = 'list';
            updateView();
            savePreferences();
        }
    });
    
    function updateView() {
        if (currentView === 'grid') {
            moviesGrid.style.display = 'grid';
            moviesList.style.display = 'none';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        } else {
            moviesGrid.style.display = 'none';
            moviesList.style.display = 'block';
            gridViewBtn.classList.remove('active');
            listViewBtn.classList.add('active');
        }
    }
    
    // Filtering
    genreFilter.addEventListener('change', function() {
        currentFilters.genre = this.value;
        currentPage = 1; // Reset to first page when filter changes
        applyFilters();
        savePreferences();
    });
    
    yearFilter.addEventListener('change', function() {
        currentFilters.year = this.value;
        currentPage = 1;
        applyFilters();
        savePreferences();
    });
    
    ratingFilter.addEventListener('change', function() {
        currentFilters.rating = this.value;
        currentPage = 1;
        applyFilters();
        savePreferences();
    });
    
    // Sorting
    sortSelect.addEventListener('change', function() {
        currentSort = this.value;
        applyFilters(); // This will also sort
        savePreferences();
    });
    
    // Reset Filters
    resetFiltersBtn.addEventListener('click', function() {
        // Reset dropdown selections
        genreFilter.value = 'all';
        yearFilter.value = 'all';
        ratingFilter.value = 'all';
        sortSelect.value = 'popular';
        
        // Reset state
        currentFilters = {
            genre: 'all',
            year: 'all',
            rating: 'all'
        };
        currentSort = 'popular';
        currentPage = 1;
        
        // Apply reset
        applyFilters();
        savePreferences();
    });
    
    // Pagination
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            applyFilters();
        }
    });
    
    nextPageBtn.addEventListener('click', function() {
        const filteredItems = getFilteredItems();
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        
        if (currentPage < totalPages) {
            currentPage++;
            applyFilters();
        }
    });
    
    paginationContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('pagination-btn') && !e.target.id) {
            if (!isNaN(parseInt(e.target.textContent))) {
                currentPage = parseInt(e.target.textContent);
                applyFilters();
            }
        }
    });
    
    // Apply all filters, sorting, and pagination
    function applyFilters() {
        const filteredItems = getFilteredItems();
        const sortedItems = sortItems(filteredItems);
        const paginatedItems = paginateItems(sortedItems);
        
        // Update UI
        updateMoviesDisplay(paginatedItems);
        updatePagination(filteredItems.length);
        
        // Show/hide no results message
        if (filteredItems.length === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
    
    // Get items that match the current filters
    function getFilteredItems() {
        const currentItems = currentView === 'grid' ? allMovieCards : allMovieListItems;
        
        return currentItems.filter(item => {
            // Genre filtering
            if (currentFilters.genre !== 'all') {
                const categories = item.dataset.categories;
                if (!categories || !categories.includes(currentFilters.genre)) {
                    return false;
                }
            }
            
            // Year filtering
            if (currentFilters.year !== 'all') {
                const year = parseInt(item.dataset.year);
                
                if (!year) return false;
                
                if (currentFilters.year === '2024' && year !== 2024) return false;
                if (currentFilters.year === '2023' && year !== 2023) return false;
                if (currentFilters.year === '2022' && year !== 2022) return false;
                if (currentFilters.year === '2021' && year !== 2021) return false;
                if (currentFilters.year === '2020' && year !== 2020) return false;
                if (currentFilters.year === '2010s' && (year < 2010 || year > 2019)) return false;
                if (currentFilters.year === '2000s' && (year < 2000 || year > 2009)) return false;
                if (currentFilters.year === '1990s' && (year < 1990 || year > 1999)) return false;
                if (currentFilters.year === 'older' && year >= 1990) return false;
            }
            
            // Rating filtering
            if (currentFilters.rating !== 'all') {
                const rating = parseFloat(item.dataset.rating);
                
                if (!rating) return false;
                
                if (currentFilters.rating === '9+' && rating < 9) return false;
                if (currentFilters.rating === '8+' && rating < 8) return false;
                if (currentFilters.rating === '7+' && rating < 7) return false;
                if (currentFilters.rating === '6+' && rating < 6) return false;
                if (currentFilters.rating === '5+' && rating < 5) return false;
            }
            
            return true;
        });
    }
    
    // Sort items based on current sort selection
    function sortItems(items) {
        return [...items].sort((a, b) => {
            switch (currentSort) {
                case 'newest':
                    return parseInt(b.dataset.year) - parseInt(a.dataset.year);
                    
                case 'oldest':
                    return parseInt(a.dataset.year) - parseInt(b.dataset.year);
                    
                case 'rating-high':
                    return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
                    
                case 'rating-low':
                    return parseFloat(a.dataset.rating) - parseFloat(b.dataset.rating);
                    
                case 'a-z':
                    const titleA = a.querySelector('.movie-title, .movie-list-title').textContent.trim();
                    const titleB = b.querySelector('.movie-title, .movie-list-title').textContent.trim();
                    return titleA.localeCompare(titleB);
                    
                case 'z-a':
                    const titleAZ = a.querySelector('.movie-title, .movie-list-title').textContent.trim();
                    const titleBZ = b.querySelector('.movie-title, .movie-list-title').textContent.trim();
                    return titleBZ.localeCompare(titleAZ);
                    
                case 'popular': // Default, using rating and recent year as proxies for popularity
                default:
                    const scoreA = parseFloat(a.dataset.rating) * 10 + (parseInt(a.dataset.year) / 100);
                    const scoreB = parseFloat(b.dataset.rating) * 10 + (parseInt(b.dataset.year) / 100);
                    return scoreB - scoreA;
            }
        });
    }
    
    // Get only the items for the current page
    function paginateItems(items) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    }
    
    // Update the display based on current filters and pagination
    function updateMoviesDisplay(items) {
        // Hide all items first
        if (currentView === 'grid') {
            allMovieCards.forEach(card => {
                card.parentElement.style.display = 'none';
            });
            
            // Show only the filtered & paginated items
            items.forEach(card => {
                card.parentElement.style.display = 'block';
            });
        } else {
            allMovieListItems.forEach(item => {
                item.style.display = 'none';
            });
            
            items.forEach(item => {
                item.style.display = 'flex';
            });
        }
    }
    
    // Update pagination controls based on total items
    function updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // Enable/disable prev/next buttons
        prevPageBtn.classList.toggle('disabled', currentPage <= 1);
        nextPageBtn.classList.toggle('disabled', currentPage >= totalPages);
        
        // Generate page buttons
        const pageButtons = Array.from(paginationContainer.querySelectorAll('.pagination-btn')).filter(btn => !btn.id);
        
        // Remove all existing page buttons
        pageButtons.forEach(btn => btn.remove());
        
        // Insert new page buttons
        if (totalPages <= 7) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= totalPages; i++) {
                insertPageButton(i, i === currentPage);
            }
        } else {
            // Show limited pages for larger collections
            insertPageButton(1, currentPage === 1);
            
            if (currentPage > 3) {
                insertEllipsis();
            }
            
            // Pages around current
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            
            for (let i = start; i <= end; i++) {
                insertPageButton(i, i === currentPage);
            }
            
            if (currentPage < totalPages - 2) {
                insertEllipsis();
            }
            
            if (totalPages > 1) {
                insertPageButton(totalPages, currentPage === totalPages);
            }
        }
    }
    
    function insertPageButton(pageNum, isActive) {
        const btn = document.createElement('button');
        btn.className = `pagination-btn${isActive ? ' active' : ''}`;
        btn.textContent = pageNum;
        
        // Insert before the next button
        paginationContainer.insertBefore(btn, nextPageBtn);
    }
    
    function insertEllipsis() {
        const ellipsis = document.createElement('button');
        ellipsis.className = 'pagination-btn';
        ellipsis.textContent = '...';
        ellipsis.disabled = true;
        
        // Insert before the next button
        paginationContainer.insertBefore(ellipsis, nextPageBtn);
    }
    
    // Save user preferences to localStorage
    function savePreferences() {
        const preferences = {
            view: currentView,
            filters: currentFilters,
            sort: currentSort
        };
        
        localStorage.setItem('moviePagePreferences', JSON.stringify(preferences));
    }
    
    // Load user preferences from localStorage
    function loadPreferences() {
        const saved = localStorage.getItem('moviePagePreferences');
        if (saved) {
            const preferences = JSON.parse(saved);
            
            // Restore view
            currentView = preferences.view || 'grid';
            
            // Restore filters
            if (preferences.filters) {
                currentFilters = preferences.filters;
                genreFilter.value = currentFilters.genre;
                yearFilter.value = currentFilters.year;
                ratingFilter.value = currentFilters.rating;
            }
            
            // Restore sort
            if (preferences.sort) {
                currentSort = preferences.sort;
                sortSelect.value = currentSort;
            }
            
            // Apply loaded preferences
            updateView();
        }
    }
    
    // Adjust items per page based on screen size
    function updateItemsPerPage() {
        if (window.innerWidth < 768) {
            itemsPerPage = 12;
        } else if (window.innerWidth < 1200) {
            itemsPerPage = 15;
        } else {
            itemsPerPage = 18;
        }
        
        // Reapply filters with new items per page
        applyFilters();
    }
    
    // Window resize handler for responsive adjustments
    window.addEventListener('resize', function() {
        updateItemsPerPage();
    });
    
    // Category links in footer or elsewhere
    document.querySelectorAll('[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-filter');
            
            genreFilter.value = category;
            currentFilters.genre = category;
            currentPage = 1;
            
            // Scroll to top of movies section for better UX
            window.scrollTo({
                top: document.querySelector('.filter-container').offsetTop - 80,
                behavior: 'smooth'
            });
            
            applyFilters();
            savePreferences();
        });
    });

    // Add lazy loading for images
    function setupLazyLoading() {
        const lazyImages = document.querySelectorAll('.movie-card img, .movie-list-poster img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        
                        if (src) {
                            img.src = src;
                            img.removeAttribute('data-src');
                        }
                        
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                // Store original src in data-src attribute
                if (!img.getAttribute('data-src')) {
                    img.setAttribute('data-src', img.src);
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyNTI1MjUiLz48L3N2Zz4='; // Placeholder gray SVG
                }
                
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(img => {
                if (img.getAttribute('data-src')) {
                    img.src = img.getAttribute('data-src');
                }
            });
        }
    }
    // Handle search functionality
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }
            
            // Get all movies from both views
            const allMovies = [];
            
            // Process grid view items
            allMovieCards.forEach(card => {
                const title = card.querySelector('.movie-title').textContent;
                const meta = card.querySelector('.movie-meta span').textContent;
                const rating = card.querySelector('.rating').textContent.trim();
                const image = card.querySelector('img').src;
                const link = card.parentElement.getAttribute('href');
                
                allMovies.push({
                    title,
                    meta,
                    rating,
                    image,
                    link
                });
            });
            
            // Search for matches
            const matchingResults = allMovies.filter(movie => 
                movie.title.toLowerCase().includes(query) || 
                movie.meta.toLowerCase().includes(query)
            );
            
            // Display results
            searchResults.innerHTML = '';
            
            if (matchingResults.length === 0) {
                searchResults.innerHTML = '<div class="no-results">No results found</div>';
            } else {
                matchingResults.slice(0, 5).forEach(movie => { // Limit to top 5 results
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <img src="${movie.image}" alt="${movie.title}" class="search-result-thumb">
                        <div class="search-result-info">
                            <div class="search-result-title">${movie.title}</div>
                            <div class="search-result-meta">Movie • ${movie.meta}</div>
                        </div>
                    `;
                    
                    // Add click event to redirect to content page
                    resultItem.addEventListener('click', () => {
                        window.location.href = movie.link;
                    });
                    
                    searchResults.appendChild(resultItem);
                });
            }
            
            searchResults.classList.add('active');
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }
    
    // Enable infinite scrolling for mobile devices
    let isInfiniteScrollEnabled = false;
    
    function setupInfiniteScroll() {
        // Only enable on smaller screens
        if (window.innerWidth <= 768) {
            isInfiniteScrollEnabled = true;
            
            // Remove pagination on mobile
            paginationContainer.style.display = 'none';
            
            // Setup infinite scroll observer
            const infiniteScrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && isInfiniteScrollEnabled) {
                        loadMoreContent();
                    }
                });
            }, { rootMargin: '200px' });
            
            // Create and append sentinel element
            const sentinel = document.createElement('div');
            sentinel.id = 'infinite-scroll-sentinel';
            sentinel.style.height = '1px';
            moviesGrid.parentNode.insertBefore(sentinel, paginationContainer);
            
            // Observe the sentinel
            infiniteScrollObserver.observe(sentinel);
        } else {
            isInfiniteScrollEnabled = false;
            paginationContainer.style.display = 'flex';
            
            // Remove sentinel if it exists
            const sentinel = document.getElementById('infinite-scroll-sentinel');
            if (sentinel) {
                sentinel.remove();
            }
        }
    }
    
    function loadMoreContent() {
        const filteredItems = getFilteredItems();
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        
        if (currentPage < totalPages) {
            currentPage++;
            
            // Get items for the next page
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const nextPageItems = filteredItems.slice(startIndex, endIndex);
            
            // Add these items to the display (don't hide previous items)
            if (currentView === 'grid') {
                nextPageItems.forEach(card => {
                    card.parentElement.style.display = 'block';
                });
            } else {
                nextPageItems.forEach(item => {
                    item.style.display = 'flex';
                });
            }
            
            // If we've reached the last page, disable infinite scroll
            if (currentPage >= totalPages) {
                isInfiniteScrollEnabled = false;
                
                // Show a "No more movies" message
                const endMessage = document.createElement('div');
                endMessage.className = 'end-message';
                endMessage.textContent = 'You\'ve reached the end of the list';
                endMessage.style.textAlign = 'center';
                endMessage.style.padding = '30px 0';
                endMessage.style.color = 'var(--text-secondary)';
                
                const sentinel = document.getElementById('infinite-scroll-sentinel');
                if (sentinel) {
                    sentinel.parentNode.insertBefore(endMessage, sentinel);
                }
            }
        }
    }
    
    // Setup a hover effect for movie cards that shows a preview
    function setupHoverPreviews() {
        // Only enable on larger screens
        if (window.innerWidth >= 1024) {
            allMovieCards.forEach(card => {
                card.addEventListener('mouseenter', function(e) {
                    // Check if we already have a preview for this card
                    if (this.querySelector('.preview-overlay')) return;
                    
                    // Get movie data
                    const title = this.querySelector('.movie-title').textContent;
                    const meta = this.querySelector('.movie-meta span').textContent;
                    
                    // Create preview overlay
                    const previewOverlay = document.createElement('div');
                    previewOverlay.className = 'preview-overlay';
                    previewOverlay.innerHTML = `
                        <div class="preview-info">
                            <h4>${title}</h4>
                            <p>${meta}</p>
                            <div class="preview-buttons">
                                <button class="preview-btn watch-btn"><i>▶</i> Watch Now</button>
                                <button class="preview-btn info-btn"><i>ℹ</i> Details</button>
                            </div>
                        </div>
                    `;
                    
                    // Style the preview
                    Object.assign(previewOverlay.style, {
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '15px',
                        opacity: '0',
                        transition: 'opacity 0.3s ease',
                        zIndex: '5',
                        borderRadius: '6px'
                    });
                    
                    // Append and animate in
                    this.appendChild(previewOverlay);
                    setTimeout(() => {
                        previewOverlay.style.opacity = '1';
                    }, 10);
                    
                    // Setup button click handlers
                    const link = card.parentElement.getAttribute('href');
                    previewOverlay.querySelectorAll('.preview-btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            window.location.href = link;
                        });
                    });
                });
                
                card.addEventListener('mouseleave', function() {
                    const previewOverlay = this.querySelector('.preview-overlay');
                    if (previewOverlay) {
                        previewOverlay.style.opacity = '0';
                        
                        // Remove after animation
                        setTimeout(() => {
                            if (previewOverlay.parentNode) {
                                previewOverlay.parentNode.removeChild(previewOverlay);
                            }
                        }, 300);
                    }
                });
            });
        }
    }
    
    // Add styles for preview overlay
    function addPreviewStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .preview-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.85);
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                padding: 15px;
                opacity: 0;
                transition: opacity 0.3s ease;
                z-index: 5;
                border-radius: 6px;
            }
            
            .preview-info h4 {
                margin: 0 0 5px 0;
                font-size: 1rem;
                color: white;
            }
            
            .preview-info p {
                margin: 0 0 10px 0;
                font-size: 0.8rem;
                color: rgba(255,255,255,0.7);
            }
            
            .preview-buttons {
                display: flex;
                gap: 5px;
            }
            
            .preview-btn {
                padding: 6px 10px;
                border-radius: 4px;
                font-size: 0.8rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                border: none;
                transition: all 0.2s ease;
            }
            
            .watch-btn {
                background-color: var(--primary-color);
                color: white;
                flex: 2;
            }
            
            .watch-btn:hover {
                background-color: var(--secondary-color);
            }
            
            .info-btn {
                background-color: rgba(255,255,255,0.2);
                color: white;
                flex: 1;
            }
            
            .info-btn:hover {
                background-color: rgba(255,255,255,0.3);
            }
            
            .end-message {
                text-align: center;
                padding: 30px 0;
                color: var(--text-secondary);
                font-style: italic;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Initialize everything
    function init() {
        // Load saved preferences
        loadPreferences();
        
        // Set up initial view state
        updateView();
        
        // Determine items per page based on screen size
        updateItemsPerPage();
        
        // Apply filters on first load
        applyFilters();
        
        // Set up lazy loading
        setupLazyLoading();
        
        // Set up infinite scroll for mobile
        setupInfiniteScroll();
        
        // Set up hover previews for desktop
        setupHoverPreviews();
        
        // Add styles
        addPreviewStyles();
        
        // Listen for screen size changes
        window.addEventListener('resize', function() {
            updateItemsPerPage();
            setupInfiniteScroll();
        });
    }
    
    // Start everything
    init();
});