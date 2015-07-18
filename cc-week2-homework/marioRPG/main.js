var Game = funciton(player, enemy) {
    var self = this;
    this.player = player;
    this.enemy = enemy;

    var gameActive = true;
    this.checkGameStatus = function () {
        if (self.player.p <= 0 || self.enemy.hp <= 0) {
            gameActive = false;
        }
        return gameActive;
    };

};

var Player = funciton(name) {
    this.hp = 100;
    this.attackPwr = 20;
    this.name = name;
};

var Enemy = function(name) {
    this.hp = 100;
    this.attackPwr = 20;
    this.name = "turtle Dude";
    
};

//Game variables


var selectedCharElem = null;


//Element variables
var chooseSection = document.getElementById("chooseSection");
var battleSection = document.getElemntById("battleSection");
var marioElem = document.getElementById("marioElem");
var turtleElem = doctument.getElementById("turtleElem");
var playerNameInput = document.getElementById("playerNameInput");
var startGameBtn = document.getElementById("startGameBtn");


startGameBtn.addEventListener('click', function () {
    var name = playerNameInput.value;

    if (!name || !selectedCharElem) {
        alert("You must select a character");
    }
});

marioElem.addEventListener('click', function () {
    selectedCHarElem = marioElem;
    selectedCharElem.className = "well charSelected";
    turtleElem.className = "well";
});

turtleElem.addEventListener('click', function () {
    selectedCharElem = turtleElem;
    selectedCharElem.className = "well charSelected";
    marioElem.classNamm = "well";
});