const inputBox = document.getElementById("input-box")
const inputContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value == '') {
        alert("you must write something")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        inputContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

inputContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", inputContainer.innerHTML);
}
function showTask(){
    inputContainer.innerHTML = localStorage.getItem("data");  
}
showTask();

