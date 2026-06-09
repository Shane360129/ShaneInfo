# 專案 Demo 影片 / Project demo clips

作品卡片支援「滑鼠移上去自動播放」的 demo 影片。
網站已經接好機制：**只要把對應檔名的影片放進這個資料夾，卡片就會自動亮起來。**
檔案還沒放進來時，卡片會乖乖顯示原本的靜態截圖（不會壞、不會有錯誤）。

## 需要錄哪些（檔名要完全一致）

| 檔名 | 對應作品 | 建議錄製內容（5–8 秒、無聲） |
|---|---|---|
| `text-to-sql.mp4` | 企業地端 Text-to-SQL 系統 | 在展示頁輸入一句自然語言問句 → SQL 出現 → 結果表格 |
| `travel-log.mp4` | 文青風格旅遊規劃 App | 翻頁動畫 + 切換一個紙張主題 |
| `pos-demo.mp4` | POS 進銷存系統 | 下一筆銷售單 → 庫存數字變動 → 報表/儀表板更新 |
| `java-fullstack.mp4` | Java 全端結訓專案 | 新增一筆資料的 CRUD 流程（列表即時更新） |

> 不想錄某一個就不要放那個檔，那張卡片維持靜態圖即可。
> 想換成 GIF 也行：把上面 `data/translations.js` 裡對應的 `video:` 副檔名改成 `.gif`，
> 並放 `xxx.gif` 進來，機制會自動改用「hover 換圖」模式（但 GIF 檔案通常比 mp4 大很多，**建議用 mp4**）。

## 錄製規格建議

- **長度**：5–8 秒，做成可無縫循環（loop）最好。
- **解析度**：1280×720（16:9）。卡片本來就是 16:9，比例對齊最好看。
- **無聲**：影片會被靜音播放（瀏覽器規定 autoplay 必須 muted）。
- **目標檔案大小**：每支 **< 1.5 MB**（越小載入越快）。

## 錄製工具

- **macOS**：QuickToTime（⌘⇧5）或 [Kap](https://getkap.co/)（可直接輸出 mp4）
- **Windows**：Xbox Game Bar（Win+G）或 [ScreenToGif](https://www.screentogif.com/)（也能存 mp4）
- **跨平台**：OBS Studio

## 用 ffmpeg 壓到夠小（重要）

錄完先用 ffmpeg 壓縮 + 去音軌，檔案會小一個量級：

```bash
# 壓成網頁用 mp4（H.264、靜音、720p、可線上串流）
ffmpeg -i 原始錄影.mov \
  -vf "scale=1280:-2,fps=24" \
  -an -c:v libx264 -crf 30 -preset veryslow \
  -movflags +faststart \
  text-to-sql.mp4
```

- `-crf` 越大檔案越小（28–32 之間找平衡，30 通常剛好）。
- `-movflags +faststart` 讓影片邊載邊播。
- `-an` 去掉音軌。

想再加一份 webm（更小、現代瀏覽器優先用）也可以，
但要的話跟我說，我把 `<source>` 改成同時提供 mp4 + webm。

## 放好之後

直接把檔案 commit 進這個資料夾、push 上去，GitHub Pages 部署後即生效。
不需要改任何程式碼。

---

### 小提醒：徽章顯示時機

卡片右上角的「▶ DEMO」徽章，預設是**影片成功載入過一次後才出現**（避免承諾一個還不存在的 demo）。
如果你想讓它「一放上去就一直顯示」，把 `css/style.css` 裡這段：

```css
.project-image.demo-ready .project-demo-badge { display: inline-flex; }
```

改成：

```css
.project-image[data-has-demo] .project-demo-badge { display: inline-flex; }
```
