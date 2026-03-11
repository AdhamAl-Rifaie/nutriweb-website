/**********************************************
 * SECTION 1 — FILTER REVIEWS
 **********************************************/
const filterButtons = document.querySelectorAll('.filter-btn');
const reviewCards = document.querySelectorAll('.review-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        reviewCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/**********************************************
 * SECTION 2 — LOAD MORE BUTTON
 **********************************************/
const loadMoreBtn = document.querySelector('.btn-load-more');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        alert('Load more reviews functionality - connect to your backend');
    });
}

/**********************************************
 * SECTION 3 — MOBILE NAVBAR TOGGLE
 **********************************************/
const mobileToggle = document.querySelector('.mobile-toggle');
const navbarLinks = document.querySelector('.navbar-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navbarLinks.classList.toggle('active');
    });
}

/**********************************************
 * SECTION 4 — PACKAGE & PROMO CODE SYSTEM
 **********************************************/

const packages = {
    'standard': { name: 'الباقة الأساسية', price: 599 },
    'pro': { name: 'باقة PRO', price: 749 },
    'vip': { name: 'الباقة المميزة VIP', price: 899 }
};

const promoCodes = {
    'EIDFIT35': { 
        discount: 35, 
        description: 'عرض العيد المبارك 🎉', 
        applicable: ['standard', 'pro', 'vip'],
        endDate: new Date('2026-03-25')
    },
    // 'PRO30': { 
    //     discount: 30, 
    //     description: 'خصم 30% لباقة PRO', 
    //     applicable: ['pro'] 
    // },
    // 'VIP25': { 
    //     discount: 25, 
    //     description: 'خصم 25% للباقة VIP', 
    //     applicable: ['vip'] 
    // },
    // 'STANDARD35': { 
    //     discount: 35, 
    //     description: 'خصم 35% للباقة STANDARD', 
    //     applicable: ['standard'] 
    // }
};

let selectedPackage = 'pro';
let appliedDiscount = null;

const promoInput = document.getElementById('promoInput');
const applyBtn = document.getElementById('applyBtn');
const message = document.getElementById('message');
const btnText = applyBtn ? applyBtn.querySelector('.btn-text') : null;
const codesGrid = document.getElementById('codesGrid');

/**********************************************
 * SECTION 4.1 — SPECIAL OCCASION BANNERS
 **********************************************/

function isEidPeriod() {
    const now = new Date();
    const eidStart = new Date('2026-03-11');
    const eidEnd = new Date('2026-03-25');
    return now >= eidStart && now <= eidEnd;
}

function getActiveOccasion() {
    if (isEidPeriod()) return 'eid';
    if (isRamadanMonth()) return 'ramadan';
    return null;
}

function showSpecialBanner() {
    const occasion = getActiveOccasion();
    if (!occasion) return;

    const promoSection = document.querySelector('.promo-section');
    if (!promoSection) return;

    const bannerConfig = {
        eid: {
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            icon: '🎉',
            title: 'عيد الفطر المبارك',
            code: 'EIDFIT35',
            discount: 35,
            endDate: new Date('2026-03-25')
        },
    };

    const config = bannerConfig[occasion];
    
    const banner = document.createElement('div');
    banner.className = 'special-banner';
    banner.innerHTML = `
        <div class="banner-content" style="background: ${config.gradient};">
            <div class="banner-icon">${config.icon}</div>
            <h3 class="banner-title">${config.title}</h3>
            <p class="banner-subtitle">استخدم كود <strong>${config.code}</strong> للحصول على خصم ${config.discount}%</p>
            <div class="countdown-timer" id="countdownTimer"></div>
            <div class="banner-badge">عرض محدود</div>
        </div>
    `;
    
    promoSection.querySelector('.container').prepend(banner);
    
    startCountdown(config.endDate);
}

function startCountdown(endDate) {
    const timerElement = document.getElementById('countdownTimer');
    if (!timerElement) return;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;

        if (distance < 0) {
            timerElement.innerHTML = '<span class="expired">انتهى العرض</span>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            <div class="countdown-grid">
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">يوم</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">ساعة</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">دقيقة</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">ثانية</span>
                </div>
            </div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**********************************************
 * SECTION 4.2 — PACKAGE SELECTION & CODES
 **********************************************/

document.addEventListener('DOMContentLoaded', () => {
    updateAvailableCodes();
    showSpecialBanner();
});

function selectPackage(packageType) {
    selectedPackage = packageType;

    document.querySelectorAll('.package-option').forEach(option => {
        option.classList.remove('selected');
    });

    const packageOption = document.querySelector(`[data-package="${packageType}"]`);
    if (packageOption) {
        packageOption.classList.add('selected');
    }

    clearDiscount();
    updateAvailableCodes();
}

function updateAvailableCodes() {
    if (!codesGrid) return;
    
    codesGrid.innerHTML = '';
    const now = new Date();

    Object.entries(promoCodes).forEach(([code, data]) => {
        const isExpired = data.endDate && now > data.endDate;
        const applicable = data.applicable.includes(selectedPackage);

        const card = document.createElement('div');
        card.className = `code-card ${!applicable ? 'disabled' : ''} ${isExpired ? 'expired' : ''}`;
        
        let cardHTML = `
            <div class="code-name">${code}</div>
            <div class="code-discount">${data.discount}% خصم</div>
            <div class="code-description">${data.description}</div>
        `;
        
        if (isExpired) {
            cardHTML += '<div class="expired-badge">منتهي</div>';
        } else if (data.endDate) {
            const daysLeft = Math.ceil((data.endDate - now) / (1000 * 60 * 60 * 24));
            if (daysLeft <= 7) {
                cardHTML += `<div class="urgency-badge">باقي ${daysLeft} ${daysLeft === 1 ? 'يوم' : 'أيام'}</div>`;
            }
        }
        
        card.innerHTML = cardHTML;

        if (applicable && !isExpired) {
            card.onclick = () => applyCode(code);
        }

        codesGrid.appendChild(card);
    });
}

function applyPromoCode() {
    const code = promoInput.value.trim().toUpperCase();

    if (!code) {
        showMessage('يرجى إدخال كود الخصم', 'error');
        return;
    }

    if (btnText) {
        btnText.innerHTML = '<div class="loading"></div>';
    }
    if (applyBtn) {
        applyBtn.disabled = true;
    }

    setTimeout(() => {
        if (promoCodes[code]) {
            const promo = promoCodes[code];
            
            if (promo.endDate && new Date() > promo.endDate) {
                showMessage('هذا الكود منتهي الصلاحية', 'error');
            } else if (promo.applicable.includes(selectedPackage)) {
                showMessage(`تم تطبيق الكود! خصم ${promo.discount}%`, 'success');
                applyDiscount(promo.discount, code);
                createConfetti();
            } else {
                showMessage('هذا الكود غير صالح لهذه الباقة', 'error');
            }
        } else {
            showMessage('كود الخصم غير صحيح', 'error');
        }

        if (btnText) {
            btnText.textContent = 'تطبيق';
        }
        if (applyBtn) {
            applyBtn.disabled = false;
        }
    }, 1200);
}

function applyDiscount(percent, code) {
    const price = packages[selectedPackage].price;
    const amount = Math.round(price * (percent / 100));
    const final = price - amount;

    appliedDiscount = {
        code: code,
        percentage: percent,
        amount: amount,
        finalPrice: final,
        originalPrice: price
    };

    updatePackageCardDiscount();

    sessionStorage.setItem(
        'appliedDiscount',
        JSON.stringify({
            package: selectedPackage,
            ...appliedDiscount,
            timestamp: Date.now()
        })
    );

    scrollToPackage(selectedPackage);
}

function scrollToPackage(packageType) {
    setTimeout(() => {
        const packagesSection = document.querySelector('.packages-section');
        if (!packagesSection) return;
        
        const packageCard = packagesSection.querySelector(`.package-card[data-package="${packageType}"]`);
        
        if (packageCard) {
            packageCard.classList.add('highlight-pulse');
            
            const yOffset = -100;
            const y = packageCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                packageCard.classList.remove('highlight-pulse');
            }, 2000);
        }
    }, 600);
}

function createConfetti() {
    const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2', '#fbbf24', '#10b981'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

function updatePackageCardDiscount() {
    if (!appliedDiscount) return;

    const el = document.getElementById(`discount-${selectedPackage}`);
    if (el) {
        el.querySelector('.original-price').textContent = `${appliedDiscount.originalPrice} جنيه`;
        el.querySelector('.discounted-price').textContent = `${appliedDiscount.finalPrice} جنيه`;
        el.querySelector('.discount-amount').textContent = `خصم ${appliedDiscount.amount} جنيه`;
        el.classList.add('show');
    }
}

function clearDiscount() {
    appliedDiscount = null;
    sessionStorage.removeItem('appliedDiscount');

    document.querySelectorAll('.price-discount').forEach(el => el.classList.remove('show'));
}

function applyCode(code) {
    promoInput.value = code;
    applyPromoCode();
}

function contactWithCurrentSelection() {
    let msg = `السلام عليكم، اريد الاشتراك ب${packages[selectedPackage].name} بسعر ${packages[selectedPackage].price} جنيه`;

    if (appliedDiscount) {
        msg += `\n\nتم تطبيق كود الخصم: ${appliedDiscount.code}
السعر الأصلي: ${appliedDiscount.originalPrice} جنيه
السعر بعد الخصم: ${appliedDiscount.finalPrice} جنيه`;
    }

    window.open(`https://wa.me/201093191277?text=${encodeURIComponent(msg)}`, '_blank');
}

function contactPackage(packageType) {
    const packageData = packages[packageType];
    let message = `السلام عليكم، أريد الاستفسار عن ${packageData.name} بسعر ${packageData.price} جنيه شهرياً`;

    const storedDiscount = sessionStorage.getItem('appliedDiscount');
    if (storedDiscount) {
        const discountData = JSON.parse(storedDiscount);
        if (discountData.package === packageType) {
            message += `\n\nتم تطبيق كود الخصم: ${discountData.code}`;
            message += `\nالسعر الأصلي: ${discountData.originalPrice} جنيه`;
            message += `\nالسعر بعد الخصم: ${discountData.finalPrice} جنيه`;
            message += `\nمقدار الخصم: ${discountData.amount} جنيه (${discountData.percentage}%)`;
        }
    }

    const phoneNumber = '201093191277';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

/**********************************************
 * SECTION 5 — INPUT FORMATTING & AUTO-LOAD
 **********************************************/

if (applyBtn) {
    applyBtn.addEventListener('click', applyPromoCode);
}

if (promoInput) {
    promoInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') applyPromoCode();
    });

    promoInput.addEventListener('input', function () {
        this.value = this.value.toUpperCase();
    });
}

window.addEventListener('load', () => {
    const saved = sessionStorage.getItem('appliedDiscount');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);
        const hours = (Date.now() - data.timestamp) / 3600000;

        if (hours < 24) {
            selectedPackage = data.package;
            appliedDiscount = data;

            selectPackage(selectedPackage);
            if (promoInput) {
                promoInput.value = data.code;
            }
            updatePackageCardDiscount();

            showMessage(`الكود ${data.code} مطبق بالفعل`, 'success');
        } else {
            sessionStorage.removeItem('appliedDiscount');
        }
    } catch {
        sessionStorage.removeItem('appliedDiscount');
    }
});

/**********************************************
 * SECTION 6 — MESSAGE ALERTS
 **********************************************/

function showMessage(text, type) {
    if (!message) return;
    
    message.textContent = text;
    message.className = `message ${type}`;
    message.classList.add('show');

    setTimeout(() => message.classList.remove('show'), 5000);
}