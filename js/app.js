const year = document.querySelector('.year')

year.innerText = getCurrentYear()


function getCurrentYear(){
    const date = new Date()
    return date.getFullYear();
}