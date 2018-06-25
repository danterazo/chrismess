const button = document.querySelector('button')

function changeHeader(){
    const h = document.querySelector('h1')
    h.textContent = "Hello!"
}

function changeHeader2(){
    const h2 = document.querySelector('h1.header2')
    h2.textContent = "This Header Has Been Changed"
}

function addHeader(){
    const h2 = document.querySelector('header2')
    h2.textContent = "This Header Has Been Changed"
}