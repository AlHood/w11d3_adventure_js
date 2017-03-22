

var Hero = function(name, favFood){
this.name = name,
this.health = 50,
this.favFood = favFood,
this.eat = function(food) {
  if(food.name === this.favFood && food.healthValue > 0) {
    console.log("Sustenance fit for a warrior");
    this.health += food.healthValue;
  } else { 
    console.log("What is this swill?");
    this.health += food.healthValue;

  }

}
this.speak = function() {
console.log("Know that I am " + this.name + "!");
}
}
this.attack = function(enemy){
enemy.health -= 25;
  if (enemy.health <= 0){
    console.log("I have vanquished you! Give my regards to your ancestors!")

  }
}


module.exports = Hero;
