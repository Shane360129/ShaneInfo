/**
 * 翻譯字典 / Translation Dictionary
 *
 * 內容對應 Shane 的履歷。需自行補上：
 * - 工作 / 學歷年份（找 [請補上年份] / [Add dates]）
 * - Email、GitHub、LinkedIn 連結（contact.links）
 */

const translations = {
  'zh-TW': {
    meta: {
      title: 'Shane | 軟體工程師 ・ AI 研究者',
      description: '從餐旅跨域至軟體開發，專注 LLM 微調與企業 AI 應用落地',
    },
    nav: {
      logo: 'Shane',
      about: '關於',
      skills: '技能',
      experience: '經歷',
      education: '學歷',
      projects: '作品',
      contact: '聯絡',
    },
    hero: {
      greeting: '您好，我是',
      name: 'Shane',
      title: '軟體工程師 ・ AI 研究者',
      tagline:
        '從餐旅跨域至軟體開發，以業務實戰經驗為基礎，專注於 LLM 微調與企業 AI 應用落地。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    about: {
      title: '關於我',
      avatarPlaceholder: '照片',
      paragraph1:
        '畢業於國立屏東科技大學餐旅管理系，曾赴加拿大打工度假一年，培養了獨立解決未知問題的能力與跨文化溝通的適應力。回國後歷經餐飲內場主管與業務專員，為尋求長期技術發展，透過政府「產業新尖兵計畫」完成 C# 程式開發實務訓練。',
      paragraph2:
        '目前就讀於國立高雄師範大學「軟體工程與管理學系」碩士班，並任職於財團法人農漁會南區資訊中心,負責 POS 進銷存系統後台客製化與報表優化。未來期望結合 C#/.NET 開發基礎與 Text-to-SQL 研究,將 LLM 技術落地於實務場景,輔助企業決策並優化營運流程。',
    },
    skills: {
      title: '專業技能',
      items: [
        {
          category: '程式語言 / 框架',
          tags: ['C#', '.NET', 'Python', 'SQL'],
        },
        {
          category: 'AI / 機器學習',
          tags: ['Llama-3.1', 'DoRA', 'QLoRA', 'NEFTune', 'Text-to-SQL'],
        },
        {
          category: '業務領域',
          tags: ['POS 進銷存', 'ERP 系統', '會計帳務邏輯', '報表優化'],
        },
        {
          category: '軟實力',
          tags: ['需求訪談', '跨部門溝通', '系統規格設計', '流程標準化'],
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
          date: '現職',
          title: '軟體工程師',
          subtitle: '財團法人農漁會南區資訊中心',
          bullets: [
            '負責 POS 進銷存系統後台客製化與報表優化',
            '深入探究客戶會計作帳邏輯，釐清資料來源與例外情境，解決「系統成本與實務帳務不符」之痛點',
            '將技術限制具象化，用使用者易懂的方式說明系統風險與取捨，避免無效開發並降低後續維護成本',
          ],
        },
        {
          date: '[請補上年份]',
          title: '內場主管',
          subtitle: '健人餐廚',
          bullets: [
            '從零學習並帶領餐飲團隊，掌握高壓環境下的任務分配與流程標準化',
            '熟悉成本控制、進銷存循環、會計帳務一致性等底層業務邏輯',
          ],
        },
        {
          date: '[請補上年份]',
          title: '業務專員',
          subtitle: '光泉 / 洋酒門市',
          bullets: [
            '負責業績目標與專案執行，熟悉與客戶間的談判與需求釐清',
            '累積之溝通能力，成為轉職軟體工程師後在需求訪談與跨部門協作上的核心優勢',
          ],
        },
      ],
    },
    education: {
      title: '學歷',
      items: [
        {
          date: '在學中',
          title: '軟體工程與管理學系 ・ 碩士',
          subtitle: '國立高雄師範大學',
          bullets: [
            '研究主題：以大型語言模型（Llama-3.1-8B）微調實現企業資料庫本地部署之 Text-to-SQL 系統',
            '強化系統底層觀念與獨立研究能力',
          ],
        },
        {
          date: '[請補上年份]',
          title: '餐旅管理系 ・ 學士',
          subtitle: '國立屏東科技大學',
          bullets: ['於餐旅產業培養跨領域業務理解力與服務思維'],
        },
      ],
    },
    projects: {
      title: '專案作品',
      items: [
        {
          name: '企業級本地部署 Text-to-SQL 系統',
          cover: 'Text-to-SQL',
          desc: '以 Llama-3.1-8B 微調實現企業資料庫本地部署之 Text-to-SQL 系統。於消費級單卡（RTX 5070 Ti, 16GB VRAM）環境完成微調，SAMPLE_ERP 測試集取得 92.79% 之執行準確率（EX），驗證了本地部署與資源受限情境下的商用可行性。',
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '提示遞減訓練'],
          demo: '#',
          repo: '#',
        },
        {
          name: 'POS 進銷存系統客製化',
          cover: 'POS / ERP',
          desc: '為農漁會體系客戶客製化 POS 進銷存系統後台與報表，深入分析客戶會計作帳邏輯，解決系統成本與實務帳務不符之痛點，協助多家門市完成導入。',
          tags: ['C#', '.NET', 'SQL', 'ERP'],
          demo: '#',
          repo: '#',
        },
      ],
      labels: { demo: '專案說明', repo: '原始碼' },
    },
    contact: {
      title: '聯絡我',
      intro: '歡迎透過以下管道與我聯繫，討論技術、合作或交流',
      links: [
        { label: 'Email', value: '請補上 Email', href: 'mailto:your@email.com' },
        { label: 'GitHub', value: 'shane360129', href: 'https://github.com/shane360129' },
        { label: 'LinkedIn', value: '請補上連結', href: '#' },
      ],
    },
    footer: {
      copyright: '© 2026 Shane. All rights reserved.',
    },
  },

  en: {
    meta: {
      title: 'Shane | Software Engineer & AI Researcher',
      description:
        'Hospitality-to-tech crossover, focused on LLM fine-tuning and enterprise AI applications',
    },
    nav: {
      logo: 'Shane',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Shane',
      title: 'Software Engineer ・ AI Researcher',
      tagline:
        'From hospitality to software engineering — translating real-world business logic into AI-powered enterprise solutions.',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    about: {
      title: 'About Me',
      avatarPlaceholder: 'Photo',
      paragraph1:
        'Graduated from National Pingtung University of Science and Technology with a B.A. in Hospitality Management. After a one-year working holiday in Canada, I developed independent problem-solving skills and cross-cultural communication adaptability. Following roles as a restaurant kitchen supervisor and sales specialist, I pivoted to software by completing the government-sponsored C# Industry Vanguard program.',
      paragraph2:
        "I am currently pursuing a Master's degree in Software Engineering and Management at National Kaohsiung Normal University while working as a software engineer at the Farmers' & Fishermen's Association Southern Information Center, customizing POS inventory systems and optimizing reports. My goal is to combine my C#/.NET foundation with Text-to-SQL research to bring LLM technology into real-world enterprise scenarios.",
    },
    skills: {
      title: 'Skills',
      items: [
        {
          category: 'Languages / Frameworks',
          tags: ['C#', '.NET', 'Python', 'SQL'],
        },
        {
          category: 'AI / Machine Learning',
          tags: ['Llama-3.1', 'DoRA', 'QLoRA', 'NEFTune', 'Text-to-SQL'],
        },
        {
          category: 'Business Domain',
          tags: ['POS / Inventory', 'ERP Systems', 'Accounting Logic', 'Report Optimization'],
        },
        {
          category: 'Soft Skills',
          tags: [
            'Requirements Analysis',
            'Cross-team Communication',
            'System Spec Design',
            'Process Standardization',
          ],
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
          date: 'Present',
          title: 'Software Engineer',
          subtitle: "Farmers' & Fishermen's Association Southern Information Center",
          bullets: [
            'Customize POS inventory system backends and optimize reports',
            "Dive deep into clients' accounting logic to resolve mismatches between system costs and real-world bookkeeping",
            'Translate technical constraints into user-friendly explanations, clarifying risks and trade-offs to prevent wasted development and reduce maintenance cost',
          ],
        },
        {
          date: '[Add dates]',
          title: 'Kitchen Supervisor',
          subtitle: 'Jianren Restaurant',
          bullets: [
            'Led a kitchen team from scratch in a high-pressure environment, owning task delegation and process standardization',
            'Built hands-on understanding of cost control, inventory cycles, and accounting consistency',
          ],
        },
        {
          date: '[Add dates]',
          title: 'Sales Specialist',
          subtitle: 'Kuang Chuan / Liquor Retail',
          bullets: [
            'Owned sales targets and project execution; honed client negotiation and needs clarification',
            'Communication and requirement-gathering experience that later became my core strength in software engineering',
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          date: 'In Progress',
          title: "Master's, Software Engineering & Management",
          subtitle: 'National Kaohsiung Normal University',
          bullets: [
            'Research: Local-deployment Text-to-SQL system via Llama-3.1-8B fine-tuning for enterprise databases',
            'Strengthening systems fundamentals and independent research capability',
          ],
        },
        {
          date: '[Add years]',
          title: "Bachelor's, Hospitality Management",
          subtitle: 'National Pingtung University of Science and Technology',
          bullets: [
            'Built cross-domain business intuition and service mindset in the hospitality industry',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Enterprise Local-Deployment Text-to-SQL System',
          cover: 'Text-to-SQL',
          desc: 'Fine-tuned Llama-3.1-8B for enterprise database local-deployment Text-to-SQL. Achieved 92.79% execution accuracy (EX) on the SAMPLE_ERP test set using a consumer-grade RTX 5070 Ti (16GB VRAM), validating commercial viability under resource-constrained conditions.',
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', 'Decreasing-Prompt Training'],
          demo: '#',
          repo: '#',
        },
        {
          name: 'POS Inventory System Customization',
          cover: 'POS / ERP',
          desc: "Customized POS inventory system backends and reports for clients in the Farmers' & Fishermen's Association network, resolving mismatches between system costs and accounting practices and rolling out to multiple stores.",
          tags: ['C#', '.NET', 'SQL', 'ERP'],
          demo: '#',
          repo: '#',
        },
      ],
      labels: { demo: 'Details', repo: 'Source' },
    },
    contact: {
      title: 'Contact',
      intro: 'Feel free to reach out for tech discussions, collaborations, or just to say hi',
      links: [
        { label: 'Email', value: 'Add your email', href: 'mailto:your@email.com' },
        { label: 'GitHub', value: 'shane360129', href: 'https://github.com/shane360129' },
        { label: 'LinkedIn', value: 'Add your link', href: '#' },
      ],
    },
    footer: {
      copyright: '© 2026 Shane. All rights reserved.',
    },
  },
};
