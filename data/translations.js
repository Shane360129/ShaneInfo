/**
 * 翻譯字典 / Translation Dictionary
 * 內容來源：Shane（黃士銘）的完整履歷
 */

const translations = {
  'zh-TW': {
    meta: {
      title: 'Shane 黃士銘 | LLM 微調 ・ 全端工程師',
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
      fullName: 'Shane 黃士銘',
      title: 'LLM 微調研究 ・ 全端工程師',
      status: '開放接洽新機會',
      tagline:
        '白天寫 C# POS 進銷存系統，晚上做 LLM 微調研究。2023 年從餐旅業轉軟體開發。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    about: {
      title: '關於我',
      avatarPlaceholder: '照片',
      tagline:
        '從餐旅業跨進軟體開發的工程師，喜歡把複雜的需求做成真正好用的功能。',
      sections: [
        {
          paragraphs: [
            '你好，我是 Shane，一名軟體工程師。我喜歡把又雜又難的需求拆開、整理清楚，再做成真正能用的功能。對我來說寫程式只是手段，更重要的是這東西有沒有真的解決使用者的問題，所以動手前我習慣先弄懂背後的商業邏輯。',
            '我是繞了一段路才進到這行的。入行前待過餐旅業，也出過國、在不同文化的環境裡生活過，還在步調很快的現場帶過團隊。這些經歷沒有直接教我寫程式，卻讓我比較沉得住氣，也習慣把事情和人都先溝通清楚。這些反而在開發時很吃香——很多需求一開始都是模糊、講不清楚的，得先把人和狀況摸清楚，才知道系統到底該長成什麼樣子。',
          ],
        },
        {
          heading: '全端開發與系統維護',
          paragraphs: [
            '目前我在南區農漁會資訊中心擔任助理工程師，主要用 Visual Studio 2022、C#、ASP.NET 和 jQuery，開發並維護一套大型的內部系統。除了讓系統穩定運作，我也常臨時接住客戶丟過來的需求——加一個功能、趕一張報表，或是把跑得慢的查詢調快一點。',
          ],
        },
        {
          heading: 'AI 技術探究：大型語言模型與企業資料庫的結合',
          paragraphs: [
            '同時我也在國立高雄師範大學軟體工程與管理研究所念碩士。論文題目是「以大型語言模型微調實現企業資料庫本地部署 Text-to-SQL 系統之設計與實作」——白話說，就是讓人用中文問問題、系統自動轉成 SQL 去查資料庫。比較特別的是，我把模型做成可以在公司自己的機器上跑，資料不用送到雲端；對於在意資料外流、又想用 AI 查自家資料的中小企業來說，這算是一個還不錯的折衷。',
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
          category: 'AI / LLM 微調',
          tags: ['PyTorch', 'Hugging Face Transformers', 'PEFT', 'bitsandbytes', 'datasets', 'LoRA / QLoRA / DoRA', 'NEFTune', '4-bit NF4 量化', 'Llama-3.1-8B', 'Text-to-SQL'],
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
          name: '企業地端 Text-to-SQL 系統',
          cover: 'Text-to-SQL',
          stat: { value: 92.79, suffix: '%', label: 'Text-to-SQL 執行準確率（EX）' },
          desc:
            '碩士論文研究。以 PyTorch + Hugging Face PEFT 對 Llama-3.1-8B 做 DoRA 微調（4-bit NF4 量化、NEFTune），搭配自建的 ERP Schema 訓練資料集與三階段提示遞減策略，將自然語言問句轉成 T-SQL 查詢，並在單張 16 GB 消費級 GPU 上完成訓練，驗證中小企業在資料不外送雲端的前提下、於地端微調 LLM 的可行性。',
          tags: ['PyTorch', 'Hugging Face PEFT', 'Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '三階段提示遞減訓練', 'Gradio'],
          repo: 'https://github.com/Shane360129/DBTraining',
          demo: 'https://github.com/Shane360129/TextToSQLDora',
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
      title: 'Shane Huang | LLM Fine-tuning ・ Full-stack Engineer',
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
      fullName: 'Shane Huang',
      title: 'LLM Fine-tuning Research ・ Full-stack Engineer',
      status: 'Open to new opportunities',
      tagline:
        'C# POS developer by day, LLM fine-tuning researcher by night. Switched into software from restaurant kitchens in 2023.',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    about: {
      title: 'About Me',
      avatarPlaceholder: 'Photo',
      tagline:
        'A software engineer who came into tech from the hospitality industry, with a habit of turning messy, complicated requirements into features people actually use.',
      sections: [
        {
          paragraphs: [
            "Hi, I'm Shane, a software engineer. I like taking requirements that are tangled and complicated, untangling them, and turning them into features that genuinely work. To me, writing code is just the means — what matters more is whether the thing actually solves the user's problem, so before I start I make sure I understand the business logic underneath.",
            "I took a roundabout path into this line of work. Before tech I spent time in the hospitality industry, lived abroad in a different culture for a while, and led teams in fast-moving, hands-on operations. None of that taught me to code directly, but it did teach me to keep a level head and to get people and details lined up early — which, it turns out, helps a lot when building software. Most requirements start out vague and hard to pin down; you have to understand the people and the situation first before you can tell what the system should even be.",
          ],
        },
        {
          heading: 'Full-stack Development & System Maintenance',
          paragraphs: [
            "I currently work as an assistant engineer at the Southern Regional Information Center of the Farmers' & Fishermen's Association, mostly using Visual Studio 2022, C#, ASP.NET, and jQuery to build and maintain a large in-house system. Beyond keeping it running, I often pick up ad-hoc requests from clients on short notice — adding a feature, rushing out a report, or speeding up a query that had gotten slow.",
          ],
        },
        {
          heading: 'AI Research: LLMs Meet Enterprise Databases',
          paragraphs: [
            "At the same time, I'm doing a Master's at the Graduate Institute of Software Engineering and Management, National Kaohsiung Normal University. My thesis is \"Design and Implementation of an On-Premise Text-to-SQL System via LLM Fine-Tuning for Enterprise Databases\" — in plain terms, it lets someone ask a question in everyday language and turns it into SQL to query the database. What I find most interesting is that the model is built to run on a company's own hardware, so the data never has to leave for the cloud — a sensible middle ground for small and mid-sized businesses that want to use AI on their data but worry about it getting out.",
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
          category: 'AI / LLM Fine-tuning',
          tags: ['PyTorch', 'Hugging Face Transformers', 'PEFT', 'bitsandbytes', 'datasets', 'LoRA / QLoRA / DoRA', 'NEFTune', '4-bit NF4 Quantization', 'Llama-3.1-8B', 'Text-to-SQL'],
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
          name: 'Enterprise On-Premise Text-to-SQL System',
          cover: 'Text-to-SQL',
          stat: { value: 92.79, suffix: '%', label: 'Text-to-SQL Execution Accuracy (EX)' },
          desc:
            "Master's thesis research. Fine-tunes Llama-3.1-8B with DoRA (4-bit NF4 quantization, NEFTune) using PyTorch and Hugging Face PEFT, trained on a self-built ERP-schema dataset with a three-stage prompt-decreasing strategy, to translate natural-language questions into T-SQL, on a single 16GB consumer GPU — showing an SME can fine-tune an LLM on-premise without sending its data to the cloud.",
          tags: ['PyTorch', 'Hugging Face PEFT', 'Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '3-Stage Prompt-Decreasing', 'Gradio'],
          repo: 'https://github.com/Shane360129/DBTraining',
          demo: 'https://github.com/Shane360129/TextToSQLDora',
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
