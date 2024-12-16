//todo   1 TASK

const regExp = /^\d+$/

const containsOnlyDigits = (str) =>{
    if(str.match(regExp))return true
    else return false
}

console.log(containsOnlyDigits('1234'))
console.log(containsOnlyDigits('123df4'))

//todo     2 TASK

setInterval(() =>console.log("1 second has passed"), 1000)

//todo    3 TASK

const count = () =>{
    let i = 0
    const interval = setInterval(() =>{
        i++
        console.log(i)
        if(i===10) clearInterval(interval)
    }, 1000)

}
count()

// todo     4 TASK

const block = document.createElement("div")
document.body.appendChild(block)
block.style.border = "10px solid red"
block.style.height = "150px"
block.style.width = "150px"

block.onclick = () =>{
    if(block.classList.contains('color')) block.classList.remove('color')
    else block.classList.add('color')
}

//todo   5 TASK

const request = new XMLHttpRequest()
request.open("GET", "data.json");
request.setRequestHeader("Content-type", "application/json")
request.send()
request.onload = () => {
    console.log(request.response)
}