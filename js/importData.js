init();

function init() {
    // Récupère les datas des recettes
    // console.log(recipes);
    displayData(recipes);

    // Récupère les appareils et les utensils
    const ingredients = getListIngredients(recipes);
    const ustensils = getListUstensils(recipes);
    const appareils = getListAppareils(recipes);
}

function displayData(recipes) {
    const recipesSection = document.querySelector("#recipes");

    recipes.forEach((recipe) => {
        const recipeModel = recipeTemplate(recipe);
        const recipeCard = recipeModel.getRecipeDOM();
        recipesSection.appendChild(recipeCard);
    })

    // afficher le nombre de recette
    const nbRecette = document.querySelector('#nb-recipes');
    nbRecette.innerText = recipes.length;
}

function getListIngredients(recipes) {
    const listIngredients = [];
    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        ingredients.forEach((ingredient) => {
            const found = listIngredients.find((element) => element.toLowerCase() === ingredient.ingredient.toLowerCase());
            if (found === undefined) {
                listIngredients.push(ingredient.ingredient);
            }
        })
    })

    return listIngredients;
}

function getListUstensils(recipes) {
    const listUstensils = [];
    recipes.forEach((recipe) => {
        const ustensils = recipe.ustensils;
        ustensils.forEach((ustensils) => {
            const found = listUstensils.find((element) => element.toLowerCase() === ustensils.toLowerCase());
            if (found === undefined) {
                listUstensils.push(ustensils);
            }
        })
    })

    return listUstensils;
}

function getListAppareils(recipes) {
    const listAppareils = [];
    recipes.forEach((recipe) => {
        const appareils = recipe.appliance;
        const found = listAppareils.find((element) => element.toLowerCase() === appareils.toLowerCase());
        if (found === undefined) {
            listAppareils.push(appareils);
        }
    })

    return listAppareils;
}
