let TD = [
    "DO NOT CHANGE CODE!!",
    "DO NOT CHANGE CODE!!",
    "DO NOT CHANGE CODE!!"
];

for (let i=0; i < TD.length; i++){
    console.log (TD[i]);
}

function sayonara(Ohayo){
    alert(Ohayo)
};
sayonara("Ohayo");
sayonara("Welcome To Animetia");

let Users = [
    {
        username: "Heis Draxie",
        password: "002288"
    },
    {
        username: "heis draxie",
        password: "002288"
    },
    {
        username: "Aziba",
        password: "002288che"
    },
    {
        username: "aziba",
        password: "002288che"
    },
    {
        username: "Favour",
        password: "002288"
    },
    {
        username: "favour",
        password: "002288"
    },
];

let newsfeed = [
    {
        username: "Heis Draxie",
        timeline: "Watching Anime"
    },
    {
        username: "Favour",
        timeline: "Listening to Billie Eilish"
    },
    {
        username: "Aziba",
        timeline: "Goku-San"
    }
];

const userNameprompt = prompt("Username?");
const passwordprompt  = prompt("Password");

function isuservalid(username, password) {
    for (var i=0; i < Users.length; i++){
        if (Users[i].username === username &&
            Users[i].password === password) {
            return true;
        
        }
    }
    return false;
};


function signIn(username, password){
    console.log(isuservalid(username, password));
if (isuservalid(username, password)) {
    console.log(newsfeed);
} else {
    alert("Sorry, incorrect username or password!!");
};
}
signIn(userNameprompt, passwordprompt);

const name = "heis draxie";
const yourage = "18";
const favoriteanime = "dragon ball super";

const Greeting = `Hello ${name} you seem to be ${yourage}yrs old and your favorite anime is ${favoriteanime}`;

const greet = (name ='', age = 40, pet = 'cat') => {
    return `Hello ${name} you seem to be ${age-10} what a lovely ${pet} you have`
    
}

let info = prompt("What Is Your Favorite Anime");
if (info === "Dragon ball z") {
    console.log("Welcome");
} else if (info === "dragon ball z") {
    console.log("Welcome");
} else if (info === "Bleach") {
    console.log("Welcome");
} else if (info === "bleach") {
    console.log("Welcome");
} else if (info === "Naruto") {
    console.log("Welcome");
} else if (info === "naruto") {
    console.log("Welcome");
} else if (info === "Hunter x hunter") {
    console.log("Welcome");
} else if (info === "hunter x hunter") {
    console.log("Welcome");
} else if (info === "Attack on titans") {
    console.log("Welcome");
} else if (info === "attack on titans") {
    console.log("Welcome");
}else{
    console.log("Null");
}
let age = prompt("Please provide your age");
if (age === "") {
console.log("Null");
} else if ( Number(age) < 8) {
alert("Invalid User");
} else if (Number(age) < 15) {
alert("Welcome! Am sure you have not watched a lot of anime. But don't worry we are here for you");
} else if (Number(age) < 20) {
alert("Welcome Otaku!. Enjoy the ride!");
} else if (Number(age) > 20) {
alert("Welcome to Animetia. Enjoy the ride!");
}

class User{
    constructor(name, type) {
        console.log('user', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi am ${this.name}, I'm a ${this.type}`)
    }
}


class Admins extends User {
    constructor(name, type) {
        super(name, type)
        console.log('user', this);
    }
    play() {
        console.log(`Wow I'm currently learning to be a ${this.type}`);
    }
}

const User1 = new User('Heis Draxie', 'Junior Developer');
const User2 = new User('Aziba', 'Lazy boy tho');