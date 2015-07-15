//objects
//

var Player = function(aName) {
    var _this = this;
    this.name = aName;
    this.hp = 100;
    this.attackPwr = 5;
    this.weapons = ["Stick", "Slingshot", "Dagger"];
    this.gotAttacked = function(enemyAttackPwr) {
        this.hp -= enemyAttackPwr;
    };
};

var Enemy = function() {
    this.name = "Golden Ugly Wargile";
};

var player = new Player("Link");

console.log(player.name);

var anEnemy = new Enemy("Bloodthirst");
console.log(anEnemy.name);




//var car = {
//    color: 'white',
//    engine: 'V8',
//    model: 'Camaro',
//    make: 'Chevy',
//    competitors: ['Mustang', 'Challemge'],
//    year: 2013,
//    mileage;11423,
//    needsOilChange: function (mileage) {
//        if (mileage > 100000) {
//            return true;
//        } else {
//            return false;
//        }
//    }
//};
//
////console.log(car.color);
////console.log(car.engine);
////console.log(car.neddsOilChange(car.mileage));
//
//console.log(car.color);
//
//function stolenCarDisguise(carObj) {
//carObj.color = 'Blue';
//    carObj.year = 2009;
//    carObj.mileage = 0;
//    carObj.engine = "V12";
//    carObj.mileage = 0;
//    return car Obj;
//}
//car = stolenCarDisguise(car);
//
//
//console.log(car.color);
//console.log(car.engine);
//console.log(car.neddsOilChange(car.mileage));
//
//}