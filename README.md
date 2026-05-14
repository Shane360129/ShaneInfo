# ShaneInfo — Personal Website

我的個人網站 / Personal portfolio website.

## 技術 / Tech Stack

- 純 HTML / CSS / JavaScript（無建置流程）
- 中英雙語切換（i18n）
- 深淺色模式切換
- RWD 響應式設計

## 目錄結構 / Project Structure

```
ShaneInfo/
├── index.html          # 主頁面
├── css/
│   ├── style.css       # 主樣式（含設計變數）
│   └── responsive.css  # RWD 響應式
├── js/
│   ├── main.js         # 互動、渲染
│   └── i18n.js         # 語言切換
├── data/
│   └── translations.js # 履歷資料 / 翻譯字典
└── assets/
    ├── images/         # 頭像、專案截圖
    └── icons/          # SVG 圖示
```

## 編輯內容 / Editing Content

所有履歷資料集中在一個檔案：**`data/translations.js`**

裡面有兩個物件 `zh-TW`（中文）與 `en`（英文）。
找到對應區塊（about / skills / experience / education / projects / contact），
直接修改字串即可，網站會自動更新。

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

可直接部署到 GitHub Pages、Netlify、Vercel、Cloudflare Pages 等靜態託管服務。
