# Tech to Be Continued

國立臺灣師範大學科技應用與人力資源發展學系 116 級畢業專題成果展覽網站。

## 專案技術

- React 19
- TypeScript 6
- Vite 8
- React Router
- Motion
- ESLint

## 開始使用

### 環境需求

- Node.js 20 或更新版本
- npm

### 安裝套件

在專案根目錄執行：

```bash
npm install
```

### 啟動開發環境

```bash
npm run dev
```

終端機會顯示本機預覽網址，通常是：

```text
http://localhost:5173
```



## 頁面與路由

路由統一設定於 `src/App.tsx`。

| 網址 | 頁面 | 程式位置 |
| --- | --- | --- |
| `/` | 首頁 | `src/pages/Home` |
| `/works` | 作品總覽 | `src/pages/Works` |
| `/exhibition` | 展場資訊 | `src/pages/Exhibition` |
| `/news` | 最新消息 | `src/pages/News` |
| `/about` | 關於我們 | `src/pages/About` |
| `/qa` | 常見問題 | `src/pages/QA` |


## 專案結構

```text
TechToBeContinued/
├── public/
│   ├── favicon-tech.png
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── century-gothic/
│   │   └── images/
│   │       ├── backgrounds/
│   │       ├── branding/
│   │       ├── decorations/
│   │       ├── projects/
│   │       └── titles/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   ├── data/
│   │   ├── projects.json
│   │   └── projects.ts
│   ├── pages/
│   │   ├── About/
│   │   ├── Exhibition/
│   │   ├── Home/
│   │   ├── News/
│   │   ├── QA/
│   │   └── Works/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## 共用元件

### Navbar

位置：`src/components/Navbar.tsx`

- 全站共用導覽列。
- 桌機顯示水平導覽。
- 響應式尺寸切換成 Hamburger 選單。
- 向下捲動時隱藏，向上捲動時重新顯示(位置：`src/components/ScrollToTop.tsx`)

### Footer

位置：`src/components/Footer.tsx`

- 由 `src/App.tsx` 統一放置在所有頁面下方。
- 個別頁面不需要再次 import 或渲染 Footer。


## 素材管理

所有需要由 React 或 CSS 引用的素材都放在 `src/assets`

### 字體

```text
src/assets/fonts/century-gothic/
```

全域字體定義於 `src/index.css`：

- 英文優先使用 Century Gothic。
- 中文使用全域中文字體 fallback (這邊要更新字體)
- 頁面元件原則上不應重複宣告全站字體。

### 圖片分類

| 資料夾 | 用途 |
| --- | --- |
| `backgrounds` | 背景圖片 |
| `branding` | Logo、展覽識別與文字標誌 |
| `decorations` | 箭頭、星芒及其他裝飾素材 |
| `projects` | 各組專題作品圖片 |
| `titles` | 頁面標題圖 |


## 專題資料與圖片

專題文字資料位於：

```text
src/data/projects.json
```

圖片網址解析器位於：

```text
src/data/projects.ts
```

React 頁面應從 `projects.ts` 讀取資料：

```tsx
import projects from '../../data/projects';
```

完整的圖片放置規則、JSON 欄位說明與新增專題步驟，請閱讀：

### [專題資料與圖片使用說明](src/assets/images/projects/README.md)

## FQA 資料

FQA 內容位於：

```text
src/pages/QA/questions.json
```

頁面會依照 JSON 陣列自動產生題號和問答卡片。有幾筆資料就會顯示幾個項目，不需要修改 `index.tsx`。

資料格式：

```json
[
  {
    "id": "question-1",
    "question": "問題內容",
    "answers": [
      "回答第一段",
      "回答第二段"
    ]
  }
]
```

## 樣式規則

- 全域字體、背景色和基礎 reset 放在 `src/index.css`。
- 共用元件 放在 `src/components`。
- 優先使用現有 CSS variables、共用元件和素材。
- 動畫應支援 `prefers-reduced-motion`，避免造成無法關閉的持續動態效果。
