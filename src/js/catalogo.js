function maisInformacoes(){
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');
    const modalImagem = document.querySelector('.section-mais-informacoes img');
    const modalNome = document.querySelector('.section-mais-informacoes .name-mais-informacoes');
    const modalPreco = document.querySelector('.section-mais-informacoes .price-mais-informacoes');
    const modalDesconto = document.querySelector('.section-mais-informacoes .desconto-mais-informacoes');
    let posicaoDoScroll = 0;

    btnMaisInformacoes.forEach(button => {
        button.addEventListener('click', function() {
            posicaoDoScroll = window.pageYOffset;
            const itemCard = this.closest('.item-card');
            const imagem = itemCard.querySelector('img');
            const nome = itemCard.querySelector('.item-name').textContent;
            const preco = itemCard.querySelector('.item-price').textContent;
            const desconto = itemCard.querySelector('.etiqueta-desconto p');

            modalImagem.src = imagem.src;
            modalNome.textContent = nome;
            modalPreco.textContent = preco;

            if (desconto) {
                modalDesconto.style.display = 'block';
                modalDesconto.textContent = desconto.textContent;
            } else {
                modalDesconto.style.display = 'none';
            }

            modalMaisInformacoes.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            function levarAoTopo(){
                window.scrollTo({
                    top: 0
                });
            }

            levarAoTopo();
        });
    });

    closeModal.addEventListener('click', function() {
        modalMaisInformacoes.style.display = 'none';
        document.body.style.overflow = 'auto';
        window.scrollTo({
            top: scrollPosition
        });
    });
}

maisInformacoes();