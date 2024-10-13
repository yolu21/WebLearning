function addItem(){
    const ul = document.getElementById("list");
    const input = document.getElementById("input");
    const text = input.value;
    if(text === ""){
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

    input.value = "";
    ul.appendChild(newItem);
}

function checkItem(){
    const item = this;
    item.classList.toggle("checked");
}

function deleteItem(){
    const item = this.parentNode;
    const parent = item.parentNode;
    parent.removeChild(item);
}

const addBtn = document.getElementById("add-button");
addBtn.addEventListener("click", addItem);

const form = document.getElementById("input-wrapper");
form.addEventListener("submit",(e)=>{
    e.preventDefault(); // Prevents the page from refreshing

    
});
