const botoesExpandir = document.querySelectorAll('.botao-expandir');

botoesExpandir.forEach(botao => {
  botao.addEventListener('click', () => {
    const conteudo = botao.nextElementSibling;
    
    if (conteudo.classList.contains('open')) {
      conteudo.classList.remove('open');
      botao.textContent = 'Leia mais';
    } else {
      conteudo.classList.add('open');
      botao.textContent = 'Leia menos';
    }
  });
});