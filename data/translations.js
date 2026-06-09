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
      thesis: '碩論',
      benchmark: 'Benchmark',
      contact: '聯絡',
    },
    a11y: {
      skip: '跳到主要內容',
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
          video: 'assets/video/text-to-sql.mp4',
          cover: '<div class="ttsql-cover"><span class="ttsql-badge">高師大 · 軟體工程與管理</span><h4 class="ttsql-title">消費級 GPU 上的封閉域<br>Text-to-SQL 微調</h4><p class="ttsql-sub">Llama-3.1-8B · DoRA · 三階段提示遞減</p><div class="ttsql-stats"><div class="ttsql-stat"><span class="ttsql-num">98.73<small>%</small></span><span class="ttsql-lbl">EX 準確率</span></div><div class="ttsql-stat"><span class="ttsql-num">16<small>GB</small></span><span class="ttsql-lbl">GPU 預算</span></div><div class="ttsql-stat"><span class="ttsql-num">11,773</span><span class="ttsql-lbl">訓練樣本</span></div><div class="ttsql-stat"><span class="ttsql-num">33.5<small>h</small></span><span class="ttsql-lbl">訓練時長</span></div></div></div>',
          stat: { value: 92.79, suffix: '%', label: 'Text-to-SQL 執行準確率（EX）' },
          desc:
            '碩士論文研究。以 PyTorch + Hugging Face PEFT 對 Llama-3.1-8B 做 DoRA 微調（4-bit NF4 量化、NEFTune），搭配自建的 ERP Schema 訓練資料集與三階段提示遞減策略，將自然語言問句轉成 T-SQL 查詢，並在單張 16 GB 消費級 GPU 上完成訓練，驗證中小企業在資料不外送雲端的前提下、於地端微調 LLM 的可行性。',
          tags: ['PyTorch', 'Hugging Face PEFT', 'Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '三階段提示遞減訓練', 'Gradio'],
          repo: 'https://github.com/Shane360129/TextToSQLDora',
          demo: 'https://shane360129.github.io/TextToSQLDora/',
          // TODO: 改為碩博士論文網站連結後解開
          // paper: 'assets/docs/thesis-text-to-sql.pdf',
        },
        {
          name: '文青風格旅遊規劃 App',
          video: 'assets/video/travel-log.mp4',
          cover: 'assets/images/travel-log.png',
          desc:
            '像旅遊手冊一樣的翻頁式 Web App，內建牛皮紙、復古、和紙、日誌等多種風格主題，使用 Firestore 即時同步並支援 PWA 離線存取。',
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
          demo: 'https://shane360129.github.io/trip/',
        },
        {
          name: 'POS 進銷存系統核心模組',
          video: 'assets/video/pos-demo.mp4',
          cover: 'assets/images/pos-demo.png',
          desc: '進銷存管理系統，完整實作商品主檔、供應商/客戶、倉庫、進銷作業、庫存管理、應收應付、會計分錄與報表分析等模組，並以 WAC（加權平均成本）計算庫存帳面價值、儀表板呈現銷售/毛利趨勢與低庫存警示。',
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
          repo: 'https://github.com/Shane360129/POS',
          demo: 'https://shane360129.github.io/POS/app.html',
        },
        {
          name: 'Java 全端結訓專案',
          video: 'assets/video/java-fullstack.mp4',
          cover: 'Spring Boot CRUD',
          desc: '台南應科大產業新尖兵計畫的結訓專案，採 MVC 三層架構：後端 Spring Boot + MySQL 提供 RESTful API，前端 Vue 串接 API 完成會員、商品、訂單等模組的 CRUD 流程。第一次以小組形式用 GitHub 協作開發。',
          tags: ['Java', 'Spring Boot', 'Spring MVC', 'Vue', 'MySQL', 'RESTful API'],
          demo: 'https://java-task-demo.onrender.com/',
        },
      ],
      labels: { demo: 'Demo', repo: 'Source' /* , paper: '論文 PDF' */ },
    },
    thesis: {
      title: '碩論技術深度',
      lead: '消費級 16 GB GPU 上把 Llama-3.1-8B Base 微調到 98.73% EX 的完整方法、超參數與設計決策。資料來源：論文 v2 主結果評估紀錄。',
      heroBadge: '國立高雄師範大學 ・ 軟體工程與管理',
      heroTitle: '消費級 GPU 上的封閉域 Text-to-SQL 微調',
      heroSubtitle: 'SAMPLE_ERP 零售管理系統 · Llama-3.1-8B Base + DoRA + 三階段提示遞減',
      heroAuthor: '黃士銘',
      heroAdvisor: '指導教授：李文廷 教授',
      kpisTitle: '主結果（一眼版）',
      kpis: [
        { value: 98.73, suffix: '%', label: 'EX 執行準確率（主結果）' },
        { value: 11773, label: '訓練樣本' },
        { value: 33.5, suffix: 'h', label: '三階段訓練時長' },
        { value: 16, suffix: 'GB', label: '單張消費級 GPU 預算' },
      ],
      sections: [
        {
          kind: 'text',
          heading: '為什麼做這個',
          paragraphs: [
            '中小企業要用 AI 查自家資料，最大顧慮是資料外送雲端。本研究驗證一條中間路：用單張 16 GB 消費級 GPU、開源 Llama-3.1-8B Base，加上 DoRA + 4-bit NF4 + 三階段課程，把模型微調到可用於企業 ERP 的 Text-to-SQL 系統，全程在公司地端執行，資料不出公司。',
            '研究與資料管線之外，特別關注「消費級單卡能否撐住長時間訓練」的工程議題，包括 VRAM 預算、熱度監控、checkpoint 寫入導致的 NVIDIA driver BSOD 等實戰問題。',
          ],
        },
        {
          kind: 'stack',
          heading: '方法堆疊',
          items: [
            { name: '基底模型', value: 'Llama-3.1-8B Base（非 Instruct 版）', note: '§3.4.1' },
            { name: 'PEFT', value: 'DoRA r=32, α=64, dropout=0.05', note: 'LoRA 的方向／大小分解 §2.3.3' },
            { name: '量化', value: '4-bit NF4 + Double Quantization', note: 'QLoRA 基礎 §2.3.4' },
            { name: '訓練優化', value: 'NEFTune α=5.0 + Loss Masking (PLW=0)', note: '§2.3.6, §2.3.7' },
            { name: '課程', value: '三階段提示遞減（E1 schema+rules → E2 rules → E3 header）', note: '§3.5' },
            { name: '硬體', value: 'RTX 5070 Ti 16 GB / Blackwell CC 12.0', note: '§3.4.4' },
          ],
        },
        {
          kind: 'pipeline',
          heading: '三階段提示遞減 Pipeline',
          stages: [
            { stage: 'E1', prompt: 'HEADER + FULL_SCHEMA + BUSINESS_RULES', maxSeq: 'max_seq 2304', hours: '~17.6 h' },
            { stage: 'E2', prompt: 'HEADER + BUSINESS_RULES', maxSeq: 'max_seq 1152', hours: '~10.9 h' },
            { stage: 'E3', prompt: 'HEADER only（裸提示詞＝推論格式）', maxSeq: 'max_seq 384', hours: '~5.0 h' },
          ],
          footnote: '核心假設：訓練時看過完整 schema 與業務規則，最後一階段只看 HEADER 強化內化；推論時也只用 HEADER，每次省下約 1,900 tokens 的提示開銷，並驗證資料結構是否真的進入權重（見 Benchmark 頁 test × schema 的 OOD 控制組對照）。',
        },
        {
          kind: 'table',
          heading: '關鍵超參數',
          cols: ['超參數', '值'],
          rows: [
            ['Effective batch size', '8（per-device 1 × grad accum 8）'],
            ['Learning rate', '2e-5（cosine, 6% warmup）'],
            ['Optimizer', 'Paged AdamW 8-bit'],
            ['Mixed precision', 'BF16 + TF32 (Blackwell Tensor Core)'],
            ['NEFTune α', '5.0'],
            ['Weight decay / Max grad norm', '0.01 / 1.0'],
            ['LoRA target modules', 'q / k / v / o / gate / up / down_proj（7 層全覆蓋）'],
            ['步數（每階段 / 合計）', '~1,472 / ~4,416'],
          ],
        },
        {
          kind: 'bullets',
          heading: '工程細節（消費級單卡能撐住的關鍵）',
          items: [
            'Gradient checkpointing（use_reentrant=False）：用 20–50% 計算時間換 VRAM 峰值大幅下降',
            'Liger Kernel（NVIDIA 融合算子）：把 RMSNorm / SwiGLU / Cross Entropy 融合成單一 CUDA kernel，降 15–20% VRAM',
            'expandable_segments：caching allocator 在記憶體緊張時不碎片化崩潰',
            'ThermalMonitorCallback：每 20 step 抽 GPU 溫度，85°C hard stop、72°C 才恢復；Blackwell 90°C+ 開始 thermal throttling，留 5°C 緩衝',
            'Save 策略：原本 save_steps=250 在 11K 訓練多次觸發 nvlddmkm BSOD，回退為 save_strategy="epoch" + save_total_limit=1',
            'CoT prefix：訓練資料層級的「-- Think: ...」推理痕跡，由 gold SQL 規則式擷取生成（isDeleted / LEFT() / GROUP BY / 聚合函式）',
            'Loss Masking：prompt 部分 label=-100，CE loss 只算 SQL 部分；自訂 PadCollator 確保 -100 標記跨三段 Trainer 不漂移',
            '三段獨立 Trainer 實例：每階段 train 完即 GC，避免前一段的 Trainer state 影響下一段的 LR 排程',
          ],
        },
      ],
      linksTitle: '延伸閱讀',
      links: [
        { label: '原始碼 Repo', href: 'https://github.com/Shane360129/TextToSQLDora', kind: 'repo' },
        { label: '互動結果展示頁', href: 'https://shane360129.github.io/TextToSQLDora/', kind: 'demo' },
        { label: 'Text-to-SQL 互動展示（本站）', href: '#demo', kind: 'internal' },
      ],
    },

    benchmark: {
      title: '評估結果 / Benchmark',
      lead: '碩論 v2 主結果在 SQL Server 實測的執行準確率（EX）：五個提示模式 × 10 個檢視表 × 4 個難度的完整對照。每筆數字皆出自 outputs/eval_text2sql_test_v2_*.json。',
      modes: {
        title: '五模式 EX 對照（推論時提示模式消融）',
        note: '三 in-distribution 模式（header / rules / full）呈現嚴格單調逆趨勢：提示越長、EX 反降，支持「資料結構與業務規則已內化進權重」的假設。schema 為分布外（OOD）控制組——只放 schema 不給規則，效果暴跌至 76.56%，反向證明微調的不可替代性。',
        cols: ['模式', '階段', '註記', 'EX', 'EM-string', 'EM-component', 'Prompt tokens', '推論秒數'],
      },
      byView: {
        title: '逐檢視表 EX',
        selectorLabel: '評估模式',
        viewCol: '檢視表',
        exCol: 'EX',
        countCol: '樣本數',
        note: 'V_PurchaseOrder 與 V_Payable 兩個高頻、規則最清楚的檢視表表現最穩；V_Transfer 樣本最少、規則最特殊（srcWhName / destWhName）仍能維持 95.7%。',
      },
      byDifficulty: {
        title: '逐難度 EX',
        selectorLabel: '評估模式',
        diffCol: '難度',
        exCol: 'EX',
        countCol: '樣本數',
        diffNames: { easy: 'Easy', medium: 'Medium', hard: 'Hard', extra: 'Extra', all: '全部' },
        note: 'Hard 反而比 Medium 高（99.8% vs 98.6%）— hard 題集中在 V_PurchaseOrder 詳目查詢，正好命中規則 R15 的三種投影規則，規則化高的題目反而被內化得最徹底。',
      },
      insights: {
        title: '三個主要 Takeaway',
        items: [
          { head: '提示越短、效果反而越好', body: '在 in-distribution 三模式中，header(55 tokens)→rules(879)→full(1970) 的 EX 反而從 98.73% 單調下降到 94.64%。這支持訓練時內化、推論時最小提示的設計路徑。' },
          { head: 'OOD 控制組證明 schema 真的進入權重', body: 'test × schema 給的是訓練未見的提示組合（只有 schema 沒有 rules），EX 暴跌至 76.56%。如果只是「靠提示記住」，OOD 模式不該掉這麼多——這證明規則確實被微調進權重。' },
          { head: 'val 與 test 一致性 100%', body: 'val × header 與 test × header 的 EX 都是 98.73%（皆 2026/2052），表示沒有 train/eval 漂移與資料洩漏。v2 切分已修正 11 筆 TEST-only sanitize 後達成此一致性。' },
        ],
      },
      tba: {
        title: '與 Frontier LLM 對照（規劃中）',
        body: '目前缺：用相同 SAMPLE_ERP schema 與 2,052 題測試集，對 GPT-4o / Claude Sonnet 4.6 / Gemini 2.5 Pro 跑 zero-shot 與 few-shot baseline，並把結果加入本頁。此為論文後續實驗，會優先補上。',
      },
    },

    notes: {
      title: '技術筆記',
      lead: '碩論期間踩過的坑、做過的設計決策、為什麼這樣選。點擊每篇展開全文。',
      articles: [
        {
          id: 'dora-vs-lora',
          tag: 'PEFT',
          title: 'DoRA 與 LoRA 的差別，到底差在哪？',
          summary: 'LoRA 把權重更新拆成兩個低秩矩陣的乘積；DoRA 進一步把預訓練權重分解為「方向 × 大小」，只用 LoRA 改方向、用一個可訓練向量改大小。對小資料的 SFT 場景，這個分解能讓微調行為更接近 full fine-tuning。',
          body: [
            'LoRA 的核心是：凍結原權重 W，加上一個低秩 update ΔW = BA（A∈R^{r×d}, B∈R^{d×r}），訓練時只更新 A、B。r=32 表示更新被限制在 32 維的子空間裡。',
            'DoRA 觀察到：full fine-tuning 在訓練時，權重的「方向」變化很大、但「大小」變化相對小且有特定模式；LoRA 把兩者揉在一起學，反而難以分離。',
            'DoRA 的做法：把 W 預先分解成 W = m · (V / ||V||)，其中 m 是每列的大小（scalar 向量）、V/||V|| 是單位方向矩陣。微調時用 LoRA 更新方向 V，用一個額外的小向量更新大小 m。',
            '實作上只需要在 LoraConfig 加 use_dora=True，計算成本約多 5–10%，VRAM 影響很小。本論文在小樣本 SFT 場景下選 DoRA r=32 / α=64，是看中它在小資料量下更接近 full FT 的學習動力學。',
          ],
        },
        {
          id: 'nf4-budget',
          tag: '量化',
          title: '4-bit NF4 在 16 GB GPU 上的記憶體預算',
          summary: 'Llama-3.1-8B 全精度（FP32）要 32 GB、BF16 要 16 GB——光是模型就吃滿單張消費級卡。NF4 量化把每個參數壓到 4-bit，加上 Double Quantization 與 Paged AdamW 8-bit、Gradient Checkpointing，才能在 16 GB GPU 上撐住 max_seq=2304 的訓練。',
          body: [
            '量化前後的概略 VRAM：BF16 模型 ~16 GB；NF4 量化後模型本身約 5 GB，省下約 11 GB 給激活值、梯度與優化器狀態。',
            'Double Quantization：對量化常數（每個 block 的 scale/zero）再做一次 8-bit 量化，再省 ~10% VRAM。',
            'NF4（NormalFloat 4-bit）：針對常態分布權重最佳化的量化點，比一般 INT4 更貼合 LLM 權重分布；前向時 dequantize 成 BF16 計算，精度損失極小。',
            'Paged AdamW 8-bit：優化器狀態（m, v）用 8-bit 儲存、必要時 page 到 CPU；對 PEFT 場景影響很小，因為實際 trainable 參數只有 DoRA 的低秩矩陣。',
            'Gradient Checkpointing：把前向激活值丟掉、反向時重算，用 20–50% 計算時間換 VRAM 峰值大幅下降；對 16 GB GPU 跑 max_seq=2304 是必開。',
            '實測訓練時 VRAM 約 13–14 GB（含 caching allocator buffer），留約 2 GB 安全餘裕。',
          ],
        },
        {
          id: 'prompt-decay',
          tag: '課程學習',
          title: '三階段提示遞減：訓練時看 schema，推論時不看',
          summary: '推論時把 1,900+ tokens 的 schema/rules 提示去掉，模型靠權重內化的知識直接生成 SQL——這條路是否可行？論文用 E1(完整) → E2(只有規則) → E3(只有 header) 的課程驗證了 yes，並用 OOD 控制組 test × schema 反證。',
          body: [
            '動機：推論時每次 query 都帶 1,970 tokens 的 schema/rules 提示很貴。如果模型把 schema 與規則「記住」了，推論時只需要 55 tokens 的 HEADER 就夠，吞吐量提升一個數量級。',
            '訓練設計：三階段每段都跑完整 11,773 筆訓練集（~1,472 step），但提示越來越短——E1 = HEADER + FULL_SCHEMA + BUSINESS_RULES、E2 = HEADER + BUSINESS_RULES、E3 = HEADER only。',
            '驗證結果（test × header 主結果 vs test × full 對照）：拿掉 schema 與 rules 的提示，EX 反而從 94.64% 升到 98.73%——這支持訓練時的資訊已經被權重內化、推論時提示越乾淨越好。',
            'OOD 控制組（test × schema）：只給 schema、不給 rules，這個提示組合訓練時從未見過。EX 暴跌至 76.56%。如果模型只是靠提示記住，OOD 模式不該掉這麼多；這反向證明規則確實被微調進權重，而非僅憑提示讀取。',
            '工程細節：每階段的 max_seq_len 是實測得來——E1 max_seq=2304（實測 max=2177 留 6% buffer）、E2=1152（實測 max=1086）、E3=384。設太低會 silent skip 樣本，trainer 啟動才崩潰。',
          ],
        },
        {
          id: 'loss-masking',
          tag: '訓練優化',
          title: '為什麼 prompt 部分要設 label=-100（損失遮蔽）',
          summary: 'SFT 訓練時，模型一次看 prompt + completion，但只想讓它學「給定 prompt 之後該生什麼 completion」。如果不做損失遮蔽，模型會把 prompt 也當訓練目標、學去「重複生成 prompt 本身」，反而拖累 SQL 生成品質。',
          body: [
            '機制：PyTorch 的 CrossEntropyLoss 對 label=-100 的 position 不計算 loss。所以把 prompt token 的 label 全設成 -100，模型訓練時只會被 SQL 部分的誤差驅動。',
            '本論文的實作：tokenize_alpaca() 在拼好 BOS + prompt + completion 的 input_ids 後，labels = [-100] * prompt_len + full_ids[prompt_len:]，prompt_len 是 prompt（含 BOS）的 token 數量。',
            '為什麼不用 HF 內建 DataCollatorForLanguageModeling？它預設把 labels 直接設成 input_ids 的副本，等於沒做遮蔽。我們自訂 PadCollator 確保 -100 標記隨樣本傳入、跨三段獨立 Trainer 也不漂移。',
            '陷阱：padding 位置的 label 也要設 -100（與 attention_mask=0 一致），否則 pad token 會被當成訓練目標，污染 loss。',
            '驗證方式：訓練前印 prompt_len 與 full_len 統計，確認遮蔽邊界合理；訓練中監看 eval_loss 走勢，若 prompt 漏遮、loss 會異常低且模型輸出會包含 prompt 殘留。',
          ],
        },
        {
          id: 'thermal',
          tag: '工程',
          title: '消費級單卡 33.5 小時長訓的熱度監控',
          summary: 'RTX 5070 Ti 在 16 GB 滿載 BF16 訓練時很燙——Blackwell 90°C+ 開始 thermal throttling，10+ 小時連續訓會把房間烤熱也把卡的時脈壓下去。寫了一個 TrainerCallback 在每 20 步抽 nvidia-smi 溫度，85°C hard stop、72°C 才恢復。',
          body: [
            '為什麼軟體要管熱：理論上驅動會自動 throttling，但實測 throttling 觸發後時脈與 GPU 使用率會在 70%~95% 之間擺盪，訓練速度不穩、loss 曲線變不平整；主動暫停讓溫度回到 72°C 再開始反而總時長更短。',
            '實作：ThermalMonitorCallback 繼承 TrainerCallback，on_log 鉤子每 20 step 觸發一次 subprocess 跑 nvidia-smi 拿溫度（避免每 step 呼叫的 overhead）。',
            '閾值設計：warn_temp=80°C（log 警告但繼續訓）、pause_temp=85°C（time.sleep(15) 輪詢等降溫）、cooldown_target=72°C。Blackwell 90°C+ 開始 throttling，85°C 留 5°C 緩衝。',
            '另一個踩坑：checkpoint save。原本 save_steps=250 在 11K 訓練時多次觸發 nvlddmkm.sys 的 NVIDIA driver BSOD（save 過程的 GPU→CPU memory transfer + cudaFree pattern 撞到 driver bug）；回退為 save_strategy="epoch" + save_total_limit=1 後不再 BSOD。5K 訓練時用 epoch save 從未發生過此問題，可重現。',
            '心得：訓 LLM 不只是寫 train loop——你還在開一台高功率烤箱，且 NVIDIA driver 的長尾 bug 會在你最不希望的時候出現。',
          ],
        },
      ],
      labels: {
        readMore: '展開',
        readLess: '收合',
      },
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
      thesis: 'Thesis',
      benchmark: 'Benchmark',
      contact: 'Contact',
    },
    a11y: {
      skip: 'Skip to main content',
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
          video: 'assets/video/text-to-sql.mp4',
          cover: '<div class="ttsql-cover"><span class="ttsql-badge">NKNU · Software Eng. &amp; Mgmt</span><h4 class="ttsql-title">Closed-Domain Text-to-SQL<br>on a Consumer GPU</h4><p class="ttsql-sub">Llama-3.1-8B · DoRA · 3-stage prompt decay</p><div class="ttsql-stats"><div class="ttsql-stat"><span class="ttsql-num">98.73<small>%</small></span><span class="ttsql-lbl">EX accuracy</span></div><div class="ttsql-stat"><span class="ttsql-num">16<small>GB</small></span><span class="ttsql-lbl">GPU budget</span></div><div class="ttsql-stat"><span class="ttsql-num">11,773</span><span class="ttsql-lbl">train samples</span></div><div class="ttsql-stat"><span class="ttsql-num">33.5<small>h</small></span><span class="ttsql-lbl">train time</span></div></div></div>',
          stat: { value: 92.79, suffix: '%', label: 'Text-to-SQL Execution Accuracy (EX)' },
          desc:
            "Master's thesis research. Fine-tunes Llama-3.1-8B with DoRA (4-bit NF4 quantization, NEFTune) using PyTorch and Hugging Face PEFT, trained on a self-built ERP-schema dataset with a three-stage prompt-decreasing strategy, to translate natural-language questions into T-SQL, on a single 16GB consumer GPU — showing an SME can fine-tune an LLM on-premise without sending its data to the cloud.",
          tags: ['PyTorch', 'Hugging Face PEFT', 'Llama-3.1-8B', 'DoRA (r=32)', 'QLoRA (4-bit NF4)', 'NEFTune', '3-Stage Prompt-Decreasing', 'Gradio'],
          repo: 'https://github.com/Shane360129/TextToSQLDora',
          demo: 'https://shane360129.github.io/TextToSQLDora/',
          // TODO: 改為碩博士論文網站連結後解開
          // paper: 'assets/docs/thesis-text-to-sql.pdf',
        },
        {
          name: 'Literary-Style Trip Planner',
          video: 'assets/video/travel-log.mp4',
          cover: 'assets/images/travel-log.png',
          desc:
            "A book-style trip planning web app with page-turning UX and multiple paper themes (Kraft, Vintage, Washi, Journal). Backed by Firestore for real-time sync; ships as an installable PWA.",
          tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase Firestore', 'PWA'],
          repo: 'https://github.com/Shane360129/trip',
          demo: 'https://shane360129.github.io/trip/',
        },
        {
          name: 'POS Inventory System Core Modules',
          video: 'assets/video/pos-demo.mp4',
          cover: 'assets/images/pos-demo.png',
          desc: "A full inventory management system covering products, suppliers/customers, warehouses, purchase/sales operations, stock control, A/R & A/P, journal entries, and reporting. Uses weighted average cost (WAC) for inventory valuation, with a dashboard for sales/margin trends and low-stock alerts.",
          tags: ['C#', 'ASP.NET MVC', 'jQuery', 'SQL Server', 'RDLC'],
          repo: 'https://github.com/Shane360129/POS',
          demo: 'https://shane360129.github.io/POS/app.html',
        },
        {
          name: 'Java Full-stack Bootcamp Project',
          video: 'assets/video/java-fullstack.mp4',
          cover: 'Spring Boot CRUD',
          desc: "Capstone project from the Industry Vanguard bootcamp at Tainan University of Technology. MVC three-tier architecture: Spring Boot + MySQL on the backend serving RESTful APIs, Vue on the frontend consuming them, with full CRUD across user, product, and order modules. First time collaborating as a team on GitHub.",
          tags: ['Java', 'Spring Boot', 'Spring MVC', 'Vue', 'MySQL', 'RESTful API'],
          demo: 'https://java-task-demo.onrender.com/',
        },
      ],
      labels: { demo: 'Demo', repo: 'Source' /* , paper: 'Thesis PDF' */ },
    },
    thesis: {
      title: "Thesis Deep-Dive",
      lead: "How I fine-tuned Llama-3.1-8B Base to 98.73% EX on a single 16 GB consumer GPU — full method, hyperparameters and design decisions. Source: thesis v2 main-result evaluation logs.",
      heroBadge: "NKNU · Software Engineering & Management",
      heroTitle: "Closed-Domain Text-to-SQL Fine-tuning on a Consumer GPU",
      heroSubtitle: "SAMPLE_ERP retail mgmt system · Llama-3.1-8B Base + DoRA + 3-stage prompt decay",
      heroAuthor: "Shane Huang",
      heroAdvisor: "Advisor: Prof. Wen-Ting Li",
      kpisTitle: "Main results at a glance",
      kpis: [
        { value: 98.73, suffix: "%", label: "Execution Accuracy (EX, main)" },
        { value: 11773, label: "Training samples" },
        { value: 33.5, suffix: "h", label: "3-stage training time" },
        { value: 16, suffix: "GB", label: "Single consumer-GPU budget" },
      ],
      sections: [
        {
          kind: "text",
          heading: "Why this thesis",
          paragraphs: [
            "For SMEs that want AI on their own data, the biggest blocker is sending that data to the cloud. This work validates a middle path: fine-tune the open Llama-3.1-8B Base on a single 16 GB consumer GPU using DoRA + 4-bit NF4 + a three-stage curriculum, and run the entire pipeline on-premise — the data never leaves the company.",
            "Beyond the research, a sustained focus is the engineering reality of long training on consumer-grade hardware: VRAM budget, thermal monitoring, and even checkpoint-induced NVIDIA driver BSODs.",
          ],
        },
        {
          kind: "stack",
          heading: "Method Stack",
          items: [
            { name: "Base model", value: "Llama-3.1-8B Base (not Instruct)", note: "§3.4.1" },
            { name: "PEFT", value: "DoRA r=32, α=64, dropout=0.05", note: "LoRA with direction / magnitude decomposition §2.3.3" },
            { name: "Quantization", value: "4-bit NF4 + Double Quantization", note: "QLoRA basis §2.3.4" },
            { name: "Training tweaks", value: "NEFTune α=5.0 + Loss Masking (PLW=0)", note: "§2.3.6, §2.3.7" },
            { name: "Curriculum", value: "3-stage prompt decay (E1 schema+rules → E2 rules → E3 header)", note: "§3.5" },
            { name: "Hardware", value: "RTX 5070 Ti 16 GB / Blackwell CC 12.0", note: "§3.4.4" },
          ],
        },
        {
          kind: "pipeline",
          heading: "3-Stage Prompt-Decay Pipeline",
          stages: [
            { stage: "E1", prompt: "HEADER + FULL_SCHEMA + BUSINESS_RULES", maxSeq: "max_seq 2304", hours: "~17.6 h" },
            { stage: "E2", prompt: "HEADER + BUSINESS_RULES", maxSeq: "max_seq 1152", hours: "~10.9 h" },
            { stage: "E3", prompt: "HEADER only (matches inference format)", maxSeq: "max_seq 384", hours: "~5.0 h" },
          ],
          footnote: "Core hypothesis: train with full schema and rules in early stages, then collapse to HEADER only — internalizing the schema into the weights. Inference uses HEADER only, saving ~1,900 tokens of prompt per query. The OOD control (test × schema) on the Benchmark page verifies internalization actually happened.",
        },
        {
          kind: "table",
          heading: "Key Hyperparameters",
          cols: ["Hyperparameter", "Value"],
          rows: [
            ["Effective batch size", "8 (per-device 1 × grad accum 8)"],
            ["Learning rate", "2e-5 (cosine, 6% warmup)"],
            ["Optimizer", "Paged AdamW 8-bit"],
            ["Mixed precision", "BF16 + TF32 (Blackwell Tensor Core)"],
            ["NEFTune α", "5.0"],
            ["Weight decay / Max grad norm", "0.01 / 1.0"],
            ["LoRA target modules", "q / k / v / o / gate / up / down_proj (all 7 layers)"],
            ["Steps (per stage / total)", "~1,472 / ~4,416"],
          ],
        },
        {
          kind: "bullets",
          heading: "Engineering details (what kept a single consumer GPU alive)",
          items: [
            "Gradient checkpointing (use_reentrant=False): trades 20–50% extra compute for a much lower VRAM peak",
            "Liger Kernel (NVIDIA fused ops): fuses RMSNorm / SwiGLU / Cross Entropy into one CUDA kernel, ~15–20% VRAM savings",
            "expandable_segments: keeps the caching allocator from fragmenting under memory pressure",
            "ThermalMonitorCallback: samples nvidia-smi every 20 steps; hard stop at 85°C, only resumes at 72°C (Blackwell starts thermal throttling around 90°C, kept a 5°C buffer)",
            "Save strategy: save_steps=250 repeatedly triggered nvlddmkm.sys NVIDIA driver BSOD on 11K training; reverted to save_strategy='epoch' + save_total_limit=1",
            "CoT prefix: a '-- Think: ...' reasoning trace prepended to each training sample, regex-extracted from gold SQL (isDeleted / LEFT() / GROUP BY / aggregates)",
            "Loss Masking: prompt tokens get label=-100, CE loss only counts SQL tokens; a custom PadCollator keeps the -100 markers intact across three independent Trainer instances",
            "3 independent Trainer instances: GC after each stage, so the previous stage's Trainer state can't bleed into the next stage's LR schedule",
          ],
        },
      ],
      linksTitle: "Further reading",
      links: [
        { label: "Source repo", href: "https://github.com/Shane360129/TextToSQLDora", kind: "repo" },
        { label: "Interactive results page", href: "https://shane360129.github.io/TextToSQLDora/", kind: "demo" },
        { label: "Text-to-SQL demo (this site)", href: "#demo", kind: "internal" },
      ],
    },

    benchmark: {
      title: "Benchmark",
      lead: "Thesis v2 main results, measured Execution Accuracy (EX) against a live SQL Server: five prompt modes × 10 views × 4 difficulty levels. Every number comes from outputs/eval_text2sql_test_v2_*.json.",
      modes: {
        title: "Five-mode EX comparison (inference-time prompt ablation)",
        note: "The three in-distribution modes (header / rules / full) show a strict monotonic inverse trend: longer prompts produce lower EX, supporting the claim that schema and rules have been internalized into the weights. The schema mode is an out-of-distribution (OOD) control — only schema, no rules — and EX collapses to 76.56%, reverse-proving that fine-tuning is doing real work, not just prompt-reading.",
        cols: ["Mode", "Stage", "Note", "EX", "EM-string", "EM-component", "Prompt tokens", "Inference sec"],
      },
      byView: {
        title: "Per-view EX",
        selectorLabel: "Evaluation mode",
        viewCol: "View",
        exCol: "EX",
        countCol: "Samples",
        note: "V_PurchaseOrder and V_Payable — the highest-frequency, cleanest-rule views — are most stable. V_Transfer has the fewest samples and the most idiosyncratic rules (srcWhName / destWhName), but still holds 95.7%.",
      },
      byDifficulty: {
        title: "Per-difficulty EX",
        selectorLabel: "Evaluation mode",
        diffCol: "Difficulty",
        exCol: "EX",
        countCol: "Samples",
        diffNames: { easy: "Easy", medium: "Medium", hard: "Hard", extra: "Extra", all: "All" },
        note: "Hard outperforms Medium (99.8% vs 98.6%) — Hard items concentrate in V_PurchaseOrder detail queries, which map cleanly onto Rule R15's three projection patterns. Highly rule-bound questions actually get internalized the hardest.",
      },
      insights: {
        title: "Three main takeaways",
        items: [
          { head: "Shorter prompts → better results (within distribution)", body: "Across the three in-distribution modes, going from header (55 tokens) to rules (879) to full (1970) drops EX from 98.73% to 94.64% monotonically. Supports the train-with-context, infer-with-minimal-prompt path." },
          { head: "OOD control proves the schema actually entered the weights", body: "test × schema uses a prompt combination the model never saw during training (schema only, no rules). EX collapses to 76.56%. If the model were merely 'reading from the prompt,' OOD wouldn't fall this hard — the rules are clearly internalized into the weights." },
          { head: "100% val/test consistency", body: "val × header and test × header both hit 98.73% EX (2026/2052 each), indicating no train/eval drift and no data leakage. v2 splits also patched 11 TEST-only sanitize fixes to reach this consistency." },
        ],
      },
      tba: {
        title: "Comparison vs Frontier LLMs (planned)",
        body: "Missing today: running GPT-4o / Claude Sonnet 4.6 / Gemini 2.5 Pro on the same SAMPLE_ERP schema and the same 2,052-question test set, with zero-shot and few-shot baselines, then folding the table back into this page. Planned as the next experiment.",
      },
    },

    notes: {
      title: "Technical Notes",
      lead: "Pitfalls hit, decisions made, and why they were made — during the thesis work. Click each entry to expand.",
      articles: [
        {
          id: "dora-vs-lora",
          tag: "PEFT",
          title: "DoRA vs LoRA — what's actually different?",
          summary: "LoRA decomposes the weight update into the product of two low-rank matrices. DoRA goes further and decomposes the pre-trained weight itself into direction × magnitude, then uses LoRA only on direction and a trainable vector on magnitude. In small-data SFT this makes fine-tuning behave closer to full fine-tuning.",
          body: [
            "LoRA freezes the base weight W and adds a low-rank update ΔW = BA (A ∈ R^{r×d}, B ∈ R^{d×r}). Only A and B are trained. r=32 means updates are confined to a 32-dim subspace.",
            "DoRA's observation: during full fine-tuning, weight directions move a lot, while magnitudes move much less and follow a different pattern. LoRA conflates the two and struggles to separate them.",
            "DoRA's approach: pre-decompose W = m · (V / ||V||), where m is a per-column magnitude (scalar vector) and V/||V|| is a unit-direction matrix. Fine-tuning uses LoRA to update V (direction) and a separate small vector to update m (magnitude).",
            "Implementation-wise, it's just use_dora=True in LoraConfig — ~5–10% extra compute, negligible VRAM impact. This thesis picks DoRA r=32 / α=64 because in small-data SFT it more closely tracks full-FT learning dynamics.",
          ],
        },
        {
          id: "nf4-budget",
          tag: "Quantization",
          title: "4-bit NF4 on a 16 GB GPU — the VRAM budget",
          summary: "Llama-3.1-8B at FP32 needs 32 GB; at BF16, 16 GB — the model alone fills a consumer card. NF4 quantization compresses each parameter to 4 bits; combined with Double Quantization, Paged AdamW 8-bit, and Gradient Checkpointing, training survives at max_seq=2304 on 16 GB.",
          body: [
            "VRAM before vs after: BF16 model ~16 GB; NF4-quantized model ~5 GB, freeing ~11 GB for activations, gradients, and optimizer state.",
            "Double Quantization: quantize the per-block scale/zero constants again at 8-bit, ~10% extra VRAM savings.",
            "NF4 (NormalFloat 4-bit): a 4-bit code optimized for normally-distributed weights — fits LLM weight distributions better than vanilla INT4. Dequantizes to BF16 on the forward pass; accuracy loss is minimal.",
            "Paged AdamW 8-bit: optimizer states (m, v) at 8-bit, optionally paged to CPU. In PEFT this barely matters because only the DoRA low-rank matrices are trainable.",
            "Gradient Checkpointing: drop forward activations and recompute on the backward pass — 20–50% extra compute for a sharply lower VRAM peak. Mandatory for max_seq=2304 on 16 GB.",
            "Measured training VRAM ~13–14 GB (including allocator buffer), leaving a ~2 GB safety margin.",
          ],
        },
        {
          id: "prompt-decay",
          tag: "Curriculum",
          title: "3-stage prompt decay: train with schema, infer without",
          summary: "Can you drop the 1,900+ tokens of schema/rules at inference time and let the model generate SQL from internalized knowledge? The thesis tests this with an E1 (full) → E2 (rules only) → E3 (header only) curriculum, and the OOD control (test × schema) provides the falsification.",
          body: [
            "Motivation: 1,970 tokens of schema/rules in every inference prompt is expensive. If the model has memorized the schema and rules, inference only needs the 55-token HEADER — an order-of-magnitude throughput improvement.",
            "Training design: all three stages run the full 11,773-sample train set (~1,472 steps each), with progressively shorter prompts: E1 = HEADER + FULL_SCHEMA + BUSINESS_RULES; E2 = HEADER + BUSINESS_RULES; E3 = HEADER only.",
            "Result (test × header main result vs test × full): dropping schema and rules from the prompt raises EX from 94.64% to 98.73%. Supports the claim that early-stage context is fully absorbed and that cleaner inference prompts are actually better.",
            "OOD control (test × schema): schema-only, no rules — a prompt combination the model never saw during training. EX collapses to 76.56%. If the model were just 'reading from the prompt,' OOD wouldn't fall this hard — proving the rules really entered the weights.",
            "Engineering note: every stage's max_seq_len is measured empirically — E1 max_seq=2304 (measured max 2177, +6% buffer); E2=1152 (measured max 1086); E3=384. Set too low and samples are silently skipped, with Trainer crashing only at startup.",
          ],
        },
        {
          id: "loss-masking",
          tag: "Training",
          title: "Why prompt tokens need label=-100 (Loss Masking)",
          summary: "In SFT, the model sees prompt + completion at once, but you only want it to learn 'given this prompt, generate this completion.' Without loss masking, the model also learns to reproduce the prompt itself, dragging down SQL quality.",
          body: [
            "Mechanism: PyTorch's CrossEntropyLoss skips positions where label == -100. So set every prompt token's label to -100 — only SQL-token errors drive training.",
            "Implementation: tokenize_alpaca() builds BOS + prompt + completion as input_ids, then sets labels = [-100] * prompt_len + full_ids[prompt_len:], where prompt_len is the token count of prompt (BOS included).",
            "Why not HF's DataCollatorForLanguageModeling? It defaults to labels = input_ids.clone() — essentially no masking. The custom PadCollator keeps the -100 markers attached to each sample and stable across three independent Trainer instances.",
            "Trap: padding positions also need label=-100 (matching attention_mask=0). Otherwise the pad token becomes a training target and pollutes the loss.",
            "How to verify: print prompt_len / full_len stats before training to sanity-check masking boundaries. During training, watch eval_loss — if prompt masking leaks, loss looks anomalously low and generations contain prompt fragments.",
          ],
        },
        {
          id: "thermal",
          tag: "Engineering",
          title: "Thermal monitoring on a single consumer GPU during a 33.5-hour run",
          summary: "RTX 5070 Ti under full BF16 + 16 GB load gets hot — Blackwell starts thermal throttling around 90°C, and 10+ hours of continuous training will both heat the room and crush the clock. I wrote a TrainerCallback that polls nvidia-smi every 20 steps, hard-stops at 85°C, and resumes only at 72°C.",
          body: [
            "Why manage it in software: in theory the driver throttles automatically, but in practice once throttling kicks in, clock and utilization oscillate between 70%–95%, training speed gets unstable, and the loss curve roughens. Actively pausing to cool to 72°C before resuming actually shortens total wall-clock time.",
            "Implementation: ThermalMonitorCallback extends TrainerCallback; on_log fires every 20 steps and shells out to nvidia-smi (avoids per-step subprocess overhead).",
            "Thresholds: warn_temp=80°C (log only, keep training); pause_temp=85°C (time.sleep(15) polling loop until cooldown); cooldown_target=72°C. Blackwell starts throttling around 90°C; the 5°C buffer below the hard stop is intentional.",
            "Another sharp edge: checkpoint save. The original save_steps=250 triggered nvlddmkm.sys NVIDIA driver BSODs multiple times during 11K training (save's GPU→CPU memory transfer + cudaFree pattern hits a driver bug). Reverted to save_strategy='epoch' + save_total_limit=1 — no more BSODs. Reproducible: 5K runs with epoch-save never hit it; 11K with steps-save did, repeatedly.",
            "Takeaway: training an LLM isn't just writing a train loop — you're also running a high-wattage oven, and long-tail NVIDIA driver bugs show up exactly when you don't want them.",
          ],
        },
      ],
      labels: {
        readMore: "Read more",
        readLess: "Collapse",
      },
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
