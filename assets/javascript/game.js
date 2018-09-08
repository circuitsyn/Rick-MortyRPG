$(document).ready(function() {

//game status object to hold markers for game
var gameStatus = {
    stage: 0, //key to track what stage the game is at
    defenderInPlace: false, //boolean check used to make sure a defender is in place and no one else can
    yourCharacter: '', //key to hold the your player object
    defKillCount: 3, //key used to track kills to ask if you won the game later in if statement
    gameOn: false, //boolean key to track single defender in game location
    startMusic: '/assets/audio/Show_me_what_you_got!.mp3',
    loseMusic:  '/assets/audio/disqualified.mp3',

};

// var gameStatusAudio = new Audio();
// gameStatusAudio.src = "/assets/audio/Show_me_what_you_got!.mp3";

var pickleRick = {
    name: 'Pickle Rick',
    yourPlayer: false, //value to track if player chosen
    enemies: false, //value to track remainder enemies to choose from
    defender: false, //valie to track who the defender will be
    health: 180, //starting health
    attackPwr: 10, //attack power your character starts with
    attkHold: 0, //
    counterAttkPwr: 30,
    damage: 0,
    text2Push: '#health1',
    marginHealthHoldAsYour: 0, //variable to hold health for margin as yourChar
    marginHealthHoldAsDef: 0, //variable to hold health as Defender
    barDecreaseYour: 0, //tracking bar decrease amount to push to the margin style in the progress bar for your character
    barDecreaseDef: 0, //tracking bar decrease amount to push to the margin style in the progress bar for defender character
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
    marginHealthHoldAsYour: 0, //variable to hold health for margin as yourChar
    marginHealthHoldAsDef: 0, //variable to hold health as Defender
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
    marginHealthHoldAsYour: 0, //variable to hold health for margin as yourChar
    marginHealthHoldAsDef: 0, //variable to hold health as Defender
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
    marginHealthHoldAsYour: 0, //variable to hold health for margin as yourChar
    marginHealthHoldAsDef: 0, //variable to hold health as Defender
    barDecreaseYour: 0,
    barDecreaseDef: 0,
};
//play music to start game
// gameStatusAudio.play();



//character one behavior flow
$("#char1").click(function() {

    //Start of nested if statement to make sure click buttons on characters are disabled once characters are in place until win or loss
    if (gameStatus.gameOn != true){


        if (gameStatus.stage == 0){
            gameStatus.stage++; //increase by 1 to move game stage checker to next level
            
            $("#yourChar").append($("#char1")); //appent character 1 to your character section
            yourCharacter = pickleRick; //store charcter object into variable for game manipulation
            pickleRick.attkHold = pickleRick.attackPwr; //establish attack power for doubling
            pickleRick.marginHealthHoldAsYour = pickleRick.health;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char2")); //move character 2 to enemies available
            $("#enemiesAvail").append($("#char3")); //move character 3 to enemies available
            $("#enemiesAvail").append($("#char4")); //move character 4 to enemies available
        }
        
        //else if statement to move unselected starter character to defender area from enemies list
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char1")); //append chosen enemy to defender area
            gameStatus.defenderInPlace = true; //sets value to later check if defender is in place
            gameStatus.gameOn = true; //gameOn to be used to make sure only attack button works
            pickleRick.marginHealthHoldAsDef = pickleRick.health;  
            defenderChar = Object.assign({},pickleRick); //assigns defender values from chosen defender
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }

    //used to do nothing if no other condition is met
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
            mrMeeSeeks.marginHealthHoldAsYour = mrMeeSeeks.health;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char3"));
            $("#enemiesAvail").append($("#char4"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char2"));
            gameStatus.defenderInPlace = true;
            gameStatus.gameOn = true;
            mrMeeSeeks.marginHealthHoldAsDef = mrMeeSeeks.health; 
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
            scaryTerry.marginHealthHoldAsYour = scaryTerry.health;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char2"));
            $("#enemiesAvail").append($("#char4"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char3"));
            gameStatus.defenderInPlace = true;
            gameStatus.gameOn = true;
            scaryTerry.marginHealthHoldAsDef = scaryTerry.health; 
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
            morty.marginHealthHoldAsYour = morty.health;
            $(yourCharacter.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
            $("#enemiesAvail").append($("#char1"));
            $("#enemiesAvail").append($("#char2"));
            $("#enemiesAvail").append($("#char3"));
        }
        
        else if (gameStatus.stage == 1) {
            $("#defender").append($("#char4"));
            gameStatus.defenderInPlace = true;
            gameStatus.gameOn = true;
            morty.marginHealthHoldAsDef = morty.health;
            defenderChar = Object.assign({},morty);
            $(defenderChar.text2Push).addClass( "progress-bar-animated progress-bar-striped" ); //change in progress characters to an animated bar
        }
    }
    else {

    }

  });

  //attack button functionality
  $("#attack").on("click", function() {

      //confirming defender is in place before start
    if (gameStatus.defenderInPlace == true){
        
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
        yourCharacter.barDecreaseYour = (1-(yourCharacter.damage/yourCharacter.marginHealthHoldAsYour))*100;
        $(yourCharacter.text2Push).css('width', (yourCharacter.barDecreaseYour +'%'));
        // console.log(yourCharacter.barDecreaseYour);
        defenderChar.barDecreaseDef = (1-(defenderChar.damage/defenderChar.marginHealthHoldAsDef))*100;
        $(defenderChar.text2Push).css('width', (yourCharacter.barDecreaseDef +'%'));
        // console.log(yourCharacter.barDecreaseDef);
        console.log("main char health: " + yourCharacter.health);
        console.log("defender char health: " + defenderChar.health);

        //Check to see if you defeated a character but still playing
        if ((defenderChar.health <= 0)&&(gameStatus.defKillCount > 0)){
            alert("You defeated " + defenderChar.name + " congrats! Now pick your next opponent!");
            $("#defender").empty();
            gameStatus.defKillCount--;
            gameStatus.gameOn = false;

            //Check to see if you defeated all characters
            if (gameStatus.defKillCount == 0){
                alert("You've won the game! Click Restart to try and win again!");
                $("#restart").addClass("restartButtonShow");
            }

        }
        // console.log(yourCharacter.health);
        else if ((yourCharacter.health <= 0)){
            alert("You've Lost! Click Restart to try again!");
            $("#restart").addClass("restartButtonShow");
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