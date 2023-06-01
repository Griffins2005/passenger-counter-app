let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}





//let name = 42
//let greeting  = "Hi, my name is "

//let myGreeting = greeting + name 

//console.log(myGreeting)

//let points = 4
//let bonusPoints = "10"

//let totalPoints = points + bonusPoints
  
//let welcomeEl = document.getElementById("welcome-el")

//let name = "Per Harald Borgen"
//let greeting = "Welcome back  "

//welcomeEl.innerText = greeting + name

//welcomeEl.innerText += "👋"