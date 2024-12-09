### Next.js 靜態輸出技巧與注意事項 🚀

靜態網站生成（Static Export）是 Next.js 提供的一項功能，允許將網頁應用打包成靜態檔案，適合部署在任何靜態伺服器上。

👉 **GitHub 專案範例**：  
您可以直接查看這份開箱即用的範例專案：  
[GitHub - next-static-export-demo](https://github.com/todelusion/next-static-export-demo)

以下是靜態輸出中需要注意的幾個關鍵點：

---

### 1️⃣ 設定靜態導出 `output: "export"`

在 `next.config.js` 中加入以下設定，告訴 Next.js 使用靜態導出模式：

```javascript
// next.config.js
module.exports = {
  output: "export",
};
```

- **執行靜態導出**：只需執行 `next build`，無需額外執行 `next export`。

---

### 2️⃣ `assetPrefix` 的使用情境 🌐

在靜態網站中，資源路徑可能需要特殊處理，特別是在網站部署於子目錄下時。

#### 解法：使用環境變數切換資源路徑
- **開發模式**：設定 `assetPrefix: ""`，避免熱刷新失效。
- **生產模式**：設定 `assetPrefix: "./"`，以適應相對路徑需求，確保靜態資源正確載入。

```javascript
// next.config.js
module.exports = {
  assetPrefix: process.env.ENV_VAR === "production" ? "./" : "",
};
```

---

### 3️⃣ `/fonts/...` 路徑失效的情況與解法

在靜態輸出模式下，`public` 目錄中的文件若以絕對路徑（如 `/fonts/...`）引用，部署到子目錄時會無法正確載入。

#### 問題描述
網站部署在子目錄（如 `https://example.com/subpath/`）時：
- **錯誤路徑**：`/fonts/...` 被解析為 `https://example.com/fonts/...`。
- **正確路徑**：應為 `https://example.com/subpath/fonts/...`。

#### 解法：改用相對路徑
將 `/fonts/...` 改為相對路徑，例如 `../../../fonts/...`，確保資源基於實際文件位置正確載入。

---

### 4️⃣ 自動修改字型路徑 ✨

使用工具 `replace-in-file`，將輸出的 CSS 文件中引用的字型路徑自動修改為相對路徑。

#### 設定步驟
1. **新增 `config.js`**：配置替換邏輯。
2. **修改 `package.json`**：在 build 指令中執行替換操作。

#### 範例代碼

```javascript
// config.js
const replace = require("replace-in-file");

module.exports = {
  files: "./out/_next/static/css/*.css",
  from: ["/fonts/FakePearl-Regular.ttf"],
  to: ["../../../fonts/FakePearl-Regular.ttf"],
};
```

```json
// package.json
"scripts": {
  "build": "cross-env ENV_VAR=production next build && replace-in-file --configFile=config.js"
}
```

---

### 5️⃣ 靜態輸出後的文件結構補充 🗂️

靜態輸出後的文件結構如下：

```
out/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css  # 字型路徑已更新
│   └── ...
├── fonts/
│   ├── FakePearl-Regular.ttf
│   └── ...
```

在 `styles.css` 中，字型路徑更新為相對路徑：

```css
url('../../../fonts/FakePearl-Regular.ttf');
```

---

### 結論

1. **靜態導出**：執行 `next build` 即可完成靜態輸出。
2. **資源路徑處理**：使用 `assetPrefix` 配合環境變數設定，解決開發與生產的資源路徑問題。
3. **字型路徑自動化**：利用 `replace-in-file` 工具，將 CSS 文件中的字型路徑替換為相對路徑。
4. **部署於子目錄**：正確設定相對路徑，確保資源載入無誤。

透過以上技巧，無論部署於何處，靜態站點都能正確載入所有資源！✅

