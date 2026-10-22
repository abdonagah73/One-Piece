// Default Categories List
const DEFAULT_CATEGORIES = [
    { id: 'all', name: 'جميع الروابط', icon: 'fa-solid fa-layer-group' },
    { id: 'web_design', name: 'تصميم الويب (Web Design)', icon: 'fa-solid fa-laptop-code' },
    { id: 'microsoft', name: 'برامج مايكروسوفت (Microsoft 365)', icon: 'fa-brands fa-microsoft' },
    { id: 'ai', name: 'الذكاء الاصطناعي (AI)', icon: 'fa-solid fa-robot' },
    { id: 'freelance', name: 'العمل الحر (Freelance)', icon: 'fa-solid fa-briefcase' },
    { id: 'social', name: 'سوشيال ميديا (Social)', icon: 'fa-solid fa-comments' }
];

// Curated Links Database
const DEFAULT_LINKS = [
    // === 🎨 Web Design & Frontend Tools ===
    {
        id: 'web_1',
        title: 'Font Awesome',
        url: 'https://fontawesome.com/',
        category: 'web_design',
        desc: 'أشهر مكتبة أيقونات vector ورموز احترافية لمطوري ومصممي الويب',
        imageType: 'auto',
        pinned: true,
        clicks: 38,
        createdAt: 1710000000010
    },
    {
        id: 'web_2',
        title: 'Swiper.js',
        url: 'https://swiperjs.com/',
        category: 'web_design',
        desc: 'أقوى مكتبة سلايدر وتمرير صور ومحتوى للموبايل والويب بتأثيرات خرافية',
        imageType: 'auto',
        pinned: true,
        clicks: 34,
        createdAt: 1710000000011
    },
    {
        id: 'web_3',
        title: 'W3Schools',
        url: 'https://www.w3schools.com/',
        category: 'web_design',
        desc: 'المرجع التعليمي الأسهل لتعلم HTML, CSS, JavaScript والعديد من اللغات',
        imageType: 'auto',
        pinned: true,
        clicks: 36,
        createdAt: 1710000000012
    },
    {
        id: 'web_4',
        title: 'Bootstrap',
        url: 'https://getbootstrap.com/',
        category: 'web_design',
        desc: 'أشهر إطار عمل CSS لتصميم مواقع متجاوبة (Responsive) وسريعة',
        imageType: 'auto',
        pinned: true,
        clicks: 30,
        createdAt: 1710000000013
    },
    {
        id: 'web_5',
        title: 'Tailwind CSS',
        url: 'https://tailwindcss.com/',
        category: 'web_design',
        desc: 'إطار العمل الحديث utility-first لبناء واجهات مخصصة وعصرية بسرعة فائقة',
        imageType: 'auto',
        pinned: false,
        clicks: 25,
        createdAt: 1710000000014
    },
    {
        id: 'web_6',
        title: 'Figma',
        url: 'https://www.figma.com/',
        category: 'web_design',
        desc: 'أداة تصميم وتخطيط واجهات وتجارب المستخدم (UI/UX) الرائدة عالمياً',
        imageType: 'auto',
        pinned: true,
        clicks: 29,
        createdAt: 1710000000015
    },
    {
        id: 'web_7',
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/',
        category: 'web_design',
        desc: 'المرجع والتوثيق الرسمي والموثوق من موزيلا لكل تقنيات الويب',
        imageType: 'auto',
        pinned: false,
        clicks: 22,
        createdAt: 1710000000016
    },
    {
        id: 'web_8',
        title: 'CodePen',
        url: 'https://codepen.io/',
        category: 'web_design',
        desc: 'بيئة تفاعلية لاختبار الأكواد ومشاركة تصاميم وتأثيرات HTML/CSS المبتكرة',
        imageType: 'auto',
        pinned: false,
        clicks: 20,
        createdAt: 1710000000017
    },
    {
        id: 'web_9',
        title: 'Coolors',
        url: 'https://coolors.co/',
        category: 'web_design',
        desc: 'أداة توليد لوحات وتناسق ألوان رائعة (Color Palettes) للمواقع',
        imageType: 'auto',
        pinned: false,
        clicks: 18,
        createdAt: 1710000000018
    },
    {
        id: 'web_10',
        title: 'CSS Gradient',
        url: 'https://cssgradient.io/',
        category: 'web_design',
        desc: 'مولد تدرجات الألوان وخلفيات الـ CSS الاحترافية',
        imageType: 'auto',
        pinned: false,
        clicks: 16,
        createdAt: 1710000000019
    },
    {
        id: 'web_11',
        title: 'Flaticon',
        url: 'https://www.flaticon.com/',
        category: 'web_design',
        desc: 'مكتبة ضخمة لملايين الأيقونات بصيغ SVG و PNG و Favicon',
        imageType: 'auto',
        pinned: false,
        clicks: 17,
        createdAt: 1710000000020
    },
    {
        id: 'web_12',
        title: 'Dribbble',
        url: 'https://dribbble.com/',
        category: 'web_design',
        desc: 'منصة استلهام الأفكار والتغذية البصرية لأفضل تصاميم الويب والتطبيقات',
        imageType: 'auto',
        pinned: false,
        clicks: 19,
        createdAt: 1710000000021
    },

    // === 🏢 Microsoft Web Apps ===
    {
        id: 'ms_1',
        title: 'Microsoft 365 (Office)',
        url: 'https://www.office.com/',
        category: 'microsoft',
        desc: 'لوحة التحكم الرئيسية لكافة تطبيقات ومستندات مايكروسوفت أوفيس أونلاين',
        imageType: 'auto',
        pinned: true,
        clicks: 33,
        createdAt: 1710000000030
    },
    {
        id: 'ms_2',
        title: 'Microsoft Word Web',
        url: 'https://www.office.com/launch/word',
        category: 'microsoft',
        desc: 'كتابة وتحرير المستندات والأبحاث وتنسيق النصوص مباشرة من المتصفح',
        imageType: 'auto',
        pinned: true,
        clicks: 30,
        createdAt: 1710000000031
    },
    {
        id: 'ms_3',
        title: 'Microsoft Excel Web',
        url: 'https://www.office.com/launch/excel',
        category: 'microsoft',
        desc: 'جداول البيانات والعمليات الحسابية والرسوم البيانية والمعادلات',
        imageType: 'auto',
        pinned: true,
        clicks: 28,
        createdAt: 1710000000032
    },
    {
        id: 'ms_4',
        title: 'Microsoft PowerPoint Web',
        url: 'https://www.office.com/launch/powerpoint',
        category: 'microsoft',
        desc: 'إنشاء العروض التقديمية الاحترافية والشرائح التفاعلية',
        imageType: 'auto',
        pinned: false,
        clicks: 24,
        createdAt: 1710000000033
    },
    {
        id: 'ms_5',
        title: 'Outlook Web (Mail)',
        url: 'https://outlook.live.com/',
        category: 'microsoft',
        desc: 'البريد الإلكتروني والتقويم وإدارة المواعيد والرسائل الرسمية',
        imageType: 'auto',
        pinned: true,
        clicks: 31,
        createdAt: 1710000000034
    },
    {
        id: 'ms_6',
        title: 'OneDrive Web',
        url: 'https://onedrive.live.com/',
        category: 'microsoft',
        desc: 'التخزين السحابي لملفاتك ومزامنتها والوصول إليها من أي مكان',
        imageType: 'auto',
        pinned: false,
        clicks: 26,
        createdAt: 1710000000035
    },
    {
        id: 'ms_7',
        title: 'Microsoft Teams Web',
        url: 'https://teams.microsoft.com/',
        category: 'microsoft',
        desc: 'الاجتماعات والمحاضرات الاونلاين والمحادثات الجماعية للفرق والجامعة',
        imageType: 'auto',
        pinned: false,
        clicks: 21,
        createdAt: 1710000000036
    },
    {
        id: 'ms_8',
        title: 'Microsoft OneNote Web',
        url: 'https://www.onenote.com/notebooks',
        category: 'microsoft',
        desc: 'دفتر الملاحظات الرقمي لتدوين الأفكار والمحاضرات وتنظيم المشاريع',
        imageType: 'auto',
        pinned: false,
        clicks: 19,
        createdAt: 1710000000037
    },
    {
        id: 'ms_9',
        title: 'Microsoft To Do',
        url: 'https://to-do.live.com/',
        category: 'microsoft',
        desc: 'إدارة المهام اليومية وقوائم الإنجاز والتذكيرات الذكية',
        imageType: 'auto',
        pinned: false,
        clicks: 18,
        createdAt: 1710000000038
    },
    {
        id: 'ms_10',
        title: 'Microsoft Loop',
        url: 'https://loop.microsoft.com/',
        category: 'microsoft',
        desc: 'مساحة عمل تعاونية حديثة لتنظيم الأفكار والمستندات المشتركة',
        imageType: 'auto',
        pinned: false,
        clicks: 14,
        createdAt: 1710000000039
    },

    // === 🤖 AI Tools ===
    {
        id: 'ai_1',
        title: 'ChatGPT',
        url: 'https://chatgpt.com',
        category: 'ai',
        desc: 'أشهر نموذج ذكاء اصطناعي للمحادثة والبرمجة وكتابة المحتوى',
        imageType: 'auto',
        pinned: true,
        clicks: 35,
        createdAt: 1710000000050
    },
    {
        id: 'ai_2',
        title: 'Claude AI',
        url: 'https://claude.ai',
        category: 'ai',
        desc: 'مساعد ذكي متطور جداً في البرمجة والتحليل اللغوي الدقيق من Anthropic',
        imageType: 'auto',
        pinned: true,
        clicks: 28,
        createdAt: 1710000000051
    },
    {
        id: 'ai_3',
        title: 'Google Gemini',
        url: 'https://gemini.google.com',
        category: 'ai',
        desc: 'الذكاء الاصطناعي المتكامل من جوجل مع إمكانية البحث المباشر وتحليل الصور',
        imageType: 'auto',
        pinned: true,
        clicks: 22,
        createdAt: 1710000000052
    },
    {
        id: 'ai_4',
        title: 'DeepSeek',
        url: 'https://chat.deepseek.com',
        category: 'ai',
        desc: 'نموذج استدلال وبرمجة قوي ومفتوح المصدر',
        imageType: 'auto',
        pinned: false,
        clicks: 19,
        createdAt: 1710000000053
    },
    {
        id: 'ai_5',
        title: 'Perplexity AI',
        url: 'https://www.perplexity.ai',
        category: 'ai',
        desc: 'محرك بحث ذكي يقدم إجابات دقيقة مع ذكر المصادر الموثوقة',
        imageType: 'auto',
        pinned: false,
        clicks: 16,
        createdAt: 1710000000054
    },
    {
        id: 'ai_6',
        title: 'Midjourney',
        url: 'https://www.midjourney.com',
        category: 'ai',
        desc: 'أقوى أداة لتوليد الصور والتصاميم الفنية الخيالية بالذكاء الاصطناعي',
        imageType: 'auto',
        pinned: false,
        clicks: 14,
        createdAt: 1710000000055
    },
    {
        id: 'ai_7',
        title: 'v0 by Vercel',
        url: 'https://v0.dev',
        category: 'ai',
        desc: 'توليد وتصميم واجهات المستخدم والأكواد البرمجية بالذكاء الاصطناعي',
        imageType: 'auto',
        pinned: false,
        clicks: 11,
        createdAt: 1710000000056
    },
    {
        id: 'ai_8',
        title: 'Hugging Face',
        url: 'https://huggingface.co',
        category: 'ai',
        desc: 'أكبر مجتمع ونظام بيئي للنماذج مفتوحة المصدر ومكتبات الذكاء الاصطناعي',
        imageType: 'auto',
        pinned: false,
        clicks: 9,
        createdAt: 1710000000057
    },
    {
        id: 'ai_9',
        title: 'ElevenLabs',
        url: 'https://elevenlabs.io',
        category: 'ai',
        desc: 'أفضل منصة لتوليد الأصوات والدبلجة الواقعية بالذكاء الاصطناعي',
        imageType: 'auto',
        pinned: false,
        clicks: 8,
        createdAt: 1710000000058
    },

    // === 💼 Freelance Websites ===
    {
        id: 'free_1',
        title: 'Upwork',
        url: 'https://www.upwork.com',
        category: 'freelance',
        desc: 'أكبر منصة عالمية للعمل الحر والمشاريع الكبيرة في كل المجالات',
        imageType: 'auto',
        pinned: true,
        clicks: 30,
        createdAt: 1710000000060
    },
    {
        id: 'free_2',
        title: 'مستقل (Mostaql)',
        url: 'https://mostaql.com',
        category: 'freelance',
        desc: 'أكبر منصة عربية للعمل الحر تجمع بين المستقلين وأصحاب المشاريع',
        imageType: 'auto',
        pinned: true,
        clicks: 27,
        createdAt: 1710000000061
    },
    {
        id: 'free_3',
        title: 'Fiverr',
        url: 'https://www.fiverr.com',
        category: 'freelance',
        desc: 'سوق الخدمات المصغرة العالمي لبيع وشراء كافة أنواع الخدمات الرقمية',
        imageType: 'auto',
        pinned: true,
        clicks: 24,
        createdAt: 1710000000062
    },
    {
        id: 'free_4',
        title: 'خمسات (Khamsat)',
        url: 'https://khamsat.com',
        category: 'freelance',
        desc: 'السوق العربي الأول لبيع وشراء الخدمات المصغرة بأسعار تبدأ من 5$',
        imageType: 'auto',
        pinned: false,
        clicks: 20,
        createdAt: 1710000000063
    },
    {
        id: 'free_5',
        title: 'Freelancer.com',
        url: 'https://www.freelancer.com',
        category: 'freelance',
        desc: 'منصة عالمية تقدم مشاريع بنظام المزايدة ومسابقات التصميم والبرمجة',
        imageType: 'auto',
        pinned: false,
        clicks: 15,
        createdAt: 1710000000064
    },
    {
        id: 'free_6',
        title: 'بعيد (Baeed)',
        url: 'https://baeed.com',
        category: 'freelance',
        desc: 'منصة متخصصة في نشر وظائف العمل عن بعد في الشركات العربية',
        imageType: 'auto',
        pinned: false,
        clicks: 13,
        createdAt: 1710000000065
    },
    {
        id: 'free_7',
        title: 'Toptal',
        url: 'https://www.toptal.com',
        category: 'freelance',
        desc: 'شبكة حصرية لأفضل 3% من المطورين والمصممين والخبراء حول العالم',
        imageType: 'auto',
        pinned: false,
        clicks: 10,
        createdAt: 1710000000066
    },
    {
        id: 'free_8',
        title: 'بيكاليكا (Pikalica)',
        url: 'https://pikalica.com',
        category: 'freelance',
        desc: 'متجر عربي لبيع وشراء المنتجات الرقمية الجاهزة والقوالب والتصاميم',
        imageType: 'auto',
        pinned: false,
        clicks: 9,
        createdAt: 1710000000067
    },

    // === 💬 Social Media Platforms ===
    {
        id: 'soc_1',
        title: 'YouTube',
        url: 'https://www.youtube.com',
        category: 'social',
        desc: 'منصة الفيديو الأولى عالمياً للتعلم والمشاهدة والترفيه',
        imageType: 'auto',
        pinned: true,
        clicks: 40,
        createdAt: 1710000000070
    },
    {
        id: 'soc_2',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com',
        category: 'social',
        desc: 'الشبكة المهنية الأولى لبناء العلاقات، التوظيف، والتواصل مع الشركات',
        imageType: 'auto',
        pinned: true,
        clicks: 32,
        createdAt: 1710000000071
    },
    {
        id: 'soc_3',
        title: 'WhatsApp Web',
        url: 'https://web.whatsapp.com',
        category: 'social',
        desc: 'المراسلات الفورية وإرسال الملفات وإجراء المحادثات من المتصفح',
        imageType: 'auto',
        pinned: true,
        clicks: 38,
        createdAt: 1710000000072
    },
    {
        id: 'soc_4',
        title: 'Facebook',
        url: 'https://www.facebook.com',
        category: 'social',
        desc: 'شبكة التواصل الاجتماعي لمتابعة الأخبار، المجموعات، والتواصل مع الأصدقاء',
        imageType: 'auto',
        pinned: false,
        clicks: 25,
        createdAt: 1710000000073
    },
    {
        id: 'soc_5',
        title: 'X (Twitter)',
        url: 'https://x.com',
        category: 'social',
        desc: 'منصة الأخبار والتغريدات والمناقشات السريعة والتريندات العالمية',
        imageType: 'auto',
        pinned: false,
        clicks: 22,
        createdAt: 1710000000074
    },
    {
        id: 'soc_6',
        title: 'Telegram Web',
        url: 'https://web.telegram.org',
        category: 'social',
        desc: 'قنوات ومجموعات التيليجرام لمشاركة الملفات والمحتوى التقني والترفيهي',
        imageType: 'auto',
        pinned: false,
        clicks: 19,
        createdAt: 1710000000075
    },
    {
        id: 'soc_7',
        title: 'Instagram',
        url: 'https://www.instagram.com',
        category: 'social',
        desc: 'مشاركة الصور ومقاطع الريلز ومتابعة الحسابات والمشاهير',
        imageType: 'auto',
        pinned: false,
        clicks: 18,
        createdAt: 1710000000076
    },
    {
        id: 'soc_8',
        title: 'Discord',
        url: 'https://discord.com/app',
        category: 'social',
        desc: 'مجتمعات الدردشة الصوتية والكتابية وسيرفرات البرمجة والألعاب',
        imageType: 'auto',
        pinned: false,
        clicks: 15,
        createdAt: 1710000000077
    },
    {
        id: 'soc_9',
        title: 'Reddit',
        url: 'https://www.reddit.com',
        category: 'social',
        desc: 'أكبر منتدى عالمي للنقاشات والتجارب والأسئلة والحلول التقنية',
        imageType: 'auto',
        pinned: false,
        clicks: 12,
        createdAt: 1710000000078
    }
];

// App State Initialization
let storedLinks = null;
let storedCategories = null;

try {
    const rawLinks = localStorage.getItem('onepiece_links');
    const rawCategories = localStorage.getItem('onepiece_categories');
    if (rawLinks !== null) storedLinks = JSON.parse(rawLinks);
    if (rawCategories !== null) storedCategories = JSON.parse(rawCategories);
} catch (e) {
    console.error('Error reading localStorage:', e);
}

// Load saved data from localStorage; use defaults only on very first launch
let categories = Array.isArray(storedCategories) ? storedCategories : [...DEFAULT_CATEGORIES];
let links = Array.isArray(storedLinks) ? storedLinks : [...DEFAULT_LINKS];

// Ensure initial state is saved to localStorage if it wasn't already
if (storedCategories === null) {
    localStorage.setItem('onepiece_categories', JSON.stringify(categories));
}
if (storedLinks === null) {
    localStorage.setItem('onepiece_links', JSON.stringify(links));
}


let activeCategoryId = 'all';
let searchQuery = '';
let currentSort = 'clicks';
let currentView = 'grid';
let currentUploadedBase64 = null;

// DOM Elements
const categoriesListEl = document.getElementById('categoriesList');
const linksContainerEl = document.getElementById('linksContainer');
const pinnedSectionEl = document.getElementById('pinnedSection');
const pinnedGridEl = document.getElementById('pinnedGrid');
const emptyStateEl = document.getElementById('emptyState');
const currentCategoryTitleEl = document.getElementById('currentCategoryTitle');
const categoryLinksCountEl = document.getElementById('categoryLinksCount');
const totalLinksCountEl = document.getElementById('totalLinksCount');
const totalClicksCountEl = document.getElementById('totalClicksCount');
const searchInputEl = document.getElementById('searchInput');
const clearSearchBtnEl = document.getElementById('clearSearchBtn');
const sortBySelectEl = document.getElementById('sortBySelect');
const themeToggleBtnEl = document.getElementById('themeToggleBtn');
const quickLaunchCategoryBtnEl = document.getElementById('quickLaunchCategoryBtn');

// Modals & Forms
const linkModal = document.getElementById('linkModal');
const linkForm = document.getElementById('linkForm');
const categoryModal = document.getElementById('categoryModal');
const categoryForm = document.getElementById('categoryForm');
const importFileInput = document.getElementById('importFileInput');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toastMessage');

// Image Upload Elements
const imageSourceType = document.getElementById('imageSourceType');
const uploadOptionGroup = document.getElementById('uploadOptionGroup');
const urlOptionGroup = document.getElementById('urlOptionGroup');
const iconOptionGroup = document.getElementById('iconOptionGroup');
const linkImageFile = document.getElementById('linkImageFile');
const imageUploadPreview = document.getElementById('imageUploadPreview');
const uploadPreviewImg = document.getElementById('uploadPreviewImg');
const btnRemoveUploadedImg = document.getElementById('btnRemoveUploadedImg');
const linkImageUrl = document.getElementById('linkImageUrl');

// Init
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCategories();
    populateCategoryDropdown();
    renderLinks();
    updateStats();
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('onepiece_theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleBtnEl.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggleBtnEl.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('onepiece_theme', 'light');
        themeToggleBtnEl.innerHTML = '<i class="fa-solid fa-sun"></i>';
        showToast('تم تفعيل الوضع النهاري ☀️');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('onepiece_theme', 'dark');
        themeToggleBtnEl.innerHTML = '<i class="fa-solid fa-moon"></i>';
        showToast('تم تفعيل الوضع الليلي 🌙');
    }
}

// Helpers
function saveToLocalStorage() {
    localStorage.setItem('onepiece_categories', JSON.stringify(categories));
    localStorage.setItem('onepiece_links', JSON.stringify(links));
    updateStats();
}

function showToast(message, isError = false) {
    toastMessageEl.textContent = message;
    const toastIcon = toastEl.querySelector('.toast-icon');
    if (isError) {
        toastIcon.className = 'toast-icon fa-solid fa-circle-exclamation';
        toastIcon.style.color = 'var(--danger)';
    } else {
        toastIcon.className = 'toast-icon fa-solid fa-circle-check';
        toastIcon.style.color = 'var(--success)';
    }
    toastEl.classList.add('active');
    setTimeout(() => {
        toastEl.classList.remove('active');
    }, 3000);
}

function getFaviconUrl(url) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
        return 'assets/images/logo.png';
    }
}

function formatUrlDomain(url) {
    try {
        return new URL(url).hostname.replace('www.', '');
    } catch {
        return url;
    }
}

// Render Categories
function renderCategories() {
    categoriesListEl.innerHTML = '';

    categories.forEach(cat => {
        const count = cat.id === 'all' 
            ? links.length 
            : links.filter(l => l.category === cat.id).length;

        const li = document.createElement('li');
        li.className = `category-item ${cat.id === activeCategoryId ? 'active' : ''}`;
        li.dataset.id = cat.id;
        
        li.innerHTML = `
            <div class="category-item-content">
                <i class="${cat.icon || 'fa-solid fa-folder'}"></i>
                <span>${cat.name}</span>
            </div>
            <div class="category-item-actions">
                <span class="category-badge">${count}</span>
                ${cat.id !== 'all' ? `<button class="btn-del-cat" title="حذف التصنيف" data-id="${cat.id}"><i class="fa-solid fa-xmark"></i></button>` : ''}
            </div>
        `;

        li.addEventListener('click', (e) => {
            const delBtn = e.target.closest('.btn-del-cat');
            if (delBtn) {
                e.stopPropagation();
                deleteCategory(delBtn.dataset.id);
                return;
            }
            activeCategoryId = cat.id;
            renderCategories();
            renderLinks();
        });

        categoriesListEl.appendChild(li);
    });
}

function deleteCategory(catId) {
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;
    if (confirm(`هل تريد حذف تصنيف "${cat.name}"؟ الروابط التي بداخله ستظل موجودة في (جميع الروابط).`)) {
        categories = categories.filter(c => c.id !== catId);
        links.forEach(l => {
            if (l.category === catId) l.category = 'web_design';
        });
        if (activeCategoryId === catId) activeCategoryId = 'all';
        saveToLocalStorage();
        renderCategories();
        populateCategoryDropdown();
        renderLinks();
        showToast('تم حذف التصنيف بنجاح');
    }
}

function populateCategoryDropdown() {
    const linkCategorySelect = document.getElementById('linkCategory');
    linkCategorySelect.innerHTML = '';
    const availableCats = categories.filter(c => c.id !== 'all');
    if (availableCats.length === 0) {
        const opt = document.createElement('option');
        opt.value = 'web_design';
        opt.textContent = 'عام';
        linkCategorySelect.appendChild(opt);
    } else {
        availableCats.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat.id;
            opt.textContent = cat.name;
            linkCategorySelect.appendChild(opt);
        });
    }
}

// Render Links
function renderLinks() {
    const currentCat = categories.find(c => c.id === activeCategoryId) || categories[0];
    currentCategoryTitleEl.textContent = searchQuery 
        ? `نتائج البحث عن "${searchQuery}"` 
        : currentCat.name;

    let filteredLinks = links.filter(link => {
        const matchCategory = activeCategoryId === 'all' || link.category === activeCategoryId;
        const matchSearch = !searchQuery || 
            link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (link.desc && link.desc.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCategory && matchSearch;
    });

    // Sort
    if (currentSort === 'clicks') {
        filteredLinks.sort((a, b) => (b.clicks || 0) - (a.clicks || 0));
    } else if (currentSort === 'recent') {
        filteredLinks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (currentSort === 'title') {
        filteredLinks.sort((a, b) => a.title.localeCompare(b.title));
    }

    categoryLinksCountEl.textContent = `${filteredLinks.length} روابط`;

    // Render Pinned Links
    renderPinnedLinks();

    // Render Main Links
    linksContainerEl.innerHTML = '';

    if (filteredLinks.length === 0) {
        emptyStateEl.style.display = 'block';
    } else {
        emptyStateEl.style.display = 'none';
        filteredLinks.forEach(link => {
            const card = createLinkCard(link);
            linksContainerEl.appendChild(card);
        });
    }
}

function renderPinnedLinks() {
    const pinned = links.filter(l => l.pinned);
    if (pinned.length === 0) {
        pinnedSectionEl.style.display = 'none';
        return;
    }
    pinnedSectionEl.style.display = 'block';
    pinnedGridEl.innerHTML = '';

    pinned.forEach(link => {
        const item = document.createElement('div');
        item.className = 'pinned-card';
        
        let iconHtml = '';
        if (link.imageType === 'upload' && link.customImageBase64) {
            iconHtml = `<img src="${link.customImageBase64}" class="favicon">`;
        } else if (link.imageType === 'url' && link.customImageUrl) {
            iconHtml = `<img src="${link.customImageUrl}" class="favicon" onerror="this.src='assets/images/logo.png'">`;
        } else if (link.imageType === 'icon' && link.customIcon) {
            iconHtml = `<i class="${link.customIcon} custom-icon"></i>`;
        } else {
            iconHtml = `<img src="${getFaviconUrl(link.url)}" class="favicon" onerror="this.src='assets/images/logo.png'">`;
        }

        item.innerHTML = `
            ${iconHtml}
            <span>${link.title}</span>
        `;

        item.addEventListener('click', () => {
            handleLinkClick(link.id, link.url);
        });

        pinnedGridEl.appendChild(item);
    });
}

function createLinkCard(link) {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.dataset.id = link.id;

    const domainText = formatUrlDomain(link.url);
    const categoryObj = categories.find(c => c.id === link.category);
    const categoryName = categoryObj ? categoryObj.name : 'عام';

    let iconHtml = '';
    if (link.imageType === 'upload' && link.customImageBase64) {
        iconHtml = `<img src="${link.customImageBase64}" alt="${link.title}">`;
    } else if (link.imageType === 'url' && link.customImageUrl) {
        iconHtml = `<img src="${link.customImageUrl}" alt="${link.title}" onerror="this.src='assets/images/logo.png'">`;
    } else if (link.imageType === 'icon' && link.customIcon) {
        iconHtml = `<i class="${link.customIcon}" style="color: var(--primary)"></i>`;
    } else {
        const faviconSrc = getFaviconUrl(link.url);
        iconHtml = `<img src="${faviconSrc}" alt="${link.title}" onerror="this.src='assets/images/logo.png'">`;
    }

    card.innerHTML = `
        <div class="link-card-top">
            <div class="link-icon-box">
                ${iconHtml}
            </div>
            <div class="link-card-actions">
                <button class="card-action-btn pin-btn ${link.pinned ? 'active' : ''}" title="${link.pinned ? 'إلغاء التثبيت' : 'تثبيت في المفضلة'}" data-action="pin">
                    <i class="fa-solid fa-star"></i>
                </button>
                <button class="card-action-btn edit-btn" title="تعديل الرابط" data-action="edit">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="card-action-btn delete-btn" title="حذف" data-action="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>

        <div class="link-card-body">
            <h4>${link.title}</h4>
            <span class="link-url-text">${domainText}</span>
            <p class="link-desc">${link.desc || 'لا يوجد وصف...'}</p>
        </div>

        <div class="link-card-footer">
            <span class="link-card-category">${categoryName}</span>
            <span class="link-card-clicks" title="عدد مرات الفتح">
                <i class="fa-solid fa-compass"></i>
                <span>${link.clicks || 0} نقرة</span>
            </span>
        </div>
    `;

    card.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('.card-action-btn');
        if (actionBtn) {
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            if (action === 'pin') togglePinLink(link.id);
            if (action === 'edit') openEditModal(link.id);
            if (action === 'delete') deleteLink(link.id);
            return;
        }

        handleLinkClick(link.id, link.url);
    });

    return card;
}

function handleLinkClick(id, url) {
    const link = links.find(l => l.id === id);
    if (link) {
        link.clicks = (link.clicks || 0) + 1;
        saveToLocalStorage();
        renderLinks();
    }
    window.open(url, '_blank', 'noopener,noreferrer');
}

function togglePinLink(id) {
    const link = links.find(l => l.id === id);
    if (link) {
        link.pinned = !link.pinned;
        saveToLocalStorage();
        renderLinks();
        showToast(link.pinned ? 'تمت إضافة الرابط للمفضلة ⭐' : 'تمت إزالة الرابط من المفضلة');
    }
}

function deleteLink(id) {
    if (confirm('هل أنت متأكد من رغبتك في حذف هذا الاختصار؟')) {
        links = links.filter(l => l.id !== id);
        saveToLocalStorage();
        renderCategories();
        renderLinks();
        showToast('تم حذف الرابط بنجاح');
    }
}

function updateStats() {
    totalLinksCountEl.textContent = links.length;
    const totalClicks = links.reduce((sum, item) => sum + (item.clicks || 0), 0);
    totalClicksCountEl.textContent = totalClicks;
}

// Image Options Switcher
function updateImageTypeUI(type) {
    uploadOptionGroup.style.display = type === 'upload' ? 'block' : 'none';
    urlOptionGroup.style.display = type === 'url' ? 'block' : 'none';
    iconOptionGroup.style.display = type === 'icon' ? 'block' : 'none';
}

imageSourceType.addEventListener('change', (e) => {
    updateImageTypeUI(e.target.value);
});

// Handle File Upload to Base64
linkImageFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        if (file.size > 2 * 1024 * 1024) {
            showToast('حجم الصورة كبير، يفضل اختيار صورة أقل من 2 ميجابايت', true);
            return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
            currentUploadedBase64 = event.target.result;
            uploadPreviewImg.src = currentUploadedBase64;
            imageUploadPreview.style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
});

btnRemoveUploadedImg.addEventListener('click', () => {
    currentUploadedBase64 = null;
    linkImageFile.value = '';
    imageUploadPreview.style.display = 'none';
});

// Modal Handling
function openAddModal() {
    linkForm.reset();
    currentUploadedBase64 = null;
    imageUploadPreview.style.display = 'none';
    imageSourceType.value = 'auto';
    updateImageTypeUI('auto');

    document.getElementById('linkId').value = '';
    document.getElementById('linkModalTitle').innerHTML = '<i class="fa-solid fa-plus-circle"></i> إضافة رابط جديد';
    
    const availableCats = categories.filter(c => c.id !== 'all');
    document.getElementById('linkCategory').value = activeCategoryId === 'all' 
        ? (availableCats[0]?.id || '') 
        : activeCategoryId;

    linkModal.classList.add('active');
    document.getElementById('linkUrl').focus();
}

function openEditModal(id) {
    const link = links.find(l => l.id === id);
    if (!link) return;

    document.getElementById('linkId').value = link.id;
    document.getElementById('linkUrl').value = link.url;
    document.getElementById('linkTitle').value = link.title;
    document.getElementById('linkCategory').value = link.category;
    document.getElementById('linkDesc').value = link.desc || '';
    document.getElementById('linkPinned').checked = !!link.pinned;

    const imgType = link.imageType || 'auto';
    imageSourceType.value = imgType;
    updateImageTypeUI(imgType);

    if (imgType === 'upload' && link.customImageBase64) {
        currentUploadedBase64 = link.customImageBase64;
        uploadPreviewImg.src = currentUploadedBase64;
        imageUploadPreview.style.display = 'flex';
    } else {
        currentUploadedBase64 = null;
        imageUploadPreview.style.display = 'none';
    }

    if (imgType === 'url') {
        linkImageUrl.value = link.customImageUrl || '';
    }

    if (imgType === 'icon') {
        document.getElementById('linkCustomIcon').value = link.customIcon || 'fa-solid fa-skull-crossbones';
    }

    document.getElementById('linkModalTitle').innerHTML = '<i class="fa-solid fa-pen"></i> تعديل الرابط';
    linkModal.classList.add('active');
}

function closeLinkModal() {
    linkModal.classList.remove('active');
}

function openCategoryModal() {
    categoryForm.reset();
    categoryModal.classList.add('active');
    document.getElementById('categoryName').focus();
}

function closeCategoryModal() {
    categoryModal.classList.remove('active');
}

// Quick Open All
function openAllCategoryLinks() {
    let targetLinks = activeCategoryId === 'all' 
        ? links 
        : links.filter(l => l.category === activeCategoryId);

    if (targetLinks.length === 0) {
        showToast('لا توجد روابط لفتحها!', true);
        return;
    }

    if (confirm(`هل تريد فتح جميع الروابط (${targetLinks.length}) في تبويبات جديدة الآن؟`)) {
        targetLinks.forEach(l => {
            l.clicks = (l.clicks || 0) + 1;
            window.open(l.url, '_blank');
        });
        saveToLocalStorage();
        renderLinks();
        showToast(`تم فتح ${targetLinks.length} روابط بنجاح! 🚀`);
    }
}

// Clear all data
function clearAllData() {
    if (confirm('هل تريد تصفير جميع البيانات والبدء من الصفر تماماً؟')) {
        links = [];
        categories = [
            { id: 'all', name: 'جميع الروابط', icon: 'fa-solid fa-layer-group' }
        ];
        activeCategoryId = 'all';
        saveToLocalStorage();
        renderCategories();
        populateCategoryDropdown();
        renderLinks();
        showToast('تم تصفير كل شيء بنجاح! يمكنك الآن بناء قوائمك الخاصة.');
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Search
    searchInputEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        clearSearchBtnEl.style.display = searchQuery ? 'block' : 'none';
        renderLinks();
    });

    clearSearchBtnEl.addEventListener('click', () => {
        searchInputEl.value = '';
        searchQuery = '';
        clearSearchBtnEl.style.display = 'none';
        renderLinks();
        searchInputEl.focus();
    });

    // Keyboard shortcut for search
    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInputEl && !linkModal.classList.contains('active')) {
            e.preventDefault();
            searchInputEl.focus();
            searchInputEl.select();
        }
        if (e.key === 'Escape') {
            closeLinkModal();
            closeCategoryModal();
        }
    });

    // Sort & View
    sortBySelectEl.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderLinks();
    });

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            if (currentView === 'list') {
                linksContainerEl.classList.remove('grid-view');
                linksContainerEl.classList.add('list-view');
            } else {
                linksContainerEl.classList.remove('list-view');
                linksContainerEl.classList.add('grid-view');
            }
        });
    });

    // Modal buttons
    document.getElementById('btnOpenAddLink').addEventListener('click', openAddModal);
    document.getElementById('btnEmptyAdd').addEventListener('click', openAddModal);
    document.getElementById('btnEmptyAddCat').addEventListener('click', openCategoryModal);
    document.getElementById('btnCloseLinkModal').addEventListener('click', closeLinkModal);
    document.getElementById('btnCancelLinkModal').addEventListener('click', closeLinkModal);

    document.getElementById('btnOpenAddCategory').addEventListener('click', openCategoryModal);
    document.getElementById('btnCloseCategoryModal').addEventListener('click', closeCategoryModal);
    document.getElementById('btnCancelCategoryModal').addEventListener('click', closeCategoryModal);

    themeToggleBtnEl.addEventListener('click', toggleTheme);
    quickLaunchCategoryBtnEl.addEventListener('click', openAllCategoryLinks);
    document.getElementById('btnClearAllData').addEventListener('click', clearAllData);

    // Auto-fill title from URL if empty
    document.getElementById('linkUrl').addEventListener('blur', (e) => {
        let url = e.target.value.trim();
        if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
            e.target.value = url;
        }
        const titleInput = document.getElementById('linkTitle');
        if (url && !titleInput.value) {
            try {
                const domain = new URL(url).hostname.replace('www.', '').split('.')[0];
                titleInput.value = domain.charAt(0).toUpperCase() + domain.slice(1);
            } catch {}
        }
    });

    // Link Form Submit
    linkForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('linkId').value;
        let url = document.getElementById('linkUrl').value.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        const title = document.getElementById('linkTitle').value.trim();
        let category = document.getElementById('linkCategory').value;
        if (!category) {
            category = 'web_design';
        }
        const desc = document.getElementById('linkDesc').value.trim();
        const pinned = document.getElementById('linkPinned').checked;
        const imgType = imageSourceType.value;
        const customIcon = document.getElementById('linkCustomIcon').value;
        const customImageUrl = linkImageUrl.value.trim();

        if (id) {
            // Edit
            const link = links.find(l => l.id === id);
            if (link) {
                link.url = url;
                link.title = title;
                link.category = category;
                link.desc = desc;
                link.pinned = pinned;
                link.imageType = imgType;
                link.customImageBase64 = imgType === 'upload' ? currentUploadedBase64 : null;
                link.customImageUrl = imgType === 'url' ? customImageUrl : null;
                link.customIcon = imgType === 'icon' ? customIcon : null;
            }
            showToast('تم تحديث الرابط بنجاح! ✨');
        } else {
            // Add new
            const newLink = {
                id: Date.now().toString(),
                url,
                title,
                category,
                desc,
                pinned,
                imageType: imgType,
                customImageBase64: imgType === 'upload' ? currentUploadedBase64 : null,
                customImageUrl: imgType === 'url' ? customImageUrl : null,
                customIcon: imgType === 'icon' ? customIcon : null,
                clicks: 0,
                createdAt: Date.now()
            };
            links.unshift(newLink);
            showToast('تمت إضافة الرابط بنجاح! 🚀');
        }

        saveToLocalStorage();
        renderCategories();
        renderLinks();
        closeLinkModal();
    });

    // Category Form Submit
    categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('categoryName').value.trim();
        const icon = document.getElementById('categoryIcon').value;

        if (name) {
            const newCat = {
                id: 'cat_' + Date.now(),
                name,
                icon
            };
            categories.push(newCat);
            saveToLocalStorage();
            renderCategories();
            populateCategoryDropdown();
            closeCategoryModal();
            showToast('تمت إضافة التصنيف بنجاح! 📁');
        }
    });

    // Export Data
    document.getElementById('btnExportData').addEventListener('click', () => {
        const data = {
            appName: 'One Piece Links Hub',
            categories,
            links,
            exportDate: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `OnePiece_Links_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('تم تصدير نسخة احتياطية بنجاح 💾');
    });

    // Import Data
    document.getElementById('btnImportData').addEventListener('click', () => {
        importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.links && Array.isArray(data.links)) {
                    if (confirm('هل تريد دمج الروابط والتصنيفات المستوردة مع بياناتك الحالية؟ (موافق = دمج / إلغاء = استبدال)')) {
                        const existingUrls = new Set(links.map(l => l.url));
                        data.links.forEach(l => {
                            if (!existingUrls.has(l.url)) links.push(l);
                        });
                        if (data.categories && Array.isArray(data.categories)) {
                            const existingCatIds = new Set(categories.map(c => c.id));
                            data.categories.forEach(c => {
                                if (!existingCatIds.has(c.id)) categories.push(c);
                            });
                        }
                    } else {
                        links = data.links;
                        if (data.categories) categories = data.categories;
                    }
                    saveToLocalStorage();
                    renderCategories();
                    populateCategoryDropdown();
                    renderLinks();
                    showToast('تم استيراد البيانات بنجاح! 📥');
                } else {
                    showToast('الملف غير صالح.', true);
                }
            } catch (err) {
                showToast('حدث خطأ أثناء قراءة الملف.', true);
            }
        };
        reader.readAsText(file);
        importFileInput.value = '';
    });
}
