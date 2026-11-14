<!-- Language Switcher -->
<p align="right">
  <a href="./README-ZH.md">中文</a>
</p>

<h1 align="center">
  <img src="https://minimaxh3.info/favicon.svg" alt="MiniMax H3" width="48" height="48" />
  <br/>
  MiniMax H3 — Online AI Video & Image Workspaces
</h1>

<p align="center">
  <strong>Generate and edit still images with MiniMax H3 Image, or create short videos with synchronized audio — right in your browser.</strong>
</p>

<p align="center">
  <a href="https://minimaxh3.info"><strong>🌐 minimaxh3.info</strong></a> · <a href="https://minimaxh3.info/minimax-h3-image?utm_source=github.com&amp;utm_medium=referral&amp;utm_campaign=h3_image_readme"><strong>Open the image workspace</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-online-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
</p>

---

## ✨ What Is MiniMax H3?

**minimaxh3.info** is an independently operated service for MiniMax H3 video and **MiniMax H3 Image** generation and editing. It is not affiliated with or endorsed by MiniMax, which publishes the models. Describe a scene in plain text, or guide the video with a start image and an optional end frame. H3 supports **synchronized audio**, including dialogue, sound effects and ambience.

No video editing skills, no software to install, no expensive GPUs. Just write a prompt and generate.

> 🔗 **Try it now:** [https://minimaxh3.info](https://minimaxh3.info)

---

## 🚀 Key Features

### 🎬 Text & Image to Video
Two workflows, one model. Enter a **text-to-video** prompt, or provide a first/last-frame image pair to guide **image-to-video** generation. The generator is already set to the MiniMax H3 model — write, reference, generate.

### 🎨 MiniMax H3 Image
[Generate and edit still images](https://minimaxh3.info/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme) from a prompt or up to 8 edit inputs, including the original. Request 1–4 PNGs at about 4 MP per image. Sign in and check the credit total before submitting. To make a video, download the PNG, open Image to Video, and manually upload it as the starting frame; check the separate video quote.

Before uploading a reference photo, see [how minimaxh3.info handles uploads and deletion requests](https://minimaxh3.info/privacy-policy). The policy says user content and task history are kept for up to seven days before deletion or anonymization. You can request earlier deletion through support.

**En español:** [¿Por qué se rechaza un PNG que pesa poco?](https://minimaxh3.info/es-ES/blog/minimax-h3-image-reference-preparation?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme) La guía muestra cómo comprobar los megapíxeles y reducir las dimensiones antes de subir la imagen.

The [ceramic jug background-editing walkthrough](https://minimaxh3.info/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme) includes the prompt, before/after images, and one completed video test. In the isolated video test, the camera moves close enough to crop the jug's base halfway through the clip. A separate request for a transparent background returned an opaque PNG. The background and the opening inside the handle were both near white. The walkthrough includes a downloadable copy with the same pixels as the tested output.

Can MiniMax H3 Image keep the text on a bottle when the background changes? In [one edit of an illustrated bottle](https://minimaxh3.info/blog/minimax-h3-image-product-label-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme), the label still read **MICA 27**, but the letter edges and bottle highlights changed. The guide includes the input file and matching close-ups for checking the result.

What happens when you give MiniMax H3 Image a two-shot video prompt? In [our still-image test](https://minimaxh3.info/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme), the first edit put both views side by side. Asking for just the handle produced one close-up, but the handle appeared on the opposite side of the jug. Both prompts and outputs are included.

To specify the viewing direction, we kept the same source, crop dimensions and seed and appended this sentence to the close-up prompt: `Preserve the reference orientation: the jug body is on the left of the frame and its handle extends to the right as seen by the viewer.` In [the resulting close-up](https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp), the handle is back on the viewer’s right. The background is lighter and the glaze highlight is stronger. This was one additional generation.

<a href="https://minimaxh3.info/blog/minimax-h3-image-video-prompt-to-still?utm_source=github.com&amp;utm_medium=referral&amp;utm_campaign=h3_image_readme"><img src="https://files.minimaxh3.info/assets/blog/minimax-h3-image-video-prompt-to-still/cd276bea8196/handle-orientation.webp" alt="Open the two-prompt walkthrough. Follow-up result showing the red ceramic jug handle on the viewer’s right." width="480"></a>

### 🔈 Native Synchronized Audio
H3 can generate **dialogue, sound effects and ambience together with the visuals**. Describe the desired sound in the prompt and review the result.

### 🖼️ First & Last Frame Control
Upload your product image as the **first frame**. Add a **last frame** if you have a particular ending in mind. Describe the motion between frames in your prompt. [Watch both original clips from the same ceramic jug image](https://minimaxh3.info/blog/minimax-h3-image-to-video-first-last-frame?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme): both backgrounds turned teal, but the clip given a last frame ended closer to the target image’s brighter wall and visible front edge of the plinth.

### 🎥 Video Output
Choose **480P, 720P or 1080P** with 16:9, 9:16, 4:3, 3:4 and 1:1 aspect ratios. Duration depends on resolution: up to 20 seconds at 480P, 15 seconds at 720P, or 10 seconds at 1080P. Check the available settings and credit quote in the workspace.

Before choosing a resolution, [watch the same ceramic jug image animated at 480P, 720P and 1080P](https://minimaxh3.info/blog/minimax-h3-video-resolution-credits?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme#6-what-did-the-same-start-image-produce-at-all-three-settings). Each five-second test used the same start image and prompt. Compare the clips and download the original-size files. Section 5 also shows how to budget for generating or editing your starting image.

If you already have enough credits, you can use your balance. If you need a top-up, the site offers a one-time Starter Pack (USD 9.90 for 500 credits, checked November 15, 2026). At the displayed five-second rates, one pack covers 50 requests at 480P, 25 at 720P, or 12 at 1080P with 20 credits left, assuming one resolution and no other spending.

**Editing 10 images a month?** At 4 credits per output, 10 requested edits in each of three billing cycles use 120 credits. Starting from zero, with no bonus credits, retries or other use, the USD 9.90 one-time pack leaves 380 credits within its 365-day term. Keeping Basic monthly for all three cycles costs USD 29.70; 560 of its 600 credits expire unused each cycle in this example. [Check current plans](https://minimaxh3.info/pricing).

### ⚡ 4-Step Generation
Write a prompt → add references → pick the format → generate and refine. Stuck for ideas? The built-in **prompt gallery** ships with six ready-made examples you can copy, paste and adapt.

### 🔑 Trial Credits for Eligible Accounts
Eligible new accounts may receive **20 trial credits**. Region and email eligibility restrictions apply; the amount actually credited and the current workspace quote determine what can be generated.

---

## 🎯 Common Use Cases

| Use Case | Description |
|----------|-------------|
| 🎮 **Game Content** | Cinematics, character PVs and animated UI concepts with stable visual identity |
| 🎨 **Stylized Animation** | Clay, pixel art, anime and 3D fantasy with a consistent look across shots |
| 📦 **Product Video** | Turn product stills into demonstrations, explainers and campaign concepts |
| 📢 **Advertising** | Short-form concepts for social, display and connected-TV campaigns |
| 🎬 **Filmmaking** | Trailers, brand films and short drama with camera language and sound |
| 📱 **Short-Form Social** | Portrait clips for Shorts, Reels and TikTok-ready storytelling |

---

## 📖 How to Create a Video — 4 Simple Steps

1. **Write a prompt** — Describe the subject, camera movement, lighting and mood (up to 600 characters in the generator)
2. **Add references (optional)** — Attach up to two first/last-frame images to control the composition
3. **Choose the format** — Pick a duration available for your resolution and one of five aspect ratios, plus 480P/720P/1080P resolution; check the credit quote
4. **Generate and refine** — Review the result, revise the prompt and generate again until it's right

---

## 🆚 Model and Workspace Limits

MiniMax publishes H3-Base checkpoints; its model documentation distinguishes 768p base output from the separate H3-Regenerate-2K workflow. This site offers 480P/720P/1080P video and up to two first/last-frame images, not full multimodal reference or the official 2K workflow. Likewise, this site's MiniMax H3 Image settings are about 4 MP and up to 8 edit inputs, distinct from the official model/API's higher settings.

---

## 🌍 Supported Formats

| Format | Support |
|--------|---------|
| Resolution | 480P / 720P / 1080P |
| Aspect Ratios | 16:9 · 9:16 · 4:3 · 3:4 · 1:1 |
| Clip Length | Up to 20s at 480P / 15s at 720P / 10s at 1080P |
| Input | Text prompt, first frame, first + last frames |
| Audio | Native synchronized (dialogue, effects, ambience) |
| Trial Credits | Eligible new accounts may receive 20; restrictions apply |

---

## 📱 Works Everywhere

MiniMax H3 runs entirely in the browser and works on desktop, tablet and mobile — no app download, no installation. Generated videos are saved to your account history, so you can leave the page and come back for the finished clip.

---

## 🔗 Links

- **Website:** [https://minimaxh3.info](https://minimaxh3.info)
- **Try MiniMax H3:** [https://minimaxh3.info](https://minimaxh3.info)
- **MiniMax H3 Image:** [Image generator and editor](https://minimaxh3.info/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- **Tested guide:** [Ceramic jug background edit and video test](https://minimaxh3.info/blog/minimax-h3-image-product-background-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_readme)
- **Video Upscaler:** [Open the upscaler](https://minimaxh3.info/video-upscaler)

---

## 📄 License

This project is licensed under the MIT License.
This repository's license does not grant rights to model weights, website services, generated outputs, or third-party assets; their respective terms apply.

---

<p align="center">
  <strong>Made with ❤️ | <a href="https://minimaxh3.info">minimaxh3.info</a></strong>
</p>
