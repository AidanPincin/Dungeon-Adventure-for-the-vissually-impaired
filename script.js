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
    }, 60000)
}
class Fists{
    constructor(){
        this.name = 'fists'
        this.dice = 1
        this.sides = 3
    }
}
class Dagger{
    constructor(){
        this.name = 'dagger'
        this.dice = 1
        this.sides = 6
        this.cost = 5
    }
}
class SharpSword{
    constructor(){
        this.name = 'sharp sword'
        this.dice = 1
        this.sides = 10
        this.cost = 10
    }
}
class Morningstar{
    constructor(){
        this.name = 'morningstar'
        this.dice = 2
        this.sides = 6
        this.cost = 20
    }
}
class LongSword{
    constructor(){
        this.name = 'long sword'
        this.dice = 3
        this.sides = 6
        this.cost = 50
    }
}
class BattleAxe{
    constructor(){
        this.name = 'battle axe'
        this.cost = 125
        this.dice = 4
        this.sides = 6
    }
}
class GreatSword{
    constructor(){
        this.name = 'great sword'
        this.dice = 5
        this.sides = 6
        this.cost = 250
    }
}
class NoArmor{
    constructor(){
        this.name = 'none'
        this.armorClass = 8
    }
}
class ClothArmor{
    constructor(){
        this.name = 'cloth armor'
        this.armorClass = 10
        this.cost = 30
    }
}
class LeatherArmor{
    constructor(){
        this.name = 'leather armor'
        this.armorClass = 11
        this.cost = 60
    }
}
class StuddedLeatherArmor{
    constructor(){
        this.name = 'studded leather armor'
        this.armorClass = 12
        this.cost = 90
    }
}
class ScaleMailArmor{
    constructor(){
        this.name = 'scale mail armor'
        this.armorClass = 13
        this.cost = 200
    }
}
class ChainMailArmor{
    constructor(){
        this.name = 'chain mail armor'
        this.armorClass = 14
        this.cost = 400
    }
}
class PlateMailArmor{
    constructor(){
        this.name = 'plate mail armor'
        this.armorClass = 15
        this.cost = 800
    }
}
class HealthPotion{
    constructor(){
        this.name = 'healing potion'
        this.cost = 15
        this.uses = 3
        this.dice = 5
        this.sides = 6
    }
}
class Room{
    constructor(north,south,west,east,northRoom,southRoom,westRoom,eastRoom,monster){
        this.north = north
        this.south = south
        this.west = west
        this.east = east
        this.northRoom = northRoom
        this.southRoom = southRoom
        this.westRoom = westRoom
        this.eastRoom = eastRoom
        this.monster = monster
    }
}
class Goblin{
    constructor(){
        this.description = 'You notice a large, green, creature with short, round ears and small eyes. It is a Goblin.'
        this.dice = 2
        this.sides = 6
        this.name = 'goblin'
        this.dexterity = 10
        this.armorClass = 10
        this.hp = Math.round(Math.random()*10+15)
        this.gold = Math.round(Math.random()*10+5)
    }
}
class Bear{
    constructor(){
        this.description = 'You notice a giant, brown, furry, creature with large claws and a threatening roar. It is a Bear.'
        this.dice = 3
        this.sides = 6
        this.name = 'bear'
        this.dexterity = 12
        this.armorClass = 12
        this.hp = Math.round(Math.random()*20+20)
        this.gold = Math.round(Math.random()*20+10)
    }
}
class Slime{
    constructor(){
        this.description = 'You notice a small, icky, sticky, green creature on the floor. It is a slime'
        this.dice = 1
        this.sides = 6
        this.name = 'slime'
        this.dexterity = 8
        this.armorClass = 8
        this.hp = Math.round(Math.random()*5+10)
        this.gold = Math.round(Math.random()*5+5)
    }
}
class Troll{
    constructor(){
        this.description = 'You notice a large, purple-blue-ish creature with a long grey beard and long, pointy ears. It is a Troll'
        this.dice = 2
        this.sides = 8
        this.name = 'troll'
        this.dexterity = 11
        this.armorClass = 11
        this.hp = Math.round(Math.random()*15+15)
        this.gold = Math.round(Math.random()*15+5)
    }
}
class Skeleton{
    constructor(){
        this.description = 'You notice a medium sized, reanimated pile of bones with a large metal helmet with spikes on it. It is a skeleton.'
        this.dice = 1
        this.sides = 10
        this.name = 'skeleton'
        this.dexterity = 13
        this.armorClass = 10
        this.hp = Math.round(Math.random()*10+5)
        this.gold = Math.round(Math.random()*10+5)
    }
}
var mustRoll = 8
var revivesLeft = 3
var room = 0
const rooms = [new Room(true,true,false,false,1,'town',undefined,undefined), new Room(true,true,true,false,2,0,3,undefined,new Slime()), new Room(true,true,true,true,12,1,7,8,new Skeleton()), // 2
new Room(false,false,true,true,undefined,undefined,4,1,new Goblin()), new Room(true,false,true,true,6,undefined,5,3,new Troll()), //4
new Room(false,false,false,true,undefined,undefined,undefined,4,new Bear()), new Room(true,true,false,true,20,4,undefined,7, new Skeleton()), //6
new Room(false,false,true,true,undefined,undefined,6,2), new Room(false,false,true,true,undefined,undefined,2,9,new Goblin()), //8
new Room(false,true,true,true,undefined,10,8,15), new Room(true,true,false,false,9,11,undefined,undefined,new Troll()), //10
new Room(true,false,false,false,10,undefined,undefined,undefined), new Room(true,true,false,true,37,2,undefined,13,new Bear()), //12
new Room(false,false,true,true,undefined,undefined,12,14), new Room(true,true,true,true,44,15,13,19,new Slime()), //14
new Room(true,true,true,true,14,16,9,18), new Room(true,false,false,true,15,undefined,undefined,17,new Skeleton()), //16
new Room(false,false,true,false,undefined,undefined,16,undefined), new Room(false,false,true,false,undefined,undefined,15,undefined,new Goblin()), //18
new Room(true,false,true,false,45,undefined,14,undefined), new Room(true,true,false,false,21,6,undefined,undefined,new Troll()),  //20
new Room(true,true,true,false,23,20,22), new Room(false,false,false,true,undefined,undefined,undefined,21,new Bear()),  //22
new Room(true,true,false,false,24,21), new Room(true,true,false,true,25,23,undefined,35,new Slime()), //24
new Room(true,true,false,false,26,24), new Room(false,true,false,true,undefined,25,undefined,27, new Skeleton()),  //26
new Room(false,false,true,true,undefined,undefined,26,28), new Room(false,true,true,false,undefined,29,27,undefined,new Goblin()),  //28
new Room(true,true,true,true,28,34,32,30), new Room(false,false,true,true,undefined,undefined,29,31,new Troll()),  //30
new Room(false,false,true,false,undefined,undefined,30,undefined), new Room(false,false,true,true,undefined,undefined,33,29,new Bear()), //32
new Room(false,false,false,true,undefined,undefined,undefined,32), new Room(true,true,true,true,29,37,35,38,new Slime()),  //34
new Room(false,true,true,true,undefined,36,24,34), new Room(true,false,false,false,35,undefined,undefined,undefined, new Skeleton()), //36
new Room(true,true,false,false,34,12), new Room(false,true,true,true,undefined,39,34,41,new Goblin()),   //38
new Room(true,true,false,false,38,40), new Room(true,false,false,false,39,undefined,undefined,undefined, new Troll()),  //40
new Room(false,true,true,true,undefined,42,38,48), new Room(true,true,false,false,41,43,undefined,undefined,new Bear()),  //42
new Room(true,true,false,false,42,44), new Room(true,true,false,false,43,14,undefined,undefined,new Slime()),  //44
new Room(true,true,false,false,46,19), new Room(true,true,false,false,47,45,undefined,undefined, new Skeleton()),   //46
new Room(true,true,true,false,49,46,48), new Room(false,false,true,true,undefined,undefined,41,47, new Goblin()),   //48
new Room(true,true,false,false,50,47,undefined,undefined), new Room(false,true,true,true,undefined,49,52,51, new Troll()),  //50
new Room(false,false,true,false,undefined,undefined,50,undefined), new Room(true,false,false,true,53,undefined,undefined,50, new Bear()),   //52
new Room(true,true,true,true,57,52,58,54), new Room(true,false,true,true,56,undefined,53,55, new Skeleton()),   //54
new Room(false,false,true,false,undefined,undefined,54,undefined), new Room(false,true,false,false,undefined,54,undefined,undefined,new Goblin()),   //56
new Room(false,true,false,false,undefined,53,undefined,undefined), new Room(true,false,true,true,59,undefined,60,53,new Slime()),    //58
new Room(false,true,false,false,undefined,58,undefined,undefined), new Room(true,false,false,true,61,undefined,undefined,58,new Troll()),   //60
new Room(false,true,false,false,undefined,60,undefined,undefined,new Bear())] // 61
class Player{constructor(){}}
const player = new Player()
player.backpack = []
player.weapon = new Fists()
player.armor = new NoArmor()
player.dexterity = 18
player.dexterityBonus = 3
player.strength = 18
player.strengthBonus = 3
var page = 'start'
var step = 1
var text = 'Welcome to dungeon adventure! Press enter to play'
var input = undefined
const stats = ['strength','intelligence','dexterity','constitution','wisdom','perception','charisma']
const weapons = [new Dagger(), new SharpSword(), new Morningstar(), new LongSword(), new BattleAxe(), new GreatSword()]
const armors = [new ClothArmor(), new LeatherArmor(), new StuddedLeatherArmor(), new ScaleMailArmor(), new ChainMailArmor(), new PlateMailArmor()]
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
        total -= Math.min(...rolls)
    }
    return { 'rolls': rolls, 'total': total }
}
function generateMonsterChoice(){
    let roll = Roll(1,false,3)
    if (roll.total == 1){
        return 'up high'
    }
    else if (roll.total == 2){
        return 'in the middle'
    }
    else{return 'down low'}
}
function globalInputs(){
    if (input == 'what are my stats' || input == 'tell me my stats' || input == 'stats'){
        speak("Here are your stats. Strength "+player.strength+". Intelligence "+player.intelligence+". Dexterity "+player.dexterity+". Constitution "+player.constitution+". Wisdom "+player.wisdom+". Perception "+player.perception+". Charisma "+player.charisma+". current hit points "+player.hp+'. max hit points '+player.max_hp+'. Gold '+player.gold)
    }
    else if (input == 'backpack' || input == 'inventory' || input == 'look in backpack' || input == 'look in inventory' || input == 'open backpack' || input == 'open inventory'){
        let list = []
        for (let i=0; i<player.backpack.length; i++){
            if (weapons.indexOf(player.backpack[i]) != -1){
                list.push(player.backpack[i].name+'. Does '+player.backpack[i].dice+' to '+player.backpack[i].dice*player.backpack[i].sides+' Damage.')
            }
            if (armors.indexOf(player.backpack[i]) != -1){
                list.push(player.backpack[i].name+'. Has an armor class of '+player.backpack[i].armorClass+'.')
            }
        }
        let potions = player.backpack.filter(potion => potion.name === 'healing potion')
        let totalUses = 0
        for (let i=0; i<potions.length; i++){
            totalUses += potions[i].uses
        }
        if (totalUses>0){
            list.push('Healing potion. heals 5 to 30 hit points. has '+totalUses+' uses left')
        }
        speak('Here are the items in your backpack.'+list)
    }
    else if (input.slice(0,5) == 'equip' && player.backpack.find(item => item.name === input.slice(6,input.length))){
        let item = player.backpack.find(item => item.name === input.slice(6,input.length))
        if (weapons.indexOf(item) != -1){
            player.weapon = item
            speak('You equip your '+item.name+' and get it ready for battle')
        }
        else if (armors.indexOf(item) != -1){
            player.armor = item
            speak('You equip your '+item.name+' and you now have an armor class of '+player.armor.armorClass)
        }
        else{
            speak("This item is not equipable")
        }
    }
    else if (input == 'drink healing potion' || input == 'use healing potion'){
        if (player.backpack.find(potion => potion.name === 'healing potion')){
            if (player.hp<player.max_hp){
                let roll = Roll(5,false,6)
                player.hp += roll.total
                if (player.hp>player.max_hp){
                    player.hp = player.max_hp
                }
                let potion = player.backpack.find(potion => potion.name === 'healing potion')
                potion.uses -= 1
                if (potion.uses == 0){
                    player.backpack.splice(player.backpack.indexOf(potion),1)
                }
                let potions = player.backpack.filter(potion => potion.name === 'healing potion')
                let totalUses = 0
                for (let i=0; i<potions.length; i++){
                totalUses += potions[i].uses
                }
                speak('You drink your healing potion. Rolling the dice you got '+roll.rolls+' for a total of '+roll.total+'. so you heal for '+roll.total+' and you now have '+player.hp+' hit points left. Your healing potion has '+totalUses+' left')
            }
            else{
                speak('You are already at full health')
            }
        }
        else{
            speak("you don't have any healing potions")
        }
    }
    else{
        speak('Invalid Input')
    }
}
function town(){
    speak("You are in town. Some things you can say are, go to shop, go to dungeon, or help for a full list of commands.")
    setTimeout(() => {input = window.prompt('What would you like to do?').toLowerCase();
    if (input == 'go to shop' || input == 'shop'){
        shop()
    }
    else if (input == 'go to dungeon' || input == 'dungeon'){
        speak('You are in the dungeon. Monster battles will be added soon!')
        setTimeout(() => {dungeon()},200)
    }
    else if (input == 'help'){
        speak('here is a full list of commands you can do in town. go to shop. go to dungeon. equip, and then the weapon or armor you want and have in your inventory. what are my stats. drink and then the potion you want and have')
        setTimeout(() => {town()},200)
    }
    else{
        globalInputs()
        setTimeout(() => {town()},200)
    }
    },200)
}
function shop(){
    speak('You are in the shop. Some things you can say are: list weapons for sale, list armors for sale, list spells for sale, list potions for sale. buy, and then the item you want and can afford. go to town. or help for a full list of commands')
    setTimeout(() => {input = window.prompt('What would you like to do').toLowerCase();
    if (input == 'weapons' || input == 'list weapons for sale' || input == 'what weapons are for sale'){
        let list = []
        for (let i=0; i<weapons.length; i++){
            list.push(weapons[i].name+". Does "+weapons[i].dice+" to "+weapons[i].dice*weapons[i].sides+" damage. cost "+weapons[i].cost+" gold.")
        }
        speak('Here are the weapons for sale.'+list)
    }
    else if (input == 'armors' || input == 'list armors for sale' || input == 'what armors are for sale'){
        let list = []
        for (let i=0; i<armors.length; i++){
            list.push(armors[i].name+". Has an armor class of "+armors[i].armorClass+". cost "+armors[i].cost+" gold.")
        }
        speak('Here are the armors for sale.'+list)
    }
    else if (input == 'potions' || input == 'list potions for sale' || input == 'what potions are for sale'){
        speak('here are the potions for sale. Healing potion. heals 5 to 30 hit points. has 3 uses. cost 15 gold')
    }
    else if (weapons.find(item => item.name === input.slice(4,input.length)) && input.slice(0,3) == 'buy'){
        let weapon = weapons.find(item => item.name === input.slice(4,input.length))
        if (player.gold>=weapon.cost){
            player.gold -= weapon.cost
            speak('You bought the '+weapon.name+' for '+weapon.cost+" gold, and it is now in your inventory. You now have "+player.gold+" gold left.")
            player.backpack.push(weapon)
        }
        else{speak("you don't have enough gold to buy the "+weapon.name+". It cost "+weapon.gold+" gold. You have "+player.gold+" gold.")}
    }
    else if (armors.find(item => item.name === input.slice(4,input.length)) && input.slice(0,3) == 'buy'){
        let armor = armors.find(item => item.name === input.slice(4,input.length))
        if (player.gold>=armor.cost){
            player.gold -= armor.cost
            speak('You bought the '+armor.name+' for '+armor.cost+' gold, and it is now in your inventory. You now have '+player.gold+' gold left.')
            player.backpack.push(armor)
        }
        else{speak("you don't have enough gold to buy the "+armor.name+'. It cost '+armor.cost+' gold. You have '+player.gold+' gold.')}
    }
    else if (input.slice(4,input.length) == 'healing potion' && input.slice(0,3) == 'buy'){
        if (player.gold>=15){
            player.gold -= 15
            player.backpack.push(new HealthPotion())
            speak('You bought the healing potion for 15 gold and have '+player.gold+' gold left')
        }
        else{speak('You do not have enough gold to buy a healing potion. it cost 15 gold. You have '+player.gold+' gold')}
    }
    else if (input == 'town' || input == 'go to town'){
        town()
    }
    else if (input == 'help'){
        speak('here is a full list of commands you can do in the shop. go to town. list weapons for sale. list armors for sale. list potions for sale. lits spells for sale. buy, and then the item you want and can afford. equip, and then the item you want and have in your inventory. what are my stats. drink and then the potion you want and have.')
    }
    else{
        globalInputs()
    }
    if (input != 'town' && input != 'go to town'){
        setTimeout(() => {shop()},200)
    }
    },200)
}
function dungeon(){
    let txt = ''
    if (rooms[room].south == true){
        if (rooms[room].southRoom != 'town'){txt = txt+' South there is a room.'}
        else{txt = txt+' South is back to town.'}
    }
    if (rooms[room].north == true){
        txt = txt+' North there is a room.'
    }
    if (rooms[room].west == true){
        txt = txt+' West there is a room.'
    }
    if (rooms[room].east == true){
        txt = txt+' East there is a room.'
    }
    if (rooms[room].monster != undefined){
        page = 'battle'
        let monster = rooms[room].monster
        monster.step = 1
        monster.turn = undefined
        txt = txt+rooms[room].monster.description
        txt = txt+'. First we must roll to see who goes first. You need to roll the '+monster.name+"'s dexterity of "+monster.dexterity+" or higher on a 20-sided die. This requires a dexterity test."+
        " Your dexterity of "+player.dexterity+" gives you a bonus of "+player.dexterityBonus+" to the roll. press enter to continue."
    }
    speak(txt)
    if (rooms[room].monster == undefined){
        setTimeout(() => {input = window.prompt('What would you like to do?').toLowerCase();
        if (input == 'south' || input == 's' || input == 'move south' || input == 'go south'){
            if (rooms[room].south == true){
                if (rooms[room].southRoom != 'town'){
                    room = rooms[room].southRoom
                    setTimeout(() => {dungeon()},200)
                }
                else{town()}
            }
            else{
                speak('You cannot go that way')
                setTimeout(() => {dungeon()},200)
            }
        }
        else if (input == 'north' || input == 'n' || input == 'move north' || input == 'go north'){
            if (rooms[room].north == true){
                room = rooms[room].northRoom
            }
            else{
                speak('You cannot go that way')
            }
            setTimeout(() => {dungeon()},200)
        }
        else if (input == 'west' || input == 'w' || input == 'move west' || input == 'go west'){
            if (rooms[room].west == true){
                room = rooms[room].westRoom
            }
            else{
                speak('You cannot go that way')
            }
            setTimeout(() => {dungeon()},200)
        }
        else if (input == 'east' || input == 'e' || input == 'move east' || input == 'go east'){
            if (rooms[room].east == true){
                room = rooms[room].eastRoom
            }
            else{
                speak('You cannot go that way')
            }
            setTimeout(() => {dungeon()},200)
        }
        else if (input == 'help'){
            speak('here is a full list of commands you can do in the dungeon. move, then one of the following directions: north,south,east, and west. what are my stats. equip, and then the armor or weapon you want and have. drink, and then the potion you want and have.')
            setTimeout(() => {dungeon()},200)
        }
        else{
            globalInputs()
            setTimeout(() => {dungeon()},200)
        }
        },200)
    }
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
                        let bonus = input+'Bonus'
                        if(roll.total<=5){player[bonus] = -3}
                        else if(roll.total<=7){player[bonus] = -2}
                        else if(roll.total<=9){player[bonus] = -1}
                        else if(roll.total<=11){player[bonus] = 0}
                        else if(roll.total<=13){player[bonus] = 1}
                        else if(roll.total<=15){player[bonus] = 2}
                        else{player[bonus] = 3}
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
                        setTimeout(() => {a()},500)
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
                page = 'town'
                speak("Congratulations! You have completed creating your character! Here are your stats: Strength "+player.strength+". Intelligence "+player.intelligence+". Dexterity "+player.dexterity+". Constitution "+player.constitution+". Wisdom "+player.wisdom+". Perception "+player.perception+". Charisma "+player.charisma+". hit points "+player.hp+'. Gold '+player.gold+'. press enter to begin playing')
            }
        }
        else if (page == 'town'){
            town()
        }
        else if (page == 'battle'){
            let monster = rooms[room].monster
            if(monster.step == 1){
                let roll = Roll(1,false,20)
                let total = roll.total+player.dexterityBonus
                let txt = 'Rolling the die you got a '+roll.total+' plus your dexterity bonus of '+player.dexterityBonus+' gives you a total of '+total
                if (total>=monster.dexterity){
                    monster.turn = 'player'
                    txt = txt+'. You rolled higher than the '+monster.name+"'s dexterity of "+monster.dexterity+', so you get to go first. press enter to continue'
                }
                else{
                    monster.turn = 'monster'
                    txt = txt+'. You rolled lower than the '+monster.name+"'s dexterity of "+monster.dexterity+", so the "+monster.name+" gets to go first. press enter to continue"
                }
                speak(txt)
                monster.step = 2
            }
            else if (monster.turn == 'player'){
                if (monster.step == 2){
                    function b(){
                        speak('It is your turn. some things you can do are. Attack or drink and then the potion you want and have')
                        setTimeout(() => {input = window.prompt('What would you like to do?').toLowerCase();
                        if (input == 'attack' || input == 'a'){
                            function a(){
                                input = window.prompt('How would you like to attack? High, middle, or low?').toLowerCase();
                                if (input == 'high'){
                                    monster.playerChoice = 'up high'
                                }
                                else if (input == 'middle'){
                                    monster.playerChoice = 'in the middle'
                                }
                                else if (input == 'low'){
                                    monster.playerChoice = 'down low'
                                }
                                if (input == 'high' || input == 'middle' || input == 'low'){
                                    monster.monsterChoice = generateMonsterChoice()
                                    speak('You attack '+monster.playerChoice+'. The '+monster.name+' defends '+monster.monsterChoice+'. press enter to continue')
                                    monster.step = 3
                                }
                                else{
                                    speak('Invalid input')
                                    setTimeout(() => {a()},200)
                                }
                            }
                            a()
                        }
                        else if (input == 'drink healing potion' || input == 'use healing potion'){
                            if (player.backpack.find(item => item.name === 'healing potion')){
                                if (player.backpack.find(potion => potion.name === 'healing potion')){
                                    if (player.hp<player.max_hp){
                                        let roll = Roll(5,false,6)
                                        player.hp += roll.total
                                        if (player.hp>player.max_hp){
                                            player.hp = player.max_hp
                                        }
                                        let potion = player.backpack.find(potion => potion.name === 'healing potion')
                                        potion.uses -= 1
                                        if (potion.uses == 0){
                                            player.backpack.splice(player.backpack.indexOf(potion),1)
                                        }
                                        let potions = player.backpack.filter(potion => potion.name === 'healing potion')
                                        let totalUses = 0
                                        for (let i=0; i<potions.length; i++){
                                            totalUses += potions[i].uses
                                        }
                                        monster.turn = 'monster'
                                        monster.step = 2
                                        speak('You drink your healing potion. Rolling the dice you got '+roll.rolls+' for a total of '+roll.total+'. so you heal for '+roll.total+' and you now have '+player.hp+' hit points left. Your healing potion has '+totalUses+' left')
                                    }
                                    else{
                                        speak('You are already at full health')
                                    }
                                }
                                else{
                                    speak("you don't have any healing potions")
                                }
                            }
                        }
                        else{
                            speak('Invalid Input')
                            setTimeout(() => {b()},200)
                        }
                        },200)
                    }
                    b()
                }
                else if (monster.step == 3){
                    let roll = Roll(1,false,20)
                    let total = player.strengthBonus+roll.total
                    let txt = 'Now we must determine if you hit the '+monster.name+'. You must roll higher than the '+monster.name+"'s armor class of "+monster.armorClass+
                    " on a 20-sided die. This requires a strength test. Your strength of "+player.strength+' gives you a bonus of '+player.strengthBonus+' to your roll.'+
                    ' Rolling the die,  you got a '+roll.total+' plus your strength bonus of '+player.strengthBonus+' gets you a total of '+total
                    if (total>=monster.armorClass){
                        monster.step = 4
                        txt = txt+'. You rolled higher than the '+monster.name+"'s armor class of "+monster.armorClass+' and hit it. press enter to continue'
                    }
                    else{
                        monster.step = 2
                        monster.turn = 'monster'
                        txt = txt+'. You rolled lower than the '+monster.name+"'s armor class of "+monster.armorClass+' and miss. press enter to continue'
                    }
                    speak(txt)
                }
                else if (monster.step == 4){
                    let roll = Roll(player.weapon.dice,false,player.weapon.sides)
                    let dmg = roll.total
                    let txt = 'You swing at the '+monster.name+' with your '+player.weapon.name+". Rolling for damage you got "+
                    roll.rolls+' for a total of '+dmg
                    if (monster.playerChoice == monster.monsterChoice){
                        dmg = Math.ceil(dmg/2)
                        monster.hp -= dmg
                        if (monster.hp<0){
                            monster.hp = 0
                        }
                        txt = txt+'. But since the '+monster.name+'successfully defended the attack you only do half damage rounded up. So you do a total of '+dmg+' damage to the '+monster.name+
                        '. The '+monster.name+' has '+monster.hp+' hit points left'
                    }
                    else{
                        monster.hp -= dmg
                        if (monster.hp<0){monster.hp = 0}
                        txt = txt+'. So you do '+dmg+' damage to the '+monster.name+'. The '+monster.name+' has '+monster.hp+' hit points left'
                        if (monster.hp==0){
                            player.gold += monster.gold
                            txt = txt+'. You have defeated the '+monster.name+'! searching the '+monster.name+' you find '+monster.gold+' gold and you now have '+player.gold+' gold'
                        }
                    }
                    speak(txt+'. press enter to continue')
                    if (monster.hp == 0){
                        page = 'town'
                        rooms[room].monster = undefined
                        setTimeout(() => {dungeon()},200)
                    }
                    else{
                        monster.step = 2
                        monster.turn = 'monster'
                    }
                }
            }
            else if (monster.turn == 'monster'){
                if (monster.step == 2){
                    function a(){
                        speak('The '+monster.name+' is attacking you. How will you attempt to defend?')
                        setTimeout(() => {input = window.prompt(' High, middle, or low?').toLowerCase();
                            if (input == 'high'){monster.playerChoice = 'up high'}
                            if (input == 'middle'){monster.playerChoice = 'in the middle'}
                            if (input == 'low'){monster.playerChoice = 'down low'}
                            if (input == 'low' || input == 'middle' || input == 'high'){
                                monster.monsterChoice = generateMonsterChoice()
                                monster.step = 3
                                speak('You defend '+monster.playerChoice+'. The '+monster.name+' attacks '+monster.monsterChoice+'. press enter to continue')
                            }
                            else{
                                speak('Invalid input')
                                setTimeout(() => {a()},200)
                            }
                        },200)
                    }
                    a()
                }
                else if (monster.step == 3){
                    let roll = Roll(1,false,20)
                    let txt = 'Now we must determine if the '+monster.name+' hits you. The '+monster.name+' must roll your armor class of '+player.armor.armorClass+
                    'or higher on a 20-sided die. Rolling the die the '+monster.name+' got a '+roll.total+'.'
                    if (roll.total>=player.armor.armorClass){
                        monster.step = 4
                        txt = txt+' The '+monster.name+' rolled higher than your armor class of '+player.armor.armorClass+' and hits you! press enter to continue'
                    }
                    else{
                        monster.step = 2
                        monster.turn = 'player'
                        txt = txt+' The '+monster.name+' rolled lower than your armor class of '+player.armor.armorClass+' and misses you! press enter to continue'
                    }
                    speak(txt)
                }
                else if (monster.step == 4){
                    let roll = Roll(monster.dice,false,monster.sides)
                    let dmg = roll.total
                    let txt = 'Rolling for damage the '+monster.name+' got '+roll.rolls+' for a total of '+dmg
                    if (monster.playerChoice == monster.monsterChoice){
                        dmg = Math.ceil(dmg/2)
                        player.hp -= dmg
                        if(player.hp<0){player.hp=0}
                        txt = txt+". but since you successfully defended the attack the "+monster.name+" only does half damage rounded up for a total of "+dmg+' damage.'+
                        ' So you have '+player.hp+' hit points left'
                    }
                    else{
                        player.hp -= dmg
                        if(player.hp<0){player.hp=0}
                        txt = txt+'. So you take '+dmg+' damage. You now have '+player.hp+' hit points left'
                    }
                    if (player.hp == 0){
                        let roll = Roll(1,false,20)
                        let total = roll.total+player.wisdomBonus
                        txt = txt+'. You are dead. but wait it is nor over yet, lets see if the gods will revive you. When you are revived you start back at the start of the dungeon with half of your max hitpoints remaining.'+
                        ' This requires a wisdom test. each time you are revived it becomes harder and harder to be revived again and can only be done up to 3 times. You have '+revivesLeft+' revives left.'+
                        ' On order to be revived you need to roll an '+mustRoll+' or higher on a 20-sided die. This requires a wisdom test. Your wisdom of '+player.wisdom+' gives your roll a bonus of '+player.wisdomBonus+
                        '. Rolling the die you got a '+roll.total+' plus your wisdom bonus of '+player.wisdomBonus+' gets you a total of '+total+'.'
                        if (total>=mustRoll){
                            mustRoll += 4
                            revivesLeft -= 1
                            monster.turn = undefined
                            monster.step = 1
                            room = 0
                            player.hp = Math.ceil(player.max_hp/2)
                            txt = txt+' You rolled higher than a '+mustRoll+' and the gods are pleased and revive you back at the start'
                            speak(txt)
                            setTimeout(() => {dungeon()},200)
                        }
                        else{
                            txt = txt+' You rolled lower than a '+mustRoll+' and the gods leave you there for the monsters of the dungeon to feed on. press r to restart'
                            speak(txt)
                        }
                    }
                    else{
                        speak(txt+'. press enter to continue')
                        monster.turn = 'player'
                        monster.step = 2
                    }
                }
            }
        }
    }
    if (e.key == 'r' && player.hp == 0){
        location.reload()
    }
})
