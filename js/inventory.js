class Item{
    constructor(name,description, value){
        this.name = name 
        this.decription = description
        this.value = value
        this.pickedUp = false
    }
}
class sponDoolicks extends Item{
    constructor(name, decription, amount){
        super("821 Coin", "The holiest coin of them all. A nice potrait of Charles, Shevaugn and Jah is stamped on it", amount)
        this.amt = amt
    }
}

class Weapon extends Item{
    constructor(name, description, value, damage){
        super(name, description, value)
        this.damage = damage
    }
}

class Justifiah extends Weapon
