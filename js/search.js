const searchBar = document.querySelector('#search-bar');
const allRecipes = document.querySelectorAll('#recipes > article');

searchBar.addEventListener('keyup', (event) => {
    allRecipes.forEach((recipe) => {
        if (recipe.dataset.name.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
            recipe.style.display = '';
        } else {
            recipe.style.display = 'none';
        }
    })
})
