// Default Categories List
const DEFAULT_CATEGORIES = [
    { id: 'all', name: 'جميع الروابط', icon: 'fa-solid fa-layer-group' },
    { id: 'hnu', name: 'جامعة حلوان الأهلية (HNU)', icon: 'fa-solid fa-graduation-cap' },
    { id: 'web_design', name: 'تصميم الويب (Web Design)', icon: 'fa-solid fa-laptop-code' },
    { id: 'microsoft', name: 'برامج مايكروسوفت (Microsoft 365)', icon: 'fa-brands fa-microsoft' },
    { id: 'ai', name: 'الذكاء الاصطناعي (AI)', icon: 'fa-solid fa-robot' },
    { id: 'freelance', name: 'العمل الحر (Freelance)', icon: 'fa-solid fa-briefcase' },
    { id: 'social', name: 'سوشيال ميديا (Social)', icon: 'fa-solid fa-comments' }
];

// Curated Links Database
const DEFAULT_LINKS = [
    // === 🎓 HNU - جامعة حلوان الأهلية ===
    {
        id: 'hnu_1',
        title: 'بوابة الطالب (MyU HNU)',
        url: 'https://myu.hnu.edu.eg/',
        category: 'hnu',
        desc: 'نظام إدارة شؤون الطلاب، النتائج، تسجيل المواد، والجداول الدراسية',
        imageType: 'auto',
        pinned: true,
        clicks: 45,
        tags: ['جامعة', 'دراسة', 'مهم'],
        createdAt: 1710000000001
    },
    {
        id: 'hnu_2',
        title: 'المكتبة الإلكترونية والمقررات (E-Books)',
        url: 'https://e-books.hnu.edu.eg/',
        category: 'hnu',
        desc: 'منصة المقررات الدراسية والكتب الإلكترونية والمحاضرات لجامعة حلوان الأهلية',
        imageType: 'auto',
        pinned: true,
        clicks: 40,
        tags: ['كتب', 'دراسة'],
        createdAt: 1710000000002
    },
    {
        id: 'hnu_3',
        title: 'موقع جامعة حلوان الأهلية الرسمي',
        url: 'https://hnu.edu.eg/',
        category: 'hnu',
        desc: 'الموقع الإخباري الرسمي للجامعة والإعلانات والجداول والمواعيد',
        imageType: 'auto',
        pinned: false,
        clicks: 18,
        tags: ['جامعة', 'أخبار'],
        createdAt: 1710000000003
    },

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
        tags: ['أيقونات', 'تصميم', 'برمجة'],
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
        tags: ['برمجة', 'مكتبات'],
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
        tags: ['تعليم', 'برمجة'],
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
        tags: ['CSS', 'تصميم'],
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
        tags: ['CSS', 'تصميم'],
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
        tags: ['UI/UX', 'تصميم'],
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
        tags: ['مراجع', 'برمجة'],
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
        tags: ['برمجة', 'أدوات'],
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
        tags: ['ألوان', 'تصميم'],
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
        tags: ['CSS', 'تصميم'],
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
        tags: ['أيقونات', 'تصميم'],
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
        tags: ['تصميم', 'إلهام'],
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
        tags: ['أوفيس', 'عمل', 'مهم'],
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
        tags: ['كتابة', 'أوفيس'],
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
        tags: ['جداول', 'أوفيس'],
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
        tags: ['عروض', 'دراسة'],
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
        tags: ['إيميل', 'عمل'],
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
        tags: ['سحابة', 'ملفات'],
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
        tags: ['اجتماعات', 'دراسة'],
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
        tags: ['ملاحظات', 'دراسة'],
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
        tags: ['مهام', 'إنتاجية'],
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
        tags: ['تعاون', 'مشاريع'],
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
        tags: ['ذكاء_اصطناعي', 'شات', 'مهم'],
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
        tags: ['ذكاء_اصطناعي', 'برمجة'],
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
        tags: ['ذكاء_اصطناعي', 'جوجل'],
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
        tags: ['ذكاء_اصطناعي', 'برمجة'],
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
        tags: ['بحث', 'ذكاء_اصطناعي'],
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
        tags: ['صور', 'تصميم'],
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
        tags: ['واجهات', 'برمجة'],
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
        tags: ['نماذج', 'مفتوح_المصدر'],
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
        tags: ['صوت', 'ذكاء_اصطناعي'],
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
        tags: ['عمل_حر', 'عالمي'],
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
        tags: ['عمل_حر', 'عربي'],
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
        tags: ['خدمات', 'عمل_حر'],
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
        tags: ['خدمات', 'عربي'],
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
        tags: ['مسابقات', 'عمل_حر'],
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
        tags: ['وظائف', 'عن_بعد'],
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
        tags: ['احترافي', 'مطورين'],
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
        tags: ['قوالب', 'متجر'],
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
        tags: ['فيديو', 'يومي', 'مهم'],
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
        tags: ['مهني', 'وظائف'],
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
        tags: ['شات', 'يومي'],
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
        tags: ['سوشيال'],
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
        tags: ['أخبار', 'سوشيال'],
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
        tags: ['شات', 'قنوات'],
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
        tags: ['صور', 'سوشيال'],
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
        tags: ['مجتمعات', 'صوت'],
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
        tags: ['منتدى', 'تقنية'],
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
let currentSort = 'custom';
let currentView = localStorage.getItem('onepiece_view_mode') || 'grid';
let currentStyleVariant = localStorage.getItem('onepiece_style_theme') || 'yellow';
let activeTag = 'all';
let currentUploadedBase64 = null;
let draggedLinkId = null;

// App Theme State
let currentTheme = localStorage.getItem('onepiece_theme_type') || 'pirate';
let currentMode = localStorage.getItem('onepiece_theme_mode') || 'light';

// Productivity Tools State
let todos = [];
try {
    const rawTodos = localStorage.getItem('onepiece_todos');
    if (rawTodos) todos = JSON.parse(rawTodos);
} catch (e) { todos = []; }

let notes = localStorage.getItem('onepiece_notes') || '';

// Pomodoro Timer State
let pomoState = {
    mode: 'work',
    minutes: 25,
    seconds: 0,
    totalSeconds: 25 * 60,
    remainingSeconds: 25 * 60,
    isRunning: false,
    intervalId: null,
    completedToday: parseInt(localStorage.getItem('onepiece_pomo_completed') || '0', 10),
    soundEnabled: true
};

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
const tagsFilterContainerEl = document.getElementById('tagsFilterContainer');
const tagsPillsListEl = document.getElementById('tagsPillsList');

// Theme Elements
const themeDropdownBtnEl = document.getElementById('themeDropdownBtn');
const themeDropdownMenuEl = document.getElementById('themeDropdownMenu');
const themeDropdownWrapperEl = document.querySelector('.theme-dropdown-wrapper');
const currentThemeLabelEl = document.getElementById('currentThemeLabel');
const brandTitleEl = document.getElementById('brandTitle');
const brandSubtitleEl = document.getElementById('brandSubtitle');
const clicksStatIconEl = document.getElementById('clicksStatIcon');
const emptyAvatarImgEl = document.getElementById('emptyAvatarImg');
const emptyStateTitleEl = document.getElementById('emptyStateTitle');
const emptyStateTextEl = document.getElementById('emptyStateText');

// Modals & Forms
const linkModal = document.getElementById('linkModal');
const linkForm = document.getElementById('linkForm');
const categoryModal = document.getElementById('categoryModal');
const categoryForm = document.getElementById('categoryForm');
const analyticsModal = document.getElementById('analyticsModal');
const importFileInput = document.getElementById('importFileInput');
const toastEl = document.getElementById('toast');
const toastMessageEl = document.getElementById('toastMessage');

// Productivity Drawer Elements
const productivityDrawerEl = document.getElementById('productivityDrawer');
const drawerBackdropEl = document.getElementById('drawerBackdrop');
const btnOpenProductivityEl = document.getElementById('btnOpenProductivity');
const btnCloseDrawerEl = document.getElementById('btnCloseDrawer');

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

// Init Lifecycle
function bootApp() {
    try { applyTheme(currentTheme, currentMode, false); } catch(e) { console.error('applyTheme error:', e); }
    try { applyStyleVariant(currentStyleVariant, false); } catch(e) { console.error('applyStyleVariant error:', e); }
    try { applyViewMode(currentView); } catch(e) { console.error('applyViewMode error:', e); }
    try { renderCategories(); } catch(e) { console.error('renderCategories error:', e); }
    try { populateCategoryDropdown(); } catch(e) { console.error('populateCategoryDropdown error:', e); }
    try { renderTagsBar(); } catch(e) { console.error('renderTagsBar error:', e); }
    try { renderLinks(); } catch(e) { console.error('renderLinks error:', e); }
    try { updateStats(); } catch(e) { console.error('updateStats error:', e); }
    try { initCustomSortDropdown(); } catch(e) { console.error('initCustomSortDropdown error:', e); }
    try { initProductivityDrawer(); } catch(e) { console.error('initProductivityDrawer error:', e); }
    try { setupEventListeners(); } catch(e) { console.error('setupEventListeners error:', e); }
    try { initReadLaterSystem(); } catch(e) { console.error('initReadLaterSystem error:', e); }
    try { initHealthCheckerSystem(); } catch(e) { console.error('initHealthCheckerSystem error:', e); }
    try { initBookmarksImporterSystem(); } catch(e) { console.error('initBookmarksImporterSystem error:', e); }
    try { initQuickPeekSystem(); } catch(e) { console.error('initQuickPeekSystem error:', e); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootApp);
} else {
    bootApp();
}

/* ==========================================================================
   THEME ENGINE (محرك الثيمات والشخصيات المتعددة)
   ========================================================================== */
const THEME_CONFIG = {
    pirate: {
        label: 'ون بيس 🏴‍☠️',
        brandTitle: 'One <span>Piece</span> ⚓',
        brandSubtitle: 'سفينة الاختصارات والمواقع',
        clicksIcon: 'fa-solid fa-skull-crossbones',
        clicksLabel: 'مرات الإبحار',
        emptyTitle: 'سفينتك فارغة وجاهزة للإبحار! 🏴‍☠️',
        emptyText: 'ابدأ رحلتك الآن وأضف تصنيفاتك وروابطك الخاصة لتصل إليها بضغطة زر وتتخلص من التبويبات الكثيرة.'
    },
    pro: {
        label: 'إنتاجي Pro 💼',
        brandTitle: 'Link<span>Hub</span> 💼',
        brandSubtitle: 'مركز الروابط والإنتاجية الذكية',
        clicksIcon: 'fa-solid fa-chart-line',
        clicksLabel: 'مرات الاستخدام',
        emptyTitle: 'مساحتك نظيفة وجاهزة للتنظيم 💼',
        emptyText: 'ابدأ في حفظ روابط عملك ومشاريعك اليومية للوصول السريع إليها وزيادة كفاءتك.'
    },
    cyberpunk: {
        label: 'سايبربانك ⚡',
        brandTitle: 'Cyber<span>Link</span> ⚡',
        brandSubtitle: 'محطة الاختصارات السريالية',
        clicksIcon: 'fa-solid fa-bolt',
        clicksLabel: 'نبضات الشبكة',
        emptyTitle: 'المصفوفة فارغة بانتظار بياناتك ⚡',
        emptyText: 'أدخل روابطك واختصاراتك التقنية واربطها بشبكتك السريعة بنقرة واحدة.'
    },
    zen: {
        label: 'هدوء Zen 🍃',
        brandTitle: 'Zen<span>Space</span> 🍃',
        brandSubtitle: 'بيئة التركيز والهدوء الذهني',
        clicksIcon: 'fa-solid fa-seedling',
        clicksLabel: 'جلسات الإنجاز',
        emptyTitle: 'مساحتك الهادئة بانتظار أفكارك 🍃',
        emptyText: 'نظّم قراءاتك ودراستك في واجهة مريحة للعين تساعدك على التركيز والإنجاز.'
    }
};

function applyTheme(themeName, mode, showNotification = true) {
    currentTheme = themeName;
    document.documentElement.setAttribute('data-app-theme', themeName);
    document.body.setAttribute('data-app-theme', themeName);
    localStorage.setItem('onepiece_theme_type', themeName);

    // Update branding elements
    const conf = THEME_CONFIG[themeName] || THEME_CONFIG.pirate;
    if (currentThemeLabelEl) currentThemeLabelEl.textContent = conf.label;
    if (brandTitleEl) brandTitleEl.innerHTML = conf.brandTitle;
    if (brandSubtitleEl) brandSubtitleEl.textContent = conf.brandSubtitle;
    if (clicksStatIconEl) clicksStatIconEl.className = conf.clicksIcon;
    const clicksLblEl = clicksStatIconEl?.parentElement?.querySelector('.stat-label');
    if (clicksLblEl) clicksLblEl.textContent = conf.clicksLabel;
    if (emptyStateTitleEl) emptyStateTitleEl.textContent = conf.emptyTitle;
    if (emptyStateTextEl) emptyStateTextEl.textContent = conf.emptyText;

    // Update active check in theme dropdown if exists
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.theme === themeName);
    });

    if (showNotification) {
        showToast(`تم تغيير الثيم إلى: ${conf.label}`);
    }
}

/* ==========================================================================
   STYLE VARIANTS STUDIO (الأشكال والأنماط البصرية الأربعة)
   ========================================================================== */
function applyStyleVariant(styleName, showNotification = false) {
    currentStyleVariant = styleName;
    document.documentElement.setAttribute('data-style-theme', styleName);
    document.body.setAttribute('data-style-theme', styleName);
    localStorage.setItem('onepiece_style_theme', styleName);

    // Clean legacy mode classes so each of the 4 themes renders with 100% pure styling
    document.body.classList.remove('dark-theme', 'light-theme');
    document.documentElement.classList.remove('dark-theme', 'light-theme');

    document.querySelectorAll('.style-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.style === styleName);
    });

    const styleLabels = {
        yellow: 'مشمس نيوبروتاليزم 🟡',
        cobalt: 'أزرق كهربائي شبكي (Overshoot) 🔵',
        editorial: 'ورق صحفي وختم دائري (Levain) 📰',
        noir: 'دارك تيرمينال كلاسيكي (Terminal Noir) ⚫'
    };

    if (showNotification) {
        showToast(`تم تفعيل الستايل: ${styleLabels[styleName] || styleName}`);
    }
}

function applyViewMode(viewMode) {
    currentView = viewMode;
    linksContainerEl.classList.remove('grid-view', 'list-view', 'ledger-view');
    linksContainerEl.classList.add(`${viewMode}-view`);
    localStorage.setItem('onepiece_view_mode', viewMode);
    document.querySelectorAll('.view-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.view === viewMode);
    });
}

/* ==========================================================================
   HELPERS & STORAGE
   ========================================================================== */
function saveToLocalStorage() {
    localStorage.setItem('onepiece_categories', JSON.stringify(categories));
    localStorage.setItem('onepiece_links', JSON.stringify(links));
    updateStats();
}

// ==========================================================================
// CUSTOM NEO-BRUTALIST INTERNAL DIALOG SYSTEM (CONFIRM & ALERT)
// ==========================================================================
const brutalDialogModalEl = document.getElementById('brutalDialogModal');
const brutalDialogBadgeEl = document.getElementById('brutalDialogBadge');
const brutalDialogIconEl = document.getElementById('brutalDialogIcon');
const brutalDialogTypeLabelEl = document.getElementById('brutalDialogTypeLabel');
const brutalDialogTitleEl = document.getElementById('brutalDialogTitle');
const brutalDialogDescEl = document.getElementById('brutalDialogDesc');
const btnDialogConfirmEl = document.getElementById('btnDialogConfirm');
const btnDialogCancelEl = document.getElementById('btnDialogCancel');
const btnCloseDialogTopEl = document.getElementById('btnCloseDialogTop');

let dialogResolver = null;

function showBrutalConfirm({ title, message, confirmText = 'نعم، متابعة', cancelText = 'إلغاء', type = 'warning' }) {
    return new Promise((resolve) => {
        dialogResolver = resolve;
        brutalDialogTitleEl.textContent = title;
        brutalDialogDescEl.textContent = message;
        btnDialogConfirmEl.textContent = confirmText;
        btnDialogCancelEl.textContent = cancelText;
        btnDialogCancelEl.style.display = 'inline-flex';

        if (type === 'danger') {
            brutalDialogBadgeEl.className = 'brutal-dialog-badge danger';
            brutalDialogIconEl.className = 'fa-solid fa-triangle-exclamation';
            brutalDialogTypeLabelEl.textContent = 'تحذير أمان ⚠️';
            btnDialogConfirmEl.style.background = 'var(--brutal-red)';
            btnDialogConfirmEl.style.color = '#FFFFFF';
        } else {
            brutalDialogBadgeEl.className = 'brutal-dialog-badge';
            brutalDialogIconEl.className = 'fa-solid fa-circle-question';
            brutalDialogTypeLabelEl.textContent = 'تأكيد الإجراء';
            btnDialogConfirmEl.style.background = 'var(--brutal-yellow)';
            btnDialogConfirmEl.style.color = '#000000';
        }

        brutalDialogModalEl.classList.add('active');
        btnDialogConfirmEl.focus();
    });
}

function showBrutalAlert({ title, message, btnText = 'حسناً، فهمت', type = 'info' }) {
    return new Promise((resolve) => {
        dialogResolver = resolve;
        brutalDialogTitleEl.textContent = title;
        brutalDialogDescEl.textContent = message;
        btnDialogConfirmEl.textContent = btnText;
        btnDialogCancelEl.style.display = 'none';

        if (type === 'danger') {
            brutalDialogBadgeEl.className = 'brutal-dialog-badge danger';
            brutalDialogIconEl.className = 'fa-solid fa-circle-exclamation';
            brutalDialogTypeLabelEl.textContent = 'تنبيه هام ⚠️';
            btnDialogConfirmEl.style.background = 'var(--brutal-red)';
            btnDialogConfirmEl.style.color = '#FFFFFF';
        } else {
            brutalDialogBadgeEl.className = 'brutal-dialog-badge';
            brutalDialogIconEl.className = 'fa-solid fa-circle-info';
            brutalDialogTypeLabelEl.textContent = 'معلومة 💡';
            btnDialogConfirmEl.style.background = 'var(--brutal-yellow)';
            btnDialogConfirmEl.style.color = '#000000';
        }

        brutalDialogModalEl.classList.add('active');
        btnDialogConfirmEl.focus();
    });
}

function closeBrutalDialog(result) {
    if (brutalDialogModalEl) brutalDialogModalEl.classList.remove('active');
    if (dialogResolver) {
        dialogResolver(result);
        dialogResolver = null;
    }
}

if (btnDialogConfirmEl) btnDialogConfirmEl.addEventListener('click', () => closeBrutalDialog(true));
if (btnDialogCancelEl) btnDialogCancelEl.addEventListener('click', () => closeBrutalDialog(false));
if (btnCloseDialogTopEl) btnCloseDialogTopEl.addEventListener('click', () => closeBrutalDialog(false));
if (brutalDialogModalEl) {
    brutalDialogModalEl.addEventListener('click', (e) => {
        if (e.target === brutalDialogModalEl) closeBrutalDialog(false);
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && brutalDialogModalEl && brutalDialogModalEl.classList.contains('active')) {
        closeBrutalDialog(false);
    }
});

// Upgraded Neo-Brutalist Sticker Toast with Undo
let toastTimeout = null;
function showToast(message, isError = false, showUndo = false) {
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastMessageEl.textContent = message;
    const badgeIconEl = document.getElementById('toastBadgeIcon');
    const btnToastUndoEl = document.getElementById('btnToastUndo');
    
    if (btnToastUndoEl) {
        btnToastUndoEl.style.display = showUndo ? 'inline-flex' : 'none';
    }

    if (isError) {
        toastEl.classList.add('toast-error');
        if (badgeIconEl) badgeIconEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    } else {
        toastEl.classList.remove('toast-error');
        if (badgeIconEl) badgeIconEl.innerHTML = '<i class="fa-solid fa-check"></i>';
    }

    toastEl.classList.add('active');
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('active');
        if (btnToastUndoEl) btnToastUndoEl.style.display = 'none';
    }, showUndo ? 6000 : 3200);
}

const btnCloseToastEl = document.getElementById('btnCloseToast');
if (btnCloseToastEl) {
    btnCloseToastEl.addEventListener('click', () => {
        if (toastTimeout) clearTimeout(toastTimeout);
        toastEl.classList.remove('active');
        const btnToastUndoEl = document.getElementById('btnToastUndo');
        if (btnToastUndoEl) btnToastUndoEl.style.display = 'none';
    });
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

function highlightText(text, query) {
    if (!text) return '';
    if (!query) return escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark class="search-highlight">$1</mark>');
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* ==========================================================================
   CATEGORIES RENDERING & DRAG-TARGET
   ========================================================================== */
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
                <span title="${escapeHtml(cat.name)}"><bdi>${escapeHtml(cat.name)}</bdi></span>
            </div>
            <div class="category-item-actions">
                <span class="category-badge">${count}</span>
                ${cat.id !== 'all' ? `<button class="btn-del-cat" title="حذف التصنيف" data-id="${cat.id}"><i class="fa-solid fa-xmark"></i></button>` : ''}
            </div>
        `;

        // Click Category
        li.addEventListener('click', (e) => {
            const delBtn = e.target.closest('.btn-del-cat');
            if (delBtn) {
                e.stopPropagation();
                deleteCategory(delBtn.dataset.id);
                return;
            }
            activeCategoryId = cat.id;
            activeTag = 'all';
            renderCategories();
            renderTagsBar();
            renderLinks();
        });

        // Drop target for moving links
        li.addEventListener('dragover', (e) => {
            if (draggedLinkId && cat.id !== 'all') {
                e.preventDefault();
                li.classList.add('category-drag-target');
            }
        });

        li.addEventListener('dragleave', () => {
            li.classList.remove('category-drag-target');
        });

        li.addEventListener('drop', (e) => {
            e.preventDefault();
            li.classList.remove('category-drag-target');
            if (draggedLinkId && cat.id !== 'all') {
                const targetLink = links.find(l => l.id === draggedLinkId);
                if (targetLink && targetLink.category !== cat.id) {
                    targetLink.category = cat.id;
                    saveToLocalStorage();
                    renderCategories();
                    populateCategoryDropdown();
                    renderLinks();
                    showToast(`تم نقل الرابط إلى: "${cat.name}" 🚀`);
                }
            }
        });

        categoriesListEl.appendChild(li);
    });
}

async function deleteCategory(catId) {
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;
    const confirmed = await showBrutalConfirm({
        title: `حذف تصنيف "${cat.name}"؟`,
        message: 'الروابط التي بداخل هذا التصنيف ستظل محفوظة بأمان في (جميع الروابط).',
        confirmText: 'نعم، حذف التصنيف',
        cancelText: 'تراجع',
        type: 'danger'
    });
    if (confirmed) {
        categories = categories.filter(c => c.id !== catId);
        links.forEach(l => {
            if (l.category === catId) l.category = 'web_design';
        });
        if (activeCategoryId === catId) activeCategoryId = 'all';
        saveToLocalStorage();
        renderCategories();
        populateCategoryDropdown();
        renderTagsBar();
        renderLinks();
        showToast('تم حذف التصنيف بنجاح');
    }
}

function populateCategoryDropdown() {
    const linkCategorySelect = document.getElementById('linkCategory');
    const customCategoryOptions = document.getElementById('customCategoryOptions');
    if (!linkCategorySelect) return;

    linkCategorySelect.innerHTML = '';
    if (customCategoryOptions) customCategoryOptions.innerHTML = '';

    const availableCats = categories.filter(c => c.id !== 'all');
    const list = availableCats.length > 0 ? availableCats : [{ id: 'web_design', name: 'عام', icon: 'fa-solid fa-folder' }];

    list.forEach(cat => {
        // Native select option
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = cat.name;
        linkCategorySelect.appendChild(opt);

        // Custom styled option
        if (customCategoryOptions) {
            const customOpt = document.createElement('div');
            customOpt.className = 'brutal-custom-option';
            customOpt.dataset.value = cat.id;
            customOpt.innerHTML = `<i class="${cat.icon || 'fa-solid fa-folder'}"></i><span>${cat.name}</span>`;
            customOpt.addEventListener('click', (e) => {
                e.stopPropagation();
                setCustomCategoryValue(cat.id, cat.name, cat.icon);
                closeCustomCategoryDropdown();
            });
            customCategoryOptions.appendChild(customOpt);
        }
    });
}

/* ==========================================================================
   TAGS FILTERING SYSTEM
   ========================================================================== */
function getAllTags() {
    const tagSet = new Set();
    links.forEach(l => {
        if (Array.isArray(l.tags)) {
            l.tags.forEach(t => {
                const clean = t.trim();
                if (clean) tagSet.add(clean);
            });
        }
    });
    return Array.from(tagSet);
}

function renderTagsBar() {
    if (tagsFilterContainerEl) {
        tagsFilterContainerEl.style.display = 'none';
    }
}

/* ==========================================================================
   LINKS RENDERING & DRAG-AND-DROP REORDERING
   ========================================================================== */
function renderLinks() {
    const currentCat = categories.find(c => c.id === activeCategoryId) || categories[0];
    currentCategoryTitleEl.textContent = searchQuery 
        ? `نتائج البحث عن "${searchQuery}"` 
        : currentCat.name;

    let filteredLinks = links.filter(link => {
        const matchCategory = activeCategoryId === 'all' || link.category === activeCategoryId;
        const matchTag = activeTag === 'all' || (Array.isArray(link.tags) && link.tags.includes(activeTag));
        const matchSearch = !searchQuery || 
            link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            link.url.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (link.desc && link.desc.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (Array.isArray(link.tags) && link.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchCategory && matchTag && matchSearch;
    });

    // Sorting
    if (currentSort === 'clicks') {
        filteredLinks.sort((a, b) => (b.clicks || 0) - (a.clicks || 0));
    } else if (currentSort === 'recent') {
        filteredLinks.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (currentSort === 'title') {
        filteredLinks.sort((a, b) => a.title.localeCompare(b.title));
    }
    // If 'custom', preserves the exact links array order!

    categoryLinksCountEl.textContent = `${filteredLinks.length} روابط`;

    renderPinnedLinks();

    linksContainerEl.innerHTML = '';

    if (filteredLinks.length === 0) {
        emptyStateEl.style.display = 'block';
    } else {
        emptyStateEl.style.display = 'none';
        filteredLinks.forEach((link, idx) => {
            const card = createLinkCard(link, idx);
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
        item.draggable = true;
        item.dataset.id = link.id;

        let iconEl = '';
        if (link.imageType === 'upload' && link.customImageBase64) {
            iconEl = `<img src="${link.customImageBase64}" class="favicon" alt="${link.title}">`;
        } else if (link.imageType === 'url' && link.customImageUrl) {
            iconEl = `<img src="${link.customImageUrl}" class="favicon" alt="${link.title}" onerror="this.src='assets/images/logo.png'">`;
        } else if (link.imageType === 'icon' && link.customIcon) {
            iconEl = `<i class="${link.customIcon} custom-icon"></i>`;
        } else {
            const faviconSrc = getFaviconUrl(link.url);
            iconEl = `<img src="${faviconSrc}" class="favicon" alt="${link.title}" onerror="this.src='assets/images/logo.png'">`;
        }

        item.innerHTML = `
            ${iconEl}
            <span>${link.title}</span>
        `;

        item.addEventListener('click', () => {
            handleLinkClick(link.id, link.url);
        });

        // Drag events on pinned
        item.addEventListener('dragstart', (e) => {
            draggedLinkId = link.id;
            item.classList.add('dragging');
            e.dataTransfer.setData('text/plain', link.id);
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            draggedLinkId = null;
        });

        pinnedGridEl.appendChild(item);
    });
}

function createLinkCard(link, index = 0) {
    const card = document.createElement('div');
    card.className = 'link-card';
    card.draggable = true;
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

    // Tags Badges HTML
    let tagsHtml = '';
    if (Array.isArray(link.tags) && link.tags.length > 0) {
        tagsHtml = `<div class="card-tags-wrap">${link.tags.map(t => `<span class="card-tag-badge">#${escapeHtml(t)}</span>`).join('')}</div>`;
    }

    const highlightedTitle = highlightText(link.title, searchQuery);
    const highlightedDesc = highlightText(link.desc || 'لا يوجد وصف...', searchQuery);
    const indexStr = String(index + 1).padStart(2, '0');

    card.innerHTML = `
        <div class="link-card-top">
            <div class="link-icon-box">
                ${iconHtml}
            </div>
            <div class="link-card-actions">
                <button class="card-action-btn pin-btn ${link.pinned ? 'active' : ''}" title="${link.pinned ? 'إلغاء التثبيت' : 'تثبيت في المفضلة'}" data-action="pin">
                    <i class="fa-solid fa-star"></i>
                </button>
                <button class="card-action-btn peek-btn" title="معاينة سريعة (Quick Peek) 👁️" data-action="peek">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button class="card-action-btn readlater-btn ${isLinkInReadLater(link.id) ? 'active' : ''}" title="${isLinkInReadLater(link.id) ? 'إزالة من قراءة لاحقاً' : 'قراءة لاحقاً (Read Later) 🔖'}" data-action="readlater">
                    <i class="fa-solid fa-bookmark"></i>
                </button>
                <button class="card-action-btn qr-btn" title="رمز QR للموبايل 📱" data-action="qr">
                    <i class="fa-solid fa-qrcode"></i>
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
            <div style="display: flex; align-items: center; gap: 8px;">
                <span class="card-num-idx">${indexStr}</span>
                <h4>${highlightedTitle}</h4>
            </div>
            <span class="link-url-text">${domainText} <span class="health-dot ${getLinkHealthClass(link.id)}" id="healthDot-${link.id}"></span></span>
            <p class="link-desc">${highlightedDesc}</p>
            ${tagsHtml}
        </div>

        <div class="ledger-dotted-leader"></div>

        <div class="link-card-footer">
            <span class="link-card-category">${categoryName}</span>
            <span class="link-card-clicks" title="عدد مرات الفتح">
                <i class="fa-solid fa-compass"></i>
                <span>${link.clicks || 0} نقرة</span>
            </span>
        </div>
    `;

    // Click Card
    card.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('.card-action-btn');
        if (actionBtn) {
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            if (action === 'pin') togglePinLink(link.id);
            if (action === 'peek') openQuickPeekModal(link.id);
            if (action === 'readlater') toggleReadLater(link.id);
            if (action === 'qr') openQrModal(link.id);
            if (action === 'edit') openEditModal(link.id);
            if (action === 'delete') deleteLink(link.id);
            return;
        }

        handleLinkClick(link.id, link.url);
    });

    // Drag & Drop reordering between cards
    card.addEventListener('dragstart', (e) => {
        draggedLinkId = link.id;
        card.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', link.id);
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        document.querySelectorAll('.link-card').forEach(c => c.classList.remove('drag-over'));
        draggedLinkId = null;
    });

    card.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (draggedLinkId && draggedLinkId !== link.id) {
            card.classList.add('drag-over');
        }
    });

    card.addEventListener('dragleave', () => {
        card.classList.remove('drag-over');
    });

    card.addEventListener('drop', (e) => {
        e.preventDefault();
        card.classList.remove('drag-over');
        if (!draggedLinkId || draggedLinkId === link.id) return;

        const fromIndex = links.findIndex(l => l.id === draggedLinkId);
        const toIndex = links.findIndex(l => l.id === link.id);

        if (fromIndex !== -1 && toIndex !== -1) {
            const [movedLink] = links.splice(fromIndex, 1);
            links.splice(toIndex, 0, movedLink);
            currentSort = 'custom';
            sortBySelectEl.value = 'custom';
            saveToLocalStorage();
            renderLinks();
            showToast('تم إعادة ترتيب الروابط بنجاح ✨');
        }
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

let lastDeletedLink = null;

function getTrashLinks() {
    try {
        return JSON.parse(localStorage.getItem('onepiece_trash_links')) || [];
    } catch (e) {
        return [];
    }
}

function saveTrashLinks(trashList) {
    localStorage.setItem('onepiece_trash_links', JSON.stringify(trashList));
}

async function deleteLink(id) {
    const link = links.find(l => l.id === id);
    const confirmed = await showBrutalConfirm({
        title: 'حذف هذا الرابط؟',
        message: link ? `هل أنت متأكد من حذف اختصار "${link.title}" ونقله لسلة المهملات؟` : 'هل تريد حذف هذا الرابط؟',
        confirmText: 'نعم، احذف',
        cancelText: 'إلغاء',
        type: 'danger'
    });
    if (confirmed && link) {
        // Add to trash
        const trash = getTrashLinks();
        trash.unshift({ ...link, deletedAt: new Date().toISOString() });
        saveTrashLinks(trash);
        lastDeletedLink = { ...link };

        links = links.filter(l => l.id !== id);
        saveToLocalStorage();
        renderCategories();
        renderTagsBar();
        renderLinks();
        showToast(`تم حذف "${link.title}" ونقله لسلة المهملات`, false, true);
    }
}

function updateStats() {
    totalLinksCountEl.textContent = links.length;
    const totalClicks = links.reduce((sum, item) => sum + (item.clicks || 0), 0);
    totalClicksCountEl.textContent = totalClicks;
}

/* ==========================================================================
   IMAGE UPLOAD & SELECTION HANDLING
   ========================================================================== */
function updateImageTypeUI(type) {
    if (uploadOptionGroup) uploadOptionGroup.style.display = type === 'upload' ? 'block' : 'none';
    if (urlOptionGroup) urlOptionGroup.style.display = type === 'url' ? 'block' : 'none';
    if (iconOptionGroup) iconOptionGroup.style.display = type === 'icon' ? 'block' : 'none';
}

function selectImageType(type) {
    if (imageSourceType) imageSourceType.value = type;
    document.querySelectorAll('#imageTypeSegmented .segmented-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    updateImageTypeUI(type);
}

function selectCustomIcon(iconClass) {
    const linkCustomIcon = document.getElementById('linkCustomIcon');
    if (linkCustomIcon) linkCustomIcon.value = iconClass;
    document.querySelectorAll('#brutalIconGrid .icon-grid-tile').forEach(tile => {
        tile.classList.toggle('active', tile.dataset.icon === iconClass);
    });
}

function setCustomCategoryValue(catId, catName, catIcon) {
    const linkCategory = document.getElementById('linkCategory');
    if (linkCategory) linkCategory.value = catId;

    const triggerText = document.getElementById('customCategoryTriggerText');
    const matched = categories.find(c => c.id === catId);
    const finalName = catName || matched?.name || 'اختر التصنيف...';
    const finalIcon = catIcon || matched?.icon || 'fa-solid fa-folder';

    if (triggerText) {
        triggerText.innerHTML = `<i class="${finalIcon}"></i><span>${finalName}</span>`;
    }

    document.querySelectorAll('#customCategoryOptions .brutal-custom-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.value === catId);
    });
}

function closeCustomCategoryDropdown() {
    const wrap = document.getElementById('customCategoryWrap');
    if (wrap) wrap.classList.remove('open');
}

// QR Code Modal Functions
let currentQrUrl = '';
function openQrModal(id) {
    const link = links.find(l => l.id === id);
    if (!link) return;

    const qrModal = document.getElementById('qrCodeModal');
    const qrImg = document.getElementById('qrCodeImg');
    const qrTitle = document.getElementById('qrLinkTitle');
    const qrUrl = document.getElementById('qrLinkUrl');

    currentQrUrl = link.url;
    if (qrTitle) qrTitle.textContent = link.title;
    if (qrUrl) qrUrl.textContent = link.url;

    if (qrImg) {
        const encoded = encodeURIComponent(link.url);
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encoded}&margin=8`;
    }

    if (qrModal) qrModal.classList.add('active');
}

function closeQrModal() {
    const qrModal = document.getElementById('qrCodeModal');
    if (qrModal) qrModal.classList.remove('active');
}

imageSourceType.addEventListener('change', (e) => {
    selectImageType(e.target.value);
});

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

/* ==========================================================================
   MODAL: ADD & EDIT LINK
   ========================================================================== */
function openAddModal() {
    linkForm.reset();
    currentUploadedBase64 = null;
    imageUploadPreview.style.display = 'none';
    selectImageType('auto');

    document.getElementById('linkId').value = '';
    document.getElementById('linkTags').value = '';
    document.getElementById('linkModalTitle').innerHTML = '<i class="fa-solid fa-plus-circle"></i> إضافة رابط جديد';
    
    const availableCats = categories.filter(c => c.id !== 'all');
    const defaultCatId = activeCategoryId === 'all' 
        ? (availableCats[0]?.id || 'web_design') 
        : activeCategoryId;
    const defaultCat = categories.find(c => c.id === defaultCatId) || availableCats[0];
    
    setCustomCategoryValue(defaultCatId, defaultCat?.name, defaultCat?.icon);
    selectCustomIcon('fa-solid fa-skull-crossbones');

    linkModal.classList.add('active');
    document.getElementById('linkUrl').focus();
}

function openEditModal(id) {
    const link = links.find(l => l.id === id);
    if (!link) return;

    document.getElementById('linkId').value = link.id;
    document.getElementById('linkUrl').value = link.url;
    document.getElementById('linkTitle').value = link.title;
    document.getElementById('linkDesc').value = link.desc || '';
    document.getElementById('linkPinned').checked = !!link.pinned;
    document.getElementById('linkTags').value = Array.isArray(link.tags) ? link.tags.join(', ') : '';

    const catObj = categories.find(c => c.id === link.category);
    setCustomCategoryValue(link.category, catObj?.name, catObj?.icon);

    const imgType = link.imageType || 'auto';
    selectImageType(imgType);

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

    const iconVal = link.customIcon || 'fa-solid fa-skull-crossbones';
    selectCustomIcon(iconVal);

    document.getElementById('linkModalTitle').innerHTML = '<i class="fa-solid fa-pen"></i> تعديل الرابط';
    linkModal.classList.add('active');
}

function closeLinkModal() {
    linkModal.classList.remove('active');
}

function openCategoryModal() {
    categoryForm.reset();
    document.querySelectorAll('#categoryIconGrid .icon-grid-tile').forEach((t, i) => {
        t.classList.toggle('active', i === 0);
    });
    const catIconInput = document.getElementById('categoryIcon');
    if (catIconInput) catIconInput.value = 'fa-solid fa-folder';
    categoryModal.classList.add('active');
    document.getElementById('categoryName').focus();
}

function closeCategoryModal() {
    categoryModal.classList.remove('active');
}
async function openAllCategoryLinks() {
    const targetLinks = activeCategoryId === 'all'
        ? links
        : links.filter(l => l.category === activeCategoryId);

    if (targetLinks.length === 0) {
        showToast('لا توجد روابط لفتحها!', true);
        return;
    }

    const confirmed = await showBrutalConfirm({
        title: 'فتح جميع الروابط دفعة واحدة؟',
        message: `سيتم فتح (${targetLinks.length}) تبويبات جديدة في متصفحك في نفس اللحظة.`,
        confirmText: 'إطلاق التبويبات 🚀',
        cancelText: 'إلغاء',
        type: 'warning'
    });

    if (confirmed) {
        targetLinks.forEach(l => {
            l.clicks = (l.clicks || 0) + 1;
            window.open(l.url, '_blank');
        });
        saveToLocalStorage();
        renderLinks();
        showToast(`تم فتح ${targetLinks.length} روابط بنجاح! 🚀`);
    }
}

async function clearAllData() {
    const confirmed = await showBrutalConfirm({
        title: '⚠️ تصفير جميع البيانات والبدء من الصفر؟',
        message: 'تحذير: سيتم مسح كافة الروابط والتصنيفات المخصصة تماماً والعودة للحالة الافتراضية.',
        confirmText: 'تصفير الكل الآن',
        cancelText: 'تراجع',
        type: 'danger'
    });

    if (confirmed) {
        links = [];
        categories = [
            { id: 'all', name: 'جميع الروابط', icon: 'fa-solid fa-layer-group' }
        ];
        activeCategoryId = 'all';
        activeTag = 'all';
        saveToLocalStorage();
        renderCategories();
        populateCategoryDropdown();
        renderTagsBar();
        renderLinks();
        showToast('تم تصفير كل شيء بنجاح! يمكنك الآن بناء قوائمك الخاصة.');
    }
}

/* ==========================================================================
   PRODUCTIVITY DRAWER (بومودورو، مهام، ومفكرة سريعة)
   ========================================================================== */
function initProductivityDrawer() {
    // Drawer Open/Close
    btnOpenProductivityEl.addEventListener('click', openProductivityDrawer);
    btnCloseDrawerEl.addEventListener('click', closeProductivityDrawer);
    drawerBackdropEl.addEventListener('click', closeProductivityDrawer);

    // Tabs switching
    document.querySelectorAll('.drawer-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.drawer-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.drawer-tab-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            if (tabId === 'pomodoro') document.getElementById('tabPomodoro').classList.add('active');
            if (tabId === 'todos') document.getElementById('tabTodos').classList.add('active');
            if (tabId === 'notes') document.getElementById('tabNotes').classList.add('active');
        });
    });

    initPomodoro();
    initTodos();
    initNotes();
}

function openProductivityDrawer() {
    productivityDrawerEl.classList.add('active');
    drawerBackdropEl.classList.add('active');
}

function closeProductivityDrawer() {
    productivityDrawerEl.classList.remove('active');
    drawerBackdropEl.classList.remove('active');
}

// 1. Pomodoro Logic
function initPomodoro() {
    const timerDisplayEl = document.getElementById('timerDisplay');
    const timerStatusLabelEl = document.getElementById('timerStatusLabel');
    const timerProgressCircleEl = document.getElementById('timerProgressCircle');
    const btnToggleTimerEl = document.getElementById('btnToggleTimer');
    const btnResetTimerEl = document.getElementById('btnResetTimer');
    const timerPlayIconEl = document.getElementById('timerPlayIcon');
    const timerPlayTextEl = document.getElementById('timerPlayText');
    const pomoSessionsCountEl = document.getElementById('pomoSessionsCount');
    const pomoSoundToggleEl = document.getElementById('pomoSoundToggle');

    pomoSessionsCountEl.textContent = pomoState.completedToday;

    function updatePomoDisplay() {
        const mins = Math.floor(pomoState.remainingSeconds / 60);
        const secs = pomoState.remainingSeconds % 60;
        timerDisplayEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

        // SVG progress ring calculation (circumference = 2 * PI * 88 ~= 552.92)
        const circumference = 552.92;
        const progress = pomoState.remainingSeconds / pomoState.totalSeconds;
        const offset = circumference * (1 - progress);
        timerProgressCircleEl.style.strokeDashoffset = offset;
    }

    // Audio chime using Web Audio API (100% offline, pure synthesized bell)
    function playChimeSound() {
        if (!pomoSoundToggleEl.checked) return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const now = ctx.currentTime;
            
            // Bell chime notes
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.12);
                gain.gain.setValueAtTime(0.3, now + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 1.2);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + i * 0.12);
                osc.stop(now + i * 0.12 + 1.3);
            });
        } catch (e) {
            console.log('AudioContext not allowed or supported', e);
        }
    }

    function startTimer() {
        if (pomoState.isRunning) return;
        pomoState.isRunning = true;
        timerPlayIconEl.className = 'fa-solid fa-pause';
        timerPlayTextEl.textContent = 'إيقاف مؤقت';
        timerStatusLabelEl.textContent = pomoState.mode === 'work' ? 'جاري التركيز... استمر! 🚀' : 'استراحة مستحقة ☕';

        pomoState.intervalId = setInterval(() => {
            if (pomoState.remainingSeconds > 0) {
                pomoState.remainingSeconds--;
                updatePomoDisplay();
            } else {
                clearInterval(pomoState.intervalId);
                pomoState.isRunning = false;
                timerPlayIconEl.className = 'fa-solid fa-play';
                timerPlayTextEl.textContent = 'ابدأ التركيز';
                playChimeSound();

                if (pomoState.mode === 'work') {
                    pomoState.completedToday++;
                    localStorage.setItem('onepiece_pomo_completed', pomoState.completedToday);
                    pomoSessionsCountEl.textContent = pomoState.completedToday;
                    showToast('🎉 أحسنت! اكتملت جلسة التركيز بنجاح!');
                } else {
                    showToast('انتهت الاستراحة! جاهز للعودة؟ 🚀');
                }
            }
        }, 1000);
    }

    function pauseTimer() {
        if (!pomoState.isRunning) return;
        clearInterval(pomoState.intervalId);
        pomoState.isRunning = false;
        timerPlayIconEl.className = 'fa-solid fa-play';
        timerPlayTextEl.textContent = 'متابعة';
        timerStatusLabelEl.textContent = 'المؤقت متوقف مؤقتاً ⏸️';
    }

    function resetTimer() {
        clearInterval(pomoState.intervalId);
        pomoState.isRunning = false;
        pomoState.remainingSeconds = pomoState.totalSeconds;
        timerPlayIconEl.className = 'fa-solid fa-play';
        timerPlayTextEl.textContent = 'ابدأ التركيز';
        timerStatusLabelEl.textContent = 'جاهز للتركيز 🔥';
        updatePomoDisplay();
    }

    btnToggleTimerEl.addEventListener('click', () => {
        if (pomoState.isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    btnResetTimerEl.addEventListener('click', resetTimer);

    // Mode buttons (25m / 5m / 15m)
    document.querySelectorAll('.pomo-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pomo-mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mins = parseInt(btn.dataset.minutes, 10);
            pomoState.mode = mins >= 25 ? 'work' : 'break';
            pomoState.minutes = mins;
            pomoState.totalSeconds = mins * 60;
            resetTimer();
        });
    });

    updatePomoDisplay();
}

// 2. Todos Logic
function initTodos() {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todosListEl = document.getElementById('todosList');
    const todosRemainingText = document.getElementById('todosRemainingText');
    const todosCountBadge = document.getElementById('todosCountBadge');
    const btnClearCompleted = document.getElementById('btnClearCompletedTodos');

    function saveTodos() {
        localStorage.setItem('onepiece_todos', JSON.stringify(todos));
        renderTodosList();
    }

    function renderTodosList() {
        todosListEl.innerHTML = '';
        const remaining = todos.filter(t => !t.done).length;
        todosRemainingText.textContent = `${remaining} مهام متبقية`;
        todosCountBadge.textContent = remaining;

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.done ? 'done' : ''}`;
            li.innerHTML = `
                <div class="todo-item-left">
                    <span class="todo-checkbox">
                        ${todo.done ? '<i class="fa-solid fa-check"></i>' : ''}
                    </span>
                    <span class="todo-text">${escapeHtml(todo.text)}</span>
                </div>
                <button class="todo-del-btn" title="حذف المهمة"><i class="fa-solid fa-xmark"></i></button>
            `;

            li.querySelector('.todo-item-left').addEventListener('click', () => {
                todo.done = !todo.done;
                saveTodos();
            });

            li.querySelector('.todo-del-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                todos = todos.filter(t => t.id !== todo.id);
                saveTodos();
            });

            todosListEl.appendChild(li);
        });
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (!text) return;
        todos.unshift({
            id: Date.now().toString(),
            text,
            done: false
        });
        todoInput.value = '';
        saveTodos();
    });

    btnClearCompleted.addEventListener('click', () => {
        todos = todos.filter(t => !t.done);
        saveTodos();
        showToast('تم حذف المهام المكتملة ✨');
    });

    renderTodosList();
}

// 3. Scratchpad Notes Logic
function initNotes() {
    const textarea = document.getElementById('quickNotesTextarea');
    const statsLabel = document.getElementById('notesStatsLabel');
    const btnCopy = document.getElementById('btnCopyNotes');
    const btnClear = document.getElementById('btnClearNotes');

    textarea.value = notes;

    function updateNotesStats() {
        const val = textarea.value;
        const chars = val.length;
        const words = val.trim() ? val.trim().split(/\s+/).length : 0;
        statsLabel.textContent = `${words} كلمة • ${chars} حرف`;
    }

    textarea.addEventListener('input', () => {
        notes = textarea.value;
        localStorage.setItem('onepiece_notes', notes);
        updateNotesStats();
    });

    btnCopy.addEventListener('click', () => {
        if (!textarea.value.trim()) return;
        navigator.clipboard.writeText(textarea.value).then(() => {
            showToast('تم نسخ الملاحظات إلى الحافظة 📋');
        });
    });

    btnClear.addEventListener('click', async () => {
        if (!textarea.value.trim()) return;
        const confirmed = await showBrutalConfirm({
            title: 'مسح جميع الملاحظات؟',
            message: 'سيتم تفريغ مسودة الملاحظات بالكامل. لا يمكن التراجع عن هذا الإجراء.',
            confirmText: 'نعم، امسح الملاحظات',
            cancelText: 'تراجع',
            type: 'danger'
        });
        if (confirmed) {
            textarea.value = '';
            notes = '';
            localStorage.setItem('onepiece_notes', '');
            updateNotesStats();
            showToast('تم مسح الملاحظات.');
        }
    });

    updateNotesStats();
}

/* ==========================================================================
   ANALYTICS & STATS MODAL (لوحة الإحصائيات المتقدمة)
   ========================================================================== */
function openAnalyticsModal() {
    const totalClicks = links.reduce((sum, item) => sum + (item.clicks || 0), 0);
    const totalLinks = links.length;
    const totalPinned = links.filter(l => l.pinned).length;
    const totalCats = categories.filter(c => c.id !== 'all').length;

    // Numerical stats
    document.getElementById('anTotalLinks').textContent = totalLinks;
    document.getElementById('anTotalClicks').textContent = totalClicks;
    document.getElementById('anTotalPinned').textContent = totalPinned;
    document.getElementById('anTotalCategories').textContent = totalCats;

    // Rank Calculation
    let rankTitle = 'ملاح متدرب 🧭';
    let rankDesc = 'أهلاً بك على متن السفينة! تصفح مواقعك وأضف اختصاراتك لترقية رتبتك.';
    let rankPercent = 20;

    if (totalClicks >= 25 && totalClicks < 80) {
        rankTitle = 'بحار متمرس 🌊';
        rankDesc = 'رائع! بدأت تبحر بثقة واحترافية بين بحار الروابط.';
        rankPercent = 50;
    } else if (totalClicks >= 80 && totalClicks < 200) {
        rankTitle = 'قرصان محترف ⚔️';
        rankDesc = 'إنجاز مذهل! سرعتك في الوصول لمواقعك أصبحت خارقة.';
        rankPercent = 80;
    } else if (totalClicks >= 200) {
        rankTitle = 'قبطان الأسطول 👑';
        rankDesc = 'أنت سيد البحار وأسطورة الإنتاجية بلا منازع!';
        rankPercent = 100;
    }

    document.getElementById('rankBadgeTitle').textContent = rankTitle;
    document.getElementById('rankClicksTotal').textContent = `${totalClicks} نقرة إبحار`;
    document.getElementById('rankDesc').textContent = rankDesc;
    document.getElementById('rankProgressFill').style.width = `${rankPercent}%`;

    // Top 5 Visited Links Chart
    const topLinksListEl = document.getElementById('topLinksChartList');
    topLinksListEl.innerHTML = '';
    const sortedByClicks = [...links].sort((a, b) => (b.clicks || 0) - (a.clicks || 0)).slice(0, 5);
    const maxClicks = Math.max(...sortedByClicks.map(l => l.clicks || 0), 1);

    sortedByClicks.forEach(link => {
        const clicks = link.clicks || 0;
        const pct = Math.round((clicks / maxClicks) * 100);
        const row = document.createElement('div');
        row.className = 'chart-bar-row';
        row.innerHTML = `
            <div class="chart-bar-info">
                <span>${escapeHtml(link.title)}</span>
                <span class="text-primary">${clicks} نقرة</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${pct}%;"></div>
            </div>
        `;
        topLinksListEl.appendChild(row);
    });

    // Categories Distribution Chart
    const categoryDistListEl = document.getElementById('categoryDistList');
    categoryDistListEl.innerHTML = '';
    const validCats = categories.filter(c => c.id !== 'all');

    validCats.forEach(cat => {
        const catCount = links.filter(l => l.category === cat.id).length;
        const pct = totalLinks > 0 ? Math.round((catCount / totalLinks) * 100) : 0;
        const row = document.createElement('div');
        row.className = 'chart-bar-row';
        row.innerHTML = `
            <div class="chart-bar-info">
                <span><i class="${cat.icon || 'fa-solid fa-folder'}"></i> ${escapeHtml(cat.name)}</span>
                <span class="text-muted">${catCount} (${pct}%)</span>
            </div>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${pct}%; background: var(--secondary);"></div>
            </div>
        `;
        categoryDistListEl.appendChild(row);
    });

    analyticsModal.classList.add('active');
}

function closeAnalyticsModal() {
    analyticsModal.classList.remove('active');
}

/* ==========================================================================
   EXPORT CHROME BOOKMARKS HTML (ملف إشارات المتصفح القياسي)
   ========================================================================== */
function exportHtmlBookmarks() {
    let html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
    <DT><H3 ADD_DATE="${Math.floor(Date.now() / 1000)}" LAST_MODIFIED="${Math.floor(Date.now() / 1000)}" PERSONAL_TOOLBAR_FOLDER="true">One Piece Links Hub</H3>
    <DL><p>
`;

    const validCats = categories.filter(c => c.id !== 'all');
    validCats.forEach(cat => {
        const catLinks = links.filter(l => l.category === cat.id);
        if (catLinks.length > 0) {
            html += `        <DT><H3 ADD_DATE="${Math.floor(Date.now() / 1000)}">${escapeHtml(cat.name)}</H3>\n`;
            html += `        <DL><p>\n`;
            catLinks.forEach(link => {
                html += `            <DT><A HREF="${escapeHtml(link.url)}" ADD_DATE="${Math.floor((link.createdAt || Date.now()) / 1000)}">${escapeHtml(link.title)}</A>\n`;
            });
            html += `        </DL><p>\n`;
        }
    });

    html += `    </DL><p>\n</DL><p>\n`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bookmarks_Chrome_OnePiece_${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('تم تصدير ملف Bookmarks متوافق مع Chrome بنجاح! 📑');
}

/* ==========================================================================
   CUSTOM SORT DROPDOWN SYSTEM
   ========================================================================== */
function initCustomSortDropdown() {
    const sortWrap = document.getElementById('sortByCustomWrap');
    const sortTrigger = document.getElementById('sortByCustomTrigger');
    const sortOptions = document.querySelectorAll('#sortByCustomOptions .brutal-custom-option');
    const sortText = document.getElementById('sortByCustomText');
    const sortHiddenInput = document.getElementById('sortBySelect');

    if (sortTrigger && sortWrap) {
        sortTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            sortWrap.classList.toggle('open');
        });
    }

    sortOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const val = opt.dataset.value;
            const label = opt.querySelector('span')?.textContent || opt.textContent;
            if (sortHiddenInput) sortHiddenInput.value = val;
            if (sortText) sortText.textContent = label;
            sortOptions.forEach(o => o.classList.toggle('selected', o === opt));
            if (sortWrap) sortWrap.classList.remove('open');
            currentSort = val;
            renderLinks();
        });
    });

    document.addEventListener('click', (e) => {
        if (sortWrap && !sortWrap.contains(e.target)) {
            sortWrap.classList.remove('open');
        }
    });
}

function closeCustomSortDropdown() {
    const sortWrap = document.getElementById('sortByCustomWrap');
    if (sortWrap) sortWrap.classList.remove('open');
}

/* ==========================================================================
   NEO-BRUTALIST COMMAND PALETTE (CTRL + K)
   ========================================================================== */
const commandPaletteModal = document.getElementById('commandPaletteModal');
const commandPaletteInput = document.getElementById('commandPaletteInput');
const commandPaletteResults = document.getElementById('commandPaletteResults');
let activeCommandIndex = 0;
let commandPaletteItems = [];

const SYSTEM_COMMANDS = [
    { id: 'add_link', title: 'إضافة رابط جديد', desc: 'فتح نافذة إضافة رابط جديد سريعاً', icon: 'fa-solid fa-plus', action: () => openAddModal() },
    { id: 'start_pomo', title: 'بدء مؤقت بومودورو (25د)', desc: 'تشغيل مؤقت التركيز فوراً', icon: 'fa-solid fa-stopwatch', action: () => { openProductivityDrawer(); document.querySelector('.drawer-tab-btn[data-tab="pomodoro"]')?.click(); } },
    { id: 'open_tasks', title: 'عرض مهام اليوم', desc: 'فتح قائمة المهام اليومية والإنتاجية', icon: 'fa-solid fa-list-check', action: () => { openProductivityDrawer(); document.querySelector('.drawer-tab-btn[data-tab="todos"]')?.click(); } },
    { id: 'open_notes', title: 'فتح المفكرة السريعة', desc: 'كتابة أفكار وملاحظات عاجلة', icon: 'fa-solid fa-pen-to-square', action: () => { openProductivityDrawer(); document.querySelector('.drawer-tab-btn[data-tab="notes"]')?.click(); } },
    { id: 'theme_yellow', title: 'تفعيل النمط المشمس (Sunny Studio)', desc: 'الستايل النيوبروتاليزم الأصفر الكلاسيكي', icon: 'fa-solid fa-sun text-warning', action: () => applyStyleVariant('yellow', true) },
    { id: 'theme_cobalt', title: 'تفعيل النمط الأزرق (Overshoot Cobalt)', desc: 'الخلفية الزرقاء الملكية الهندسية', icon: 'fa-solid fa-bolt text-primary', action: () => applyStyleVariant('cobalt', true) },
    { id: 'theme_editorial', title: 'تفعيل النمط الصحفي (Editorial Press)', desc: 'الورق الصحفي العتيق وأختام الطباعة', icon: 'fa-solid fa-newspaper text-danger', action: () => applyStyleVariant('editorial', true) },
    { id: 'theme_noir', title: 'تفعيل نمط نوار السيادي (Terminal Noir)', desc: 'الوضع الداكن السيبراني مع النيون الفسفوري', icon: 'fa-solid fa-terminal text-success', action: () => applyStyleVariant('noir', true) },
    { id: 'export_json', title: 'تصدير نسخة احتياطية (JSON)', desc: 'تحميل ملف كامل لكافة روابطك وتصنيفاتك', icon: 'fa-solid fa-download', action: () => document.getElementById('btnExportData')?.click() },
    { id: 'open_analytics', title: 'لوحة الإحصائيات والرتبة', desc: 'معرفة أكثر الروابط نقراً ورتبة سفينتك', icon: 'fa-solid fa-chart-pie', action: () => openAnalyticsModal() }
];

function openCommandPalette() {
    if (!commandPaletteModal) return;
    commandPaletteModal.classList.add('active');
    if (commandPaletteInput) {
        commandPaletteInput.value = '';
        commandPaletteInput.focus();
    }
    activeCommandIndex = 0;
    renderCommandPaletteResults('');
}

function closeCommandPalette() {
    if (commandPaletteModal) commandPaletteModal.classList.remove('active');
}

function renderCommandPaletteResults(filter = '') {
    if (!commandPaletteResults) return;
    const q = filter.trim().toLowerCase();
    commandPaletteResults.innerHTML = '';
    commandPaletteItems = [];

    // Filtered system commands
    const matchedCmds = SYSTEM_COMMANDS.filter(cmd => 
        cmd.title.toLowerCase().includes(q) || cmd.desc.toLowerCase().includes(q)
    );

    // Filtered links
    const matchedLinks = q ? links.filter(l => 
        l.title.toLowerCase().includes(q) || l.url.toLowerCase().includes(q) || (l.desc && l.desc.toLowerCase().includes(q))
    ).slice(0, 8) : [];

    if (matchedCmds.length === 0 && matchedLinks.length === 0) {
        commandPaletteResults.innerHTML = `
            <div style="padding: 24px; text-align: center; color: var(--text-muted); font-weight: 800;">
                <i class="fa-solid fa-compass" style="font-size: 1.8rem; margin-bottom: 8px; display: block; color: var(--brutal-yellow);"></i>
                لا توجد نتائج مطابقة لـ "${filter}"
            </div>
        `;
        return;
    }

    if (matchedCmds.length > 0) {
        const groupTitle = document.createElement('div');
        groupTitle.className = 'command-group-title';
        groupTitle.textContent = 'إجراءات وأوامر سريعة';
        commandPaletteResults.appendChild(groupTitle);

        matchedCmds.forEach(cmd => {
            const item = document.createElement('div');
            item.className = 'command-item';
            item.innerHTML = `
                <div class="command-item-left">
                    <span class="command-item-icon"><i class="${cmd.icon}"></i></span>
                    <div class="command-item-info">
                        <span class="command-item-title">${cmd.title}</span>
                        <span class="command-item-desc">${cmd.desc}</span>
                    </div>
                </div>
                <span class="command-item-shortcut">إجراء</span>
            `;
            item.addEventListener('click', () => {
                closeCommandPalette();
                cmd.action();
            });
            commandPaletteResults.appendChild(item);
            commandPaletteItems.push({ el: item, run: () => { closeCommandPalette(); cmd.action(); } });
        });
    }

    if (matchedLinks.length > 0) {
        const groupTitle = document.createElement('div');
        groupTitle.className = 'command-group-title';
        groupTitle.textContent = 'روابطك المحفوظة';
        commandPaletteResults.appendChild(groupTitle);

        matchedLinks.forEach(link => {
            const item = document.createElement('div');
            item.className = 'command-item';
            const iconClass = link.customIcon || 'fa-solid fa-globe';
            item.innerHTML = `
                <div class="command-item-left">
                    <span class="command-item-icon"><i class="${iconClass}"></i></span>
                    <div class="command-item-info">
                        <span class="command-item-title">${link.title}</span>
                        <span class="command-item-desc">${link.url}</span>
                    </div>
                </div>
                <span class="command-item-shortcut">فتح رابط ↗</span>
            `;
            item.addEventListener('click', () => {
                closeCommandPalette();
                handleLinkClick(link.id, link.url);
            });
            commandPaletteResults.appendChild(item);
            commandPaletteItems.push({ el: item, run: () => { closeCommandPalette(); handleLinkClick(link.id, link.url); } });
        });
    }

    updateActiveCommandItem();
}

function updateActiveCommandItem() {
    commandPaletteItems.forEach((item, idx) => {
        item.el.classList.toggle('active', idx === activeCommandIndex);
        if (idx === activeCommandIndex) {
            item.el.scrollIntoView({ block: 'nearest' });
        }
    });
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
    // Search input
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

    // Enter in search bar
    searchInputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInputEl.value.trim();
            if (query && linksContainerEl.children.length === 0) {
                // If no local link matched, default to Google search
                window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
            }
        }
    });

    // Quick Web Search Engines Pills
    document.querySelectorAll('.engine-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const engine = pill.dataset.engine;
            const query = searchInputEl.value.trim();
            let targetUrl = 'https://www.google.com';

            if (engine === 'google') {
                targetUrl = query ? `https://www.google.com/search?q=${encodeURIComponent(query)}` : 'https://www.google.com';
            } else if (engine === 'youtube') {
                targetUrl = query ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}` : 'https://www.youtube.com';
            } else if (engine === 'chatgpt') {
                targetUrl = query ? `https://chatgpt.com/?q=${encodeURIComponent(query)}` : 'https://chatgpt.com';
            } else if (engine === 'github') {
                targetUrl = query ? `https://github.com/search?q=${encodeURIComponent(query)}` : 'https://github.com';
            } else if (engine === 'wikipedia') {
                targetUrl = query ? `https://ar.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}` : 'https://ar.wikipedia.org';
            }

            window.open(targetUrl, '_blank', 'noopener,noreferrer');
        });
    });

    // Theme Selector Dropdown (guarded for backward compatibility)
    if (themeDropdownBtnEl && themeDropdownWrapperEl) {
        themeDropdownBtnEl.addEventListener('click', (e) => {
            e.stopPropagation();
            themeDropdownWrapperEl.classList.toggle('open');
        });

        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const theme = opt.dataset.theme;
                applyTheme(theme, currentMode, true);
                themeDropdownWrapperEl.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (themeDropdownWrapperEl && !themeDropdownWrapperEl.contains(e.target)) {
                themeDropdownWrapperEl.classList.remove('open');
            }
        });
    }

    // Interactive Yellow Button: Slash key button in search bar
    const btnSearchSlash = document.getElementById('btnSearchSlash');
    if (btnSearchSlash) {
        btnSearchSlash.addEventListener('click', () => {
            searchInputEl.focus();
            searchInputEl.select();
            showToast('جاهز للبحث السريع! 🔍');
        });
    }

    // Interactive Yellow Button: Hero Stamp Badge Scroll Down
    const brutalStampBadge = document.getElementById('brutalStampBadge');
    if (brutalStampBadge) {
        brutalStampBadge.addEventListener('click', () => {
            const target = document.getElementById('linksContainer') || document.getElementById('currentCategoryTitle');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                showToast('انتقال سريع إلى الروابط ⚓');
            }
        });
    }

    // Command Palette Trigger Buttons
    const btnOpenCommandPalette = document.getElementById('btnOpenCommandPalette');
    if (btnOpenCommandPalette) {
        btnOpenCommandPalette.addEventListener('click', openCommandPalette);
    }
    const btnEscCommand = document.getElementById('btnEscCommand');
    if (btnEscCommand) {
        btnEscCommand.addEventListener('click', closeCommandPalette);
    }

    // Segmented pills for image source
    document.querySelectorAll('#imageTypeSegmented .segmented-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectImageType(btn.dataset.type);
        });
    });

    // Custom Category Dropdown Trigger
    const customCategoryWrap = document.getElementById('customCategoryWrap');
    const customCategoryTrigger = document.getElementById('customCategoryTrigger');
    if (customCategoryTrigger && customCategoryWrap) {
        customCategoryTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            customCategoryWrap.classList.toggle('open');
        });
    }

    // Custom Category Modal Icon Grid
    document.querySelectorAll('#categoryIconGrid .icon-grid-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            document.querySelectorAll('#categoryIconGrid .icon-grid-tile').forEach(t => t.classList.remove('active'));
            tile.classList.add('active');
            const catIconInput = document.getElementById('categoryIcon');
            if (catIconInput) catIconInput.value = tile.dataset.icon;
        });
    });

    // Custom Icon Grid Tiles (Link Modal)
    document.querySelectorAll('#brutalIconGrid .icon-grid-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            selectCustomIcon(tile.dataset.icon);
        });
    });

    // Close custom category dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (customCategoryWrap && !customCategoryWrap.contains(e.target)) {
            customCategoryWrap.classList.remove('open');
        }
    });

    // QR Modal Controls
    const btnCloseQrModal = document.getElementById('btnCloseQrModal');
    const btnCloseQrModalBottom = document.getElementById('btnCloseQrModalBottom');
    const btnCopyQrUrl = document.getElementById('btnCopyQrUrl');
    if (btnCloseQrModal) btnCloseQrModal.addEventListener('click', closeQrModal);
    if (btnCloseQrModalBottom) btnCloseQrModalBottom.addEventListener('click', closeQrModal);
    if (btnCopyQrUrl) {
        btnCopyQrUrl.addEventListener('click', () => {
            if (currentQrUrl) {
                navigator.clipboard.writeText(currentQrUrl).then(() => {
                    showToast('تم نسخ الرابط بنجاح! 📋');
                }).catch(() => {
                    showToast('تعذر النسخ تلقائياً', true);
                });
            }
        });
    }

    // Modal Overlays click outside to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Keyboard Shortcuts (Ctrl+K, '/', Escape)
    window.addEventListener('keydown', (e) => {
        // Ctrl + K or Cmd + K for Command Palette
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            openCommandPalette();
            return;
        }

        if (e.key === '/' && document.activeElement !== searchInputEl && !linkModal.classList.contains('active') && !commandPaletteModal?.classList.contains('active')) {
            e.preventDefault();
            searchInputEl.focus();
            searchInputEl.select();
        }

        if (e.key === 'Escape') {
            closeLinkModal();
            closeCategoryModal();
            closeAnalyticsModal();
            closeProductivityDrawer();
            closeQrModal();
            closeCustomCategoryDropdown();
            closeCustomSortDropdown();
            closeCommandPalette();
        }
    });

    // Sort & View options
    if (sortBySelectEl) {
        sortBySelectEl.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderLinks();
        });
    }

    // Style Variants Studio pills click
    document.querySelectorAll('.style-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            applyStyleVariant(pill.dataset.style, true);
        });
    });

    // View options (Grid, List, Ledger)
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyViewMode(btn.dataset.view);
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

    document.getElementById('btnOpenAnalytics').addEventListener('click', openAnalyticsModal);
    document.getElementById('sidebarStatsCard').addEventListener('click', openAnalyticsModal);
    document.getElementById('btnCloseAnalyticsModal').addEventListener('click', closeAnalyticsModal);

    quickLaunchCategoryBtnEl.addEventListener('click', openAllCategoryLinks);
    document.getElementById('btnClearAllData').addEventListener('click', clearAllData);

    const btnHeroPomo = document.getElementById('btnHeroPomo');
    if (btnHeroPomo) {
        btnHeroPomo.addEventListener('click', () => {
            openProductivityDrawer();
            document.querySelector('.drawer-tab-btn[data-tab="pomodoro"]')?.click();
        });
    }
    const btnHeroTasks = document.getElementById('btnHeroTasks');
    if (btnHeroTasks) {
        btnHeroTasks.addEventListener('click', () => {
            openProductivityDrawer();
            document.querySelector('.drawer-tab-btn[data-tab="todos"]')?.click();
        });
    }

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
        if (!category) category = 'web_design';
        const desc = document.getElementById('linkDesc').value.trim();
        const pinned = document.getElementById('linkPinned').checked;
        const imgType = imageSourceType.value;
        const customIcon = document.getElementById('linkCustomIcon').value;
        const customImageUrl = linkImageUrl.value.trim();
        
        // Parse Tags
        const tagsInputVal = document.getElementById('linkTags').value.trim();
        const tags = tagsInputVal 
            ? tagsInputVal.split(/[,،]/).map(t => t.trim().replace(/^#/, '')).filter(t => t) 
            : [];

        if (id) {
            // Edit
            const link = links.find(l => l.id === id);
            if (link) {
                link.url = url;
                link.title = title;
                link.category = category;
                link.desc = desc;
                link.pinned = pinned;
                link.tags = tags;
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
                tags,
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
        renderTagsBar();
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

    // Export JSON Data
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
        a.download = `OnePiece_Backup_${new Date().toISOString().slice(0, 10)}.json`;
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
        reader.onload = async (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.links && Array.isArray(data.links)) {
                    const doMerge = await showBrutalConfirm({
                        title: 'طريقة استيراد البيانات 📥',
                        message: 'هل تريد دمج الروابط والتصنيفات الجديدة مع بياناتك الحالية، أم استبدالها بالكامل؟',
                        confirmText: 'دمج الروابط (Merge)',
                        cancelText: 'استبدال الكل (Replace)',
                        type: 'warning'
                    });
                    if (doMerge) {
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
                    renderTagsBar();
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

/* ==========================================================================
   FEATURE 1: SMART READ-LATER QUEUE & SHELF (خزانة قراءة لاحقاً)
   ========================================================================== */
let readLaterList = [];
try {
    const saved = localStorage.getItem('onepiece_read_later');
    readLaterList = saved ? JSON.parse(saved) : [];
} catch(e) { readLaterList = []; }

function isLinkInReadLater(linkId) {
    return readLaterList.some(item => item.id === linkId);
}

function toggleReadLater(linkId) {
    const link = links.find(l => l.id === linkId);
    if (!link) return;
    const existingIndex = readLaterList.findIndex(item => item.id === linkId);
    if (existingIndex > -1) {
        readLaterList.splice(existingIndex, 1);
        showToast(`تمت إزالة "${link.title}" من قراءة لاحقاً`);
    } else {
        const estMin = Math.max(1, Math.round(((link.desc || '').length + (link.title || '').length) / 80) + 1);
        readLaterList.unshift({
            id: link.id,
            title: link.title,
            url: link.url,
            domain: formatUrlDomain(link.url),
            addedAt: Date.now(),
            estimatedMinutes: estMin
        });
        showToast(`🔖 تمت إضافة "${link.title}" إلى قراءة لاحقاً (~${estMin} دقيقة قراءة)`);
    }
    saveReadLaterList();
    updateReadLaterBadge();
    renderLinks();
    if (document.getElementById('readLaterShelfModal')?.classList.contains('active')) {
        renderReadLaterShelf();
    }
}

function saveReadLaterList() {
    localStorage.setItem('onepiece_read_later', JSON.stringify(readLaterList));
}

function updateReadLaterBadge() {
    const badge = document.getElementById('readLaterBadgeCount');
    if (!badge) return;
    const count = readLaterList.length;
    badge.textContent = count;
    badge.classList.toggle('has-items', count > 0);
}

function openReadLaterShelf() {
    const modal = document.getElementById('readLaterShelfModal');
    if (!modal) return;
    renderReadLaterShelf();
    openModal(modal);
}

function closeReadLaterShelf() {
    const modal = document.getElementById('readLaterShelfModal');
    if (modal) closeModal(modal);
}

function renderReadLaterShelf() {
    const listEl = document.getElementById('shelfLinksList');
    if (!listEl) return;
    if (readLaterList.length === 0) {
        listEl.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-bookmark" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--brutal-yellow);"></i>
                <h4 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 6px;">خزانتك فارغة حالياً</h4>
                <p style="font-size: 0.85rem;">اضغط على أيقونة 🔖 في أي كارت رابط لحفظه هنا وقراءته لاحقاً دون تشتيت.</p>
            </div>
        `;
        return;
    }

    listEl.innerHTML = readLaterList.map(item => {
        const faviconSrc = getFaviconUrl(item.url);
        return `
            <div class="shelf-item" data-id="${item.id}">
                <div class="shelf-item-info">
                    <img src="${faviconSrc}" class="shelf-item-favicon" alt="" onerror="this.src='assets/images/logo.png'">
                    <div class="shelf-item-text">
                        <span class="shelf-item-title">${escapeHtml(item.title)}</span>
                        <div class="shelf-item-meta">
                            <span class="reading-time-pill"><i class="fa-solid fa-clock"></i> ~${item.estimatedMinutes || 2} د</span>
                            <span class="shelf-item-domain">${escapeHtml(item.domain)}</span>
                        </div>
                    </div>
                </div>
                <div class="shelf-actions">
                    <button type="button" class="shelf-btn shelf-btn-open" onclick="handleLinkClick('${item.id}', '${escapeHtml(item.url)}')">
                        <span>إبحار</span> <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                    <button type="button" class="shelf-btn shelf-btn-done" onclick="markReadLaterDone('${item.id}')" title="تمت القراءة">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function markReadLaterDone(id) {
    const idx = readLaterList.findIndex(i => i.id === id);
    if (idx > -1) {
        const item = readLaterList.splice(idx, 1)[0];
        saveReadLaterList();
        updateReadLaterBadge();
        renderReadLaterShelf();
        renderLinks();
        showToast(`✅ أحسنت! تمت قراءة "${item.title}" وإزالتها من القائمة.`);
    }
}

function clearReadLaterShelf() {
    if (readLaterList.length === 0) return;
    readLaterList = [];
    saveReadLaterList();
    updateReadLaterBadge();
    renderReadLaterShelf();
    renderLinks();
    showToast('تم إفراغ خزانة قراءة لاحقاً بالكامل');
}

function initReadLaterSystem() {
    updateReadLaterBadge();
    document.getElementById('btnOpenReadLater')?.addEventListener('click', openReadLaterShelf);
    document.getElementById('btnCloseReadLater')?.addEventListener('click', closeReadLaterShelf);
    document.getElementById('btnCloseReadLaterBottom')?.addEventListener('click', closeReadLaterShelf);
    document.getElementById('btnClearReadLater')?.addEventListener('click', async () => {
        const confirmed = await showBrutalConfirm({
            title: 'إفراغ خزانة القراءة',
            message: 'هل تريد حذف جميع الروابط المحفوظة للقراءة لاحقاً؟',
            confirmText: 'نعم، إفراغ الخزانة',
            cancelText: 'إلغاء',
            type: 'warning'
        });
        if (confirmed) clearReadLaterShelf();
    });
}

/* ==========================================================================
   FEATURE 2: LIVE LINK HEALTH CHECKER (فاحص سلامة الروابط التلقائي)
   ========================================================================== */
let linkHealthCache = {};

function getLinkHealthClass(linkId) {
    return linkHealthCache[linkId] || '';
}

function initHealthCheckerSystem() {
    document.getElementById('btnCheckLinkHealth')?.addEventListener('click', openHealthCheckerModal);
    document.getElementById('btnCloseHealthCheck')?.addEventListener('click', closeHealthCheckerModal);
    document.getElementById('btnCloseHealthCheckBottom')?.addEventListener('click', closeHealthCheckerModal);
    document.getElementById('btnStartHealthScan')?.addEventListener('click', runFullHealthScan);
}

function openHealthCheckerModal() {
    const modal = document.getElementById('healthCheckModal');
    if (!modal) return;
    openModal(modal);
}

function closeHealthCheckerModal() {
    const modal = document.getElementById('healthCheckModal');
    if (modal) closeModal(modal);
}

async function runFullHealthScan() {
    const btn = document.getElementById('btnStartHealthScan');
    const statusText = document.getElementById('healthScanStatusText');
    const passCountEl = document.getElementById('healthPassCount');
    const failCountEl = document.getElementById('healthFailCount');
    const progressFill = document.getElementById('healthProgressFill');
    const resultsList = document.getElementById('healthResultsList');

    if (!btn || !links.length) return;
    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> جارٍ الفحص...`;
    let passed = 0;
    let failed = 0;
    resultsList.innerHTML = '';
    progressFill.style.width = '0%';

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        statusText.textContent = `جارٍ فحص (${i + 1}/${links.length}): ${link.title}`;
        let isHealthy = true;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3200);
            await fetch(link.url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' });
            clearTimeout(timeoutId);
            isHealthy = true;
        } catch (err) {
            if (err.name === 'AbortError') {
                isHealthy = false;
            } else {
                isHealthy = true;
            }
        }

        if (isHealthy) {
            passed++;
            linkHealthCache[link.id] = 'healthy';
        } else {
            failed++;
            linkHealthCache[link.id] = 'warning';
        }

        passCountEl.textContent = passed;
        failCountEl.textContent = failed;
        progressFill.style.width = `${Math.round(((i + 1) / links.length) * 100)}%`;

        const row = document.createElement('div');
        row.className = 'shelf-item';
        row.innerHTML = `
            <div class="shelf-item-info">
                <span class="health-dot ${isHealthy ? 'healthy' : 'warning'}"></span>
                <span class="shelf-item-title">${escapeHtml(link.title)}</span>
                <span class="shelf-item-domain">${escapeHtml(formatUrlDomain(link.url))}</span>
            </div>
            <span class="reading-time-pill" style="background: ${isHealthy ? '#22C55E' : '#EF4444'}; color: #FFF;">
                ${isHealthy ? 'متصل 🟢' : 'بطيء / معطل 🔴'}
            </span>
        `;
        resultsList.appendChild(row);

        const dot = document.getElementById(`healthDot-${link.id}`);
        if (dot) dot.className = `health-dot ${isHealthy ? 'healthy' : 'warning'}`;
    }

    statusText.textContent = `اكتمل الفحص: ${passed} رابط نشط 🟢 • ${failed} بحاجة لمراجعة 🔴`;
    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> إعادة الفحص`;
    showToast(`اكتمل فحص ${links.length} رابط!`);
}

/* ==========================================================================
   FEATURE 3: BOOKMARKS HTML IMPORTER (مستورد علامات المتصفح)
   ========================================================================== */
let parsedBookmarksData = { categories: [], links: [] };

function initBookmarksImporterSystem() {
    const btn = document.getElementById('btnImportBookmarks');
    const fileInput = document.getElementById('bookmarksHtmlFileInput');
    const dropZone = document.getElementById('bookmarksDropZone');
    const modal = document.getElementById('bookmarksImportModal');
    const btnClose = document.getElementById('btnCloseBookmarksImport');
    const btnCancel = document.getElementById('btnCancelBookmarksImport');
    const btnConfirm = document.getElementById('btnConfirmBookmarksImport');

    if (!btn || !modal) return;

    btn.addEventListener('click', () => {
        parsedBookmarksData = { categories: [], links: [] };
        document.getElementById('bookmarksPreviewCard')?.classList.remove('visible');
        if (btnConfirm) btnConfirm.disabled = true;
        openModal(modal);
    });

    btnClose?.addEventListener('click', () => closeModal(modal));
    btnCancel?.addEventListener('click', () => closeModal(modal));

    dropZone?.addEventListener('click', () => fileInput?.click());

    dropZone?.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone?.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone?.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleBookmarksHtmlFile(e.dataTransfer.files[0]);
        }
    });

    fileInput?.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handleBookmarksHtmlFile(e.target.files[0]);
        }
    });

    btnConfirm?.addEventListener('click', () => {
        if (!parsedBookmarksData.links.length) return;

        parsedBookmarksData.categories.forEach(newCat => {
            if (!categories.some(c => c.name.toLowerCase() === newCat.name.toLowerCase())) {
                categories.push(newCat);
            }
        });

        const existingUrls = new Set(links.map(l => l.url.toLowerCase()));
        let importedCount = 0;
        parsedBookmarksData.links.forEach(newLink => {
            if (!existingUrls.has(newLink.url.toLowerCase())) {
                const matchedCat = categories.find(c => c.name === newLink.categoryName);
                newLink.category = matchedCat ? matchedCat.id : 'cat-general';
                links.push(newLink);
                existingUrls.add(newLink.url.toLowerCase());
                importedCount++;
            }
        });

        saveToLocalStorage();
        renderCategories();
        populateCategoryDropdown();
        renderTagsBar();
        renderLinks();
        closeModal(modal);
        showToast(`🚀 تم استيراد وتصنيف ${importedCount} رابط جديد من متصفحك!`);
    });
}

function handleBookmarksHtmlFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        parsedBookmarksData = parseNetscapeBookmarks(content);
        const previewCard = document.getElementById('bookmarksPreviewCard');
        const foundFolders = document.getElementById('importFoundFolders');
        const foundLinks = document.getElementById('importFoundLinks');
        const btnConfirm = document.getElementById('btnConfirmBookmarksImport');

        if (foundFolders) foundFolders.textContent = parsedBookmarksData.categories.length;
        if (foundLinks) foundLinks.textContent = parsedBookmarksData.links.length;
        if (previewCard) previewCard.classList.add('visible');
        if (btnConfirm) btnConfirm.disabled = parsedBookmarksData.links.length === 0;

        if (parsedBookmarksData.links.length > 0) {
            showToast(`تم تحليل الملف: ${parsedBookmarksData.links.length} رابط جاهز للاستيراد!`);
        } else {
            showToast('لم يتم العثور على روابط صالحة في الملف.', true);
        }
    };
    reader.readAsText(file);
}

function parseNetscapeBookmarks(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const catList = [];
    const linkList = [];

    const h3Elements = doc.querySelectorAll('h3');
    h3Elements.forEach(h3 => {
        const folderName = h3.textContent.trim();
        if (!folderName || folderName === 'Bookmarks Bar' || folderName === 'Other Bookmarks') return;
        const catId = 'cat-imported-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
        catList.push({
            id: catId,
            name: folderName,
            icon: 'fa-solid fa-folder'
        });
    });

    const aElements = doc.querySelectorAll('a[href]');
    aElements.forEach(a => {
        const url = a.getAttribute('href');
        const title = a.textContent.trim() || url;
        if (!url || url.startsWith('javascript:') || url.startsWith('place:')) return;

        let folderName = 'عام';
        let parentDl = a.closest('dl');
        if (parentDl) {
            let prevH3 = parentDl.previousElementSibling;
            if (prevH3 && prevH3.tagName.toLowerCase() === 'h3') {
                folderName = prevH3.textContent.trim();
            }
        }

        linkList.push({
            id: 'link-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
            title: title.slice(0, 80),
            url: url,
            desc: a.getAttribute('description') || '',
            categoryName: folderName,
            category: 'cat-general',
            imageType: 'auto',
            customImageBase64: '',
            customImageUrl: '',
            customIcon: '',
            clicks: 0,
            pinned: false,
            tags: [folderName.toLowerCase().replace(/\s+/g, '-')],
            createdAt: Date.now()
        });
    });

    return { categories: catList, links: linkList };
}

/* ==========================================================================
   FEATURE 4: DAILY COCKPIT & FOCUS STREAK WIDGET (ويدجت الكوكتيل والساعة وسلسلة التركيز)
   ========================================================================== */
const PIRATE_QUOTES = [
    { quote: "إذا لم تغامر، فلن تصنع مستقبلك أبداً!", author: "مونكي دي لوفي" },
    { quote: "الجرح في ظهر السياف عارٌ لا يغتفر!", author: "رورونوا زورو" },
    { quote: "أحلام الرجال... ليس لها نهاية!", author: "مارشال دي تيتش" },
    { quote: "توقف عن حساب ما خسرته، وركّز على ما تبقى معك!", author: "جينبي" },
    { quote: "العالم ينتظر أولئك الذين يجرؤون على الإبحار في العواصف!", author: "شانكس ذو الشعر الأحمر" },
    { quote: "لا توجد قوة في هذا البحر تستطيع إيقاف رجل يسعى وراء حريته!", author: "إدوارد نيوجيت (اللحية البيضاء)" }
];

function initDailyCockpitSystem() {
    updateCockpitClock();
    setInterval(updateCockpitClock, 1000);
    updateCockpitDate();
    updateCockpitStreak();
    rotatePirateQuote();

    document.getElementById('cockpitQuoteBar')?.addEventListener('click', rotatePirateQuote);
}

function updateCockpitClock() {
    const clockEl = document.getElementById('cockpitLiveClock');
    if (!clockEl) return;
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('ar-EG', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

function updateCockpitDate() {
    const dateEl = document.getElementById('cockpitLiveDate');
    if (!dateEl) return;
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('ar-EG', options);
}

function updateCockpitStreak() {
    const streakEl = document.getElementById('cockpitStreakText');
    if (!streakEl) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastVisit = localStorage.getItem('onepiece_last_visit_date');
    let streak = parseInt(localStorage.getItem('onepiece_daily_streak') || '1', 10);

    if (lastVisit) {
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        if (lastVisit === yesterday) {
            streak++;
            localStorage.setItem('onepiece_daily_streak', streak);
            localStorage.setItem('onepiece_last_visit_date', todayStr);
        } else if (lastVisit !== todayStr) {
            streak = 1;
            localStorage.setItem('onepiece_daily_streak', '1');
            localStorage.setItem('onepiece_last_visit_date', todayStr);
        }
    } else {
        localStorage.setItem('onepiece_last_visit_date', todayStr);
        localStorage.setItem('onepiece_daily_streak', '1');
    }

    streakEl.textContent = `${streak} ${streak > 1 ? 'أيام متتالية' : 'يوم متتالي'} 🔥`;
}

function rotatePirateQuote() {
    const quoteEl = document.getElementById('cockpitQuoteText');
    if (!quoteEl) return;
    const rand = PIRATE_QUOTES[Math.floor(Math.random() * PIRATE_QUOTES.length)];
    quoteEl.textContent = `"${rand.quote}" — ${rand.author}`;
}

/* ==========================================================================
   FEATURE 5: QUICK PEEK MODAL (بطاقة المعاينة الذكية السريعة)
   ========================================================================== */
let currentQuickPeekLinkId = null;

function initQuickPeekSystem() {
    const modal = document.getElementById('quickPeekModal');
    document.getElementById('btnCloseQuickPeek')?.addEventListener('click', () => closeModal(modal));
    document.getElementById('btnQuickPeekCopy')?.addEventListener('click', () => {
        if (!currentQuickPeekLinkId) return;
        const link = links.find(l => l.id === currentQuickPeekLinkId);
        if (link) {
            navigator.clipboard.writeText(link.url);
            showToast('تم نسخ الرابط إلى الحافظة! 📋');
        }
    });
    document.getElementById('btnQuickPeekReadLater')?.addEventListener('click', () => {
        if (!currentQuickPeekLinkId) return;
        toggleReadLater(currentQuickPeekLinkId);
        const readLaterBtn = document.getElementById('btnQuickPeekReadLater');
        const isSaved = isLinkInReadLater(currentQuickPeekLinkId);
        if (readLaterBtn) {
            readLaterBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${isSaved ? 'إزالة من قراءة لاحقاً' : 'قراءة لاحقاً'}`;
        }
    });
}

function openQuickPeekModal(linkId) {
    currentQuickPeekLinkId = linkId;
    const modal = document.getElementById('quickPeekModal');
    const body = document.getElementById('quickPeekModalBody');
    const launchBtn = document.getElementById('btnQuickPeekLaunch');
    const readLaterBtn = document.getElementById('btnQuickPeekReadLater');
    if (!modal || !body) return;

    const link = links.find(l => l.id === linkId);
    if (!link) return;

    const domain = formatUrlDomain(link.url);
    const cat = categories.find(c => c.id === link.category);
    const catName = cat ? cat.name : 'عام';
    const isHttps = link.url.startsWith('https://');
    const isSavedReadLater = isLinkInReadLater(link.id);

    if (launchBtn) {
        launchBtn.href = link.url;
        launchBtn.onclick = () => handleLinkClick(link.id, link.url);
    }

    if (readLaterBtn) {
        readLaterBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> ${isSavedReadLater ? 'إزالة من قراءة لاحقاً' : 'قراءة لاحقاً'}`;
    }

    let iconSrc = getFaviconUrl(link.url);
    if (link.imageType === 'upload' && link.customImageBase64) iconSrc = link.customImageBase64;
    else if (link.imageType === 'url' && link.customImageUrl) iconSrc = link.customImageUrl;

    const tagsHtml = (link.tags || []).map(t => `<span class="card-tag-badge">#${escapeHtml(t)}</span>`).join('');

    body.innerHTML = `
        <div class="quick-peek-container">
            <div class="quick-peek-header-card">
                <img src="${iconSrc}" class="quick-peek-icon" alt="" onerror="this.src='assets/images/logo.png'">
                <div class="quick-peek-title-wrap">
                    <h3>${escapeHtml(link.title)}</h3>
                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                        <span class="quick-peek-domain-badge">
                            <i class="${isHttps ? 'fa-solid fa-lock text-success' : 'fa-solid fa-unlock text-warning'}"></i>
                            ${escapeHtml(domain)}
                        </span>
                        <span class="category-badge">${escapeHtml(catName)}</span>
                    </div>
                </div>
            </div>

            <div class="quick-peek-body">
                <p class="quick-peek-desc">${escapeHtml(link.desc || 'لا يوجد وصف متاح لهذا الرابط.')}</p>
                ${tagsHtml ? `<div class="card-tags-wrap" style="margin-bottom: 14px;">${tagsHtml}</div>` : ''}

                <div class="quick-peek-metrics">
                    <div class="quick-peek-metric-tile">
                        <span class="quick-peek-metric-value">${link.clicks || 0}</span>
                        <span class="quick-peek-metric-label">إجمالي النقرات</span>
                    </div>
                    <div class="quick-peek-metric-tile">
                        <span class="quick-peek-metric-value">${link.pinned ? 'نعم ⭐' : 'لا'}</span>
                        <span class="quick-peek-metric-label">مفضل ومثبت</span>
                    </div>
                    <div class="quick-peek-metric-tile">
                        <span class="quick-peek-metric-value">${isLinkInReadLater(link.id) ? 'محفوظ 🔖' : 'غير محفوظ'}</span>
                        <span class="quick-peek-metric-label">حالة القراءة</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    openModal(modal);
}

/* ==========================================================================
   FEATURE 1: KEYBOARD SHORTCUTS & VIM SPEED NAVIGATOR
   ========================================================================== */
let currentFocusedCardIndex = -1;

function initKeyboardNavigator() {
    document.addEventListener('keydown', (e) => {
        const activeEl = document.activeElement;
        const activeTag = activeEl ? activeEl.tagName.toLowerCase() : '';
        const isEditing = activeTag === 'input' || activeTag === 'textarea' || (activeEl && activeEl.isContentEditable);

        // Escape: Closes open modals, drawer, and unfocuses
        if (e.key === 'Escape') {
            if (isEditing) {
                activeEl.blur();
                return;
            }
            closeAllModals();
            if (productivityDrawerEl && productivityDrawerEl.classList.contains('active')) {
                toggleProductivityDrawer(false);
            }
            if (document.body.classList.contains('zen-mode')) {
                toggleZenMode(false);
            }
            clearCardFocus();
            return;
        }

        if (isEditing) return;

        // '?' or Shift + '/': Opens shortcuts guide
        if (e.key === '?' || (e.shiftKey && e.key === '/')) {
            e.preventDefault();
            const shortcutsModal = document.getElementById('shortcutsModal');
            if (shortcutsModal) openModal(shortcutsModal);
            return;
        }

        // '/': Focuses main search bar
        if (e.key === '/') {
            e.preventDefault();
            if (searchInputEl) {
                searchInputEl.focus();
                searchInputEl.select();
            }
            return;
        }

        // 'z' or 'Z': Toggles Zen Focus Mode
        if (e.key === 'z' || e.key === 'Z') {
            e.preventDefault();
            toggleZenMode();
            return;
        }

        // '1' to '9': Opens pinned links
        if (e.key >= '1' && e.key <= '9') {
            const index = parseInt(e.key, 10) - 1;
            const pinnedCards = document.querySelectorAll('#pinnedGrid .pinned-card');
            if (pinnedCards && pinnedCards[index]) {
                e.preventDefault();
                const card = pinnedCards[index];
                card.classList.add('kb-flash');
                setTimeout(() => card.classList.remove('kb-flash'), 500);
                const url = card.dataset.url;
                if (url) {
                    window.open(url, '_blank');
                    showToast(`إبحار فوري للمفضلة (${index + 1}) ⚡`);
                }
            }
            return;
        }

        // 'j' or ArrowDown: Next link card
        if (e.key === 'j' || e.key === 'J' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateCards(1);
            return;
        }

        // 'k' or ArrowUp: Previous link card
        if (e.key === 'k' || e.key === 'K' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateCards(-1);
            return;
        }

        // 'Enter': Open focused card
        if (e.key === 'Enter') {
            const focusedCard = document.querySelector('.link-card.kb-focused');
            if (focusedCard) {
                e.preventDefault();
                const launchBtn = focusedCard.querySelector('.link-launch-anchor, .btn-launch-link, a[target="_blank"]');
                if (launchBtn) {
                    launchBtn.click();
                } else {
                    const linkId = focusedCard.dataset.id;
                    const link = links.find(l => l.id === linkId);
                    if (link && link.url) window.open(link.url, '_blank');
                }
            }
        }
    });
}

function navigateCards(delta) {
    const cards = Array.from(document.querySelectorAll('#linksContainer .link-card'));
    if (cards.length === 0) return;

    currentFocusedCardIndex += delta;
    if (currentFocusedCardIndex < 0) currentFocusedCardIndex = cards.length - 1;
    if (currentFocusedCardIndex >= cards.length) currentFocusedCardIndex = 0;

    cards.forEach((card, idx) => {
        if (idx === currentFocusedCardIndex) {
            card.classList.add('kb-focused');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            card.classList.remove('kb-focused');
        }
    });
}

function clearCardFocus() {
    currentFocusedCardIndex = -1;
    document.querySelectorAll('.link-card.kb-focused').forEach(c => c.classList.remove('kb-focused'));
}

// Shortcuts Modal Event Listeners
const btnOpenShortcutsModalEl = document.getElementById('btnOpenShortcutsModal');
const shortcutsModalEl = document.getElementById('shortcutsModal');
const btnCloseShortcutsModalEl = document.getElementById('btnCloseShortcutsModal');
const btnCloseShortcutsOkEl = document.getElementById('btnCloseShortcutsOk');

if (btnOpenShortcutsModalEl && shortcutsModalEl) {
    btnOpenShortcutsModalEl.addEventListener('click', () => openModal(shortcutsModalEl));
}
if (btnCloseShortcutsModalEl && shortcutsModalEl) {
    btnCloseShortcutsModalEl.addEventListener('click', () => closeModal(shortcutsModalEl));
}
if (btnCloseShortcutsOkEl && shortcutsModalEl) {
    btnCloseShortcutsOkEl.addEventListener('click', () => closeModal(shortcutsModalEl));
}

/* ==========================================================================
   FEATURE 2: TRASH BIN & RESTORE ARCHIVE SYSTEM
   ========================================================================== */
const trashModalEl = document.getElementById('trashModal');
const btnOpenTrashModalEl = document.getElementById('btnOpenTrashModal');
const btnCloseTrashModalEl = document.getElementById('btnCloseTrashModal');
const btnCloseTrashOkEl = document.getElementById('btnCloseTrashOk');
const btnEmptyTrashAllEl = document.getElementById('btnEmptyTrashAll');
const btnRestoreAllTrashEl = document.getElementById('btnRestoreAllTrash');
const btnToastUndoEl = document.getElementById('btnToastUndo');

// Undo Toast Button
if (btnToastUndoEl) {
    btnToastUndoEl.addEventListener('click', () => {
        if (!lastDeletedLink) return;

        let trash = getTrashLinks();
        trash = trash.filter(t => t.id !== lastDeletedLink.id);
        saveTrashLinks(trash);

        links.unshift(lastDeletedLink);
        saveToLocalStorage();
        renderCategories();
        renderLinks();

        const title = lastDeletedLink.title;
        lastDeletedLink = null;
        if (toastEl) toastEl.classList.remove('active');
        showToast(`تمت استعادة "${title}" بنجاح! ⭐`);
    });
}

// Open / Close Trash Modal
if (btnOpenTrashModalEl && trashModalEl) {
    btnOpenTrashModalEl.addEventListener('click', () => {
        renderTrashModal();
        openModal(trashModalEl);
    });
}
if (btnCloseTrashModalEl && trashModalEl) {
    btnCloseTrashModalEl.addEventListener('click', () => closeModal(trashModalEl));
}
if (btnCloseTrashOkEl && trashModalEl) {
    btnCloseTrashOkEl.addEventListener('click', () => closeModal(trashModalEl));
}

function renderTrashModal() {
    const trash = getTrashLinks();
    const container = document.getElementById('trashListContainer');
    const countLabel = document.getElementById('trashCountLabel');
    if (!container) return;

    if (countLabel) countLabel.textContent = `${trash.length} روابط في السلة`;

    if (trash.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 28px 14px; background: var(--brutal-paper); border: 2px dashed #000000; border-radius: 4px;">
                <i class="fa-solid fa-trash-can" style="font-size: 2rem; color: var(--text-muted); margin-bottom: 8px;"></i>
                <h5 style="font-weight: 800; margin-bottom: 4px;">سلة المهملات فارغة تماماً! ⛵</h5>
                <p style="font-size: 0.8rem; color: var(--text-muted);">جميع روابطك وسفينتك بأمان تام.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = trash.map(item => {
        const iconSrc = item.icon && item.icon.startsWith('http') ? item.icon : getFaviconUrl(item.url);
        const delDate = item.deletedAt ? new Date(item.deletedAt).toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }) : '';
        return `
            <div class="trash-item-card" data-trash-id="${item.id}">
                <div class="trash-item-info">
                    <img src="${iconSrc}" class="trash-item-icon" onerror="this.src='assets/images/logo.png'">
                    <div class="trash-item-text">
                        <h5>${escapeHtml(item.title)}</h5>
                        <p>${escapeHtml(item.url)} ${delDate ? `• محذوف ${delDate}` : ''}</p>
                    </div>
                </div>
                <div class="trash-item-actions">
                    <button type="button" class="trash-restore-btn" data-action="restore" data-id="${item.id}">
                        <i class="fa-solid fa-rotate-left"></i> استعادة
                    </button>
                    <button type="button" class="trash-delete-btn" data-action="purge" data-id="${item.id}" title="حذف نهائي">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Attach restore & purge listeners
    container.querySelectorAll('button[data-action="restore"]').forEach(btn => {
        btn.addEventListener('click', () => {
            restoreTrashItem(btn.dataset.id);
        });
    });

    container.querySelectorAll('button[data-action="purge"]').forEach(btn => {
        btn.addEventListener('click', () => {
            purgeTrashItem(btn.dataset.id);
        });
    });
}

function restoreTrashItem(id) {
    let trash = getTrashLinks();
    const item = trash.find(t => t.id === id);
    if (!item) return;

    trash = trash.filter(t => t.id !== id);
    saveTrashLinks(trash);

    const { deletedAt, ...cleanItem } = item;
    links.unshift(cleanItem);
    saveToLocalStorage();
    renderCategories();
    renderLinks();
    renderTrashModal();
    showToast(`تمت استعادة "${cleanItem.title}" بنجاح! ⭐`);
}

async function purgeTrashItem(id) {
    let trash = getTrashLinks();
    const item = trash.find(t => t.id === id);
    const confirmed = await showBrutalConfirm({
        title: 'حذف نهائي؟',
        message: item ? `هل تريد حذف "${item.title}" نهائياً من سلة المهملات؟ لن تتمكن من استعادته.` : 'حذف نهائي؟',
        confirmText: 'نعم، احذف نهائياً',
        cancelText: 'إلغاء',
        type: 'danger'
    });
    if (confirmed) {
        trash = trash.filter(t => t.id !== id);
        saveTrashLinks(trash);
        renderTrashModal();
        showToast('تم الحذف النهائي من السلة.');
    }
}

if (btnRestoreAllTrashEl) {
    btnRestoreAllTrashEl.addEventListener('click', () => {
        let trash = getTrashLinks();
        if (trash.length === 0) {
            showToast('السلة فارغة بالفعل.');
            return;
        }
        trash.forEach(item => {
            const { deletedAt, ...cleanItem } = item;
            links.unshift(cleanItem);
        });
        saveTrashLinks([]);
        saveToLocalStorage();
        renderCategories();
        renderLinks();
        renderTrashModal();
        showToast(`تمت استعادة جميع الروابط المحذوفة (${trash.length}) بنجاح! ⭐`);
    });
}

if (btnEmptyTrashAllEl) {
    btnEmptyTrashAllEl.addEventListener('click', async () => {
        let trash = getTrashLinks();
        if (trash.length === 0) {
            showToast('السلة فارغة بالفعل.');
            return;
        }
        const confirmed = await showBrutalConfirm({
            title: 'إفراغ سلة المهملات؟',
            message: `سيتم حذف جميع الروابط الموجودة بالسلة (${trash.length} رابط) نهائياً ولا يمكن التراجع. هل أنت متأكد؟`,
            confirmText: 'نعم، أفرغ السلة',
            cancelText: 'إلغاء',
            type: 'danger'
        });
        if (confirmed) {
            saveTrashLinks([]);
            renderTrashModal();
            showToast('تم إفراغ سلة المهملات بالكامل.');
        }
    });
}

/* ==========================================================================
   FEATURE 3: ZEN FOCUS MODE (وضع التركيز والصفاء الذهني)
   ========================================================================== */
const btnToggleZenModeEl = document.getElementById('btnToggleZenMode');

function toggleZenMode(forceState) {
    const isZen = typeof forceState === 'boolean' ? forceState : !document.body.classList.contains('zen-mode');
    document.body.classList.toggle('zen-mode', isZen);
    
    if (btnToggleZenModeEl) {
        btnToggleZenModeEl.innerHTML = isZen ? '<i class="fa-solid fa-compress"></i>' : '<i class="fa-solid fa-expand"></i>';
        btnToggleZenModeEl.title = isZen ? 'الخروج من وضع التركيز (Z أو Esc)' : 'وضع التركيز الفائق والصفاء الذهني (Z)';
    }

    if (isZen) {
        showToast('تم تفعيل وضع التركيز الفائق (اضغط Z أو Esc للخروج) 🧘');
    } else {
        showToast('تم الخروج من وضع التركيز.');
    }
}

if (btnToggleZenModeEl) {
    btnToggleZenModeEl.addEventListener('click', () => toggleZenMode());
}

// Initialize Keyboard Navigator
initKeyboardNavigator();


