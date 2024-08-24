const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
    addEventListenersToNotes();
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function addEventListenersToNotes() {
    let notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
        note.onkeyup = function() {
            updateStorage();
        }
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    img.className = "delete-img";
    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    addEventListenersToNotes();
    updateStorage();
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG" && e.target.classList.contains("delete-img")) {
        e.target.parentElement.remove();
        updateStorage();
    }
});

showNotes();
