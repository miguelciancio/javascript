let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

// VERIFICA SE O NUMERO ADICIONADO ESTA ENTRE 1 E 100 - RETORNA VERDADEIRO OU FALSO.
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// VERIFICA SE O NUMERO ADICIONADO JA ESTA DENTRO DA LISTA - RETORNA VERDADEIRO OU FALSO.
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {  // ! -> significa NAO.
        
        // ADICIONANDO VALORES NA LISTA
        valores.push(Number(num.value))

        // RETORNA VALORES ADICIONADOS NO SELECT
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''  //  Limpa a div resultado quando voce consegue add algum valor.
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }

    // LIMPA INPUT:NUMBER APOS ADICIONAR UM NUMERO / MANTEM O FOCO NO MESMO.
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de analisar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        // LACO QUE VERIFICA MAIOR E MENOR NUMERO DENTRO DA LISTA / SOMA TODOS OS VALORES.
        for (let pos in valores) {
            // RETORNA SOMA DOS VALORES DA LISTA
            soma += valores[pos]

            // RETORNA MAIOR NUMERO DA LISTA
            if (valores[pos] > maior)
                maior = valores[pos]

            // RETORNA MENOR NUMERO DA LISTA
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        // MEDIA DOS NUMEROS DA LISTA.
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados e ${media}.</p>`
    }
}