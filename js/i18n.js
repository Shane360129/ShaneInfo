/**
 * 中英雙語切換 / i18n
 *
 * 用法：
 * - HTML 元素加上 `data-i18n="path.to.key"` 屬性
 * - 語言會記憶在 localStorage，重新整理後保留
 */

(function () {
  const STORAGE_KEY = 'site-lang';
  const DEFAULT_LANG = 'zh-TW';
  const langToggleBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function resolve(obj, path) {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
  }

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'zh-TW' ? 'zh-TW' : 'en';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = resolve(dict, key);
      if (typeof value === 'string') {
        if (el.tagName === 'META') {
          el.setAttribute('content', value);
        } else {
          el.textContent = value;
        }
      }
    });

    if (langLabel) {
      langLabel.textContent = lang === 'zh-TW' ? 'EN' : '中';
    }

    if (typeof window.renderDynamicSections === 'function') {
      window.renderDynamicSections(dict);
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const next = getLang() === 'zh-TW' ? 'en' : 'zh-TW';
      setLang(next);
    });
  }

  document.addEventListener('DOMContentLoaded', () => applyLang(getLang()));

  window.i18n = { getLang, setLang, applyLang };
})();
