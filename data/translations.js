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
      about: '自傳',
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
      tagline:
        '白天寫 C# POS 進銷存系統，晚上做 LLM 微調研究。2023 年從餐旅業轉軟體開發。',
      cta1: '聯絡我',
      cta2: '看作品',
    },
    about: {
      title: '自傳',
      avatarPlaceholder: '照片',
      tagline:
        '從跨領域歷練到軟體工程，致力於將商業需求轉譯為精準的技術解決方案',
      sections: [
        {
          heading: '個人簡介與核心優勢',
          paragraphs: [
            '我是一名具備跨領域背景的軟體工程師，擁有後端開發（C#, ASP.NET, MSSQL）與前端技術（HTML, CSS, jQuery）的實務經驗。從傳統服務業、快速消費品業務到投入軟體開發，多元的職涯歷練培養了我敏銳的「商業需求洞察力」與「跨部門溝通技巧」。',
            '此外，我曾於加拿大工作與生活一年，具備流暢的英文溝通能力，能無礙地進行跨文化交流與技術文件的查閱，並具備高度的獨立解決問題能力，能勝任全英文的協作環境。',
          ],
        },
        {
          heading: '軟體開發實務：專注於解決商業痛點',
          subheading: '現職：軟體工程師 ─ POS 系統與報表優化',
          paragraphs: [
            '目前我專職負責 POS 系統的後台客製化開發與財務報表優化。由於 POS 系統與企業的會計帳務息息相關，在面對客戶提出「成本計算」或「帳務核對」等需求時，我不單只是修改程式碼或報表顯示，而是主動深掘客戶背後的會計作帳邏輯。',
          ],
          highlights: [
            {
              title: '精準的需求釐清',
              desc:
                '在動工前，我會先與客戶確認資料來源、計算公式與防呆例外情境，將模糊的商業需求轉譯為清晰的系統規格，大幅降低後續來回修改的維護成本。',
            },
            {
              title: '效能與體驗優化',
              desc:
                '針對系統報表進行查詢效能調優，縮短使用者等待時間；同時，我也能用客戶聽得懂的方式，說明技術限制與替代方案，讓專案順利推進。對我而言，系統不只要「動得起來」，更要確保「數據精準、操作流暢」。',
            },
          ],
        },
        {
          heading: '跨領域經歷：淬鍊出高韌性的專案與團隊管理能力',
          paragraphs: [
            '在轉職軟體工程師之前，我曾歷練過多種高壓且需要頻繁溝通的職務，這些經驗成為我現在釐清系統需求與團隊協作的重要養分：',
          ],
          highlights: [
            {
              title: '業務開發與市場敏銳度',
              subtitle: '光泉引貨業務',
              desc:
                '負責賣場專案執行與業績目標達成。我在這段期間練就了談判籌碼的拿捏（如以量制價）、競品數據的敏銳度，以及站在客戶立場思考的服務精神，這讓我在後續的軟體專案中，更懂得從「使用者價值」出發。',
            },
            {
              title: '團隊管理與流程優化',
              subtitle: '連鎖餐飲內場主管',
              desc:
                '從零開始學習並一路晉升至主管，負責 5-8 人團隊的營運調度。我擅長將複雜的工作站任務拆解成標準化流程（SOP），並透過引導與協助的方式帶領團隊。這段經驗讓我深刻體會到系統化與結構化思維的重要性。',
            },
            {
              title: '跨文化適應與獨立性',
              subtitle: '加拿大度假村房務員',
              desc:
                '全英文的工作環境不僅大幅提升了我的外語溝通自信，也讓我學會在異地面對突發狀況時，如何冷靜尋找資源、獨立排除困難。',
            },
          ],
        },
        {
          heading: '進修規劃與未來展望',
          paragraphs: [
            '為建立更扎實的系統底層邏輯，我目前正就讀國立高雄師範大學「軟體工程與管理學系」碩士班。除了深化軟體工程的理論框架，我也正投入「自然語言查詢資料庫系統（NLP to SQL）」的學術研究。',
            '未來，我期望能結合過往累積的商業邏輯溝通力、現有的全端開發技術，以及研究所的 AI 技術理論，往 AI 應用開發或智慧系統工程師的方向邁進。我期許自己不僅是功能的實作者，更能成為將 AI 技術落地於實際商業場景、替企業創造具體價值的技術人才。',
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
          name: 'Travel Log ─ 文青風格旅遊規劃 App',
          cover: 'Trip Planner',
          desc:
            '像旅遊手冊一樣的翻頁式 Web App，內建牛皮紙、復古、和紙、日誌等多種風格主題，使用 Firestore 即時同步並支援 PWA 離線存取。',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
        },
        {
          name: 'POS 進銷存系統核心模組',
          cover: 'POS / ERP',
          desc: '農漁會體系內部 POS 進銷存系統。原始碼不對外公開。',
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
        },
      ],
      labels: { demo: '專案說明', repo: '原始碼' },
    },
    contact: {
      title: '聯絡我',
      intro: '想聊技術、聊機會或單純打個招呼都歡迎',
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
        "C# POS developer; Master's research on LLM fine-tuning for Text-to-SQL. Switched into software from the hospitality industry in 2023.",
    },
    nav: {
      logo: 'Shane',
      about: 'Bio',
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
      tagline:
        'C# POS developer by day, LLM fine-tuning researcher by night. Switched into software from restaurant kitchens in 2023.',
      cta1: 'Contact Me',
      cta2: 'View Projects',
    },
    about: {
      title: 'Biography',
      avatarPlaceholder: 'Photo',
      tagline:
        'A cross-disciplinary engineer turning business needs into precise technical solutions.',
      sections: [
        {
          heading: 'Profile & Core Strengths',
          paragraphs: [
            "I'm a software engineer with a cross-disciplinary background, bringing hands-on experience in both backend development (C#, ASP.NET, MSSQL) and frontend technologies (HTML, CSS, jQuery). Having moved through traditional service work and FMCG sales before settling into software, my diverse career path has sharpened both my instinct for business needs and my cross-team communication skills.",
            "I also spent a year living and working in Canada, which left me comfortable communicating in English — for cross-cultural collaboration, technical documentation, or operating in a fully English-speaking team. I'm independent in how I solve problems and used to figuring things out on my own when needed.",
          ],
        },
        {
          heading: 'Software Development: Focused on Real Business Pain Points',
          subheading: 'Current Role: Software Engineer — POS System & Report Optimization',
          paragraphs: [
            "I currently focus on backend customization for a POS system and optimization of its financial reports. Since POS systems sit very close to a company's accounting books, when a client raises a request around \"cost calculation\" or \"reconciliation\", I don't just adjust the code or the report layout — I dig into the accounting logic behind it.",
          ],
          highlights: [
            {
              title: 'Precise Requirements Clarification',
              desc:
                'Before writing code, I confirm with the client where the data comes from, what the formula should be, and which edge cases need to be guarded against. Translating vague business needs into a clear spec up front saves a lot of revision cycles later.',
            },
            {
              title: 'Performance & UX Optimization',
              desc:
                "I tune report queries so users aren't left waiting, and I explain technical constraints or trade-offs in language clients can actually act on. For me, a system shouldn't just \"work\" — the numbers need to be right and the workflow needs to feel smooth.",
            },
          ],
        },
        {
          heading: 'Prior Experience: Project & Team Skills Built Under Pressure',
          paragraphs: [
            'Before moving into software, I worked a series of demanding, communication-heavy roles. Those years now feed directly into how I gather requirements and collaborate with a team:',
          ],
          highlights: [
            {
              title: 'Sales & Market Awareness',
              subtitle: 'Kuang Chuan Dairy — Sales Specialist',
              desc:
                'I ran retail-channel accounts and owned my own sales quota. The role taught me how to negotiate (volume-based pricing, for instance), how to read competitor data, and how to think from the customer\'s side first — which now translates into building software around user value rather than features.',
            },
            {
              title: 'Team Management & Process Design',
              subtitle: 'Chain Restaurant Kitchen Supervisor',
              desc:
                'I worked up from line cook to supervisor of a 5–8 person team. I got used to breaking complex station work into standardized procedures (SOPs) and leading the team through coaching rather than direct command. That experience is where my preference for systematic, structured thinking really came from.',
            },
            {
              title: 'Cross-Cultural Adaptation & Independence',
              subtitle: 'Resort Room Attendant, Canada',
              desc:
                "A year in a fully English-speaking work environment did more for my confidence than any classroom could — and taught me to stay calm, find resources, and solve problems on my own when I couldn't fall back on familiar support.",
            },
          ],
        },
        {
          heading: 'Continuing Education & What I Want to Build Next',
          paragraphs: [
            "To shore up the systems and CS fundamentals I'd skipped, I'm currently doing a part-time Master's in Software Engineering and Management at National Kaohsiung Normal University. Alongside the coursework, my research focus is on Natural Language Query Database Systems (NLP-to-SQL).",
            "Looking ahead, I want to combine the business-communication skills I built earlier, my current full-stack engineering work, and the AI research from graduate school — and move toward AI application development or intelligent-systems engineering. The goal isn't just to ship features, but to be the person who actually lands AI in real business workflows and creates measurable value from it.",
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
          name: 'Travel Log — Literary-Style Trip Planner',
          cover: 'Trip Planner',
          desc:
            "A book-style trip planning web app with page-turning UX and multiple paper themes (Kraft, Vintage, Washi, Journal). Backed by Firestore for real-time sync; ships as an installable PWA.",
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
        },
        {
          name: 'POS Inventory System Core Modules',
          cover: 'POS / ERP',
          desc: "An in-house POS inventory system at the Farmers' & Fishermen's Association. Source is not publicly available.",
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
        },
      ],
      labels: { demo: 'Details', repo: 'Source' },
    },
    contact: {
      title: 'Contact',
      intro: "Happy to chat about tech, opportunities, or just to say hi",
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
