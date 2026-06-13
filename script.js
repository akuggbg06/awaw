const landscapes = [
    { title: "Hutan Tropis Lebat", location: "Amazon, Brasil", url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop" },
    { title: "Hutan Bambu", location: "Kyoto, Jepang", url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=600&fit=crop" },
    { title: "Pohon Raksasa Sequoia", location: "California, USA", url: "https://images.unsplash.com/photo-1503788311181-fa3f9635e34f?w=800&h=600&fit=crop" },
    { title: "Hutan Pinus", location: "Black Forest, Jerman", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop" },
    { title: "Jungle Kalimantan", location: "Borneo, Indonesia", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop" },
    { title: "Hutan Musim Gugur", location: "Vermont, USA", url: "https://images.unsplash.com/photo-1504113888836-1dd4ed6d7d2b?w=800&h=600&fit=crop" },
    { title: "Hutan Lumut", location: "Washington, USA", url: "https://images.unsplash.com/photo-1505765050516-f72fdacb9733?w=800&h=600&fit=crop" },
    { title: "Hutan Ajaib", location: "Oregon, USA", url: "https://images.unsplash.com/photo-1512838232013-bb401d5c67ef?w=800&h=600&fit=crop" },
    { title: "Pohon Palem Rimbun", location: "Kosta Rika", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop" },
    { title: "Hutan Kabut", location: "Taiwan", url: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&h=600&fit=crop" },
    { title: "Hutan Hijau Subur", location: "Jerman", url: "https://images.unsplash.com/photo-1444841546160-6e3f4715c771?w=800&h=600&fit=crop" },
    { title: "Pohon Bonsai Raksasa", location: "Madeira, Portugal", url: "https://images.unsplash.com/photo-1533479327424-4da1c3d180b9?w=800&h=600&fit=crop" },
    { title: "Hutan Tua", location: "Polandia", url: "https://images.unsplash.com/photo-1501117718542-9d8f94ed1f5a?w=800&h=600&fit=crop" },
    { title: "Hutan Mangrove", location: "Thailand", url: "https://images.unsplash.com/photo-1582415396135-1e0b6a8e33b5?w=800&h=600&fit=crop" },
    { title: "Hutan Salju", location: "Finlandia", url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800&h=600&fit=crop" },
    { title: "Hutan Pakis", location: "Selandia Baru", url: "https://images.unsplash.com/photo-1517479143999-e0f7904e2b7e?w=800&h=600&fit=crop" },
    { title: "Hutan Cemara", location: "Austria", url: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=800&h=600&fit=crop" },
    { title: "Jalan Setapak Hutan", location: "Inggris", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" },
    { title: "Hutan Sungai", location: "Slovenia", url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=800&h=600&fit=crop" },
    { title: "Pohon Ek Raksasa", location: "Inggris", url: "https://images.unsplash.com/photo-1459007397692-2808e3b06d04?w=800&h=600&fit=crop" },
    { title: "Hutan Tropis", location: "Puerto Rico", url: "https://images.unsplash.com/photo-1470071459604-3b5ec770a5f6?w=800&h=600&fit=crop" },
    { title: "Pepohonan Rindang", location: "Belanda", url: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=800&h=600&fit=crop" },
    { title: "Hutan Matahari", location: "Kalifornia, USA", url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop" },
    { title: "Pohon Besar", location: "Kanada", url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?w=800&h=600&fit=crop" },
    { title: "Hutan Embun", location: "Republik Ceko", url: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?w=800&h=600&fit=crop" },
    { title: "Hutan Purba", location: "Madagaskar", url: "https://images.unsplash.com/photo-1545146257-97f5f3f7f9b3?w=800&h=600&fit=crop" },
    { title: "Hutan Sri Lanka", location: "Sri Lanka", url: "https://images.unsplash.com/photo-1501884174060-4b5f0a2ef2f7?w=800&h=600&fit=crop" },
    { title: "Hutan Afrika", location: "Uganda", url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop" },
    { title: "Pohon Sakura", location: "Jepang", url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop" },
    { title: "Hutan Musim Semi", location: "Korea Selatan", url: "https://images.unsplash.com/photo-1504025468847-8de8a7c9b810?w=800&h=600&fit=crop" },
    { title: "Hutan Tembok Besar", location: "China", url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop" },
    { title: "Hutan Islandia", location: "Islandia", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop" },
    { title: "Hutan Swiss", location: "Swiss", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop" },
    { title: "Hutan Nepal", location: "Nepal", url: "https://images.unsplash.com/photo-1498019559366-a1f6038ef7a4?w=800&h=600&fit=crop" },
    { title: "Hutan Kosta Rika", location: "Kosta Rika", url: "https://images.unsplash.com/photo-1528184039930-bd039b2e84e1?w=800&h=600&fit=crop" },
    { title: "Hutan Australia", location: "Australia", url: "https://images.unsplash.com/photo-1516684241021-e6b4cb9e7c46?w=800&h=600&fit=crop" }
];

let displayedCount = 9;
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
        loadMoreBtn.textContent = '✅ Sudah 36 Pemandangan Hutan!';
        loadMoreBtn.disabled = true;
        return;
    }
    displayedCount = Math.min(displayedCount + 6, landscapes.length);
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
