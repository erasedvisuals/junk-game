/* let ost = new Audio("./assets/audio/main-theme-edited.mp3")
        let main = document.getElementById("main")
        let btn = document.getElementById("btnstart")
        btn.addEventListener('click', function () {
            ost.play()
            btn.classList.add('d-none')
            
        }) 

<p class="text-white text-center p-2 fw-bold">CHOOSE YOUR CHARACTER</p>        


*/

let mainOST = new Audio('./DEMO/assets/audio/main-theme-edited.mp3')
let starter = document.getElementById("starter")
let start = document.getElementById("btn-start")
let logo = document.getElementById('logo')
let pgBtn = document.getElementById('pg-btn')
let tip = document.getElementById('tip')
let pgSelection = document.getElementById('pg-selection')
let backBtn = document.getElementById('btn-back')
let confirmBtn = document.getElementById('btn-confirm')
let credit = document.getElementById('credit')
//    INTRO
start.addEventListener('click', function () {
    mainOST.play()
    mainOST.loop=true
    starter.classList.add('d-none')
    setTimeout(() => {
        credit.classList.remove('d-none')
    }, 2000)
    setTimeout(() => {
        credit.classList.add('d-none')
    }, 4750)
    setTimeout(() => {
        logo.classList.remove('d-none')
    }, 8050)
    setTimeout(() => {
        pgBtn.classList.remove('d-none')
        pgBtn.classList.add('fade-in')
    }, 10750)
})
//   MAIN LOGIC
pgBtn.addEventListener('click', () => {
    pgBtn.classList.add('d-none')
    pgSelection.classList.remove('d-none')
    tip.classList.remove('d-none')
    

    backBtn.addEventListener('click', () => {
        pgBtn.classList.remove('d-none')
        pgSelection.classList.add('d-none')
        tip.classList.add('d-none')
    })
})

confirmBtn.addEventListener('click', ()=>{
    pgSelection.submit()
    
})