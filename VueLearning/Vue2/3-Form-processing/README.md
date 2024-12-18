# Form processing - Two-way

This exercise implements automatic data updates when the user interacts with the form, and other parts of the page using the data will refresh automatically.

- Two-way data binding (`v-model`):
  - Synchronizes the form input values (such as name, gender, age, favorite, etc.) with the data in the Vue instance.
- If there are multiple options, they should be wrapped in an array.
  ```javascript
  favorite: ["coding", "reading", "wine"];
  ```

---

# 表單處理 - 雙向綁定

這個練習實現使用者對表單進行操作時，資料會自動更新，並且頁面上其他使用該資料的部分也會自動刷新。

- 雙向數據綁定（`v-model`）：
  - 將表單的輸入值（如姓名、性別、年齡、興趣等）與 Vue 實例中的資料同步。
- 如果有多個選項要寫成`陣列`包起來
  ```javascript
  favorite: ["打扣", "看書", "喝酒"];
  ```
