function maisInformacoes() {
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');
    const modalImagem = document.querySelector('.section-mais-informacoes img');
    const modalNome = document.querySelector('.section-mais-informacoes .name-mais-informacoes');
    const modalPreco = document.querySelector('.section-mais-informacoes .price-mais-informacoes');
    const modalDesconto = document.querySelector('.section-mais-informacoes .desconto-mais-informacoes');
    let scrollPosition = 0;

    btnMaisInformacoes.forEach(button => {
        button.addEventListener('click', function() {
            scrollPosition = window.pageYOffset;
            const itemCard = this.closest('.item-card');
            const imagem = itemCard.querySelector('img');
            const nome = itemCard.querySelector('.item-name').textContent;
            const precoTop = itemCard.querySelector('.item-price-top');
            const precoShort = itemCard.querySelector('.item-price-short');
            const desconto = itemCard.querySelector('.etiqueta-desconto p');

            modalImagem.src = imagem.src;
            modalNome.textContent = nome;

            // Verifica se o item possui preço de top e short
            if (precoTop && precoShort) {
                modalPreco.innerHTML = `${precoTop.textContent}<br>${precoShort.textContent}`;
            } else {
                const precoNormal = itemCard.querySelector('.item-price');
                modalPreco.textContent = `Preço: ${precoNormal.textContent}`;
            }

            // Exibe o desconto se houver
            if (desconto) {
                modalDesconto.style.display = 'block';
                modalDesconto.textContent = desconto.textContent;
            } else {
                modalDesconto.style.display = 'none';
            }

            modalMaisInformacoes.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            function levarAoTopo() {
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
