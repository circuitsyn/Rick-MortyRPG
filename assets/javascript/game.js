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
    gameOn: false, //boolean key to track single defender in game location
};

var pickleRick = {
    name: 'Pickle Rick',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 180,
    attackPwr: 10,
    attkHold: 0,
    counterAttkPwr: 20,
    damage: 0,
    text2Push: '#health1',
    barDecreaseYour: 0,
    barDecreaseDef: 0,
};

var mrMeeSeeks = {
    name: 'Mr. MeeSeeks',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 100,
    attackPwr: 15,
    attkHold: 0,
    counterAttkPwr: 5,
    damage: 0,
    text2Push: '#health2',
    barDecreaseYour: 0,
    barDecreaseDef: 0,
};

var scaryTerry = {
    name: 'Scary Terry',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 150,
    attackPwr: 8,
    attkHold: 0,
    counterAttkPwr: 10,
    damage: 0,
    text2Push: '#health3',
    barDecreaseYour: 0,
    barDecreaseDef: 0,
};

var morty = {
    name: 'Morty',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 120,
    attackPwr: 10,
    attkHold: 0,
    counterAttkPwr: 5,
    damage: 0,
    text2Push: '#health4',
    barDecreaseYour: 0,
    barDecreaseDef: 0,
};

console.log(gameStatus.stage);
//character one behavior flow
$("#char1").click(function() {
    if (gameStatus.gameOn != true){


        if (gameStatus.stage == 0){
            gameStatus.stage++;
            console.log(gameStatus.stage);
            $("#yourChar").append($("#char1"));
            yourCharacter = pickleRick;
            pickleRick.attkHold = pickleRick.attackPwr;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char2"));
            $("#enemiesAvail").append($("#char3"));
            $("#enemiesAvail").append($("#char4"));
        }
        // console.log(gameStatus.stage);
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char1"));
            defenderInPlace = true;
            gameStatus.gameOn = true;
            defenderChar = Object.assign({},pickleRick);
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }
    else {
        
    }
  });

//character two behavior flow
$("#char2").click(function() {
    if (gameStatus.gameOn != true){    
        if (gameStatus.stage == 0){
            gameStatus.stage++;
            $("#yourChar").append($("#char2"));
            yourCharacter = mrMeeSeeks;
            mrMeeSeeks.attkHold = mrMeeSeeks.attackPwr;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char3"));
            $("#enemiesAvail").append($("#char4"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char2"));
            defenderInPlace = true;
            gameStatus.gameOn = true;
            defenderChar = Object.assign({},mrMeeSeeks);
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }
    else {

    }
  });

//character three behavior flow
$("#char3").click(function() {
    if (gameStatus.gameOn != true){
        if (gameStatus.stage == 0){
            gameStatus.stage++;
            $("#yourChar").append($("#char3"));
            yourCharacter = scaryTerry;
            scaryTerry.attkHold = scaryTerry.attackPwr;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char2"));
            $("#enemiesAvail").append($("#char4"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char3"));
            defenderInPlace = true;
            gameStatus.gameOn = true;
            defenderChar = Object.assign({},scaryTerry);
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }
    else {

    }
  });

//character four behavior flow
$("#char4").click(function() {
    if (gameStatus.gameOn != true){
        if (gameStatus.stage == 0){
            gameStatus.stage++;
            $("#yourChar").append($("#char4"));
            yourCharacter = morty;
            morty.attkHold = morty.attackPwr;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char2"));
            $("#enemiesAvail").append($("#char3"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char4"));
            defenderInPlace = true;
            gameStatus.gameOn = true;
            defenderChar = Object.assign({},morty);
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }
    else {

    }

        // else if ((gameStatus.stage == 2) && (dead == false)) {

        // }
        // else {
        //     return;
        // }

  });

  //attack button functionality
  $("#attack").on("click", function() {
    if (defenderInPlace == true){
        
        //your health calculated and displayed based on click
        yourCharacter.health = yourCharacter.health - defenderChar.counterAttkPwr;
        $(yourCharacter.text2Push).text(yourCharacter.health);
        yourCharacter.damage += defenderChar.counterAttkPwr;

        //defenders health calculated and displayed based on click
        defenderChar.health = defenderChar.health - yourCharacter.attackPwr;
        yourCharacter.attackPwr += yourCharacter.attkHold;
        $(defenderChar.text2Push).text(defenderChar.health);
        defenderChar.damage += yourCharacter.attackPwr;

        //calculate bar decrease ratio for progress bars
        yourCharacter.barDecreaseYour = (1-(yourCharacter.damage/yourCharacter.health))*100;
        $(yourCharacter.text2Push).css('width', (yourCharacter.barDecreaseYour +'%'));
        console.log(yourCharacter.barDecreaseYour);
        defenderChar.barDecreaseDef = (1-(defenderChar.damage/defenderChar.health))*100;
        $(defenderChar.text2Push).css('width', (yourCharacter.barDecreaseYour +'%'));
        console.log(yourCharacter.barDecreaseDef);


        if ((defenderChar.health <= 0)&&(gameStatus.defKillCount > 0)){
            alert("You defeated " + defenderChar.name + " congrats! Now pick your next opponent!");
            $("#defender").empty();
            gameStatus.defKillCount--;
            gameStatus.gameOn = false;
            if (gameStatus.defKillCount == 0){
                alert("You've won the game! Click Restart to try and win again!");
                $("#restart").addClass("restartButtonShow");
            }

        }

        
        


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