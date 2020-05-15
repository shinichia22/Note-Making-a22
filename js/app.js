//JavaScript code as described/written in the video

console.log('Welcome to notes app. This is app.js');
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
	let addTxt = document.getElementById('addTxt');
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	notesObj.push(addTxt.value);
	localStorage.setItem('notes', JSON.stringify(notesObj));
	addTxt.value = '';
	//   console.log(notesObj);
	showNotes();
});

// Function to show elements from localStorage
function showNotes() {
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	let html = '';
	notesObj.forEach(function (element, index) {
		html += `
		<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
				<h5 class="card-title">Note ${index + 1}</h5>
				<p class="card-text"> ${element}</p>
				<button id ="${index}" onclick = deleteNote(this.id) class="btn btn-primary">Delete Note</button>
      </div>
	</div>`;
	});
	let notesElm = document.getElementById('notes');
	if (notesObj.length != 0) {
		notesElm.innerHTML = html;
	} else {
		notesElm.innerHTML = 'Create you daily notes to show here...';
	}
}

// ducntion to delete the note

function deleteNote(index) {
	let notes = localStorage.getItem('notes');
	if (notes == null) {
		notesObj = [];
	} else {
		notesObj = JSON.parse(notes);
	}
	notesObj.splice(index, 1); // (detenumber , numer of deletion)
	localStorage.setItem('notes', JSON.stringify(notesObj)); // after writing this code jthis will update the new deleted set item
	showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
	let inputval = search.value.toLowerCase(); // This will give you the values in search bar
	let noteCard = document.getElementsByClassName('noteCard');
	Array.from(noteCard).forEach(function (element) {
		let cardText = element.getElementsByTagName('p')[0].innerText; // this will give only text of a HTML. if inneHTML then it wil give the htmll element alson if present with in the anothe html paragaraph.
		if (cardText.includes(inputval)) {
			element.style.display = 'block';
		} else {
			element.style.display = 'none';
		}
	});
});
