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
function addToList(movieName) {
    console.log("movie: " + movieName) //debugging

    const l = document.getElementById('movieList')
    const item = document.createElement('li')
    
    item.textContent = movieName
    l.appendChild(item)
  }