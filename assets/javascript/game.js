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

//window.location.reload(); -- reload windows

//array to whole all objects to be checked
var players = [pickleRick,mrMeeSeeks,scaryTerry,morty];

var gameStatus = {
    stage: 0,
};

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

console.log(gameStatus.stage);
//character one behavior flow
$("#char1").click(function() {
    debugger;
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        console.log(gameStatus.stage);
        $("#yourChar").append($("#char1"));
        $("#enemiesAvail").append($("#char2"));
        $("#enemiesAvail").append($("#char3"));
        $("#enemiesAvail").append($("#char4"));
    }
    // console.log(gameStatus.stage);
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char1"));
    }

  });

//character two behavior flow
$("#char2").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        $("#yourChar").append($("#char2"));
        $("#enemiesAvail").append($("#char1"));
        $("#enemiesAvail").append($("#char3"));
        $("#enemiesAvail").append($("#char4"));
    }
    
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char2"));
    }

  });






















});