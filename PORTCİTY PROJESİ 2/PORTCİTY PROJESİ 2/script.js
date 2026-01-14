document.addEventListener('DOMContentLoaded', () => {
    let sayi = 0;
    const btn = document.getElementById('like-btn');
    const txt = document.getElementById('like-count');
    if(btn){
        btn.onclick = () => {
            sayi++; txt.innerText = sayi;
            btn.style.transform = "scale(1.3) rotate(5deg)";
            btn.style.backgroundColor = "#2ecc71";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
                btn.style.backgroundColor = "#ffeb3b";
            }, 150);
        };
    }

    const tButtons = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-main')];
    tButtons.forEach(b => {
        if(b) b.onclick = () => document.body.classList.toggle('light-theme');
    });

    const selamlamaTxt = document.getElementById('selamlama');
    const sozTxt = document.getElementById('gunluk-soz');
    const saat = new Date().getHours();
    const sozler = [
        "Sakin deniz asla usta bir denizci yetiştirmez.",
        "Rüzgarı kontrol edemeyiz ama yelkenlerimizi ayarlayabiliriz.",
        "Deniz huzurdur, liman ise güvendir."
    ];
    if(selamlamaTxt){
        selamlamaTxt.innerText = (saat < 12) ? "🌅 Günaydın! PortCity'e Hoş Geldiniz." : (saat < 18 ? "☀️ Tünaydın! PortCity'e Hoş Geldiniz." : "🌆 İyi Akşamlar! PortCity'e Hoş Geldiniz.");
        sozTxt.innerText = sozler[Math.floor(Math.random() * sozler.length)];
    }
});