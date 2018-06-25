const button = document.querySelector('button')
//const form = document.querySelector('form.headerForm')

function changeHeader(){
    const h = document.querySelector('h1')
    h.textContent = "Hello!"
}

function changeSecondHeader(){
    const h = document.querySelector('h1.header2')
    h.textContent = "This Header Has Been Changed"
}

//form.onsubmit = formHeader()

function formHeader(text){
    const h = document.querySelector('h1')
    h.textContent = text
}