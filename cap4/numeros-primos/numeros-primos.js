// let temDivisor = 0;
let temDivisor = 0;


//string que acumula as contas
let resposta = "";

function numeroPrimo() {
    //referência aos elementos da pagina
    //buscando os IDs
    let inNumero = document.getElementById('inNumero');
    let outResposta = document.getElementById('outResposta');


    //converter para número
    let numero = Number(inNumero.value);


    //verifica preenchimento dos campos
    if (numero == 0 || isNaN(numero)) {
        alert("informe os dados corretamente...");
        inNumero.focus();
        return;
    }


    //Percorrer todos os possiveis divisores do número
    for (let i = 2; i <= numero / 2; i++) {
        //Verificar se i (1,2,3...) é divisor do numero
        if (numero % i == 0) {
            temDivisor = 1; //se é incrementa contador
            break;//sai da repetiçaõ
        }
    }

    if (numero >  1 && !temDivisor) {
        outResposta.textContent = `${numero} é primo`;
    } else {
        outResposta.textContent = `${numero} não é primo `
        
    }

}

//REFERÊNCIA ELEMENTO E APÓS ASSOCIA FUNCTION AO EVENTO CLICK
let btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener('click', numeroPrimo);