const imagemSelecionada = document.getElementById('imagemSelecionada');
const textoDoTopo = document.getElementById('textoDoTopo');
const textoDoFundo = document.getElementById('textoDoFundo');
const meme = document.getElementById('meme');

let imagem;

imagemSelecionada.addEventListener('change', () => {
  const caminhoDaImagem = URL.createObjectURL(imagemSelecionada.files[0]);

  imagem = new Image();
  imagem.src = caminhoDaImagem;

  imagem.addEventListener(
    'load',
    () => {
      atualizaATelaDoMeme(meme, imagem, textoDoTopo.value, textoDoFundo.value);
    },
    { once: true }
  );
});

textoDoTopo.addEventListener('change', () => {
  atualizaATelaDoMeme(meme, imagem, textoDoTopo.value, textoDoFundo.value);
});

textoDoFundo.addEventListener('change', () => {
  atualizaATelaDoMeme(meme, imagem, textoDoTopo.value, textoDoFundo.value);
});

function atualizaATelaDoMeme(meme, imagem, textoDoTopo, textoDoFundo) {
  const contexto = meme.getContext('2d');
  const largura = imagem.width;
  const altura = imagem.height;
  const tamanhoDaFonte = Math.floor(largura / 10);
  const alinhamentoVertical = altura / 25;

  // atualiza a imagem do fundo
  meme.width = largura;
  meme.height = altura;
  contexto.drawImage(imagem, 0, 0);

  // atualiza o texto
  contexto.strokeStyle = 'black';
  contexto.lineWidth = Math.floor(tamanhoDaFonte / 4);
  contexto.fillStyle = 'white';
  contexto.textAlign = 'center';
  contexto.lineJoin = 'round';
  contexto.font = tamanhoDaFonte + 'px sans-serif';

  contexto.textBaseline = 'top';
  contexto.strokeText(textoDoTopo, largura / 2, alinhamentoVertical);
  contexto.fillText(textoDoTopo, largura / 2, alinhamentoVertical);

  contexto.textBaseline = 'bottom';
  contexto.strokeText(textoDoFundo, largura / 2, altura - alinhamentoVertical);
  contexto.fillText(textoDoFundo, largura / 2, altura - alinhamentoVertical);
}
