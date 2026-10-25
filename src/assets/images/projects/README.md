# 專題資料與圖片使用說明

本資料夾存放畢業專題使用的圖片。專題文字資料位於：

```text
src/data/projects.json
```

圖片網址由以下檔案統一解析：

```text
src/data/projects.ts
```


## 資料夾結構

每組專題使用獨立資料夾，資料夾名稱必須和 `projects.json` 內的 `id` 相同。

```text
src/assets/images/projects/
├── project-01/
│   ├── project-01-logo-01.png
│   ├── project-01-content-01.png
│   └── project-01-content-02.JPG
├── project-02/
└── ...
```

詳情頁圖片會依檔名自動載入，支援 `.png`、`.PNG`、`.jpg`、`.JPG`：

- 第一張優先使用 `project-組別-logo-01`。
- 後續圖片依序使用 `project-組別-content-01`、`content-02` 等檔案。
- 沒有 Logo 時，第一張會直接使用 `content-01`。
- 沒有符合的 Logo 或 Content 圖片時，顯示 `COMING SOON`。

例如 `project-01` 資料夾中的圖片檔名應為 `project-01-logo-01.png`、`project-01-content-01.png`。


## JSON 欄位說明

| 欄位 | 類型 | 說明 |
| --- | --- | --- |
| `id` | `string` | 專題唯一代號，也用作圖片資料夾名稱 |
| `order` | `number` | 頁面顯示順序 |
| `title` | `string` | 專題名稱 |
| `members` | `array` | 組員學號與姓名 |
| `advisors` | `string[]` | 指導老師姓名 |
| `description` | `string` | 專題介紹 |
| `showPhotoArea` | `boolean` | 是否顯示照片區塊 |
| `projecturl` | `string` | 專題外部連結；沒有時保留空字串 |
| `images` | `string[]` | 舊圖片路徑欄位；詳情頁改依組別資料夾中的 Logo 與 Content 檔名自動載入 |

## 在 React 頁面使用

不要直接從 `projects.json` 讀取資料，應使用 `projects.ts`。它會依照檔名規則載入圖片並轉換成 Vite 建置後的正確網址。

```tsx
import projects from '../../data/projects';

export default function Works() {
  return (
    <main>
      {projects.map((project) => (
        <article key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.images[0]} alt={project.title} />
        </article>
      ))}
    </main>
  );
}
```

如果只需要單一專題：

```ts
import projects from '../../data/projects';

const project = projects.find(({ id }) => id === 'project-01');
```