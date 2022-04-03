let numContas = 0;
let valTotal = 0;

//string que acumula as contas
let resposta = "";

function registrarConta(){
    //referência aos elementos da pagina
    let inDescricao = document.getElementById('inDescricao');
    let inValor = document.getElementById('inValor');
    let outListaContas = document.getElementById('outListaContas');
    let outTotal = document.getElementById('outTotal');

    //obtém conteúdo dos campos
    let descricao = inDescricao.value;
    //converter para número
    let valor = Number(inValor.value);
    
    
    //verifica preenchimento dos campos
    if(descricao == "" || valor == 0 || isNaN(valor)){
        alert("informe os dados corretamente...");
        inDescricao.focus();
        return;
    }
    
    //adicionar valores ao contador e acumulador
    numContas ++;
    valTotal = valTotal + valor;

    //concatenar as contas 
    resposta = `${resposta+descricao} R$ ${valor.toFixed(2)} \n`;
    
    //alterar o conteudo das tags de resposta
    outListaContas.textContent = resposta + "------------------------";
    outTotal.textContent = numContas + "Conta(s) - Total R$: "+ valTotal.toFixed(2);
    
    //LIMPAR CAMPOS E POSICIONAR CURSOR EM inDescricao;
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();

}

//REFERÊNCIA ELEMENTO E APÓS ASSOCIA FUNCTION AO EVENTO CLICK
let btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener('click', registrarConta);