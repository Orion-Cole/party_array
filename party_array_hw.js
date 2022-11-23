let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    }
]

console.log('The Adventure Begins!')
console.log(party);

//Prompt 1: double the hitpoints of everyone in the party ----------------------------------
let healthMultiplier = 2; 
const multiplyHealth = (number) => {
    party.forEach((person) => {
        person.hitpoints = person.hitpoints*number;
    })
    return console.log('The party was blessed! All hitpoints have doubled.');
}
multiplyHealth(healthMultiplier);
console.log(party)




// //Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp ---------------------------
let player = 'Timothy';
let damage = 5;

const damagePlayer = (p, d) => {
    party.forEach((element) => {
        if (element.name == p) {
            element.hitpoints = element.hitpoints - d;
            return console.log(element.name + ' took ' + d + ' damage!')
        }
    })
    return console.log(party);
}
damagePlayer(player, damage);




// //Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it -----------------------------------

let companion = 'Tony';
let morph = 'jellyfish';

const morphAnimal = (a, b)=> {
    party.forEach((player) => {
        if (player.companion.name == a) {
            player.companion.type = b;
            return console.log(a + ' was turned into a ' + b + '!');
        }
    })
    return console.log(party);
}
morphAnimal(companion, morph);

//Prompt 4: Timothy drank his potion. Raise his hitpoints by 20 and remove "potion" from his belongings. ----------------------------------

let consumer = 'Timothy';
let item = 'potion';
let healthModifier = 20;

const consumeItem = (a, b, c) => {
    party.forEach((current) => { //loops through party array
        if (current.name == a) { //checks if Timothy
            let index = current.belongings.indexOf(b); //finds location of 'potion' in belongings array
            current.belongings.splice(index, 1); //removes potion from belongings array
            current.hitpoints = current.hitpoints + c; //adds healthModifier to current health
            return console.log(a + ' drank a potion and gained ' + c + ' health.'); //prints result
        }
    })
}

consumeItem(consumer, item, healthModifier)
console.log(party)




//Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings. -------------------------

let victim = 'Joline';
let belonging = 'bread';
let thief = 'Timothy';

const stealStuff = (v, b, t) => {
    party.forEach((current) => {
        if(current.name == v) {
            let stuffIndex = current.belongings.indexOf(b); //find index of bread in Joline's array
            current.belongings.splice(stuffIndex, 1); //remove bread from Joline's array
        } else if (current.name == t) {
           current.belongings.push(b)  //add bread to Timothy's array
        }
    })
    return console.log(t + " stole " + v + "'s " + b)
}

stealStuff(victim, belonging, thief)
console.log(party)




//Prompt 6: Joline got upset and left the party. Take her out of the array. (leaving member is parameter) ----------------------------------------

let leavingMember = 'Joline';

const leaveParty = (person) => {
  let index = party.findIndex((current) => current.name == person);
  party.splice(index, 1);
  return console.log(person + ' has left the party...')
}

leaveParty(leavingMember)
console.log(party)



//Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter) -----------------------------

let newMember = {
    name: 'Chase the Wizard',
    hitpoints: 10,
    belongings: ["staff", "potion", "scroll"],
    companion: {
        name: "Alistor",
        type: "owl"
    }
}

const addToParty = (person) => {
    party.push(person);
    return console.log('A new adventurer has joined the party!');
}

addToParty(newMember)
console.log(party)




//Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)

let foundGold = 200;

const addGold = (amount) => {
    party.forEach((each) => {
        dividedGold = amount/party.length; //divides gold evenly
        each.gold = Math.floor(dividedGold) //rounds gold down
    })
    return console.log('The party found ' + amount + ' gold!')
}

addGold(foundGold)
console.log(party)



//Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. ---------------------------------------

let owner = 'Sarah';
let newPet = {name: 'Yogi', type: 'Bear'};
let petCost = 30;

const changePet = (o, np, pc) => {
    party.forEach((person) => {
        if(person.name == o) {
            let petName = np.name;
            let petType = np.type;
            person.companion.name = petName;
            person.companion.type = petType;
            person.gold = person.gold - pc;
            return console.log(o + ' got a ' + person.companion.type + ' named ' + person.companion.name + '.');
        }
    })
}

changePet( owner, newPet, petCost)
console.log(party)

//Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" -----------------------------


let itemOwner = 'Timothy';
let ownedItem = 'sword';
let changedItem = 'rusty sword';

const ageItem = (i, o, c) => {
    party.forEach((person) => {
        if (person.name == i) {
            let itemIndex = person.belongings.indexOf(o);
            person.belongings[itemIndex] = c;
            return console.log(i + "'s " + o + " now a " + c + ".")
        }
    })
}

ageItem(itemOwner, ownedItem, changedItem)
console.log(party)


//Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.

let newLeader = 'Chase the Wizard';

const setLeader = (leader) => {
    party.forEach((person) => {
        if (person.name == leader) {
                person.leader = true;
        } else {
            person.leader = false;
        }
    })
    return console.log(leader + ' has been made the leader of the party.');
}

setLeader(newLeader)
console.log(party)