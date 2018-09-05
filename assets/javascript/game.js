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
var gameStatus = {
    stage: 0,
    dead: false,
    defenderInPlace: false,
    yourCharacter: '',
};

var pickleRick = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 180,
    attackPwr: 15,
    counterAttkPwr: 15,
    damage: 0,
    text2Push: '#health1',
    barDecrease: '',
};

var mrMeeSeeks = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 100,
    attackPwr: 5,
    counterAttkPwr: 20,
    damage: 0,
    text2Push: '#health2',
    barDecrease: '',
};

var scaryTerry = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 120,
    attackPwr: 8,
    counterAttkPwr: 10,
    damage: 0,
    text2Push: '#health3',
    barDecrease: '',
};

var morty = {
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 110,
    attackPwr: 10,
    counterAttkPwr: 5,
    damage: 0,
    text2Push: '#health4',
    barDecrease: '',
};

console.log(gameStatus.stage);
//character one behavior flow
$("#char1").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        console.log(gameStatus.stage);
        $("#yourChar").append($("#char1"));
        yourCharacter = pickleRick;
        $("#enemiesAvail").append($("#char2"));
        $("#enemiesAvail").append($("#char3"));
        $("#enemiesAvail").append($("#char4"));
    }
    // console.log(gameStatus.stage);
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char1"));
        defenderInPlace = true;
        defenderChar = pickleRick;
    }

  });

//character two behavior flow
$("#char2").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        $("#yourChar").append($("#char2"));
        yourCharacter = mrMeeSeeks;
        $("#enemiesAvail").append($("#char1"));
        $("#enemiesAvail").append($("#char3"));
        $("#enemiesAvail").append($("#char4"));
    }
    
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char2"));
        defenderInPlace = true;
        defenderChar = mrMeeSeeks;
    }

  });

//character three behavior flow
$("#char3").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        $("#yourChar").append($("#char3"));
        yourCharacter = scarryTerry;
        $("#enemiesAvail").append($("#char1"));
        $("#enemiesAvail").append($("#char2"));
        $("#enemiesAvail").append($("#char4"));
    }
    
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char3"));
        defenderInPlace = true;
        defenderChar = scaryTerry;
    }

  });

//character four behavior flow
$("#char4").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        $("#yourChar").append($("#char4"));
        yourCharacter = morty;
        $("#enemiesAvail").append($("#char1"));
        $("#enemiesAvail").append($("#char2"));
        $("#enemiesAvail").append($("#char3"));
    }
    
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char4"));
        defenderInPlace = true;
        defenderChar = morty;


    }

    else if ((gameStatus.stage == 2) && (dead == false)) {

    }
    else {
        return;
    }

  });

  //attack button functionality
  $("#attack").on("click", function() {
    if (defenderInPlace == true){
        //your health calculated and displayed based on click
        yourCharacter.health = yourCharacter.health - defenderChar.counterAttkPwr;
        console.log(yourCharacter.health);
        $(yourCharacter.text2Push).text(yourCharacter.health);

        //defenders health calculated and displayed based on click
        defenderChar.health = defenderChar.health - yourCharacter.attackPwr;
        console.log(defenderChar.health);
        $(defenderChar.text2Push).text(defenderChar.health);

        //calculate bar decrease ratio for progress bars
        yourCharacter.barDecrease = (1-(yourCharacter.damage/yourCharacter.health))*100;
        defenderChar.barDecrease = (1-(defenderChar.damage/defenderChar.health))*100;


    }
    else {
        return;
    }
  });






















});