escreve("Museu do Ipiranga");
//função nominal.
function escreve(x) {
  console.log(x);
}

function mudaTitulo(novoTitulo) {
  document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
}

mudaTitulo("!");

//expressão de função - function expression
//função anônima - que não tem nome.
const mudaTitulo2 = function (target, novoTitulo) {
  document.querySelector(target).innerHTML = novoTitulo;
};

mudaTitulo2("h2", "Trocando subtítulo");

const relogio = () => {
  const date = new Date();
  mudaTitulo2("h2", date.toLocaleTimeString());
};

setInterval(relogio, 1000);

const exemplo = (x) => console.log(x);

exemplo("teste");

const frases = [
  "Um banco para 20 milhões de pessoas",
  "C6 Bank o seu banco",
  "Cartão de Crédito sem anuidade",
];

// mudaFrase("h1", frases, 4);
// "h1" - onde;
// frases - array;
// 4 - segundos;

const mudaFrase = (target, frases, tempo) => {
  let total = 0;
  setInterval(() => {
    document.querySelector(target).innerHTML =
      frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];

    console.log(total);
  }, tempo * 1000);
};
// condicao?verdade:falso
mudaFrase("h1", frases, 4);
