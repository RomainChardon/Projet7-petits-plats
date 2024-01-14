const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', reseach);


function reseach() {
    const clear = document.querySelector(".clear-searchbar");
    if (searchBar.value.length > 0) {
        clear.style.display = "block";
    } else {
        clear.style.display = "none";
    }

    const selectFilter = document.querySelectorAll('#filtre-selected > span');
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


        if (selectFilter.length > 0) {
            const newRecipe = [];
            allRecipes.forEach((recipe) => {

                let recipeTrue = true;
                selectFilter.forEach((filtre) => {
                    if (filtre.dataset.group === 'ingredients') {
                        console.log(recipe.ingredients.filter((element) => element.ingredient.toLowerCase() === filtre.innerText.toLowerCase()))

                        if (recipe.ingredients.filter((element) => element.ingredient.toLowerCase() === filtre.innerText.toLowerCase()).length === 0) {
                            recipeTrue = false;
                        }
                    }
                })

                if (recipeTrue) {
                    newRecipe.push(recipe);
                }
            })

            console.log(newRecipe)

            displayData(newRecipe);
            displayFilter(newRecipe);
        } else {
            displayData(allRecipes);
            displayFilter(allRecipes);
        }
    }





}

function clearSearch(element) {
    element.parentNode.parentNode.querySelector("input").value = "";
    displayData(recipes);
    displayFilter(recipes);
}