function getDate() {
    const date = new Date();
    return date.getFullYear();
}

function insertYear() {
    const spanYear = document.querySelector('#year-span');
    const year = getDate();
    spanYear.innerHTML = year;
}

insertYear();