// Function to delete a note
function deleteNote(noteElement) {
    noteElement.remove();
    saveNotes();
}

// Function to edit a note
function editNote(noteElement) {
    const newText = prompt("Edit the note:", noteElement.textContent);
    if (newText !== null) {
        noteElement.textContent = newText;
        saveNotes();
    }
}

// Function to save notes to local storage
function saveNotes() {
    const notes = [];
    const noteElements = document.querySelectorAll(".note");
    noteElements.forEach((noteElement) => {
        notes.push(noteElement.textContent);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to load notes from local storage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((noteText) => {
        const noteList = document.getElementById("noteList");
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = noteText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteNote(noteElement);
        };

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editNote(noteElement);
        };

        noteElement.appendChild(deleteButton);
        noteElement.appendChild(editButton);

        noteList.appendChild(noteElement);
    });
}

// Call loadNotes when the app starts
loadNotes();

// Function to add a new note
function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const noteList = document.getElementById("noteList");
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.textContent = noteText;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            deleteNote(noteElement);
        };

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editNote(noteElement);
        };

        noteElement.appendChild(deleteButton);
        noteElement.appendChild(editButton);

        noteList.appendChild(noteElement);

        // Clear the input field
        noteInput.value = "";

        // Save the new note to local storage
        saveNotes();
    }
}
