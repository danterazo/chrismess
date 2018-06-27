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

	const movieEntry = {
		movieName: document.getElementById('form1').value,
		movieYear: document.getElementById('form2').value,
	}

	console.log("mName:" + movieEntry["movieName"])
	console.log("mYear:" + movieEntry["movieYear"])

	name.className = "movieName"
	name.textContent = movieEntry["movieName"]
	year.className = "movieYear"
	year.textContent = ` (${movieEntry["movieYear"]})`
	item.className = "movie"

	item.appendChild(name)
	item.appendChild(year)
	list.appendChild(item)
}
