# Data Binding

In this project, three different methods were used to implement data binding and display the content:

1. Plain HTML and CSS
   This is the basic way of structuring and styling the page using static HTML and CSS. It doesn't support dynamic updates.

   ```html
   <div class="title">
     <img class="photo" src="photo.png" alt="my photo" />
     <h1>Vue2 Practice #1</h1>
   </div>
   ```

2. jQuery

   - With jQuery, data changes do not automatically update the page. You need to manually update the DOM when the data changes.

   ```html
   <div class="title">
     <img class="photo" src="" />
     <h1></h1>
   </div>
   ```

   ```javascript
   let data = {
     src: "photo.png",
     title: "Vue2 練習#1",
   };

   $(".title > h1").text(data.title);
   $(".photo").attr("src", data.src);
   ```

3. Vue 2

   - In Vue 2, data changes automatically update the page.
   - There are two ways to bind data in HTML, and the following is the most commonly used approach:

   ```html
   <div class="title">
     <!-- both of the following are correct -->
     <!-- <img class="photo" v-bind:src="src"> -->
     <!-- <h1 v-text="title"></h1> -->
     <img class="photo" :src="src" />
     <h1>{{title}}</h1>
   </div>
   ```

   ```javascript
   let data = {
     src: "photo.png",
     title: "Vue2 練習#1",
   };

   let vm = new Vue({
     el: "#app",
     data: data,
   });
   ```

---

# 資料綁定

在這個專案中，使用了三種不同的方法來實現資料綁定並呈現畫面：

1. 一般的 HTML 和 CSS

   ```html
   <div class="title">
     <img class="photo" src="photo.png" alt="my photo" />
     <h1>Vue2 練習#1</h1>
   </div>
   ```

2. jQuery

   - 修改資料不能自動更新到頁面上，要再把資料更新到頁面上

   ```html
   <div class="title">
     <img class="photo" src="" />
     <h1></h1>
   </div>
   ```

   ```javascript
   let data = {
     src: "photo.png",
     title: "Vue2 練習#1",
   };

   $(".title > h1").text(data.title);
   $(".photo").attr("src", data.src);
   ```

3. Vue 2

   - 修改資料可以自動更新到頁面上
   - 有兩種 html 寫法，常用的是下面

   ```html
   <div class="title">
     <!-- both of the following are correct -->
     <!-- <img class="photo" v-bind:src="src"> -->
     <!-- <h1 v-text="title"></h1> -->
     <img class="photo" :src="src" />
     <h1>{{title}}</h1>
   </div>
   ```

   ```javascript
   let data = {
     src: "photo.png",
     title: "Vue2 練習#1",
   };

   let vm = new Vue({
     el: "#app",
     data: data,
   });
   ```
