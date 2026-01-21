// ========================================
// PRICING TOGGLE - Aylık / Yıllık
// ========================================

// DOM Elementleri
const toggle = document.getElementById('pricing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');
const priceElements = document.querySelectorAll('.price');

// Toggle değiştiğinde
toggle.addEventListener('change', function() {
    const isYearly = this.checked;
    
    // Label aktifliğini değiştir
    if (isYearly) {
        monthlyLabel.classList.remove('active');
        yearlyLabel.classList.add('active');
    } else {
        monthlyLabel.classList.add('active');
        yearlyLabel.classList.remove('active');
    }
    
    // Fiyatları güncelle
    updatePrices(isYearly);
});

// Fiyatları güncelleme fonksiyonu
function updatePrices(isYearly) {
    priceElements.forEach(priceElement => {
        const monthlyPrice = priceElement.getAttribute('data-monthly');
        const yearlyPrice = priceElement.getAttribute('data-yearly');
        
        // Animasyonlu geçiş için
        priceElement.style.opacity = '0';
        priceElement.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            priceElement.textContent = isYearly ? yearlyPrice : monthlyPrice;
            priceElement.style.opacity = '1';
            priceElement.style.transform = 'translateY(0)';
        }, 150);
    });
}

// Fiyat elementlerine transition ekle
priceElements.forEach(priceElement => {
    priceElement.style.transition = 'all 0.3s ease';
});

// ========================================
// KART HOVER ANİMASYONU (Opsiyonel)
// ========================================

const cards = document.querySelectorAll('.pricing-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ========================================
// BUTON CLICK EVENTLERİ
// ========================================

const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('h2').textContent;
        const price = this.closest('.pricing-card').querySelector('.price').textContent;
        const isYearly = toggle.checked;
        const period = isYearly ? 'Yıllık' : 'Aylık';
        
        // Console'da göster (gerçek projede API çağrısı yapılabilir)
        console.log(`Seçilen Plan: ${planName}`);
        console.log(`Fiyat: ₺${price} (${period})`);
        
        // Kullanıcıya bildirim (opsiyonel)
        alert(`${planName} planını seçtiniz!\nFiyat: ₺${price}/${period === 'Yıllık' ? 'yıl' : 'ay'}`);
        
        // Burada gerçek bir ödeme sayfasına yönlendirme yapılabilir:
        // window.location.href = `/checkout?plan=${planName}&period=${period}`;
    });
});

// ========================================
// SAYFA YÜKLENME ANİMASYONU
// ========================================

window.addEventListener('load', function() {
    // Kartları sırayla göster
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});
