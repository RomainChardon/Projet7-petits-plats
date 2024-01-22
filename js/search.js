const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', reseach);


function reseach() {
    const clear = document.querySelector(".clear-searchbar");
    if (searchBar.value.length > 0) {
        clear.style.display = "block";
    } else {
        clear.style.display = "none";
    }

    let allRecipes = [];

    if (searchBar.value.length > 3) {
        /* RECHERCHE TITRE, DESCRIPTION, INGREDIENT */


        const regexSearch = new RegExp(`${searchBar.value.toLowerCase()}`);
        for (let i = 0; i < recipes.length; i++) {
            let reseachTrue = false;
            if (regexSearch.test(recipes[i].name.toLowerCase())) {
                reseachTrue = true;
            } else if (regexSearch.test(recipes[i].description.toLowerCase())) {
                reseachTrue = true;
            } else {
                for (let u = 0; u < recipes[i].ingredients.length; u++) {
                    if (regexSearch.test(recipes[i].ingredients[u].ingredient.toLowerCase())) {
                        reseachTrue = true;
                    }
                }
            }

            if (reseachTrue) {
                allRecipes.push(recipes[i]);
            }
        }
        applyFilter(allRecipes);
    } else {
        applyFilter(recipes);
    }
}

function applyFilter(allRecipes) {
    const selectFilter = document.querySelectorAll('#filtre-selected > span');

    const newRecipe = [];
    console.log(allRecipes)

    for (let i = 0; i < allRecipes.length; i++) {

        let recipeTrue = false;
        for (let i = 0; i < selectFilter.length; i++) {
            if (selectFilter[i].dataset.group === 'ingredients') {

                // On regarde chaque ingrédient si true
                let checkIngredient = false;
                for (let u = 0; u < allRecipes[i].ingredients.length; u++) {
                    if (allRecipes[i].ingredients[u].ingredient.toLowerCase() === selectFilter[i].innerText.toLowerCase()) {
                        checkIngredient = true;
                    }
                }
            }

        }
        //     if (filtre.dataset.group === 'ingredients') {
        //         if (recipe.ingredients.filter((element) => element.ingredient.toLowerCase() === filtre.innerText.toLowerCase()).length === 0) {
        //             recipeTrue = false;
        //         }
        //     }
        //
        //     if (filtre.dataset.group === 'appareils') {
        //         if (recipe.appliance.toLowerCase() !== filtre.innerText.toLowerCase()) {
        //             recipeTrue = false;
        //         }
        //     }
        //
        //     if (filtre.dataset.group === 'ustensils') {
        //         if (recipe.ustensils.filter((element) => element.toLowerCase() === filtre.innerText.toLowerCase()).length === 0) {
        //             recipeTrue = false;
        //         }
        //     }
        //
        // })

        if (recipeTrue) {
            newRecipe.push(allRecipes[i]);
        }
    }
    displayData(newRecipe);
    displayFilter(newRecipe);
}

function clearSearch(element) {
    element.parentNode.parentNode.querySelector("input").value = "";
    displayData(recipes);
    displayFilter(recipes);
}