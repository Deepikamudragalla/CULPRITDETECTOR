
showNotes();
//if user adds a note about criminal, add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("deepikanotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("deepikanotes", JSON.stringify(notesObj));
    addTxt.value = "";
    //console.log(notesObj);
    showNotes();

});

// Function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("deepikanotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>

            </div>
            `;
    });
    let notesElm = document.getElementById('deepikanotes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `No Notes Yet! Add something.`
    }
}


//Function to delete a note
function deleteNote(index) {
    // console.log('I am deleting', index);

    let notes = localStorage.getItem("deepikanotes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("deepikanotes", JSON.stringify(notesObj));
    showNotes();
}
// function to search a note
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase()
    //console.log('Input event fired!',inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        //console.log(cardTxt)
    })

    //Function to logout
    $("#btn-logout").click(function () {
        firebase.auth().signOut();
    });

})




