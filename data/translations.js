/**
 * 翻譯字典 / Translation Dictionary
 *
 * 之後貼上履歷後，把以下兩個物件（zh / en）的內容填入即可。
 * After pasting your resume, fill in the content of `zh` and `en` objects below.
 *
 * 動態渲染區塊資料：skills、experience、education、projects、contactLinks
 * 是陣列，由 js/main.js 自動渲染成卡片或時間軸。
 */

const translations = {
  'zh-TW': {
    meta: {
      title: '個人網站 | Your Name',
      description: '個人履歷與作品集',
    },
    nav: {
      logo: 'YourName',
      about: '關於',
      skills: '技能',
      experience: '經歷',
      education: '學歷',
      projects: '作品',
      contact: '聯絡',
    },
    hero: {
      greeting: '您好，我是',
      name: 'Your Name',
      title: 'Your Title',
      tagline: '這裡是你的個人標語，例如：熱愛打造好用產品的全端工程師。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    about: {
      title: '關於我',
      avatarPlaceholder: '照片',
      paragraph1: '【請填入你的自我介紹第一段，例如背景、現職、專長領域】',
      paragraph2: '【請填入第二段，例如興趣、職涯目標、特質】',
    },
    skills: {
      title: '技能',
      items: [
        {
          category: '程式語言',
          tags: ['JavaScript', 'TypeScript', 'Python'],
        },
        {
          category: '框架 / 工具',
          tags: ['React', 'Node.js', 'Docker'],
        },
        {
          category: '語言能力',
          tags: ['中文（母語）', 'English（流利）'],
        },
      ],
    },
    experience: {
      title: '工作經歷',
      items: [
        {
          date: '2023 — 至今',
          title: '【職稱】',
          subtitle: '【公司名稱】',
          bullets: ['【主要職責 / 成就 1】', '【主要職責 / 成就 2】'],
        },
        {
          date: '2021 — 2023',
          title: '【職稱】',
          subtitle: '【公司名稱】',
          bullets: ['【主要職責 / 成就 1】', '【主要職責 / 成就 2】'],
        },
      ],
    },
    education: {
      title: '學歷',
      items: [
        {
          date: '2017 — 2021',
          title: '【學位 / 科系】',
          subtitle: '【學校名稱】',
          bullets: ['【相關成就或活動】'],
        },
      ],
    },
    projects: {
      title: '作品集',
      items: [
        {
          name: '【專案名稱】',
          cover: '專案 1',
          desc: '【簡短描述專案內容、解決什麼問題】',
          tags: ['React', 'Node.js'],
          demo: '#',
          repo: '#',
        },
        {
          name: '【專案名稱】',
          cover: '專案 2',
          desc: '【簡短描述】',
          tags: ['Python'],
          demo: '#',
          repo: '#',
        },
      ],
      labels: { demo: '線上展示', repo: '原始碼' },
    },
    contact: {
      title: '聯絡我',
      intro: '歡迎透過以下管道與我聯繫',
      links: [
        { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
        { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/' },
        { label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com/' },
      ],
    },
    footer: {
      copyright: '© 2026 Your Name. All rights reserved.',
    },
  },

  en: {
    meta: {
      title: 'Personal Website | Your Name',
      description: 'Personal resume and portfolio',
    },
    nav: {
      logo: 'YourName',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Your Name',
      title: 'Your Title',
      tagline: 'Your tagline here — e.g. Full-stack engineer who loves building useful products.',
      cta1: 'Contact Me',
      cta2: 'View Work',
    },
    about: {
      title: 'About Me',
      avatarPlaceholder: 'Photo',
      paragraph1: '[Your first paragraph — background, current role, expertise]',
      paragraph2: '[Your second paragraph — interests, goals, traits]',
    },
    skills: {
      title: 'Skills',
      items: [
        {
          category: 'Languages',
          tags: ['JavaScript', 'TypeScript', 'Python'],
        },
        {
          category: 'Frameworks / Tools',
          tags: ['React', 'Node.js', 'Docker'],
        },
        {
          category: 'Spoken Languages',
          tags: ['Chinese (Native)', 'English (Fluent)'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          date: '2023 — Present',
          title: '[Job Title]',
          subtitle: '[Company Name]',
          bullets: ['[Key responsibility / achievement 1]', '[Key responsibility / achievement 2]'],
        },
        {
          date: '2021 — 2023',
          title: '[Job Title]',
          subtitle: '[Company Name]',
          bullets: ['[Key responsibility / achievement 1]', '[Key responsibility / achievement 2]'],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          date: '2017 — 2021',
          title: '[Degree / Major]',
          subtitle: '[School Name]',
          bullets: ['[Relevant achievements or activities]'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: '[Project Name]',
          cover: 'Project 1',
          desc: '[Brief description — what problem it solves]',
          tags: ['React', 'Node.js'],
          demo: '#',
          repo: '#',
        },
        {
          name: '[Project Name]',
          cover: 'Project 2',
          desc: '[Brief description]',
          tags: ['Python'],
          demo: '#',
          repo: '#',
        },
      ],
      labels: { demo: 'Live Demo', repo: 'Source' },
    },
    contact: {
      title: 'Contact',
      intro: 'Feel free to reach out via any of the channels below',
      links: [
        { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
        { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/' },
        { label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com/' },
      ],
    },
    footer: {
      copyright: '© 2026 Your Name. All rights reserved.',
    },
  },
};
