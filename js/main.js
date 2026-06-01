/**
 * 主互動腳本
 * - Hash 路由切換頁面（#about / #resume / #projects / #contact）
 * - 行動裝置漢堡選單開合
 * - 深淺色模式切換
 * - 動態渲染 Skills / Experience / Education / Projects / Contact
 */

(function () {
  const THEME_KEY = 'site-theme';
  const PAGES = ['about', 'resume', 'projects', 'demo', 'contact'];
  const DEFAULT_PAGE = 'about';

  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarNav = document.getElementById('sidebarNav');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const navLinks = document.querySelectorAll('.nav-link[data-page]');

  /* ---- Routing ---- */
  function getPageFromHash() {
    const hash = window.location.hash.slice(1);
    return PAGES.includes(hash) ? hash : DEFAULT_PAGE;
  }

  function showPage(pageId) {
    document.querySelectorAll('.page').forEach((p) => {
      p.classList.toggle('active', p.id === pageId);
    });
    navLinks.forEach((link) => {
      const isActive = link.dataset.page === pageId;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function routeFromHash() {
    showPage(getPageFromHash());
  }

  window.addEventListener('hashchange', () => {
    routeFromHash();
    if (sidebar) sidebar.classList.remove('open');
  });

  /* ---- Mobile sidebar toggle ---- */
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  if (sidebarNav) {
    sidebarNav.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        sidebar.classList.remove('open');
      }
    });
  }

  /* ---- Theme toggle ---- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  /* ---- Copy / right-click guard (contact + demo stay copyable) ---- */
  function isCopyAllowed(target) {
    return (
      target &&
      typeof target.closest === 'function' &&
      target.closest('#contact, #demo')
    );
  }
  document.addEventListener('contextmenu', (e) => {
    if (!isCopyAllowed(e.target)) e.preventDefault();
  });
  document.addEventListener('copy', (e) => {
    if (!isCopyAllowed(e.target)) e.preventDefault();
  });

  /* ---- Dynamic rendering ---- */
  function renderAbout(dict) {
    const root = document.getElementById('aboutBody');
    if (!root || !dict.about?.sections) return;
    root.innerHTML = dict.about.sections
      .map((section) => {
        const subheading = section.subheading
          ? `<p class="about-section-subheading">${section.subheading}</p>`
          : '';
        const paragraphs = (section.paragraphs || [])
          .map((p) => `<p class="about-section-paragraph">${p}</p>`)
          .join('');
        const highlights = (section.highlights || [])
          .map((h) => {
            const sub = h.subtitle
              ? `<span class="about-highlight-sub">${h.subtitle}</span>`
              : '';
            return `
              <li class="about-highlight">
                <div class="about-highlight-head">
                  <span class="about-highlight-title">${h.title}</span>
                  ${sub}
                </div>
                <p class="about-highlight-desc">${h.desc}</p>
              </li>`;
          })
          .join('');
        return `
          <article class="about-section">
            ${section.heading ? `<h3 class="about-section-heading">${section.heading}</h3>` : ''}
            ${subheading}
            ${paragraphs}
            ${highlights ? `<ul class="about-highlights">${highlights}</ul>` : ''}
          </article>`;
      })
      .join('');
  }

  function renderSkills(dict) {
    const root = document.getElementById('skillsGrid');
    if (!root || !dict.skills?.items) return;
    root.innerHTML = dict.skills.items
      .map(
        (item) => `
        <div class="skill-card">
          <h4 class="skill-card-title">${item.category}</h4>
          <div class="skill-tags">
            ${item.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join('')}
          </div>
        </div>`
      )
      .join('');
  }

  function renderResumeList(elementId, items) {
    const root = document.getElementById(elementId);
    if (!root || !items) return;
    root.innerHTML = items
      .map(
        (item) => `
        <div class="resume-entry">
          <div class="resume-entry-date">${item.date}</div>
          <div class="resume-entry-body">
            <h4 class="resume-entry-title">${item.title}</h4>
            <div class="resume-entry-subtitle">${item.subtitle}</div>
            <ul class="resume-entry-bullets">
              ${(item.bullets || []).map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>`
      )
      .join('');
  }

  function renderProjects(dict) {
    const root = document.getElementById('projectsGrid');
    if (!root || !dict.projects?.items) return;
    const labels = dict.projects.labels || { demo: 'Demo', repo: 'Source', paper: 'Paper' };
    root.innerHTML = dict.projects.items
      .map((p) => {
        const links = [];
        if (p.demo) {
          links.push(
            `<a class="project-link project-link-primary" href="${p.demo}" target="_blank" rel="noopener">${labels.demo} ↗</a>`
          );
        }
        if (p.paper) {
          links.push(
            `<a class="project-link project-link-paper" href="${p.paper}" target="_blank" rel="noopener">${labels.paper || 'PDF'} ↗</a>`
          );
        }
        if (p.repo) {
          links.push(
            `<a class="project-link" href="${p.repo}" target="_blank" rel="noopener">${labels.repo} ↗</a>`
          );
        }
        const linksHtml = links.length
          ? `<div class="project-links">${links.join('')}</div>`
          : '';
        const cover = p.cover || '';
        const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(cover) || /^(https?:)?\/\//.test(cover);
        const coverHtml = isImage
          ? `<img src="${cover}" alt="${p.name}" loading="lazy" />`
          : cover;
        const statHtml = p.stat
          ? `<div class="project-stat">
              <span class="project-stat-value" data-count="${p.stat.value}">0</span><span class="project-stat-suffix">${p.stat.suffix || ''}</span>
              <span class="project-stat-label">${p.stat.label || ''}</span>
            </div>`
          : '';
        return `
        <div class="project-card">
          <div class="project-image">${coverHtml}</div>
          <div class="project-body">
            <h3 class="project-title">${p.name}</h3>
            ${statHtml}
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
              ${(p.tags || []).map((t) => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
            ${linksHtml}
          </div>
        </div>`;
      })
      .join('');
  }

  function renderContact(dict) {
    const root = document.getElementById('contactLinks');
    if (!root || !dict.contact?.links) return;
    root.innerHTML = dict.contact.links
      .map(
        (link) => `
        <a class="contact-link" href="${link.href}" target="_blank" rel="noopener">
          <strong>${link.label}</strong>
          <span>${link.value}</span>
        </a>`
      )
      .join('');
  }

  function renderPrintContact(dict) {
    const root = document.getElementById('printContact');
    if (!root || !dict.contact?.links) return;
    root.textContent = dict.contact.links.map((link) => link.value).join('   ·   ');
  }

  /* ---- Text-to-SQL interactive demo ---- */
  const SQL_KEYWORDS = new Set([
    'SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'OUTER', 'ON',
    'AS', 'AND', 'OR', 'NOT', 'IN', 'GROUP', 'BY', 'ORDER', 'HAVING', 'TOP',
    'DESC', 'ASC', 'BETWEEN', 'LIKE', 'DISTINCT', 'SET', 'VALUES', 'NULL', 'IS',
    'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
    'CAST', 'CONVERT', 'GETDATE', 'DATEADD', 'DATEDIFF', 'YEAR', 'MONTH', 'DAY',
  ]);

  let demoTimer = null;

  function prefersReducedMotion() {
    return (
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  function demoLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'zh-TW';
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function highlightSql(sql) {
    const tokenRe = /('(?:[^']|'')*')|(--[^\n]*)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)/g;
    let out = '';
    let last = 0;
    let m;
    while ((m = tokenRe.exec(sql))) {
      out += escapeHtml(sql.slice(last, m.index));
      const tok = m[0];
      if (m[1]) {
        out += `<span class="sql-str">${escapeHtml(tok)}</span>`;
      } else if (m[2]) {
        out += `<span class="sql-comment">${escapeHtml(tok)}</span>`;
      } else if (m[3]) {
        out += `<span class="sql-num">${escapeHtml(tok)}</span>`;
      } else if (SQL_KEYWORDS.has(tok.toUpperCase())) {
        out += `<span class="sql-kw">${escapeHtml(tok)}</span>`;
      } else {
        out += escapeHtml(tok);
      }
      last = m.index + tok.length;
    }
    out += escapeHtml(sql.slice(last));
    return out;
  }

  function formatCell(value) {
    return typeof value === 'number' ? value.toLocaleString('en-US') : escapeHtml(value);
  }

  function findExample(text) {
    const t = String(text || '').trim().toLowerCase();
    if (!t) return null;
    let best = null;
    let bestScore = 0;
    demoData.examples.forEach((ex) => {
      let score = 0;
      ex.keywords.forEach((kw) => {
        if (t.includes(String(kw).toLowerCase())) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        best = ex;
      }
    });
    return bestScore > 0 ? best : null;
  }

  function setActiveChip(root, exId) {
    root.querySelectorAll('.demo-chip').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.ex === exId);
    });
  }

  function buildResultHtml(ex, lang, labels) {
    const cols = ex.columns[lang] || ex.columns['zh-TW'];
    const rows = ex.rows[lang] || ex.rows['zh-TW'];
    const thead = cols.map((c) => `<th>${escapeHtml(c)}</th>`).join('');
    const tbody = rows
      .map(
        (row) =>
          `<tr>${row
            .map((cell, i) => `<td${i === 0 ? '' : ' class="demo-num"'}>${formatCell(cell)}</td>`)
            .join('')}</tr>`
      )
      .join('');
    return `
      <div class="demo-out-head">
        <span class="demo-out-title">${labels.resultTitle}</span>
        <span class="demo-rowcount">${rows.length} ${labels.rows}</span>
      </div>
      <div class="demo-table-scroll">
        <table class="demo-table">
          <thead><tr>${thead}</tr></thead>
          <tbody>${tbody}</tbody>
        </table>
      </div>`;
  }

  function bindCopy(scope, sql, labels) {
    const btn = scope.querySelector('.demo-copy');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const done = () => {
        btn.textContent = labels.copied;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = labels.copy;
          btn.classList.remove('copied');
        }, 1500);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(sql).then(done).catch(() => {});
      } else {
        done();
      }
    });
  }

  function runExample(ex, lang, labels, animate) {
    const sqlWrap = document.getElementById('demoSqlWrap');
    const resWrap = document.getElementById('demoResultWrap');
    if (!sqlWrap || !resWrap) return;

    const build = () => {
      sqlWrap.innerHTML = `
        <div class="demo-out-head">
          <span class="demo-out-title">${labels.sqlTitle}</span>
          <button class="demo-copy" type="button">${labels.copy}</button>
        </div>
        <pre class="demo-sql"><code>${highlightSql(ex.sql)}</code></pre>`;
      bindCopy(sqlWrap, ex.sql, labels);
      resWrap.innerHTML = buildResultHtml(ex, lang, labels);
    };

    if (demoTimer) clearTimeout(demoTimer);

    if (animate && !prefersReducedMotion()) {
      sqlWrap.innerHTML = `
        <div class="demo-generating">
          <span class="demo-dots"><span></span><span></span><span></span></span>
          <span>${labels.generating}</span>
        </div>`;
      resWrap.innerHTML = '';
      demoTimer = setTimeout(build, 650);
    } else {
      build();
    }
  }

  function showNoMatch(labels) {
    const sqlWrap = document.getElementById('demoSqlWrap');
    const resWrap = document.getElementById('demoResultWrap');
    if (!sqlWrap || !resWrap) return;
    if (demoTimer) clearTimeout(demoTimer);
    sqlWrap.innerHTML = `<div class="demo-nomatch">${labels.noMatch}</div>`;
    resWrap.innerHTML = '';
  }

  function renderDemo(dict) {
    const root = document.getElementById('demoApp');
    if (!root || typeof demoData === 'undefined' || !dict.demo) return;
    const lang = demoLang();
    const t = dict.demo;

    const chips = demoData.examples
      .map(
        (ex) =>
          `<button class="demo-chip" type="button" data-ex="${ex.id}">${escapeHtml(
            ex.question[lang]
          )}</button>`
      )
      .join('');

    const schema = demoData.schema
      .map(
        (tbl) =>
          `<div class="demo-schema-row"><code class="demo-schema-table">${escapeHtml(
            tbl.table
          )}</code><span class="demo-schema-cols">${escapeHtml(tbl.cols.join(', '))}</span></div>`
      )
      .join('');

    root.innerHTML = `
      <div class="demo-console">
        <div class="demo-console-bar">
          <span class="demo-dot-r"></span><span class="demo-dot-y"></span><span class="demo-dot-g"></span>
          <span class="demo-console-title">${escapeHtml(t.consoleTitle)}</span>
        </div>
        <div class="demo-console-body">
          <p class="demo-examples-label">${escapeHtml(t.examplesLabel)}</p>
          <div class="demo-chips">${chips}</div>
          <div class="demo-input-row">
            <input id="demoInput" class="demo-input" type="text"
              autocomplete="off" spellcheck="false"
              placeholder="${escapeHtml(t.placeholder)}" aria-label="${escapeHtml(t.placeholder)}" />
            <button id="demoRun" class="demo-run" type="button">${escapeHtml(t.run)}</button>
          </div>
          <div class="demo-output" id="demoSqlWrap"></div>
          <div class="demo-output" id="demoResultWrap"></div>
        </div>
      </div>
      <details class="demo-schema">
        <summary>${escapeHtml(t.schemaTitle)}</summary>
        <div class="demo-schema-list">${schema}</div>
      </details>
      ${
        t.paper
          ? `<a class="demo-paper" href="${t.paper}" target="_blank" rel="noopener">
               <span class="demo-paper-icon" aria-hidden="true">📄</span>
               <span>${escapeHtml(t.paperLabel || 'PDF')}</span>
               <span class="demo-paper-arrow" aria-hidden="true">↗</span>
             </a>`
          : ''
      }
      <p class="demo-disclaimer">${escapeHtml(t.disclaimer)}</p>`;

    const input = root.querySelector('#demoInput');
    const runBtn = root.querySelector('#demoRun');

    const handleRun = () => {
      const ex = findExample(input.value);
      if (ex) {
        setActiveChip(root, ex.id);
        runExample(ex, lang, t, true);
      } else {
        setActiveChip(root, null);
        showNoMatch(t);
      }
    };

    root.querySelectorAll('.demo-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const ex = demoData.examples.find((e) => e.id === chip.dataset.ex);
        if (!ex) return;
        input.value = ex.question[lang];
        setActiveChip(root, ex.id);
        runExample(ex, lang, t, true);
      });
    });

    if (runBtn) runBtn.addEventListener('click', handleRun);
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleRun();
        }
      });
    }

    /* Seed with the first example (no artificial delay on first paint) */
    const first = demoData.examples[0];
    if (first && input) {
      input.value = first.question[lang];
      setActiveChip(root, first.id);
      runExample(first, lang, t, false);
    }
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const REVEAL_SELECTOR =
    '.about-section, .page-header, .resume-section-title, .skill-card, .resume-entry, .project-card, .contact-link';
  let scrollRevealObserver = null;

  function setupScrollReveal() {
    const reducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    targets.forEach((el) => el.classList.add('reveal'));

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in-view'));
      return;
    }

    if (scrollRevealObserver) scrollRevealObserver.disconnect();
    scrollRevealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    targets.forEach((el) => {
      if (!el.classList.contains('in-view')) {
        scrollRevealObserver.observe(el);
      }
    });
  }

  /* ---- Counter animation (elements with data-count) ---- */
  function animateCounter(el, target, duration) {
    const isDecimal = !Number.isInteger(target);
    const startTime = performance.now();
    function tick(now) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      el.textContent = isDecimal ? current.toFixed(2) : String(Math.round(current));
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = isDecimal ? target.toFixed(2) : String(target);
      }
    }
    requestAnimationFrame(tick);
  }

  let counterObserver = null;

  function setupCounters() {
    const reducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('[data-count]:not(.counted)');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => {
        const v = parseFloat(el.getAttribute('data-count'));
        if (Number.isFinite(v)) {
          el.textContent = Number.isInteger(v) ? String(v) : v.toFixed(2);
          el.classList.add('counted');
        }
      });
      return;
    }

    if (counterObserver) counterObserver.disconnect();
    counterObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-count'));
          if (Number.isFinite(target)) {
            animateCounter(el, target, 1400);
            el.classList.add('counted');
          }
          obs.unobserve(el);
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => counterObserver.observe(el));
  }

  window.renderDynamicSections = function (dict) {
    renderAbout(dict);
    renderSkills(dict);
    renderResumeList('experienceTimeline', dict.experience?.items);
    renderResumeList('educationTimeline', dict.education?.items);
    renderProjects(dict);
    renderDemo(dict);
    renderContact(dict);
    renderPrintContact(dict);
    setupScrollReveal();
    setupCounters();
  };

  /* ---- Init route after DOM ready ---- */
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) {
      history.replaceState(null, '', `#${DEFAULT_PAGE}`);
    }
    routeFromHash();
  });
})();
