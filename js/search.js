const searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('keyup', (event) => {
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
    }

    displayData(allRecipes);
    displayFilter(allRecipes);
})
