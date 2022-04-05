const form = document.querySelector('.form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    //captura os dados do Input
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    //Verifica se os dados sao numero digitados
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    //Chama a funcao getImc que calcula o IMC e getNivelImc, que verifica o nivel do IMC 
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    //Cria a mensagem que sera colocada apos calcular
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
})

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Validacao por meio de array
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

//Funcao especializada em criar o elemento paragrafo
function criarP() {
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) {
    const setResultado = document.querySelector("#resultado")
    resultado.innerHTML = ''
    const p = criarP() //chamada da funcao para criar o paragrafo
    //Abaixo, temos a validacao sobre qual classe sera usada
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    // Executando o resultado na tela, com parametro msg
    p.innerHTML = msg;
    resultado.appendChild(p);

}