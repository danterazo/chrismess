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

// HW2:
function addToList(item1, item2){
    const list = document.getElementById('movieList')
    const toAdd = item1 + " " + item2

    //debugging:
    console.log("item1: " + item1)
    console.log("item2: " + item2)
    console.log("toAdd: " + toAdd)

	list.appendChild(toAdd)
}

function changeSecondHeader() {
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}