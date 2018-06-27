const form = document.querySelector('movieForm')
const formButton = document.querySelector('formButton')
const list = document.getElementById('movieList')

// HW1
function changeHeader(text) {
    const h = document.querySelector('h1')
    h.textContent = "The first header has been changed!"

    if (text) {   // if there's input, change the header to that
        h.textContent = text
    } else {       // if there isn't, use the default message
        h.textContent = "The first header has been changed!"
    }
}

function changeSecondHeader() {
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}

// HW2:
function addToList() {
    const movieName = document.getElementById('form1').value
    const name = document.createElement('span')
    const item = document.createElement('li')

    name.className = "movieName"
    name.textContent = movieName

    item.className = "movie"
    item.appendChild(name)
    addYearToList(item) // second function for "super mega bonus credit"
    list.appendChild(item)
}

function addYearToList(item){
    const movieYear = document.getElementById('form2').value
    const year = document.createElement('span')

    year.className = "movieYear"
    year.textContent = " (" + movieYear + ")"

    item.appendChild(year)
}