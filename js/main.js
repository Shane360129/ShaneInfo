/**
 * 主互動腳本
 * - 行動裝置選單開合
 * - 滾動時的導覽列陰影
 * - 各區塊滾動高亮
 * - 深淺色模式切換
 * - 動態渲染 Skills / Experience / Education / Projects / Contact
 */

(function () {
  const THEME_KEY = 'site-theme';
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  /* ---- Mobile menu ---- */
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) navMenu.classList.remove('open');
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

  /* ---- Scroll highlight & navbar shadow ---- */
  function onScroll() {
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 8 ? 'var(--shadow-sm)' : 'none';
    }

    let current = '';
    const offset = 100;
    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      if (window.scrollY >= top) current = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Dynamic rendering ---- */
  function renderSkills(dict) {
    const root = document.getElementById('skillsGrid');
    if (!root || !dict.skills?.items) return;
    root.innerHTML = dict.skills.items
      .map(
        (item) => `
        <div class="skill-card">
          <h3 class="skill-card-title">${item.category}</h3>
          <div class="skill-tags">
            ${item.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join('')}
          </div>
        </div>`
      )
      .join('');
  }

  function renderTimeline(elementId, items) {
    const root = document.getElementById(elementId);
    if (!root || !items) return;
    root.innerHTML = items
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-date">${item.date}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <div class="timeline-subtitle">${item.subtitle}</div>
          <div class="timeline-desc">
            <ul>${(item.bullets || []).map((b) => `<li>${b}</li>`).join('')}</ul>
          </div>
        </div>`
      )
      .join('');
  }

  function renderProjects(dict) {
    const root = document.getElementById('projectsGrid');
    if (!root || !dict.projects?.items) return;
    root.innerHTML = dict.projects.items
      .map((p) => {
        const titleHtml = p.repo
          ? `<h3 class="project-title"><a href="${p.repo}" target="_blank" rel="noopener">${p.name}</a></h3>`
          : `<h3 class="project-title">${p.name}</h3>`;
        return `
        <div class="project-card">
          <div class="project-image">${p.cover || ''}</div>
          <div class="project-body">
            ${titleHtml}
            <p class="project-desc">${p.desc}</p>
            <div class="project-tags">
              ${(p.tags || []).map((t) => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
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

  window.renderDynamicSections = function (dict) {
    renderSkills(dict);
    renderTimeline('experienceTimeline', dict.experience?.items);
    renderTimeline('educationTimeline', dict.education?.items);
    renderProjects(dict);
    renderContact(dict);
  };
})();
