// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navFeatures: '功能特色', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 驱动的倒数日',
    heroTitle: '记录每个重要时刻',
    heroSubtitle: '一句话告诉 AI，它就帮你建好倒数日——自动识别日期、分类、图标与颜色。',
    downloadBtn: 'App Store 下载', learnMore: '了解更多',
    trust1: '📱 数据本地存储', trust2: '🆓 完全免费', trust3: '🌏 中英双语',
    cdTitle: '倒数日', cdAi: 'AI 已就绪',
    cdHeroName: '妈妈生日', cdDaysUnit: '天', cdRemain: '后到来',
    cdItem1: '春节', cdItem2: '考研', cdItem3: '房租日',
    chipA: '🤖 AI 已创建', chipB: '📅 12 个倒数日',
    proofRating: '效率工具 · 时间管理',
    stat1: '原生体验', stat2: '本地存储', stat3: '双语界面', stat4: '广告 · 追踪',
    mqEyebrow: 'AI 自动配好图标与颜色',
    mq1: '🎂 生日', mq2: '💍 纪念日', mq3: '📚 考试', mq4: '✈️ 旅行', mq5: '🧧 春节', mq6: '🏠 房租', mq7: '💼 截止日',
    mq8: '🎓 毕业', mq9: '🩺 体检', mq10: '🛂 签证', mq11: '🎄 圣诞', mq12: '💰 账单', mq13: '🎉 演唱会', mq14: '📦 发售日',
    howTitle: '三步建好一个倒数日', howSub: '说人话就行，剩下的交给 AI。',
    tryTitle: '亲手试试 AI 解析', trySub: '选一句话，点击解析，看 AI 如何拆出日期、分类、图标与颜色。',
    tryPrompt1: '帮我创建妈妈生日倒数日 5月20日', tryPrompt2: '考研倒计时 12月21日', tryPrompt3: '纪念日旅行 10月1日', tryPrompt4: '每月1号房租日',
    tryTagDate: '日期', tryTagCat: '分类', tryTagIcon: '图标', tryTagColor: '颜色',
    tryBtn: 'AI 解析', tryEmpty: '解析结果会出现在这里', tryNote: '网页交互演示 · App 内为真实 AI 解析',
    step1Title: '说出或输入', step1Desc: '用自然语言描述你想记住的日子，无需一格格填表单。', step1Eg: '“帮我创建妈妈生日倒数日”',
    step2Title: 'AI 自动解析', step2Desc: 'AI 识别日期、分类、图标和颜色，自动补全所有细节。', step2Eg: '日期 · 分类 · 图标 · 颜色',
    step3Title: '生成倒数卡片', step3Desc: '立刻得到一张漂亮的倒数卡片，还能设置到日提醒。', step3Eg: '实时倒数 + 提醒',
    featuresTitle: '功能特色', featuresSub: '为记录重要日子而生的每一处细节。',
    feature1Title: 'AI 智能助手', feature1Desc: '通过自然语言对话，快速创建和管理倒数日。只需说“帮我创建妈妈生日倒数日”，AI 就能理解并执行。',
    feature2Title: '月历视图', feature2Desc: '直观的日历界面，一目了然查看所有重要日期分布，支持月份切换和快速导航。',
    feature3Title: '智能分类', feature3Desc: '自定义分类管理，为不同类型的倒数日设置独特的图标和颜色，让管理更有序。',
    feature4Title: '数据统计', feature4Desc: '详细的统计分析，了解你的时间规划习惯，帮助你更好地管理时间。',
    feature5Title: '智能提醒', feature5Desc: '重要事件到日提醒，确保你不会错过任何值得纪念的时刻。',
    feature6Title: '隐私保护', feature6Desc: '所有倒数日数据本地存储，充分保护你的隐私安全。',
    personaTitle: '谁在用它倒数', personaSub: '不同的生活，同样重要的日子。',
    persona1Name: '学生党', persona1Desc: '考试 D-day、论文截止、毕业典礼——每个节点都数着来。',
    persona1Chip1: '📚 考研', persona1Chip2: '🎓 毕业', persona1Chip3: '📝 答辩',
    persona2Name: '情侣与家人', persona2Desc: '生日和纪念日，在到来之前就被记起。',
    persona2Chip1: '🎂 生日', persona2Chip2: '💍 纪念日', persona2Chip3: '🧧 春节',
    persona3Name: '职场人', persona3Desc: '项目截止、合同续约、签证日期，一个都不漏。',
    persona3Chip1: '💼 项目截止', persona3Chip2: '🛂 签证', persona3Chip3: '📄 续约',
    persona4Name: '生活管理', persona4Desc: '房租、账单、体检——最容易忘的日子最要紧。',
    persona4Chip1: '🏠 房租', persona4Chip2: '💰 账单', persona4Chip3: '🩺 体检',
    screenshotsTitle: '应用截图', screenshotsSub: '左右滑动，点击可放大查看。',
    cmpTitle: '为什么选 AI倒数日', cmpSub: '和手动倒数日应用、日历应用比一比。',
    cmpColA: 'AI倒数日', cmpColB: '传统倒数日 App', cmpColC: '日历应用',
    cmpR1: '一句话创建', cmpR1B: '手动填表', cmpR1C: '手动建事件',
    cmpR2: '自动图标 · 颜色 · 分类', cmpR2B: '手动挑选',
    cmpR3: '实时倒数卡片',
    cmpR4: '到日提醒', cmpR4B: '视应用而定',
    cmpR5: '倒数数据统计', cmpR5B: '少见',
    cmpR6: '免费 · 无账号 · 本地存储', cmpR6B: '视应用而定', cmpR6C: '绑定云端',
    shot1: '主页 · 倒数日列表', shot2: 'AI 智能助手', shot3: '月历视图', shot4: '创建倒数日', shot5: '数据统计',
    privacyTitle: '你的重要日子，只属于你', privacyDesc: '倒数日数据全部保存在设备本地，无需注册账号，无广告、无追踪。仅当你使用 AI 助手时，对话文本才会发送给 OpenAI 以理解你的请求。',
    pp1: '数据本地存储', pp2: '无需注册账号', pp3: '无广告无追踪', pp4: '完全免费',
    faqTitle: '常见问题',
    q1: 'AI 助手是怎么工作的？', a1: '用自然语言描述你想记住的日子，AI 会自动识别日期、分类、图标和颜色并建好倒数日。AI 对话由 OpenAI 提供支持。',
    q2: '我的数据存在哪里？会上传吗？', a2: '倒数日数据全部保存在你的设备本地，不会上传到我们的服务器。只有在你使用 AI 助手时，对话文本才会通过加密连接发送给 OpenAI 以理解你的请求。',
    q3: '支持哪些设备和系统？', a3: '支持 iPhone 和 iPad，需要 iOS 16.0 或更高版本。',
    q4: '需要付费吗？', a4: '完全免费，无内购，也无需注册账号。',
    q5: '支持哪些语言？', a5: '完美支持简体中文与英文双语界面。',
    downloadTitle: '立即下载 AI倒数日', downloadSubtitle: '开始你的智能时间管理之旅。',
    dlf1: '✓ 支持 iOS 16.0 及以上版本', dlf2: '✓ 支持 iPhone 和 iPad', dlf3: '✓ 完全免费，无内购', dlf4: '✓ 无需注册账号',
    downloadNote: '需要 iOS 16.0 或更高版本',
    footerRights: 'AI倒数日. 保留所有权利。', footerMadeBy: 'Built by WeiProduct',
    footPrivacy: '隐私政策', footTerms: '使用条款', footGithub: 'GitHub',
    footTagline: 'AI 帮你记住每个重要的日子。', footProduct: '产品', footSupport: '支持', footPrefs: '偏好设置', footContact: '联系我们',
    stickySub: 'AI 倒数日 · 免费', stickyGet: '获取',
    /* AI-AVATAR */
    aiTitle: 'AI分身 · AI倒数日助手',
    aiGreeting: '你好！我是 AI倒数日 的 AI分身 📅 关于一句话建倒数日、隐私保护、设备支持或价格，都可以问我。',
    aiPlaceholder: '输入你的问题…',
    aiSend: '发送',
    aiChip1: '怎么用一句话建倒数日？',
    aiChip2: '我的数据安全吗？',
    aiChip3: '需要付费吗？',
    aiDisclaimer: 'AI 生成，仅供参考',
    aiError: '抱歉，AI 助手暂时连不上，请稍后再试。(Sorry, the assistant is temporarily unreachable — please try again later.)'
    /* /AI-AVATAR */
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ AI-powered countdowns',
    heroTitle: 'Never miss a moment that matters',
    heroSubtitle: 'Just tell the AI in plain words — it builds the countdown for you, auto-detecting the date, category, icon and color.',
    downloadBtn: 'Download on App Store', learnMore: 'Learn more',
    trust1: '📱 Stored on-device', trust2: '🆓 Completely free', trust3: '🌏 EN / 中文',
    cdTitle: 'Countdowns', cdAi: 'AI ready',
    cdHeroName: "Mom's Birthday", cdDaysUnit: 'days', cdRemain: 'to go',
    cdItem1: 'Lunar New Year', cdItem2: 'Exam day', cdItem3: 'Rent due',
    chipA: '🤖 Created by AI', chipB: '📅 12 countdowns',
    proofRating: 'Productivity · Time management',
    stat1: 'Native feel', stat2: 'On-device', stat3: 'Bilingual', stat4: 'Ads · Tracking',
    mqEyebrow: 'Icons & colors, auto-picked by AI',
    mq1: '🎂 Birthday', mq2: '💍 Anniversary', mq3: '📚 Exam', mq4: '✈️ Trip', mq5: '🧧 Lunar New Year', mq6: '🏠 Rent', mq7: '💼 Deadline',
    mq8: '🎓 Graduation', mq9: '🩺 Checkup', mq10: '🛂 Visa', mq11: '🎄 Christmas', mq12: '💰 Bill', mq13: '🎉 Concert', mq14: '📦 Launch day',
    howTitle: 'Build a countdown in three steps', howSub: 'Say it in plain words — AI handles the rest.',
    tryTitle: 'Try the AI parsing yourself', trySub: 'Pick a sentence, hit Parse, and watch AI extract the date, category, icon and color.',
    tryPrompt1: "Create a countdown to Mom's birthday May 20", tryPrompt2: 'Countdown to my final exam Dec 21', tryPrompt3: 'Anniversary trip on Oct 1', tryPrompt4: 'Rent due on the 1st',
    tryTagDate: 'Date', tryTagCat: 'Category', tryTagIcon: 'Icon', tryTagColor: 'Color',
    tryBtn: 'Parse with AI', tryEmpty: 'The parsed result will appear here', tryNote: 'Interactive web demo — the real app uses live AI',
    step1Title: 'Type or speak', step1Desc: 'Describe the day you want to remember in natural language — no form-filling.', step1Eg: '“Create a countdown to Mom’s birthday”',
    step2Title: 'AI parses it', step2Desc: 'AI detects the date, category, icon and color, filling in every detail for you.', step2Eg: 'Date · Category · Icon · Color',
    step3Title: 'Get a countdown card', step3Desc: 'Instantly get a beautiful live countdown card — with a reminder on the day.', step3Eg: 'Live countdown + reminder',
    featuresTitle: 'Features', featuresSub: 'Every detail built for the days that matter.',
    feature1Title: 'AI Assistant', feature1Desc: 'Create and manage countdowns through natural-language chat. Just say “Create a countdown to Mom’s birthday” and AI understands and does it.',
    feature2Title: 'Calendar View', feature2Desc: 'An intuitive calendar shows all your important dates at a glance, with easy month switching and navigation.',
    feature3Title: 'Smart Categories', feature3Desc: 'Custom categories with unique icons and colors for each type of countdown, keeping everything organized.',
    feature4Title: 'Statistics', feature4Desc: 'Detailed analytics reveal your time-planning habits and help you manage your days better.',
    feature5Title: 'Smart Reminders', feature5Desc: 'On-the-day reminders for important events, so you never miss a moment worth remembering.',
    feature6Title: 'Privacy First', feature6Desc: 'All your countdown data is stored locally, fully protecting your privacy.',
    personaTitle: 'Who counts on it', personaSub: 'Different lives, equally important days.',
    persona1Name: 'Students', persona1Desc: 'Exam D-days, thesis deadlines, graduation day — every milestone counted.',
    persona1Chip1: '📚 Finals', persona1Chip2: '🎓 Graduation', persona1Chip3: '📝 Defense',
    persona2Name: 'Couples & Family', persona2Desc: 'Birthdays and anniversaries, remembered before they arrive.',
    persona2Chip1: '🎂 Birthday', persona2Chip2: '💍 Anniversary', persona2Chip3: '🧧 New Year',
    persona3Name: 'Professionals', persona3Desc: 'Project deadlines, contract renewals, visa dates — none slip by.',
    persona3Chip1: '💼 Deadline', persona3Chip2: '🛂 Visa', persona3Chip3: '📄 Renewal',
    persona4Name: 'Life Admin', persona4Desc: 'Rent, bills, checkups — the boring dates that bite.',
    persona4Chip1: '🏠 Rent', persona4Chip2: '💰 Bills', persona4Chip3: '🩺 Checkup',
    screenshotsTitle: 'Screenshots', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    cmpTitle: 'Why AI Daily Matters', cmpSub: 'Compared with manual countdown apps and calendar apps.',
    cmpColA: 'AI Daily Matters', cmpColB: 'Manual countdown apps', cmpColC: 'Calendar apps',
    cmpR1: 'Create with one sentence', cmpR1B: 'Form-filling', cmpR1C: 'Manual events',
    cmpR2: 'Auto icon · color · category', cmpR2B: 'Pick by hand',
    cmpR3: 'Live day-countdown card',
    cmpR4: 'On-the-day reminders', cmpR4B: 'Varies',
    cmpR5: 'Countdown statistics', cmpR5B: 'Rare',
    cmpR6: 'Free · no account · on-device', cmpR6B: 'Varies', cmpR6C: 'Cloud-tied',
    shot1: 'Home · countdown list', shot2: 'AI assistant', shot3: 'Calendar view', shot4: 'Create a countdown', shot5: 'Statistics',
    privacyTitle: 'Your important days are yours alone', privacyDesc: 'Countdown data is stored on your device — no account, no ads, no tracking. Only when you use the AI assistant is your chat text sent to OpenAI to understand your request.',
    pp1: 'Stored on-device', pp2: 'No account needed', pp3: 'No ads, no tracking', pp4: 'Completely free',
    faqTitle: 'Frequently Asked Questions',
    q1: 'How does the AI assistant work?', a1: 'Describe the day in natural language and AI detects the date, category, icon and color, then builds the countdown for you. The AI chat is powered by OpenAI.',
    q2: 'Where is my data stored? Is it uploaded?', a2: 'All countdown data stays on your device and is never uploaded to our servers. Only when you use the AI assistant is your chat text sent to OpenAI over an encrypted connection to understand your request.',
    q3: 'Which devices and iOS versions are supported?', a3: 'iPhone and iPad, running iOS 16.0 or later.',
    q4: 'Do I need to pay?', a4: 'It is completely free, with no in-app purchases and no account required.',
    q5: 'Which languages are supported?', a5: 'Full support for both Simplified Chinese and English interfaces.',
    downloadTitle: 'Download AI Daily Matters', downloadSubtitle: 'Start your journey to smarter time management.',
    dlf1: '✓ Runs on iOS 16.0 and later', dlf2: '✓ Works on iPhone and iPad', dlf3: '✓ Completely free, no IAP', dlf4: '✓ No account required',
    downloadNote: 'Requires iOS 16.0 or later',
    footerRights: 'AI Daily Matters. All rights reserved.', footerMadeBy: 'Built by WeiProduct',
    footPrivacy: 'Privacy Policy', footTerms: 'Terms of Use', footGithub: 'GitHub',
    footTagline: 'AI remembers the days that matter.', footProduct: 'Product', footSupport: 'Support', footPrefs: 'Preferences', footContact: 'Contact us',
    stickySub: 'AI countdowns · Free', stickyGet: 'Get',
    /* AI-AVATAR */
    aiTitle: 'AI Avatar · AI Daily Matters Assistant',
    aiGreeting: 'Hi! I\'m the AI avatar for AI Daily Matters 📅 Ask me about one-sentence countdowns, privacy, supported devices, or pricing.',
    aiPlaceholder: 'Type your question…',
    aiSend: 'Send',
    aiChip1: 'How do I create a countdown with one sentence?',
    aiChip2: 'Is my data private?',
    aiChip3: 'Is the app free?',
    aiDisclaimer: 'AI-generated · for reference only',
    aiError: 'Sorry, the assistant is temporarily unreachable — please try again later. （抱歉，AI 助手暂时连不上，请稍后再试。）'
    /* /AI-AVATAR */
  }
};

let currentLang = 'zh-CN';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'zh-CN';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  /* AI-AVATAR: translate placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] !== undefined) el.setAttribute('placeholder', t[k]);
  });
  /* /AI-AVATAR */
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.js-lang-switch').forEach(b => { b.textContent = currentLang === 'zh-CN' ? 'EN' : '中文'; });
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
  updateCountdown();
  renderTryDemo();
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0C0B12' : '#6B5CE6');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Live countdown ticker (hero signature) =====
// Next occurrence of a month/day at local midnight; always in the future.
function nextOccurrence(month, day) {
  const now = new Date();
  let y = now.getFullYear();
  let target = new Date(y, month - 1, day, 0, 0, 0, 0);
  if (target.getTime() <= now.getTime()) target = new Date(y + 1, month - 1, day, 0, 0, 0, 0);
  return target;
}
function firstOfNextMonth() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);
}
const CD_MAIN = nextOccurrence(5, 20);   // sample birthday
const CD_ITEMS = [
  { id: 'cdN1', date: nextOccurrence(2, 17) },  // Lunar New Year (sample)
  { id: 'cdN2', date: nextOccurrence(12, 21) }, // Exam day (sample)
  { id: 'cdN3', date: firstOfNextMonth() }       // Rent due (1st of next month)
];

function daysBetween(target) {
  const now = new Date();
  return Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86400000));
}
function pad(n) { return String(n).padStart(2, '0'); }

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, CD_MAIN.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  const dEl = document.getElementById('cdDays');
  const hmsEl = document.getElementById('cdHMS');
  if (dEl) dEl.textContent = days;
  if (hmsEl) hmsEl.textContent = pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
  CD_ITEMS.forEach(it => {
    const el = document.getElementById(it.id);
    if (el && it.date) el.textContent = daysBetween(it.date) + (currentLang === 'zh-CN' ? ' 天' : 'd');
  });
}

// ===== Try-it AI parse demo =====
// Segments join to exactly the tryPrompt strings; second item marks the entity type.
const TRY_DEMOS = {
  'zh-CN': [
    { seg: [['帮我创建'], ['妈妈生日', 'cat'], ['倒数日 '], ['5月20日', 'date']], emoji: '🎂', color: '#FF6B9D', name: '妈妈生日', cat: '生日', dateLabel: '5月20日', m: 5, d: 20 },
    { seg: [['考研', 'cat'], ['倒计时 '], ['12月21日', 'date']], emoji: '📚', color: '#6B5CE6', name: '考研', cat: '学习', dateLabel: '12月21日', m: 12, d: 21 },
    { seg: [['纪念日旅行', 'cat'], [' '], ['10月1日', 'date']], emoji: '✈️', color: '#764BA2', name: '纪念日旅行', cat: '旅行', dateLabel: '10月1日', m: 10, d: 1 },
    { seg: [['每月'], ['1号', 'date'], ['房租日', 'cat']], emoji: '🏠', color: '#FFCE00', name: '房租日', cat: '生活', dateLabel: '每月1号', m: 0, d: 0 }
  ],
  'en': [
    { seg: [['Create a countdown to '], ["Mom's birthday", 'cat'], [' '], ['May 20', 'date']], emoji: '🎂', color: '#FF6B9D', name: "Mom's Birthday", cat: 'Birthday', dateLabel: 'May 20', m: 5, d: 20 },
    { seg: [['Countdown to '], ['my final exam', 'cat'], [' '], ['Dec 21', 'date']], emoji: '📚', color: '#6B5CE6', name: 'Final Exam', cat: 'Study', dateLabel: 'Dec 21', m: 12, d: 21 },
    { seg: [['Anniversary trip', 'cat'], [' on '], ['Oct 1', 'date']], emoji: '✈️', color: '#764BA2', name: 'Anniversary Trip', cat: 'Travel', dateLabel: 'Oct 1', m: 10, d: 1 },
    { seg: [['Rent', 'cat'], [' due on '], ['the 1st', 'date']], emoji: '🏠', color: '#FFCE00', name: 'Rent Due', cat: 'Life', dateLabel: '1st of each month', m: 0, d: 0 }
  ]
};
let tryIdx = 0, tryParsed = false, tryTimers = [];

function tryTargetDate(demo) { return demo.m ? nextOccurrence(demo.m, demo.d) : firstOfNextMonth(); }

function renderTryDemo() {
  const sen = document.getElementById('trySentence');
  if (!sen) return;
  const demo = (TRY_DEMOS[currentLang] || TRY_DEMOS['zh-CN'])[tryIdx];
  sen.innerHTML = '';
  demo.seg.forEach(s => {
    if (s[1]) {
      const m = document.createElement('mark');
      m.className = 'tag tag-' + s[1] + (tryParsed ? ' on' : '');
      m.textContent = s[0];
      sen.appendChild(m);
    } else {
      sen.appendChild(document.createTextNode(s[0]));
    }
  });
  document.querySelectorAll('.try-chip').forEach((c, i) => c.classList.toggle('active', i === tryIdx));
  const empty = document.getElementById('tryEmpty');
  const think = document.getElementById('tryThink');
  const card = document.getElementById('tryCard');
  if (think) think.classList.remove('on');
  if (empty) empty.hidden = tryParsed;
  if (card) {
    card.hidden = !tryParsed;
    if (tryParsed) {
      document.getElementById('tryCardEmoji').textContent = demo.emoji;
      document.getElementById('tryCardName').textContent = demo.name;
      document.getElementById('tryCardDays').textContent = daysBetween(tryTargetDate(demo));
      document.getElementById('tryCardUnit').textContent = currentLang === 'zh-CN' ? '天' : 'days';
      document.getElementById('tryCardDate').textContent = demo.dateLabel;
      document.getElementById('tryCardCatName').textContent = demo.cat;
      document.getElementById('tryCardDot').style.setProperty('--c', demo.color);
    }
  }
}

function clearTryTimers() { tryTimers.forEach(clearTimeout); tryTimers = []; }

function initTryDemo() {
  const btn = document.getElementById('tryBtn');
  if (!btn) return;
  document.querySelectorAll('.try-chip').forEach((c, i) => {
    c.addEventListener('click', () => {
      clearTryTimers();
      btn.disabled = false;
      tryIdx = i; tryParsed = false;
      renderTryDemo();
    });
  });
  btn.addEventListener('click', () => {
    clearTryTimers();
    tryParsed = false;
    renderTryDemo();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      tryParsed = true; renderTryDemo(); return;
    }
    btn.disabled = true;
    const empty = document.getElementById('tryEmpty');
    if (empty) empty.hidden = true;
    const think = document.getElementById('tryThink');
    if (think) think.classList.add('on');
    document.querySelectorAll('#trySentence mark').forEach((m, j) => {
      tryTimers.push(setTimeout(() => m.classList.add('on'), 450 + j * 350));
    });
    tryTimers.push(setTimeout(() => { tryParsed = true; renderTryDemo(); btn.disabled = false; }, 1500));
  });
  renderTryDemo();
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const prog = document.getElementById('scrollProgress');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (prog) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initTryDemo();
  initGallery();
  initReveal();
  initScroll();
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  document.querySelectorAll('.js-lang-switch').forEach(b => b.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN')));
  document.querySelectorAll('.js-theme-toggle').forEach(b => b.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});

/* AI-AVATAR: floating "AI分身" assistant widget */
(function () {
  const AI_PROXY_URL = 'https://personal-portfolio-api-sandy.vercel.app/api/chat-proxy';
  const AI_SYSTEM_PROMPT = [
    'You are the "AI分身" (AI avatar) assistant on the promo website of AI Daily Matters (AI倒数日), an iOS countdown-day app by WeiProduct.',
    '',
    'App facts (the ONLY facts you may state):',
    '- One-liner: tell the AI in plain words which day matters to you, and it builds the countdown for you — automatically detecting the date, category, icon and color.',
    '- Key features: AI assistant that creates and manages countdowns through natural-language chat (e.g. "Create a countdown to Mom\'s birthday May 20"); live countdown cards; calendar view showing all important dates at a glance; smart custom categories with unique icons and colors; statistics on your time-planning habits; on-the-day smart reminders.',
    '- Privacy: countdown data is stored on-device only — no account, no ads, no tracking; only when the user chats with the in-app AI assistant is that chat text sent to OpenAI over an encrypted connection to understand the request.',
    '- Platform: iPhone and iPad, requires iOS 16.0 or later.',
    '- Price: completely free, no in-app purchases, no account required.',
    '- Languages: English and Simplified Chinese (中文).',
    '- App Store link: https://apps.apple.com/app/id6749191633',
    '',
    'Style rules:',
    '- ALWAYS reply in the same language as the user\'s most recent message: English question → English answer, 中文提问 → 中文回答. Do NOT default to Chinese just because the app has a Chinese name.',
    '- Keep replies to 1-3 short sentences; be friendly and concrete.',
    '- NEVER invent download counts, ratings, reviews, or features not listed above.',
    '- If asked about unrelated topics, politely steer the conversation back to AI Daily Matters.',
    '- When the user wants to download or try the app, point them to the App Store link.'
  ].join('\n');
  const AI_MAX_HISTORY = 12;

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('aiToggle');
    const panel = document.getElementById('aiPanel');
    const closeBtn = document.getElementById('aiClose');
    const msgs = document.getElementById('aiMsgs');
    const chipsWrap = document.getElementById('aiChips');
    const form = document.getElementById('aiForm');
    const input = document.getElementById('aiInput');
    const sendBtn = document.getElementById('aiSendBtn');
    if (!toggle || !panel || !msgs || !form || !input) return;

    let history = [];
    let greeted = false;
    let busy = false;

    function addBubble(role, text, i18nKey) {
      const div = document.createElement('div');
      div.className = 'ai-msg ' + (role === 'user' ? 'user' : 'bot');
      if (i18nKey) {
        div.setAttribute('data-i18n', i18nKey); // follows future language switches too
        div.textContent = I18N[currentLang][i18nKey];
      } else {
        div.textContent = text;
      }
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function showTyping() {
      const div = document.createElement('div');
      div.className = 'ai-msg bot ai-typing';
      div.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function openPanel() {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      if (!greeted) { greeted = true; addBubble('bot', '', 'aiGreeting'); }
      input.focus();
    }
    function closePanel() {
      panel.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }

    async function send(text) {
      text = (text || '').trim();
      if (!text || busy) return;
      busy = true;
      if (sendBtn) sendBtn.disabled = true;
      if (chipsWrap) chipsWrap.hidden = true;
      addBubble('user', text);
      history.push({ role: 'user', content: text });
      history = history.slice(-AI_MAX_HISTORY);
      const typing = showTyping();
      try {
        const res = await fetch(AI_PROXY_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'system', content: AI_SYSTEM_PROMPT }].concat(history),
            max_tokens: 350
          })
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        let reply = '';
        if (data && data.choices && data.choices[0]) {
          const m = data.choices[0].message;
          reply = (m && m.content) || data.choices[0].text || '';
        }
        if (!reply && data && typeof data.content === 'string') reply = data.content;
        if (!reply && data && typeof data.reply === 'string') reply = data.reply;
        if (!reply && data && typeof data.message === 'string') reply = data.message;
        reply = (reply || '').trim();
        if (!reply) throw new Error('empty reply');
        typing.remove();
        addBubble('bot', reply);
        history.push({ role: 'assistant', content: reply });
        history = history.slice(-AI_MAX_HISTORY);
      } catch (err) {
        typing.remove();
        addBubble('bot', '', 'aiError');
      } finally {
        busy = false;
        if (sendBtn) sendBtn.disabled = false;
      }
    }

    toggle.addEventListener('click', () => (panel.hidden ? openPanel() : closePanel()));
    if (closeBtn) closeBtn.addEventListener('click', closePanel);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) closePanel(); });
    if (chipsWrap) chipsWrap.querySelectorAll('.ai-chip').forEach(chip => {
      chip.addEventListener('click', () => send(chip.textContent));
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      send(v);
    });

    // Dev/verify affordance: ?aichat=open auto-opens; ?aichat=demo also sends chip 1 for real.
    const q = location.search;
    if (q.indexOf('aichat=open') !== -1 || q.indexOf('aichat=demo') !== -1) {
      openPanel();
      if (q.indexOf('aichat=demo') !== -1) {
        setTimeout(() => send(I18N[currentLang].aiChip1), 600);
      }
    }
  });
})();
/* /AI-AVATAR */
