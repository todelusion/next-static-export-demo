
### Next.js 靜態輸出技巧與注意事項 🚀

靜態網站生成（Static Export）是 Next.js 提供的一項功能，可以將應用打包成靜態文件，適合部署在任何靜態服務器上。可以搭配

以下是靜態輸出中需要注意的幾個關鍵點：

---

### 1️⃣ 設定靜態導出 `output: "export"`

在 `next.config.js` 中加入以下設定，告訴 Next.js 使用靜態導出模式：

```js
module.exports = {
  output: "export",
};
```

- **靜態導出會自動在執行 `next build` 時完成**，無需再執行 `next export`。

---

### 2️⃣ assetPrefix 的使用情境 🌐

靜態網站中，資源路徑可能需要特殊處理，例如應用在相對路徑下運行時。`assetPrefix` 的設定可以解決以下問題：

#### 使用場景：
**使用環境變數切換 `./` 或空字串**  
在開發模式下設定 `assetPrefix: ""`，以避免熱刷新失效；生產模式下設定 `assetPrefix: "./"`，以適應相對路徑需求：

```js
module.exports = {
  assetPrefix: process.env.ENV_VAR === "production" ? "./" : "",
};
```

- 開發模式中，使用空字串 `""`，以確保熱刷新功能正常工作。
- 生產模式中，設定相對路徑 `"./"`，確保靜態資源可以正確載入，特別是在網站部署於子目錄下時。

---

### 3️⃣ 靜態輸出中 `/fonts/...` 路徑失效的情況以及使用 `../../../fonts/...` 的必要性 🌐

在 Next.js 靜態輸出模式下，資源文件的引用路徑可能會因為部署環境的配置而失效，特別是當網站被部署在非根目錄下時。以下是需要從絕對路徑 `/fonts/...` 改為相對路徑 `../../../fonts/...` 的具體情況與原因。

#### 當 `/fonts/...` 路徑失效的情況
**部署在子路徑時：**  
如果靜態網站部署在一個子路徑（如 `https://example.com/subpath/`），絕對路徑 `/fonts/...` 會被解析為 `https://example.com/fonts/...`，而不是 `https://example.com/subpath/fonts/...`，導致資源載入失敗。

- **文件樹結構**：
  ```
  /subpath/
  ├── index.html
  ├── fonts/
  │   ├── FakePearl-Regular.ttf
  │   └── ...
  ├── _next/
  │   ├── static/
  │   │   ├── css/
  │   │   │   └── styles.css
  ```
- **錯誤的引用路徑**（靜態輸出默認）：
  ```css
  url('/fonts/FakePearl-Regular.ttf');
  ```
  被解釋為：`https://example.com/fonts/FakePearl-Regular.ttf`（文件不存在）。

- **正確的引用路徑**（需要手動修改）：
  ```css
  url('../../../fonts/FakePearl-Regular.ttf');
  ```
  被解釋為：`https://example.com/subpath/fonts/FakePearl-Regular.ttf`。

#### 使用相對路徑的必要性
相對路徑（如 `../../../fonts/FakePearl-Regular.ttf`）可以確保資源路徑基於當前文件的實際位置，而不是依賴於部署根目錄的配置。這在以下情況下尤為重要：

1. **靜態輸出被部署在子目錄**  
   - 部署路徑如：`https://example.com/subpath/`。
   - 使用相對路徑 `../../../fonts/...` 能正確定位 `fonts` 資料夾。

2. **CDN 或文件托管服務限制**  
   - 無法使用根目錄 `/` 作為資源載入起點。
   - 必須依靠文件相對路徑來找到靜態文件。

---

### 4️⃣ 本地字型存放於 `public/fonts` 下的解決方案 ✨

在導出靜態站點時，Next.js 的 CSS 文件會直接引用靜態文件目錄下的絕對路徑（如 `/fonts/FakePearl-Regular.ttf`），這樣在相對路徑運行時會無法載入字型。

#### 解決方案：
使用 `replace-in-file` 工具，將 CSS 文件中引用的字型路徑改為相對路徑。

#### 原理解析：
1. 修改 `out/_next/static/css/*.css` 文件中的字型路徑。
2. 將 CSS 文件中 `from` 路徑（如 `/fonts/FakePearl-Regular.ttf`）替換為相對路徑 `../../../fonts/FakePearl-Regular.ttf`，使其匹配靜態輸出後的文件結構。

##### `config.js`
```js
const replace = require("replace-in-file");

module.exports = {
  files: "./out/_next/static/css/*.css", // 指定 CSS 文件位置
  from: [
    "/fonts/FakePearl-ExtraLight.ttf",
    "/fonts/FakePearl-Light.ttf",
    "/fonts/FakePearl-Regular.ttf",
    "/fonts/FakePearl-Medium.ttf",
    "/fonts/FakePearl-SemiBold.ttf",
  ], // 原始路徑
  to: [
    "../../../fonts/FakePearl-ExtraLight.ttf",
    "../../../fonts/FakePearl-Light.ttf",
    "../../../fonts/FakePearl-Regular.ttf",
    "../../../fonts/FakePearl-Medium.ttf",
    "../../../fonts/FakePearl-SemiBold.ttf",
  ], // 修改後的相對路徑
};
```

##### 新增到 `package.json` 的執行指令
```json
"scripts": {
  "build": "cross-env ENV_VAR=production next build && replace-in-file --configFile=config.js"
}
```

---

### 5️⃣ 文件結構補充 🗂️

靜態輸出後，文件結構如下：
```
out/
├── _next/
│   ├── static/
│   │   ├── css/
│   │   │   └── 2c4a54a465a5927b.css  # 字型路徑已更新
│   └── ...
├── fonts/
│   ├── FakePearl-Regular.ttf
│   └── ...
```

在 `_next/static/css/*.css` 文件中，字型的路徑被替換為：
```css
url('../../../fonts/FakePearl-Regular.ttf');
```

---

### 結論

1. **靜態輸出**：`next build` 即可完成靜態輸出，無需額外執行 `next export`。
2. **資源路徑**：使用 `assetPrefix` 配合環境變數解決開發與生產的資源路徑問題，避免熱刷新失效。
3. **字型引用**：通過 `replace-in-file` 替換 CSS 文件中字型路徑，將絕對路徑改為相對路徑，確保靜態站點能正確載入資源。
4. **路徑失效情況**：當網站部署於子路徑時，必須使用相對路徑來確保資源正確引用。

透過這些技巧，無論網站部署在哪個路徑，字型文件都能正確地被引用和載入！✅