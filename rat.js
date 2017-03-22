
  var Rat = function(name){
  this.name = name,
  this.health = 10,
  this.eat = function(food) {
    food.healthValue = -15;
  }

}
;







module.exports = Rat;