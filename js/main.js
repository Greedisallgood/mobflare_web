// i18n dictionaries and helpers
const I18N = {
  en:{
    nav:{home:"Home",services:"Services",values:"Values",partners:"Partners",testimonials:"Testimonials",contact:"Contact"},
    hero:{greeting:"Hi, we're Mobflare —",title:"Digital Marketing Agency & User Acquisition Platform",description:"We drive scalable mobile and web growth using data-driven strategies and AI-powered optimization — trusted by leading brands to boost user acquisition, retention, and revenue.",servicesLabel:"Services",servicesList:"Mobile User Acquisition / Web User Acquisition / Publisher Media Access",successStories:"See our success stories"},
    cta:{services:"Our Services",getStarted:"Get Started",contact:"Contact us →"},
    services:{title:"Our Services",subtitle:"Comprehensive digital marketing solutions for mobile and web user acquisition",mobileTitle:"Mobile User Acquisition",mobileDesc:"Strategic campaigns to acquire high-quality users across iOS and Android platforms.",mobileFeatures:["App Store Optimization (ASO)","Social Media Advertising","Influencer Partnerships","Performance Marketing"],webTitle:"Web User Acquisition",webDesc:"Drive targeted traffic and conversions for your web platforms with data-driven marketing strategies.",webFeatures:["Search Engine Marketing (SEM)","Display Advertising","Content Marketing","Conversion Optimization"],publisherTitle:"Publisher Media Access",publisherDesc:"Leverage our strong relationships with premium publishers to maximize your campaign reach and performance.",publisherFeatures:["Premium Ad Placements","Direct Publisher Relationships","Exclusive Inventory Access","Optimized Media Mix"]},
    values:{title:"Core Value Proposition",subtitle:"What sets Mobflare apart in the digital marketing landscape",mediaResourcesTitle:"Rich and Trusted Media Resources",mediaResourcesDesc:"Official partners for emerging media with a diversified media inventory across categories",customizedServicesTitle:"Professional and Flexible Customized Services",customizedServicesDesc:"Supported by 100+ industry experts with fully customized 360° advertising solutions",globalTeamTitle:"Global Business Team Deployment",globalTeamDesc:"Localized overseas teams with strategic global market coverage",aiMarketingTitle:"AI-Driven Omnichannel Marketing Services",aiMarketingDesc:"Data-driven marketing powered by proprietary AI-powered data marketing platform",dataFeedbackTitle:"High-Efficiency and Timely Advertising Data Feedback",dataFeedbackDesc:"Real-time service data insights with over 1 billion daily ad impressions",serviceSupportTitle:"Comprehensive and Flexible Service Support",serviceSupportDesc:"Real-time service response with flexible settlement options"},
    partners:{title:"Global Media Partners",subtitle:"We have established long-term, stable partnerships with global leading media platforms to help clients expand efficiently into global markets",google:"Google",meta:"Meta",tiktok:"TikTok",kwai:"Kwai",bigo:"BIGO Ads",mediago:"MediaGo",mintegral:"Mintegral"},
    testimonials:{title:"Client Testimonials",subtitle:"What our game and app clients say about working with Mobflare",t1:"\"Mobflare's expertise in mobile user acquisition helped us scale our gaming app to over 2 million users. Their publisher relationships gave us access to premium ad inventory we couldn't get elsewhere.\"",t2:"\"The team at Mobflare understands the mobile ecosystem better than anyone. They delivered exceptional ROI on our user acquisition campaigns and helped us optimize our conversion funnel.\"",t3:"\"Working with Mobflare transformed our app's growth trajectory. Their data-driven approach and strong publisher network delivered results that exceeded our expectations.\"",a1Name:"Sarah Chen",a1Title:"CEO, GameStudio Pro",a2Name:"Michael Rodriguez",a2Title:"Head of Marketing, ShopApp",a3Name:"Emma Thompson",a3Title:"Founder, FinanceFlow"},
    contact:{title:"Get In Touch",subtitle:"Ready to accelerate your mobile and web growth? Let's discuss your project.",emailTitle:"Email Us",email:"support@mobflare.com",callTitle:"Call Us",call:"+852 96306719",ctaTitle:"Ready to Scale Your App?",ctaDesc:"Contact us today to discuss how we can help you achieve your user acquisition goals.",sendEmail:"Send Email"},
    footer:{home:"Home",services:"Services",values:"Values",partners:"Partners",testimonials:"Testimonials",contact:"Contact",copyright:"© 2025 Mobflare Limited. All rights reserved."}
  },
  ru:{
    nav:{home:"Главная",services:"Услуги",values:"Преимущества",partners:"Партнёры",testimonials:"Отзывы",contact:"Контакты"},
    hero:{greeting:"Привет, мы Mobflare —",title:"Агентство цифрового маркетинга и платформа для привлечения пользователей",description:"Мы обеспечиваем масштабируемый рост мобильных и веб-проектов, используя стратегии на основе данных и оптимизацию на базе ИИ — нам доверяют ведущие бренды для повышения привлечения пользователей, удержания и доходов.",servicesLabel:"Услуги",servicesList:"Привлечение мобильных пользователей / Привлечение веб-пользователей / Доступ к медиа-издателям",successStories:"Посмотрите наши истории успеха"},
    cta:{services:"Наши услуги",getStarted:"Начать",contact:"Связаться с нами →"},
    services:{title:"Наши услуги",subtitle:"Комплексные решения цифрового маркетинга для привлечения пользователей в мобильных и веб‑проектах",mobileTitle:"Привлечение мобильных пользователей",mobileDesc:"Стратегические кампании для привлечения качественных пользователей на iOS и Android.",mobileFeatures:["ASO (оптимизация в магазинах)","Реклама в социальных сетях","Партнёрства с инфлюенсерами","Performance‑маркетинг"],webTitle:"Привлечение веб‑пользователей",webDesc:"Приводим целевой трафик и конверсии для ваших веб‑платформ на основе данных.",webFeatures:["Поисковый маркетинг (SEM)","Медийная реклама","Контент‑маркетинг","Оптимизация конверсии"],publisherTitle:"Доступ к издательским медиа",publisherDesc:"Используйте наши прочные связи с премиальными издателями, чтобы максимизировать охват и эффективность кампаний.",publisherFeatures:["Премиальные размещения","Прямые отношения с издателями","Эксклюзивный инвентарь","Оптимизированный медиамикс"]},
    values:{title:"Ключевые преимущества",subtitle:"Что отличает Mobflare на рынке цифрового маркетинга",mediaResourcesTitle:"Богатые и надёжные медиаресурсы",mediaResourcesDesc:"Официальные партнёры новых медиа с диверсифицированным медиаинвентарём по категориям",customizedServicesTitle:"Профессиональные и гибкие индивидуальные услуги",customizedServicesDesc:"Поддержка 100+ отраслевых экспертов с полностью индивидуальными 360° рекламными решениями",globalTeamTitle:"Глобальное развёртывание бизнес-команд",globalTeamDesc:"Локализованные зарубежные команды со стратегическим охватом глобальных рынков",aiMarketingTitle:"AI-управляемые омниканальные маркетинговые услуги",aiMarketingDesc:"Маркетинг на основе данных с использованием собственной AI-платформы для маркетинга данных",dataFeedbackTitle:"Высокоэффективная и своевременная обратная связь по рекламным данным",dataFeedbackDesc:"Аналитика данных сервиса в реальном времени с более чем 1 миллиардом ежедневных показов",serviceSupportTitle:"Комплексная и гибкая поддержка сервиса",serviceSupportDesc:"Ответ сервиса в реальном времени с гибкими вариантами расчёта"},
    partners:{title:"Глобальные медиа-партнёры",subtitle:"Мы установили долгосрочные стабильные партнёрства с ведущими глобальными медиаплатформами, чтобы помочь клиентам эффективно расширяться на глобальных рынках",google:"Google",meta:"Meta",tiktok:"TikTok",kwai:"Kwai",bigo:"BIGO Ads",mediago:"MediaGo",mintegral:"Mintegral"},
    testimonials:{title:"Отзывы клиентов",subtitle:"Что говорят наши клиенты из игровой и апп‑индустрии о работе с Mobflare",t1:"\"Экспертиза Mobflare в привлечении мобильных пользователей помогла нам масштабировать игровое приложение до 2+ млн пользователей. Их связи с издателями дали доступ к премиальному инвентарю, недоступному другим.\"",t2:"\"Команда Mobflare лучше всех понимает мобильную экосистему. Они обеспечили выдающийся ROI и помогли оптимизировать нашу воронку конверсии.\"",t3:"\"Работа с Mobflare изменила траекторию роста нашего приложения. Их подход на основе данных и сеть издателей превзошли ожидания.\"",a1Name:"Сара Чен",a1Title:"Генеральный директор, GameStudio Pro",a2Name:"Майкл Родригес",a2Title:"Руководитель маркетинга, ShopApp",a3Name:"Эмма Томпсон",a3Title:"Основатель, FinanceFlow"},
    contact:{title:"Свяжитесь с нами",subtitle:"Готовы ускорить рост мобильных и веб‑проектов? Давайте обсудим ваш проект.",emailTitle:"Напишите нам",email:"support@mobflare.com",callTitle:"Позвоните нам",call:"+852 96306719",ctaTitle:"Готовы масштабировать приложение?",ctaDesc:"Свяжитесь с нами, чтобы обсудить, как мы поможем достичь ваших целей по привлечению пользователей.",sendEmail:"Отправить письмо"},
    footer:{home:"Главная",services:"Услуги",values:"Преимущества",partners:"Партнёры",testimonials:"Отзывы",contact:"Контакты",copyright:"© 2025 Mobflare Limited. Все права защищены."}
  },
  he:{
    nav:{home:"דף הבית",services:"שירותים",values:"ערכים",partners:"שותפים",testimonials:"המלצות",contact:"צור קשר"},
    hero:{greeting:"שלום, אנחנו Mobflare —",title:"סוכנות מרקטינג דיגיטלי ופלטפורמה לרכישת משתמשים",description:"אנו מניעים צמיחה בקנה מידה במובייל ובווב באמצעות אסטרטגיות מבוססות נתונים ואופטימיזציה מונעת AI — מהימנים על ידי מותגים מובילים להגברת רכישת משתמשים, שימור והכנסות.",servicesLabel:"שירותים",servicesList:"רכישת משתמשים במובייל / רכישת משתמשים בווב / גישה למדיות של מפרסמים",successStories:"ראה את סיפורי ההצלחה שלנו"},
    cta:{services:"השירותים שלנו",getStarted:"בואו נתחיל",contact:"צור קשר →"},
    services:{title:"השירותים שלנו",subtitle:"פתרונות מרקטינג דיגיטלי מקיפים לרכישת משתמשים במובייל ובווב",mobileTitle:"רכישת משתמשים במובייל",mobileDesc:"קמפיינים אסטרטגיים לרכישת משתמשים איכותיים ב‑iOS וב‑Android.",mobileFeatures:["אופטימיזציה בחנויות (ASO)","פרסום ברשתות חברתיות","שיתופי פעולה עם משפיענים","פרפורמנס מרקטינג"],webTitle:"רכישת משתמשים בווב",webDesc:"הבאת תנועה ממוקדת והמרות לפלטפורמות הווב שלכם על בסיס דאטה.",webFeatures:["שיווק במנועי חיפוש (SEM)","פרסום תצוגה","שיווק תוכן","אופטימיזציית המרות"],publisherTitle:"גישה למדיות של מפרסמים",publisherDesc:"נצלו את הקשרים שלנו עם מפרסמים פרימיאליים למקסום החשיפה וביצועי הקמפיינים.",publisherFeatures:["מיקומים פרימיאליים","קשרים ישירים עם מפרסמים","מלאי בלעדי","מיקס מדיה מיטבי"]},
    values:{title:"ערכי הליבה",subtitle:"מה מבדיל את Mobflare בנוף המרקטינג הדיגיטלי",mediaResourcesTitle:"משאבי מדיה עשירים ואמינים",mediaResourcesDesc:"שותפים רשמיים למדיה מתפתחת עם מלאי מדיה מגוון על פני קטגוריות",customizedServicesTitle:"שירותים מותאמים אישית מקצועיים וגמישים",customizedServicesDesc:"נתמכים על ידי 100+ מומחי תעשייה עם פתרונות פרסום מותאמים אישית 360°",globalTeamTitle:"פריסת צוות עסקי גלובלי",globalTeamDesc:"צוותים מקומיים מעבר לים עם כיסוי שוק גלובלי אסטרטגי",aiMarketingTitle:"שירותי מרקטינג רב-ערוציים מונעי AI",aiMarketingDesc:"מרקטינג מבוסס נתונים המונע על ידי פלטפורמת מרקטינג נתונים מונעת AI קניינית",dataFeedbackTitle:"משוב נתוני פרסום יעיל ומהיר",dataFeedbackDesc:"תובנות נתוני שירות בזמן אמת עם יותר מ-1 מיליארד חשיפות פרסום יומיות",serviceSupportTitle:"תמיכת שירות מקיפה וגמישה",serviceSupportDesc:"תגובת שירות בזמן אמת עם אפשרויות הסדר גמישות"},
    partners:{title:"שותפי מדיה גלובליים",subtitle:"הקמנו שותפויות יציבות ארוכות טווח עם פלטפורמות מדיה מובילות גלובליות כדי לעזור ללקוחות להתרחב ביעילות לשווקים גלובליים",google:"Google",meta:"Meta",tiktok:"TikTok",kwai:"Kwai",bigo:"BIGO Ads",mediago:"MediaGo",mintegral:"Mintegral"},
    testimonials:{title:"המלצות לקוחות",subtitle:"מה אומרים לקוחות מתחום המשחקים והאפליקציות על העבודה עם Mobflare",t1:"\"המקצועיות של Mobflare ברכישת משתמשים למובייל עזרה לנו להגיע ל‑2 מיליון+ משתמשים. הקשרים שלהם סיפקו גישה למלאי פרימיאלי שלא היה זמין לנו.\"",t2:"\"הצוות של Mobflare מבין את אקוסיסטם המובייל טוב מכולם. הם הביאו ROI מצוין ועזרו לנו לייעל את משפך ההמרות.\"",t3:"\"העבודה עם Mobflare שינתה את מסלול הצמיחה של האפליקציה שלנו. הגישה מבוססת הדאטה ורשת המפרסמים שלהם עלו על הציפיות.\"",a1Name:"שרה צ'ן",a1Title:"מנכ\"\"ל, GameStudio Pro",a2Name:"מייקל רודריגז",a2Title:"ראש שיווק, ShopApp",a3Name:"אמה תומפסון",a3Title:"מייסדת, FinanceFlow"},
    contact:{title:"צור קשר",subtitle:"מוכנים להאיץ את הצמיחה במובייל ובווב? בואו נדבר.",emailTitle:"כתבו לנו",email:"support@mobflare.com",callTitle:"התקשרו אלינו",call:"+852 96306719",ctaTitle:"מוכנים להגדיל את האפליקציה?",ctaDesc:"דברו איתנו על איך נוכל לעזור להשיג את היעדים שלכם ברכישת משתמשים.",sendEmail:"שלחו אימייל"},
    footer:{home:"בית",services:"שירותים",values:"ערכים",partners:"שותפים",testimonials:"המלצות",contact:"צור קשר",copyright:"© 2025 Mobflare Limited. כל הזכויות שמורות."}
  }
};

function animateHeroTitle() {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent.trim();
    const words = text.split(/\s+/);
    heroTitle.innerHTML = words.map((word, index) => 
      `<span class="word">${word}</span>`
    ).join(' ');
  }
}

function applyI18n(lang){
  // Fallback: if Arabic is requested, use English instead
  if(lang === 'ar') lang = 'en';
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  const rtl = lang === 'he';
  document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((o,k)=> (o||{})[k], dict);
    if(Array.isArray(value)){
      if(el.tagName === 'UL'){
        el.innerHTML='';
        value.forEach(v=>{ const li=document.createElement('li'); li.textContent=v; el.appendChild(li); });
      }
    } else if(typeof value === 'string'){
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = value; else el.textContent = value;
    }
  });
  const fb = document.querySelector('.footer-bottom p');
  if(fb && dict.footer?.copyright){ fb.textContent = dict.footer.copyright; }
  // Re-animate hero title after language change
  setTimeout(animateHeroTitle, 100);

  // Track language change in PostHog
  if (window.posthog) {
    window.posthog.capture('language_changed', { language: lang });
  }
}

function initLangSwitcher(){
  const currentBtn = document.getElementById('lang-current');
  const list = document.getElementById('lang-list');
  if(!currentBtn || !list){ return; }
  
  let saved = 'en';
  try {
      saved = localStorage.getItem('lang') || 'en';
  } catch (e) {
      console.log('LocalStorage access denied');
  }

  // Fallback: if Arabic is saved, reset to English
  if(saved === 'ar') {
    saved = 'en';
    try { localStorage.setItem('lang', 'en'); } catch(e){}
  }
  currentBtn.textContent = saved === 'en' ? 'English' : saved==='ru' ? 'Русский' : 'עברית';
  applyI18n(saved);
  currentBtn.addEventListener('click', ()=>{
    const open = list.hasAttribute('hidden') === false;
    if(open){ list.setAttribute('hidden',''); currentBtn.setAttribute('aria-expanded','false'); }
    else { list.removeAttribute('hidden'); currentBtn.setAttribute('aria-expanded','true'); }
  });
  list.addEventListener('click', (e)=>{
    const li = e.target.closest('li[data-lang]');
    if(!li) return;
    const lang = li.getAttribute('data-lang');
    // Prevent selecting Arabic if somehow it appears
    if(lang === 'ar') return;
    
    try { localStorage.setItem('lang', lang); } catch(e){}
    
    currentBtn.textContent = lang === 'en' ? 'English' : lang==='ru' ? 'Русский' : 'עברית';
    list.setAttribute('hidden',''); currentBtn.setAttribute('aria-expanded','false');
    applyI18n(lang);
  });
  document.addEventListener('click', (e)=>{ if(!document.getElementById('lang-switch').contains(e.target)){ list.setAttribute('hidden',''); currentBtn.setAttribute('aria-expanded','false'); }});
}

// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language switcher & i18n first
    initLangSwitcher();
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            // Track navigation clicks
            if (window.posthog) {
                window.posthog.capture('nav_click', { 
                    destination: this.getAttribute('href'),
                    text: this.textContent.trim()
                });
            }

            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    let headerTicking = false;
    window.addEventListener('scroll', function() {
        if (!headerTicking) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = 'none';
                }
                headerTicking = false;
            });
            headerTicking = true;
        }
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.service-card, .case-study-card, .testimonial-card, .contact-item, .section-header, .value-card, .partner-logo');
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Parallax effect for hero section
    let parallaxTicking = false;
    window.addEventListener('scroll', function() {
        if (!parallaxTicking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero) {
                    const rate = scrolled * -0.5;
                    hero.style.transform = `translateY(${rate}px)`;
                }
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    });

    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize hero title animation
    animateHeroTitle();

    // Add scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #80ED20, #6BCF00);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        // Scroll depth tracking
        let maxScrollDepth = 0;
        const scrollDepths = [25, 50, 75, 90];
        
        let progressTicking = false;
        window.addEventListener('scroll', () => {
            if (!progressTicking) {
                window.requestAnimationFrame(function() {
                    const scrollTop = window.pageYOffset;
                    const docHeight = document.body.scrollHeight - window.innerHeight;
                    const scrollPercent = (scrollTop / docHeight) * 100;
                    progressBar.style.width = scrollPercent + '%';
                    
                    // Track scroll depth
                    if (window.posthog) {
                        const currentDepth = Math.floor(scrollPercent);
                        if (currentDepth > maxScrollDepth) {
                            maxScrollDepth = currentDepth;
                            
                            // Check if we passed any thresholds
                            scrollDepths.forEach(depth => {
                                if (currentDepth >= depth && maxScrollDepth - (currentDepth - depth) < depth) {
                                    // This is a simplified check, ensuring we don't fire multiple times for the same depth
                                    // But since maxScrollDepth increases monotonically, we can just check if we've fired for this depth yet.
                                    // Better approach: use a set of fired depths.
                                }
                            });
                        }
                    }
                    
                    progressTicking = false;
                });
                progressTicking = true;
            }
        });
        
        // Better scroll tracking logic
        const trackedDepths = new Set();
        let scrollTrackingTicking = false;
        
        window.addEventListener('scroll', () => {
            if(!scrollTrackingTicking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset;
                    const docHeight = document.body.scrollHeight - window.innerHeight;
                    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
                    
                    [25, 50, 75, 100].forEach(depth => {
                        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
                            trackedDepths.add(depth);
                            if (window.posthog) {
                                window.posthog.capture('scroll_depth', { depth: depth + '%' });
                            }
                        }
                    });
                    scrollTrackingTicking = false;
                });
                scrollTrackingTicking = true;
            }
        });
    };
    
    createScrollProgress();

    // Track Button Clicks (Contact, Get Started, etc.)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (window.posthog) {
                window.posthog.capture('button_click', {
                    text: this.textContent.trim(),
                    href: this.getAttribute('href'),
                    class: this.className
                });
            }
        });
    });
});
