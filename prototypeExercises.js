// function Surrogate(){};
// Surrogate.prototype = Animals.prototype;
// Dogs.prototype = new Surrogate();
// Dogs.prototype.constructor = Dogs;

// Dogs = Object.create(Animal.prototype);
// Dogs.prototype.constructor = Dogs;


// class Dogs{
//     constructor(){
//         this.breed = breed
//     }

// }


// class Animals{
//     constructor(){
//         this.name = name
//     }



Function.prototype.inherits = function(superclass){
    function Surrogate(){};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject(name) {
    this.name = name;
};

MovingObject.prototype.flies = function(){
    console.log(`${this.name} flies`);
};

function Ship(name){
    this.name = name;
};
Ship.inherits(MovingObject);
Ship.prototype.land = function(){
    console.log(`${this.name} lands`);
};

rocket = new Ship("kenny");
rocket.flies();
obj = new MovingObject("hanna");
obj.flies();

