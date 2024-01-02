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
            if (recipe.name.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
                if (!allRecipes.includes(recipe)) {
                    allRecipes.push(recipe);
                }
            } else if (recipe.description.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
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
            selectFilter.forEach((filtre) => {
                console.log(allRecipes);
                allRecipes.forEach((recipe) => {
                    if (filtre.dataset.group === 'ingredients') {
                        if (recipe.ingredients.find((element) => element.ingredient === filtre.innerText) === undefined) {
                            console.log(allRecipes.indexOf(recipe))
                            allRecipes.splice(allRecipes.indexOf(recipe), 1);
                        }
                    }
                })
            })
        }


        displayData(allRecipes);
        displayFilter(allRecipes);
    }





}

function clearSearch(element) {
    element.parentNode.parentNode.querySelector("input").value = "";
}