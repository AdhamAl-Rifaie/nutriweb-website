// /**********************************************
//  * SECTION 1 — FILTER REVIEWS
//  **********************************************/
// const filterButtons = document.querySelectorAll('.filter-btn');
// const reviewCards = document.querySelectorAll('.review-card');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');

//         const filter = button.getAttribute('data-filter');

//         reviewCards.forEach(card => {
//             if (filter === 'all' || card.getAttribute('data-category') === filter) {
//                 card.style.display = 'block';
//                 card.style.animation = 'fadeInUp 0.5s ease-out';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     });
// });

// /**********************************************
//  * SECTION 2 — LOAD MORE BUTTON
//  **********************************************/
// const loadMoreBtn = document.querySelector('.btn-load-more');
// if (loadMoreBtn) {
//     loadMoreBtn.addEventListener('click', () => {
//         alert('Load more reviews functionality - connect to your backend');
//     });
// }

// /**********************************************
//  * SECTION 3 — MOBILE NAVBAR TOGGLE
//  **********************************************/
// const mobileToggle = document.querySelector('.mobile-toggle');
// const navbarLinks = document.querySelector('.navbar-links');

// if (mobileToggle) {
//     mobileToggle.addEventListener('click', () => {
//         mobileToggle.classList.toggle('active');
//         navbarLinks.classList.toggle('active');
//     });
// }

// /**********************************************
//  * SECTION 4 — PACKAGE & PROMO CODE SYSTEM
//  **********************************************/

// const packages = {
//     'standard': { name: 'الباقة الأساسية', price: 599 },
//     'pro': { name: 'باقة PRO', price: 749 },
//     'vip': { name: 'الباقة المميزة VIP', price: 899 }
// };

// const promoCodes = {
//     'EIDFIT35': { 
//         discount: 35, 
//         description: 'عرض العيد المبارك 🎉', 
//         applicable: ['standard', 'pro', 'vip'],
//         endDate: new Date('2026-03-25')
//     },
//     // 'PRO30': { 
//     //     discount: 30, 
//     //     description: 'خصم 30% لباقة PRO', 
//     //     applicable: ['pro'] 
//     // },
//     // 'VIP25': { 
//     //     discount: 25, 
//     //     description: 'خصم 25% للباقة VIP', 
//     //     applicable: ['vip'] 
//     // },
//     // 'STANDARD35': { 
//     //     discount: 35, 
//     //     description: 'خصم 35% للباقة STANDARD', 
//     //     applicable: ['standard'] 
//     // }
// };

// let selectedPackage = 'pro';
// let appliedDiscount = null;

// const promoInput = document.getElementById('promoInput');
// const applyBtn = document.getElementById('applyBtn');
// const message = document.getElementById('message');
// const btnText = applyBtn ? applyBtn.querySelector('.btn-text') : null;
// const codesGrid = document.getElementById('codesGrid');

// /**********************************************
//  * SECTION 4.1 — SPECIAL OCCASION BANNERS
//  **********************************************/

// function isEidPeriod() {
//     const now = new Date();
//     const eidStart = new Date('2026-03-11');
//     const eidEnd = new Date('2026-03-25');
//     return now >= eidStart && now <= eidEnd;
// }

// function getActiveOccasion() {
//     if (isEidPeriod()) return 'eid';
//     if (isRamadanMonth()) return 'ramadan';
//     return null;
// }

// function showSpecialBanner() {
//     const occasion = getActiveOccasion();
//     if (!occasion) return;

//     const promoSection = document.querySelector('.promo-section');
//     if (!promoSection) return;

//     const bannerConfig = {
//         eid: {
//             gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             icon: '🎉',
//             title: 'عيد الفطر المبارك',
//             code: 'EIDFIT35',
//             discount: 35,
//             endDate: new Date('2026-03-25')
//         },
//     };

//     const config = bannerConfig[occasion];
    
//     const banner = document.createElement('div');
//     banner.className = 'special-banner';
//     banner.innerHTML = `
//         <div class="banner-content" style="background: ${config.gradient};">
//             <div class="banner-icon">${config.icon}</div>
//             <h3 class="banner-title">${config.title}</h3>
//             <p class="banner-subtitle">استخدم كود <strong>${config.code}</strong> للحصول على خصم ${config.discount}%</p>
//             <div class="countdown-timer" id="countdownTimer"></div>
//             <div class="banner-badge">عرض محدود</div>
//         </div>
//     `;
    
//     promoSection.querySelector('.container').prepend(banner);
    
//     startCountdown(config.endDate);
// }

// function startCountdown(endDate) {
//     const timerElement = document.getElementById('countdownTimer');
//     if (!timerElement) return;

//     function updateCountdown() {
//         const now = new Date().getTime();
//         const distance = endDate.getTime() - now;

//         if (distance < 0) {
//             timerElement.innerHTML = '<span class="expired">انتهى العرض</span>';
//             return;
//         }

//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         timerElement.innerHTML = `
//             <div class="countdown-grid">
//                 <div class="countdown-item">
//                     <span class="countdown-number">${days}</span>
//                     <span class="countdown-label">يوم</span>
//                 </div>
//                 <div class="countdown-separator">:</div>
//                 <div class="countdown-item">
//                     <span class="countdown-number">${hours}</span>
//                     <span class="countdown-label">ساعة</span>
//                 </div>
//                 <div class="countdown-separator">:</div>
//                 <div class="countdown-item">
//                     <span class="countdown-number">${minutes}</span>
//                     <span class="countdown-label">دقيقة</span>
//                 </div>
//                 <div class="countdown-separator">:</div>
//                 <div class="countdown-item">
//                     <span class="countdown-number">${seconds}</span>
//                     <span class="countdown-label">ثانية</span>
//                 </div>
//             </div>
//         `;
//     }

//     updateCountdown();
//     setInterval(updateCountdown, 1000);
// }

// /**********************************************
//  * SECTION 4.2 — PACKAGE SELECTION & CODES
//  **********************************************/

// document.addEventListener('DOMContentLoaded', () => {
//     updateAvailableCodes();
//     showSpecialBanner();
// });

// function selectPackage(packageType) {
//     selectedPackage = packageType;

//     document.querySelectorAll('.package-option').forEach(option => {
//         option.classList.remove('selected');
//     });

//     const packageOption = document.querySelector(`[data-package="${packageType}"]`);
//     if (packageOption) {
//         packageOption.classList.add('selected');
//     }

//     clearDiscount();
//     updateAvailableCodes();
// }

// function updateAvailableCodes() {
//     if (!codesGrid) return;
    
//     codesGrid.innerHTML = '';
//     const now = new Date();

//     Object.entries(promoCodes).forEach(([code, data]) => {
//         const isExpired = data.endDate && now > data.endDate;
//         const applicable = data.applicable.includes(selectedPackage);

//         const card = document.createElement('div');
//         card.className = `code-card ${!applicable ? 'disabled' : ''} ${isExpired ? 'expired' : ''}`;
        
//         let cardHTML = `
//             <div class="code-name">${code}</div>
//             <div class="code-discount">${data.discount}% خصم</div>
//             <div class="code-description">${data.description}</div>
//         `;
        
//         if (isExpired) {
//             cardHTML += '<div class="expired-badge">منتهي</div>';
//         } else if (data.endDate) {
//             const daysLeft = Math.ceil((data.endDate - now) / (1000 * 60 * 60 * 24));
//             if (daysLeft <= 7) {
//                 cardHTML += `<div class="urgency-badge">باقي ${daysLeft} ${daysLeft === 1 ? 'يوم' : 'أيام'}</div>`;
//             }
//         }
        
//         card.innerHTML = cardHTML;

//         if (applicable && !isExpired) {
//             card.onclick = () => applyCode(code);
//         }

//         codesGrid.appendChild(card);
//     });
// }

// function applyPromoCode() {
//     const code = promoInput.value.trim().toUpperCase();

//     if (!code) {
//         showMessage('يرجى إدخال كود الخصم', 'error');
//         return;
//     }

//     if (btnText) {
//         btnText.innerHTML = '<div class="loading"></div>';
//     }
//     if (applyBtn) {
//         applyBtn.disabled = true;
//     }

//     setTimeout(() => {
//         if (promoCodes[code]) {
//             const promo = promoCodes[code];
            
//             if (promo.endDate && new Date() > promo.endDate) {
//                 showMessage('هذا الكود منتهي الصلاحية', 'error');
//             } else if (promo.applicable.includes(selectedPackage)) {
//                 showMessage(`تم تطبيق الكود! خصم ${promo.discount}%`, 'success');
//                 applyDiscount(promo.discount, code);
//                 createConfetti();
//             } else {
//                 showMessage('هذا الكود غير صالح لهذه الباقة', 'error');
//             }
//         } else {
//             showMessage('كود الخصم غير صحيح', 'error');
//         }

//         if (btnText) {
//             btnText.textContent = 'تطبيق';
//         }
//         if (applyBtn) {
//             applyBtn.disabled = false;
//         }
//     }, 1200);
// }

// function applyDiscount(percent, code) {
//     const price = packages[selectedPackage].price;
//     const amount = Math.round(price * (percent / 100));
//     const final = price - amount;

//     appliedDiscount = {
//         code: code,
//         percentage: percent,
//         amount: amount,
//         finalPrice: final,
//         originalPrice: price
//     };

//     updatePackageCardDiscount();

//     sessionStorage.setItem(
//         'appliedDiscount',
//         JSON.stringify({
//             package: selectedPackage,
//             ...appliedDiscount,
//             timestamp: Date.now()
//         })
//     );

//     scrollToPackage(selectedPackage);
// }

// function scrollToPackage(packageType) {
//     setTimeout(() => {
//         const packagesSection = document.querySelector('.packages-section');
//         if (!packagesSection) return;
        
//         const packageCard = packagesSection.querySelector(`.package-card[data-package="${packageType}"]`);
        
//         if (packageCard) {
//             packageCard.classList.add('highlight-pulse');
            
//             const yOffset = -100;
//             const y = packageCard.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
//             window.scrollTo({
//                 top: y,
//                 behavior: 'smooth'
//             });
            
//             setTimeout(() => {
//                 packageCard.classList.remove('highlight-pulse');
//             }, 2000);
//         }
//     }, 600);
// }

// function createConfetti() {
//     const colors = ['#f093fb', '#f5576c', '#667eea', '#764ba2', '#fbbf24', '#10b981'];
//     const confettiCount = 50;
    
//     for (let i = 0; i < confettiCount; i++) {
//         const confetti = document.createElement('div');
//         confetti.className = 'confetti';
//         confetti.style.left = Math.random() * 100 + '%';
//         confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//         confetti.style.animationDelay = Math.random() * 0.5 + 's';
//         confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
//         document.body.appendChild(confetti);
        
//         setTimeout(() => confetti.remove(), 4000);
//     }
// }

// function updatePackageCardDiscount() {
//     if (!appliedDiscount) return;

//     const el = document.getElementById(`discount-${selectedPackage}`);
//     if (el) {
//         el.querySelector('.original-price').textContent = `${appliedDiscount.originalPrice} جنيه`;
//         el.querySelector('.discounted-price').textContent = `${appliedDiscount.finalPrice} جنيه`;
//         el.querySelector('.discount-amount').textContent = `خصم ${appliedDiscount.amount} جنيه`;
//         el.classList.add('show');
//     }
// }

// function clearDiscount() {
//     appliedDiscount = null;
//     sessionStorage.removeItem('appliedDiscount');

//     document.querySelectorAll('.price-discount').forEach(el => el.classList.remove('show'));
// }

// function applyCode(code) {
//     promoInput.value = code;
//     applyPromoCode();
// }

// function contactWithCurrentSelection() {
//     let msg = `السلام عليكم، اريد الاشتراك ب${packages[selectedPackage].name} بسعر ${packages[selectedPackage].price} جنيه`;

//     if (appliedDiscount) {
//         msg += `\n\nتم تطبيق كود الخصم: ${appliedDiscount.code}
// السعر الأصلي: ${appliedDiscount.originalPrice} جنيه
// السعر بعد الخصم: ${appliedDiscount.finalPrice} جنيه`;
//     }

//     window.open(`https://wa.me/201093191277?text=${encodeURIComponent(msg)}`, '_blank');
// }

// function contactPackage(packageType) {
//     const packageData = packages[packageType];
//     let message = `السلام عليكم، أريد الاستفسار عن ${packageData.name} بسعر ${packageData.price} جنيه شهرياً`;

//     const storedDiscount = sessionStorage.getItem('appliedDiscount');
//     if (storedDiscount) {
//         const discountData = JSON.parse(storedDiscount);
//         if (discountData.package === packageType) {
//             message += `\n\nتم تطبيق كود الخصم: ${discountData.code}`;
//             message += `\nالسعر الأصلي: ${discountData.originalPrice} جنيه`;
//             message += `\nالسعر بعد الخصم: ${discountData.finalPrice} جنيه`;
//             message += `\nمقدار الخصم: ${discountData.amount} جنيه (${discountData.percentage}%)`;
//         }
//     }

//     const phoneNumber = '201093191277';
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
// }

// /**********************************************
//  * SECTION 5 — INPUT FORMATTING & AUTO-LOAD
//  **********************************************/

// if (applyBtn) {
//     applyBtn.addEventListener('click', applyPromoCode);
// }

// if (promoInput) {
//     promoInput.addEventListener('keypress', e => {
//         if (e.key === 'Enter') applyPromoCode();
//     });

//     promoInput.addEventListener('input', function () {
//         this.value = this.value.toUpperCase();
//     });
// }

// window.addEventListener('load', () => {
//     const saved = sessionStorage.getItem('appliedDiscount');
//     if (!saved) return;

//     try {
//         const data = JSON.parse(saved);
//         const hours = (Date.now() - data.timestamp) / 3600000;

//         if (hours < 24) {
//             selectedPackage = data.package;
//             appliedDiscount = data;

//             selectPackage(selectedPackage);
//             if (promoInput) {
//                 promoInput.value = data.code;
//             }
//             updatePackageCardDiscount();

//             showMessage(`الكود ${data.code} مطبق بالفعل`, 'success');
//         } else {
//             sessionStorage.removeItem('appliedDiscount');
//         }
//     } catch {
//         sessionStorage.removeItem('appliedDiscount');
//     }
// });

// /**********************************************
//  * SECTION 6 — MESSAGE ALERTS
//  **********************************************/

// function showMessage(text, type) {
//     if (!message) return;
    
//     message.textContent = text;
//     message.className = `message ${type}`;
//     message.classList.add('show');

//     setTimeout(() => message.classList.remove('show'), 5000);
// }
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
    }
};

let selectedPackage = 'pro';
let appliedDiscount = null;

const promoInput = document.getElementById('promoInput');
const applyBtn = document.getElementById('applyBtn');
const message = document.getElementById('message');
const btnText = applyBtn ? applyBtn.querySelector('.btn-text') : null;
const codesGrid = document.getElementById('codesGrid');

/**********************************************
 * SECTION 4.1 — STICKY PROMO BAR (NEW!)
 **********************************************/

function createStickyPromoBar() {
    console.log('✅ Creating sticky promo bar...');
    
    const now = new Date();
    const endDate = new Date('2026-03-25');
    const daysLeft = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
    
    if (daysLeft < 0) return; // Expired

    const stickyBar = document.createElement('div');
    stickyBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: linear-gradient(135deg, #667eea 0%, #f5576c 100%);
        padding: 12px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        animation: slideDown 0.5s ease-out;
    `;
    
    stickyBar.innerHTML = `
        <style>
            @keyframes slideDown {
                from { transform: translateY(-100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @media (max-width: 768px) {
                .sticky-promo-text { font-size: 0.75rem !important; }
                .sticky-promo-btn { padding: 8px 15px !important; font-size: 0.8rem !important; }
                .promo-sep { display: none !important; }
            }
        </style>
        <div class="sticky-promo-text" style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;font-size:0.9rem;color:white;font-weight:600;">
            <span style="background:rgba(255,255,255,0.25);padding:4px 12px;border-radius:20px;">🔥 35% خصم</span>
            <span class="promo-sep">•</span>
            <span style="font-family:monospace;letter-spacing:1px;">كود: EIDFIT35</span>
            <span class="promo-sep">•</span>
            <span style="animation: blink 2s infinite;">باقي ${daysLeft} ${daysLeft === 1 ? 'يوم' : 'أيام'}</span>
        </div>
        <button class="sticky-promo-btn" onclick="scrollToPromo()" style="background:white;color:#f5576c;border:none;padding:10px 25px;border-radius:25px;font-weight:700;cursor:pointer;white-space:nowrap;box-shadow:0 4px 15px rgba(0,0,0,0.2);">
            احجز الآن ⚡
        </button>
        <style>
            @keyframes blink { 0%,100% {opacity:1;} 50% {opacity:0.7;} }
            .sticky-promo-btn:hover { transform: scale(1.05); }
        </style>
    `;

    document.body.insertBefore(stickyBar, document.body.firstChild);
    document.body.style.paddingTop = '60px';
    
    console.log('✅ Sticky bar created!');
}

// Scroll to promo section
function scrollToPromo() {
    const promoSection = document.querySelector('.promo-section');
    if (promoSection) {
        const yOffset = -80;
        const y = promoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
window.scrollToPromo = scrollToPromo; // Make it global

/**********************************************
 * SECTION 4.2 — SOCIAL PROOF (NEW!)
 **********************************************/

const socialProofMessages = [
    { name: 'أحمد م.', city: 'القاهرة', package: 'PRO', time: '3 دقائق' },
    { name: 'سارة ع.', city: 'الإسكندرية', package: 'VIP', time: '20 دقائق' },
    { name: 'محمد ح.', city: 'المنصورة', package: 'الأساسية', time: '15 دقيقة' },
    { name: 'نور س.', city: 'طنطا', package: 'PRO', time: '3 ساعات' },
    { name: 'ياسمين ك.', city: 'الجيزة', package: 'VIP', time: '25 دقيقة' },
    { name: 'خالد س.', city: 'المحله', package: 'PRO', time: '30 دقيقه' },
    { name: 'مصطفى ش.', city: 'المحله', package: 'VIP', time: '7 دقائق' },
    { name: 'حسام ح.', city: 'المنصورة', package: 'الأساسية', time: '12 دقيقة' },
    { name: 'سيف س.', city: 'طنطا', package: 'PRO', time: '18 دقيقة' },
    { name: 'ياسمين ك.', city: 'الجيزة', package: 'VIP', time: '2 ساعات' }
];

function showSocialProof() {
    let currentIndex = 0;

    function displayNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: white;
            border-radius: 12px;
            padding: 15px 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            z-index: 9998;
            max-width: 320px;
            transform: translateX(-400px);
            transition: transform 0.4s cubic-bezier(0.68,-0.55,0.265,1.55);
        `;
        
        const proof = socialProofMessages[currentIndex];
        notification.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:40px;height:40px;background:linear-gradient(135deg,#10b981,#059669);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-size:1.2rem;font-weight:bold;flex-shrink:0;">✓</div>
                <div>
                    <strong style="color:#111;font-weight:700;">${proof.name}</strong> من ${proof.city}
                    <br>
                    <span style="color:#666;font-size:0.85rem;">اشترك في باقة ${proof.package} منذ ${proof.time}</span>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.style.transform = 'translateX(0)', 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(-400px)';
            setTimeout(() => notification.remove(), 400);
        }, 5000);

        currentIndex = (currentIndex + 1) % socialProofMessages.length;
        console.log(`✅ Showed social proof: ${proof.name}`);
    }

    // Show first after 5 seconds
    setTimeout(displayNotification, 5000);
    
    // Then show every 15 seconds
    setInterval(displayNotification, 15000);
    
    console.log('👥 Social proof started!');
}

/**********************************************
 * SECTION 4.3 — AUTO SCROLL TO PACKAGES (NEW!)
 **********************************************/

function autoScrollToPackages() {
    const hasVisited = sessionStorage.getItem('hasVisitedPackages');
    
    if (window.innerWidth <= 768 && !hasVisited) {
        console.log('📱 Mobile detected - auto-scrolling to packages...');
        
        setTimeout(() => {
            const packagesSection = document.querySelector('.packages-section');
            if (packagesSection) {
                const yOffset = -60;
                const y = packagesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });

                packagesSection.style.animation = 'highlightEntrance 2s ease-out';
                sessionStorage.setItem('hasVisitedPackages', 'true');
                
                console.log('✅ Auto-scrolled to packages!');
            }
        }, 800);
    } else {
        console.log('💻 Desktop or already visited - skipping auto-scroll');
    }
}

/**********************************************
 * SECTION 4.4 — LIMITED SPOTS COUNTER (NEW!)
 **********************************************/

// function createLimitedSpotsCounter() {
//     const promoSection = document.querySelector('.promo-section');
//     if (!promoSection) return;

//     const spotsLeft = Math.floor(Math.random() * 8) + 3; // 3-10

//     const counter = document.createElement('div');
//     counter.style.cssText = `
//         margin-top: 2rem;
//         animation: fadeInUp 0.6s ease-out;
//     `;
//     counter.innerHTML = `
//         <style>
//             @keyframes fadeInUp { from {opacity:0;transform:translateY(20px);} to {opacity:1;transform:translateY(0);} }
//             @keyframes spotsPulse { 0%,100% {box-shadow:0 10px 30px rgba(239,68,68,0.3);} 50% {box-shadow:0 10px 40px rgba(239,68,68,0.5);} }
//             @keyframes bounce { 0%,100% {transform:translateY(0);} 50% {transform:translateY(-10px);} }
//         </style>
//         <div style="background:linear-gradient(135deg,#ef4444,#dc2626);padding:1.2rem 1.5rem;border-radius:12px;display:flex;align-items:center;gap:1rem;box-shadow:0 10px 30px rgba(239,68,68,0.3);animation:spotsPulse 2s infinite;color:white;max-width:600px;margin:0 auto;">
//             <div style="font-size:2rem;animation:bounce 1.5s infinite;">🔥</div>
//             <div style="flex:1;">
//                 <strong style="display:block;font-size:1.1rem;font-weight:700;margin-bottom:0.2rem;">متبقي ${spotsLeft} أماكن فقط</strong>
//                 <span style="font-size:0.85rem;opacity:0.9;">بالخصم الحالي</span>
//             </div>
//         </div>
//     `;

//     const container = promoSection.querySelector('.container .promo-container');
//     if (container) {
//         container.appendChild(counter);
//         console.log('🔥 Limited spots counter created!');
//     }
// }

/**********************************************
 * SECTION 4.5 — COUNTDOWN & BANNER
 **********************************************/

function isEidPeriod() {
    const now = new Date();
    const eidStart = new Date('2026-03-11');
    const eidEnd = new Date('2026-03-25');
    return now >= eidStart && now <= eidEnd;
}

function showSpecialBanner() {
    if (!isEidPeriod()) return;

    const promoSection = document.querySelector('.promo-section');
    if (!promoSection) return;

    const banner = document.createElement('div');
    banner.className = 'special-banner';
    banner.style.cssText = 'animation: slideInDown 0.6s ease-out; margin-bottom: 2rem;';
    banner.innerHTML = `
        <style>
            @keyframes slideInDown { from {opacity:0;transform:translateY(-30px);} to {opacity:1;transform:translateY(0);} }
            @keyframes shimmer { 0% {transform:translateX(-100%) translateY(-100%) rotate(45deg);} 100% {transform:translateX(100%) translateY(100%) rotate(45deg);} }
            @keyframes bounce2 { 0%,100% {transform:translateY(0);} 50% {transform:translateY(-10px);} }
            @keyframes pulse2 { 0%,100% {transform:scale(1);} 50% {transform:scale(1.02);} }
        </style>
        <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:2rem;border-radius:16px;text-align:center;position:relative;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.2);">
            <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);animation:shimmer 3s infinite;"></div>
            <div style="font-size:3rem;margin-bottom:0.5rem;animation:bounce2 2s infinite;position:relative;z-index:1;">🎉</div>
            <h3 style="color:#fff;font-size:2rem;font-weight:700;margin:0.5rem 0;text-shadow:2px 2px 4px rgba(0,0,0,0.2);position:relative;z-index:1;">عيد الفطر المبارك</h3>
            <p style="color:rgba(255,255,255,0.95);font-size:1.1rem;margin:0.5rem 0 1.5rem 0;position:relative;z-index:1;">
                استخدم كود <strong style="background:rgba(255,255,255,0.2);padding:0.2rem 0.8rem;border-radius:6px;">EIDFIT35</strong> للحصول على خصم 35%
            </p>
            <div id="countdownTimer" style="position:relative;z-index:1;"></div>
            <div style="display:inline-block;background:rgba(255,255,255,0.3);color:#fff;padding:0.5rem 1rem;border-radius:20px;font-weight:600;margin-top:1rem;backdrop-filter:blur(10px);animation:pulse2 2s infinite;position:relative;z-index:1;">عرض محدود</div>
        </div>
    `;
    
    const container = promoSection.querySelector('.container');
    if (container) {
        container.prepend(banner);
        startCountdown(new Date('2026-03-25'));
    }
}

function startCountdown(endDate) {
    const timerElement = document.getElementById('countdownTimer');
    if (!timerElement) return;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;

        if (distance < 0) {
            timerElement.innerHTML = '<span style="color:#fff;font-size:1.2rem;font-weight:600;padding:0.5rem 1rem;background:rgba(239,68,68,0.3);border-radius:8px;">انتهى العرض</span>';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;flex-wrap:wrap;margin:1.5rem 0;">
                <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:0.8rem 1rem;min-width:70px;display:flex;flex-direction:column;align-items:center;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                    <span style="font-size:1.8rem;font-weight:700;color:#fff;display:block;line-height:1;">${days}</span>
                    <span style="font-size:0.8rem;color:rgba(255,255,255,0.9);margin-top:0.3rem;font-weight:500;">يوم</span>
                </div>
                <div style="color:#fff;font-size:1.5rem;font-weight:700;opacity:0.7;">:</div>
                <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:0.8rem 1rem;min-width:70px;display:flex;flex-direction:column;align-items:center;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                    <span style="font-size:1.8rem;font-weight:700;color:#fff;display:block;line-height:1;">${hours}</span>
                    <span style="font-size:0.8rem;color:rgba(255,255,255,0.9);margin-top:0.3rem;font-weight:500;">ساعة</span>
                </div>
                <div style="color:#fff;font-size:1.5rem;font-weight:700;opacity:0.7;">:</div>
                <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:0.8rem 1rem;min-width:70px;display:flex;flex-direction:column;align-items:center;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                    <span style="font-size:1.8rem;font-weight:700;color:#fff;display:block;line-height:1;">${minutes}</span>
                    <span style="font-size:0.8rem;color:rgba(255,255,255,0.9);margin-top:0.3rem;font-weight:500;">دقيقة</span>
                </div>
                <div style="color:#fff;font-size:1.5rem;font-weight:700;opacity:0.7;">:</div>
                <div style="background:rgba(255,255,255,0.2);backdrop-filter:blur(10px);border-radius:12px;padding:0.8rem 1rem;min-width:70px;display:flex;flex-direction:column;align-items:center;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                    <span style="font-size:1.8rem;font-weight:700;color:#fff;display:block;line-height:1;">${seconds}</span>
                    <span style="font-size:0.8rem;color:rgba(255,255,255,0.9);margin-top:0.3rem;font-weight:500;">ثانية</span>
                </div>
            </div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/**********************************************
 * SECTION 4.6 — INITIALIZE ALL FEATURES
 **********************************************/

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing marketing features...');
    
    updateAvailableCodes();
    showSpecialBanner();
    createStickyPromoBar();
    createLimitedSpotsCounter();
    autoScrollToPackages();
    
    setTimeout(showSocialProof, 3000);
    
    console.log('✅ All marketing features initialized!');
});

/**********************************************
 * REST OF THE CODE (UNCHANGED)
 **********************************************/

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
    if (btnText) btnText.innerHTML = '<div class="loading"></div>';
    if (applyBtn) applyBtn.disabled = true;

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
        if (btnText) btnText.textContent = 'تطبيق';
        if (applyBtn) applyBtn.disabled = false;
    }, 1200);
}

function applyDiscount(percent, code) {
    const price = packages[selectedPackage].price;
    const amount = Math.round(price * (percent / 100));
    const final = price - amount;
    appliedDiscount = {code,percentage:percent,amount,finalPrice:final,originalPrice:price};
    updatePackageCardDiscount();
    sessionStorage.setItem('appliedDiscount',JSON.stringify({package:selectedPackage,...appliedDiscount,timestamp:Date.now()}));
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
            window.scrollTo({top:y,behavior:'smooth'});
            setTimeout(() => packageCard.classList.remove('highlight-pulse'), 2000);
        }
    }, 600);
}

function createConfetti() {
    const colors = ['#f093fb','#f5576c','#667eea','#764ba2','#fbbf24','#10b981'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `position:fixed;width:10px;height:10px;z-index:9999;top:-10px;left:${Math.random()*100}%;background-color:${colors[Math.floor(Math.random()*colors.length)]};animation:confettiFall ${Math.random()*2+2}s linear forwards;animation-delay:${Math.random()*0.5}s;pointer-events:none;`;
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
        msg += `\n\nتم تطبيق كود الخصم: ${appliedDiscount.code}\nالسعر الأصلي: ${appliedDiscount.originalPrice} جنيه\nالسعر بعد الخصم: ${appliedDiscount.finalPrice} جنيه`;
    }
    window.open(`https://wa.me/201093191277?text=${encodeURIComponent(msg)}`,'_blank');
}

function contactPackage(packageType) {
    const packageData = packages[packageType];
    let msg = `السلام عليكم، أريد الاستفسار عن ${packageData.name} بسعر ${packageData.price} جنيه شهرياً`;
    const storedDiscount = sessionStorage.getItem('appliedDiscount');
    if (storedDiscount) {
        const discountData = JSON.parse(storedDiscount);
        if (discountData.package === packageType) {
            msg += `\n\nتم تطبيق كود الخصم: ${discountData.code}\nالسعر الأصلي: ${discountData.originalPrice} جنيه\nالسعر بعد الخصم: ${discountData.finalPrice} جنيه\nمقدار الخصم: ${discountData.amount} جنيه (${discountData.percentage}%)`;
        }
    }
    window.open(`https://wa.me/201093191277?text=${encodeURIComponent(msg)}`,'_blank');
}

if (applyBtn) applyBtn.addEventListener('click', applyPromoCode);
if (promoInput) {
    promoInput.addEventListener('keypress', e => {if(e.key==='Enter')applyPromoCode();});
    promoInput.addEventListener('input', function(){this.value=this.value.toUpperCase();});
}

window.addEventListener('load', () => {
    const saved = sessionStorage.getItem('appliedDiscount');
    if (!saved) return;
    try {
        const data = JSON.parse(saved);
        const hours = (Date.now()-data.timestamp)/3600000;
        if (hours<24) {
            selectedPackage=data.package;
            appliedDiscount=data;
            selectPackage(selectedPackage);
            if (promoInput) promoInput.value=data.code;
            updatePackageCardDiscount();
            showMessage(`الكود ${data.code} مطبق بالفعل`,'success');
        } else {
            sessionStorage.removeItem('appliedDiscount');
        }
    } catch {sessionStorage.removeItem('appliedDiscount');}
});

function showMessage(text,type) {
    if (!message) return;
    message.textContent = text;
    message.className = `message ${type}`;
    message.classList.add('show');
    setTimeout(() => message.classList.remove('show'), 5000);
}