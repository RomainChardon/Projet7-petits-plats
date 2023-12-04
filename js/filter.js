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
    showDropdown(element.parentNode.parentNode);
    const title = element.parentNode.parentNode.parentNode.querySelector('.filtre-title > p');
    title.innerText = element.innerText;

}