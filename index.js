const button = document.querySelector('button')
const form = document.querySelector('form')

function changeHeader(text){
    const h = document.querySelector('h1')
    h.textContent = "The first header has been changed!"

    if(text){
        h.textContent = text
    } else {
        h.textContent = "The first header has been changed!"
    }
}

function changeSecondHeader(){
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}