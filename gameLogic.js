//              NOTES
/*
        SFX FUNCTION FOR ATTACK
btnAtt.addEventListener('click', function(){
    sfxSteps.play()
    sfxHit.volume = 1

    setTimeout(()=>{
        sfxHit.play()
        document.getElementById('opponent').classList.add('hurt')
    }, 1080)

    document.getElementById('opponent').classList.remove('hurt')
    document.getElementById('player').classList.add('att')

    setTimeout(()=>{
        document.getElementById('player').classList.remove('att')
    },1510)
})
*/

/*
        PG TYPE OBJECT
    
    {
        id: 0,
        name:"",
        src: "assetPath - no .gif", //without file extenction, to make sure whe can add "-end" to all opponents
        orientation:"-end"
        hp: 100,
        hp-max: 150,
        mana:
        mana-max:
        strenght: function that returns a number,
        items: [{},{},{}],
        skills: [{},{},{}],
        arena: "arenaClassName"
        theme: "audioSource"
        
    }

        ITEM TYPE OBJECT
        These are one-use only. You can have more than 1 item of the same type.
    
    {
        ico: "icoPath",
        name: "Medikit"
        strenght: function that returns a number,
        role: 0 -> ("Heal"), 1 -> ("Attack"),
        animation: "animationClassName"
    }

        SKILL TYPE OBJECT
    
    {
        ico: "icoPath",
        name: "Fireball"
        strenght: function that return a number,
        role: 0 -> ("Heal"), 1 -> ("Attack"),
        animation: "animationClassName"
    }

*/
/*-------------------------------------------------
|        DEFINING STATISTICS AND                   |
|            OBJECTS BUILDING                      |
---------------------------------------------------*/
function exVal(minValue, maxValue) {
    // Function that extract a number between minValue(included) and MaxValue(included). 
    return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}

const itemsList = [
    //0
    {
        ico: "DEMO/assets/img/ico/medical.png",
        name: "Medikit",
        strenght: () => { return 90 },
        role: 0,
        animation: "animationClassName"
    },
    //1
    {
        ico: "DEMO/assets/img/ico/drugs.png",
        name: "Pills",
        strenght: () => { return 40 },
        role: 0,
        animation: "animationClassName"
    },
    //2
    {
        ico: "DEMO/assets/img/ico/molotov-cocktail.png",
        name: "Molotov",
        strenght: () => { return 100 },
        role: 1,
        animation: "animationClassName"
    },
    //3
    {
        ico: "DEMO/assets/img/ico/gun.png",
        name: "One-bullet gun",
        strenght: () => { return 70 },
        role: 1,
        animation: "animationClassName"
    },
    //4
    {
        ico: "DEMO/assets/img/ico/prototype.png",
        name: "Prototype Gun",
        strenght: () => { return exVal(30, 120) },
        role: 1,
        animation: "animationClassName"
    },
    //5
    {
        ico: "DEMO/assets/img/ico/corpo-drug.png",
        name: "Experimental Corpo Drug",
        strenght: () => { return exVal(60, 110) },
        role: exVal(0, 1),
        animation: "animationClassNAme"
    },
    //6
    {
        ico: "DEMO/assets/img/ico/beer.png",
        name: "Beer",
        strenght: () => { return 50 },
        role: 0,
        animation: "animationClassNAme"
    }


]

const PGList = [
    {
        id: 0,
        name: "Nova Blackthorn",
        src: "DEMO/assets/img/characters/neon-female-warrior",
        orientation: "-end",
        hp: 150,
        hpMax: 150,
        mana: 390,
        manaMax: 390,
        strenght: () => { return exVal(48, 62) },
        items: [itemsList[0], itemsList[0], itemsList[4]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Katana Slash",
                strenght: () => { return exVal(70, 99) },
                cost: 55,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Quantum Blade",
                strenght: () => { return exVal(50, 250) },
                cost: 140,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/software-update.png",
                name: "Software Update",
                strenght: () => { return exVal(20, 40) },
                cost: 20,
                role: 0,
                animation: "animationClassName"
            }],
        arena: "arena-corpoBuilding",
        theme: "DEMO/assets/audio/corpoBuilding-theme.mp3"
    },
    {
        id: 1,
        name: "Scarlet Blackthorn",
        src: "DEMO/assets/img/characters/death-angel",
        orientation: "-end",
        hp: 190,
        hpMax: 190,
        mana: 120,
        manaMax: 120,
        strenght: () => { return exVal(52, 69) },
        items: [itemsList[5], itemsList[5], itemsList[5], itemsList[5]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/scythe.png",
                name: "Scythe Slash",
                strenght: () => { return exVal(70, 99) },
                cost: 55,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Quantum Blade",
                strenght: () => { return exVal(50, 250) },
                cost: 140,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/blood.png",
                name: "Pray",
                strenght: () => { return exVal(10, 40) },
                cost: 20,
                role: 0,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/blood-projectile.png",
                name: "Blood Projectile",
                strenght: () => { return exVal(70, 80) },
                cost: 50,
                role: 1,
                animation: "animationClassName"
            },
        ],
        arena: "arena-foggyGasStation",
        theme: "DEMO/assets/audio/foggyGasStation-theme.mp3"
    },
    {
        id: 2,
        name: "The Hunter",
        src: "DEMO/assets/img/characters/hunter",
        orientation: "-end",
        hp: 250,
        hpMax: 250,
        mana: 120,
        manaMax: 120,
        strenght: () => { return exVal(25, 89) },
        items: [itemsList[0], itemsList[0], itemsList[1], itemsList[1], itemsList[1]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/contract.png",
                name: "Contract Execution",
                strenght: () => { return exVal(80, 81) },
                cost: 50,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/blackmarket.png",
                name: "Black Market drug",
                strenght: () => { return exVal(80, 120) },
                cost: 40,
                role: 0,
                animation: "animationClassName"
            }
        ],
        arena: "arena-industrialRooftop",
        //theme: new Audio("DEMO/assets/audio/industrialRooftop-theme.mp3")
    },
    {
        id: 3,
        name: "Puff Daddy-o",
        src: "DEMO/assets/img/characters/smoking-guy",
        orientation: "-end",
        hp: 300,
        hpMax: 300,
        mana: 80,
        manaMax: 80,
        strenght: () => { return exVal(70, 89) },
        items: [itemsList[6], itemsList[6], itemsList[6], itemsList[6], itemsList[6]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/blackmarket.png",
                name: "Black Market drug",
                strenght: () => { return exVal(80, 120) },
                cost: 40,
                role: 0,
                animation: "animationClassName"
            }
        ],
        arena: "arena-corpoStreet",
        theme: "DEMO/assets/audio/corpoStreet-theme.mp3"
    },
    {
        id: 4,
        name: "Aria Bluesteel",
        src: "DEMO/assets/img/characters/robo-arm-girl",
        orientation: "-end",
        hp: 280,
        hpMax: 280,
        mana: 160,
        manaMax: 160,
        strenght: () => { return exVal(70, 89) },
        items: [itemsList[0], itemsList[0], itemsList[1], itemsList[1], itemsList[4]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/prosthetic.png",
                name: "Cyber-arm Punch",
                strenght: () => { return exVal(100, 110) },
                cost: 60,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/laser.png",
                name: "Cyber-arm Shot",
                strenght: () => { return exVal(120, 160) },
                cost: 100,
                role: 1,
                animation: "animationClassName"
            }
        ],
        arena: "arena-nightStreetfood",
        theme: "DEMO/assets/audio/nightStreetfood-theme.mp3"
    },
    {
        id: 5,
        name: "Neon Nightwatcher",
        src: "DEMO/assets/img/characters/cyberskater",
        orientation: "-end",
        hp: 350,
        hpMax: 350,
        mana: 80,
        manaMax: 80,
        strenght: () => { return exVal(55, 72) },
        items: [itemsList[4], itemsList[4], itemsList[1], itemsList[1]],
        skills: [
            {
                ico: "DEMO/assets/img/ico/hoverboard.png",
                name: "Hollie Slash",
                strenght: () => { return exVal(89, 99) },
                cost: 40,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/patrollin.png",
                name: "Patrollin' routine",
                strenght: () => { return exVal(111, 122) },
                cost: 60,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "DEMO/assets/img/ico/food-ration.png",
                name: "NCPD Ration",
                strenght: () => { return 60 },
                cost: 20,
                role: 0,
                animation: "animationClassName"
            }

        ],
        arena: "arena-vhsShop",
        theme: "DEMO/assets/audio/vhsShop-theme.mp3"
    },
    {
        id: 6,
        name: "Ruin",
        src: "DEMO/assets/img/characters/EVA-demon",
        orientation: "",
        hp: 700,
        hpMax: 700,
        mana: 250,
        manaMax: 250,
        strenght: () => { return exVal(70, 90) },
        items: [],
        skills: [
            {
                ico: "icoPath",
                name: "Laser",
                strenght: () => { return exVal(100, 150) },
                cost: 80,
                role: 1,
                animation: "animationClassName"
            },
            {
                ico: "icoPath",
                name: "Overclock",
                strenght: () => { return exVal(111, 122) },
                cost: 150,
                role: 0,
                animation: "animationClassName"
            }
        ],
        arena: "arena-apocalypse",
        theme: "DEMO/assets/audio/apocalypse-theme.mp3"
    },

]



/*---------------------------------------------
|            VARIABLE DECLARATION             |  
----------------------------------------------*/

// Creating a copy of the main list of PGs
let allOpponents = [...PGList]

// Searchs and defines the player PG and removes it from the list of the opponent's PG
//let iP = parseInt(new URLSearchParams(window.location.search).get('pg-selection'))
//                           (iP, iP)[0]
let player = allOpponents.splice(1, 1)[0]

// HTML elements to build scenarios
//         HEADING
let heading = document.getElementsByClassName('heading')
/*  [0]: span #curr-level
    [1]: p    #msg
    [2]: span #player-name
    [3]: span #opponent-name
*/

//          ARENA
let arena = document.getElementById('arena')
//          Stats
let statsWrapper = document.getElementById('stats-wrapper')
let stats = document.getElementsByClassName('stats')
/*  [0]: span #player-hp
    [1]: span #player-hp-tot
    [2]: div #hp-bar-p
    [3]: span #opponent-hp
    [4]: span #opponent-hp-tot
    [5]: div #hp-bar-opp
*/

//         Char-section
let charSection = document.getElementById('char-section')
let pHTML = document.getElementById('player')
let oppHTML = document.getElementById('opponent')
/*              HTML String to inset
    <img class="pg" src="./assets/img/characters/hunter.gif" alt="player">
    <img class="pg" src="assets/img/characters/neon-female-warrior-end.gif" alt="opponent">
*/

//          ACTION BUTTONS
let btnAtt = document.getElementsByClassName('btn-att')
let btnSkill = document.getElementsByClassName('btn-skill')
let btnItem = document.getElementsByClassName('btn-item')
let btnRun = document.getElementsByClassName('btn-run')

/*              HTMLitem to inset
        ''''''''''''''''''''''''''''
*/

/*              HTMLskill to inset
        '''''''''''''''''''''''''''''
*/

// Level counter
let lvl = 0



/*--------------------------------------
|           FUNCTIONS                  |
----------------------------------------*/
//      Building Functions
//TODO:
function buildItems(p) {
    // add the HTMLitem element to the Items Modal
}
//TODO:
function buildSkills(p) {
    // add the HTMLskill element to the Skills Modal
}
//TODO:
function buildArena(p, o) {
    // add the arenaClassName to #arena and
    // innest the updated <img> HTML
}
//TODO:
function buildHeading(p, o) {
    // update the heading with the VS msg:
    // set the current lvl, playername and oppName

}
function buildScenario(p, o) {
    buildHeading(p, o)
    buildArena(p, o)
    new Audio(o.theme).play()
    ableBtns()
}
function resetScenario(){
    arena.classList.remove('arena-interlude-0')
    arena.classList.remove('arena-interlude-1')
    heading[1].textContent = 'VS'
}

//      Utility Functions
function disableBtns(){
    btnAtt.disabled = true
    btnSkill.disabled = true
    btnItem.disabled = true
    btnRun.disabled = true
}
function ableBtns(){
    btnAtt.disabled = false
    btnSkill.disabled = false
    btnItem.disabled = false
    btnRun.disabled = false
}

//      Animation Functions
function hide(){
    // function to add th classe hide to the elements on th screen
}
function interlude(){
    let arenaQuery = ['arena-interlude-0','arena-interlude-1', 'GOING TO DESTINATION...', 'MUST BE SOMEWHERE AROUND HERE...', 'I WILL FIND YOU...']
    disableBtns()
    hide()
    arena.classList.add(arenaQuery[exVal(0,1)])
    heading[1].textContent = arenaQuery[exVal(2,4)]
}
function endGameScreen(){

}
function gameOverScreen(){

}

//      Game Logic Functions
function checkEndLvl(p, o) {
    // dovrà controllare se ci sono condizioni di fine
    // ovvero dovrà tornare true se si ha vinto o perso
}
function statsRecovery(p) {
    p.hp = p.hpMax
    p.mana = p.manaMax
}
function action(){
    // main logic
}




/*--------------------------------------
|                MAIN                  |
----------------------------------------*/


// Qui l'action è la stessa solo che poi bisogna disabilitare il btn
buildItems(player)
let btnItemList = document.getElementsByClassName('btn-item-action')

buildSkills(player)
let btnSkillList = document.getElementsByClassName('btn-skill-action')

let winLvl = false
let lose = false
let i = 0
//  Potremmo metterli nella stessa funzione dato che uno è conseguenza dell'altro

interlude()
buildScenario(player, allOpponents[i])


// NEED to change this for all buttons
btnAtt.addEventListener('click', () => {
    //fa la mossa sia per me che per l'avversario
    action()

    if (checkEndLvl(player, allOpponents[i])) {
        //se ho finito il livello, controlla come è stato finito
        if (winLvl) {
            //se ho vinto, passa al prossimo avversario e ripristina stats
            // del giocatore

            if (i==5){
                //se ho vinto ed ho sconfitto il boss, lancia l'end-game
                endGameScreen()
            }
            
            i++
            interlude()
            statsRecovery()
            //dopo che è finito interlude, forse qui potremmo abilitare btns
            buildScenario(player, allOpponents[i])
        }else if(lose){
            //se ho perso lancia il game over
            gameOverScreen()
        }

    }


})
