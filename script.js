// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Logika Pilihan Varian & Update Harga
document.querySelectorAll('.variant-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.products-card');

        // Ganti class active
        card.querySelectorAll('.variant-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Update Harga
        const newPrice = this.getAttribute('data-price');
        const priceElement = card.querySelector('.products-price');

        priceElement.style.transform = "scale(1.1)";
        setTimeout(() => {
            priceElement.innerText = newPrice;
            priceElement.style.transform = "scale(1)";
        }, 100);
    });
});

// 3. Logika Pesan via WhatsApp
document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const card = this.closest('.products-card');
        const productName = card.querySelector('.products-title').innerText;
        const activeVariant = card.querySelector('.variant-btn.active').innerText;
        const price = card.querySelector('.products-price').innerText;

        // Ganti nomor ini dengan nomor WhatsApp Anda (Gunakan format 62)
        const phoneNumber = "6288989783896";

        const message = `Halo Saya ingin memesan Kerupuk Lele:%0A%0A` +
            `*Produk:* ${productName}%0A` +
            `*Varian:* ${activeVariant}%0A` +
            `*Harga:* ${price}%0A%0A` +
            `Mohon info detail pembayarannya. Terima kasih!`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Buka WhatsApp di tab baru
        window.open(whatsappURL, '_blank');
    });
});

// Toggle Mobile Menu
const mobileMenuIcon = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Opsional: Animasi ganti ikon dari garis tiga ke ikon silang (X)
    const icon = mobileMenuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Tutup menu otomatis saat salah satu link diklik (agar tidak menutupi layar)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuIcon.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});