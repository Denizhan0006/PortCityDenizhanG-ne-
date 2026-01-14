// 2️⃣ & 3️⃣ Menü Etkileşimi
// Sayfadaki tüm menü linklerini seçiyoruz
const menuleriSec = document.querySelectorAll('.header-menu a');

menuleriSec.forEach(link => {
    // Fare üzerine gelince sarı olsun (mouseover)
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffeb3b'; 
    });

    // Fare ayrılınca tekrar beyaz olsun (mouseout)
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    });

    // Tıklayınca hangi sayfada olduğumuzu belli etmek için (click)
    link.addEventListener('click', function() {
        menuleriSec.forEach(l => l.style.borderBottom = 'none');
        this.style.borderBottom = '2px solid #ffeb3b';
    });
});
// 4️⃣ Tema Değiştirme
const temaButonu = document.getElementById('theme-toggle');

if (temaButonu) {
    temaButonu.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });
}