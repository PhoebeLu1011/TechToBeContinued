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
│   ├── project-01-01.webp
│   ├── project-01-02.webp
│   ├── project-01-main-01.webp
│   └── project-01-main-02.webp
├── project-02/
└── ...
```

目前 `project-01` 內的檔名已被資料引用，請勿直接更名。若之後需要更名，也必須同步修改 `src/data/projects.json` 中對應的圖片路徑。


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
| `images` | `string[]` | 專題圖片路徑，順序即為頁面顯示順序 |

## 在 React 頁面使用

不要直接從 `projects.json` 讀取資料，應使用 `projects.ts`，它會將 JSON 中的圖片路徑轉換成 Vite 建置後的正確網址。

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