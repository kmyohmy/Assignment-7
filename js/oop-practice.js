//Step 1
var Cat = function cat () {}


var Dog = function () {}
// Step 2
var gato = new Cat(); 
var perro = new Cat(); 

// Step 3
var Animal = function () {
   window.console.log("The Animal has been created");
};
// Step 4

var Animal = function (parameter) {
   window.console.log(parameter + " has been put through");
};
// Step 5
var Animal = function (type,breed,color,height,length) {
    this.type = type,
    this.breed = breed,
    this.color = color,
    this.height = height,
    this.length = length
 };

// Step 6

var Animal = function (type,breed,color,height,length) {
    this.type = type,
    this.breed = breed,
    this.color = color,
    this.height = height,
    this.length = length
 
    var i;

    for (i in animal) {
        {
            window.console.log(person[i] + " ");
        }


    }

};

Animal("dog", "corgi", "brown", "5 feet", "7 inches");
// Step 7
var Animal = function (type,breed,color,height,length) {
    // Set the param types
    this.type = type,
    this.breed = breed,
    this.color = color,
    this.height = height,
    this.length = length
    //Log out the type
    var i;

    for (i in animal) {
        {
            window.console.log(person[i] + " ");
        }


    }

    // Speak
    this.speak = function (type, color) {
        window.console.log("The" + color + " " + type + "is meowing!");
    };
    this.speak(this.type, this.color);
}
Animal("dog", "corgi", "brown", "5 feet", "7 inches");
// Step 8
var Animal = function (type,breed,color,height,length) {
    // Set the param types
    var type = type,
    var breed = breed,
    var color = color,
    var height = height,
    var length = length
    //Log out the type
    var i;

    for (i in animal) {
        {
            window.console.log(person[i] + " ");
        }


    }

    // Speak
    var speak = function (type, color) {
        window.console.log("The" + color + " " + type + "is meowing!");
    };
    Animal.speak(type, color);
}
Animal("dog", "corgi", "brown", "5 feet", "7 inches");
