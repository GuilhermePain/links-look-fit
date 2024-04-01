function getDate() {
    const date = new Date();
    return date.getFullYear();
}

function insertYear() {
    const spanYear = document.querySelector('#year-span');
    const year = getDate();
    spanYear.innerHTML = year;
}

function testeAlterandoAtributo(){
    const imagem = document.getElementById('img').src;
    const a = document.querySelector('#a');
    a.href = `https://api.whatsapp.com/send?phone=5585991805388&text=${imagem}`;
}

testeAlterandoAtributo();

insertYear();
