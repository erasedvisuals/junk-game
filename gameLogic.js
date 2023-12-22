/*              NOTES

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
        id: 0,
        ico: "DEMO/assets/img/ico/medical.png",
        name: "Medikit",
        strenght: () => { return 90 },
        role: 0,
        animation: "heal",
        sfx: "DEMO/assets/audio/sfx/heal.mp3",
        used: false
    },
    //1
    {
        id: 1,
        ico: "DEMO/assets/img/ico/drugs.png",
        name: "Pills",
        strenght: () => { return 40 },
        role: 0,
        animation: "heal",
        sfx: "DEMO/assets/audio/sfx/heal.mp3",
        used: false
    },
    //2
    {
        id: 2,
        ico: "DEMO/assets/img/ico/molotov-cocktail.png",
        name: "Molotov",
        strenght: () => { return 100 },
        role: 1,
        animation: "boom",
        sfx: "DEMO/assets/audio/sfx/boom.mp3",
        used: false

    },
    //3
    {
        id: 3,
        ico: "DEMO/assets/img/ico/gun.png",
        name: "One-bullet gun",
        strenght: () => { return 70 },
        role: 1,
        animation: "shot",
        sfx: "DEMO/assets/audio/sfx/shot.mp3",
        used: false
    },
    //4
    {
        id: 4,
        ico: "DEMO/assets/img/ico/prototype.png",
        name: "Prototype Gun",
        strenght: () => { return exVal(30, 120) },
        role: 1,
        animation: "shot",
        sfx: "DEMO/assets/audio/sfx/shot.mp3",
        used: false
    },
    //5
    {
        id: 5,
        ico: "DEMO/assets/img/ico/corpo-drug.png",
        name: "Experimental Corpo Drug",
        strenght: () => { return exVal(60, 110) },
        role: exVal(0, 1),
        animation: "shot",
        sfx: "DEMO/assets/audio/sfx/shot.mp3",
        used: false
    },
    //6
    {
        id: 6,
        ico: "DEMO/assets/img/ico/beer.png",
        name: "Beer",
        strenght: () => { return 50 },
        role: 0,
        animation: "heal",
        sfx: "DEMO/assets/audio/sfx/heal.mp3",
        used: false
    }


]
const PGList = [
    {
        id: 0,
        name: "Nova Blackthorn",
        src: "DEMO/assets/img/characters/neon-female-warrior",
        orientation: "-end",
        style: "height:100%;right:60%;",
        hp: 300,
        hpMax: 300,
        mana: 390,
        manaMax: 390,
        strenght: () => { return exVal(70, 90) },
        items: [itemsList[0], itemsList[0], itemsList[4]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Katana Slash",
                strenght: () => { return exVal(74, 151) },
                cost: 55,
                role: 1,
                animation: "att", //sfx blade
                sfx: "DEMO/assets/audio/sfx/blade.mp3"
            },
            {
                id: 2,
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Quantum Blade",
                strenght: () => { return exVal(50, 250) },
                cost: 140,
                role: 1,
                animation: "att",//sfx blade
                sfx: "DEMO/assets/audio/sfx/blade.mp3"
            },
            {
                id: 3,
                ico: "DEMO/assets/img/ico/software-update.png",
                name: "Software Update",
                strenght: () => { return exVal(50, 70) },
                cost: 40,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
            }],
        arena: "arena-corpoBuilding",
        theme: "DEMO/assets/audio/corpoBuilding-theme.mp3"
    },
    {
        id: 1,
        name: "Scarlet Blackthorn",
        src: "DEMO/assets/img/characters/death-angel",
        orientation: "-end",
        style: "height:72%;right:65%",
        hp: 270,
        hpMax: 270,
        mana: 140,
        manaMax: 140,
        strenght: () => { return exVal(80, 94) },
        items: [itemsList[5], itemsList[5], itemsList[5], itemsList[5]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/scythe.png",
                name: "Scythe Slash",
                strenght: () => { return exVal(85, 190) },
                cost: 55,
                role: 1,
                animation: "att", //sfx blade
                sfx: "DEMO/assets/audio/sfx/blade.mp3"
            },
            {
                id: 2,
                ico: "DEMO/assets/img/ico/katana.png",
                name: "Quantum Blade 0v3rc0k3d",
                strenght: () => { return exVal(120, 250) },
                cost: 140,
                role: 1,
                animation: "att",//sfx blade
                sfx: "DEMO/assets/audio/sfx/blade.mp3"
            },
            {
                id: 3,
                ico: "DEMO/assets/img/ico/blood.png",
                name: "Pray",
                strenght: () => { return exVal(100, 150) },
                cost: 50,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
            },
            {
                id: 4,
                ico: "DEMO/assets/img/ico/blood-projectile.png",
                name: "Blood Projectile",
                strenght: () => { return 170 },
                cost: 80,
                role: 1,
                animation: "boom",//sfx boom
                sfx: "DEMO/assets/audio/sfx/boom.mp3"
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
        style: "height:95%;right:85%;",
        hp: 400,
        hpMax: 400,
        mana: 120,
        manaMax: 120,
        strenght: () => { return exVal(52, 78) },
        items: [itemsList[0], itemsList[0], itemsList[1], itemsList[1], itemsList[1]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/contract.png",
                name: "Contract Execution",
                strenght: () => { return exVal(122, 148) },
                cost: 50,
                role: 1,
                animation: "att",//sfx standard
                sfx: "DEMO/assets/audio/sfx/hit-8.mp3"
            },
            {
                id: 2,
                ico: "DEMO/assets/img/ico/blackmarket.png",
                name: "Black Market drug",
                strenght: () => { return exVal(80, 120) },
                cost: 40,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
            }
        ],
        arena: "arena-industrialRooftop",
        theme: "DEMO/assets/audio/industrialRooftop-theme.mp3"
    },
    {
        id: 3,
        name: "Puff Daddy-o",
        src: "DEMO/assets/img/characters/smoking-guy",
        orientation: "-end",
        style: "height:100%;right:60%;",
        hp: 420,
        hpMax: 420,
        mana: 80,
        manaMax: 80,
        strenght: () => { return exVal(43, 62) },
        items: [itemsList[6], itemsList[6], itemsList[6], itemsList[6], itemsList[6]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/blackmarket.png",
                name: "Black Market drug",
                strenght: () => { return exVal(80, 120) },
                cost: 40,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
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
        style: "height:100%;right:60%;",
        hp: 250,
        hpMax: 250,
        mana: 160,
        manaMax: 160,
        strenght: () => { return exVal(89, 101) },
        items: [itemsList[0], itemsList[0], itemsList[1], itemsList[1], itemsList[4]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/prosthetic.png",
                name: "Cyber-arm Punch",
                strenght: () => { return exVal(105, 130) },
                cost: 60,
                role: 1,
                animation: "att",//sfx standard
                sfx: "DEMO/assets/audio/sfx/hit-8.mp3"
            },
            {
                id: 2,
                ico: "DEMO/assets/img/ico/laser.png",
                name: "Cyber-arm Shot",
                strenght: () => { return exVal(120, 170) },
                cost: 100,
                role: 1,
                animation: "shot",//sfx shot
                sfx: "DEMO/assets/audio/sfx/shot.mp3"
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
        style: "height:100%;right:60%;",
        hp: 480,
        hpMax: 480,
        mana: 80,
        manaMax: 80,
        strenght: () => { return exVal(35, 58) },
        items: [itemsList[4], itemsList[4], itemsList[1], itemsList[1]],
        skills: [
            {
                id: 1,
                ico: "DEMO/assets/img/ico/hoverboard.png",
                name: "Hollie Slash",
                strenght: () => { return exVal(89, 99) },
                cost: 40,
                role: 1,
                animation: "att",//sfx standard
                sfx: "DEMO/assets/audio/sfx/hit-8.mp3"
            },
            {
                id: 2,
                ico: "DEMO/assets/img/ico/patrollin.png",
                name: "Patrollin' routine",
                strenght: () => { return exVal(111, 122) },
                cost: 60,
                role: 1,
                animation: "att",//sfx standard
                sfx: "DEMO/assets/audio/sfx/hit-8.mp3"
            },
            {
                id: 3,
                ico: "DEMO/assets/img/ico/food-ration.png",
                name: "NCPD Ration",
                strenght: () => { return 99 },
                cost: 20,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
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
        style: "height:70%;right:10%;",
        hp: 700,
        hpMax: 700,
        mana: 250,
        manaMax: 250,
        strenght: () => { return exVal(70, 90) },
        items: [itemsList[5]],
        skills: [
            {
                id: 1,
                ico: "icoPath",
                name: "Laser",
                strenght: () => { return exVal(100, 150) },
                cost: 80,
                role: 1,
                animation: "shot",//sfx boom
                sfx: "DEMO/assets/audio/sfx/shot.mp3"
            },
            {
                id: 2,
                ico: "icoPath",
                name: "Overclock",
                strenght: () => { return exVal(111, 122) },
                cost: 150,
                role: 0,
                animation: "heal",
                sfx: "DEMO/assets/audio/sfx/heal.mp3"
            }
        ],
        arena: "arena-apocalypse",
        theme: "DEMO/assets/audio/apocalypse-theme.mp3"
    },
]



/*---------------------------------------------
|            HTML VARIABLE DECLARATION        |  
----------------------------------------------*/

// Creating a copy of the main list of PGs
let allOpponents = [...PGList]
// Searchs and defines the player's PG and removes it from the list of the opponent's PG
let iP = parseInt(new URLSearchParams(window.location.search).get('pg-selection'))
//                              (iP, 1)[0]
let player = allOpponents.splice(iP, 1)[0]

// HTML elements to build scenarios
//         HEADING
let heading = document.getElementsByClassName('heading')
/*  [0]: span #curr-level
    [1]: span #player-name
    [2]: p    #msg
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
let btnAtt = document.getElementById('btn-att')
let btnSkill = document.getElementById('btn-skill')
let btnItem = document.getElementById('btn-item')
let btnRun = document.getElementById('btn-run')

/*              HTMLitem to inset
    <button class="d-flex flex-column border rounded obj-item bg-dark text-white p-0" value="0" data-bs-dismiss="modal">
        <p class="text-center border-bottom rounded w-100 pb-2 bg-primary m-0" style="font-size: .8rem;">Prototype Gun</p>
        <div class="h-auto w-100">
            <img src="./DEMO/assets/img/ico/prototype.png" alt="" class="fit">
        </div>
    </button>
*/

/*              HTMLskill to inset
    <button class="d-flex flex-column border rounded obj-skill bg-dark text-white p-0" value="0" data-bs-dismiss="modal">
        <p class="text-center border-bottom rounded w-100 pb-2 bg-primary m-0" style="font-size: .8rem;">Prototype Gun</p>
        <div class="h-auto w-100">
            <img src="./DEMO/assets/img/ico/prototype.png" alt="" class="fit">
        </div>
        <p class="text-center border-top w-100 pt-2 m-0" style="font-size: .8rem;"> Cost: <span class="fw-bold">65</span></p>
    </button>
*/



/*--------------------------------------
|           FUNCTIONS                  |
----------------------------------------*/
//      Building Functions
function createItemBtn(itemObj) {
    // function to create the HTML element that represent the item
    let btnOut = document.createElement('button')
    btnOut.className = "d-flex flex-column border rounded obj-item bg-dark-mirror text-white p-0"
    btnOut.setAttribute("data-bs-dismiss", "modal")
    btnOut.setAttribute("value", `${itemObj.id}`)
    btnOut.innerHTML = `<p class="text-center border-bottom rounded w-100 pb-2 bg-neon-mirror-p m-0" style="font-size: .8rem;">${itemObj.name}</p>
    <div class="h-auto w-100">
        <img src=${itemObj.ico} alt=${itemObj.name} class="fit">
    </div>`
    return btnOut

}
function createSkillBtn(skillObj) {
    // function to create the HTML element that represent the skill
    let btnOut = document.createElement('button')
    btnOut.className = "d-flex flex-column border rounded obj-skill bg-dark-mirror text-white p-0"
    btnOut.setAttribute("data-bs-dismiss", "modal")
    btnOut.setAttribute("value", `${skillObj.id}`)
    btnOut.innerHTML = `<p class="text-center border-bottom rounded w-100 pb-2 bg-neon-mirror-c m-0" style="font-size: .8rem;">${skillObj.name}</p>
    <div class="h-auto w-100">
        <img src=${skillObj.ico} alt=${skillObj.name} class="fit">
    </div>
    <p class="text-center border-top w-100 pt-2 m-0" style="font-size: .8rem;"> Cost: <span class="fw-bold text-neon-c">${skillObj.cost}</span></p>`
    return btnOut

}
function buildItems(p, o) {
    // add the HTMLitem element to the Items Modal
    // add the event listner so when is used, do the action and pop out of the list
    let target = document.getElementById('items-body')

    for (let item of p.items) {
        if(item.used){
            //if the item was used
            //do nothing
        } else{
            let btn = createItemBtn(item)
            btn.addEventListener('click', () => {
                btn.disabled = true
                item.used = true
                if (item.role) {
                    // fa danno
                    turn(item, o, doItem)
                } else if (!item.role) {
                    //cura
                    turn(item, p, doHealing)
                }
                target.removeChild(btn)
            })
            target.appendChild(btn)
        }
    }
}
function buildSkills(p, o) {
    // add the HTMLskill element to the Skills Modal
    let target = document.getElementById('skills-body')
    for (let skill of p.skills) {
        let btn = createSkillBtn(skill)

        btn.addEventListener('click', () => {
            if (skill.cost > p.mana) {
                //TODO: something when cost is too much
            } else if (skill.cost <= p.mana) {
                p.mana = p.mana - skill.cost
                if (skill.role) {
                    // fa danno
                    turn(skill, o, doSkill)
                } else if (!skill.role) {
                    //cura
                    turn(skill, p, doHealing)
                }
            }
        })
        target.appendChild(btn)
    }
}
function buildHeading(p, o, i) {
    // update the heading with the VS msg:
    // set the current lvl, playername and oppName
    heading[0].textContent = `${i + 1}`
    heading[1].textContent = `${p.name}`
    heading[2].textContent = 'VS'
    heading[3].textContent = `${o.name}`
}
function buildArena(p, o) {
    // add the arenaClassName of the opp to #arena and
    // innest the updated <img> HTML
    arena.classList.add(o.arena)
    pHTML.innerHTML = `<img class="pg" src=${p.src + ".gif"} alt="player" style=${p.style}>`
    oppHTML.innerHTML = `<img class="pg" src=${o.src + p.orientation + ".gif"} alt="opponent" style=${o.style}>`
    stats[1].textContent = `${p.hpMax}`
    stats[4].textContent = `${o.hpMax}`
    updateHp(p, 0)
    updateHp(o, 3)
}
function buildScenario(p, o, i) {
    buildItems(p, o)
    buildSkills(p, o)
    buildHeading(p, o, i)
    buildArena(p, o)
    ableBtns()
}
function resetScenario(i) {
    // Function to remove the past arena and make the 
    // arena element ready to bulid
    arena.classList.remove(allOpponents[i].arena)
    arena.classList.remove('arena-interlude-0')
    arena.classList.remove('arena-interlude-1')
    document.getElementById('skills-body').innerHTML =''
    document.getElementById('items-body').innerHTML =''
    heading[1].textContent = 'VS'
}

//      Utility Functions
function disableBtns() {
    btnAtt.disabled = true
    btnAtt.classList.remove('idle-att')
    btnSkill.disabled = true
    btnSkill.classList.remove('idle-skill')
    btnItem.disabled = true
    btnItem.classList.remove('idle-item')
    btnRun.disabled = true
}
function ableBtns() {
    btnAtt.disabled = false
    btnAtt.classList.add('idle-att')
    btnSkill.disabled = false
    btnSkill.classList.add('idle-skill')
    btnItem.disabled = false
    btnItem.classList.add('idle-item')
    btnRun.disabled = false
}
function randomLevels() {
    // Used to make the sequence of levels random for every game.
    // The last element of this random array has to be 5(final boss index)
    const lvlSeq = [0, 1, 2, 3, 4];
    let currIndex = lvlSeq.length, tempValue, randomIndex;
    // // Algoritmo di Fisher-Yates per mescolare l'array
    while (currIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex -= 1;

        tempValue = lvlSeq[currIndex];
        lvlSeq[currIndex] = lvlSeq[randomIndex];
        lvlSeq[randomIndex] = tempValue;
    }
    lvlSeq.push(5)
    return lvlSeq;
}
function range(min, max, value) {
    if (value <= max && value >= min) {
        //if in range
        return value
    } else if (value < min) {
        //if too small
        return min
    } else if (value > max) {
        //if too high
        return max
    }
}

//      Animation Functions
function hide() {
    // function to add th classe hide (15s) to the elements of the playscreen


    statsWrapper.classList.add('hide')
    charSection.classList.add('hide')
    setTimeout(() => {
        statsWrapper.classList.remove('hide')
        charSection.classList.remove('hide')
    }, 15000);
}
function interlude() {
    // ad the interlude screen suspending the combat UI, add a message in the heading
    let arenaQuery = ['arena-interlude-0', 'arena-interlude-1', 'GOING TO DESTINATION...', 'MUST BE SOMEWHERE AROUND HERE...', 'I WILL FIND YOU...']
    disableBtns()
    hide()
    let ost = new Audio("./DEMO/assets/audio/interlude.mp3")
    ost.volume = 0.2

    ost.play()
    setTimeout(() => {
        arena.classList.add(arenaQuery[exVal(0, 1)])
        heading[0].textContent = ``
        heading[1].textContent = ``
        heading[2].textContent = arenaQuery[exVal(2, 4)]
        heading[3].textContent = ``
    }, 2850)
}
function endGameScreen() {
    // add the final win screen and hides the elements of the main, add also the ost
    ostPlay(new Audio("./DEMO/assets/audio/end-game.mp3"))
    disableBtns()
    hide()
    setTimeout(() => {
        document.getElementById('heading').classList.add('d-none')
        document.getElementById('arena').classList.add('d-none')
        document.getElementById('actions-wrapper').classList.add('d-none')
    }, 2950);
    setTimeout(() => {
        document.getElementById('main').classList.add('end-game')
    }, 11700);
    setTimeout(() => {
        document.getElementById('end-game-title').classList.remove('d-none')
    }, 14500);

}
function gameOverScreen() {
    ostPlay(new Audio("./DEMO/assets/audio/game-over.mp3"))
    disableBtns()
    hide()
    setTimeout(() => {
        statsWrapper.classList.add('d-none')
        charSection.classList.add('d-none')
        arena.classList.add('game-over')
    }, 3500);
    setTimeout(() => {
        document.getElementById('game-over').classList.remove('d-none')
    }, 7280);
    setTimeout(() => {
        document.getElementById('continue').classList.remove('d-none')
    }, 9000);
}
function animation(animName, sfx, actionToDo, oppTurn) {
    // animation function, based on the type of the action. There is also an orientation like
    // in the PG object, to understand who's the attacker and who the target
    // 'opponent' -> 'player' || 'player' -> 'opponent'
    let tgt = 'opponent'
    let att = 'player'
    if (oppTurn) {
        tgt = 'player'
        att = 'opponent'
    }

    if (animName == 'heal') {
        let sfxHit = new Audio(sfx) 
        sfxHit.volume = 1
        document.getElementById(att).classList.add(animName)
        setTimeout(() => {
            sfxHit.play()
            actionToDo()
        }, 1080)
        setTimeout(() => {
            document.getElementById(att).classList.remove(animName)
        }, 1510)

    } else {

        let sfxHit = new Audio(sfx)
        sfxHit.volume = 1
        document.getElementById(att).classList.add(animName)
        setTimeout(() => {
            sfxHit.play()
            actionToDo()
            document.getElementById(tgt).classList.add('hurt')
        }, 1080)
        setTimeout(() => {
            document.getElementById(att).classList.remove(animName)
            document.getElementById(tgt).classList.remove('hurt')
        }, 1510)
    }
}

//      SFX Functions
function ostPlay(ost) {
    ost.volume = 0.2
    ost.loop = true
    ost.play()
}
function ostStop(ost) {
    ost.pause()
}

//      Game Logic Functions
function checkEndLvl(p, o) {
    // this will check the end conditions
    // it will return true if it is a victory or a loss
    // it also update the winLvl and lose status to be able to work on these conditions
    if ((p.hp < 1) || (o.hp < 1)) {
        // if i'm in here, the level has ended
        if (o.hp < 1) {
            winLvl = true
        } else if (p.hp < 1) {
            lose = true
        }
        return true
    } else { return false }
}
function updateHp(char, n) {
    // update the style width of a character's hp bar in order to give
    // a dynamic feedback of the health status

    // SPECIFY THE TARGET OF THE UPDATING LIKE THIS
    // n = 0 -> PLAYER  n = 3 -> OPPONENT
    /*  [0]: span #player-hp
        [1]: span #player-hp-tot
        [2]: div #hp-bar-p
        [3]: span #opponent-hp
        [4]: span #opponent-hp-tot
        [5]: div #hp-bar-opp*/
    char.hp = range(0, char.hpMax, char.hp)
    stats[n].textContent = char.hp
    stats[n + 2].setAttribute('style', `width: ${range(0, 100, ((char.hp / char.hpMax) * 100).toFixed(1))}%;`)
}
function statsRecovery(p) {
    // max out the stats, used before a new Scenario begins
    p.hp = p.hpMax
    p.mana = p.manaMax
    updateHp(p, 0)
}
//  typeMoves
function doAttack(att, tgt, oppTurn) {
    // This function passes at the animation function what action has to do,
    // and it has to decide what animationclass to pass
    // based on the orientation: if enemy -> animclass + -end
    let sfxSteps = new Audio("./DEMO/assets/audio/sfx/steps.mp3")
    sfxSteps.play()
    let sfxHit = "DEMO/assets/audio/sfx/hit-8.mp3"
    
    animation(oppTurn ? 'att-end' : 'att', sfxHit, () => {

        tgt.hp = tgt.hp - att.strenght()
        //if it's oppTurn, the hp to update are mine
        updateHp(tgt, oppTurn ? 0 : 3)
    },
        oppTurn)
}
function doSkill(att, tgt, oppTurn) {
    // This function passes at the animation function what action has to do,
    // and it has to decide what animationclass to pass
    // based on the orientation: if enemy -> animclass + -end
    let sfxSkill = new Audio("./DEMO/assets/audio/sfx/skillCharge.mp3")
    sfxSkill.volume = .5
    sfxSkill.play()
    
    animation(oppTurn ? att.animation + '-end' : att.animation, att.sfx, () => {

        tgt.hp = tgt.hp - att.strenght()
        //if it's oppTurn, the hp to update are mine
        updateHp(tgt, oppTurn ? 0 : 3)

    }, oppTurn)
}
function doItem(att, tgt, oppTurn) {
    // This function passes at the animation function what action has to do,
    // and it has to decide what animationclass to pass
    // based on the orientation: if enemy -> animclass + -end
    let sfxItem = new Audio("./DEMO/assets/audio/sfx/itemSearch.mp3")
    sfxItem.play()
    animation(oppTurn ? att.animation + '-end' : att.animation, att.sfx, () => {

        tgt.hp = tgt.hp - att.strenght()
        //if it's oppTurn, the hp to update are mine
        updateHp(tgt, oppTurn ? 0 : 3)

    }, oppTurn)
}
function doHealing(att, tgt, oppTurn) {
    // This function passes at the animation function what action has to do,
    // and it has NOT to decide what animationclass to pass
    // based on the orientation, because the target is the att itself
    let sfxheal = new Audio("./DEMO/assets/audio/sfx/healCharge.mp3")
    sfxheal.volume = .4
    sfxheal.play()
    let sfxHit = "DEMO/assets/audio/sfx/heal.mp3"
    
    animation('heal', sfxHit, () => {

        tgt.hp = tgt.hp + att.strenght()
        //if it's oppTurn, the hp to update are its own
        updateHp(tgt, oppTurn ? 3 : 0)

    }, oppTurn)
}
function move(att, tgt, typeMove, oppTurn) {
    // total duration of each turn = 3.5s   
    typeMove(att, tgt, oppTurn)
}

//      AI Functions
function moveAI(p, o) {
    // Like the main move function, but the only differences are:
    // The target is now the player and the action is random
    if (o.hp < 1) {
        //do nothing and wait for checkEnd if the opp was defeated
    } else {
        let actions = [doAttack, useSkill, useItem]
        move(o, p, actions[exVal(0, actions.length - 1)], true)
    }
}
function useSkill(att, tgt, oppTurn) {
    let skillAI = att.skills[exVal(0, att.skills.length - 1)]
    if (skillAI.role) {
        doSkill(skillAI, tgt, oppTurn)
    } else if (!skillAI.role) {
        doHealing(skillAI, att, oppTurn)
    }
}
function useItem(att, tgt, oppTurn) {
    let itemAI = att.items[exVal(0, att.items.length - 1)]
    if (itemAI.role) {
        doItem(itemAI, tgt, oppTurn)
    } else if (!itemAI.role) {
        doHealing(itemAI, att, oppTurn)
    }
}


/*--------------------------------------
|                MAIN                  |
----------------------------------------*/
//      Main Function
function turn(att, tgt, typeMove) {
    disableBtns()
    move(att, tgt, typeMove, false)
    setTimeout(() => {
        moveAI(player, opponent)
    }, 1900);

    // TUTTO CIO CHE è QUA SOTTO, AVVIENE DOPO LA FINE DEL TURNO circa 3.5s
    setTimeout(() => {
        if (checkEndLvl(player, opponent)) {
            //se ho finito il livello, controlla come è stato finito
            if (winLvl) {
                //se ho vinto, passa al prossimo avversario e ripristina stats
                // del giocatore
                if (lvl == 5) {
                    //se ho vinto ed ho sconfitto il boss, lancia l'end-game
                    ostStop(theme)
                    endGameScreen()
                } else {
                    ostStop(theme)
                    interlude()

                    setTimeout(() => {
                        statsRecovery(player)
                        resetScenario(allLevels[lvl])
                        lvl++
                        opponent = allOpponents[allLevels[lvl]]
                        buildScenario(player, opponent, lvl)
                        theme = new Audio(opponent.theme)
                        ostPlay(theme)
                        winLvl = false
                    }, 12000);
                }

            } else if (lose) {
                //se ho perso lancia il game over
                ostStop(theme)
                gameOverScreen()
            }

        } else {
            ableBtns()
        }

    }, 4200);
}

// Level Variables
let lvl = 0
let allLevels = randomLevels()
let opponent = allOpponents[allLevels[lvl]] // allLevels = [2,0,1,4,3,5] -> allLevels[lvl] == 2
let theme = new Audio(opponent.theme)

// Turn variables
let winLvl = false
let lose = false


//Bonus: Start game intro
buildScenario(player, opponent, lvl)
ostPlay(theme)

btnAtt.addEventListener('click', () => {
    turn(player, opponent, doAttack)
})


//TODO:
/**
 * Add items check for prevent the opponent to spam items
 * Add mana check  ''     ''    ''    '''    ''  '' skills
 * 
 * Add mana screen to the skill modal track the current mana
 * Add some feedback for clicking skills that costs too much
 * 
 * Add a <p></p> to insert the value of the action's 'strenght' and show when hit
 * 
 * 
 * 
 */