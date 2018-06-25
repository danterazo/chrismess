const button = document.querySelector('button')
//const form = document.querySelector('form.headerForm')
const formText = document.querySelector('headerText')

function changeHeader(){
    const h = document.querySelector('h1')
    h.textContent = "The first header has been changed!"
}

function changeSecondHeader(){
    const h = document.querySelector('h1.header2')
    h.textContent = "The second header has been changed!"
}


form.onsubmit = formHeader(formText)
//form.onsubmit = formHeader()
document.getElementById("h1").innerHTML="testing";

function formHeader(text){
    const h = document.querySelector('h1')
    h.textContent = JSON.stringify(text)
}