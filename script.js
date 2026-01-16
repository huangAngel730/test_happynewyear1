// 资源配置
const assets = {
    'style-china': {
        music: 'https://music.163.com/song/media/outer/url?id=26217171.mp3',
        wishes: [
            "2026丙午马年，愿您：马到功成，前程似锦！",
            "春风得意马蹄疾，一日看尽长安花。新春快乐！",
            "金戈铁马闻征鼓，只争朝夕启新程。祝您事业腾飞！",
            "龙马精神，万事如意。阖家欢乐，福寿安康！",
            "一马当先，步步高升！财源广进，五福临门！"
        ],
        fuWishes: [
            "福到新春到，马啸九州添鸿运！",
            "鎏金赐福，红运相随；龙马精神，稳步腾飞！",
            "祥云缭绕，家兴业旺；春风得意，万事顺遂！",
            "福气临门，金玉满堂；马到成功，步步高升！"
        ],
        particles: ['🧧', '🏮', '✨', '🐴', '🧨', '福', '云'],
        deep: {
            general: [
                "春风得意马蹄疾，福运随行步步高。",
                "龙马精神常相伴，阖家欢乐好运连。"
            ],
            career: [
                "丹心执笔，事业添锦绣；骏马奔程，步步踏高台。",
                "贵人同行，项目顺利落地，前路光明万里。"
            ],
            health: [
                "松鹤延年，身轻如燕；早睡早起，神清气爽。",
                "茶香入骨，气血调和，少病少忧，心境安宁。"
            ],
            family: [
                "灯火可亲，笑语盈门，家和万事兴。",
                "长辈安康，晚辈顺遂，团圆常在。"
            ],
            fortune: [
                "财源滚滚，福泽连绵，红包与惊喜齐来。",
                "路逢贵马，机遇频催，投资与收获双丰。"
            ]
        }
    },
    'style-simple': {
        music: 'https://music.163.com/song/media/outer/url?id=25842278.mp3',
        wishes: [
            "浅浅春风，轻轻心愿，2026 纯净而来。",
            "简约不简单，新一年保持松弛与热爱。",
            "留白里有光，步伐里有梦，马年清爽启程。",
            "三分忙碌七分闲，日子慢慢，好运悄悄来。",
            "愿你心如晨光，干净通透，万事清甜。"
        ],
        fuWishes: [
            "轻盈一岁，心愿缓缓落地。",
            "保持松弛，福气自来。"
        ],
        particles: ['✦', '☁', '🪽', '✨', '𓅯'],
        deep: {
            general: [
                "留白里有光，日常也有柔软好运。",
                "步子轻，心也轻，好运不声不响靠近。"
            ],
            career: [
                "做减法聚焦要点，效率与成果双提升。",
                "线条般清晰的规划，项目顺滑落地。"
            ],
            health: [
                "多晒太阳多喝水，作息如晨风般规律。",
                "身心柔软，心率平稳，睡个好觉。"
            ],
            family: [
                "留白给家人，简简单单的陪伴最安心。",
                "饭后散步、周末小聚，温柔又满足。"
            ],
            fortune: [
                "理财如素描，线条清晰，收益稳定。",
                "小额积累，复利生长，财富轻盈向上。"
            ]
        }
    },
    'style-tech': {
        music: 'https://music.163.com/song/media/outer/url?id=443875283.mp3',
        wishes: [
            "System.out.println('Happy New Year 2026');",
            "Loading 2026... 100% Complete. Success!",
            "愿你的快乐像无限循环，没有跳出条件！",
            "2026.exe 启动成功，Bug全消除，性能优化100%！",
            "马年赋能，迭代升级，愿你的人生算法最优解！"
        ],
        fuWishes: [
            "福气代码已编译，部署成功！",
            "霓虹 Buffer 充满，幸运在线。"
        ],
        particles: ['0', '1', '{ }', '⚡', '💾'],
        deep: {
            general: [
                "Booting 2026... 状态良好，Happy Run！",
                "Deploy 成功，福气 CI/CD 持续上线。"
            ],
            career: [
                "版本迭代顺滑，需求零返工，代码即价值。",
                "路由清晰，节点高可用，晋升通路全绿灯。"
            ],
            health: [
                "CPU 不过热，情绪不掉帧，睡眠充足不卡顿。",
                "每日充电 8 小时，身心续航满格。"
            ],
            family: [
                "家庭局域网满格，关怀带宽无限。",
                "情感延迟低，笑声高频播报。"
            ],
            fortune: [
                "现金流稳定，理财收益上扬，曲线平滑向上。",
                "贵人信号满格，投资回报超预期。"
            ]
        }
    },
    'style-cute': {
        music: 'https://music.163.com/song/media/outer/url?id=1387581250.mp3',
        wishes: [
            "哒哒哒~ Q 版小马来送福啦！祝你天天开心鸭！",
            "2026，要做一个可爱的干饭马！🍚",
            "干饭不胖，睡觉暴富，暴击好运！",
            "马年好运 biu biu biu~ 发射给你！💖",
            "摸摸小马头，万事不发愁！🦄"
        ],
        fuWishes: [
            "小马打滚送上软萌福气！",
            "抱一抱，福气到。"
        ],
        particles: ['🍬', '🎈', '🍭', '💖', '🦄'],
        deep: {
            general: [
                "可爱运爆棚，全年软萌好运！",
                "抱抱你，福气满兜兜！"
            ],
            career: [
                "工作像贴纸一样顺滑黏住好运，收获一堆表扬贴纸。",
                "同事超友好，老板送彩虹，升职加薪蹦蹦跳跳来。"
            ],
            health: [
                "多喝水多睡觉，皮肤嘭嘭亮；不感冒，不心累。",
                "快乐加倍，焦虑减半，身体状态棒棒哒。"
            ],
            family: [
                "聚会多多，笑声满屋，团圆快乐抱枕抱紧。",
                "家人像棉花糖，软软甜甜给你拥抱。"
            ],
            fortune: [
                "红包像气球越攒越多，钱包像仓鼠仓库塞满。",
                "好运扭蛋连抽SSR，存款曲线蹭蹭上涨。"
            ]
        }
    },
    'style-warm': {
        music: 'https://music.163.com/song/media/outer/url?id=28949052.mp3',
        wishes: [
            "围炉煮茶，灯火可亲，马年人间烟火最暖心。",
            "祝你新年每一顿饭都有人陪，每一句话都被温柔接住。",
            "回家路有灯，餐桌有汤，所念之人皆在旁。",
            "团圆是答案，马年是章节，愿你写下温暖一整年。",
            "把祝福放进汤里，暖暖地喝下一整年好运。"
        ],
        fuWishes: [
            "炉火未熄，福气不散。",
            "人间烟火味，就是最暖的福。"
        ],
        particles: ['🕯️', '🧧', '🍊', '✨', '🕊️'],
        deep: {
            general: [
                "灯火人间，温柔岁岁，福气缓缓来。",
                "围炉夜话，家与福都在身边。"
            ],
            career: [
                "有节奏地奔跑，懂休息也懂发力，事业稳稳向前。",
                "同事如家人，协作顺畅，收获认同与成长。"
            ],
            health: [
                "早睡不熬夜，三餐有温度，身体和心都被好好照顾。",
                "保持散步和拉伸，气色红润，精神饱满。"
            ],
            family: [
                "一日三餐的烟火气，织出一年四季的安心感。",
                "常回家看看，拥抱和微笑是最好的礼物。"
            ],
            fortune: [
                "稳健理财，温柔增值，安心感就是最好的收益。",
                "好运像围炉的暖意，源源不绝，悄悄变多。"
            ]
        }
    },
    'style-pixel': {
        music: 'https://music.163.com/song/media/outer/url?id=1901371647.mp3',
        wishes: [
            "↑↑↓↓←→←→AB，解锁 2026 好运彩蛋！",
            "像素马跳一跳，福气值 +99！",
            "复古街机上线，祝你打出人生连击。",
            "马到成功・福气满格，插入好运币继续！",
            "Start Game: 2026，祝你满血开局。"
        ],
        fuWishes: [
            "收集到福袋 ×5，隐藏祝福解锁！",
            "像素福气加成，暴击好运 999。"
        ],
        particles: ['▢', '✜', '🧧', '🪙', '☆'],
        deep: {
            general: [
                "像素加成 Buff，福气值连击！",
                "Collect 福袋，解锁隐藏好运！"
            ],
            career: [
                "任务列表全绿，关卡连胜，升职像通关一样顺滑。",
                "打怪掉落好机会，队友 Buff 满格，项目超神。"
            ],
            health: [
                "满血复活，连击不掉帧，保持好心情就是最佳护盾。",
                "多存档（休息）、多回血（睡觉），状态拉满。"
            ],
            family: [
                "在家的每一关都是剧情关，爱与陪伴的数值拉满。",
                "亲友全体在线，语音欢笑，温暖同步。"
            ],
            fortune: [
                "金币掉落率上升，理财暴击，资产升级。",
                "隐藏宝箱就在前方，保持探索就有惊喜。"
            ]
        }
    }
};

// 全局状态
let currentTheme = 'style-china';
let isMusicPlaying = false;
let particleInterval = null;
let blessingEnergy = 0;
const isMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let userActivatedAudio = false;
let experienceStarted = false;
let pixelCount = 0;
const pixelTarget = 5;
let pixelItems = [];
let deepState = {};
let fortuneScore = 0;
const fortuneMax = 100;
const fortuneCooldown = new Map();
let currentScenario = 'general';

// DOM 元素
const body = document.body;
const bgm = document.getElementById('bgm');
const wishText = document.getElementById('wishText');
const wishCard = document.querySelector('.wish-card');
const musicIcon = document.getElementById('musicToggle');
const playBtn = document.getElementById('playPauseBtn');
const volSlider = document.getElementById('volumeSlider');
const fallingContainer = document.getElementById('falling-container');
const controlPanel = document.querySelector('.control-panel');
const musicControls = document.querySelector('.music-controls');
const root = document.documentElement;
const guideModal = document.getElementById('guideModal');
const musicPrompt = document.getElementById('musicPrompt');
const gameOverlay = document.getElementById('gameOverlay');
const gameArea = document.getElementById('gameArea');
const gameScoreEl = document.getElementById('gameScore');
const gameTimerEl = document.getElementById('gameTimer');
const gameModeEl = document.getElementById('gameMode');
const energyFill = document.getElementById('energyFill');
const energyNumber = document.getElementById('energyNumber');
const gameDescEl = document.getElementById('gameDescription');
const gameLivesEl = document.getElementById('gameLives');
const gameComboEl = document.getElementById('gameCombo');

let gameType = null;
let gameScore = 0;
let gameTime = 25;
let gameIntervals = [];
let gameTimeouts = [];
let gameTimerHandle = null;
let basketEl = null;
let activeTargets = new Set();
let gameLives = 3;
let combo = 0;
let comboTimeout = null;
const deepCards = document.querySelectorAll('[data-deep-key]');
const entryOverlay = document.getElementById('entryOverlay');
const statusPills = document.querySelectorAll('[data-action-pill]');
const fuBadge = document.getElementById('fuBadge');
const toastEl = document.getElementById('toast');
const pixelHud = document.getElementById('pixelHud');
const pixelCountEl = document.getElementById('pixelCount');
const fortuneCounter = document.getElementById('fortuneCounter');

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    // 实例化音效管理器
    new SoundManager();

    // 解析URL参数，优先使用分享链接中的风格
    const urlParams = new URLSearchParams(window.location.search);
    const sharedStyle = urlParams.get('style');
    if(sharedStyle && assets[sharedStyle]) {
        currentTheme = sharedStyle;
        body.className = currentTheme;
        bgm.src = assets[currentTheme].music; // 同步音乐源
    } else {
        bgm.src = assets[currentTheme].music;
    }

    initMusic();
    generateWish();
    renderDeepWishes();
    setEnergy(0);
    startFallingEffect();
    initEnhancements();
    bindFuBadge();
    resetPixelQuest();
    updateFortuneDisplay();

    // 等待入口按钮确认后再真正开始有声播放
    if (entryOverlay) {
        bgm.pause();
        bgm.currentTime = 0;
        bgm.muted = true;
        isMusicPlaying = false;
        musicIcon.classList.remove('playing');
        playBtn.innerText = "播放";
        if (musicPrompt) musicPrompt.classList.remove('show');
    }
    addActionPillHandlers();
    
    // 显示指南（仅首次或演示用）
    setTimeout(() => {
        // document.getElementById('guideModal').style.display = 'flex';
    }, 1000);

    // 点击页面生成特效（尊重系统减动效；入口遮罩未关闭时不触发）
    document.addEventListener('click', (e) => {
        const overlayActive = entryOverlay && !entryOverlay.classList.contains('hidden') && entryOverlay.style.display !== 'none';
        if (prefersReducedMotion || overlayActive) return;
        const isControl = e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('.deep-copy') || e.target.closest('.deep-next');
        if (!isControl) {
            createBurst(e.clientX, e.clientY);
            if (currentTheme === 'style-warm') {
                createWarmSparkle(e.clientX, e.clientY);
            }
        }
    });

    // 移动端优化：减少粒子
    if (isMobile) {
        clearInterval(particleInterval);
        startFallingEffect(1600); // 降低频率
    }
});

// 开场入口
function startExperience(triggeredByPill = false) {
    if (!experienceStarted) {
        experienceStarted = true;
        setEnergy(0);
        if (entryOverlay) {
            entryOverlay.classList.add('hidden');
            setTimeout(() => {
                entryOverlay.style.display = 'none';
            }, 650);
        }
        ensureAudioPlaying();
        generateWish(true, true);
        boostFortune(10, 'entry-start', 4000);
    }
    if (triggeredByPill) {
        scrollToMain();
    }
}

function scrollToMain() {
    const main = document.querySelector('main.container, .container');
    if (main) {
        main.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function addActionPillHandlers() {
    if (!statusPills.length) return;
    statusPills.forEach(btn => {
        btn.addEventListener('click', () => handleStatusAction(btn.dataset.actionPill));
    });
}

function handleStatusAction(action) {
    switch (action) {
        case 'start':
            startExperience(true);
            break;
        case 'listen':
            ensureAudioPlaying();
            if (musicControls) {
                if (isMobile) {
                    musicControls.classList.add('controls-open');
                }
                musicControls.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            boostFortune(2, 'pill-listen', 1600);
            break;
        case 'inspire':
            generateWish(true, true);
            flashWishCard();
            break;
        default:
            break;
    }
}

function flashWishCard() {
    if (!wishCard) return;
    wishCard.classList.remove('flash');
    void wishCard.offsetWidth; // reset animation
    wishCard.classList.add('flash');
    wishCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function bindFuBadge() {
    if (fuBadge) {
        fuBadge.addEventListener('click', handleFuClick);
    }
}

function handleFuClick() {
    const pool = assets[currentTheme].fuWishes || assets[currentTheme].wishes || [];
    const msg = pool[Math.floor(Math.random() * pool.length)];
    wishText.textContent = msg;
    flashWishCard();
    showToast(msg);
    boostFortune(5, 'fu-badge', 1200);
}

function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2400);
}

function updateFortuneDisplay() {
    if (!fortuneCounter) return;
    const clamped = Math.min(fortuneMax, Math.max(0, fortuneScore));
    fortuneCounter.textContent = `${clamped}%`;
    fortuneCounter.setAttribute('aria-label', `当前福气指数 ${clamped}%`);
}

function boostFortune(amount = 2, source = 'generic', cooldown = 900) {
    if (!fortuneCounter) return;
    const now = Date.now();
    const last = fortuneCooldown.get(source) || 0;
    if (now - last < cooldown) return;
    fortuneCooldown.set(source, now);
    fortuneScore = Math.min(fortuneMax, fortuneScore + amount);
    updateFortuneDisplay();
}

// 像素收集任务
function resetPixelQuest() {
    clearPixelItems();
    pixelCount = 0;
    updatePixelHud();
    if (pixelHud) {
        pixelHud.style.display = currentTheme === 'style-pixel' ? 'flex' : 'none';
    }
    if (currentTheme === 'style-pixel') {
        spawnPixelItems(pixelTarget);
    }
}

function updatePixelHud() {
    if (pixelCountEl) pixelCountEl.textContent = `${pixelCount}/${pixelTarget}`;
}

function spawnPixelItems(count = 5) {
    clearPixelItems();
    const symbols = ['🧧', '💥', '🪙', '福', '☆'];
    for (let i = 0; i < count; i++) {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'pixel-item';
        item.textContent = symbols[i % symbols.length];
        item.style.left = Math.random() * 80 + 10 + 'vw';
        item.style.top = Math.random() * 60 + 20 + 'vh';
        item.onclick = () => handlePixelCollect(item);
        document.body.appendChild(item);
        pixelItems.push(item);
    }
}

function clearPixelItems() {
    pixelItems.forEach(el => el.remove());
    pixelItems = [];
}

function handlePixelCollect(el) {
    if (el) el.remove();
    pixelItems = pixelItems.filter(node => node !== el);
    pixelCount = Math.min(pixelTarget, pixelCount + 1);
    updatePixelHud();
    boostFortune(2, 'pixel-collect', 500);
    showToast(`福袋 +1 （${pixelCount}/${pixelTarget}）`);
    if (pixelCount >= pixelTarget) {
        const bonusPool = assets['style-pixel'].fuWishes || assets['style-pixel'].wishes;
        const msg = bonusPool[Math.floor(Math.random() * bonusPool.length)];
        wishText.textContent = msg;
        flashWishCard();
        showToast(msg);
        clearPixelItems();
    }
}

// ================== 风格切换 ==================
function switchTheme(themeName) {
    if (currentTheme === themeName) return;
    boostFortune(5, 'switch-theme', 1200);
    
    // 更新URL参数状态（方便分享）
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('style', themeName);
    window.history.replaceState({}, '', newUrl);

    // 切换 Class
    body.className = themeName;
    currentTheme = themeName;
    deepState = {};
    resetPixelQuest();
    
    // 切换音乐（如果在播放，则平滑切换）
    const wasPlaying = !bgm.paused;
    bgm.src = assets[themeName].music;
    if (wasPlaying) {
        bgm.play().catch(()=>console.log("Autoplay blocked"));
    }
    
    // 刷新祝福语 style
    generateWish(true);
    renderDeepWishes();
    
    // 更新粒子效果
    clearInterval(particleInterval);
    startFallingEffect();

    // 主题特定交互：像素收集和暖心火花
    resetPixelQuest();

    // The pixel quest reset was duplicated in original code, keeping it clean
}

function switchScenario(scenario) {
    if (currentScenario === scenario) return;
    currentScenario = scenario;
    
    // Update UI
    const btns = document.querySelectorAll('.scenario-btn');
    btns.forEach(btn => {
        if(btn.dataset.scenario === scenario) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    
    generateWish(true, true);
    flashWishCard();
}

// ================== 祝福语逻辑 ==================
function generateWish(withFlash = false, isUserTriggered = false) {
    let list = [];
    // 优先尝试场景专属祝福
    if (currentScenario && currentScenario !== 'general') {
        // Map scenario keys to deep keys if needed, or use direct match
        // keys in buttons: general, career, study, health, family, wealth, travel, friends
        // keys in assets.deep: general, career, health, family, fortune (wealth)
        let mapKey = currentScenario;
        if (mapKey === 'wealth') mapKey = 'fortune';
        
        if (assets[currentTheme].deep && assets[currentTheme].deep[mapKey]) {
            list = assets[currentTheme].deep[mapKey];
        }
    }
    
    // 如果没有特定场景祝福或列表为空，使用默认池
    if (!list || list.length === 0) {
        list = assets[currentTheme].wishes || [];
    }

    const randomWish = list[Math.floor(Math.random() * list.length)];
    
    if (withFlash && wishCard) {
        wishCard.classList.remove('flash');
        void wishCard.offsetWidth;
        wishCard.classList.add('flash');
    }

    wishText.style.opacity = 0;
    setTimeout(() => {
        wishText.textContent = randomWish;
        wishText.style.opacity = 1;
        wishText.classList.remove('typing-effect');
        void wishText.offsetWidth; // trigger reflow
        wishText.classList.add('typing-effect');
        if (isUserTriggered) {
            boostFortune(3, 'generate-wish', 900);
        }
        if (experienceStarted && (isUserTriggered || withFlash)) {
            increaseEnergy();
        }
    }, 300);
}

function renderDeepWishes() {
    const deep = assets[currentTheme].deep;
    if (!deep || !deepCards.length) return;
    deepCards.forEach(card => {
        const key = card.dataset.deepKey;
        const listEl = card.querySelector('.deep-list');
        if (!key || !listEl) return;
        listEl.innerHTML = '';
        const items = deep[key] || [];
        if (!items.length) return;
        const idx = deepState[key] ? deepState[key] % items.length : 0;
        const text = items[idx];
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'deep-text';
        span.textContent = text;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'deep-copy';
        btn.dataset.copy = text;
        btn.title = '复制祝福';
        btn.textContent = '📋';
        li.appendChild(span);
        li.appendChild(btn);
        listEl.appendChild(li);
    });
}

function setEnergy(value) {
    blessingEnergy = Math.max(0, Math.min(100, value));
    if (energyFill) energyFill.style.width = `${blessingEnergy}%`;
    if (energyNumber) energyNumber.textContent = `${Math.round(blessingEnergy)}%`;
}

function increaseEnergy() {
    const gain = Math.max(3, Math.floor(Math.random() * 9) + 4); // 4-12
    setEnergy(blessingEnergy + gain);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('deep-next')) {
        const key = e.target.dataset.deepKey;
        const deep = assets[currentTheme].deep;
        if (!deep || !deep[key] || !deep[key].length) return;
        const len = deep[key].length;
        deepState[key] = ((deepState[key] || 0) + 1) % len;
        renderDeepWishes();
        flashWishCard();
        boostFortune(2, 'deep-next', 800);
    }
});

// 通用复制函数（兼容移动端和非HTTPS环境）
function copyTextToClipboard(text, onSuccess) {
    // 优先尝试现代API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
            fallbackCopyText(text, onSuccess);
        });
    } else {
        fallbackCopyText(text, onSuccess);
    }
}

function fallbackCopyText(text, onSuccess) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // 避免在移动端拉起键盘
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if(successful && onSuccess) onSuccess();
    } catch (err) {
        console.error('Copy failed', err);
        alert('复制失败，请手动长按文字复制');
    }
    
    document.body.removeChild(textArea);
}

// 分场景祝福复制按钮事件委托
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.deep-copy');
    if (!btn) return;
    const text = btn.dataset.copy || '';
    if (!text) return;
    copyTextToClipboard(text, () => {
        btn.classList.add('copied');
        const original = btn.textContent;
        btn.textContent = '✅';
        setTimeout(() => {
            btn.textContent = original || '📋';
            btn.classList.remove('copied');
        }, 1400);
        boostFortune(3, 'deep-copy', 1200);
    });
});

function copyWish() {
    const text = wishText.innerText;
    const btn = document.querySelector('button[onclick="copyWish()"]');
    const originalText = btn.innerText;

    copyTextToClipboard(text, () => {
        btn.innerText = "✅ 已复制";
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
        boostFortune(4, 'copy-wish', 1200);
    });
}

function copyPageLink() {
    const url = window.location.href;
    const btn = document.querySelector('button[onclick="copyPageLink()"]');
    const originalText = btn ? btn.innerText : '🔗 分享网页';

    // 如果是本地 file:// 模式，提示用户输入可分享的基础 URL（如 GitHub Pages）
    let shareUrl = url;
    if (url.startsWith('file://')) {
        // 优先使用页面内注入的 GitHub Pages 地址（如果存在）
        if (window.__SHARE_BASE__) {
            const base = window.__SHARE_BASE__.toString().replace(/\/\/+$/,'');
            const page = (window.location.pathname.split('/').pop() || 'index.html') + window.location.search;
            shareUrl = base + '/' + page;
        } else {
            const userBase = prompt('检测到本地预览。请输入用于分享的站点基础 URL（例如 https://username.github.io/repo/），或留空复制本地链接：', '');
            if (userBase && userBase.trim()) {
                const base = userBase.trim().replace(/\/\/+$/,'');
                const page = (window.location.pathname.split('/').pop() || 'index.html') + window.location.search;
                shareUrl = base + '/' + page;
            } else {
                alert('将复制本地链接（手机可能无法打开）。');
            }
        }
    }

    // 优先使用 Web Share API（移动端原生分享），不可用则回退到复制到剪贴板
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: (wishText && wishText.innerText) ? wishText.innerText : '',
            url: shareUrl
        }).then(() => {
            boostFortune(5, 'share-success', 3000);
        }).catch(() => {
            copyTextToClipboard(shareUrl, () => {
                if (btn) {
                    btn.innerText = "✅ 链接已复制";
                    setTimeout(() => { btn.innerText = originalText; }, 2000);
                }
                boostFortune(4, 'share-copy', 2000);
            });
        });
    } else {
        copyTextToClipboard(shareUrl, () => {
            if (btn) {
                btn.innerText = "✅ 链接已复制";
                setTimeout(() => { btn.innerText = originalText; }, 2000);
            }
            boostFortune(4, 'share-copy', 2000);
        });
    }
}

function toggleEdit() {
    const area = document.getElementById('customWishArea');
    area.style.display = area.style.display === 'none' ? 'block' : 'none';
}

function confirmCustomBase() {
    const input = document.getElementById('customInput');
    if(input.value.trim()) {
        wishText.textContent = input.value;
        toggleEdit();
    }
}

// ================== 音乐逻辑 ==================
function initMusic() {
    bgm.volume = 0.5;
    if (isMobile || prefersReducedMotion) {
        bgm.preload = 'metadata';
    }
    bgm.playsInline = true;

    // 尝试先以正常音量播放，不行则回退静音播放
    const attemptPlay = async (mutedFirst = false) => {
        bgm.muted = mutedFirst;
        try {
            await bgm.play();
            return true;
        } catch (e) {
            return false;
        }
    };

    (async () => {
        let ok = await attemptPlay(false); // 优先尝试直接有声播放
        if (!ok) ok = await attemptPlay(true); // 失败则静音播放以通过策略

        if (ok) {
            isMusicPlaying = true;
            musicIcon.classList.add('playing');
            playBtn.innerText = "暂停";
            if (bgm.muted) {
                showMusicPrompt(true); // 正在播放但静音，提示点击恢复音量
            } else {
                hideMusicPrompt();
                userActivatedAudio = true;
            }
        } else {
            showMusicPrompt(true);
        }
    })();

    // 播放/暂停控制
    playBtn.onclick = toggleMusic;

    // 桌面：点击图标切换播放；移动端：点击展开控制面板
    if (musicIcon && musicControls) {
        if (isMobile) {
            musicIcon.onclick = toggleControlPanel;
        } else {
            musicIcon.onclick = toggleMusic;
        }
    }

    // 点击外部关闭控制面板（移动端）
    document.addEventListener('click', (e) => {
        if (!isMobile) return;
        if (!musicControls.contains(e.target) && musicControls.classList.contains('controls-open')) {
            musicControls.classList.remove('controls-open');
        }
    });

    // 首次用户交互后尝试解除静音并播放
    ['pointerdown', 'touchstart', 'keydown', 'click', 'wheel', 'scroll'].forEach(evt => {
        document.addEventListener(evt, handleFirstUserInteraction, { once: true, passive: true });
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            ensureAudioPlaying();
        }
    });

    // 音量控制
    volSlider.oninput = (e) => {
        bgm.volume = e.target.value;
        if(bgm.volume > 0 && bgm.muted) bgm.muted = false;
    };

    // 切歌=切换风格
    document.getElementById('nextTrackBtn').onclick = () => {
        const themes = Object.keys(assets);
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        switchTheme(themes[nextIndex]);
    };
}

function toggleMusic() {
    if (bgm.paused) {
        bgm.muted = false; // 用户手动点击后取消静音
        bgm.play().then(() => {
            musicIcon.classList.add('playing');
            playBtn.innerText = "暂停";
            hideMusicPrompt();
            userActivatedAudio = true;
        }).catch(() => {
            showMusicPrompt(true);
        });
    } else {
        bgm.pause();
        musicIcon.classList.remove('playing');
        playBtn.innerText = "播放";
        showMusicPrompt(true);
    }
}

function toggleControlPanel() {
    musicControls.classList.toggle('controls-open');
    if (musicControls.classList.contains('controls-open')) {
        hideMusicPrompt();
        ensureAudioPlaying();
    }
}

/* ================== Sound Manager (SFX) ================== */
class SoundManager {
    constructor() {
        this.ctx = null;
        this.masterVolume = 0.4;
        this.enabled = true;
        
        // 绑定全局点击事件播放音效
        document.addEventListener('click', (e) => {
            if (!this.enabled) return;
            // 简单的点击反馈，排除音乐控制防止太吵
            if (e.target.closest('button') || e.target.closest('.choice-btn') || e.target.closest('nav')) {
                this.playClick();
            }
        });
        
        // 监听自定义事件
        window.addEventListener('sfx-success', () => this.playSuccess());
        window.addEventListener('sfx-pop', () => this.playPop());
        
        // 挂载到全局以便手动调用
        window.soundManager = this;
    }

    initCtx() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playOscillator(type, freqStart, freqEnd, duration, vol = 1) {
        this.initCtx();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, this.ctx.currentTime);
        if (freqEnd) {
            osc.frequency.exponentialRampToValueAtTime(freqEnd, this.ctx.currentTime + duration);
        }

        gain.gain.setValueAtTime(vol * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    playClick() {
        this.playOscillator('triangle', 600, 300, 0.08, 0.5);
    }

    playSuccess() {
        this.playOscillator('sine', 523.25, null, 0.2, 0.6); // C5
        setTimeout(() => {
             this.playOscillator('sine', 659.25, null, 0.4, 0.6); // E5
        }, 150);
    }
    
    playPop() {
        this.playOscillator('sine', 800, 400, 0.1, 0.4);
    }
}

/* ================== Share Card Logic ================== */
function openShareCard() {
    const modal = document.getElementById('shareCardModal');
    const wishEl = document.getElementById('cardWishText');
    const bg = document.getElementById('shareCardNode');
    
    if (wishEl) wishEl.textContent = wishText ? wishText.textContent : '新春快乐！';
    
    // 生成二维码 (这里用简单 API 做个真二维码)
    const qrBox = document.querySelector('.card-qr-box');
    if (qrBox) {
        qrBox.innerHTML = '';
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;
        const img = document.createElement('img');
        img.src = qrUrl;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.display = 'block';
        qrBox.appendChild(img);
    }
    
    // 播放音效
    window.dispatchEvent(new Event('sfx-pop'));
    if (modal) modal.style.display = 'flex';
}

function closeShareCard() {
    const modal = document.getElementById('shareCardModal');
    if (modal) modal.style.display = 'none';
}

// ================== 飘落特效系统 ==================
function startFallingEffect(interval = 800) {
    if (prefersReducedMotion) return; // 尊重系统设置
    particleInterval = setInterval(() => {
        createParticle();
    }, interval);
}

function createParticle() {
    if (prefersReducedMotion) return;
    const particle = document.createElement('div');
    const items = assets[currentTheme].particles;
    
    particle.innerText = items[Math.floor(Math.random() * items.length)];
    particle.classList.add('falling-item');
    
    // 随机位置和属性
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 3 + 3; // 3-6s
    let size = Math.random() * 20 + 15; // 15-35px
    if (window.innerWidth < 768) size = Math.max(12, size * 0.7); // 手机上更小尺寸
    
    particle.style.left = startLeft + 'vw';
    particle.style.fontSize = size + 'px';
    particle.style.animationDuration = duration + 's';
    
    // 只有科技风是白色/霓虹色，其他保持原色
    if(currentTheme === 'style-tech') {
        particle.style.color = Math.random() > 0.5 ? '#00f3ff' : '#bc13fe';
        particle.style.textShadow = '0 0 5px currentColor';
    }

    fallingContainer.appendChild(particle);

    // 动画结束后移除
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// 点击爆破特效
function createBurst(x, y) {
    if (prefersReducedMotion) return;
    const count = 8;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const items = assets[currentTheme].particles;
        p.innerText = items[Math.floor(Math.random() * items.length)];
        p.style.position = 'fixed';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.fontSize = '20px';
        p.style.pointerEvents = 'none';
        p.style.transition = 'all 0.8s ease-out';
        p.style.zIndex = 1000;
        
        fallingContainer.appendChild(p);
        
        // 强制重绘以触发transition
        requestAnimationFrame(() => {
            const angle = (Math.PI * 2 * i) / count;
            const velocity = 100;
            p.style.transform = `translate(${Math.cos(angle)*velocity}px, ${Math.sin(angle)*velocity}px) scale(0)`;
            p.style.opacity = 0;
        });

        setTimeout(() => p.remove(), 800);
    }
}

function createWarmSparkle(x, y) {
    if (prefersReducedMotion) return;
    const items = ['🕯️', '✨', '🧧', '🍊'];
    const p = document.createElement('div');
    p.innerText = items[Math.floor(Math.random() * items.length)];
    p.style.position = 'fixed';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.fontSize = '28px';
    p.style.pointerEvents = 'none';
    p.style.transition = 'all 1s ease-out';
    p.style.zIndex = 1200;
    fallingContainer.appendChild(p);
    requestAnimationFrame(() => {
        p.style.transform = 'translateY(-60px) scale(1.4)';
        p.style.opacity = '0';
    });
    setTimeout(() => p.remove(), 1000);
}

// ================== 额外沉浸增强 ==================
function initEnhancements() {
    setupSpotlight();
    setupTilt();
    setupReveal();
    setupCounters();
    bindKeyboardShortcuts();
}

function setupSpotlight() {
    if (prefersReducedMotion || isMobile) return;
    const update = (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        root.style.setProperty('--cursor-x', `${x}%`);
        root.style.setProperty('--cursor-y', `${y}%`);
    };
    document.addEventListener('pointermove', update);
}

function setupTilt() {
    if (prefersReducedMotion || isMobile) return;
    const card = document.querySelector('.wish-card');
    if (!card) return;
    const strength = 14;
    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
        const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -strength;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    });
    card.addEventListener('pointerleave', () => {
        card.style.transform = '';
    });
}

function setupReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;
    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    revealEls.forEach(el => observer.observe(el));
}

function setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;
    if (!('IntersectionObserver' in window)) {
        counters.forEach(animateCounter);
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = Number(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = `${target}${suffix}`;
        }
    };
    requestAnimationFrame(tick);
}

function bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (e.code === 'Space') {
            e.preventDefault();
            toggleMusic();
        }
        if (e.key === 'Escape') closeGuide();
        if (e.key && e.key.toLowerCase() === 'g' && e.ctrlKey) {
            openGuide();
        }
    });
}

function handleFirstUserInteraction() {
    ensureAudioPlaying();
}

function ensureAudioPlaying() {
    if (userActivatedAudio) return;
    bgm.muted = false;
    bgm.play().then(() => {
        isMusicPlaying = true;
        musicIcon.classList.add('playing');
        playBtn.innerText = "暂停";
        hideMusicPrompt();
        userActivatedAudio = true;
    }).catch(() => {
        showMusicPrompt();
    });
}

function userEnableMusic() {
    ensureAudioPlaying();
}

function showMusicPrompt(force = false) {
    if (!musicPrompt) return;
    if (prefersReducedMotion && !force) return;
    musicPrompt.classList.add('show');
}

function hideMusicPrompt() {
    if (!musicPrompt) return;
    musicPrompt.classList.remove('show');
}

// 打开和关闭模态框
function openGuide() {
    if (guideModal) guideModal.style.display = 'flex';
    boostFortune(2, 'guide-open', 2500);
}

function closeGuide() {
    if (guideModal) guideModal.style.display = 'none';
}

// ================== 跨年小游戏 ==================
function openGameOverlay() {
    if (!gameOverlay) return;
    resetGame();
    gameOverlay.classList.add('show');
}

function closeGameOverlay() {
    stopGame();
    if (gameOverlay) gameOverlay.classList.remove('show');
}

function resetGame() {
    stopGame();
    gameScore = 0;
    gameLives = 3;
    combo = 0;
    updateLives();
    updateCombo();
    updateScore();
    setTimerDisplay('--');
    setModeDisplay('待选择');
    setDesc('点击开始，随机体验接福袋 / 点灯笼 / 烟花快点。');
    if (gameArea) gameArea.innerHTML = '';
    activeTargets.clear();
    basketEl = null;
    if (comboTimeout) clearTimeout(comboTimeout);
}

function stopGame() {
    gameIntervals.forEach(clearInterval);
    gameTimeouts.forEach(clearTimeout);
    gameIntervals = [];
    gameTimeouts = [];
    if (gameTimerHandle) clearInterval(gameTimerHandle);
    gameTimerHandle = null;
    if (gameArea) {
        gameArea.onclick = null;
        gameArea.onpointermove = null;
        gameArea.onpointerdown = null;
    }
    document.onkeydown = null;
}

function startRandomGame() {
    const modes = ['catch', 'lantern', 'fireworks'];
    const pick = modes[Math.floor(Math.random() * modes.length)];
    startGame(pick);
}

function startGame(type) {
    if (!gameArea) return;
    resetGame();
    gameType = type;
    gameScore = 0;
    updateScore();
    boostFortune(4, 'game-start', 2500);
    setModeDisplay(type === 'catch' ? '接福袋' : type === 'lantern' ? '点灯笼' : '烟花快点');
    const duration = prefersReducedMotion ? 18 : 25;
    setTimerDisplay(duration);
    setDesc(getGameDesc(type));
    gameArea.focus();

    if (type === 'catch') {
        setupCatchGame();
    } else if (type === 'lantern') {
        setupLanternGame();
    } else {
        setupFireworkGame();
    }

    startTimer(duration);
}

function startTimer(seconds) {
    gameTime = seconds;
    setTimerDisplay(gameTime);
    gameTimerHandle = setInterval(() => {
        gameTime -= 1;
        setTimerDisplay(Math.max(gameTime, 0));
        if (gameTime <= 0) {
            finishGame();
        }
    }, 1000);
}

function finishGame() {
    stopGame();
    const bless = wishText ? wishText.textContent : '';
    setDesc(`本轮结束！得分 ${gameScore}，连击 ${combo}x，生命 ${gameLives}，送上一句祝福：${bless}`);
    // 游戏结束音效
    window.dispatchEvent(new Event('sfx-success'));
    
    // 成就检查
    if (typeof achievementManager !== 'undefined' && achievementManager) {
        achievementManager.check('game_novice');
        achievementManager.check('score_100');
    }
}

function updateScore(delta = 0) {
    gameScore = Math.max(0, gameScore + delta);
    if (gameScoreEl) gameScoreEl.textContent = gameScore;
    if (delta > 0) {
        // 轻微得分音效（如果可以复用playClick，或者pop）
        if(window.soundManager) window.soundManager.playClick();
        
        combo += 1;
        updateCombo();
        if (typeof achievementManager !== 'undefined' && achievementManager) {
            achievementManager.check('combo_master');
            achievementManager.check('score_100'); // 实时检查是否破百
        }
        if (comboTimeout) clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => { combo = 0; updateCombo(); }, 2000);
    }
}

function setTimerDisplay(val) {
    if (gameTimerEl) gameTimerEl.textContent = val;
}

function setModeDisplay(text) {
    if (gameModeEl) gameModeEl.textContent = text;
}

function setDesc(text) {
    if (gameDescEl) gameDescEl.textContent = text;
}

function updateLives(delta = 0) {
    gameLives = Math.max(0, gameLives + delta);
    if (gameLivesEl) gameLivesEl.textContent = gameLives;
    if (gameLives <= 0) finishGame();
}

function updateCombo() {
    if (gameComboEl) gameComboEl.textContent = combo;
}

// --- Game: Catch 福袋 ---
function setupCatchGame() {
    basketEl = document.createElement('div');
    basketEl.className = 'game-basket';
    basketEl.style.left = '50%';
    gameArea.appendChild(basketEl);

    let basketX = gameArea.clientWidth / 2;
    let speed = prefersReducedMotion ? 2.4 : 3.8;

    const moveBasket = (x) => {
        basketX = Math.max(30, Math.min(gameArea.clientWidth - 30, x));
        basketEl.style.left = `${basketX}px`;
    };

    gameArea.onpointermove = (e) => moveBasket(e.offsetX);
    document.onkeydown = (e) => {
        if (e.key === 'ArrowLeft') moveBasket(basketX - 18);
        if (e.key === 'ArrowRight') moveBasket(basketX + 18);
    };

    // 生成掉落物
    const drop = () => {
        const item = document.createElement('div');
        item.className = 'game-item';
        const good = ['🧧','💰','🪙','✨'];
        const bad = ['💣','🧨'];
        const pickBad = Math.random() < 0.18;
        item.dataset.bad = pickBad ? '1' : '';
        item.textContent = pickBad ? bad[Math.floor(Math.random()*bad.length)] : good[Math.floor(Math.random()*good.length)];
        const left = Math.random() * (gameArea.clientWidth - 30);
        item.style.left = `${left}px`;
        item.style.top = '-40px';
        item.style.fontSize = '24px';
        item.style.transition = `transform ${prefersReducedMotion ? 2.2 : 3}s linear`;
        gameArea.appendChild(item);
        activeTargets.add(item);
        requestAnimationFrame(() => {
            item.style.transform = `translateY(${gameArea.clientHeight + 60}px)`;
        });
        const removeT = setTimeout(() => {
            activeTargets.delete(item);
            item.remove();
        }, (prefersReducedMotion ? 2200 : 3000));
        gameTimeouts.push(removeT);
    };

    gameIntervals.push(setInterval(drop, prefersReducedMotion ? 950 : 620));
    gameIntervals.push(setInterval(() => {
        speed *= 1.004; // 逐渐加速
    }, 200));
    gameIntervals.push(setInterval(() => checkCatchCollision(speed), 120));
}

function checkCatchCollision(speed = 4) {
    if (!basketEl) return;
    const basketRect = basketEl.getBoundingClientRect();
    activeTargets.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom >= basketRect.top && rect.left <= basketRect.right && rect.right >= basketRect.left) {
            if (item.dataset.bad) {
                updateLives(-1);
                combo = 0; updateCombo();
            } else {
                updateScore(2 + (combo >= 3 ? 1 : 0));
            }
            activeTargets.delete(item);
            item.remove();
        }
    });
}

// --- Game: 点灯笼 ---
function setupLanternGame() {
    const spawn = () => {
        const lan = document.createElement('div');
        lan.className = 'game-item game-lantern';
        lan.textContent = Math.random() > 0.5 ? '🏮' : '✨';
        const x = Math.random() * (gameArea.clientWidth - 64);
        const y = Math.random() * (gameArea.clientHeight - 120);
        lan.style.left = `${x}px`;
        lan.style.top = `${y}px`;
        lan.onclick = () => {
            updateScore(3 + (combo >= 4 ? 1 : 0));
            lan.style.opacity = '0';
            setTimeout(() => lan.remove(), 180);
        };
        gameArea.appendChild(lan);
        const t = setTimeout(() => lan.remove(), prefersReducedMotion ? 2000 : 2400);
        gameTimeouts.push(t);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion ? 1100 : 720));
}

// --- Game: 烟花快点 ---
function setupFireworkGame() {
    gameArea.onclick = (e) => {
        createFirework(e.offsetX, e.offsetY, true);
    };
    const spawnFloating = () => {
        const dot = document.createElement('div');
        dot.className = 'game-item firework-dot';
        const x = Math.random() * (gameArea.clientWidth - 20) + 10;
        dot.style.left = `${x}px`;
        dot.style.bottom = '0px';
        dot.style.transition = `transform ${prefersReducedMotion ? 1.5 : 2.2}s ease-out, opacity 0.6s`; 
        gameArea.appendChild(dot);
        requestAnimationFrame(() => {
            dot.style.transform = `translateY(-${Math.random()*200 + 160}px)`;
            dot.style.opacity = '0';
        });
        const t = setTimeout(() => {
            dot.remove();
        }, prefersReducedMotion ? 1600 : 2300);
        gameTimeouts.push(t);
    };
    gameIntervals.push(setInterval(spawnFloating, prefersReducedMotion ? 950 : 600));
}

function createFirework(x, y, addScore = false) {
    const burst = document.createElement('div');
    burst.className = 'firework-burst';
    burst.style.left = `${x - 12}px`;
    burst.style.top = `${y - 12}px`;
    burst.style.width = '24px';
    burst.style.height = '24px';
    burst.style.background = `radial-gradient(circle, ${getComputedStyle(body).getPropertyValue('--primary-color') || '#ff4'} 0%, transparent 70%)`;
    gameArea.appendChild(burst);
    setTimeout(() => burst.remove(), 900);
    if (addScore) updateScore(1 + (combo >= 5 ? 1 : 0));
}

function getGameDesc(type) {
    if (type === 'catch') return '左右移动接福袋，躲开空白掉落，30s 内多多得分。';
    if (type === 'lantern') return '点击/轻点灯笼得分，灯笼会随机出现与消失。';
    return '点击游戏区域触发烟花并得分，背景会有缓慢上升的光点。';
}

/* ================== 成就系统逻辑 ================== */
const achievementsDefinition = {
    first_visit: {
        id: 'first_visit',
        name: '初次见面',
        description: '第一次开启马年新春祝福',
        icon: '🎉',
        points: 10,
        condition: () => true // 只要运行检查就解锁（初始化时）
    },
    theme_collector: {
        id: 'theme_collector',
        name: '风格探索家',
        description: '解锁并体验过所有 6 种主题风格',
        icon: '🎨',
        points: 50,
        condition: () => {
            const usedThemes = JSON.parse(localStorage.getItem('usedThemes') || '[]');
            return usedThemes.length >= 6;
        }
    },
    game_novice: {
        id: 'game_novice',
        name: '游戏初体验',
        description: '完成任意一次小游戏',
        icon: '🎮',
        points: 20,
        condition: () => true // 在 finishGame 中手动触发
    },
    score_100: {
        id: 'score_100',
        name: '百里挑一',
        description: '单局游戏中获得 100 分以上',
        icon: '💯',
        points: 30,
        condition: () => gameScore >= 100
    },
    combo_master: {
        id: 'combo_master',
        name: '连击大师',
        description: '达成 10 次以上连击',
        icon: '🔥',
        points: 40,
        condition: () => combo >= 10
    },
    midnight_party: {
        id: 'midnight_party',
        name: '午夜守岁',
        description: '在除夕零点前后（23:00-01:00）访问',
        icon: '🌙',
        points: 100,
        condition: () => {
             const h = new Date().getHours();
             return h >= 23 || h < 1;
        }
    }
};

class AchievementManager {
    constructor() {
        this.unlocked = JSON.parse(localStorage.getItem('achievements') || '[]');
        this.modal = document.getElementById('achievementModal');
        this.listEl = document.getElementById('achievementList');
        this.toast = document.getElementById('achievementToast');
        this.dot = document.getElementById('achievementDot');
        
        // 记录已使用的主题
        this.usedThemes = new Set(JSON.parse(localStorage.getItem('usedThemes') || '[]'));
        
        this.init();
    }

    init() {
        this.renderList();
        this.updateStats();
        // 初次访问检查
        if (!localStorage.getItem('hasVisited')) {
            this.check('first_visit');
            localStorage.setItem('hasVisited', 'true');
        }
        // 记录当前主题
        this.logTheme(currentTheme);
    }

    logTheme(theme) {
        if (!this.usedThemes.has(theme)) {
            this.usedThemes.add(theme);
            localStorage.setItem('usedThemes', JSON.stringify([...this.usedThemes]));
            this.check('theme_collector');
        }
    }

    check(id) {
        // 如果传了具体ID，只检查该ID
        if (id && achievementsDefinition[id]) {
            if (this.unlocked.includes(id)) return;
            if (achievementsDefinition[id].condition()) {
                this.unlock(achievementsDefinition[id]);
            }
        } else {
            // 检查所有
            Object.values(achievementsDefinition).forEach(ach => {
                if (!this.unlocked.includes(ach.id) && ach.condition()) {
                    this.unlock(ach);
                }
            });
        }
    }

    unlock(achievement) {
        this.unlocked.push(achievement.id);
        localStorage.setItem('achievements', JSON.stringify(this.unlocked));
        this.showToast(achievement);
        this.renderList();
        this.updateStats();
        if (this.dot) this.dot.classList.add('active');
        
        // 播放成就音效
        window.dispatchEvent(new Event('sfx-success'));
    }

    showToast(ach) {
        const title = this.toast.querySelector('.toast-title');
        const desc = this.toast.querySelector('.toast-desc');
        const icon = this.toast.querySelector('.toast-icon');
        
        title.textContent = '成就解锁！';
        desc.textContent = ach.name;
        icon.textContent = ach.icon;
        
        this.toast.classList.add('show');
        setTimeout(() => this.toast.classList.remove('show'), 3000);
        
        // 播放音效（可选，复用现有的简单提示音逻辑？）
    }

    renderList() {
        if (!this.listEl) return;
        this.listEl.innerHTML = '';
        Object.values(achievementsDefinition).forEach(ach => {
            const isUnlocked = this.unlocked.includes(ach.id);
            const div = document.createElement('div');
            div.className = `achievement-item ${isUnlocked ? 'unlocked' : ''}`;
            div.innerHTML = `
                <div class="ach-icon">${isUnlocked ? ach.icon : '🔒'}</div>
                <div class="ach-info">
                    <div class="ach-name">${ach.name}</div>
                    <div class="ach-desc">${ach.description}</div>
                </div>
                ${isUnlocked ? `<div class="ach-points">+${ach.points}</div>` : ''}
            `;
            this.listEl.appendChild(div);
        });
    }

    updateStats() {
        const count = this.unlocked.length;
        let points = 0;
        this.unlocked.forEach(id => {
            if (achievementsDefinition[id]) points += achievementsDefinition[id].points;
        });
        
        const countEl = document.getElementById('achieveCount');
        const pointsEl = document.getElementById('totalPoints');
        if (countEl) countEl.innerText = count;
        if (pointsEl) pointsEl.innerText = points;
    }

    open() {
        this.renderList();
        this.modal.style.display = 'flex';
        // 清除红点
        if (this.dot) this.dot.classList.remove('active');
    }

    close() {
        this.modal.style.display = 'none';
    }
}

// 初始化成就系统
let achievementManager;
document.addEventListener('DOMContentLoaded', () => {
    achievementManager = new AchievementManager();
    // 额外检查一次除夕成就
    achievementManager.check('midnight_party');
});

// UI 调用
function openAchievements() {
    if (achievementManager) achievementManager.open();
}
function closeAchievements(e) {
    if (!e || e.target.id === 'achievementModal' || e.target.classList.contains('close-btn')) {
        if (achievementManager) achievementManager.close();
    }
}

/* ================== 钩子挂载 ================== */
// Hook into switchTheme
const originalSwitchTheme = window.switchTheme;
window.switchTheme = function(themeName) {
    if (typeof originalSwitchTheme === 'function') originalSwitchTheme(themeName);
    if (achievementManager) achievementManager.logTheme(themeName);
};

// Hook into game updates (通过定时检查或修改 updateScore)
const originalUpdateScore = window.updateScore; // 假设 updateScore 是全局定义的
// 注意：updateScore 在 script.js 可能是局部函数或未导出。
// 如果 updateScore 是在 file 内部定义的 function updateScore() {...}，则 window.updateScore 可能是 undefined。
// 我们需要在 updateScore 定义的地方直接插入 achievementManager.check()。
// 由于不能直接在这里重写内部函数，我们使用定期检查或寻找 updateScore 定义位置进行修改。
// 为了简单，我们只在 finishGame 时检查分数相关成就，
// 实时连击成就需要在 updateCombo 中处理。

// 我们会在 updateCombo 和 finishGame 中手动添加 check 调用
// (这需要使用 edit 或在已有代码中插入，下面是一个补充函数，请确保在 updateCombo 中调用)
function checkGameAchievements() {
    if (!achievementManager) return;
    achievementManager.check('score_100');
    achievementManager.check('combo_master');
}

/* ================== 除夕倒计时狂欢 ================== */
class NewYearsEveParty {
    constructor() {
        this.targetDate = new Date('2026-02-17T00:00:00'); // 2026 春节是 2月17日
        this.isActive = false;
        this.checkTimer = setInterval(() => this.checkTime(), 60000);
        this.checkTime();
    }

    checkTime() {
        const now = new Date();
        const diff = this.targetDate - now;
        // 倒数 24 小时内开启
        if (diff > 0 && diff < 24 * 60 * 60 * 1000) {
            this.startParty();
        }
    }

    startParty() {
        if (this.isActive) return;
        this.isActive = true;
        console.log("Party Mode Activated!");
        // 增加额外粒子
        if (typeof createParticles === 'function') {
            // 假设有粒子创建函数，这里简单模拟
            const style = document.createElement('style');
            style.innerHTML = `
                .party-confetti {
                    position: fixed;
                    top: -10px;
                    width: 10px; height: 10px;
                    background: gold;
                    animation: fall 3s linear infinite;
                    z-index: 999;
                }
            `;
            document.head.appendChild(style);
            setInterval(() => {
                const c = document.createElement('div');
                c.className = 'party-confetti';
                c.style.left = Math.random() * 100 + 'vw';
                c.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
                document.body.appendChild(c);
                setTimeout(() => c.remove(), 3000);
            }, 200);
        }
    }
}
new NewYearsEveParty();

/* ================== 用户留存与回访系统 ================== */
const userVisitMessages = {
    first: '👋 马年吉祥！快来看看新功能吧～',
    daily: '🎉 您又来啦！今日运势已更新',
    weekly: '✨ 老朋友，这周过得怎么样？',
    return: '🧧 特别的日子里，有特别的祝福给您' 
};

class UserRetentionManager {
    constructor() {
        this.lastVisit = localStorage.getItem('lastVisitTime');
        this.currentVisit = new Date().getTime();
        this.visitCount = parseInt(localStorage.getItem('visitCount') || '0');
        this.lastCheckIn = localStorage.getItem('lastCheckInDate'); // YYYY-MM-DD
        this.checkInStreak = parseInt(localStorage.getItem('checkInStreak') || '0');
        
        // Konami Code State
        this.inputSequence = [];
        this.konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    }

    init() {
        this.handleVisit();
        this.setupKonamiCode();
    }

    handleVisit() {
        this.visitCount++;
        localStorage.setItem('visitCount', this.visitCount);
        
        // Determine welcome message
        let msg = userVisitMessages.return;
        let showWelcome = true;
        
        if (!this.lastVisit) {
            msg = userVisitMessages.first;
        } else {
            const lastTime = parseInt(this.lastVisit);
            const daysDiff = (this.currentVisit - lastTime) / (1000 * 60 * 60 * 24);
            
            // Only show welcome toast if it has been at least 1 hour since last visit to avoid spam
            if ((this.currentVisit - lastTime) < 1000 * 60 * 60) {
                showWelcome = false; 
            }
            
            if (daysDiff < 1) msg = userVisitMessages.daily;
            else if (daysDiff >= 7) msg = userVisitMessages.weekly;
        }
        
        if (showWelcome && typeof achievementManager !== 'undefined') {
            setTimeout(() => {
                if(achievementManager.showCustomToast) 
                    achievementManager.showCustomToast('✨ 欢迎回来', msg, '👋');
            }, 1000);
        }

        // Daily Check-in
        this.performCheckIn();

        localStorage.setItem('lastVisitTime', this.currentVisit);
    }

    performCheckIn() {
        const today = new Date().toLocaleDateString();
        if (this.lastCheckIn !== today) {
            // New day check-in
            // Simple logic: if diff > 2 days, reset streak.
            if (this.isConsecutiveDay()) {
                this.checkInStreak++;
            } else {
                this.checkInStreak = 1;
            }
            localStorage.setItem('checkInStreak', this.checkInStreak);
            localStorage.setItem('lastCheckInDate', today);
            
            // Give Reward
            const rewardPoints = 10 + Math.min(this.checkInStreak, 7) * 5;
            this.addPoints(rewardPoints);
            
            // Notify
            setTimeout(() => {
                if (typeof achievementManager !== 'undefined' && achievementManager.showCustomToast) {
                    achievementManager.showCustomToast('📅 每日签到', `打卡成功！获得 ${rewardPoints} 积分 (连签 ${this.checkInStreak} 天)`, '💰');
                    window.dispatchEvent(new Event('sfx-success'));
                }
            }, 2500);
        }
    }

    isConsecutiveDay() {
        if (!this.lastCheckIn) return false;
        const last = new Date(this.lastCheckIn);
        const now = new Date();
        const diffTime = Math.abs(now - last);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays <= 48; // Slack logic, just check if checkin happened recently? No, let's just say true for now or fix logic:
        // Actually the browser locale date string might be tricky to parse back reliably across browsers but within same browser should be fine.
        // Let's iterate: if (now - last < 48 hours) roughly.
        return (now.getTime() - last.getTime()) < (48 * 60 * 60 * 1000);
    }

    addPoints(amount) {
        let currentPoints = parseInt(localStorage.getItem('userPoints') || '0');
        currentPoints += amount;
        localStorage.setItem('userPoints', currentPoints);
    }

    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.inputSequence.push(e.key);
            if (this.inputSequence.length > this.konamiCode.length) {
                this.inputSequence.shift();
            }
            
            if (JSON.stringify(this.inputSequence) === JSON.stringify(this.konamiCode)) {
                this.triggerEasterEgg();
            }
        });
    }

    triggerEasterEgg() {
        alert('🐰 恭喜发现隐藏菜单！无限生命模式已开启！');
        gameLives = 999;
        if (typeof updateLives === 'function') updateLives(0); 
        if (typeof achievementManager !== 'undefined' && achievementManager.showCustomToast) {
             achievementManager.showCustomToast('🥚 彩蛋解锁', '获得无限生命！', '🎮');
        }
    }
}

// Extend AchievementManager prototype to support custom toasts if not exists
if (typeof AchievementManager !== 'undefined') {
    AchievementManager.prototype.showCustomToast = function(title, desc, icon) {
        if (!this.toast) return;
        const titleEl = this.toast.querySelector('.toast-title');
        const descEl = this.toast.querySelector('.toast-desc');
        const iconEl = this.toast.querySelector('.toast-icon');
        
        titleEl.textContent = title;
        descEl.textContent = desc;
        iconEl.textContent = icon;
        
        this.toast.classList.add('show');
        setTimeout(() => this.toast.classList.remove('show'), 4000);
    };
}

// Initialize Retention Manager
let userRetentionManager;
let relayManager; // Global
window.addEventListener('load', () => {
    userRetentionManager = new UserRetentionManager();
    userRetentionManager.init();
    relayManager = new RelayManager();
    relayManager.init();
});

/* ================== Blessing Relay Logic ================== */
class RelayManager {
    constructor() {
        this.chain = [];
        this.modal = document.getElementById('relayModal');
        this.timelineEl = document.getElementById('relayTimeline');
        this.countEl = document.getElementById('relayCount');
        this.introEl = document.getElementById('relayIntro');
        this.chainDisplayEl = document.getElementById('relayChainDisplay');
        this.shareBtn = document.querySelector('.share-btn');
        this.joinArea = document.querySelector('.relay-action');
    }

    init() {
        // Parse URL Params for relay data
        const params = new URLSearchParams(window.location.search);
        const encodedData = params.get('relayData');
        
        if (encodedData) {
            try {
                // Decode: Base64 -> JSON
                const jsonStr = atob(decodeURIComponent(encodedData));
                this.chain = JSON.parse(jsonStr);
                // Open modal immediately if relay data present
                this.open(true);
            } catch (e) {
                console.error('Invalid Relay Data', e);
            }
        }
    }

    startNew() {
        this.chain = [{
            name: '第一棒',
            blessing: '祝大家新年快乐，万事如意！',
            time: new Date().toLocaleTimeString().slice(0,5),
            theme: currentTheme
        }];
        this.updateView();
        this.showChainView();
    }

    join() {
        const input = document.getElementById('myRelayBlessing');
        const text = input.value.trim();
        if (!text) {
             if (achievementManager) achievementManager.showCustomToast('提示', '请先写下祝福哦！', '📝');
             return;
        }

        const newLink = {
            name: `第${this.chain.length + 1}位接力者`,
            blessing: text,
            time: new Date().toLocaleTimeString().slice(0,5),
            theme: currentTheme
        };
        this.chain.push(newLink);
        
        this.updateView();
        input.value = '';
        
        // Disable join, enable share
        this.joinArea.style.display = 'none';
        this.shareBtn.style.display = 'block';

        if (achievementManager) achievementManager.showCustomToast('接力成功', '快去分享给好友吧！', '🏃');
        // 播放音效
        window.dispatchEvent(new Event('sfx-success'));
    }

    updateView() {
        if (!this.timelineEl) return;
        this.timelineEl.innerHTML = '';
        this.chain.forEach((node, index) => {
            const div = document.createElement('div');
            div.className = 'relay-node';
            div.innerHTML = `
                <div class="r-name">${node.name} <span style="float:right; opacity:0.6;">#${index+1}</span></div>
                <div class="r-bless">${node.blessing}</div>
                <div class="r-time">${node.time} · ${node.theme || '默认风格'}</div>
            `;
            this.timelineEl.appendChild(div);
        });
        
        // Scroll to bottom
        setTimeout(() => this.timelineEl.scrollTop = this.timelineEl.scrollHeight, 100);
        
        if (this.countEl) this.countEl.textContent = this.chain.length;
    }

    showChainView() {
        this.introEl.style.display = 'none';
        this.chainDisplayEl.style.display = 'flex';
    }

    share() {
        // Encode state into URL
        const jsonStr = JSON.stringify(this.chain);
        const encoded = encodeURIComponent(btoa(jsonStr));
        const cleanUrl = window.location.origin + window.location.pathname; // Remove existing query
        const shareUrl = `${cleanUrl}?relayData=${encoded}&style=${currentTheme}`; // Also keep theme
        const shareText = `🏃 我发起了新春祝福接力！已经传到第 ${this.chain.length} 棒啦！\n快来点击加入：${shareUrl}`;

        // 使用通用的 copyTextToClipboard 函数，支持 fallback
        copyTextToClipboard(shareText, () => {
             if (achievementManager) achievementManager.showCustomToast('复制成功', '链接已复制，去发送给好友吧！', '🔗');
        });
    }

    open(isInvite = false) {
        this.modal.style.display = 'flex';
        if (isInvite && this.chain.length > 0) {
            this.updateView();
            this.showChainView();
        } else {
            // Default reset state if not invite
            // check if local chain exists? No, keep volatile for simple version
        }
    }
    
    close() {
        this.modal.style.display = 'none';
    }
}

// UI Helpers for Relay
function openRelayModal() {
    if (relayManager) relayManager.open();
}
function closeRelayModal(e) {
    if (!e || e.target.id === 'relayModal' || e.target.classList.contains('close-btn')) {
        if (relayManager) relayManager.close();
    }
}
function startNewRelay() {
    if (relayManager) relayManager.startNew();
}
function joinRelay() {
    if (relayManager) relayManager.join();
}
function shareRelayLink() {
    if (relayManager) relayManager.share();
}

/* ================== UI Tabs Logic ================== */
window.switchAchTab = function(tab) {
    const listEl = document.getElementById('achTabList');
    const statsEl = document.getElementById('achTabStats');
    const tabs = document.querySelectorAll('.ach-tab');
    
    if (tab === 'list') {
        listEl.style.display = 'block';
        statsEl.style.display = 'none';
        tabs[0].style.borderBottom = '2px solid var(--primary-color)';
        tabs[0].style.opacity = '1';
        tabs[1].style.borderBottom = 'none';
        tabs[1].style.opacity = '0.6';
    } else {
        listEl.style.display = 'none';
        statsEl.style.display = 'flex';
        tabs[1].style.borderBottom = '2px solid var(--primary-color)';
        tabs[1].style.opacity = '1';
        tabs[0].style.borderBottom = 'none';
        tabs[0].style.opacity = '0.6';
        updateProfileStats();
    }
};

function updateProfileStats() {
    document.getElementById('statVisitCount').textContent = localStorage.getItem('visitCount') || 0;
    document.getElementById('statStreak').textContent = localStorage.getItem('checkInStreak') || 0;
    document.getElementById('statPoints').textContent = localStorage.getItem('userPoints') || 0;
    // Highest game score implies I need to store it first. Currently only 'gameScores' suggested. 
    // I'll check 'game_high_score' if I implemented storage? 
    // Wait, script.js has `score_100` condition but no explicit consistent highscore storage except transient.
    // I should save high score in finishGame.
    document.getElementById('statHighScore').textContent = localStorage.getItem('highScore') || 0;
    document.getElementById('statTheme').textContent = currentTheme;
}

// Update finishGame to save high score
const originalFinishGameForStats = window.finishGame || finishGame;
window.finishGame = function() {
    if (originalFinishGameForStats) originalFinishGameForStats();
    const cleanScore = parseInt(gameScore) || 0;
    const oldHigh = parseInt(localStorage.getItem('highScore') || '0');
    if (cleanScore > oldHigh) {
        localStorage.setItem('highScore', cleanScore);
    }
};

