function speak(text, priority){
    var el = document.createElement('div')
    var id = 'speak-' + Date.now()
    el.setAttribute('id',id)
    el.setAttribute('aria-live', priority || "polite")
    el.classList.add('visually-hidden')
    document.body.appendChild(el)

    window.setTimeout(function (){
        document.getElementById(id).innerHTML = text
    }, 100)
    window.setTimeout(function (){
        document.body.removeChild(document.getElementById(id))
    }, 3000)
}
class Player{constructor(){}}
const player = new Player()
var page = 'start'
var step = 1
var text = 'Welcome to dungeon adventure! Press enter to play'
var input = undefined
const stats = ['strength','intelligence','dexterity','constitution','wisdom','perception','charisma']
speak(text)
function Roll(dice,min=true,sides=6){
    const rolls = []
    var total = 0
    for (let i=0; i<dice; i++){
        let roll = Math.round(Math.random()*(sides-1)+1)
        rolls.push(roll)
        total += roll
    }
    if (min == true){
        console.log(total)
        total -= Math.min(...rolls)
        console.log(total,(Math.min(...rolls)))
    }
    console.log(total)
    return { 'rolls': rolls, 'total': total }
}
window.addEventListener('keydown', function(e){
    if (e.key == 'Enter'){
        if (page == 'start'){
            page = 'character setup'
            text = 'The towns people ask for your help defeating the evil necromancer that has been harrassing the village. Will you help defeat the evil necrommancer and the dangers that lerk in the dungeon?'
            speak(text)
            function a(){
                setTimeout(() => {input = window.prompt('type yes or no').toLowerCase();
                if (input == 'yes' || input == 'y'){
                    text = 'Yay! The Towns people thank you for your courage and wish you best of luck. But before we begin lets create your character. press enter to continue'
                    speak(text)
                }
                else if (input == 'no' || input == 'n'){
                    text = 'What a shame. The Towns people are dissapointed and call you a coward'
                    speak(text)
                    setTimeout(() => {
                        text = 'Welcome to dungeon adventure! Press enter to play'
                        page = 'start'
                        speak(text)
                    },1000)
                }
                else{
                    speak('Invalid Input')
                    a()
                }
                },200)
            }
            a()
        }
        else if (page == 'character setup'){
            if (step == 1){
                text = 'First we will determine each of your attributes by rolling 4 6-sided die and adding the 3 highest numbers and assigning the total for each attribute. higher numbers are better. press enter to continue'
                speak(text)
                step = 2
            }
            else if (step == 2){
                let roll = Roll(4)
                text = 'Rolling the dice you got '+roll.rolls+' so the 3 highest numbers added together get you a total of '+roll.total+'. Where would you like to assign your value of '+roll.total+'?'
                function a(){
                    speak(text)
                    setTimeout(() => {input = window.prompt("the attributes you haven't assigned yet are "+stats).toLowerCase();
                    if (stats.indexOf(input) != -1){
                        player[input] = roll.total
                        text = 'Your '+input+' is now '+player[input]
                        speak(text)
                        stats.splice(stats.indexOf(input),1)
                        if (stats.length>0){
                            roll = Roll(4)
                            text = 'Rolling the dice you got '+roll.rolls+' so the 3 highest numbers added together get you a total of '+roll.total+'. Where would you like to assign your value of '+roll.total+'?'
                            setTimeout(() => {a()},200)
                        }
                        else{
                            step = 3
                            speak('now that we have finished assigning your attributes we will now determine your starting hit points by rolling 3 6-sided dice and adding them, then adding your constitution multiplied by two. press enter to continue')
                        }
                    }
                    else{
                        speak('invalid input')
                        setTimeout(() => {a()},200)
                    }
                },200)
                }
                a()
            }
            else if (step == 3){
                let roll = Roll(3,false)
                player.hp = player.constitution*2+roll.total
                player.max_hp = player.hp
                step = 4
                speak('Rolling the dice you got '+roll.rolls+' for a total of '+roll.total+' plus your constitution of '+player.constitution+' times 2 adds up to a total of '+player.hp+'. So you get '+player.hp+" hit points to start out with. press enter to continue")
            }
            else if (step == 4){
                speak('Next we will determine how much gold you start out with by rolling 20 6-sided dice. press enter to continue')
                step = 5
            }
            else if (step == 5){
                let roll = Roll(20,false)
                player.gold = roll.total
                step = 6
                speak('Rolling for gold you got a total of '+player.gold+'. press enter to continue')
            }
            else if (step == 6){
                step = 7
                speak("Congratulations! You have completed creating your character! Here are your stats: Strength "+player.strength+". Intelligence "+player.intelligence+". Dexterity "+player.dexterity+". Constitution "+player.constitution+". Wisdom "+player.wisdom+". Perception "+player.perception+". Charisma "+player.charisma+". hit points "+player.hp+'. Gold '+player.gold+'. press enter to begin playing')
            }
            else if (step == 7){
                speak("You are in town. The game is a work in progress so you can not do anything yet. sorry. This game will be updated at least once a week.")
            }
        }
    }
})