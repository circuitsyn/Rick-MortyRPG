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
    defKillCount: 3,
};

var pickleRick = {
    name: 'Pickle Rick',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 380,
    attackPwr: 15,
    counterAttkPwr: 15,
    damage: 0,
    text2Push: '#health1',
    barDecrease: '',
};

var mrMeeSeeks = {
    name: 'Mr. MeeSeeks',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 400,
    attackPwr: 5,
    counterAttkPwr: 20,
    damage: 0,
    text2Push: '#health2',
    barDecrease: '',
};

var scaryTerry = {
    name: 'Scary Terry',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 420,
    attackPwr: 8,
    counterAttkPwr: 10,
    damage: 0,
    text2Push: '#health3',
    barDecrease: '',
};

var morty = {
    name: 'Morty',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 510,
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
        // defenderChar = pickleRick;
        defenderChar = Object.assign({},pickleRick);
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
        // defenderChar = mrMeeSeeks;
        defenderChar = Object.assign({},mrMeeSeeks);
    }

  });

//character three behavior flow
$("#char3").click(function() {
    
    if (gameStatus.stage == 0){
        gameStatus.stage++;
        $("#yourChar").append($("#char3"));
        yourCharacter = scaryTerry;
        $("#enemiesAvail").append($("#char1"));
        $("#enemiesAvail").append($("#char2"));
        $("#enemiesAvail").append($("#char4"));
    }
    
    else if (gameStatus.stage == 1) {
        $("#defender").append($("#char3"));
        defenderInPlace = true;
        // defenderChar = scaryTerry;
        defenderChar = Object.assign({},scaryTerry);
        console.log(defenderChar);
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
        // defenderChar = morty;
        defenderChar = Object.assign({},morty);


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
        yourCharacter.attackPwr = (yourCharacter.attackPwr *2);
        console.log(yourCharacter.attackPwr);
        $(defenderChar.text2Push).text(defenderChar.health);

        if ((defenderChar.health <= 0)&&(gameStatus.defKillCount > 0)){
            alert("You defeated " + defenderChar.name + " congrats! Now pick your next opponent!");
            $("#defender").empty();
            gameStatus.defKillCount--;

        }

        //else if statement to alert the user they have one as well as show the restart button
        else if ((defenderChar.health <= 0)&&(gameStatus.defKillCount <= 0)) {
            alert("You've won the game! Click Restart to try and win again!");
            $("#restart").addClass("restartButtonShow");
        }

        //calculate bar decrease ratio for progress bars
        // yourCharacter.barDecrease = (1-(yourCharacter.damage/yourCharacter.health))*100;
        // defenderChar.barDecrease = (1-(defenderChar.damage/defenderChar.health))*100;


    }
    else {
        return;
    }
  });

  //onclick event for restart button to reload page to restart
  $("#restart").on("click", function() {
    window.location.reload();

  });






















});