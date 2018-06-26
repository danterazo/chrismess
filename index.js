const form = document.querySelector('movieForm')
const formButton = document.querySelector('formButton')

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
    const l = document.getElementById('movieList')
    const name = document.createElement('span')
    const br = document.createElement('br')

    name.className = "movieName"
    name.textContent = movieName

    l.appendChild(name)
    addYearToList() // second function for "super mega bonus credit"
    l.appendChild(br)
  }

function addYearToList(){
    const movieYear = document.getElementById('form2').value
    const l = document.getElementById('movieList')
    const year = document.createElement('span')

    year.className = "movieYear"
    year.textContent = " (" + movieYear + ")"

    l.appendChild(year)
}