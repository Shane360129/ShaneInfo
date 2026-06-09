/**
 * 主互動腳本
 * - Hash 路由切換頁面（#about / #resume / #projects / #contact）
 * - 行動裝置漢堡選單開合
 * - 深淺色模式切換
 * - 動態渲染 Skills / Experience / Education / Projects / Contact
 */

(function () {
  const THEME_KEY = 'site-theme';
  const PAGES = ['about', 'resume', 'projects', 'thesis', 'benchmark', 'notes', 'contact'];
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

  /* ---- Copy / right-click guard (contact + content pages stay copyable) ---- */
  function isCopyAllowed(target) {
    return (
      target &&
      typeof target.closest === 'function' &&
      target.closest('#contact, #benchmark, #thesis, #notes')
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

  /* Build the .project-image inner markup: static poster + optional hover-play demo */
  function buildProjectMedia(p) {
    const cover = p.cover || '';
    const isImage =
      /\.(png|jpe?g|webp|gif|svg)$/i.test(cover) || /^(https?:)?\/\//.test(cover);
    const posterHtml = isImage
      ? `<img class="project-poster" src="${cover}" alt="${p.name}" loading="lazy" />`
      : `<div class="project-poster-html">${cover}</div>`;

    const demo = p.video || '';
    if (!demo) return { html: posterHtml, demoAttr: '' };

    const badge =
      '<span class="project-demo-badge"><span class="project-demo-tri" aria-hidden="true"></span>DEMO</span>';

    // Animated GIF: swap the poster <img> src on hover (handled in setupProjectVideos)
    if (/\.gif$/i.test(demo)) {
      return { html: posterHtml + badge, demoAttr: ` data-has-demo="gif" data-gif="${demo}"` };
    }
    // Video (recommended): overlaid <video>, loaded only on hover (preload="none")
    if (/\.(mp4|webm|mov|m4v)$/i.test(demo)) {
      const type = /\.webm$/i.test(demo) ? 'video/webm' : 'video/mp4';
      const posterAttr = isImage ? ` poster="${cover}"` : '';
      const video =
        `<video class="project-video" muted loop playsinline preload="none"${posterAttr} aria-label="${p.name} demo">` +
        `<source src="${demo}" type="${type}" /></video>`;
      return { html: posterHtml + video + badge, demoAttr: ' data-has-demo="video"' };
    }
    return { html: posterHtml, demoAttr: '' };
  }

  /* Wire hover-to-play (desktop), tap-to-toggle (touch / reduced-motion), and
     graceful fallback: if a demo file is missing it errors silently and the
     static poster stays — no broken state, no console noise on load. */
  function setupProjectVideos() {
    const reduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.project-image[data-has-demo]').forEach((box) => {
      const video = box.querySelector('.project-video');

      if (video) {
        let failed = false;
        const play = () => {
          if (failed) return;
          const pr = video.play();
          if (pr && typeof pr.catch === 'function') pr.catch(() => {});
        };
        const stop = () => {
          video.pause();
          try {
            video.currentTime = 0;
          } catch (e) {
            /* ignore */
          }
          box.classList.remove('demo-playing');
        };
        video.addEventListener('playing', () => {
          box.classList.add('demo-ready', 'demo-playing');
        });
        video.addEventListener('loadeddata', () => box.classList.add('demo-ready'));
        video.addEventListener('error', () => {
          failed = true;
          box.classList.remove('demo-ready', 'demo-playing');
        });
        if (!reduced) {
          box.addEventListener('mouseenter', play);
          box.addEventListener('mouseleave', stop);
        }
        box.addEventListener('click', () => {
          if (failed) return;
          if (video.paused) play();
          else stop();
        });
        return;
      }

      // GIF path
      const gifUrl = box.getAttribute('data-gif');
      const img = box.querySelector('.project-poster');
      if (!gifUrl || !img) return;
      const staticSrc = img.getAttribute('src');
      const pre = new Image();
      let ready = false;
      pre.onload = () => {
        ready = true;
        box.classList.add('demo-ready');
      };
      const arm = () => {
        if (!pre.src) pre.src = gifUrl;
      };
      const swapIn = () => {
        if (ready) {
          img.src = gifUrl;
          box.classList.add('demo-playing');
        }
      };
      const swapOut = () => {
        img.src = staticSrc;
        box.classList.remove('demo-playing');
      };
      if (!reduced) {
        box.addEventListener('mouseenter', () => {
          arm();
          swapIn();
        });
        box.addEventListener('mouseleave', swapOut);
      }
      box.addEventListener('click', () => {
        arm();
        if (img.src.indexOf(gifUrl) >= 0) swapOut();
        else swapIn();
      });
    });
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
        const media = buildProjectMedia(p);
        const statHtml = p.stat
          ? `<div class="project-stat">
              <span class="project-stat-value" data-count="${p.stat.value}">0</span><span class="project-stat-suffix">${p.stat.suffix || ''}</span>
              <span class="project-stat-label">${p.stat.label || ''}</span>
            </div>`
          : '';
        return `
        <div class="project-card">
          <div class="project-image"${media.demoAttr}>${media.html}</div>
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
    setupProjectVideos();
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

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ---- Thesis deep-dive page ---- */
  function renderThesis(dict) {
    const root = document.getElementById('thesisBody');
    if (!root || !dict.thesis) return;
    const t = dict.thesis;
    const meta = (typeof window.THESIS_DATA !== 'undefined' && window.THESIS_DATA.meta) || {};

    const heroHtml = `
      <section class="thesis-hero">
        <span class="thesis-hero-badge">${escapeHtml(t.heroBadge)}</span>
        <h3 class="thesis-hero-title">${escapeHtml(t.heroTitle)}</h3>
        <p class="thesis-hero-sub">${escapeHtml(t.heroSubtitle)}</p>
        <p class="thesis-hero-byline">
          <span>${escapeHtml(t.heroAuthor)}</span>
          <span class="thesis-hero-sep">·</span>
          <span>${escapeHtml(t.heroAdvisor)}</span>
          <span class="thesis-hero-sep">·</span>
          <span>${escapeHtml(meta.org || '')}</span>
        </p>
      </section>`;

    const kpiHtml = `
      <section class="thesis-kpis-wrap">
        <h3 class="thesis-section-title">${escapeHtml(t.kpisTitle)}</h3>
        <div class="thesis-kpis">
          ${t.kpis
            .map(
              (k) => `
            <div class="thesis-kpi">
              <span class="thesis-kpi-value" data-count="${k.value}">0</span>${
                k.suffix ? `<span class="thesis-kpi-suffix">${escapeHtml(k.suffix)}</span>` : ''
              }
              <span class="thesis-kpi-label">${escapeHtml(k.label)}</span>
            </div>`
            )
            .join('')}
        </div>
      </section>`;

    const renderSection = (s) => {
      const head = s.heading ? `<h3 class="thesis-section-title">${escapeHtml(s.heading)}</h3>` : '';
      if (s.kind === 'text') {
        return `<section class="thesis-section">${head}${(s.paragraphs || [])
          .map((p) => `<p class="thesis-paragraph">${escapeHtml(p)}</p>`)
          .join('')}</section>`;
      }
      if (s.kind === 'stack') {
        return `<section class="thesis-section">${head}
          <ul class="thesis-stack">
            ${(s.items || [])
              .map(
                (i) => `
              <li class="thesis-stack-row">
                <span class="thesis-stack-name">${escapeHtml(i.name)}</span>
                <span class="thesis-stack-value">${escapeHtml(i.value)}</span>
                <span class="thesis-stack-note">${escapeHtml(i.note || '')}</span>
              </li>`
              )
              .join('')}
          </ul>
        </section>`;
      }
      if (s.kind === 'pipeline') {
        const stages = (s.stages || [])
          .map(
            (st, idx, arr) => `
          <div class="thesis-pipe-stage">
            <span class="thesis-pipe-tag">${escapeHtml(st.stage)}</span>
            <span class="thesis-pipe-prompt">${escapeHtml(st.prompt)}</span>
            <span class="thesis-pipe-meta">${escapeHtml(st.maxSeq)} · ${escapeHtml(st.hours)}</span>
          </div>${idx < arr.length - 1 ? '<span class="thesis-pipe-arrow" aria-hidden="true">→</span>' : ''}`
          )
          .join('');
        return `<section class="thesis-section">${head}
          <div class="thesis-pipeline">${stages}</div>
          ${s.footnote ? `<p class="thesis-footnote">${escapeHtml(s.footnote)}</p>` : ''}
        </section>`;
      }
      if (s.kind === 'table') {
        const cols = (s.cols || []).map((c) => `<th>${escapeHtml(c)}</th>`).join('');
        const rows = (s.rows || [])
          .map(
            (r) =>
              `<tr>${r.map((c, i) => `<td${i === 0 ? '' : ' class="thesis-tbl-val"'}>${escapeHtml(c)}</td>`).join('')}</tr>`
          )
          .join('');
        return `<section class="thesis-section">${head}
          <div class="thesis-table-wrap"><table class="thesis-table"><thead><tr>${cols}</tr></thead><tbody>${rows}</tbody></table></div>
        </section>`;
      }
      if (s.kind === 'bullets') {
        return `<section class="thesis-section">${head}
          <ul class="thesis-bullets">
            ${(s.items || []).map((i) => `<li>${escapeHtml(i)}</li>`).join('')}
          </ul>
        </section>`;
      }
      return '';
    };

    const sectionsHtml = (t.sections || []).map(renderSection).join('');

    const linkIcon = (kind) =>
      kind === 'repo' ? '↗' : kind === 'demo' ? '↗' : '→';
    const linksHtml = `
      <section class="thesis-section">
        <h3 class="thesis-section-title">${escapeHtml(t.linksTitle)}</h3>
        <div class="thesis-links">
          ${(t.links || [])
            .map(
              (l) =>
                `<a class="thesis-link thesis-link-${l.kind}" href="${l.href}"${
                  l.kind === 'internal' ? '' : ' target="_blank" rel="noopener"'
                }>${escapeHtml(l.label)} <span aria-hidden="true">${linkIcon(l.kind)}</span></a>`
            )
            .join('')}
        </div>
      </section>`;

    root.innerHTML = heroHtml + kpiHtml + sectionsHtml + linksHtml;
  }

  /* ---- Benchmark page ---- */
  function renderBenchmark(dict) {
    const root = document.getElementById('benchmarkBody');
    if (!root || !dict.benchmark) return;
    if (typeof window.THESIS_DATA === 'undefined') {
      root.innerHTML = '<p class="thesis-paragraph">Loading benchmark data…</p>';
      return;
    }
    const t = dict.benchmark;
    const data = window.THESIS_DATA;

    const stageLabel = (mode) => {
      const stage = mode.stage || '';
      return `<span class="bench-stage bench-stage-${stage.toLowerCase()}">${escapeHtml(stage)}</span>`;
    };
    const numCell = (n, suffix) =>
      `<td class="bench-num">${typeof n === 'number' ? n.toFixed(2) : escapeHtml(n)}${suffix || ''}</td>`;

    const modesRows = (data.modes || [])
      .map(
        (m) => `
      <tr>
        <td class="bench-mode-label">${escapeHtml(m.label)}</td>
        <td>${stageLabel(m)}</td>
        <td class="bench-mode-note">${escapeHtml(m.note)}</td>
        ${numCell(m.ex_pct, '%')}
        ${numCell(m.em_string_pct, '%')}
        ${numCell(m.em_component_pct, '%')}
        <td class="bench-num">${Math.round(m.prompt_tokens)}</td>
        ${numCell(m.infer_sec, 's')}
      </tr>`
      )
      .join('');

    const modesHtml = `
      <section class="bench-section">
        <h3 class="bench-section-title">${escapeHtml(t.modes.title)}</h3>
        <div class="bench-table-wrap">
          <table class="bench-table">
            <thead>
              <tr>${t.modes.cols.map((c) => `<th>${escapeHtml(c)}</th>`).join('')}</tr>
            </thead>
            <tbody>${modesRows}</tbody>
          </table>
        </div>
        <p class="bench-note">${escapeHtml(t.modes.note)}</p>
      </section>`;

    const modeKeys = Object.keys(data.byView || {});
    const buildSelector = (id, label) =>
      `<label class="bench-selector-label">${escapeHtml(label)}
        <select id="${id}" class="bench-selector">
          ${modeKeys.map((k) => `<option value="${escapeHtml(k)}">${escapeHtml(k)}</option>`).join('')}
        </select>
      </label>`;

    const viewBarsHtml = (key) => {
      const arr = data.byView[key] || [];
      const max = Math.max(...arr.map((r) => r.pct), 100);
      return arr
        .map(
          (r) => `
        <div class="bench-bar-row">
          <span class="bench-bar-name">${escapeHtml(r.view)}</span>
          <span class="bench-bar-track"><span class="bench-bar-fill" style="width:${(r.pct / max) * 100}%"></span></span>
          <span class="bench-bar-val">${r.pct.toFixed(1)}%</span>
          <span class="bench-bar-count">${r.ex}/${r.count}</span>
        </div>`
        )
        .join('');
    };

    const diffBarsHtml = (key) => {
      const arr = (data.byDifficulty[key] || []).filter((r) => r.diff !== 'all');
      const all = (data.byDifficulty[key] || []).find((r) => r.diff === 'all');
      const max = 100;
      const diffNames = t.byDifficulty.diffNames;
      const rows = arr
        .map(
          (r) => `
        <div class="bench-bar-row">
          <span class="bench-bar-name">${escapeHtml(diffNames[r.diff] || r.diff)}</span>
          <span class="bench-bar-track"><span class="bench-bar-fill" style="width:${(r.pct / max) * 100}%"></span></span>
          <span class="bench-bar-val">${r.pct.toFixed(1)}%</span>
          <span class="bench-bar-count">${r.ex}/${r.count}</span>
        </div>`
        )
        .join('');
      const allRow = all
        ? `
        <div class="bench-bar-row bench-bar-row-all">
          <span class="bench-bar-name">${escapeHtml(diffNames.all || 'All')}</span>
          <span class="bench-bar-track"><span class="bench-bar-fill" style="width:${(all.pct / max) * 100}%"></span></span>
          <span class="bench-bar-val">${all.pct.toFixed(1)}%</span>
          <span class="bench-bar-count">${all.ex}/${all.count}</span>
        </div>`
        : '';
      return rows + allRow;
    };

    const grid2Html = `
      <section class="bench-grid2">
        <div class="bench-section">
          <div class="bench-section-head">
            <h3 class="bench-section-title">${escapeHtml(t.byView.title)}</h3>
            ${buildSelector('benchViewSel', t.byView.selectorLabel)}
          </div>
          <div id="benchViewBars" class="bench-bars">${viewBarsHtml('test × header')}</div>
          <p class="bench-note">${escapeHtml(t.byView.note)}</p>
        </div>
        <div class="bench-section">
          <div class="bench-section-head">
            <h3 class="bench-section-title">${escapeHtml(t.byDifficulty.title)}</h3>
            ${buildSelector('benchDiffSel', t.byDifficulty.selectorLabel)}
          </div>
          <div id="benchDiffBars" class="bench-bars">${diffBarsHtml('test × header')}</div>
          <p class="bench-note">${escapeHtml(t.byDifficulty.note)}</p>
        </div>
      </section>`;

    const insightsHtml = `
      <section class="bench-section">
        <h3 class="bench-section-title">${escapeHtml(t.insights.title)}</h3>
        <div class="bench-insights">
          ${t.insights.items
            .map(
              (i) => `
            <article class="bench-insight">
              <h4 class="bench-insight-head">${escapeHtml(i.head)}</h4>
              <p class="bench-insight-body">${escapeHtml(i.body)}</p>
            </article>`
            )
            .join('')}
        </div>
      </section>`;

    const tbaHtml = `
      <section class="bench-section bench-tba">
        <h3 class="bench-section-title">${escapeHtml(t.tba.title)}</h3>
        <p class="bench-tba-body">${escapeHtml(t.tba.body)}</p>
      </section>`;

    root.innerHTML = modesHtml + grid2Html + insightsHtml + tbaHtml;

    const vSel = document.getElementById('benchViewSel');
    const dSel = document.getElementById('benchDiffSel');
    if (vSel) {
      vSel.value = 'test × header';
      vSel.addEventListener('change', () => {
        const bars = document.getElementById('benchViewBars');
        if (bars) bars.innerHTML = viewBarsHtml(vSel.value);
      });
    }
    if (dSel) {
      dSel.value = 'test × header';
      dSel.addEventListener('change', () => {
        const bars = document.getElementById('benchDiffBars');
        if (bars) bars.innerHTML = diffBarsHtml(dSel.value);
      });
    }
  }

  /* ---- Technical notes page ---- */
  function renderNotes(dict) {
    const root = document.getElementById('notesBody');
    if (!root || !dict.notes) return;
    const t = dict.notes;
    root.innerHTML = `
      <div class="notes-list">
        ${(t.articles || [])
          .map(
            (a) => `
          <details class="note-card" id="note-${escapeHtml(a.id)}">
            <summary class="note-summary">
              <span class="note-tag">${escapeHtml(a.tag)}</span>
              <h3 class="note-title">${escapeHtml(a.title)}</h3>
              <p class="note-blurb">${escapeHtml(a.summary)}</p>
              <span class="note-toggle" aria-hidden="true">+</span>
            </summary>
            <div class="note-body">
              ${(a.body || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            </div>
          </details>`
          )
          .join('')}
      </div>`;
  }

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  const REVEAL_SELECTOR =
    '.about-section, .page-header, .resume-section-title, .skill-card, .resume-entry, .project-card, .contact-link, .thesis-hero, .thesis-section, .thesis-kpis-wrap, .bench-section, .note-card';
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
    renderThesis(dict);
    renderBenchmark(dict);
    renderNotes(dict);
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
