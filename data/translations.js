/**
 * 翻譯字典 / Translation Dictionary
 * 內容來源：Shane（黃士銘）的完整履歷
 */

const translations = {
  'zh-TW': {
    meta: {
      title: 'Shane 黃士銘 | 軟體工程師',
      description:
        'C# POS 進銷存工程師，碩論題目是 LLM 微調做 Text-to-SQL。2023 年從餐旅業轉軟體開發。',
    },
    nav: {
      logo: 'Shane',
      about: '關於我',
      resume: '履歷',
      skills: '技能',
      experience: '經歷',
      education: '學歷',
      projects: '作品',
      contact: '聯絡',
    },
    hero: {
      greeting: 'HI，你好，我是',
      name: 'Shane',
      title: '軟體工程師 ・ LLM Research',
      status: '開放接洽新機會',
      tagline:
        '白天寫 C# POS 進銷存系統，晚上做 LLM 微調研究。2023 年從餐旅業轉軟體開發。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    actions: {
      downloadPdf: '下載 PDF',
      printHint: '使用瀏覽器列印對話框，目標選擇「另存為 PDF」',
    },
    about: {
      title: '關於我',
      avatarPlaceholder: '照片',
      tagline:
        '從商業邏輯與使用者需求出發、具備高彈性跨域解題能力的軟體工程師',
      sections: [
        {
          paragraphs: [
            '你好，我是 Shane，一名喜歡製作將複雜需求轉化為實際應用的功能，從商業邏輯與使用者需求出發的軟體工程師，具備高彈性的跨領域問題解決能力。',
            '我的職涯歷經多次跨領域挑戰。從遠赴國外探索不同文化，到在快節奏的環境中擔任團隊主管，這些經歷賦予我一定的環境適應力與敏銳的溝通技巧。在開發系統時，我習慣跳脫純技術視角，主動探究背後的商業邏輯以及使用者需求，確保交付的產品既符合實務需求，也能確實解決使用者的痛點。',
          ],
        },
        {
          heading: '全端開發與系統維護',
          paragraphs: [
            '目前我於南區農漁會資訊中心擔任助理工程師，主力運用 Visual Studio 2022、C#、ASP.NET 與 jQuery 等技術進行系統開發與維運。在確保既有大型資訊系統穩定運作的同時，也持續優化使用者體驗與資料查詢效能，時常必須因應客戶臨時需求而增加新功能或者報表等。',
          ],
        },
        {
          heading: 'AI 技術探究：大型語言模型與企業資料庫的結合',
          paragraphs: [
            '在工作之餘，我目前正於國立高雄師範大學軟體工程與管理研究所進修。我的研究核心專注於自然語言處理技術的落地應用，論文主題為「以大型語言模型微調實現企業資料庫本地部署 Text-to-SQL 系統之設計與實作」。期望透過微調邊緣大型語言模型（Edge LLM），在確保企業資料隱私的前提下，提供高效、直覺的自然語言資料庫查詢方案，將 AI 創新技術真正帶入產業應用。',
          ],
        },
      ],
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
            '從跟使用者訪談需求、畫流程、寫 SQL 到 C# 實作，整支系統一個人扛',
            '銷售、採購、庫存、會員儲值金都用 ASP.NET MVC + jQuery 寫',
            '多倉庫轉倉、日結月結這塊最棘手 — 帳要對得上會計師認可的數字，跟客戶來回最多次',
            '報表用 RDLC，畫面 jQuery 串資料、匯出 Excel 跟即時圖表',
            '系統上線後的教育訓練、客服跟維運都自己處理',
          ],
        },
        {
          date: '2022/7 ─ 2023/2',
          title: '業務專員',
          subtitle: '光泉牧場股份有限公司｜國內業務',
          bullets: [
            '跑賣場巡貨、補貨、開發新客戶，每月業績目標自己達成',
            '用 ERP 處理訂單、跑量販專案，把市場回饋整理後回報業務主管',
            '賣場專案靠以量制價當談判籌碼、盯競品數據抓市場節奏',
            '公司年度市調中被客戶點名稱讚，這份工作慢慢教我什麼叫站在對方角度想事情',
          ],
        },
        {
          date: '2020/9 ─ 2022/7',
          title: '內場主管 ・ 中餐廚師',
          subtitle: '健人餐廚｜高雄市新興區',
          bullets: [
            '從廚房新手做到內場主管，最多帶過 10 人左右',
            '食材成本、採購、標準菜單都得自己摸索，沒前人留下範本',
            '工作站任務自己拆成 SOP，帶人偏引導不是直接下指令',
            '出餐高峰要同時顧速度、品質跟人力調度 — 這份工作教我怎麼把一團亂拆成可以一步步做的事',
          ],
        },
        {
          date: '2019/5 ─ 2020/3',
          title: 'Room Attendant',
          subtitle: 'Pomeroy Kananaskis Mountain Lodge｜加拿大',
          bullets: [
            '加拿大班夫國家公園萬豪旗下度假飯店，當房務員清房間',
            '一整年生活工作都靠英文，從點餐都怕到後來能跟同事聊天',
            '異地一個人，遇到狀況沒人能靠 — 學會先冷靜、找資源、自己排除',
            '同事來自十幾個國家，這年最大的收穫是真的學到怎麼跟做事方式跟自己很不同的人共事',
          ],
        },
        {
          date: '2018/5 ─ 2019/5',
          title: '銷售專員',
          subtitle: '橡木桶洋酒｜高雄市苓雅區',
          bullets: [
            '賣紅白酒、烈酒，公司每月安排品酒跟產品知識內訓',
            '從一開始怕推薦，到後來能依照客人預算跟用途介紹合適的酒，連比較冷門的也賣得動',
          ],
        },
        {
          date: '2017/10 ─ 2018/4',
          title: '櫃檯員',
          subtitle: '秝芯旅店｜高雄市前金區',
          bullets: ['旅店櫃台 check-in / check-out、客戶服務（第一份正式工作）'],
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
            '論文題目：用 LLM 微調做企業資料庫本地部署的 Text-to-SQL（撰寫中）',
            '修課跟做研究的過程中，把以前沒紮實的系統觀念跟底層基礎補回來',
          ],
        },
        {
          date: '2023/3 ─ 2023/7',
          title: 'Java 全端整合 Web 實務應用 / C# 程式開發實務養成班',
          subtitle: '台南應用科技大學 ・ 政府產業新尖兵計畫',
          bullets: [
            '後端 Java + Spring Boot + MySQL，用 Postman 測 API',
            '前端 HTML / CSS / JS + Vue，串接自己寫的後端 API',
            '第一次接觸版控 — 小組作業中學會用 GitHub 開發、解 merge conflict',
          ],
        },
        {
          date: '2012/9 ─ 2016/6',
          title: '餐旅管理系 ・ 學士',
          subtitle: '國立屏東科技大學',
          bullets: ['主修旅館、餐飲服務跟管理；念書期間在飯店、餐廳實習過幾家'],
        },
        {
          date: '2009/9 ─ 2012/6',
          title: '觀光事業科 ・ 高職',
          subtitle: '三民家商',
          bullets: ['在校期間考到丙級調酒、丙級餐旅服務兩張技術士證照'],
        },
      ],
    },
    projects: {
      title: '專案作品',
      items: [
        {
          name: '企業級本地部署 Text-to-SQL 系統',
          cover: 'Text-to-SQL',
          desc:
            '碩士論文題目。使用 Llama-3.1-8B + DoRA + 4-bit NF4，將自然語言問句轉成 ERP 資料庫的 T-SQL 查詢，在 16 GB 消費級 GPU 上達到 92.79% 執行準確率（EX），實證中小企業本地端落地的可行性。',
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '三階段提示遞減訓練', 'Gradio'],
          repo: 'https://github.com/Shane360129/DBTraining',
        },
        {
          name: '文青風格旅遊規劃 App',
          cover: 'assets/images/travel-log.png',
          desc:
            '像旅遊手冊一樣的翻頁式 Web App，內建牛皮紙、復古、和紙、日誌等多種風格主題，使用 Firestore 即時同步並支援 PWA 離線存取。',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
          demo: 'https://shane360129.github.io/trip/',
        },
        {
          name: 'POS 進銷存系統核心模組',
          cover: 'assets/images/pos-demo.png',
          desc: '進銷存管理系統，完整實作商品主檔、供應商/客戶、倉庫、進銷作業、庫存管理、應收應付、會計分錄與報表分析等模組，並以 WAC（加權平均成本）計算庫存帳面價值、儀表板呈現銷售/毛利趨勢與低庫存警示。',
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
          repo: 'https://github.com/Shane360129/POS',
          demo: 'https://shane360129.github.io/POS/app.html',
        },
        {
          name: 'Java 全端結訓專案',
          cover: 'Spring Boot CRUD',
          desc: '台南應科大產業新尖兵計畫的結訓專案，採 MVC 三層架構：後端 Spring Boot + MySQL 提供 RESTful API，前端 Vue 串接 API 完成會員、商品、訂單等模組的 CRUD 流程。第一次以小組形式用 GitHub 協作開發。',
          tags: ['Java', 'Spring Boot', 'Spring MVC', 'Vue', 'MySQL', 'RESTful API'],
          demo: 'https://java-task-demo.onrender.com/',
        },
      ],
      labels: { demo: 'Demo', repo: 'Source' },
    },
    contact: {
      title: '聯絡我',
      intro: '想聊技術、聊機會或單純打個招呼都歡迎',
      links: [
        { label: 'Email', value: 'a0920360129@gmail.com', href: 'mailto:a0920360129@gmail.com' },
        { label: '電話', value: '0920-360-129', href: 'tel:+886920360129' },
        { label: 'LinkedIn', value: 'mr-shihming-huang', href: 'https://www.linkedin.com/in/mr-shihming-huang-62868415a/' },
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
        "C# POS developer; Master's research on LLM fine-tuning for Text-to-SQL. Switched into software from the hospitality industry in 2023.",
    },
    nav: {
      logo: 'Shane',
      about: 'About',
      resume: 'Resume',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Shane',
      title: 'Software Engineer ・ LLM Research',
      status: 'Open to new opportunities',
      tagline:
        'C# POS developer by day, LLM fine-tuning researcher by night. Switched into software from restaurant kitchens in 2023.',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    actions: {
      downloadPdf: 'Download PDF',
      printHint: 'Use the browser print dialog and select "Save as PDF" as the destination',
    },
    about: {
      title: 'About Me',
      avatarPlaceholder: 'Photo',
      tagline:
        'A software engineer grounded in business logic and user needs, with resilient cross-disciplinary problem-solving.',
      sections: [
        {
          paragraphs: [
            "Hi, I'm Shane — a software engineer who enjoys turning complex requirements into real, working features. I start from the business logic and user needs, and bring resilient, cross-disciplinary problem-solving to the work.",
            "My career has gone through several cross-disciplinary shifts. From going abroad to immerse in a different culture, to leading teams in fast-paced operations, those experiences gave me solid adaptability and sharp communication instincts. When I build systems, I try not to think only as an engineer — I dig into the business logic and user needs behind each request, so what I ship actually fits how people work and addresses the real pain they came with.",
          ],
        },
        {
          heading: 'Full-stack Development & System Maintenance',
          paragraphs: [
            "I currently work as an assistant engineer at the Southern Regional Information Center of the Farmers' & Fishermen's Association. My day-to-day stack is Visual Studio 2022, C#, ASP.NET, and jQuery — building features and keeping a large in-house system running reliably. Alongside steady operations, I continue improving UX and query performance, and frequently ship new features or reports in response to ad-hoc client requests.",
          ],
        },
        {
          heading: 'AI Research: LLMs Meet Enterprise Databases',
          paragraphs: [
            "Alongside my day job, I'm pursuing a Master's at the Graduate Institute of Software Engineering and Management, National Kaohsiung Normal University. My research focuses on bringing NLP into real production — my thesis, \"Design and Implementation of an On-Premise Text-to-SQL System via LLM Fine-Tuning for Enterprise Databases\", explores how a fine-tuned edge LLM can give companies a fast, intuitive way to query their own data without ever shipping it to the cloud — keeping privacy intact while putting AI innovation directly into operational hands.",
          ],
        },
      ],
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
            "Run the POS inventory modules solo — sitting with users to gather requirements, sketching flows, writing the SQL and the C#",
            "Sales, purchasing, stock, members and stored-value are all in ASP.NET MVC with jQuery on the front",
            "Trickiest piece has been multi-warehouse transfers and the daily / monthly close — the numbers have to reconcile against what the client's accountant signs off on, so a lot of back-and-forth with them",
            "Reports built in RDLC; live charts and Excel export driven by jQuery",
            "Once a module ships I also run the user training and handle support / bug-fixes myself",
          ],
        },
        {
          date: '2022/7 ─ 2023/2',
          title: 'Sales Specialist',
          subtitle: 'Kuang Chuan Dairy Products Co., Ltd.｜Domestic Sales',
          bullets: [
            "Retail rounds: shelf checks, restocking, hunting new accounts, hitting my own monthly quota",
            "Took orders through the company ERP, helped with volume-pricing campaigns, and fed market feedback back to the sales lead",
            "Campaign work ran on volume-pricing as a negotiation lever and reading competitor data to gauge the market",
            "Got name-checked by clients in the company's annual survey — it took me a while in this role to learn that listening usually beats selling",
          ],
        },
        {
          date: '2020/9 ─ 2022/7',
          title: 'Kitchen Supervisor ・ Chef',
          subtitle: 'Jianren Kitchen｜Xinxing, Kaohsiung',
          bullets: [
            "Worked up from line cook to kitchen supervisor of a roughly 10-person team",
            "Figured out costing, sourcing and a standardised menu on my own — nobody on staff had done that before",
            "Broke station work into SOPs myself, and leaned on coaching rather than top-down orders when training new people",
            "Service hours meant juggling cook times, quality and people all at once; this is where I learned to take a mess and turn it into a checklist",
          ],
        },
        {
          date: '2019/5 ─ 2020/3',
          title: 'Room Attendant',
          subtitle: 'Pomeroy Kananaskis Mountain Lodge｜Canada',
          bullets: [
            "Cleaning rooms at a Marriott resort in Banff National Park for a year",
            "Lived and worked entirely in English — started barely able to order food, ended up chatting with co-workers",
            "On my own out there — when things went sideways there was no one to fall back on, so I got used to staying calm, finding resources, and working it out myself",
            "Co-workers came from a dozen countries; learning to work with people whose defaults were nothing like mine was probably the biggest takeaway from the year",
          ],
        },
        {
          date: '2018/5 ─ 2019/5',
          title: 'Sales Associate',
          subtitle: 'Oak Barrel Liquor｜Lingya, Kaohsiung',
          bullets: [
            "Sold wines and spirits at retail; the company ran monthly tasting and product training I had to keep up with",
            "Went from afraid-to-recommend to comfortable matching a bottle to a customer's budget and occasion — the less-known labels often moved better than the bestsellers",
          ],
        },
        {
          date: '2017/10 ─ 2018/4',
          title: 'Receptionist',
          subtitle: 'Lixin Hotel｜Qianjin, Kaohsiung',
          bullets: ['Front desk: check-in / check-out and guest service. (My first proper job.)'],
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
            "Thesis: fine-tuning an LLM for Text-to-SQL that can be self-hosted on enterprise hardware (in progress)",
            "Coursework and research have been a chance to fill in a lot of CS fundamentals I'd skipped over",
          ],
        },
        {
          date: '2023/3 ─ 2023/7',
          title: 'Java Full-stack Web / C# Industry Vanguard Program',
          subtitle: 'Tainan University of Technology ・ Government-sponsored',
          bullets: [
            "Backend in Java + Spring Boot + MySQL, testing APIs with Postman",
            "Frontend in HTML / CSS / JS and Vue, calling APIs I'd written myself",
            "First time using version control — group projects taught me to handle merge conflicts the hard way",
          ],
        },
        {
          date: '2012/9 ─ 2016/6',
          title: "Bachelor's, Hospitality Management",
          subtitle: 'National Pingtung University of Science and Technology',
          bullets: ['Studied hotel and F&B operations; interned at a few hotels and restaurants while in school'],
        },
        {
          date: '2009/9 ─ 2012/6',
          title: 'Tourism Department ・ Vocational High School',
          subtitle: 'San Min Vocational High School',
          bullets: ['Picked up Class C Bartender and Class C F&B Service certifications while in school'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Enterprise Local-Deployment Text-to-SQL System',
          cover: 'Text-to-SQL',
          desc:
            "Master's thesis. Fine-tunes Llama-3.1-8B with DoRA + 4-bit NF4 to translate natural-language questions into T-SQL against an ERP database, hitting 92.79% execution accuracy on a 16GB consumer GPU — small businesses can self-host without going to the cloud.",
          tags: ['Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '3-Stage Prompt-Decreasing', 'Gradio'],
          repo: 'https://github.com/Shane360129/DBTraining',
        },
        {
          name: 'Literary-Style Trip Planner',
          cover: 'assets/images/travel-log.png',
          desc:
            "A book-style trip planning web app with page-turning UX and multiple paper themes (Kraft, Vintage, Washi, Journal). Backed by Firestore for real-time sync; ships as an installable PWA.",
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
          demo: 'https://shane360129.github.io/trip/',
        },
        {
          name: 'POS Inventory System Core Modules',
          cover: 'assets/images/pos-demo.png',
          desc: "A full inventory management system covering products, suppliers/customers, warehouses, purchase/sales operations, stock control, A/R & A/P, journal entries, and reporting. Uses weighted average cost (WAC) for inventory valuation, with a dashboard for sales/margin trends and low-stock alerts.",
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
          repo: 'https://github.com/Shane360129/POS',
          demo: 'https://shane360129.github.io/POS/app.html',
        },
        {
          name: 'Java Full-stack Bootcamp Project',
          cover: 'Spring Boot CRUD',
          desc: "Capstone project from the Industry Vanguard bootcamp at Tainan University of Technology. MVC three-tier architecture: Spring Boot + MySQL on the backend serving RESTful APIs, Vue on the frontend consuming them, with full CRUD across user, product, and order modules. First time collaborating as a team on GitHub.",
          tags: ['Java', 'Spring Boot', 'Spring MVC', 'Vue', 'MySQL', 'RESTful API'],
          demo: 'https://java-task-demo.onrender.com/',
        },
      ],
      labels: { demo: 'Demo', repo: 'Source' },
    },
    contact: {
      title: 'Contact',
      intro: "Happy to chat about tech, opportunities, or just to say hi",
      links: [
        { label: 'Email', value: 'a0920360129@gmail.com', href: 'mailto:a0920360129@gmail.com' },
        { label: 'Phone', value: '0920-360-129', href: 'tel:+886920360129' },
        { label: 'LinkedIn', value: 'mr-shihming-huang', href: 'https://www.linkedin.com/in/mr-shihming-huang-62868415a/' },
        { label: 'GitHub', value: 'shane360129', href: 'https://github.com/shane360129' },
        { label: 'Location', value: 'Kaohsiung, Taiwan', href: '#' },
      ],
    },
    footer: {
      copyright: '© 2026 Shane Huang. All rights reserved.',
    },
  },
};
