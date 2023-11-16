const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const openCookie = document.querySelector("#img1")

openCookie.addEventListener("click", Message)
btnReset.addEventListener("click", Message)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')){
      Message()
  } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
    Message()
      }
  }
)

function Message() {
  toggleScreen()
  let randomNumber = Math.round(Math.random() * 2)

  switch(randomNumber) {
    case 0: screen2.querySelector("p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
    break
    case 1: screen2.querySelector("p").innerText = "Nem todos os dias são bons, mas há algo bom em cada dia."
  
    }
}
  
function toggleScreen() {
  event.preventDefault()
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}