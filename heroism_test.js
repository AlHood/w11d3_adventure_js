var assert = require('assert');

var Hero = require('./heroism');
var Rat = require('./rat');
var Food = require('./food');



describe('heroism', function() {

beforeEach(function() {
  hero = new Hero("Torvald", "Lutefisk");
rat = new Rat("Ratterick");
food = new Food("Lutefisk", 25)
})


  it('hero creation', function() {

    assert.equal("Torvald", hero.name);
  })

    it('rat creation ', function() {

      assert.equal("Ratterick", rat.name);
    })

    it('food creation ', function() {

      assert.equal("Lutefisk", food.name);
    })

    it('food can be eaten', function() {
hero.eat(food);

      assert.equal(75, hero.health);
    })

    it('food can be eaten by rat ', function() {
rat.eat(food);
      assert.equal(-15, food.healthValue);
    })

        it('food is poisoned', function() {
          rat.eat(food);

    hero.eat(food);
          assert.equal(35, hero.health);
        })

})




