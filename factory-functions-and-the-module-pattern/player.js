//creating a user object

function createUser(name){
    discordName = "@" + name;

    reputation = 0;
    getReputation = () => reputation;
    giveReputation = () => reputation += 1;

    return {name, discordName, getReputation, giveReputation};
}

const userOne = createUser('Loko');

for(let i = 0; i < 10; i++){
    userOne.giveReputation();
}

// console.log({name: userOne.name, reputation: userOne.getReputation()});

//creating a player object
function createPlayer(name, level=1){

    const {Username, discordName, giveReputation, getReputation} = createUser(name);

    const inscreaseLevel = () => level++;

    return {name, level,Username, discordName, giveReputation, getReputation, inscreaseLevel};
}

const playerOne = createPlayer('Loko');

console.log({name: playerOne.name, level: playerOne.level, discordName: playerOne.discordName});
