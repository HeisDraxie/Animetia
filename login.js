// alert("Welcome To Login Page")

const TD = [
    "DO NOT CHANGE CODE!!",
    "Learn js ",
    "Watch Anime"
];

// let Input = document.getElementById("floatingPassword");
// let button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
//     console.log("Submitted");
// })

// Input.addEventListener("keypress", function(event){
//     console.log("Password length");
// })


// let info = prompt("Are You A New User");
// if (info === "Yes") {
//     alert("Please Create An Account With Us!!");
// }
// else if (info === "No") {
//     console.error("Please Continue")
// }
// else if (info === "yes") {
//     alert("Please Create An Account With Us!!")
// }
// else if (info === "no") {
//     alert("Please Continue")
// }
// else {
//     alert("Invalid Response!!!")
// }

// let Database = [
//     {
//         Username: "heis draxie",
//         password: "002288che",
//         Age: 18,
//         Birthday: "25th of June, 2003",
//         Hobby: "Watching Anime" + ",Dancing",
//         IsMarried: false,
//         Pets: "None",
//     }
// ];

// let Users = [
//     User1 = {
//          username: "Heis Draxie",
//          password: "002288"
//      },
//     User2 = {
//          username: "Favour",
//          password: "002288"
//      },
//     User3 = {
//          username: "Aziba",
//          password: "002288che"
//      }
//  ];

//  let userNameprompt = prompt("Username?");
//  let passwordprompt  = prompt("Password");

//  function signIn(username, password) {
//      if (username === Database[0].Username && 
//         password === Database[0].password){
//             console.log(Users);
//     } else {
//         alert("Sorry, incorrect username or password!");
//     }
// };

// signIn(userNameprompt, passwordprompt);

let TDlength = TD.length;
for (let i=0; i < TD.length; i++) {
    console.log (TD);
}

function logTD(i) {
    console.log(TD)
};

TD.forEach(logTD);
