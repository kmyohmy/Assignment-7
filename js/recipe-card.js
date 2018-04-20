function recipe () {
    var title = "Guacamole";
    var serving = 4;
    var ingredients = [ ["3", "Avocados"], ["1", "Lime"], ["1 Teaspoon", "Salt"], ["1/2 Cup", "Onion"],["3 Tablespoons", "Cilantro"], ["2", "Diced Tomatoes"], ["1 Teaspoon", "Garlic"],["1 Pinch", "Ground Pepper"] ];

    this.createDish = function () {
       window.console.log(title + '\n' + 'Serves: ' + serving + '\n' + ingredients.length + " Ingredients \n");
       var i;
       for (i = 0; i < ingredients.length; i += 1) {
        window.console.log(ingredients[i][0] + " " +  ingredients[i][1] + "\n");
        }
    }


    
    
}

var recipeOne = new recipe();
recipeOne.createDish();


