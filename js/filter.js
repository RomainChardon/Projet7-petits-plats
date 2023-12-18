function showDropdown(element) {
    element.parentNode.querySelector('.filtre-content').classList.toggle("show");
}

function filterElement(search) {
    const input = search.value;
    const filter = input.toUpperCase();

    const element = search.parentNode.querySelectorAll(".filtre-list > div > p");
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
    const option = document.createElement('option');
    option.value = element.innerText;
    option.innerText = element.innerText;
    option.setAttribute('selected', 'selected');

    select.appendChild(option);

}