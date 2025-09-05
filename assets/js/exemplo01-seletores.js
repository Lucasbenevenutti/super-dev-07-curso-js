function somar() {
    // Pegar um elemento da tela por id
    // <elemento id="numero1">
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function subtraçao() {
    let campoNumero1 = document.getElementById("numero1");
    console.log(campoNumero1);

    let campoNumero2 = document.getElementById("numero2");
    console.log(campoNumero2);

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    console.log(numero1);
    console.log(numero2);

    let subtraçao = numero1 - numero2;
    alert("Subtração: " + subtraçao);
}

function multiplicar() {
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let multiplicaçao = numero1 * numero2;
    alert("A multiplicação dos numeros: " + multiplicaçao);
}

function divisao() {
    let campoNumero1 = document.getElementById("numero1");
    let campoNumero2 = document.getElementById("numero2");

    let numero1 = parseFloat(campoNumero1.value);
    let numero2 = parseFloat(campoNumero2.value);

    let divisao = numero1 / numero2;
    alert("Divisão: " + divisao);

}

// function definirCorAzul() {
//     let itens = document.getElementsByClassName("item");

//     for (let i = 0; i < itens.length; i = i + 1) {
//         let item = itens[i];
//         item.style.backgroundColor = "#34b4de";
//     }
//     // itens[0].style.backgroundColor = "#34b4de";
//     // itens[1].style.backgroundColor = "#34b4de";
//     // itens[2].style.backgroundColor = "#34b4de";
//     // itens[3].style.backgroundColor = "#34b4de";

//     console.log(itens);
// }

function definirCor(nomeCor) {
    let itens = document.getElementsByClassName("item");

    let cor = "";
    if (nomeCor === "azul") {
        cor = "#34b4de";
    } else if (nomeCor === "roxo") {
        cor = "#9b227dff";
    } else if (nomeCor === "verde") {
        cor = "#34de4bff";
    } else if (nomeCor === "preto") {
        cor = "#000000ff";
    } else if (nomeCor === "vermelho") {
        cor = "#f30e0eff";
    }

    for (let i = 0; i < itens.length; i = i + 1) {
        let item = itens[i];
        item.style.backgroundColor = cor;
    }
}
function alterarVisibilidade() {
    let iframes = document.getElementsByTagName("iframe");
    // Sei que na nossa tela só tem um iframe, n vou fazer um for,
    // porém se tiver mais do que é um necessário utilizar for
    if (iframes[0].style.display === "inline"){
        iframes[0].style.display = "none";
    } else {
    iframes[0].style.display = "inline";
    }
}

function limparCampos() {
    let campoNome = document.getElementsByName("nome")[0];
    campoNome.value = "";
    let campoSobrenome = document.getElementsByName("sobrenome")[0];
    campoSobrenome.value = "";
    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = "";
}

function apresentarNomeCompleto() {
    let campoNome = document.getElementsByName("nome")[0];
    let campoSobrenome = document.getElementsByName("sobrenome")[0];

    let nome = campoNome.value;
    let sobrenome = campoSobrenome.value;

    let nomeCompleto = `${nome} ${sobrenome}`;

    let resultado = document.getElementById("resultadoNomes");
    resultado.innerText = `Nome completo: ${nomeCompleto}`;
}

function exemploQuerySelector() {
    let paragrafo = document.querySelector("div#jogos p");
    // Adicionar uma classe ao elemento
    paragrafo.classList.add("alternativo");
}

function exemploQuerrySelectorAll() {
    let paragrafos = document.querySelectorAll("div#jogos p");

    for (let i = 0; i < paragrafos.length; i = i + 1) {
        let paragrafo = paragrafos[i];
        if (i % 2 == 0) {
            // Adicionar uma classe 'destaque' ao elemento
            paragrafo.classList.add("destaque");
        } else {
            paragrafo.classList.add("elegante");
        }
    }
}

function reset() {
    let paragrafos = document.querySelectorAll("div#jogos p");
    for (let i = 0; i < paragrafos.length; i += 1) {
        let paragrafo = paragrafos[i];
        // Aqui, o ... (spread) expande todas as classes atuais do elemento, removendo todas de uma vez.
        paragrafo.classList.remove(...paragrafo.classList);
    }
}
