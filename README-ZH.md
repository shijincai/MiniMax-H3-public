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

> 🔗 **立即体验：** [https://minimaxh3.info/zh](https://minimaxh3.info/zh)

---

## 🚀 核心功能

### 🎬 文字/图片生成视频
两种工作流,同一模型。使用**文字生成视频**提示词,或提供首帧/尾帧图片对引导**图片生成视频**。生成器默认已选择 MiniMax H3 模型 — 写提示、加参考、点生成。

### 🎨 MiniMax H3 Image
[生成与编辑静态图片](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme): 使用文字提示词,或最多 8 张编辑输入图(含原图),每次生成 1–4 张约 4 MP 的 PNG。提交需登录并持有积分,以提交前显示的总报价为准。转视频时需下载 PNG,[打开图生视频工具](https://minimaxh3.info/zh?generationMode=image-to-video&utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=image_to_video#generator),手动上传为首帧,再核对单独的视频报价。

上传参考照片前，可查看 [minimaxh3.info 的素材保留与删除说明](https://minimaxh3.info/zh/privacy-policy)。按本站隐私政策，用户内容与任务历史最长保留七天，期满后删除或匿名化；如需提前删除，可联系客服。

参考图文件不大却传不上去时，可以[按实测指南检查文件大小和像素尺寸，并缩小图片](https://minimaxh3.info/zh/blog/minimax-h3-image-reference-preparation?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=reference_upload_limits)。

[陶壶换背景实测教程](https://minimaxh3.info/zh/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme) 包含提示词、编辑前后图片和一段隔离测试生成的视频。镜头推近到片段中段时，壶底被裁出了画面。另一次明确要求透明底的测试返回了不透明 PNG，背景和把手孔内均接近白色。[下载原 PNG 和单独用 FFmpeg 处理的透明 PNG 作对照](https://minimaxh3.info/zh/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=white_background_cutout#white-background-cutout)。处理后把手孔能透出底色，但孔边仍有细亮边，壶口高光也有 5 个像素被完全去掉。

MiniMax H3 Image 换背景后，瓶身上的字还对吗？在[一次插画瓶换背景实测](https://minimaxh3.info/zh/blog/minimax-h3-image-product-label-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)中，标签仍可读为 **MICA 27**，但字形边缘和瓶身高光都有变化。要试另一种配色，可以[打开 MICA 27 青绿色瓶身样例](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=product_recolor#h3-example-product-recolor)，点击样例按钮，把同一张瓶图和实测提示词载入单张编辑草稿。用这张换背景后的静图做了[一次 5 秒 MiniMax H3 图生视频测试](https://minimaxh3.info/zh/blog/minimax-h3-image-product-label-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=mica_label_motion#label-in-motion)，五个采样点都能清楚读到标签，最后两个采样点的画面上缘切到了瓶盖。

把双镜头视频提示词交给 MiniMax H3 Image，会得到什么？在[同一张陶壶参考图的对照实测](https://minimaxh3.info/zh/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)中，第一次编辑把两个视图并排画在一起。只要求把手特写时，画面变成了单一近景，但把手换到了壶身另一侧。教程附两次提交的完整提示词和结果图。

想保留商品朝向，可以把观察者看到的位置也写进去。我们沿用同一张参考图、尺寸和种子，在特写提示词末尾加了一句：`Preserve the reference orientation: the jug body is on the left of the frame and its handle extends to the right as seen by the viewer.` 在[这次输出的特写](https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp)中，把手回到了画面右侧，背景更浅，釉面的高光也更强。这是一次追加生成的结果。

<a href="https://minimaxh3.info/zh/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&amp;utm_medium=referral&amp;utm_campaign=h3_image_readme"><img src="https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp" alt="打开双提示词对照教程。追加生成的红釉陶壶特写中，把手位于观察者右侧。" width="480"></a>

### 🔈 原生同步音频
H3 可以**随画面生成对话、音效和环境音**。请在提示词中描述所需声音,并检查生成结果。

### 🖼️ 首帧与尾帧控制
把商品图上传为**首帧**；如果结尾已有目标构图，再加一张**尾帧**，用提示词描述两帧之间的运动。[看同一张陶壶图生成的两段原片](https://minimaxh3.info/zh/blog/minimax-h3-image-to-video-first-last-frame?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)：两段的背景都变成了青绿色，加了尾帧的那段在墙面亮度和台座前沿这两处更接近目标图。

### 🎥 视频输出设置
提供 **480P、720P 和 1080P**,支持 16:9、9:16、4:3、3:4 和 1:1 多种比例。时长随分辨率变化: 480P 最长 20 秒、720P 最长 15 秒、1080P 最长 10 秒。请在工作台核对可用设置与积分报价。 成片可在账户历史中查看。

选分辨率前，可以先[对照同一张陶壶图在 480P、720P 和 1080P 下生成的三段视频](https://minimaxh3.info/zh/blog/minimax-h3-video-resolution-credits?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme#6-同一首帧生成三档视频实际得到什么)。三档都请求了五秒，使用相同首帧和提示词。可直接播放预览，也可下载原分辨率文件。若还需要生成或编辑首帧，第 5 节列出了对应的积分预算。

已有足够积分时可以直接使用余额。需要充值时可一次性购买入门包，11 月 15 日核价为 9.90 美元、500 积分。按五秒报价计算，若整包只用于同一档位，可提交 50 次 480P、25 次 720P，或 12 次 1080P 后剩余 20 积分。

**每月只编辑 10 张图，怎么选？** 按每张输出 4 积分、连续三个账期各请求 10 张计算，共用 120 积分。假设初始余额为零，没有赠分、重试或其他消耗，一次性入门包花 9.90 美元，剩下 380 积分可在 365 天有效期内使用。基础月付若连续订阅三个账期，共花 29.70 美元，每期的 600 积分中会有 560 积分到期未用。[查看当前套餐](https://minimaxh3.info/zh/pricing?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&entrySource=github_readme&entryPlacement=low_volume_budget&entryCampaign=h3_image_readme)。

### ⚡ 4步生成流程
写提示词 → 添加参考 → 选择格式 → 生成并优化。没有灵感?内置**提示词画廊**提供六个现成示例,可复制粘贴后自行调整。

### 🔑 符合条件账号的试用积分
符合条件的新账号可能获得 **20 试用积分**,受地区和邮箱资格限制;可生成的内容以实际到账积分与工作台当前报价为准。

---

## 🎯 常见使用场景

| 使用场景 | 说明 |
|----------|------|
| 🎮 **游戏内容** | 过场动画、角色宣传片和 UI 动效概念。想让一个角色转身，可以[对照同一张 MiniMax H3 Image 设定图做出的两段视频](https://minimaxh3.info/zh/blog/minimax-h3-image-character-sheet?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme#turnaround-video)。用完整三视图作首帧时，中间的人物也跟着转了。 |
| 🎨 **风格化动画** | 黏土、像素、动漫、3D奇幻,跨镜头保持统一风格 |
| 📷 **商品图视角编辑** | [对照同一张 AI 陶壶参考图的两次 MiniMax H3 Image 独立编辑首图](https://minimaxh3.info/zh/blog/minimax-h3-image-camera-angle-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=camera_angle_edit)。A 接近正面，B 接近顶视，把手看不到的连接处仍无法验证。 |
| 📦 **产品视频** | 将产品静态图转化为演示、讲解和营销概念视频 |
| 📢 **广告投放** | 适配社交媒体、展示广告和智能电视广告的短视频创意。这次用 MiniMax H3 Image 把 NIGHT SIGNAL 换成「夜间信号」，四个字都在画内，两侧留白偏窄。[对照英文海报与中文改字结果](https://minimaxh3.info/zh/blog/minimax-h3-image-poster-text?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=poster_headline)。 |
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

## 使用 MiniMax H3 Image 需要安装 ComfyUI 吗？

不需要。[图片工作台](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme&utm_content=comfyui_workflow)在服务器上生成图片。用电脑、平板或手机登录，输入提示词或上传照片，提交前查看积分报价。

如果要在本地 ComfyUI 生成静图，按手头的素材选工作流。只有提示词时，下载[文生图 JSON](https://github.com/Comfy-Org/workflow_templates/blob/79b02f4a79e233c07ec4923e39f40be27448549d/templates/image_minimax_h3_image_t2i.json)。要修改已有图片时，下载[图片编辑 JSON](https://github.com/Comfy-Org/workflow_templates/blob/79b02f4a79e233c07ec4923e39f40be27448549d/templates/image_minimax_h3_image_edit.json)。在 GitHub 文件页点击 **Download raw file**，然后在 ComfyUI 中打开保存的 JSON。使用编辑工作流时，在 `Load Image` 节点选择自己的照片，它会作为 `<Picture 1>` 输入。所需模型文件与存放目录见 [ComfyUI 官方设置指南](https://docs.comfy.org/tutorials/image/minimax/minimax-h3-image)。

---

## 🔗 链接

- **服务网站:** [https://minimaxh3.info](https://minimaxh3.info)
- **立即体验:** [https://minimaxh3.info/zh](https://minimaxh3.info/zh)
- **MiniMax H3 Image:** [图片生成与编辑](https://minimaxh3.info/zh/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- [用可选的浏览器脚本复制网页上选中的 MiniMax H3 Image 提示词](./userscripts/README.zh.md)，再跟着手册里的三张参考图示例布置房间。
- **实测教程:** [陶壶换背景与视频测试](https://minimaxh3.info/zh/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- **视频增强：** [打开视频增强工具](https://minimaxh3.info/zh/video-upscaler)

---

## 📄 许可协议

本仓库的软件与文档采用 MIT 许可证。模型权重、网站服务、生成结果（含链接中的示例）及第三方素材均不在其授权范围内。

使用本站制作图片或视频时，可查阅[服务条款](https://minimaxh3.info/zh/terms-of-service)第 8、9 节，了解输入素材、生成结果和第三方授权的约定。图片和视频模型有各自的社区许可。使用或托管模型前，请查阅对应的 [MiniMax H3 Image 图片模型许可](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE)和 [MiniMax H3 视频模型许可](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/LICENSE)。

---

<p align="center">
  <strong>Made with ❤️ | <a href="https://minimaxh3.info">minimaxh3.info</a></strong>
</p>
