/* ==========================================================================
   theme.js — light and dark themes.

   Loaded in <head> without "defer", so the theme is set before the page is
   painted and a dark-theme visitor never sees a white flash.

   The visitor's choice is remembered in this browser. Until they choose, the
   site follows the device's light/dark setting.
   Colours for each theme are in the design tokens at the top of css/style.css.
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const BAR_COLOUR = { light: '#f8f6f1', dark: '#10181f' };
  const LABELS = {
    en: { dark: 'Switch to dark theme', light: 'Switch to light theme' },
    ar: { dark: 'التبديل إلى الوضع الداكن', light: 'التبديل إلى الوضع الفاتح' }
  };

  const root = document.documentElement;
  const deviceDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Storage can be blocked (private windows, strict settings): the toggle still
  // works for the current page, it just isn't remembered.
  function savedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* Nothing to do: see savedTheme(). */
    }
  }

  function labelFor(button, target) {
    if (button.hasAttribute('data-theme-bilingual')) {
      return `${LABELS.en[target]} / ${LABELS.ar[target]}`;
    }
    return (LABELS[root.lang] || LABELS.en)[target];
  }

  function updateButtons(theme) {
    const target = theme === 'dark' ? 'light' : 'dark';
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const label = labelFor(button, target);
      button.setAttribute('aria-label', label);
      button.title = label;
    });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const bar = document.querySelector('meta[name="theme-color"]');
    if (bar) bar.content = BAR_COLOUR[theme];
    updateButtons(theme);
  }

  applyTheme(savedTheme() || (deviceDark.matches ? 'dark' : 'light'));

  deviceDark.addEventListener('change', (event) => {
    if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });

  // Paper is always light: print with the light colours, then restore the visitor's theme.
  let themeBeforePrint = null;
  window.addEventListener('beforeprint', () => {
    themeBeforePrint = root.dataset.theme;
    root.dataset.theme = 'light';
  });
  window.addEventListener('afterprint', () => {
    if (themeBeforePrint) root.dataset.theme = themeBeforePrint;
  });

  document.addEventListener('DOMContentLoaded', () => {
    updateButtons(root.dataset.theme);
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
        saveTheme(next);
        applyTheme(next);
      });
    });
  });
})();
