function maisInformacoes() {
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');

    btnMaisInformacoes.forEach(buttons => {
        buttons.addEventListener('click', () => {
            modalMaisInformacoes.style.display = 'block';
            document.body.style.overflow = 'hidden';
        })
    })

    closeModal.addEventListener('click', () => {
        modalMaisInformacoes.style.display = 'none';
        document.body.style.overflow = 'auto'; //
    })
}

maisInformacoes();
