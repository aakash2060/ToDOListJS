const inputBox = document.querySelector("#input-box");
const ListContainer = document.querySelector("#list-container");

//logic for adding todo's to the listcontainer
function addtolist() {
  if (inputBox.value === "") {
    alert("You must write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#215;";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveList();
}

// cross symbol in action
ListContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveList();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
});
displayList();
// saves the data in localstorage, so that the refreshing page doesn't reset our data
function saveList() {
  localStorage.setItem("data", ListContainer.innerHTML);
}
// displays all the list even if we close the browser
function displayList(){
    ListContainer.innerHTML = localStorage.getItem('data');
}
