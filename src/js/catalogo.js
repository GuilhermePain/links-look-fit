function maisInformacoes() {
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');

    btnMaisInformacoes.forEach(buttons => {
        buttons.addEventListener('click', () => {
            modalMaisInformacoes.style.display = 'block';
        })
    })

    closeModal.addEventListener('click', () => {
        modalMaisInformacoes.style.display = 'none';
    })
}

maisInformacoes();
