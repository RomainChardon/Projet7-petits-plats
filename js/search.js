const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', reseach);


function reseach() {
    const clear = document.querySelector(".clear-searchbar");
    if (searchBar.value.length > 0) {
        clear.style.display = "block";
    } else {
        clear.style.display = "none";
    }

    const allRecipes = [];

    if (searchBar.value.length > 3) {
        /* RECHERCHE TITRE, DESCRIPTION, INGREDIENT */
        recipes.forEach((recipe) => {
            if (recipe.name.toLowerCase().indexOf(searchBar.value.toLowerCase()) > -1) {
                if (!allRecipes.includes(recipe)) {
                    allRecipes.push(recipe);
                }
            } else if (recipe.description.toLowerCase().indexOf(searchBar.value.toLowerCase()) > -1) {
                if (!allRecipes.includes(recipe)) {
                    allRecipes.push(recipe);
                }
            } else {
                recipe.ingredients.forEach((ingredient) => {
                    if (ingredient.ingredient.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
                        if (!allRecipes.includes(recipe)) {
                            allRecipes.push(recipe);
                        }
                    }
                })
            }
        })

        applyFilter(allRecipes);
    } else {
        applyFilter(recipes);
    }
}

function applyFilter(allRecipes) {
    const selectFilter = document.querySelectorAll('#filtre-selected > span');

    const newRecipe = [];
    allRecipes.forEach((recipe) => {

        let recipeTrue = true;
        selectFilter.forEach((filtre) => {
            if (filtre.dataset.group === 'ingredients') {
                if (recipe.ingredients.filter((element) => element.ingredient.toLowerCase() === filtre.innerText.toLowerCase()).length === 0) {
                    recipeTrue = false;
                }
            }

            if (filtre.dataset.group === 'appareils') {
                if (recipe.appliance.toLowerCase() !== filtre.innerText.toLowerCase()) {
                    recipeTrue = false;
                }
            }

            if (filtre.dataset.group === 'ustensils') {
                if (recipe.ustensils.filter((element) => element.toLowerCase() === filtre.innerText.toLowerCase()).length === 0) {
                    recipeTrue = false;
                }
            }

        })

        if (recipeTrue) {
            newRecipe.push(recipe);
        }
    })
    displayData(newRecipe);
    displayFilter(newRecipe);
}

function clearSearch(element) {
    element.parentNode.parentNode.querySelector("input").value = "";
    displayData(recipes);
    displayFilter(recipes);
}