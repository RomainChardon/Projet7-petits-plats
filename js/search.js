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

    for (let i = 0; i < allRecipes.length; i++) {
        let recipeTrue = 0;
        for (let f = 0; f < selectFilter.length; f++) {
            if (selectFilter[f].dataset.group === 'ingredients') {
                let checkIngredient = false;
                for (let u = 0; u < allRecipes[i].ingredients.length; u++) {

                    if (allRecipes[i].ingredients[u].ingredient.toLowerCase() === selectFilter[f].innerText.toLowerCase()) {
                        checkIngredient = true;
                    }
                }
                if (checkIngredient) {
                    recipeTrue++;
                }
            }

            if (selectFilter[f].dataset.group === 'appareils') {
                let checkAppareils = false;
                if (allRecipes[i].appliance.toLowerCase() === selectFilter[f].innerText.toLowerCase()) {
                    checkAppareils = true;
                }
                if (checkAppareils) {
                    recipeTrue++;
                }
            }

            if (selectFilter[f].dataset.group === 'ustensils') {
                let checkUstensils = false;
                if (allRecipes[i].ustensils.toLowerCase() === selectFilter[f].innerText.toLowerCase()) {
                    checkUstensils = true;
                }
                if (checkUstensils) {
                    recipeTrue++;
                }
            }

        }

        if (recipeTrue === selectFilter.length) {
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