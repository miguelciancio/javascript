function tabuada() {
    // Captura o numero que sera feita a tabuada.
    let num = window.document.getElementById('txtn')

    // Captura a area da tabuada.
    let tab = window.document.getElementById('seltab')

    // Criando tabuada com validacao de entrada de dados.
    // VALIDACAO
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero')
    
    // CRIACAO DA TABELA.
    } else {
        let n = Number(num.value)
        let count = 1
        tab.innerHTML = ""
        while (count <= 10) {
            let item  = document.createElement('option')  //  CRAIACAO ELEMENTO HTML.
            item.text = `${n} x ${count} = ${n * count}`  
            item.value = `tab${count}`
            tab.appendChild(item)  //  ADICIONA O ELEMENTE CRIADO EM TELA.
            count++
        }
    }
}