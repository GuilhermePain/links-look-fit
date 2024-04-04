function maisInformacoes() {
    const btnMaisInformacoes = document.querySelectorAll('.btn-mais-informacoes');
    const modalMaisInformacoes = document.querySelector('.section-mais-informacoes');
    const closeModal = document.querySelector('#close-modal');

    btnMaisInformacoes.forEach(buttons => {
        buttons.addEventListener('click', () => {
            modalMaisInformacoes.style.display = 'flex';
        })
    })

    closeModal.addEventListener('click', () => {
        modalMaisInformacoes.style.display = 'none';
    })

    function pedirNoWhatsapp() {
        const data = new Date();
        const hora = data.getHours();
        let saudacao;

        if (hora >= 12 && hora < 18) {
            saudacao = 'boa tarde!';
        } else if (hora >= 18 ) {
            saudacao = 'boa noite!';
        } else {
            saudacao = 'bom dia!';
        }

        const linkWhatsapp = document.querySelector('#link-whatsapp');
        linkWhatsapp.href = `https://api.whatsapp.com/send?phone=5585991805388&text=Olá, ${saudacao} Vim do catálogo.`;

    }

    pedirNoWhatsapp();
}

maisInformacoes(); 
