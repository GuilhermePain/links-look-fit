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
    const a = document.querySelector('#a');
    const carrinho = 'itens: camisa sieg P, short lupo P. \nmétodo de pagamento: pix';
    a.href = `https://api.whatsapp.com/send?phone=5585991805388&text=${carrinho}`;
}

testeAlterandoAtributo();

insertYear();
