const form = document.querySelector('form#movieForm')

// HW1, deprecated
function changeHeader(text) {
    const h = document.querySelector('h1')
    h.textContent = "The first header has been changed!"

    if (text) {   // if there's input, change the header to that
        h.textContent = text
    } else {       // if there isn't, use the default message
        h.textContent = "The first header has been changed!"
    }
}

// HW2:
function addToList(ev) {
    ev.preventDefault()
    const f = ev.target
  
    const movieName = f.movieName.value
    const item = document.createElement('li')
    item.textContent = movieName
  
    const list = document.querySelector('#movieList')
    list.appendChild(item)
  
    f.reset()
  }

function changeSecondHeader() {
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}

form.addEventListener('submit', addToList)