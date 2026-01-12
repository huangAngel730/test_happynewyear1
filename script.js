// 资源配置
const assets = {
    'style-china': {
        music: 'https://music.163.com/song/media/outer/url?id=26217171.mp3', // 喜庆民乐
        wishes: [
            "2026丙午马年，愿您：马到功成，前程似锦！",
            "春风得意马蹄疾，一日看尽长安花。新春快乐！",
            "金戈铁马闻征鼓，只争朝夕启新程。祝您事业腾飞！",
            "龙马精神，万事如意。阖家欢乐，福寿安康！",
            "一马当先，步步高升！财源广进，五福临门！"
        ],
        particles: ['🧧', '🏮', '✨', '🐴', '🧨']
    },
    'style-tech': {
        music: 'https://music.163.com/song/media/outer/url?id=443875283.mp3', // 电子风格
        wishes: [
            "System.out.println('Happy New Year 2026');",
            "Loading 2026... 100% Complete. Success!",
            "愿你的快乐像无限循环，没有跳出条件！",
            "2026.exe 启动成功，Bug全消除，性能优化100%！",
            "马年赋能，迭代升级，愿你的人生算法最优解！"
        ],
        particles: ['0', '1', '{ }', '⚡', '💾']
    },
    'style-cute': {
        music: 'https://music.163.com/song/media/outer/url?id=1387581250.mp3', // 轻快可爱
        wishes: [
            "哒哒哒~ 小马来送福啦！祝你天天开心鸭！",
            "2026，要做一个可爱的干饭马！🍚",
            "祝你新的一年，甜得像糖，暖得像光！✨",
            "马年好运biu biu biu~ 发射给你！💖",
            "摸摸小马头，万事不发愁！🦄"
        ],
        particles: ['🍬', '🎈', '🍭', '💖', '🦄']
    }
};

// 全局状态
let currentTheme = 'style-china';
let isMusicPlaying = false;
let particleInterval = null;

// DOM 元素
const body = document.body;
const bgm = document.getElementById('bgm');
const wishText = document.getElementById('wishText');
const musicIcon = document.getElementById('musicToggle');
const playBtn = document.getElementById('playPauseBtn');
const volSlider = document.getElementById('volumeSlider');
const fallingContainer = document.getElementById('falling-container');

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    // 解析URL参数，优先使用分享链接中的风格
    const urlParams = new URLSearchParams(window.location.search);
    const sharedStyle = urlParams.get('style');
    if(sharedStyle && assets[sharedStyle]) {
        currentTheme = sharedStyle;
        body.className = currentTheme;
        bgm.src = assets[currentTheme].music; // 同步音乐源
    }

    initMusic();
    generateWish();
    startFallingEffect();
    
    // 显示指南（仅首次或演示用）
    setTimeout(() => {
        // document.getElementById('guideModal').style.display = 'flex';
    }, 1000);

    // 点击页面生成特效（移动端禁用爆破以节省性能）
    const isMobile = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    document.addEventListener('click', (e) => {
        if (isMobile) return; // 移动端不生成大量爆破特效
        if(e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
            createBurst(e.clientX, e.clientY);
        }
    });

    // 移动端优化：减少粒子
    if (window.innerWidth < 768) {
        clearInterval(particleInterval);
        startFallingEffect(1600); // 降低频率
    }
});

// ================== 风格切换 ==================
function switchTheme(themeName) {
    if (currentTheme === themeName) return;
    
    // 更新URL参数状态（方便分享）
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('style', themeName);
    window.history.replaceState({}, '', newUrl);

    // 切换 Class
    body.className = themeName;
    currentTheme = themeName;
    
    // 切换音乐（如果在播放，则平滑切换）
    const wasPlaying = !bgm.paused;
    bgm.src = assets[themeName].music;
    if (wasPlaying) {
        bgm.play().catch(()=>console.log("Autoplay blocked"));
    }
    
    // 刷新祝福语 style
    generateWish();
    
    // 更新粒子效果
    clearInterval(particleInterval);
    startFallingEffect();
}

// ================== 祝福语逻辑 ==================
function generateWish() {
    const list = assets[currentTheme].wishes;
    const randomWish = list[Math.floor(Math.random() * list.length)];
    
    wishText.style.opacity = 0;
    setTimeout(() => {
        wishText.textContent = randomWish;
        wishText.style.opacity = 1;
        // 简单的打字机效果重置
        wishText.classList.remove('typing-effect');
        void wishText.offsetWidth; // trigger reflow
        wishText.classList.add('typing-effect');
    }, 300);
}

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

function copyWish() {
    const text = wishText.innerText;
    const btn = document.querySelector('button[onclick="copyWish()"]');
    const originalText = btn.innerText;

    copyTextToClipboard(text, () => {
        btn.innerText = "✅ 已复制";
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
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
            // 分享成功，按钮状态可保持不变
        }).catch(() => {
            copyTextToClipboard(shareUrl, () => {
                if (btn) {
                    btn.innerText = "✅ 链接已复制";
                    setTimeout(() => { btn.innerText = originalText; }, 2000);
                }
            });
        });
    } else {
        copyTextToClipboard(shareUrl, () => {
            if (btn) {
                btn.innerText = "✅ 链接已复制";
                setTimeout(() => { btn.innerText = originalText; }, 2000);
            }
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
    
    // 尝试自动播放（静音）
    bgm.muted = true;
    bgm.play().then(() => {
        isMusicPlaying = true;
        musicIcon.classList.add('playing');
        playBtn.innerText = "暂停";
    }).catch(e => {
        console.log("Auto-play blocked, waiting for user interaction");
    });

    // 播放/暂停控制
    playBtn.onclick = toggleMusic;
    musicIcon.onclick = toggleMusic;

    // 音量控制
    volSlider.oninput = (e) => {
        bgm.volume = e.target.value;
        if(bgm.volume > 0 && bgm.muted) bgm.muted = false;
    };

    // 切歌=切换风格
    document.getElementById('nextTrackBtn').onclick = () => {
        const themes = ['style-china', 'style-tech', 'style-cute'];
        const nextIndex = (themes.indexOf(currentTheme) + 1) % 3;
        switchTheme(themes[nextIndex]);
    };
}

function toggleMusic() {
    if (bgm.paused) {
        bgm.muted = false; // 用户手动点击后取消静音
        bgm.play();
        musicIcon.classList.add('playing');
        playBtn.innerText = "暂停";
    } else {
        bgm.pause();
        musicIcon.classList.remove('playing');
        playBtn.innerText = "播放";
    }
}

// ================== 飘落特效系统 ==================
function startFallingEffect(interval = 800) {
    particleInterval = setInterval(() => {
        createParticle();
    }, interval);
}

function createParticle() {
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

// 打开和关闭模态框
function closeGuide() {
    document.getElementById('guideModal').style.display = 'none';
}
