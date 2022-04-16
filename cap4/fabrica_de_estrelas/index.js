function preencherEstrela() {
    //pegando IDs
    let numero = document.getElementById('idNumero').value
    let resposta = document.getElementById('outEspaco')

if(numero == 0 | isNaN(numero)){
    alert('número invalido...')
    numero.focus()
    return
}

    let resp = ''

    for (let i = 1; i <= numero; i++) {

        if (i % 2 == 1) {
            resp += '*'
        } else {
            resp += '-'
        }
    }
    resposta.textContent = resp

}

let btn = document.getElementById('btn')
btn.addEventListener('click', preencherEstrela) 