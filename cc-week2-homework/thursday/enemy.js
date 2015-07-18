//var Enemy = function () {
//    var self = this;
//    this.name ="";
//    this.names =["Ancient Dragon", "Prowler", "Mighty Grunt"];
//        
//        this.generateName = funciton() {
//            var rand = getRandomInt(0, self.names.length);
//            self.name = self.names[rand];
//        }
//};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var Enemy = function() {
    this.type = "";
    this.hitPoints = 0;
    this.defense = 0;
    
    var self = this;
    var types = ["Ancient Dragon", "prowler", "Mighty Grunt"];
    
    var setHitPoints = function(){
        if (self.type === "Ancient Dragon")
            self.hitPoints = getRandomInt(80,100);
        else if (self.type === "Prowler")
            self.hitPoints = getRandomInt(50,79);
        else
            self.hitPoints = getRandomInt(20,49);
        
        self.defense = self.hitPoints * 3;
    }
    
    var setType = function() {
        self.type = types[getRandomInt(0,types.length - 1)];
        setHitPoints();
    
    };
    
    
    setType();
    
};

var enemies= [];

for (var x = 0; x < 100; x++) {
    var enemy = new Enemy();
    enemies.push(enemy);
    console.log("Type: " + enemy.type + " HP: " + enemy.hitPoints + " Def: " + enemy.defense);
}