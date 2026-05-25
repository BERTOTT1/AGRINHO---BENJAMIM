// Seleciona os elementos do HTML
const botao = document.getElementById('btnInteragir');
const mensagem = document.getElementById('mensagemOculta');

// Adiciona o evento de clique ao botão
botao.addEventListener('click', () => {
    // Alterna a classe para mostrar ou esconder o texto
    if (mensagem.classList.contains('hidden')) {
        mensagem.classList.remove('hidden');
        mensagem.classList.add('mostrar');
        botao.textContent = 'Fechar';
    } else {
        mensagem.classList.remove('mostrar');
        mensagem.classList.add('hidden');
        botao.textContent = 'Saiba Mais';
    }
});

// Seleciona os elementos do HTML

const botao = document.getElementById('btnInteragir');

const mensagem = document.getElementById('mensagemOculta');


// Adiciona o evento de clique ao botão

botao.addEventListener('click', () => {

    // Alterna a classe para mostrar ou esconder o texto

    if (mensagem.classList.contains('hidden')) {

        mensagem.classList.remove('hidden');

        mensagem.classList.add('mostrar');

        botao.textContent = 'Fechar';

    } else {

        mensagem.classList.remove('mostrar');

        mensagem.classList.add('hidden');

        botao.textContent = 'Saiba Mais';

    }

});
