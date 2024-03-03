function recipeTemplate(data) {
    const { id, image, name, servings, ingredients, time, description, appliance, ustensils } = data;

    const picture = `./assets/img-recette/${image}`;
    
    function getRecipeDOM() {
        const article = document.createElement('article');
        article.setAttribute('onclick', 'linkURL('+id+')');
        article.setAttribute('aria-label', 'Lien vers la page de '+name);
        article.dataset.name = name;

            const timeCard = document.createElement('span');
            timeCard.classList.add('time');
            timeCard.innerText = time+'min';

            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);

        const divText = document.createElement('div');
        divText.classList.add('card-text');

            const h2 = document.createElement( 'h2' );
            h2.classList.add('title-name');
            h2.textContent = name;

            const h4Recette = document.createElement('h4');
            h4Recette.textContent = 'RECETTE';

            const pDescription = document.createElement('p');
            pDescription.classList.add('description');
            pDescription.textContent = description.slice(0, 250) + (description.length > 250 ? "..." : "");

            const h4Ingredients = document.createElement('h4');
            h4Ingredients.textContent = 'INGREDIENTS';

            const divIngredients = document.createElement('div');
            divIngredients.classList.add('ingredients');

            ingredients.forEach((ingredient) => {
                const divIngredient = document.createElement('div');

                const pIngredient = document.createElement('p');
                pIngredient.textContent = ingredient.ingredient;

                const pQuantity = document.createElement('p');
                pQuantity.classList.add('quantity');
                if (ingredient.unit) {
                    pQuantity.textContent = ingredient.quantity + ' ' + ingredient.unit;
                } else {
                    pQuantity.textContent = ingredient.quantity;
                }

                divIngredient.appendChild(pIngredient);
                divIngredient.appendChild(pQuantity);

                divIngredients.appendChild(divIngredient);
            })

        divText.appendChild(h2);
        divText.appendChild(h4Recette);
        divText.appendChild(pDescription);
        divText.appendChild(h4Ingredients);
        divText.appendChild(divIngredients);

        article.appendChild(timeCard);
        article.appendChild(img);
        article.appendChild(divText);
        return (article);
    }
    
    return {name, image, getRecipeDOM};
}

function displayListFiltre(liste, select, type) {
    select.innerHTML = '';
    const filtreActif = document.querySelectorAll("#filtre-selected > span");
    liste.forEach((element) => {
        let actif = false;
        if (filtreActif.length > 0) {
            filtreActif.forEach((f) => {
                if (f.innerText === element) {
                    actif = true;
                }
            })
        }

        // Vérifie si le filtre est actif
        if (actif === false) {
            const div = document.createElement("div");
            div.setAttribute('onclick','selectElement(this);')

            const p = document.createElement("p");
            p.innerText = element;
            p.dataset.group = type;

            div.appendChild(p);
            select.appendChild(div);
        }

    })
}