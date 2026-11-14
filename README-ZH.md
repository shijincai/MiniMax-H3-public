<!-- 语言切换 -->
<p align="right">
  <a href="./README.md">English</a>
</p>

<h1 align="center">
  <img src="https://minimaxh3.info/favicon.svg" alt="MiniMax H3" width="48" height="48" />
  <br/>
  MiniMax H3 — 在线AI视频与图片工作台
</h1>

<p align="center">
  <strong>使用 MiniMax H3 Image 生成与编辑静态图片,或创作带同步音频的短视频 — 全部在浏览器中完成。</strong>
</p>

<p align="center">
  <a href="https://minimaxh3.info"><strong>🌐 minimaxh3.info</strong></a> · <a href="https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&amp;utm_medium=referral&amp;utm_campaign=h3_image_readme"><strong>打开图片工作台</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/状态-在线-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/许可-MIT-blue" alt="License" />
</p>

---

## ✨ 什么是 MiniMax H3？

**minimaxh3.info** 是独立运营的 MiniMax H3 视频与 **MiniMax H3 Image** 图片生成、编辑服务,与模型发布方 MiniMax 无关联,也未获其背书。用自然语言描述场景,或用起始帧图片引导视频(可附加尾帧)。H3 支持**同步音频**,包括对话、音效和环境音。

无需视频剪辑技能、无需安装软件、无需昂贵显卡。写下提示词,即可生成。

> 🔗 **立即体验：** [https://minimaxh3.info](https://minimaxh3.info)

---

## 🚀 核心功能

### 🎬 文字/图片生成视频
两种工作流,同一模型。使用**文字生成视频**提示词,或提供首帧/尾帧图片对引导**图片生成视频**。生成器默认已选择 MiniMax H3 模型 — 写提示、加参考、点生成。

### 🎨 MiniMax H3 Image
[生成与编辑静态图片](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme): 使用文字提示词,或最多 8 张编辑输入图(含原图),每次生成 1–4 张约 4 MP 的 PNG。提交需登录并持有积分,以提交前显示的总报价为准。转视频时需下载 PNG,打开图生视频工具,手动上传为首帧,再核对单独的视频报价。

[陶壶换背景实测教程](https://minimaxh3.info/zh/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme) 包含提示词、编辑前后图片和一段隔离测试生成的视频。镜头推近到片段中段时，壶底被裁出了画面。

把双镜头视频提示词交给 MiniMax H3 Image，会得到什么？在[同一张陶壶参考图的对照实测](https://minimaxh3.info/zh/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)中，第一次编辑把两个视图并排画在一起。只要求把手特写时，画面变成了单一近景，但把手换到了壶身另一侧。教程附两次提交的完整提示词和结果图。

想保留商品朝向，可以把观察者看到的位置也写进去。我们沿用同一张参考图、尺寸和种子，在特写提示词末尾加了一句：`Preserve the reference orientation: the jug body is on the left of the frame and its handle extends to the right as seen by the viewer.` 在[这次输出的特写](https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp)中，把手回到了画面右侧，背景更浅，釉面的高光也更强。这是一次追加生成的结果。

<a href="https://minimaxh3.info/zh/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&amp;utm_medium=referral&amp;utm_campaign=h3_image_readme"><img src="https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp" alt="打开双提示词对照教程。追加生成的红釉陶壶特写中，把手位于观察者右侧。" width="480"></a>

### 🔈 原生同步音频
H3 可以**随画面生成对话、音效和环境音**。请在提示词中描述所需声音,并检查生成结果。

### 🖼️ 首帧与尾帧控制
把商品图上传为**首帧**；如果结尾已有目标构图，再加一张**尾帧**，用提示词描述两帧之间的运动。[看同一张陶壶图生成的两段原片](https://minimaxh3.info/zh/blog/minimax-h3-image-to-video-first-last-frame?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)：两段的背景都变成了青绿色，加了尾帧的那段在墙面亮度和台座前沿这两处更接近目标图。

### 🎥 视频输出设置
提供 **480P、720P 和 1080P**,支持 16:9、9:16、4:3、3:4 和 1:1 多种比例。时长随分辨率变化: 480P 最长 20 秒、720P 最长 15 秒、1080P 最长 10 秒。请在工作台核对可用设置与积分报价。

准备做一段 5 秒视频时，可以先按自己的素材[查看三种路径的积分预算](https://minimaxh3.info/zh/blog/minimax-h3-video-resolution-credits?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)：直接用已有图、先生成一张新图，或先编辑已有图。表里列出了每种视频分辨率的合计，提交前可逐步核价。

### ⚡ 4步生成流程
写提示词 → 添加参考 → 选择格式 → 生成并优化。没有灵感?内置**提示词画廊**提供六个现成示例,可复制粘贴后自行调整。

### 🔑 符合条件账号的试用积分
符合条件的新账号可能获得 **20 试用积分**,受地区和邮箱资格限制;可生成的内容以实际到账积分与工作台当前报价为准。

---

## 🎯 常见使用场景

| 使用场景 | 说明 |
|----------|------|
| 🎮 **游戏内容** | 过场动画、角色PV、UI动效概念,视觉风格稳定统一 |
| 🎨 **风格化动画** | 黏土、像素、动漫、3D奇幻,跨镜头保持统一风格 |
| 📦 **产品视频** | 将产品静态图转化为演示、讲解和营销概念视频 |
| 📢 **广告投放** | 适配社交媒体、展示广告和智能电视广告的短视频创意 |
| 🎬 **影视制作** | 预告片、品牌影片、短剧,带镜头语言和声音设计 |
| 📱 **短视频社交** | 为 Shorts、Reels 和 TikTok 创作的竖屏故事视频 |

---

## 📖 如何生成视频 — 4个简单步骤

1. **写提示词** — 描述主体、镜头运动、光线和氛围(生成器中最多600字符)
2. **添加参考(可选)** — 附加最多两张首帧/尾帧图片控制构图
3. **选择格式** — 选择当前分辨率可用的时长、五种画面比例和480P/720P/1080P分辨率,并核对积分报价
4. **生成并优化** — 查看结果、修改提示词,再次生成直到满意

---

## 🆚 模型与工作台边界

MiniMax 发布 H3-Base 权重,模型文档区分 768p 基础输出与单独的 H3-Regenerate-2K 工作流。本站提供 480P/720P/1080P 视频与最多两张首尾帧图片,不提供完整多模态参考或官方 2K 工作流。同样,本站 MiniMax H3 Image 的约 4 MP 输出和最多 8 张编辑输入图属于本站设置,不同于官方模型/API 的更高配置。

---

## 🌍 支持格式

| 格式 | 支持 |
|------|------|
| 分辨率 | 480P / 720P / 1080P |
| 画面比例 | 16:9 · 9:16 · 4:3 · 3:4 · 1:1 |
| 片段时长 | 480P 最长 20 秒 / 720P 最长 15 秒 / 1080P 最长 10 秒 |
| 输入方式 | 文字提示、首帧、首帧+尾帧 |
| 音频 | 原生同步(对话、音效、环境音) |
| 试用积分 | 符合条件的新账号可能获得 20 积分,有资格限制 |

---

## 📱 全设备可用

MiniMax H3 完全在浏览器中运行,支持桌面、平板和手机 — 无需下载App、无需安装。生成的视频保存在账户历史中,可以离开页面,稍后回来查看完成结果。

---

## 🔗 链接

- **服务网站:** [https://minimaxh3.info](https://minimaxh3.info)
- **立即体验:** [https://minimaxh3.info](https://minimaxh3.info)
- **MiniMax H3 Image:** [图片生成与编辑](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- **实测教程:** [陶壶换背景与视频测试](https://minimaxh3.info/zh/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- **视频增强：** [打开视频增强工具](https://minimaxh3.info/zh/video-upscaler)

---

## 📄 许可协议

本项目基于 MIT 许可证发布。
本仓库许可证不授予模型权重、网站服务、生成结果或第三方素材的使用权;这些内容分别适用各自条款。

---

<p align="center">
  <strong>Made with ❤️ | <a href="https://minimaxh3.info">minimaxh3.info</a></strong>
</p>
