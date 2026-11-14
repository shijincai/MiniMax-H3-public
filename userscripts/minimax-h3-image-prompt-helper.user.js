// ==UserScript==
// @name         MiniMax H3 Image Prompt Helper
// @name:zh-CN   MiniMax H3 Image 提示词复制助手
// @namespace    https://minimaxh3.info/
// @version      0.1.0
// @description  Copy selected text as a prompt after trimming, a 2000-Unicode-code-point limit check, and confirmation. Does not generate images.
// @description:zh-CN  通过菜单复制选中文字：去掉首尾空白，检查2000个Unicode码点上限，确认后才复制；不生成图片。
// @match        https://*/*
// @noframes
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @license      MIT
// @supportURL   https://github.com/shijincai/MiniMax-H3/issues
// ==/UserScript==

(function () {
  'use strict';

  const chinese = /^zh/i.test(navigator.language || '');
  GM_registerMenuCommand(
    chinese ? '复制选中的提示词' : 'Copy selected prompt',
    () => {
      const text = String(window.getSelection() || '').trim();
      const count = Array.from(text).length;
      if (!text) {
        window.alert(chinese ? '请先选择文字。' : 'Select some text first.');
        return;
      }
      if (count > 2000) {
        window.alert(
          chinese
            ? `选中文字有${count}个Unicode码点，超过2000上限，未复制。`
            : `Selection has ${count} Unicode code points, exceeding the 2000 limit. Nothing copied.`
        );
        return;
      }
      if (
        !window.confirm(
          chinese
            ? `复制以下文字？Unicode码点数：${count} / 2000\n\n${text}`
            : `Copy this text? Unicode code points: ${count} / 2000\n\n${text}`
        )
      ) return;
      GM_setClipboard(text, 'text', () => {
        window.alert(chinese ? '已复制提示词。' : 'Prompt copied.');
      });
    }
  );
})();
