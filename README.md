# 2026 丙午马年新春祝福页

一个纯前端的新年祝福着陆页，提供 4 种可切换风格（国风、科技、可爱、极简），内置背景音乐、祝福语生成、复制/分享、粒子特效，并针对移动端做了优化。

## 功能特点
- 4 种主题：顶部按钮一键切换，URL 带 `style` 参数可直接分享指定风格。
- 祝福语随机生成：不同风格配套祝福池，支持一键复制。
- 分享与复制：复制祝福文本或当前页链接，移动端优先调用 Web Share。
- 背景音乐：尝试静音自动播放，若被拦截会出现“点击播放”提示；可切歌、调音量、暂停。
- 粒子与点击爆破：随风格切换粒子；移动端和减动效模式自动降级/关闭。
- 移动端适配：主题栏可横滑，按钮可换行，音乐浮球靠右下并留安全区；尊重 `prefers-reduced-motion`。

## 快速开始（本地预览）
```bash
# 任选其一
# 1) 直接双击 index.html 用浏览器打开（本地 file://）
# 2) 启动简易 HTTP 服务（推荐避免 clipboard/share 受限）
python -m http.server 8000
# 或
npx serve .
```
打开浏览器访问 http://localhost:8000 即可。

## 项目结构
- index.html — 页面主体与主题切换按钮
- style.css — 主题配色、排版、动画、移动端适配
- script.js — 祝福池、音乐控制、复制/分享、粒子与爆破逻辑
- LICENSE — 许可文件

## 部署
### GitHub Pages
1. 推送到 GitHub 仓库（当前示例：huangAngel730/test_happynewyear1）。
2. 在仓库 Settings → Pages，选择分支（如 master/main）和根目录 `/`，保存。
3. 稍等生成访问链接，例如：https://huangAngel730.github.io/test_happynewyear1

### Netlify
1. New site from Git → 选择 GitHub 仓库 `huangAngel730/test_happynewyear1`。
2. Branch to deploy 选用包含最新代码的分支（建议 master，或将 master 合并到 main）。
3. Build 命令留空，Publish directory 填 `/`（纯静态）。
4. 如果分支切换后未自动部署，可在 Deploys 页面点击 “Trigger deploy” 或 “Clear cache and deploy site”。

## 可选配置
- 分享基础地址：在 index.html 中的 `window.__SHARE_BASE__` 可改为你自己的域名（如自定义域或 Netlify 站点），用于本地预览时生成正确分享链接。
- 默认音量与曲目：在 script.js 的 `assets` 对象中调整对应主题的 `music` 链接和默认 `bgm.volume`。

## 已知提示与排错
- 自动播放被阻止：页面右下会出现“点击播放音乐”提示，点一下恢复正常音量播放。
- 粒子与动画过多：系统启用“减少动态效果”或在移动端时会自动降级；可在 script.js 中进一步调低频率。
- 部署后版本不更新：确认 Netlify/GitHub Pages 使用的是最新提交的分支；必要时重新触发部署或清缓存。

## 开发说明
- 无构建依赖，纯 HTML/CSS/JS，可直接改动后刷新。
- 字体与音乐引用了在线资源，如需内网或离线可替换为本地资源。
- 样式/脚本均为 ASCII 编码，便于跨平台编辑。
