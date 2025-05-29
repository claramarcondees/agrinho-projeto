const containerJogo      = document.getElementById('jogoinicial-container');
const mensagemJogo       = document.getElementById('mensagem');
const entradaResposta    = document.getElementById('resposta');
const botaoVerificar     = document.getElementById('checagem');
const palavraEmbaralhada = document.getElementById('palavra-embaralhada'); 
const conteudoSite       = document.getElementById('conteudo-site');

const palavraCorreta     = 'campo';  
const palavraBaguncada   = 'acmpo';  

palavraEmbaralhada.textContent = palavraBaguncada;

botaoVerificar.addEventListener('click', () => {
  const resposta = entradaResposta.value.trim().toLowerCase();

  if (resposta === palavraCorreta) {
    mensagemJogo.style.color = '#7ecc83';
    mensagemJogo.textContent = 'Você acertou! Bem-vindo ao site.';

    setTimeout(() => {
      containerJogo.style.display = 'none';   
      conteudoSite.style.display  = 'block';  

      setTimeout(() => {
        conteudoSite.classList.add('show');
      }, 100);
    }, 1500);

  } else {
    mensagemJogo.style.color = '#f56565';
    mensagemJogo.textContent = 'Você errou! Tente novamente.';
  }
});
