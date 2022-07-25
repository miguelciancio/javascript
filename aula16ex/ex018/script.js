const num = window.document.getElementById('txtn')
const optlist = window.document.getElementById('sellist')
const myList = []

function adicionar() {
    // Criando analisador com validacao de entrada de dados.
    // VALIDACAO
    if (num.value.length < 1 || num.value.length > 100) {
        window.alert('Valor invalido ou ja encontrado na lista.')
    
    // CRIACAO DA TABELA.
    } else {
        let n = Number(num.value)
        
        myList.push(n)

        i = 0
        while (i < myList.length) {
            let optn = n[myList.length - 1]
            let el = window.document.createElement('option')
            el.text = `Valor ${n} adicionado.`
            el.value = `val${n}`
            optlist.appendChild(el)
            i = i + i
        }

        
        /*let item  = document.createElement('option')  //  CRAIACAO ELEMENTO HTML.
        item.text = `Valor ${num.value} adicionado`  
        item.value = `num${count}`
        sellist.appendChild(item)  //  ADICIONA O ELEMENTE CRIADO EM TELA.*/
    }
}
