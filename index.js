const formButton = document.querySelector('formButton')
const list = document.getElementById('movieList')

// HW1:
function changeHeader(text){
	const h = document.querySelector('h1')
	h.textContent = "The first header has been changed!"

	if(text){   // if there's input, change the header to that
		h.textContent = text
	} else {       // if there isn't, use the default message
		h.textContent = "The first header has been changed!"
	}
}

function changeSecondHeader(){
	const h = document.querySelector('h1.header2')
	h.textContent = "The second header has been changed!"
}

// HW3:
function addToList(){
	const name = document.createElement('span')
	const year = document.createElement('span')
	const item = document.createElement('li')
	let movieArray = []

	const movieEntry = {
		movieName: document.getElementById('form1').value,
		movieYear: document.getElementById('form2').value,
	}

	// debugging
	console.log("mName:" + movieEntry["movieName"])
	console.log("mYear:" + movieEntry["movieYear"])

	name.className = "movieName"
	name.textContent = movieEntry["movieName"]
	year.className = "movieYear"
	year.textContent = ` (${movieEntry["movieYear"]}) `
	item.className = "movie"
	item.id = movieEntry["movieName"]

	// array[movie name, movie title, favorite?]
	movieArray.push([movieEntry["movieName"], movieEntry["movieYear"], false])
	createMovieEntry(name, year, item)
}

function createMovieEntry(name, year, item){
	const deleteButton = document.createElement('button')
	deleteButton.className = "deleteButton"
	deleteButton.type = "delete"
	deleteButton.textContent = "X"
	//deleteButton.onclick = deleteEntry(name, array,item)

	const favoriteButton = document.createElement('button')
	favoriteButton.className = "favoriteButton"
	favoriteButton.type = "delete"
	favoriteButton.textContent = "\u2605" // black star

	item.appendChild(name)
	item.appendChild(year)
	item.appendChild(favoriteButton)
	item.appendChild(deleteButton)
	list.appendChild(item)
}

// add length to movie object, delete number vs. ID
function favoriteEntry(name){
	console.log("favorite entry" + name) // debugging
	// movieArray[2] = true
}

function deleteEntry(name, array){
	name = this.name

	console.log("delete entry" + name) // debugging
	console.log(this) // debugging

	const item = document.getElementById(name)
	//this.name
	console.log("delete!") // debugging
	const child = document.getElementById(name);
	item.removeChild(child);
}

list.addEventListener('click', deleteEntry)

/* TODO
 - Working delete button (utilizing array?)
 	- removes from array too
 - Favorites tag in array

 - TO CHECK:
 	- CSS for Favorites
 */