let listState = [];
const STATE_KEY = "todo-list";

function loadState() {
  const listState = localStorage.getItem(STATE_KEY);
  if (listState !== null) {
    return JSON.parse(listState);
  }
  return [];
}

function saveState(list) {
  localStorage.setItem(STATE_KEY, JSON.stringify(list));
}

function initList() {
  listState = loadState();
  const ul = document.getElementById("list");

  for (const item of listState) {
    const li = document.createElement("li");
    li.innerText = item.text;

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = deleteItem;
    li.appendChild(deleteBtn);

    li.classList.add("item");
    if (item.checked) {
      li.classList.add("checked");
    }
    li.onclick = checkItem;

    ul.appendChild(li);
  }
}
function addItem() {
  const ul = document.getElementById("list");
  const input = document.getElementById("input");
  const text = input.value;
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = text;

  newItem.onclick = checkItem;

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("delete");
  deleteBtn.onclick = deleteItem;

  newItem.appendChild(deleteBtn);

  listState.push({ text, checked: false });
  saveState(listState);

  input.value = "";
  ul.appendChild(newItem);
}

function checkItem() {
  const item = this;
  const parent = item.parentNode;
  const index = Array.from(parent.childNodes).indexOf(item);
  listState[index].checked = !listState[index].checked;

  item.classList.toggle("checked");
  saveState(listState);
}

function deleteItem(e) {
  const item = this.parentNode;
  const parent = item.parentNode;
  const index = Array.from(parent.children).indexOf(item);
  listState = listState.filter((_, i) => i !== index);
  parent.removeChild(item);
  saveState(listState);
  e.stopPropagation();
}
initList();

const addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", addItem);

const form = document.getElementById("input-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the page from refreshing
});
