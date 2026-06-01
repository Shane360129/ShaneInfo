# ShaneInfo — Personal Website

我的個人網站 / Personal portfolio website.

> 全端工程師 ・ LLM 微調研究 — 從餐旅業跨域到軟體開發。
> A full-stack engineer with on-premise LLM fine-tuning research; switched into software from hospitality in 2023.

## 技術 / Tech Stack

- 純 HTML / CSS / JavaScript（無建置流程）
- 中英雙語切換（i18n）
- 深淺色模式切換
- RWD 響應式設計
- Text-to-SQL 互動展示（碩論系統的離線精選範例）
- SEO（sitemap.xml / robots.txt）與無障礙（skip link、aria-current）

## 目錄結構 / Project Structure

```
ShaneInfo/
├── index.html          # 主頁面
├── robots.txt          # 爬蟲規則（指向 sitemap）
├── sitemap.xml         # 網站地圖（SEO）
├── css/
│   ├── style.css       # 主樣式（含設計變數）
│   └── responsive.css  # RWD 響應式
├── js/
│   ├── main.js         # 互動、渲染、Text-to-SQL 展示邏輯
│   └── i18n.js         # 語言切換
├── data/
│   ├── translations.js # 履歷資料 / 翻譯字典
│   └── demo.js         # Text-to-SQL 展示的範例題目與資料
└── assets/
    ├── images/         # 頭像、專案截圖
    └── icons/          # SVG 圖示
```

## 編輯內容 / Editing Content

所有履歷資料集中在一個檔案：**`data/translations.js`**

裡面有兩個物件 `zh-TW`（中文）與 `en`（英文）。
找到對應區塊（about / skills / experience / education / projects / demo / contact），
直接修改字串即可，網站會自動更新。

### Text-to-SQL 互動展示 / Demo

「Demo」分頁是碩論系統的**離線精選範例**展示：使用者用中／英文問問題，
頁面示範微調模型會生成的 T-SQL 與查詢結果（並非即時模型推論）。

- 範例題目、SQL、結果都在 **`data/demo.js`** 的 `examples` 陣列裡，
  每筆含 `question` / `sql` / `columns` / `rows`（皆中英雙語）與 `keywords`（自由輸入的關鍵字比對）。
- 介面文字（標題、按鈕、提示）在 `data/translations.js` 的 `demo` 區塊。
- 新增一題：在 `examples` 加一筆物件即可，網站自動帶出對應的範例按鈕。

## 本地預覽 / Local Preview

由於使用相對路徑載入 JS，直接打開 `index.html` 就能用，
或使用任何靜態檔案伺服器：

```bash
# Python 內建
python3 -m http.server 8000

# Node.js
npx serve .
```

然後瀏覽 http://localhost:8000

## 部署 / Deployment

本專案已內建 GitHub Actions 自動部署到 **GitHub Pages**。

### 啟用步驟

1. 將此分支合併到 `main`（或直接在 `main` 開發）
2. 進入 GitHub repo → **Settings → Pages**
3. **Source** 選擇 **GitHub Actions**
4. 推送任何 commit 到 `main`，workflow 會自動部署
5. 完成後網址會是 `https://shane360129.github.io/ShaneInfo/`

### Workflow 檔案

`.github/workflows/deploy.yml` — 推送到 `main` 時自動觸發，也可在 Actions 頁面手動觸發（workflow_dispatch）。

### 其他平台

由於是純靜態網站，也可直接部署到 Netlify、Vercel、Cloudflare Pages 等。
