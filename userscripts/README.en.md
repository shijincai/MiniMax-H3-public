# MiniMax H3 Image Prompt Helper

This helper trims your selected text, shows it for review, and copies it after confirmation. Over 2,000 Unicode code points, it refuses to copy. Shorten your selection and retry. The helper runs on HTTPS top-level pages.

With a userscript manager enabled, [install MiniMax H3 Image Prompt Helper](https://update.greasyfork.org/scripts/605434/MiniMax%20H3%20Image%20Prompt%20Helper.user.js) and confirm the installation in your manager.

## Use it in three steps

1. Select a passage, then open your userscript manager’s menu and choose **Copy selected prompt**. In a Chinese-language browser the same command is **复制选中的提示词**.
2. Review the trimmed text. If it exceeds the limit, select a shorter passage and reopen the menu command.
3. Confirm, then paste into the workspace and check the text before generating. Pasting also lets you check the clipboard if your manager shows no “Prompt copied” message.

**Try a text-only flowchart.** The [MiniMax H3 Image flowchart walkthrough](https://minimaxh3.info/blog/minimax-h3-image-flowchart-labels-arrows?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_helper_docs&utm_content=flowchart) checks one sample with **1 PACK / 2 SCAN / 3 SHIP** and two right-pointing arrows. Select the tutorial’s complete prompt, use this helper to review and copy it, then manually paste it into **Text to Image / 16:9 / 1 image**, with no reference images. Check the current quote before generating. The result is a raster PNG, not an editable SVG; repeat-run success rates were not tested.

**Choose the input image.** The helper copies text, not images. To branch from the original, upload the same original again; to continue an edit, click **Edit this result** on the intended workspace result. Our [three-edit portrait example](https://minimaxh3.info/blog/minimax-h3-image-original-vs-previous-edit?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_helper_docs&utm_content=edit_chain) compares both paths; in G3, navy color spread beyond the collar into the shoulder area. This is one three-edit sample, not a promise of face consistency.

For example, this short excerpt comes from our documented three-reference room tutorial:

```text
Create one photorealistic interior from these three ordered references.
```

To repeat the edit, open the tutorial for the complete prompt. In **Edit Image**, use the room as Picture 1, the chair as Picture 2 and the rug as Picture 3. The tutorial also links to a workspace example that can load all three.

[Open the image workspace](https://minimaxh3.info/minimax-h3-image?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_helper_docs#image-workspace) · [Read the three-reference room tutorial](https://minimaxh3.info/blog/minimax-h3-image-multiple-references-interior?utm_source=github.com&utm_medium=referral&utm_campaign=h3_image_helper_docs)

The helper’s local features are free; it only copies text. On minimaxh3.info, MiniMax H3 Image supports text-to-image and editing with up to eight references including the original, with roughly 4 MP PNG output under current site settings. The video workspace supports text or a starting frame. To animate an image, manually download it and upload it as the video’s start frame. Site generation requires sign-in and sufficient credits for the current quote. This helper is independently maintained and is not an official MiniMax product.
