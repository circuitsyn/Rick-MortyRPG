$(document).ready(function() {
//scrap code:
//  $().empty(); - used to clear contents of a div or item by id
//  .addClass("classNameHere") to be used to add a class for styling

//below loop is checking array for value to do an action
// var found = false;
// for(var i = 0; i < players.length; i++) {
//     if (players[i].yourPlayer == 'true') {
//         $("#yourChar").append(#char1);
//         break;
//     }
// }


//array to whole all objects to be checked
var players = [pickleRick,mrMeeSeeks,scaryTerry,morty];

var pickleRick = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 180,
    attackPwr: 15,
    counterAttkPwr: 15,
    damage: 0,
};

var mrMeeSeeks = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 100,
    attackPwr: 5,
    counterAttkPwr: 20,
    damage: 0,
};

var scaryTerry = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 120,
    attackPwr: 8,
    counterAttkPwr: 10,
    damage: 0,
};

var morty = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 110,
    attackPwr: 10,
    counterAttkPwr: 5,
    damage: 0,
};



$("#char1").click(function() {
    console.log(pickleRick.yourPlayer);
    pickleRick.yourPlayer = true;
    console.log(pickleRick.yourPlayer);
    $("#yourChar").append($("#char1"));
    // for(var i = 0; i < players.length; i++) {
    //     if (players[i].yourPlayer == 'true') {
    //         console.log(players[i]);
    //         $("#yourChar").append(".char1");
    //         break;
    //     }
    // }
    

  });






















});