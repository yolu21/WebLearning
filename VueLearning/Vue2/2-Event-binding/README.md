# Event Binding

This exercise will implement the functionality where the data changes upon clicking the arrow, covering the following three core Vue features: event binding, conditional rendering, and data rendering.

1. Event Binding: Click the arrow (class="arrow") to trigger data rotation.

   ```html
   v-on:click="functionName()"
   <!-- Simplified as: -->
   @click="functionName()"
   ```

- methods:
  - Used to define functions that perform actions or logic.
  - Used to handle user events or perform actions, such as changing data.
- computed:

  - Used to return processed data results.
  - Suitable for derived data that needs to be used multiple times and automatically caches the results to improve performance.

  ```javascript
  computed: {
  today() {
  return this.menu[this.index];
  }
  }
  ```

2. Conditional Rendering: Determines whether to display specific content based on a condition. Here, `v-if`is used.

- `v-if` will completely remove or add DOM elements, rather than just hiding them.

  ```html
  <a v-if="index > 0" class="arrow left"></a>
  ```

3. Data Rendering:

- Use double curly braces ({{ }}) to render text data.
- Use attribute binding (:href) to dynamically update HTML attributes.

  ```html
  <span class="number">{{ index + 1 }}</span>
  <span class="type">{{ today.type }}</span>
  <a :href="menu[index].link">{{ today.title }}</a>
  ```

---

# 事件綁定

這個練習將實現點擊箭頭時，資料會隨之改變，包含以下三個 Vue 的核心功能：事件綁定、條件渲染、資料渲染。

1. 事件綁定：點擊箭頭（class="arrow") 來觸發資料輪播

   ```html
   v-on:click="functionName()"
   <!-- 簡化為： -->
   @click="functionName()"
   ```

- methods：
  - 用來定義執行操作或邏輯的函數。
  - 用於處理用戶事件或執行動作，例如切換資料。
- computed：

  - 用於 return 經過處理的數據結果。
  - 適用於需要多次使用的派生數據，且會自動緩存結果以提升性能。

  ```javascript
  computed: {
  today() {
  return this.menu[this.index];
  }
  }
  ```

2. 條件渲染：根據條件決定是否顯示特定內容，這裡使用 `v-if` 來實現。

- `v-if`會完全移除或添加 DOM 節點，而不是僅僅隱藏。

      ```html
      <a v-if="index > 0" class="arrow left"></a>
      ```

  3.資料渲染

- 使用雙花括號（{{ }}）來渲染文字數據。
- 使用屬性綁定（:href）動態更新 HTML 屬性。

  ```html
  <span class="number">{{ index + 1 }}</span>
  <span class="type">{{ today.type }}</span>
  <a :href="menu[index].link">{{ today.title }}</a>
  ```
