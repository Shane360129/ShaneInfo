/**
 * 翻譯字典 / Translation Dictionary
 * 內容來源：Shane（黃士銘）的完整履歷
 */

const translations = {
  'zh-TW': {
    meta: {
      title: 'Shane 黃士銘 | 軟體工程師',
      description:
        'POS 進銷存系統開發者・LLM Text-to-SQL 研究 — 從餐旅跨域至軟體開發，專注企業 AI 應用落地',
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
      greeting: 'HI，你好，我是',
      name: 'Shane',
      title: '軟體工程師 ・ AI 研究者',
      tagline:
        '結合服務業溝通力與軟體工程實作力，從 POS 進銷存系統開發邁向 AI 智慧系統落地。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    about: {
      title: '關於我',
      avatarPlaceholder: '照片',
      paragraph1:
        '畢業於國立屏東科技大學餐旅管理系，個性樂觀積極、待人親切。曾赴加拿大打工度假，在班夫國家公園度假村工作一年，培養出獨立解決未知問題的能力，英文也能與外國人自然溝通。回國後歷經餐飲內場主管與業務專員，2023 年透過政府「產業新尖兵計畫」完成 C# 程式開發實務養成訓練，正式踏入軟體開發領域。',
      paragraph2:
        '目前任職於財團法人農漁會南區資訊中心擔任助理工程師，主導 POS 進銷存核心模組開發與報表優化；同時於國立高雄師範大學軟體工程與管理學系碩士在職進修，研究主題為「以大型語言模型微調實現企業資料庫本地部署之 Text-to-SQL 系統」。未來期望結合 C#/.NET 工程實務與 AI 研究，將 LLM 落地於企業實務場景，朝 AI 開發 / 智慧系統開發領域前進。',
    },
    skills: {
      title: '專業技能',
      items: [
        {
          category: '後端開發',
          tags: ['C#', 'ASP.NET MVC', 'ASP.NET WebForms', 'Java', 'Spring Boot', 'Python'],
        },
        {
          category: '前端開發',
          tags: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap', 'Vue'],
        },
        {
          category: '資料庫',
          tags: ['SQL Server', 'MySQL', 'RDLC 報表'],
        },
        {
          category: 'AI / 機器學習',
          tags: ['Llama-3.1-8B', 'DoRA', 'QLoRA', 'NEFTune', 'Text-to-SQL'],
        },
        {
          category: '業務領域',
          tags: ['POS 進銷存', 'ERP', '會計帳務邏輯', '多倉庫管理', '日結 / 月結'],
        },
        {
          category: '開發工具',
          tags: ['Visual Studio 2022', 'VS Code', 'IntelliJ', 'GitHub', 'Postman', 'ChatGPT'],
        },
        {
          category: '語言能力',
          tags: ['中文（精通）', 'English（TOEIC 615）', '台語（中等）'],
        },
        {
          category: '證照',
          tags: ['丙級調酒技術士', '丙級餐旅服務技術士', 'TOEIC 615'],
        },
      ],
    },
    experience: {
      title: '工作經歷',
      items: [
        {
          date: '2023/7 ─ 仍在職',
          title: '助理工程師 ・ 全端工程師',
          subtitle: '財團法人農漁會南區資訊中心｜高雄市鳳山區',
          bullets: [
            '負責 POS 進銷存核心模組開發與維運，從需求訪談、系統設計到程式實作自行主導',
            '以 C# ASP.NET MVC（Visual Studio 2022）打造銷售、採購、庫存、會員與儲值金功能',
            '設計多倉庫庫存管理轉倉與日結、月結機制，自動產生會計與稅額報表',
            '整合 jQuery 介面與 RDLC，提供即時圖表及 Excel 下載',
            '負責與用戶部門上線前教育訓練，以及全時段的客服系統維護',
          ],
        },
        {
          date: '2022/7 ─ 2023/2',
          title: '業務專員',
          subtitle: '光泉牧場股份有限公司｜國內業務',
          bullets: [
            '賣場巡貨補貨、客情維護、開發新客戶、專案執行、業績目標達成',
            'ERP 系統訂單處理；以量制價專案與市場回饋整理回報',
            '客戶市調訪談中獲得稱讚，學會站在對方角度思考，建立長期合作關係',
          ],
        },
        {
          date: '2020/9 ─ 2022/7',
          title: '內場主管 ・ 中餐廚師',
          subtitle: '健人餐廚｜高雄市新興區',
          bullets: [
            '帶領 10 人團隊，培訓組員主管思維；管理 9~12 人團隊運作',
            '從零學習掌握食材成本控制、選購採買、標準菜譜制定',
            '高壓多任務環境下穩定產出，把複雜事項整理成可執行的流程',
          ],
        },
        {
          date: '2019/5 ─ 2020/3',
          title: 'Room Attendant',
          subtitle: 'Pomeroy Kananaskis Mountain Lodge｜加拿大',
          bullets: [
            '萬豪集團旗下班夫國家公園度假飯店房務員，負責客房清理與環境維護',
            '日常以英文溝通，獨立應對生活與工作上的突發狀況',
            '深入接觸不同文化與做事方式，培養跨文化適應力',
          ],
        },
        {
          date: '2018/5 ─ 2019/5',
          title: '銷售專員',
          subtitle: '橡木桶洋酒｜高雄市苓雅區',
          bullets: [
            '熟悉門市系統與酒類產品知識，每月接受公司內訓持續吸收新資訊',
            '針對不同類型客人推薦合適酒款，將特色商品介紹給客戶並轉化為購買',
          ],
        },
        {
          date: '2017/10 ─ 2018/4',
          title: '櫃檯員',
          subtitle: '秝芯旅店｜高雄市前金區',
          bullets: ['飯店櫃台接待、客戶服務'],
        },
      ],
    },
    education: {
      title: '學歷與培訓',
      items: [
        {
          date: '2024/9 ─ 2026/6（在學中）',
          title: '軟體工程與管理學系 ・ 資訊科技碩士',
          subtitle: '國立高雄師範大學（夜間在職進修）',
          bullets: [
            '論文主題：以大型語言模型微調實現企業資料庫本地部署 Text-to-SQL 系統之設計與實作',
            '強化系統底層觀念、研究方法與獨立思考能力',
          ],
        },
        {
          date: '2023/3 ─ 2023/7',
          title: 'Java 全端整合 Web 實務應用 / C# 程式開發實務養成班',
          subtitle: '台南應用科技大學 ・ 政府產業新尖兵計畫',
          bullets: [
            '後端：Java 語法 + MySQL、Spring Boot、Postman API 測試、IntelliJ',
            '前端：HTML / CSS / JavaScript、Vue 串接後端 API',
            '使用 GitHub 協同開發、排除衝突',
          ],
        },
        {
          date: '2012/9 ─ 2016/6',
          title: '餐旅管理系 ・ 學士',
          subtitle: '國立屏東科技大學',
          bullets: ['於餐旅產業培養跨領域業務理解力與服務思維'],
        },
        {
          date: '2009/9 ─ 2012/6',
          title: '觀光事業科 ・ 高職',
          subtitle: '三民家商',
          bullets: ['取得丙級調酒技術士、丙級餐旅服務技術士'],
        },
      ],
    },
    projects: {
      title: '專案作品',
      items: [
        {
          name: '企業級本地部署 Text-to-SQL 系統',
          cover: 'Text-to-SQL',
          desc: '以 Llama-3.1-8B 微調實現企業資料庫本地部署之 Text-to-SQL 系統，論文研究主題。於消費級單卡（RTX 5070 Ti, 16GB VRAM）環境完成微調，於 SAMPLE_ERP 測試集取得 92.79% 之執行準確率（EX），驗證資源受限情境下的商用可行性。',
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '提示遞減訓練'],
          demo: '#',
          repo: '#',
        },
        {
          name: 'POS 進銷存系統核心模組',
          cover: 'POS / ERP',
          desc: '農漁會體系 POS 進銷存系統核心模組開發與報表優化。涵蓋銷售、採購、庫存、會員、儲值金與多倉庫管理；設計日結 / 月結機制並自動產生會計與稅額報表。深入分析客戶會計帳邏輯，解決系統成本與實務帳務不符的痛點。',
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
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
        { label: 'Email', value: 'a0920360129@gmail.com', href: 'mailto:a0920360129@gmail.com' },
        { label: '電話', value: '0920-360-129', href: 'tel:+886920360129' },
        { label: 'GitHub', value: 'shane360129', href: 'https://github.com/shane360129' },
        { label: '地點', value: '高雄市', href: '#' },
      ],
    },
    footer: {
      copyright: '© 2026 Shane 黃士銘. All rights reserved.',
    },
  },

  en: {
    meta: {
      title: 'Shane Huang | Software Engineer',
      description:
        'POS Inventory Developer · LLM Text-to-SQL Researcher — Hospitality-to-tech crossover, focused on enterprise AI applications',
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
        'Combining service-industry communication skills with software engineering — from POS inventory systems to AI-powered enterprise solutions.',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    about: {
      title: 'About Me',
      avatarPlaceholder: 'Photo',
      paragraph1:
        "Graduated with a B.A. in Hospitality Management from National Pingtung University of Science and Technology. After a year-long working holiday in Canada at a Banff National Park resort, I built independent problem-solving skills and developed conversational English. Back in Taiwan, I worked as a restaurant kitchen supervisor and sales specialist before pivoting to software in 2023 through the government-sponsored Industry Vanguard C# program.",
      paragraph2:
        "I currently work as an Assistant Engineer at the Farmers' & Fishermen's Association Southern Information Center, leading development of POS inventory core modules and report optimization. I'm also pursuing a Master's degree in Software Engineering and Management at National Kaohsiung Normal University, researching local-deployment Text-to-SQL systems via LLM fine-tuning. My goal is to combine C#/.NET engineering practice with AI research to bring LLM into real-world enterprise workflows.",
    },
    skills: {
      title: 'Skills',
      items: [
        {
          category: 'Backend',
          tags: ['C#', 'ASP.NET MVC', 'ASP.NET WebForms', 'Java', 'Spring Boot', 'Python'],
        },
        {
          category: 'Frontend',
          tags: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap', 'Vue'],
        },
        {
          category: 'Database',
          tags: ['SQL Server', 'MySQL', 'RDLC Reports'],
        },
        {
          category: 'AI / Machine Learning',
          tags: ['Llama-3.1-8B', 'DoRA', 'QLoRA', 'NEFTune', 'Text-to-SQL'],
        },
        {
          category: 'Business Domain',
          tags: ['POS / Inventory', 'ERP', 'Accounting Logic', 'Multi-warehouse', 'Daily / Monthly Closing'],
        },
        {
          category: 'Developer Tools',
          tags: ['Visual Studio 2022', 'VS Code', 'IntelliJ', 'GitHub', 'Postman', 'ChatGPT'],
        },
        {
          category: 'Languages',
          tags: ['Chinese (Native)', 'English (TOEIC 615)', 'Taiwanese (Intermediate)'],
        },
        {
          category: 'Certifications',
          tags: ['Bartender (Class C)', 'F&B Service (Class C)', 'TOEIC 615'],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          date: '2023/7 ─ Present',
          title: 'Assistant Engineer ・ Full-stack',
          subtitle: "Farmers' & Fishermen's Association Southern Information Center｜Fengshan, Kaohsiung",
          bullets: [
            'Own the POS inventory core modules end-to-end — from requirements interviews and system design to implementation',
            'Built sales, purchasing, inventory, member, and stored-value features using C# ASP.NET MVC (Visual Studio 2022)',
            'Designed multi-warehouse transfer and daily / monthly closing mechanisms with automated accounting and tax reports',
            'Integrated jQuery UI with RDLC reports for real-time charts and Excel export',
            'Delivered pre-launch user training and provide full-time customer support maintenance',
          ],
        },
        {
          date: '2022/7 ─ 2023/2',
          title: 'Sales Specialist',
          subtitle: 'Kuang Chuan Dairy Products Co., Ltd.｜Domestic Sales',
          bullets: [
            'Store visits, restocking, customer relations, new client development, project execution, quota achievement',
            'Processed orders via ERP; ran volume-based pricing projects and consolidated market feedback for strategy',
            'Recognized by clients in market surveys for empathetic, long-term-oriented service',
          ],
        },
        {
          date: '2020/9 ─ 2022/7',
          title: 'Kitchen Supervisor ・ Chef',
          subtitle: 'Jianren Kitchen｜Xinxing, Kaohsiung',
          bullets: [
            'Led a 10-person kitchen team and trained members in supervisory thinking',
            'Mastered ingredient cost control, sourcing, and standardized recipe development from scratch',
            'Delivered consistently under high-pressure, multi-task conditions; turned chaos into executable processes',
          ],
        },
        {
          date: '2019/5 ─ 2020/3',
          title: 'Room Attendant',
          subtitle: 'Pomeroy Kananaskis Mountain Lodge｜Canada',
          bullets: [
            'Housekeeping at a Marriott resort in Banff National Park',
            'Used English daily; handled life and work challenges independently',
            'Gained cross-cultural adaptability through extended exposure to different cultures and work styles',
          ],
        },
        {
          date: '2018/5 ─ 2019/5',
          title: 'Sales Associate',
          subtitle: 'Oak Barrel Liquor｜Lingya, Kaohsiung',
          bullets: [
            'Mastered store systems and wine product knowledge through monthly company training',
            "Recommended wines tailored to different customer profiles; converted niche products into client favorites",
          ],
        },
        {
          date: '2017/10 ─ 2018/4',
          title: 'Receptionist',
          subtitle: 'Lixin Hotel｜Qianjin, Kaohsiung',
          bullets: ['Hotel front-desk reception and customer service'],
        },
      ],
    },
    education: {
      title: 'Education & Training',
      items: [
        {
          date: '2024/9 ─ 2026/6 (In Progress)',
          title: "Master's, Software Engineering & Management",
          subtitle: 'National Kaohsiung Normal University (Evening, Part-time)',
          bullets: [
            'Thesis: Design and implementation of a local-deployment enterprise Text-to-SQL system via LLM fine-tuning',
            'Strengthening systems fundamentals, research methods, and independent thinking',
          ],
        },
        {
          date: '2023/3 ─ 2023/7',
          title: 'Java Full-stack Web / C# Industry Vanguard Program',
          subtitle: 'Tainan University of Technology ・ Government-sponsored',
          bullets: [
            'Backend: Java + MySQL, Spring Boot, Postman for API testing, IntelliJ',
            'Frontend: HTML / CSS / JavaScript, Vue integrated with backend APIs',
            'Used GitHub for collaboration and conflict resolution',
          ],
        },
        {
          date: '2012/9 ─ 2016/6',
          title: "Bachelor's, Hospitality Management",
          subtitle: 'National Pingtung University of Science and Technology',
          bullets: ['Built cross-domain business intuition and service mindset in the hospitality industry'],
        },
        {
          date: '2009/9 ─ 2012/6',
          title: 'Tourism Department ・ Vocational High School',
          subtitle: 'San Min Vocational High School',
          bullets: ['Earned Bartender (Class C) and F&B Service (Class C) certifications'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Enterprise Local-Deployment Text-to-SQL System',
          cover: 'Text-to-SQL',
          desc: "Master's research: fine-tuned Llama-3.1-8B for enterprise database local-deployment Text-to-SQL. Achieved 92.79% execution accuracy (EX) on the SAMPLE_ERP test set using a consumer-grade RTX 5070 Ti (16GB VRAM), validating commercial viability under resource-constrained conditions.",
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', 'Decreasing-Prompt Training'],
          demo: '#',
          repo: '#',
        },
        {
          name: 'POS Inventory System Core Modules',
          cover: 'POS / ERP',
          desc: "Core modules and report optimization for the Farmers' & Fishermen's Association POS inventory system. Covers sales, purchasing, inventory, members, stored-value, and multi-warehouse management; designed daily / monthly closing mechanisms with automated accounting and tax reports. Resolved mismatches between system costs and clients' bookkeeping practices.",
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
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
        { label: 'Email', value: 'a0920360129@gmail.com', href: 'mailto:a0920360129@gmail.com' },
        { label: 'Phone', value: '0920-360-129', href: 'tel:+886920360129' },
        { label: 'GitHub', value: 'shane360129', href: 'https://github.com/shane360129' },
        { label: 'Location', value: 'Kaohsiung, Taiwan', href: '#' },
      ],
    },
    footer: {
      copyright: '© 2026 Shane Huang. All rights reserved.',
    },
  },
};
