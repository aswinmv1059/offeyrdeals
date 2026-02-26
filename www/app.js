const deals = [
    {
        id: 1,
        vendor: "LuLu Mall Kochi",
        title: "Weekend Fashion Bash - Flat 20% OFF",
        category: "fashion",
        price: 1599,
        oldPrice: 1999,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        vendor: "Paragon Kochi",
        title: "Kozhikode Biryani Combo - Buy 1 Get 1 Free",
        category: "food",
        price: 350,
        oldPrice: 700,
        discount: "BOGO",
        image: "https://images.unsplash.com/photo-1589302168068-1c491f1c911e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        vendor: "Reliance Digital Kochi",
        title: "AirPods Pro (2nd Gen) - Special Offer",
        category: "tech",
        price: 18990,
        oldPrice: 24900,
        discount: "₹5910 OFF",
        image: "https://images.unsplash.com/photo-1588423770670-457319969212?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        vendor: "Grand Hyatt Bolgatty",
        title: "Luxury Spa Session - Flat ₹2000 OFF",
        category: "beauty",
        price: 3500,
        oldPrice: 5500,
        discount: "36% OFF",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        vendor: "Oberon Mall",
        title: "Men's Sneakers - Minimum 40% OFF",
        category: "fashion",
        price: 2400,
        oldPrice: 4000,
        discount: "40% OFF",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        vendor: "Lulu Hypermarket",
        title: "Fresh Fruits Basket - 15% OFF",
        category: "food",
        price: 425,
        oldPrice: 500,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=60"
    }
];

function renderDeals(filter = 'all') {
    const dealsGrid = document.getElementById('dealsGrid');
    const filteredDeals = filter === 'all' ? deals : deals.filter(d => d.category === filter);
    
    dealsGrid.innerHTML = filteredDeals.map(deal => `
        <div class="deal-card fade-in">
            <div class="discount-badge">${deal.discount}</div>
            <button class="favorite-btn"><i class="far fa-heart"></i></button>
            <img src="${deal.image}" alt="${deal.title}" class="deal-image">
            <div class="deal-info">
                <div class="deal-vendor">${deal.vendor}</div>
                <h3 class="deal-title">${deal.title}</h3>
                <div class="deal-price-row">
                    <span class="current-price">₹${deal.price.toLocaleString('en-IN')}</span>
                    <span class="old-price">₹${deal.oldPrice.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Category Tabs Logic
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        categoryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const category = item.getAttribute('data-category');
        renderDeals(category);
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderDeals();
});
