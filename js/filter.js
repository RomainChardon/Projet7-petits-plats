function showDropdown(element) {
    element.parentNode.querySelector('.filtre-content').classList.toggle("show");
}

function filterElement(search) {
    const input = search.value;
    const filter = input.toUpperCase();

    const element = search.parentNode.parentNode.querySelectorAll(".filtre-list > div > p");
    console.log(search.parentNode.parentNode);
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

function deleteFilter(element) {
    document.querySelector("#filtre-selected").removeChild(element.parentNode);
}
