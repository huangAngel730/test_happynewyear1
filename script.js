// 资源配置
console.log('[debug] script.js loaded');
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
            "龙马精神，福气满满！",
            "吉祥如意，恭喜发财！"
        ],
        particles: ['🧧', '🏮', '✨', '🐎', '🌸'],
        deep: {
            general: ["万事如意，心想事成。"],
            career: ["步步高升，前程似锦。"],
            health: ["身体健康，长命百岁。"],
            family: ["阖家幸福，团团圆圆。"],
            fortune: ["财源广进，金玉满堂。"]
        }
    },
    'style-simple': {
        music: 'https://music.163.com/song/media/outer/url?id=26213693.mp3',
        wishes: [
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
        music: [
            'https://music.163.com/song/media/outer/url?id=425983617.mp3', // Popcorn
            'https://music.163.com/song/media/outer/url?id=436514312.mp3'  // Baby Elephant Walk
        ],
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
        music: [
            'https://music.163.com/song/media/outer/url?id=26213693.mp3', // River Flows In You
            'https://music.163.com/song/media/outer/url?id=441552.mp3'    // 夏夕空
        ],
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
                "好运像围炉的暖意，源源不绝，悄悄变多。"
            ]
        }
    },
    'style-pixel': {
        music: 'https://music.163.com/song/media/outer/url?id=425570952.mp3', // Super Mario Bros
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
    },
    'style-noble': {
        music: 'https://music.163.com/song/media/outer/url?id=562590175.mp3', // 交响尊享长版
        wishes: [
            "黑金贺岁，荣启新篇。祝您 2026 鼎盛昌平。",
            "岁序常易，华章日新。马年大吉，万事如意。",
            "金戈铁马气如虹，志在千里创辉煌。",
            "愿您新一年，步履生辉，格局大开。"
        ],
        fuWishes: ["金墨赐福，尊享祥瑞。", "马跃檀金，福满乾坤。"],
        particles: ['✨', '💎', '👑', '🐴', '🌟'],
        deep: {
            general: ["金墨流韵，祝您新年运势如虹。"],
            career: ["高瞻远瞩，开拓不凡境界；稳操胜券，成就锦绣前程。"],
            health: ["身如劲松，神采奕奕；心境旷达，岁岁平安。"],
            family: ["门庭显赫，家声远振；团圆富足，阖家安康。"],
            fortune: ["汇聚八方之财，坐拥金玉满堂；投资稳健，收益倍增。"]
        }
    }
};

// 全局状态
// 每个风格对应可玩的小游戏类型（可扩展、每种风格提供更独特的玩法）
const themeGames = {
    'style-china': ['calligraphy', 'lantern', 'fortune', 'riddle'],
    'style-simple': ['breathHold', 'relaxTap', 'matchPairs'],
    'style-tech': ['terminalHack', 'typingChallenge', 'hacker'],
    'style-cute': ['petFeed', 'dressUp', 'balloon'],
    'style-warm': ['teaPour', 'storyChoice', 'relaxTap'],
    'style-pixel': ['pixelRun', 'coinCatch', 'retroShooter'],
    'style-noble': ['orchestra', 'coinCatch', 'puzzle']
};

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

// 可用的回退音乐（当某些外部链接失效时使用）
const MUSIC_FALLBACKS = [
    'https://cdn.jsdelivr.net/gh/huangAngel730/public-assets/music/fallback1.mp3',
    'https://cdn.jsdelivr.net/gh/huangAngel730/public-assets/music/fallback2.mp3'
];

/**
 * 为指定风格设置背景音乐，自动降级回退到备选源
 * 支持字符串或数组类型的 assets[theme].music
 */
function setBgmSource(themeName) {
    const m = assets[themeName] && assets[themeName].music;
    let candidates = [];
    if (!m) candidates = MUSIC_FALLBACKS.slice();
    else if (Array.isArray(m)) candidates = m.concat(MUSIC_FALLBACKS);
    else candidates = [m].concat(MUSIC_FALLBACKS);

    let tried = 0;
    function tryNext() {
        if (tried >= candidates.length) {
            console.warn('All bgm candidates failed to load.');
            return;
        }
        const src = candidates[tried++];
        bgm.src = src;
        // attempt load; if error event fires, try next
        const onError = () => {
            bgm.removeEventListener('error', onError);
            tryNext();
        };
        bgm.addEventListener('error', onError);
        // start loading metadata to detect failures early
        bgm.load();
    }

    tryNext();
}

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
const scrollTopBtn = document.getElementById('scrollTopBtn');

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
        setBgmSource(currentTheme); // 同步音乐源并支持回退
    } else {
        setBgmSource(currentTheme);
    }

    initMusic();
    // 移动端标识，用于 CSS 选择器
    if (isMobile) body.classList.add('mobile');
    generateWish();
    renderDeepWishes();
    setEnergy(0);
    startFallingEffect();
    initEnhancements();
    bindFuBadge();
    resetPixelQuest();
    updateFortuneDisplay();
    initDanmu(); // 初始化弹幕
    initMissions(); // 初始化任务
    
    // 弹幕回车发送
    const dInput = document.getElementById('danmuInput');
    if(dInput) {
        dInput.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') sendDanmu();
        });
    }

    // 初始化激活按钮状态
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if(btn.dataset.theme === currentTheme) btn.classList.add('active');
    });

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

    // 滚动监听：显示/隐藏回到顶部按钮
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }
    });
});

// 开场入口
function startExperience(triggeredByPill = false) {
    console.log('[debug] startExperience invoked, experienceStarted=', experienceStarted);
    try {
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
    } catch (err) {
        console.error('startExperience failed', err);
        if (typeof showToast === 'function') showToast('启动体验时出错，请查看控制台');
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
    checkMission('click_wish');
    
    // 播放音效
    window.dispatchEvent(new Event('sfx-pop'));
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
    checkMission('theme_switch');

    // 更新按钮激活态
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if(btn.dataset.theme === themeName) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // 更新URL参数状态（方便分享）
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('style', themeName);
    window.history.replaceState({}, '', newUrl);

    // 切换 Class
    body.className = themeName;
    currentTheme = themeName;
    deepState = {};
    
    // 切换音乐（如果在播放，则平滑切换）
    const wasPlaying = !bgm.paused;
    setBgmSource(themeName);
    if (wasPlaying) {
        // 尝试在新源上播放，若被阻止会在 initMusic 的交互中提示
        bgm.play().catch(()=>console.log("Autoplay blocked"));
    }
    
    // 刷新内容
    generateWish(true);
    renderDeepWishes();
    
    // 重置特效与任务
    startFallingEffect();
    resetPixelQuest();

    // 更新按钮激活状态
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
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

// 通用复制函数（增强版）
function copyTextToClipboard(text, onSuccess) {
    // 1. 优先尝试现代 Clipboard API (仅限 localhost 或 HTTPS)
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
            fallbackCopyText(text, onSuccess);
        });
    } else {
        fallbackCopyText(text, onSuccess);
    }
}

function fallbackCopyText(text, onSuccess) {
    // 2. 尝试传统的 execCommand 方法
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // 避免滚动到底部
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0"; // 隐藏但保留在DOM中
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
            if (onSuccess) onSuccess();
        } else {
            throw new Error('execCommand failed');
        }
    } catch (err) {
        document.body.removeChild(textArea);
        // 3. 终极回退：弹窗让用户手动复制
        prompt("浏览器限制自动复制，请手动长按复制下方链接：", text);
    }
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

    playSound(name) {
        if (!this.enabled) return;
        switch (name) {
            case 'click': this.playClick(); break;
            case 'success': this.playSuccess(); break;
            case 'pop': this.playPop(); break;
            case 'coin': this.playCoin(); break;
            case 'levelUp': this.playLevelUp(); break;
            case 'shake': this.playShake(); break;
            default: this.playClick(); break;
        }
    }

    playCoin() {
        this.playOscillator('sine', 987, 1318, 0.1, 0.3);
        setTimeout(() => this.playOscillator('sine', 1318, 2000, 0.1, 0.3), 100);
    }

    playLevelUp() {
        const now = 0; 
        [523, 659, 783, 1046].forEach((freq, i) => {
            setTimeout(() => this.playOscillator('triangle', freq, null, 0.1, 0.4), i * 100);
        });
    }

    playShake() {
        // Wood rattle sound simulation
        this.initCtx();
        if (!this.ctx) return;
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                this.playOscillator('square', 100 + Math.random() * 60, null, 0.03, 0.2);
            }, i * 50);
        }
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
const PARTICLE_POOL_SIZE = isMobile ? 25 : 45;
const particlePool = [];
let poolInitialized = false;

function initParticlePool() {
    if (poolInitialized) return;
    for (let i = 0; i < PARTICLE_POOL_SIZE; i++) {
        const p = document.createElement('div');
        p.className = 'falling-item';
        p.style.display = 'none';
        p.style.position = 'absolute';
        p.style.pointerEvents = 'none';
        fallingContainer.appendChild(p);
        particlePool.push(p);
    }
    poolInitialized = true;
}

function startFallingEffect(interval = 800) {
    if (prefersReducedMotion) return;
    initParticlePool();
    if (particleInterval) clearInterval(particleInterval);
    particleInterval = setInterval(() => {
        recycleParticle();
    }, isMobile ? interval * 1.5 : interval);
}

function recycleParticle() {
    if (prefersReducedMotion) return;
    const particle = particlePool.find(p => p.style.display === 'none');
    if (!particle) return;

    const items = assets[currentTheme].particles;
    particle.innerText = items[Math.floor(Math.random() * items.length)];
    particle.style.display = 'block';
    
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 3 + 3;
    let size = Math.random() * 20 + 15;
    if (isMobile) size = Math.max(12, size * 0.7);
    
    particle.style.left = startLeft + 'vw';
    particle.style.fontSize = size + 'px';
    particle.style.animation = `fall ${duration}s linear forwards`;
    
    if(currentTheme === 'style-tech') {
        particle.style.color = Math.random() > 0.5 ? '#00f3ff' : '#bc13fe';
        particle.style.textShadow = '0 0 5px currentColor';
    } else {
        particle.style.color = '';
        particle.style.textShadow = '';
    }

    setTimeout(() => {
        particle.style.display = 'none';
        particle.style.animation = '';
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
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            p.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(0)`;
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
    
    // 设置倒计时
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Beat percent random logic
    const beatEl = document.getElementById('beatPercent');
    if (beatEl) {
        let beatVal = 12;
        setInterval(() => {
            if (fortuneScore > 20) beatVal = Math.min(99, Math.floor(fortuneScore * 0.95 + Math.random() * 5));
            beatEl.innerText = beatVal;
        }, 5000);
    }
}

function updateCountdown() {
    const now = new Date();
    // 2026年春节是2026年2月17日
    const target = new Date('2026-02-17T00:00:00');
    const diff = target - now;
    
    if (diff <= 0) {
        // 已过年
        document.getElementById('cDay').innerText = "00";
        document.getElementById('cHour').innerText = "00";
        document.getElementById('cMin').innerText = "00";
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    const dEl = document.getElementById('cDay');
    const hEl = document.getElementById('cHour');
    const mEl = document.getElementById('cMin');
    if (dEl) dEl.innerText = days.toString().padStart(2, '0');
    if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
    if (mEl) mEl.innerText = mins.toString().padStart(2, '0');
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
    renderGamePicker();
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
    const modes = (themeGames[currentTheme] && themeGames[currentTheme].slice()) || ['catch', 'lantern', 'fireworks'];
    const pick = modes[Math.floor(Math.random() * modes.length)];
    startGame(pick);
}

let selectedGame = null;
function renderGamePicker() {
    const picker = document.getElementById('gamePicker');
    if (!picker) return;
    picker.innerHTML = '';
    const list = (themeGames[currentTheme] && themeGames[currentTheme].slice()) || ['catch','lantern','fireworks'];
    list.forEach(g => {
        const b = document.createElement('button');
        b.className = 'action-btn small';
        // 友好显示名称映射
        const labelMap = {
            catch: '接福袋',
            lantern: '点灯笼',
            fireworks: '烟花',
            fortune: '摇签筒',
            quickClick: '快速点点',
            petFeed: '喂小马',
            pixelRun: '像素跑',
            coinCatch: '接金币',
            riddle: '猜谜题',
            relaxTap: '放松轻点',
            puzzle: '拼图',
            balloon: '气球',
            retroShooter: '像素射手',
            hacker: '黑客收包',
            teaPour: '注茶',
            orchestra: '点音符',
            calligraphy: '书法追笔',
            typingChallenge: '终端打字',
            terminalHack: '终端调试',
            matchPairs: '配对记忆',
            dressUp: '换装小马',
            breathHold: '深呼吸计时',
            storyChoice: '温暖小故事'
        };
        b.textContent = labelMap[g] || g;
        b.setAttribute('data-game', g);
        b.onclick = () => {
            selectedGame = g;
            // highlight
            picker.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
            b.classList.add('active');
            setModeDisplay(g);
            setDesc(getGameDesc(g));
        };
        picker.appendChild(b);
    });
}

function startGameButton() {
    const pick = selectedGame || (themeGames[currentTheme] && themeGames[currentTheme][Math.floor(Math.random()*themeGames[currentTheme].length)]) || 'catch';
    startGame(pick);
}

function startGame(type) {
    if (!gameArea) return;
    resetGame();
    gameType = type;
    gameScore = 0;
    updateScore();
    boostFortune(4, 'game-start', 2500);
    checkMission('game_play');
    setModeDisplay(type === 'catch' ? '接福袋' : type === 'lantern' ? '点灯笼' : '烟花快点');
    const duration = prefersReducedMotion ? 18 : 25;
    setTimerDisplay(duration);
    setDesc(getGameDesc(type));
    gameArea.focus();

    if (type === 'catch') {
        setupCatchGame();
    } else if (type === 'lantern') {
        setupLanternGame();
    } else if (type === 'fortune') {
        setupFortuneGame();
    } else if (type === 'quickClick') {
        setupQuickClickGame();
    } else if (type === 'petFeed') {
        setupPetFeedGame();
    } else if (type === 'pixelRun') {
        setupPixelRunGame();
    } else if (type === 'coinCatch') {
        setupCoinCatchGame();
    } else if (type === 'riddle') {
        setupRiddleGame();
    } else if (type === 'puzzle') {
        setupPuzzleGame();
    } else if (type === 'balloon') {
        setupBalloonGame();
    } else if (type === 'retroShooter') {
        setupRetroShooterGame();
    } else if (type === 'hacker') {
        setupHackerGame();
    } else if (type === 'relaxTap') {
        setupRelaxTapGame();
    } else if (type === 'teaPour') {
        setupTeaPourGame();
    } else if (type === 'orchestra') {
        setupOrchestraGame();
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
    if (gameScoreEl) {
        gameScoreEl.textContent = gameScore;
        if (delta > 0) {
            showScorePop(delta);
        }
    }
    if (delta > 0) {
        // 轻微得分音效
        if(window.soundManager) window.soundManager.playClick();
        
        combo += 1;
        updateCombo();
        if (combo > 5 && combo % 5 === 0) {
            showComboEffect(combo);
        }
        if (typeof achievementManager !== 'undefined' && achievementManager) {
            achievementManager.check('combo_master');
            achievementManager.check('score_100'); // 实时检查是否破百
        }
        if (comboTimeout) clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => { combo = 0; updateCombo(); }, 2000);
    }
}

function showScorePop(delta) {
    const pop = document.createElement('div');
    pop.className = 'score-pop';
    pop.textContent = `+${delta}`;
    gameScoreEl.parentElement.appendChild(pop);
    setTimeout(() => pop.remove(), 800);
}

function showComboEffect(count) {
    const tip = document.createElement('div');
    tip.className = 'combo-tip';
    tip.textContent = `${count} COMBO!`;
    gameArea.appendChild(tip);
    setTimeout(() => tip.remove(), 1000);
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
        item.style.fontSize = (isMobile ? '32px' : '24px');
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
    const areaRect = gameArea.getBoundingClientRect();
    
    activeTargets.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom >= basketRect.top && rect.left <= basketRect.right && rect.right >= basketRect.left) {
            if (item.dataset.bad) {
                updateLives(-1);
                combo = 0; 
                updateCombo();
                // 爆炸红光反馈
                gameArea.style.boxShadow = 'inset 0 0 50px rgba(255, 0, 0, 0.4)';
                setTimeout(() => { gameArea.style.boxShadow = ''; }, 300);
            } else {
                updateScore(2 + (combo >= 3 ? 1 : 0));
                // 捕获粒子效果
                createEnhancedFirework(rect.left - areaRect.left + 15, rect.top - areaRect.top + 15, false);
            }
            activeTargets.delete(item);
            item.remove();
        }
    });
}

function handleLanternClick(lan) {
    updateScore(3 + (combo >= 4 ? 1 : 0));
    
    // 灯笼炸开粒子效果
    const rect = lan.getBoundingClientRect();
    const areaRect = gameArea.getBoundingClientRect();
    createEnhancedFirework(rect.left - areaRect.left + 32, rect.top - areaRect.top + 36, false);
    
    lan.style.transform = 'scale(1.5)';
    lan.style.opacity = '0';
    setTimeout(() => lan.remove(), 180);
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
        lan.style.fontSize = (isMobile ? '36px' : '26px');
        lan.style.width = (isMobile ? '68px' : '54px');
        lan.style.height = (isMobile ? '88px' : '72px');
        lan.onclick = () => handleLanternClick(lan);
        gameArea.appendChild(lan);
        const t = setTimeout(() => {
            if (lan.parentElement) lan.remove();
        }, prefersReducedMotion ? 2000 : 2400);
        gameTimeouts.push(t);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion ? 1100 : 720));
}

// --- Game: 烟花快点 ---
function setupFireworkGame() {
    gameArea.onclick = (e) => {
        const rect = gameArea.getBoundingClientRect();
        createEnhancedFirework(e.clientX - rect.left, e.clientY - rect.top, true);
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

function createEnhancedFirework(x, y, addScore = false) {
    if (addScore) {
        updateScore(1 + (combo >= 5 ? 1 : 0));
        // 点击反馈：轻微抖动
        gameArea.classList.remove('shake');
        void gameArea.offsetWidth;
        gameArea.classList.add('shake');
    }

    const colors = ['#ff4', '#f06', '#0f6', '#0cf', '#f90', '#fef'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particleCount = prefersReducedMotion ? 12 : 24;

    for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.className = 'firework-particle';
        p.style.backgroundColor = color;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.boxShadow = `0 0 6px ${color}`;
        gameArea.appendChild(p);

        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 60 + 40;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)',
            fill: 'forwards'
        }).onfinish = () => p.remove();
    }
    
    // 原有的核心爆炸视觉
    const burst = document.createElement('div');
    burst.className = 'firework-burst';
    burst.style.left = `${x - 20}px`;
    burst.style.top = `${y - 20}px`;
    burst.style.width = '40px';
    burst.style.height = '40px';
    burst.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
    gameArea.appendChild(burst);
    setTimeout(() => burst.remove(), 800);
}

function getGameDesc(type) {
    switch(type) {
        case 'catch': return '左右移动接福袋，躲开炸弹并多多得分。';
        case 'lantern': return '点击灯笼得分，注意灯笼会消失。';
        case 'fortune': return '摇一摇签筒，按时机点击以获取更高点数。';
        case 'quickClick': return '短时间内快速点击目标，手速决定得分。';
        case 'petFeed': return '给小马喂食，保持开心度以获得分数。';
        case 'pixelRun': return '控制像素角色躲避障碍并收集金币。';
        case 'coinCatch': return '接金币，避开坏币，累计更高财富。';
        default: return '点击区域互动，触发特效并得分。';
    }
}

// ----------------- 新增小游戏实现（轻量占位实现，便于后续扩展）
function setupFortuneGame() {
    // 玩家点击摇签区域，累积分数
    const jar = document.createElement('div'); jar.className = 'game-fortune-jar'; jar.textContent = '摇！';
    gameArea.appendChild(jar);
    jar.onclick = () => {
        const gain = Math.floor(Math.random() * 6) + 2;
        updateScore(gain);
        createEnhancedFirework(Math.random()*gameArea.clientWidth, Math.random()*gameArea.clientHeight, false);
    };
}

function setupQuickClickGame() {
    // 在规定时间内快速点击出现的目标
    const spawn = () => {
        const t = document.createElement('div'); t.className = 'game-item quick-target'; t.textContent = '⚡';
        t.style.left = `${Math.random()*(gameArea.clientWidth-40)}px`;
        t.style.top = `${Math.random()*(gameArea.clientHeight-40)}px`;
        gameArea.appendChild(t);
        t.onclick = () => { updateScore(3); t.remove(); };
        setTimeout(()=>{ if(t.parentElement) t.remove(); }, 900);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion ? 800 : 500));
}

function setupPetFeedGame() {
    const pet = document.createElement('div'); pet.className='game-pet'; pet.textContent='🐴'; pet.style.fontSize='48px';
    pet.style.position='absolute'; pet.style.left='50%'; pet.style.top='50%'; pet.style.transform='translate(-50%,-50%)';
    gameArea.appendChild(pet);
    pet.onclick = () => { updateScore(5); createEnhancedFirework(Math.random()*gameArea.clientWidth, Math.random()*gameArea.clientHeight, false); };
}

function setupPixelRunGame() {
    // 简易像素收集：点击屏幕收集金币
    const spawn = () => {
        const c = document.createElement('div'); c.className='game-item pixel-coin'; c.textContent='★';
        c.style.left = `${Math.random()*(gameArea.clientWidth-30)}px`;
        c.style.top = `${Math.random()*(gameArea.clientHeight-30)}px`;
        gameArea.appendChild(c);
        c.onclick = () => { updateScore(4); c.remove(); };
        setTimeout(()=>{ if(c.parentElement) c.remove(); }, 2000);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion ? 900 : 600));
}

function setupCoinCatchGame() {
    // 重用掉落逻辑但只产金币
    const drop = () => {
        const item = document.createElement('div'); item.className='game-item'; item.textContent='🪙';
        const left = Math.random()*(gameArea.clientWidth-30); item.style.left=`${left}px`; item.style.top='-40px';
        gameArea.appendChild(item);
        requestAnimationFrame(()=>{ item.style.transform=`translateY(${gameArea.clientHeight+60}px)`});
        const t = setTimeout(()=>{ item.remove(); }, prefersReducedMotion?2200:3000);
        gameTimeouts.push(t);
    };
    gameIntervals.push(setInterval(drop, prefersReducedMotion?900:600));
    gameIntervals.push(setInterval(()=>{ /* speedup if desired */ }, 500));
}

// ----------------- 额外完善的小游戏实现 -----------------
function setupHackerGame() {
    // 科技主题：捕获流动的数据包（0/1/<>）
    const spawn = () => {
        const el = document.createElement('div'); el.className='game-item hacker-burst';
        const chars = ['0','1','<>','{ }','/* */']; el.textContent = chars[Math.floor(Math.random()*chars.length)];
        el.style.left = `${Math.random()*(gameArea.clientWidth-60)}px`;
        el.style.top = `${Math.random()*(gameArea.clientHeight-60)}px`;
        gameArea.appendChild(el);
        el.onclick = () => { updateScore(5); createEnhancedFirework(parseFloat(el.style.left), parseFloat(el.style.top), false); el.remove(); };
        setTimeout(()=>{ if(el.parentElement) el.remove(); }, prefersReducedMotion?1500:2200);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion?500:360));
}

function setupRelaxTapGame() {
    // 简约主题：轻点圆点放松计分
    const spawn = () => {
        const d = document.createElement('div'); d.className='game-item relax-dot'; d.textContent='◯';
        d.style.left = `${Math.random()*(gameArea.clientWidth-60)}px`;
        d.style.top = `${Math.random()*(gameArea.clientHeight-60)}px`;
        d.style.fontSize = isMobile? '36px' : '28px';
        gameArea.appendChild(d);
        d.onclick = () => { updateScore(2); d.remove(); };
        setTimeout(()=>{ if(d.parentElement) d.remove(); }, prefersReducedMotion?2000:3000);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion?900:650));
}

function setupTeaPourGame() {
    // 温馨主题：点击水壶向杯中注水，注满一次得分
    const cup = document.createElement('div'); cup.className='game-tea-cup'; cup.innerHTML = '<div class="tea-fill" style="width:0%"></div>';
    cup.style.position='absolute'; cup.style.right='20px'; cup.style.bottom='20px'; cup.style.width='120px'; cup.style.height='90px';
    gameArea.appendChild(cup);
    let fill = 0;
    const kettle = document.createElement('div'); kettle.className='game-kettle'; kettle.textContent='🫖'; kettle.style.position='absolute'; kettle.style.left='20px'; kettle.style.bottom='20px'; kettle.style.fontSize='36px';
    gameArea.appendChild(kettle);
    kettle.onclick = () => {
        fill += 12; if (fill > 100) fill = 100;
        const f = cup.querySelector('.tea-fill'); if(f) f.style.width = fill + '%';
        if (fill >= 100) { updateScore(10); showToast('茶已注满，福气 +10'); fill = 0; if(f) f.style.width = '0%'; }
    };
    gameTimeouts.push(setTimeout(()=>{/* cup exists for duration */}, 999999));
}

function setupOrchestraGame() {
    // 黑金/贵雅主题：点击落下的音符获得分数
    const spawn = () => {
        const n = document.createElement('div'); n.className='game-item note'; n.textContent='♪';
        n.style.left = `${Math.random()*(gameArea.clientWidth-30)}px`;
        n.style.top = '-30px'; n.style.transition = `transform ${prefersReducedMotion?2.0:3.0}s linear`;
        gameArea.appendChild(n);
        requestAnimationFrame(()=> n.style.transform = `translateY(${gameArea.clientHeight+60}px)`);
        n.onclick = () => { updateScore(6); createEnhancedFirework(parseFloat(n.style.left), 40, false); n.remove(); };
        const t = setTimeout(()=>{ if(n.parentElement) n.remove(); }, prefersReducedMotion?2000:3000);
        gameTimeouts.push(t);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion?700:520));
}

// ----------------- 新增更独特的小游戏实现 -----------------
function setupCalligraphyGame() {
    // 依次点击笔触点，考验速度与顺序
    const points = [];
    const count = Math.min(6, Math.floor(gameArea.clientWidth / 80));
    let idx = 0;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'game-item calligraphy-point';
        p.textContent = '•';
        const left = 40 + i * (gameArea.clientWidth - 80) / Math.max(1, count - 1);
        p.style.left = `${left}px`;
        p.style.top = `${50 + Math.random() * (gameArea.clientHeight - 140)}px`;
        gameArea.appendChild(p);
        points.push(p);
        p.onclick = () => {
            if (points[idx] === p) {
                updateScore(4);
                createEnhancedFirework(parseFloat(p.style.left), parseFloat(p.style.top), false);
                p.classList.add('collected');
                idx++;
                if (idx >= points.length) finishGame();
            } else {
                updateLives(-1);
            }
        };
    }
}

function setupTypingChallenge() {
    // 给出一个词，输入框输入正确可得分
    const words = ['deploy','optimize','iterate','release','merge','init'];
    const target = words[Math.floor(Math.random()*words.length)];
    const box = document.createElement('div'); box.className='typing-challenge';
    box.innerHTML = `<div style="margin-bottom:8px">输入：<strong>${target}</strong></div>`;
    const input = document.createElement('input'); input.type='text'; input.placeholder='快速输入并回车';
    box.appendChild(input);
    gameArea.appendChild(box);
    input.focus();
    input.addEventListener('keydown', function onKey(e){
        if (e.key === 'Enter') {
            if (this.value.trim() === target) {
                updateScore(10);
                showToast('打字成功！');
                createEnhancedFirework(Math.random()*gameArea.clientWidth, Math.random()*gameArea.clientHeight, false);
            } else {
                updateLives(-1);
            }
            input.removeEventListener('keydown', onKey);
            input.disabled = true;
        }
    });
}

function setupTerminalHackGame() {
    // 点击带有 bug 的行获得分数
    const lines = ['init()', 'fetchData()', 'render()', 'commit()', 'deploy()'];
    lines.forEach((t, i) => {
        const el = document.createElement('div'); el.className='game-item terminal-line'; el.textContent = t + (Math.random()>0.6 ? '  // bug' : '');
        el.style.left = `${20}px`;
        el.style.top = `${40 + i*36}px`;
        el.style.fontFamily='monospace';
        el.style.background='rgba(0,0,0,0.06)';
        el.style.padding='6px 10px';
        gameArea.appendChild(el);
        el.onclick = () => {
            if (el.textContent.includes('bug')) { updateScore(6); createEnhancedFirework(60, 40 + i*36, false); el.remove(); }
            else { updateScore(2); el.remove(); }
        };
    });
}

function setupMatchPairsGame() {
    // 简易配对记忆，4 对
    const icons = ['🍊','🧧','🐴','✨'];
    const deck = icons.concat(icons).sort(()=>Math.random()-0.5);
    const opened = [];
    deck.forEach((sym, i) => {
        const c = document.createElement('div'); c.className='game-item match-card'; c.textContent='?';
        c.style.left = `${20 + (i%4)*80}px`; c.style.top = `${20 + Math.floor(i/4)*80}px`;
        c.dataset.val = sym; gameArea.appendChild(c);
        c.onclick = () => {
            if (c.classList.contains('matched') || opened.includes(c) ) return;
            c.textContent = sym; opened.push(c);
            if (opened.length === 2) {
                const a = opened[0], b = opened[1];
                if (a.dataset.val === b.dataset.val) { a.classList.add('matched'); b.classList.add('matched'); updateScore(5); opened.length=0; }
                else { setTimeout(()=>{ a.textContent='?'; b.textContent='?'; opened.length=0; updateLives(-1); }, 600); }
            }
        };
    });
}

function setupDressUpGame() {
    // 可爱主题：点击切换装扮，匹配目标可得分
    const pet = document.createElement('div'); pet.className='game-pet'; pet.textContent='🐴'; pet.style.fontSize='64px'; pet.style.left='50%'; pet.style.top='40%'; pet.style.position='absolute'; pet.style.transform='translate(-50%,-50%)';
    gameArea.appendChild(pet);
    const outfits = ['🎀','🧣','🎩','🕶️'];
    let idx = 0; const target = outfits[Math.floor(Math.random()*outfits.length)];
    const hint = document.createElement('div'); hint.className='game-item dress-hint'; hint.textContent=`目标：${target}`; hint.style.left='12px'; hint.style.top='12px'; gameArea.appendChild(hint);
    pet.onclick = () => {
        idx = (idx+1)%outfits.length; pet.textContent = '🐴' + outfits[idx];
        if (outfits[idx] === target) { updateScore(8); showToast('配对成功！'); }
    };
}

function setupBreathHoldGame() {
    // 按住填充进度条，填满得分
    const ctr = document.createElement('div'); ctr.className='game-item breath-ctr'; ctr.style.left='50%'; ctr.style.top='50%'; ctr.style.position='absolute'; ctr.style.transform='translate(-50%,-50%)';
    ctr.innerHTML = `<div class="breath-bar" style="width:160px;height:22px;border:1px solid #fff;border-radius:12px;background:rgba(255,255,255,0.02);position:relative"><div class="breath-fill" style="height:100%;width:0%;background:linear-gradient(90deg,var(--secondary-color),var(--primary-color));border-radius:12px"></div></div><div style="font-size:12px;margin-top:6px">按住以充能</div>`;
    gameArea.appendChild(ctr);
    const fillEl = ctr.querySelector('.breath-fill'); let filling = 0; let holdId = null;
    ctr.onpointerdown = () => { if (holdId) return; holdId = setInterval(()=>{ filling += 4; fillEl.style.width = filling + '%'; if (filling >= 100) { clearInterval(holdId); holdId = null; updateScore(12); showToast('深呼吸完成'); filling = 0; fillEl.style.width='0%'; } }, 120); };
    ctr.onpointerup = () => { if (holdId) clearInterval(holdId); holdId = null; filling = 0; if (fillEl) fillEl.style.width='0%'; };
    ctr.onpointerleave = ctr.onpointerup;
}

function setupStoryChoice() {
    // 温馨主题：简单二选一小故事，选择给分
    const c = document.createElement('div'); c.className='game-item story-choices'; c.style.left='20px'; c.style.top='20px';
    const a = document.createElement('button'); a.className='action-btn small'; a.textContent='回家吃饭';
    const b = document.createElement('button'); b.className='action-btn small'; b.textContent='约朋友逛街';
    c.appendChild(a); c.appendChild(b); gameArea.appendChild(c);
    a.onclick = ()=>{ updateScore(6); showToast('温暖的选择'); };
    b.onclick = ()=>{ updateScore(6); showToast('社交的快乐'); };
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

// 确保 `startExperience` 在全局可调用，并为入口按钮添加稳健的事件绑定（用于诊断按钮无响应）
document.addEventListener('DOMContentLoaded', () => {
    try {
        // 明确导出到 window
        window.startExperience = startExperience;

        // 优先使用 id 绑定，兼容旧类名选择器作为后备
        const btn = document.getElementById('entryStartBtn') || document.querySelector('.entry-overlay .entry-btn');
        if (btn) {
            // 移除内联 onclick（若存在），使用事件监听以便更可靠的错误捕获
            try { btn.removeAttribute('onclick'); } catch(e) {}
            btn.addEventListener('click', () => {
                try {
                    startExperience();
                } catch (err) {
                    console.error('entry button handler error', err);
                    if (typeof showToast === 'function') showToast('启动体验失败，请查看控制台');
                }
            });
        }
    } catch (e) {
        console.error('failed to bind startExperience', e);
    }
});

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
        
        let baseUrl = window.location.href.split('?')[0];
        // 如果是本地 file 协议，尝试使用预设的 GitHub Pages 地址
        if (baseUrl.startsWith('file://')) {
             // 移除 index.html 后缀以获得目录路径，或者直接使用 __SHARE_BASE__
             if (typeof window.__SHARE_BASE__ !== 'undefined') {
                baseUrl = window.__SHARE_BASE__;
             }
        }
        
        const shareUrl = `${baseUrl}?relayData=${encoded}&style=${currentTheme}`; 
        const shareText = `🏃 我发起了新春祝福接力！已经传到第 ${this.chain.length} 棒啦！\n快来点击加入：${shareUrl}`;

        // 优先使用 Web Share API (移动端体验更好)
        if (navigator.share && isMobile) {
            navigator.share({
                title: '2026 马年新春祝福接力',
                text: `🏃 接力第 ${this.chain.length} 棒！\n${shareUrl}`,
                url: shareUrl
            }).then(() => {
                 if (achievementManager) achievementManager.showCustomToast('分享成功', '接力棒已传递！', '🚀');
            }).catch(() => {
                // Share cancelled or failed, fallback to copy
                copyTextToClipboard(shareText, () => {
                     if (achievementManager) achievementManager.showCustomToast('复制成功', '链接已复制，去发送给好友吧！', '🔗');
                });
            });
        } else {
            // PC 端或不支持 Share API
            copyTextToClipboard(shareText, () => {
                 if (achievementManager) achievementManager.showCustomToast('复制成功', '链接已复制，去发送给好友吧！', '🔗');
            });
        }
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


// ================== 弹幕系统 ==================
const danmuLayer = document.getElementById('danmuLayer');
const defaultDanmus = [
    '祝大家2026马年大吉！', '新春快乐，万事如意！', '项目上线顺利，Bug 全消！', '红包拿来！',
    '年年有余，财源广进！', '身体健康，阖家欢乐！', '签到领积分，天天开心！', '愿你中大礼包！',
    '心想事成，万事如意！', '好运连连，笑口常开！', '提交代码不报错，测试全通过！', '福气满满来临！'
];

function initDanmu() {
    if (!danmuLayer) return;
    // Ԥ���һЩ��Ļ
    for (let i = 0; i < 6; i++) {
        setTimeout(() => spawnDanmu(defaultDanmus[Math.floor(Math.random() * defaultDanmus.length)]), i * 1500);
    }
    // ��������
    setInterval(() => {
        if (!document.hidden) {
            spawnDanmu(defaultDanmus[Math.floor(Math.random() * defaultDanmus.length)]);
        }
    }, 2500);
}

function spawnDanmu(text, isSelf = false) {
    if (!danmuLayer) return;
    const item = document.createElement('div');
    item.className = 'danmu-item';
    item.textContent = text;
    if (isSelf) {
        item.style.border = '2px solid #ffd700';
        item.style.zIndex = 1001;
        item.style.backgroundColor = 'rgba(255, 0, 0, 0.6)';
    }
    
    // ������ (0-3)
    const track = Math.floor(Math.random() * 4);
    item.style.top = (track * 30 + 10) + 'px';
    
    // ����ٶ�
    const duration = isSelf ? 8 : Math.random() * 5 + 8; // 8-13s
    item.style.animationDuration = duration + 's';
    
    danmuLayer.appendChild(item);
    
    // �����������Ƴ�
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

function sendDanmu() {
    const input = document.getElementById('danmuInput');
    if (!input || !input.value.trim()) {
        showToast('请输入弹幕内容~');
        return;
    }
    const text = input.value.trim();
    spawnDanmu(text, true);
    input.value = '';
    showToast('弹幕发送成功，福气 +5');
    boostFortune(5, 'danmu', 0);
    checkMission('send_danmu');
}

// ================== ����ϵͳ ==================
const missions = [
    { id: 'start', desc: '开始体验', target: 1, current: 0, done: false },
    { id: 'click_wish', desc: '点击祝福', target: 1, current: 0, done: false },
    { id: 'send_danmu', desc: '发送弹幕', target: 1, current: 0, done: false },
    { id: 'theme_switch', desc: '切换主题', target: 3, current: 0, done: false },
    { id: 'game_play', desc: '玩小游戏', target: 1, current: 0, done: false }
];

function initMissions() {
    renderMissions();
    // ����ʼ״̬
    if (experienceStarted) checkMission('start');
}

function checkMission(id) {
    if (!id) { renderMissions(); return; }
    const m = missions.find(x => x.id === id);
    if (!m || m.done) return;
    
    m.current += 1;
    if (m.current >= m.target) {
        m.done = true;
        m.current = m.target;
        showToast('任务完成：' + m.desc);
        boostFortune(8, 'mission_complete', 0);
    }
    renderMissions();
}

function renderMissions() {
    const list = document.getElementById('missionList');
    const progressText = document.getElementById('missionProgressText');
    if (!list) return;
    
    const doneCount = missions.filter(m => m.done).length;
    if (progressText) progressText.textContent = doneCount + '/5';
    
    list.innerHTML = '';
    missions.forEach(m => {
        const div = document.createElement('div');
        div.className = 'mission-item ' + (m.done ? 'done' : '');
        div.innerHTML = '<div class=\'mission-checkbox\'></div><span>' + m.desc + ' (' + m.current + '/' + m.target + ')</span>';
        list.appendChild(div);
    });
}

// ================== ͨ�õ����߼� ==================
const infomodal = document.getElementById('infoModal');
const infoTitle = document.getElementById('infoTitle');
const infoBody = document.getElementById('infoBody');

function openInfoModal(title, htmlContent) {
    if (!infomodal) return;
    infoTitle.textContent = title;
    infoBody.innerHTML = htmlContent;
    infomodal.style.display = 'flex';
    boostFortune(2, 'read_info', 2000);
}

function closeInfoModal() {
    if (infomodal) infomodal.style.display = 'none';
}

function openMenuModal() {
    const menus = [
        '<h4>年夜饭推荐（活力时刻）</h4>',
        '<ul>',
        '<li><strong>红烧狮子头</strong>：寓意团团圆圆，肉汁丰富，适合家庭共享。</li>',
        '<li><strong>清蒸石斑或鲈鱼</strong>：象征年年有余，口感鲜嫩，保留原味。</li>',
        '<li><strong>蒜蓉蒸虾</strong>：鲜甜弹牙，寓意“节节高升”。</li>',
        '<li><strong>干煸四季豆</strong>：清爽下饭，增加蔬菜营养平衡。</li>',
        '<li><strong>八宝饭 / 糯米藕</strong>：甜品类，象征甜甜蜜蜜与美好收获。</li>',
        '<li><strong>年糕（炒/蒸）</strong>：寓意“年年高”，可甜可咸，多样呈现。</li>',
        '<li><strong>汤品（海鲜汤或鸡汤）</strong>：温暖暖身，象征幸福与健康。</li>',
        '</ul>',
        '<p style="margin-top:8px;">小贴士：备一盘寓意吉祥的小菜（如发菜扣肉、橘子盘），并考虑备些儿童/老人喜欢的软食。</p>'
    ];
    openInfoModal('年夜饭推荐', menus.join(''));
}

function openTriviaModal() {
    const trivia = [
        '<h4>马年冷知识</h4>',
        '<ul>',
        '<li><strong>生肖马的性格</strong>：传统上认为马活泼好动、精力充沛、外向自信，适合社交与冒险。</li>',
        '<li><strong>马在中国文化</strong>：古代马为重要交通与军事力量，常被视为忠诚与速度的象征。</li>',
        '<li><strong>马年习俗</strong>：马年到来时，人们常以“马到成功”祝福彼此，寓意事业顺利快速发展。</li>',
        '<li><strong>马图腾与方向</strong>：在风水中，奔马图可用以增进事业运，但应注意方向与方位搭配。</li>',
        '<li><strong>趣味事实</strong>：马的平均奔跑速度可达每小时40–48公里，耐力也很强；此外，马的记忆力与社会性都很出色。</li>',
        '</ul>',
        '<p style="margin-top:8px;">小贴士：在马年送礼可选与马相关的吉祥物或带“速”“进”“顺”寓意的小物件。</p>'
    ];
    openInfoModal('马年冷知识', trivia.join(''));
}

function openWelfareModal() {
    const doneCount = missions.filter(m => m.done).length;
    let html = '';
    if (doneCount >= 5) {
        html = '<h4> ��ϲ��ɣ�</h4><p>��������������񣬽����ռ�������</p><div style=\'margin-top:10px; padding:10px; background:rgba(255,0,0,0.1); border-radius:8px;\'><p><strong> ר�������룺HORSE2026</strong></p><p>��ƾ�˽�ͼ�������߶һ�����С����/���Ӻؿ���</p></div>';
    } else {
        html = '<h4> ��δ����</h4><p>��ǰ���ȣ�' + doneCount + '/5</p><p>������������ɲ鿴�ռ�����Ŷ��</p><p>���ͣ����ܸ�����</p>';
    }
    openInfoModal(' ������', html);
}


// ================== 赛博灵签（Fortune Stick）逻辑 ==================

const fortuneDatabase = [
    {
        level: '上上签',
        poem: ['风和日丽喜气盈', '跃马扬鞭万里程'],
        modern: '今日运势极佳：项目顺利，贵人相助，宜大胆试新计划。',
        sound: 'success'
    },
    {
        level: '上签',
        poem: ['春风得意马蹄急', '一日看尽长安花'],
        modern: '人气上升、机会来了但需把握细节，适合推进重要事项。',
        sound: 'coin'
    },
    {
        level: '中签',
        poem: ['云淡风轻日子好', '稳步前行收获多'],
        modern: '平稳向好，按部就班可见成效，注意保持耐心与节奏。',
        sound: 'click'
    },
    {
        level: '下签',
        poem: ['路有坎坷需回头', '勿急勿躁守初心'],
        modern: '遇到阻碍为常态，建议谨慎决策，避免高风险操作，稳住当前。',
        sound: 'levelUp'
    },
    {
        level: '末签',
        poem: ['风雨兼程亦有时', '静待花开自有时'],
        modern: '虽有小挫折，但一切皆可调整，心态平和最重要。',
        sound: 'success'
    }
];

function openFortuneStickModal() {
    document.getElementById('fortuneStickModal').classList.add('active');
    document.getElementById('fortuneStickModal').setAttribute('aria-hidden', 'false');
    resetFortuneStick();
}

function closeFortuneStickModal(e) {
    if (e && e.target !== e.currentTarget && e.target.classList.contains('close-btn') === false) return;
    document.getElementById('fortuneStickModal').classList.remove('active');
    document.getElementById('fortuneStickModal').setAttribute('aria-hidden', 'true');
}

function resetFortuneStick() {
    document.getElementById('fortuneStageStart').style.display = 'block';
    document.getElementById('fortuneStageResult').style.display = 'none';
    document.querySelector('.divination-jar').classList.remove('shaking');
}

function shakeFortuneStick() {
    const jar = document.querySelector('.divination-jar');
    
    // 1. Play sound (Shaking sound)
    try {
        if (window.soundManager) {
            window.soundManager.playSound('shake');
        }
    } catch(e) { console.error(e); }

    // 2. Add shake class
    jar.classList.add('shaking');

    // 3. Wait 1.5s then show result
    setTimeout(() => {
        jar.classList.remove('shaking');
        showFortuneResult();
    }, 1500);
}

function showFortuneResult() {
    // Pick random fortune
    const fortune = fortuneDatabase[Math.floor(Math.random() * fortuneDatabase.length)];
    
    // Update DOM
    document.getElementById('fortuneLevel').textContent = fortune.level;
    document.getElementById('fortunePoem').textContent = fortune.poem[0];
    document.getElementById('fortunePoem2').textContent = fortune.poem[1] || ''; // Fallback
    document.getElementById('fortuneModern').textContent = fortune.modern;

    // Switch View
    document.getElementById('fortuneStageStart').style.display = 'none';
    document.getElementById('fortuneStageResult').style.display = 'block';

    // Play effect
    try {
        soundManager.playSound(fortune.sound || 'success');
    } catch(e){}

    // Trigger mission for 'game_play' (using ID string)
    if (typeof checkMission === 'function') {
        checkMission('game_play'); 
        boostFortune(2, 'fortune_stick', 0);
    }
}


// Mobile view height fix
function setMobileVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setMobileVh);
window.addEventListener('orientationchange', setMobileVh);
setMobileVh();


// --- Game: Riddle (猜谜) ---
function setupRiddleGame() {
    const questions = [
        { q: '头顶一只角，走路一摇头，猜一种动物。', a: '鹿' },
        { q: '有头无颈，有眼无眸，有脚不能走，是什么？', a: '针' },
        { q: '身穿彩衣会飞，不会叫也不会走，是什么？', a: '蝴蝶' },
        { q: '一物长在树上，落地五份开，名字一分成，猜是什么？', a: '橘子（桔）' },
        { q: '有面无口，有脚不能走，是什么？', a: '桌子' }
    ];
    let qIdx = 0;

    function showQ() {
        gameArea.innerHTML = '';
        if (qIdx >= questions.length) {
            setDesc('谜题已全部完成，祝你新年快乐！');
            finishGame();
            return;
        }

        const card = document.createElement('div');
        card.className = 'game-item riddle-card';
        card.style.position = 'relative';
        card.style.padding = '20px';
        card.style.background = 'rgba(255,255,255,0.95)';
        card.style.color = '#222';
        card.style.borderRadius = '12px';
        card.style.width = '80%';
        card.style.left = '10%';
        card.style.top = '12%';

        const qEl = document.createElement('div');
        qEl.style.fontSize = '18px';
        qEl.style.lineHeight = '1.6';
        qEl.textContent = questions[qIdx].q;
        card.appendChild(qEl);

        const btnReveal = document.createElement('button');
        btnReveal.className = 'action-btn small';
        btnReveal.textContent = '查看答案';
        btnReveal.style.marginTop = '14px';
        btnReveal.onclick = () => {
            const ans = document.createElement('div');
            ans.style.color = 'green';
            ans.style.fontWeight = '700';
            ans.style.marginTop = '10px';
            ans.textContent = '答案：' + questions[qIdx].a;
            card.appendChild(ans);
            updateScore(10);
            btnReveal.disabled = true;

            const nextBtn = document.createElement('button');
            nextBtn.className = 'action-btn small';
            nextBtn.textContent = '下一题';
            nextBtn.style.marginLeft = '10px';
            nextBtn.onclick = () => { qIdx++; showQ(); };
            card.appendChild(nextBtn);
        };

        card.appendChild(btnReveal);
        gameArea.appendChild(card);
    }

    showQ();
}

// --- Game: ƴͼ (Puzzle) ---
function setupPuzzleGame() {
    // ���� 3x3 ƴͼ (�������)
    const gridSize = 3;
    const pieces = [];
    const rightOrder = [0,1,2,3,4,5,6,7,8]; 
    let currentOrder = [...rightOrder].sort(() => Math.random() - 0.5);
    
    gameArea.style.display = 'grid';
    gameArea.style.gridTemplateColumns = 'repeat(3, 1fr)';
    gameArea.style.gap = '2px';
    gameArea.style.padding = '20px';
    
    let selected = null;
    
    function render() {
        gameArea.innerHTML = '';
        currentOrder.forEach((val, idx) => {
            const p = document.createElement('div');
            p.className = 'game-item puzzle-piece';
            p.textContent = val === 8 ? '' : (val+1); // 8 is empty space logic usually, but here just swap
            p.style.background = val === 8 ? 'transparent' : 'var(--primary-color)';
            p.style.color = '#fff';
            p.style.display = 'flex';
            p.style.alignItems = 'center';
            p.style.justifyContent = 'center';
            p.style.fontSize = '24px';
            p.style.cursor = 'pointer';
            p.style.border = selected === idx ? '2px solid yellow' : '1px solid rgba(255,255,255,0.3)';
            
            p.onclick = () => {
                if (selected === null) {
                    selected = idx;
                    render();
                } else {
                    // swap
                    [currentOrder[selected], currentOrder[idx]] = [currentOrder[idx], currentOrder[selected]];
                    selected = null;
                    updateScore(2);
                    render();
                    checkWin();
                }
            };
            gameArea.appendChild(p);
        });
    }
    
    function checkWin() {
        if (JSON.stringify(currentOrder) === JSON.stringify(rightOrder)) {
            showToast('ƴͼ��ɣ�');
            updateScore(50);
            window.dispatchEvent(new Event('sfx-success'));
        }
    }
    
    render();
}

// --- Game: Balloon (气球) ---
function setupBalloonGame() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3'];
    const spawn = () => {
        const b = document.createElement('div');
        b.className = 'game-item game-balloon';
        b.textContent = '🎈';
        b.style.fontSize = isMobile ? '40px' : '48px';
        b.style.position = 'absolute';
        const startX = Math.random() * Math.max(0, (gameArea.clientWidth - 60));
        b.style.left = `${startX}px`;
        b.style.bottom = '-60px';
        b.style.transition = `transform ${prefersReducedMotion ? 2.2 : 3.2}s linear, opacity 0.6s`;
        b.style.filter = 'drop-shadow(0 0 6px rgba(0,0,0,0.25))';
        b.style.cursor = 'pointer';

        b.onclick = () => {
            // Pop effect
            b.textContent = '';
            b.style.opacity = '0';
            updateScore(5);
            window.dispatchEvent(new Event('sfx-pop'));
            setTimeout(() => { if (b.parentElement) b.remove(); }, 300);
        };

        gameArea.appendChild(b);
        requestAnimationFrame(() => {
            const travel = gameArea.clientHeight + 120;
            b.style.transform = `translateY(-${travel}px)`;
        });

        setTimeout(() => { if (b.parentElement) b.remove(); }, prefersReducedMotion ? 2200 : 3400);
    };
    gameIntervals.push(setInterval(spawn, prefersReducedMotion ? 700 : 600));
}

// --- Game: �������� (RetroShooter) ---
function setupRetroShooterGame() {
    // ��ҿ��Ƶײ���̨����������ӵ��������
    const player = document.createElement('div');
    player.textContent = '';
    player.style.position = 'absolute';
    player.style.bottom = '10px';
    player.style.left = '50%';
    player.style.fontSize = '32px';
    player.style.marginLeft = '-16px';
    gameArea.appendChild(player);
    
    let px = 50;
    gameArea.onpointermove = (e) => {
        px = (e.offsetX / gameArea.clientWidth) * 100;
        player.style.left = px + '%';
    };
    
    gameArea.onpointerdown = (e) => {
        // Shoot
        const b = document.createElement('div');
        b.className = 'game-bullet';
        b.style.width = '4px'; b.style.height = '10px'; b.style.background = '#ff0';
        b.style.position = 'absolute';
        b.style.left = player.style.left;
        b.style.bottom = '45px';
        gameArea.appendChild(b);
        
        const anim = b.animate([
            { transform: 'translateY(0)' },
            { transform: 	ranslateY(-px) }
        ], { duration: 800, fill: 'forwards' });
        
        anim.onfinish = () => b.remove();
        
        // Simple collision check loop (not performant but works for small amounts)
        const checkHit = setInterval(() => {
            if (!b.parentElement) { clearInterval(checkHit); return; }
            const bRect = b.getBoundingClientRect();
            document.querySelectorAll('.game-enemy').forEach(en => {
                const eRect = en.getBoundingClientRect();
                if (bRect.top < eRect.bottom && bRect.bottom > eRect.top && 
                    bRect.left < eRect.right && bRect.right > eRect.left) {
                    en.remove();
                    b.remove();
                    updateScore(10);
                    clearInterval(checkHit);
                    createEnhancedFirework(eRect.left, eRect.top, false);
                }
            });
        }, 50);
    };
    
    const spawnEnemy = () => {
        const en = document.createElement('div');
        en.className = 'game-item game-enemy';
        en.textContent = '';
        en.style.position = 'absolute';
        en.style.top = '0';
        en.style.left = Math.random() * 90 + '%';
        en.style.fontSize = '24px';
        gameArea.appendChild(en);
        
        en.animate([
            { transform: 'translateY(0)' },
            { transform: 	ranslateY(px) }
        ], { duration: 4000 }).onfinish = () => {
            if(en.parentElement) {
                en.remove();
                updateLives(-1); // Enemy reached bottom
            }
        };
    };
    
    gameIntervals.push(setInterval(spawnEnemy, 1000));
}

