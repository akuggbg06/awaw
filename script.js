const landscapes = [
    { title: "Hutan Tropis Lebat", location: "Amazon, Brasil", url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop" },
    { title: "Hutan Bambu", location: "Kyoto, Jepang", url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=600&fit=crop" },
    { title: "Pohon Raksasa", location: "Sequoia, USA", url: "https://images.unsplash.com/photo-1503788311181-fa3f9635e34f?w=800&h=600&fit=crop" },
    { title: "Hutan Pinus", location: "Black Forest, Jerman", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
    { title: "Jungle Rimbun", location: "Borneo, Indonesia", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" },
    { title: "Hutan Musim Gugur", location: "Vermont, USA", url: "https://images.unsplash.com/photo-1504113888836-1dd4ed6d7d2b?w=800&h=600&fit=crop" },
    { title: "Hutan Lumut", location: "Washington, USA", url: "https://images.unsplash.com/photo-1505765050516-f72fdacb9733?w=800&h=600&fit=crop" },
    { title: "Hutan Ajaib", location: "Oregon, USA", url: "https://images.unsplash.com/photo-1512838232013-bb401d5c67ef?w=800&h=600&fit=crop" },
    { title: "Pohon Palem Rimbun", location: "Kosta Rika", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop" },
    { title: "Hutan Kabut", location: "Taiwan", url: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&h=600&fit=crop" },
    { title: "Hutan Hijau", location: "Jerman", url: "https://images.unsplash.com/photo-1444841546160-6e3f4715c771?w=800&h=600&fit=crop" },
    { title: "Pohon Bonsai Raksasa", location: "Madeira, Portugal", url: "https://images.unsplash.com/photo-1533479327424-4da1c3d180b9?w=800&h=600&fit=crop" },
    { title: "Hutan Tua", location: "Polandia", url: "https://images.unsplash.com/photo-1501117718542-9d8f94ed1f5a?w=800&h=600&fit=crop" },
    { title: "Hutan Mangrove", location: "Thailand", url: "https://images.unsplash.com/photo-1582415396135-1e0b6a8e33b5?w=800&h=600&fit=crop" },
    { title: "Hutan Salju", location: "Finlandia", url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&h=600&fit=crop" },
    { title: "Hutan Pakis", location: "Selandia Baru", url: "https://images.unsplash.com/photo-1517479143999-e0f7904e2b7e?w=800&h=600&fit=crop" }
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
                <div class="card-title">🌲 ${item.title}</div>
                <div class="card-location">📍 ${item.location}</div>
            </div>
        </div>
    `).join('');
}

displayImages(displayedCount);

loadMoreBtn.addEventListener('click', () => {
    if (displayedCount >= landscapes.length) {
        loadMoreBtn.textContent = '✅ Semua Pemandangan Sudah Ditampilkan';
        loadMoreBtn.disabled = true;
        return;
    }
    displayedCount = Math.min(displayedCount + 3, landscapes.length);
    displayImages(displayedCount);
});

// Modal buat preview gambar
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
