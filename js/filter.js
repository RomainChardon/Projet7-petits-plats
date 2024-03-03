function showDropdown(element) {
    element.parentNode.querySelector('.filtre-content').classList.toggle("show");
    element.querySelector('img').classList.toggle("rotate");
}

function filterElement(search) {
    const input = search.value;
    const filter = input.toUpperCase();

    const element = search.parentNode.parentNode.querySelectorAll(".filtre-list > div > p");

    element.forEach((e) => {
        const valueSpan = e.innerText;
        if (valueSpan.toUpperCase().indexOf(filter) > -1) {
            e.style.display = "";
        } else {
            e.style.display = "none";
        }
    })
}

function selectElement(element) {
    console.log(element);

    const select = document.querySelector('#filtre-selected');
    const span = document.createElement('span');
    span.innerText = element.children[0].innerText;
    span.dataset.group = element.children[0].dataset.group;
    span.setAttribute('class', 'filtre-select');

    const img = document.createElement( 'img' );
    img.setAttribute("src", "./assets/svg/close-black.svg");
    img.setAttribute("onclick", "deleteFilter(this)");

    span.appendChild(img);
    select.appendChild(span);

    reseach();
}


/* Clear les input de recherche */
function deleteFilter(element) {
    document.querySelector("#filtre-selected").removeChild(element.parentNode);
    reseach();
}

function clearFilter(element) {
    const input = element.parentNode.parentNode.querySelector("input");
    input.value = "";
    filterElement(input);
}