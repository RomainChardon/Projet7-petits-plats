init();

function init() {
    // Récupère les datas des recettes
    console.log(recipes);
    displayData(recipes);
}

function displayData(recipes) {
    const recipesSection = document.querySelector("#recipes");

    recipes.forEach((recipe) => {
        const recipeModel = recipeTemplate(recipe);
        const recipeCard = recipeModel.getRecipeDOM();
        recipesSection.appendChild(recipeCard);
    })
}
