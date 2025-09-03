// Global Variables
let cart = [];
let wishlist = [];
let currentUser = null;
let products = [];
let currentFilter = 'all';
let searchSuggestions = [];
let displayedProducts = 12;

// Enhanced Product Data with Real Fashion Images
const productData = [
    // Men's Collection
    {
        id: 1,
        name: "প্রিমিয়াম কটন শার্ট",
        category: "mens",
        subcategory: "shirt",
        price: 1200,
        originalPrice: 1500,
        description: "১০০% খাঁটি কটনের আরামদায়ক ফর্মাল শার্ট। অফিস ও পার্টির জন্য পারফেক্ট।",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
        gallery: ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"],
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["নীল", "সাদা", "কালো", "ধূসর"],
        rating: 4.5,
        reviews: 142,
        inStock: true,
        tags: ["ফর্মাল", "কটন", "শার্ট"]
    },
    {
        id: 2,
        name: "ডিজাইনার কুর্তা",
        category: "mens",
        subcategory: "kurta",
        price: 1800,
        originalPrice: 2200,
        description: "ঈদ স্পেশাল এক্সক্লুসিভ কুর্তা। হাই কোয়ালিটি ফেব্রিক।",
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400",
        gallery: ["https://images.unsplash.com/photo-1622445275576-721325763afe?w=400"],
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["সাদা", "ক্রিম", "হালকা নীল", "বেইজ"],
        rating: 4.8,
        reviews: 98,
        inStock: true,
        tags: ["কুর্তা", "ঈদ", "ফেস্টিভ্যাল"]
    },
    {
        id: 3,
        name: "স্লিম ফিট জিন্স",
        category: "mens",
        subcategory: "pant",
        price: 2200,
        originalPrice: 2800,
        description: "স্ট্রেচেবল কমফোর্ট জিন্স। স্লিম ফিট ডিজাইন।",
        image: "https://images.unsplash.com/photo-1542272454315-7ad85f8949d0?w=400",
        gallery: ["https://images.unsplash.com/photo-1542272454315-7ad85f8949d0?w=400"],
        sizes: ["30", "32", "34", "36", "38"],
        colors: ["নেভি ব্লু", "কালো", "ডার্ক ব্লু"],
        rating: 4.6,
        reviews: 167,
        inStock: true,
        tags: ["জিন্স", "স্লিম", "ক্যাজুয়াল"]
    },
    {
        id: 4,
        name: "গ্রাফিক টি-শার্ট",
        category: "mens",
        subcategory: "tshirt",
        price: 850,
        originalPrice: 1200,
        description: "ট্রেন্ডি গ্রাফিক প্রিন্ট টি-শার্ট। কমফোর্ট ফিট।",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        gallery: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["কালো", "সাদা", "নেভি", "ধূসর"],
        rating: 4.3,
        reviews: 203,
        inStock: true,
        tags: ["টি-শার্ট", "গ্রাফিক", "ক্যাজুয়াল"]
    },

    // Women's Collection
    {
        id: 5,
        name: "এলিগ্যান্ট সালোয়ার কামিজ",
        category: "womens",
        subcategory: "salwar",
        price: 2500,
        originalPrice: 3200,
        description: "থ্রি পিস সেট সালোয়ার কামিজ। এক্সক্লুসিভ ডিজাইন।",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400",
        gallery: ["https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=400"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["গোলাপী", "লাল", "সবুজ", "নীল", "বেগুনি"],
        rating: 4.7,
        reviews: 89,
        inStock: true,
        tags: ["সালোয়ার", "কামিজ", "থ্রিপিস"]
    },
    {
        id: 6,
        name: "সিল্ক শাড়ি",
        category: "womens",
        subcategory: "saree",
        price: 4500,
        originalPrice: 5500,
        description: "হ্যান্ডলুম সিল্ক শাড়ি। বিশেষ অকেশনের জন্য।",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
        gallery: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400"],
        sizes: ["ফ্রি সাইজ"],
        colors: ["লাল", "নীল", "সবুজ", "বেগুনি", "পিংক"],
        rating: 4.9,
        reviews: 45,
        inStock: true,
        tags: ["শাড়ি", "সিল্ক", "পার্টি"]
    },
    {
        id: 7,
        name: "ফ্যাশনেবল কুর্তি",
        category: "womens",
        subcategory: "kurti",
        price: 1600,
        originalPrice: 2000,
        description: "ট্রেন্ডি ডিজাইনার কুর্তি। ডেইলি ওয়্যার।",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        gallery: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["গোলাপী", "হলুদ", "সবুজ", "নীল"],
        rating: 4.4,
        reviews: 156,
        inStock: true,
        tags: ["কুর্তি", "ফ্যাশন", "ডেইলি"]
    },
    {
        id: 8,
        name: "পার্টি ড্রেস",
        category: "womens",
        subcategory: "dress",
        price: 2700,
        originalPrice: 3500,
        description: "ইভিনিং পার্টি ড্রেস। এলিগ্যান্ট লুক।",
        image: "https://images.unsplash.com/photo-1566479179817-1c28e9e2c5c0?w=400",
        gallery: ["https://images.unsplash.com/photo-1566479179817-1c28e9e2c5c0?w=400"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["কালো", "লাল", "নেভি ব্লু", "বেগুনি"],
        rating: 4.6,
        reviews: 78,
        inStock: true,
        tags: ["ড্রেস", "পার্টি", "ইভিনিং"]
    },

    // Kids Collection
    {
        id: 9,
        name: "বেবি রমপার সেট",
        category: "kids",
        subcategory: "baby",
        price: 650,
        originalPrice: 900,
        description: "নরম কটনের বেবি রমপার সেট। কমফোর্ট ফিট।",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
        gallery: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400"],
        sizes: ["0-3M", "3-6M", "6-12M", "12-18M"],
        colors: ["গোলাপী", "নীল", "হলুদ", "সবুজ"],
        rating: 4.7,
        reviews: 134,
        inStock: true,
        tags: ["বেবি", "রমপার", "কটন"]
    },
    {
        id: 10,
        name: "কিডস স্কুল ইউনিফর্ম",
        category: "kids",
        subcategory: "uniform",
        price: 1200,
        originalPrice: 1500,
        description: "হাই কোয়ালিটি স্কুল ইউনিফর্ম সেট।",
        image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400",
        gallery: ["https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400"],
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-10Y", "10-12Y"],
        colors: ["সাদা", "নেভি ব্লু", "স্কাই ব্লু"],
        rating: 4.5,
        reviews: 92,
        inStock: true,
        tags: ["স্কুল", "ইউনিফর্ম", "কিডস"]
    },

    // Accessories
    {
        id: 11,
        name: "লেদার হ্যান্ডব্যাগ",
        category: "accessories",
        subcategory: "bag",
        price: 2800,
        originalPrice: 3500,
        description: "জেনুইন লেদার হ্যান্ডব্যাগ। স্টাইলিশ ডিজাইন।",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
        gallery: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
        sizes: ["ফ্রি সাইজ"],
        colors: ["কালো", "বাদামী", "লাল", "নেভি"],
        rating: 4.8,
        reviews: 67,
        inStock: true,
        tags: ["ব্যাগ", "লেদার", "হ্যান্ডব্যাগ"]
    },
    {
        id: 12,
        name: "স্পোর্টস স্নিকার",
        category: "accessories",
        subcategory: "shoes",
        price: 3200,
        originalPrice: 4000,
        description: "কমফোর্টেবল স্পোর্টস স্নিকার। রানিং এর জন্য পারফেক্ট।",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
        gallery: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400"],
        sizes: ["39", "40", "41", "42", "43", "44"],
        colors: ["সাদা", "কালো", "ধূসর", "নীল"],
        rating: 4.6,
        reviews: 189,
        inStock: true,
        tags: ["জুতা", "স্নিকার", "স্পোর্টস"]
    },
    {
        id: 13,
        name: "ক্লাসিক ওয়াচ",
        category: "accessories",
        subcategory: "watch",
        price: 1500,
        originalPrice: 2000,
        description: "স্টাইলিশ কোয়ার্জ ওয়াচ। ওয়াটার রেজিস্ট্যান্ট।",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
        gallery: ["https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400"],
        sizes: ["ফ্রি সাইজ"],
        colors: ["কালো", "সিলভার", "গোল্ড", "রোজ গোল্ড"],
        rating: 4.4,
        reviews: 112,
        inStock: true,
        tags: ["ওয়াচ", "ক্লাসিক", "এক্সেসরিজ"]
    },

    // Sale Items
    {
        id: 14,
        name: "উইন্টার জ্যাকেট",
        category: "sale",
        subcategory: "jacket",
        price: 3800,
        originalPrice: 5000,
        description: "প্রিমিয়াম উইন্টার জ্যাকেট। ওয়াটার রেজিস্ট্যান্ট।",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        gallery: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"],
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["কালো", "নেভি ব্লু", "ধূসর", "বাদামী"],
        rating: 4.8,
        reviews: 156,
        inStock: true,
        tags: ["জ্যাকেট", "উইন্টার", "আউটওয়্যার"]
    },
    {
        id: 15,
        name: "ফর্মাল ব্লেজার",
        category: "sale",
        subcategory: "blazer",
        price: 4200,
        originalPrice: 6000,
        description: "প্রিমিয়াম ফর্মাল ব্লেজার। অফিস ও পার্টির জন্য।",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
        gallery: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400"],
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["কালো", "ধূসর", "নেভি ব্লু"],
        rating: 4.7,
        reviews: 89,
        inStock: true,
        tags: ["ব্লেজার", "ফর্মাল", "অফিস"]
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    products = [...productData];
    initializeApp();
});

function initializeApp() {
    displayProducts();
    updateCartDisplay();
    updateWishlistDisplay();
    setupEventListeners();
    setupSearchSuggestions();
    showWelcomePopup();
    initializeProductFilters();
}

// Welcome Popup
function showWelcomePopup() {
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        setTimeout(() => {
            popup.style.display = 'flex';
        }, 1000);
    }
}

function closeWelcome() {
    const popup = document.getElementById('welcomePopup');
    if (popup) {
        popup.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
}

// Event Listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        searchInput.addEventListener('focus', showSearchSuggestions);
        searchInput.addEventListener('blur', hideSearchSuggestions);
    }

    // Modal close on outside click
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeAllModals();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            closeCart();
        }
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput')?.focus();
        }
    });

    // Auth form submission
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }

    // Newsletter subscription
    const newsletterEmail = document.getElementById('newsletterEmail');
    if (newsletterEmail) {
        newsletterEmail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeNewsletter();
            }
        });
    }
}

// Search Functionality
function setupSearchSuggestions() {
    searchSuggestions = [
        ...new Set([
            ...products.map(p => p.name),
            ...products.flatMap(p => p.tags),
            ...products.map(p => p.category),
            'শার্ট', 'প্যান্ট', 'কুর্তা', 'শাড়ি', 'জুতা', 'ব্যাগ'
        ])
    ].slice(0, 20);
}

function handleSearchInput(e) {
    const query = e.target.value.toLowerCase().trim();
    const suggestionContainer = document.getElementById('searchSuggestions');
    
    if (!suggestionContainer) return;

    if (query.length >= 2) {
        const filteredSuggestions = searchSuggestions
            .filter(suggestion => suggestion.toLowerCase().includes(query))
            .slice(0, 8);

        if (filteredSuggestions.length > 0) {
            suggestionContainer.innerHTML = filteredSuggestions
                .map(suggestion => `
                    <div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">
                        ${suggestion}
                    </div>
                `).join('');
            suggestionContainer.style.display = 'block';
        } else {
            suggestionContainer.style.display = 'none';
        }
    } else {
        suggestionContainer.style.display = 'none';
    }
}

function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = suggestion;
        performSearch();
    }
    hideSearchSuggestions();
}

function showSearchSuggestions() {
    const suggestionContainer = document.getElementById('searchSuggestions');
    if (suggestionContainer && suggestionContainer.innerHTML.trim()) {
        suggestionContainer.style.display = 'block';
    }
}

function hideSearchSuggestions() {
    setTimeout(() => {
        const suggestionContainer = document.getElementById('searchSuggestions');
        if (suggestionContainer) {
            suggestionContainer.style.display = 'none';
        }
    }, 200);
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query === '') {
        filterProducts('all');
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
    );

    displayFilteredProducts(filteredProducts);
    scrollToProducts();
    hideSearchSuggestions();
    
    if (filteredProducts.length === 0) {
        showNotification(`"${query}" এর জন্য কোন পণ্য পাওয়া যায়নি`, 'error');
    } else {
        showNotification(`${filteredProducts.length}টি পণ্য পাওয়া গেছে "${query}" এর জন্য`, 'success');
    }
}

// Product Display Functions
function displayProducts() {
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    displayFilteredProducts(filteredProducts.slice(0, displayedProducts));
    updateFilterTabs();
}

function displayFilteredProducts(productsToShow) {
    const productGrid = document.getElementById('productsGrid');
    if (!productGrid) return;

    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;">🔍</div>
                <h3>কোন পণ্য পাওয়া যায়নি</h3>
                <p>অন্য কিছু খুঁজে দেখুন অথবা ফিল্টার পরিবর্তন করুন</p>
                <button class="cta-btn primary" onclick="filterProducts('all')" style="margin-top: 1rem;">
                    সব পণ্য দেখুন
                </button>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    animateProductCards();
}

function createProductCard(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="product-placeholder" style="display: none;">
                    <i class="fas fa-tshirt"></i>
                </div>
                ${discount > 0 ? `<div class="product-badge">${discount}% ছাড়</div>` : ''}
                <div class="product-actions-overlay">
                    <button class="action-btn" onclick="toggleWishlist(${product.id})" title="পছন্দের তালিকায় যোগ করুন">
                        <i class="far fa-heart" id="heart-${product.id}"></i>
                    </button>
                    <button class="action-btn" onclick="openQuickView(${product.id})" title="দ্রুত দেখুন">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
                <div class="product-price">
                    <span class="current-price">৳${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">৳${product.originalPrice}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">(${product.reviews} রিভিউ)</span>
                </div>
                <div class="product-options">
                    <select class="product-select size-select" data-product="${product.id}">
                        <option value="">সাইজ নির্বাচন</option>
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                    <select class="product-select color-select" data-product="${product.id}">
                        <option value="">রং নির্বাচন</option>
                        ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                    </select>
                </div>
                <div class="product-buttons">
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        কার্টে যোগ করুন
                    </button>
                    <button class="quick-view" onclick="openQuickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        <div class="stars">
            ${'★'.repeat(fullStars)}
            ${hasHalfStar ? '☆' : ''}
            ${'☆'.repeat(emptyStars)}
            <span class="rating-value">${rating}</span>
        </div>
    `;
}

function getCategoryName(category) {
    const categoryNames = {
        'mens': 'পুরুষদের',
        'womens': 'মহিলাদের',
        'kids': 'শিশুদের',
        'accessories': 'এক্সেসরিজ',
        'sale': 'সেল'
    };
    return categoryNames[category] || category;
}

function animateProductCards() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
    });
}

// Filter Functions
function initializeProductFilters() {
    updateFilterTabs();
}

function filterProducts(category, subcategory = null) {
    currentFilter = category;
    displayedProducts = 12;
    
    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    if (subcategory) {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
    }
    
    displayFilteredProducts(filteredProducts.slice(0, displayedProducts));
    updateFilterTabs();
    scrollToProducts();
    
    showNotification(`${getCategoryName(category)} পণ্য দেখানো হচ্ছে`, 'success');
}

function updateFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === currentFilter) {
            tab.classList.add('active');
        }
    });
}

function loadMoreProducts() {
    displayedProducts += 8;
    displayProducts();
    
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn && displayedProducts >= products.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const sizeSelect = document.querySelector(`.size-select[data-product="${productId}"]`);
    const colorSelect = document.querySelector(`.color-select[data-product="${productId}"]`);
    
    const selectedSize = sizeSelect?.value;
    const selectedColor = colorSelect?.value;
    
    if (!selectedSize || selectedSize === '') {
        showNotification('সাইজ নির্বাচন করুন', 'error');
        sizeSelect?.focus();
        return;
    }
    
    if (!selectedColor || selectedColor === '') {
        showNotification('রং নির্বাচন করুন', 'error');
        colorSelect?.focus();
        return;
    }

    const cartItemId = `${productId}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(item => item.cartId === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification('পণ্যের পরিমাণ বাড়ানো হয়েছে', 'success');
    } else {
        cart.push({
            ...product,
            cartId: cartItemId,
            selectedSize,
            selectedColor,
            quantity: 1,
            addedAt: Date.now()
        });
        showNotification(`"${product.name}" কার্টে যোগ করা হয়েছে`, 'success');
    }
    
    updateCartDisplay();
    animateCartButton();
    
    // Reset selections
    if (sizeSelect) sizeSelect.value = '';
    if (colorSelect) colorSelect.value = '';
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const deliveryCharge = document.getElementById('deliveryCharge');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= 1000 ? 0 : 60;
    const total = subtotal + delivery;
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartSubtotal) cartSubtotal.textContent = `৳${subtotal}`;
    if (deliveryCharge) deliveryCharge.textContent = delivery === 0 ? 'ফ্রি' : `৳${delivery}`;
    if (cartTotal) cartTotal.textContent = `৳${total}`;
    
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>আপনার কার্ট খালি</p>
                    <button class="continue-shopping" onclick="toggleCart(); scrollToProducts();">
                        কিনাকাটা শুরু করুন
                    </button>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => createCartItem(item)).join('');
        }
    }
}

function createCartItem(item) {
    return `
        <div class="cart-item" data-cart-id="${item.cartId}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <div class="cart-item-placeholder" style="display: none;">
                    <i class="fas fa-tshirt"></i>
                </div>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-options">
                    সাইজ: ${item.selectedSize} | রং: ${item.selectedColor}
                </div>
                <div class="cart-item-price">৳${item.price}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity('${item.cartId}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.cartId}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" onclick="removeFromCart('${item.cartId}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateQuantity(cartId, change) {
    const item = cart.find(item => item.cartId === cartId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(cartId);
    } else {
        updateCartDisplay();
    }
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartDisplay();
    showNotification('পণ্য কার্ট থেকে সরানো হয়েছে', 'success');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
}

function animateCartButton() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            cartBtn.style.animation = '';
        }, 500);
    }
}

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    const heartIcon = document.getElementById(`heart-${productId}`);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        if (heartIcon) heartIcon.className = 'far fa-heart';
        showNotification('পছন্দের তালিকা থেকে সরানো হয়েছে', 'success');
    } else {
        wishlist.push(product);
        if (heartIcon) heartIcon.className = 'fas fa-heart';
        showNotification('পছন্দের তালিকায় যোগ করা হয়েছে', 'success');
    }
    
    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

// Quick View Modal
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = createQuickViewContent(product);
    modal.classList.add('active');
}

function createQuickViewContent(product) {
    const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
        
    return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
            <div class="product-image-large">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 12px;">
                ${discount > 0 ? `<div class="product-badge">${discount}% ছাড়</div>` : ''}
            </div>
            <div class="product-details-content">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h2 style="margin: 0.5rem 0;">${product.name}</h2>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-text">(${product.reviews} রিভিউ)</span>
                </div>
                <p style="margin: 1rem 0; color: #666;">${product.description}</p>
                <div class="product-price" style="margin: 1rem 0;">
                    <span class="current-price" style="font-size: 1.5rem;">৳${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">৳${product.originalPrice}</span>` : ''}
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
                    <select class="product-select" id="quickViewSize">
                        <option value="">সাইজ নির্বাচন</option>
                        ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                    </select>
                    <select class="product-select" id="quickViewColor">
                        <option value="">রং নির্বাচন</option>
                        ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                    </select>
                </div>
                <div style="display: grid; grid-template-columns: 1fr auto; gap: 1rem; margin-top: 1.5rem;">
                    <button class="add-to-cart" onclick="addToCartFromQuickView(${product.id})" style="width: 100%;">
                        <i class="fas fa-shopping-cart"></i>
                        কার্টে যোগ করুন
                    </button>
                    <button class="action-btn" onclick="toggleWishlist(${product.id})" style="width: 50px; height: 50px;">
                        <i class="far fa-heart" id="quick-heart-${product.id}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addToCartFromQuickView(productId) {
    const sizeSelect = document.getElementById('quickViewSize');
    const colorSelect = document.getElementById('quickViewColor');
    
    const selectedSize = sizeSelect?.value;
    const selectedColor = colorSelect?.value;
    
    if (!selectedSize || selectedSize === '') {
        showNotification('সাইজ নির্বাচন করুন', 'error');
        return;
    }
    
    if (!selectedColor || selectedColor === '') {
        showNotification('রং নির্বাচন করুন', 'error');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const cartItemId = `${productId}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(item => item.cartId === cartItemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            cartId: cartItemId,
            selectedSize,
            selectedColor,
            quantity: 1,
            addedAt: Date.now()
        });
    }
    
    updateCartDisplay();
    closeQuickView();
    showNotification(`"${product.name}" কার্টে যোগ করা হয়েছে`, 'success');
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Auth Functions
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function handleAuthSubmit(e) {
    e.preventDefault();
    
    const userName = document.getElementById('userName').value.trim();
    const userPhone = document.getElementById('userPhone').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    
    if (!userName || !userPhone) {
        showNotification('নাম এবং মোবাইল নম্বর দিন', 'error');
        return;
    }
    
    if (userPhone.length < 11) {
        showNotification('সঠিক মোবাইল নম্বর দিন', 'error');
        return;
    }
    
    currentUser = {
        name: userName,
        phone: userPhone,
        email: userEmail,
        loginTime: Date.now()
    };
    
    closeLoginModal();
    showNotification(`স্বাগতম ${userName}! সফলভাবে লগইন হয়েছে`, 'success');
    updateUserDisplay();
    
    // Clear form
    document.getElementById('authForm').reset();
}

function updateUserDisplay() {
    const userBtn = document.querySelector('.user-btn');
    if (userBtn && currentUser) {
        userBtn.innerHTML = `<i class="fas fa-user"></i>`;
        userBtn.title = currentUser.name;
        userBtn.onclick = logout;
    }
}

function logout() {
    currentUser = null;
    const userBtn = document.querySelector('.user-btn');
    if (userBtn) {
        userBtn.innerHTML = `<i class="far fa-user"></i>`;
        userBtn.title = 'লগইন';
        userBtn.onclick = openLoginModal;
    }
    showNotification('সফলভাবে লগআউট হয়েছে', 'success');
}

// Checkout Functions
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('কার্ট খালি! প্রথমে কিছু পণ্য যোগ করুন', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('চেকআউট করতে প্রথমে লগইন করুন', 'error');
        openLoginModal();
        return;
    }
    
    closeCart();
    openPaymentModal();
}

function openPaymentModal() {
    const modal = document.getElementById('paymentModal');
    const methodsContainer = document.getElementById('paymentMethods');
    
    if (!modal || !methodsContainer) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= 1000 ? 0 : 60;
    const total = subtotal + delivery;
    
    methodsContainer.innerHTML = `
        <div class="payment-method" onclick="selectPaymentMethod('bkash')">
            <i class="fas fa-mobile-alt" style="color: #e2136e;"></i>
            <h4>বিকাশ</h4>
            <p>তাৎক্ষণিক পেমেন্ট</p>
        </div>
        <div class="payment-method" onclick="selectPaymentMethod('nagad')">
            <i class="fas fa-wallet" style="color: #f47e20;"></i>
            <h4>নগদ</h4>
            <p>সহজ পেমেন্ট</p>
        </div>
        <div class="payment-method" onclick="selectPaymentMethod('rocket')">
            <i class="fas fa-rocket" style="color: #8e44ad;"></i>
            <h4>রকেট</h4>
            <p>দ্রুত পেমেন্ট</p>
        </div>
        <div class="payment-method" onclick="selectPaymentMethod('cod')">
            <i class="fas fa-truck" style="color: #27ae60;"></i>
            <h4>ক্যাশ অন ডেলিভারি</h4>
            <p>পণ্য পেয়ে টাকা দিন</p>
        </div>
    `;
    
    modal.classList.add('active');
}

function selectPaymentMethod(method) {
    // Remove previous selection
    document.querySelectorAll('.payment-method').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked method
    event.target.closest('.payment-method').classList.add('selected');
    
    const detailsContainer = document.getElementById('paymentDetails');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = subtotal >= 1000 ? 0 : 60;
    const total = subtotal + delivery;
    
    let detailsHTML = '';
    
    switch(method) {
        case 'bkash':
            detailsHTML = `
                <div class="payment-info">
                    <h4>বিকাশ পেমেন্ট</h4>
                    <div class="payment-number">০১৭১১-১২৩৪৫৬</div>
                    <div class="payment-instructions">
                        <h5>পেমেন্ট করার নিয়ম:</h5>
                        <ol>
                            <li>আপনার বিকাশ মেনুতে যান</li>
                            <li>"Send Money" সিলেক্ট করুন</li>
                            <li>উপরের নম্বরে ৳${total} টাকা পাঠান</li>
                            <li>Transaction ID টি নিচে দিন</li>
                        </ol>
                    </div>
                    <input type="text" class="transaction-input" placeholder="Transaction ID" id="transactionId">
                </div>
                <button class="confirm-payment" onclick="confirmPayment('bkash', ${total})">
                    ৳${total} পেমেন্ট কনফার্ম করুন
                </button>
            `;
            break;
            
        case 'nagad':
            detailsHTML = `
                <div class="payment-info">
                    <h4>নগদ পেমেন্ট</h4>
                    <div class="payment-number">০১৭১১-১২৩৪৫৬</div>
                    <div class="payment-instructions">
                        <h5>পেমেন্ট করার নিয়ম:</h5>
                        <ol>
                            <li>আপনার নগদ অ্যাপ খুলুন</li>
                            <li>"Send Money" সিলেক্ট করুন</li>
                            <li>উপরের নম্বরে ৳${total} টাকা পাঠান</li>
                            <li>Transaction ID টি নিচে দিন</li>
                        </ol>
                    </div>
                    <input type="text" class="transaction-input" placeholder="Transaction ID" id="transactionId">
                </div>
                <button class="confirm-payment" onclick="confirmPayment('nagad', ${total})">
                    ৳${total} পেমেন্ট কনফার্ম করুন
                </button>
            `;
            break;
            
        case 'rocket':
            detailsHTML = `
                <div class="payment-info">
                    <h4>রকেট পেমেন্ট</h4>
                    <div class="payment-number">০১৭১১-১২৩৪৫৬-৯</div>
                    <div class="payment-instructions">
                        <h5>পেমেন্ট করার নিয়ম:</h5>
                        <ol>
                            <li>আপনার রকেট অ্যাপ খুলুন</li>
                            <li>"Send Money" সিলেক্ট করুন</li>
                            <li>উপরের নম্বরে ৳${total} টাকা পাঠান</li>
                            <li>Transaction ID টি নিচে দিন</li>
                        </ol>
                    </div>
                    <input type="text" class="transaction-input" placeholder="Transaction ID" id="transactionId">
                </div>
                <button class="confirm-payment" onclick="confirmPayment('rocket', ${total})">
                    ৳${total} পেমেন্ট কনফার্ম করুন
                </button>
            `;
            break;
            
        case 'cod':
            detailsHTML = `
                <div class="payment-info">
                    <h4>ক্যাশ অন ডেলিভারি</h4>
                    <p style="color: #27ae60; font-weight: 600;">✓ ডেলিভারি চার্জ: ৳${delivery}</p>
                    <p>✓ পণ্য হাতে পেয়ে টাকা দিন</p>
                    <p>✓ ডেলিভারির আগে ফোন করা হবে</p>
                    <div style="background: #f0f9ff; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <h5>ডেলিভারি ঠিকানা:</h5>
                        <textarea class="address-textarea" placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন" id="deliveryAddress"></textarea>
                    </div>
                </div>
                <button class="confirm-payment" onclick="confirmPayment('cod', ${total})">
                    ৳${total} অর্ডার কনফার্ম করুন
                </button>
            `;
            break;
    }
    
    detailsContainer.innerHTML = detailsHTML;
    detailsContainer.classList.add('active');
}

function confirmPayment(method, amount) {
    let isValid = true;
    let orderData = {
        orderId: 'SR' + Date.now(),
        user: currentUser,
        items: [...cart],
        amount: amount,
        method: method,
        orderDate: new Date().toLocaleString('bn-BD'),
        status: 'pending'
    };
    
    if (method === 'bkash' || method === 'nagad' || method === 'rocket') {
        const transactionId = document.getElementById('transactionId')?.value.trim();
        if (!transactionId) {
            showNotification('Transaction ID দিন!', 'error');
            return;
        }
        orderData.transactionId = transactionId;
    } else if (method === 'cod') {
        const address = document.getElementById('deliveryAddress')?.value.trim();
        if (!address) {
            showNotification('ডেলিভারি ঠিকানা দিন!', 'error');
            return;
        }
        orderData.address = address;
    }
    
    // Show loading
    showLoading();
    
    // Simulate order processing
    setTimeout(() => {
        hideLoading();
        
        // Clear cart
        cart = [];
        updateCartDisplay();
        closePaymentModal();
        
        // Show success message
        showOrderSuccess(orderData);
        
    }, 2000);
}

function showOrderSuccess(orderData) {
    const methodNames = {
        'bkash': 'বিকাশ',
        'nagad': 'নগদ',
        'rocket': 'রকেট',
        'cod': 'ক্যাশ অন ডেলিভারি'
    };
    
    let message = `অভিনন্দন! আপনার অর্ডার সফল হয়েছে!\n\n`;
    message += `অর্ডার ID: ${orderData.orderId}\n`;
    message += `পেমেন্ট মেথড: ${methodNames[orderData.method]}\n`;
    message += `মোট: ৳${orderData.amount}\n`;
    
    if (orderData.transactionId) {
        message += `Transaction ID: ${orderData.transactionId}\n`;
    }
    
    message += `\nআমাদের পক্ষ থেকে খুব শীঘ্রই যোগাযোগ করা হবে।`;
    
    alert(message);
    showNotification('অর্ডার সফল! SMS এ বিস্তারিত পাঠানো হয়েছে', 'success');
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Newsletter Functions
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput?.value.trim();
    
    if (!email) {
        showNotification('ইমেইল দিন', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('সঠিক ইমেইল দিন', 'error');
        return;
    }
    
    showLoading();
    
    setTimeout(() => {
        hideLoading();
        showNotification('নিউজলেটার সাবস্ক্রিপশন সফল!', 'success');
        emailInput.value = '';
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Utility Functions
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageEl = document.getElementById('notificationMessage');
    const iconEl = notification?.querySelector('.notification-icon i');
    
    if (!notification || !messageEl) return;
    
    messageEl.textContent = message;
    
    // Update icon and style based on type
    if (type === 'error') {
        notification.classList.add('error');
        if (iconEl) iconEl.className = 'fas fa-times';
    } else {
        notification.classList.remove('error');
        if (iconEl) iconEl.className = 'fas fa-check';
    }
    
    notification.classList.add('show');
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        closeNotification();
    }, 4000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.classList.remove('show');
    }
}

function showLoading() {
    const loading = document.getElementById('loadingOverlay');
    if (loading) {
        loading.classList.add('show');
    }
}

function hideLoading() {
    const loading = document.getElementById('loadingOverlay');
    if (loading) {
        loading.classList.remove('show');
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const categoryNav = document.querySelector('.category-nav');
    if (categoryNav) {
        categoryNav.classList.toggle('mobile-open');
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Enter to add to cart from product card
    if (e.key === 'Enter' && e.target.classList.contains('add-to-cart')) {
        e.target.click();
    }
    
    // Arrow keys for product navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const productCards = document.querySelectorAll('.product-card');
        const currentFocus = document.activeElement;
        const currentIndex = Array.from(productCards).indexOf(currentFocus);
        
        if (currentIndex !== -1) {
            const nextIndex = e.key === 'ArrowRight' 
                ? (currentIndex + 1) % productCards.length
                : (currentIndex - 1 + productCards.length) % productCards.length;
            
            productCards[nextIndex].focus();
        }
    }
});

// Performance Optimization - Lazy Loading Images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Local Storage Functions
function saveCartToStorage() {
    try {
        localStorage.setItem('styleRakeCart', JSON.stringify(cart));
    } catch (e) {
        console.log('Could not save cart to localStorage');
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('styleRakeCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
        }
    } catch (e) {
        console.log('Could not load cart from localStorage');
    }
}

function saveWishlistToStorage() {
    try {
        localStorage.setItem('styleRakeWishlist', JSON.stringify(wishlist));
    } catch (e) {
        console.log('Could not save wishlist to localStorage');
    }
}

function loadWishlistFromStorage() {
    try {
        const savedWishlist = localStorage.getItem('styleRakeWishlist');
        if (savedWishlist) {
            wishlist = JSON.parse(savedWishlist);
            updateWishlistDisplay();
        }
    } catch (e) {
        console.log('Could not load wishlist from localStorage');
    }
}

// Auto-save cart and wishlist when modified
function setupAutoSave() {
    // Save cart when modified
    const originalAddToCart = addToCart;
    window.addToCart = function(...args) {
        originalAddToCart.apply(this, args);
        saveCartToStorage();
    };
    
    // Save wishlist when modified
    const originalToggleWishlist = toggleWishlist;
    window.toggleWishlist = function(...args) {
        originalToggleWishlist.apply(this, args);
        saveWishlistToStorage();
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    setupAutoSave();
    setupLazyLoading();
});

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .mobile-open {
        max-height: 300px !important;
        overflow-y: auto;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
    
    .stars {
        color: #fbbf24;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .rating-value {
        color: #6b7280;
        font-size: 0.75rem;
    }
    
    .rating-text {
        color: #6b7280;
        font-size: 0.75rem;
        margin-left: 0.5rem;
    }
`;
document.head.appendChild(style);

// Export for global access
window.StyleRakeBd = {
    filterProducts,
    addToCart,
    toggleCart,
    toggleWishlist,
    openQuickView,
    performSearch,
    proceedToCheckout,
    subscribeNewsletter,
    closeWelcome,
    scrollToProducts
};

console.log('Style-Rake Bd Enhanced JavaScript loaded successfully! 🚀');