const landscapes = [
    { title: "Aurora Borealis", location: "Norway", url: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&h=600&fit=crop" },
    { title: "Santorini Sunset", location: "Greece", url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop" },
    { title: "Swiss Alps", location: "Switzerland", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop" },
    { title: "Tegalalang Rice Terrace", location: "Bali, Indonesia", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop" },
    { title: "Maldives Paradise", location: "Maldives", url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop" },
    { title: "Mount Fuji & Sakura", location: "Japan", url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop" },
    { title: "Grand Canyon", location: "Arizona, USA", url: "https://images.unsplash.com/photo-1505852903341-fc8d3db104d0?w=800&h=600&fit=crop" },
    { title: "Amazon Rainforest", location: "Brazil", url: "https://images.unsplash.com/photo-1516297227441-69dd1b70022b?w=800&h=600&fit=crop" },
    { title: "Provence Lavender", location: "France", url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop" },
    { title: "Skógafoss Waterfall", location: "Iceland", url: "https://images.unsplash.com/photo-1506968430777-bf7784a87f5e?w=800&h=600&fit=crop" },
    { title: "Banff National Park", location: "Canada", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
    { title: "Milky Way", location: "Chile", url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop" }
];

let displayedCount = 6;
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');

function displayImages(count) {
    const toShow = landscapes.slice(0, count);
    gallery.innerHTML = toShow.map((item, index) => `
        <div class="card" data-index="${index}">
            <img class="card-image" src="${item.url}" alt="${item.title}" loading="lazy">
            <div class="card-content">
                <div class="card-title">${item.title}</div>
                <div class="card-location">📍 ${item.location}</div>
            </div>
        </div>
    `).join('');
}

displayImages(displayedCount);

loadMoreBtn.addEventListener('click', () => {
    if (displayedCount >= landscapes.length) {
        loadMoreBtn.textContent = 'Semua Pemandangan Sudah Ditampilkan 🎉';
        loadMoreBtn.disabled = true;
        loadMoreBtn.style.opacity = '0.6';
        return;
    }
    displayedCount = Math.min(displayedCount + 3, landscapes.length);
    displayImages(displayedCount);
});

// Modal preview
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content" id="modalImg">';
document.body.appendChild(modal);

const modalImg = document.getElementById('modalImg');
const closeModal = modal.querySelector('.close');

gallery.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const img = card.querySelector('.card-image');
        modal.style.display = 'block';
        modalImg.src = img.src;
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
