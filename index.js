const button = document.querySelector('button')
const form = document.querySelector('headerForm')
const formButton = document.querySelector('formButton')

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
function addToList(text){
    const list = document.querySelector('movies')
	list.appendChild(item)
}

function changeSecondHeader() {
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}