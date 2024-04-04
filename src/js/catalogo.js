document.addEventListener('DOMContentLoaded', function() {
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');
    const modalImagem = document.querySelector('.section-mais-informacoes img');
    const modalNome = document.querySelector('.section-mais-informacoes .name-mais-informacoes');
    const modalPreco = document.querySelector('.section-mais-informacoes .price-mais-informacoes');

    btnMaisInformacoes.forEach(button => {
        button.addEventListener('click', function() {
            const itemCard = this.closest('.item-card');
            const imagem = itemCard.querySelector('img');
            const nome = itemCard.querySelector('.item-name').textContent;
            const preco = itemCard.querySelector('.item-price').textContent;

            modalImagem.src = imagem.src;
            modalNome.textContent = nome;
            modalPreco.textContent = preco;

            modalMaisInformacoes.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modalMaisInformacoes.style.display = 'none';
    });
});
