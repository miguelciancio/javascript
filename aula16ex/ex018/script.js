const num = window.document.getElementById('txtn')
const mySelect = window.document.getElementById('selopt')
const myList = []
const res = window.document.getElementById('res')

function adicionar() {
    // Criando analisador com validacao de entrada de dados.
    // VALIDACAO
    if (num.value < 1 || num.value > 100) {
        window.alert('Numero invalido. Por favor, digite um numero entre 1 e 100.')
    } else {
        let n = Number(num.value)

        if (myList.includes(n)) {
            window.alert('Numero ja inserido na lista. Por favor, digite um outro numero entre 1 e 100.')
        } else {
            res.innerHTML = ""
            myList.push(n)
            let option = window.document.createElement('option')
            option.text = `Valor ${n} adicionado`
            mySelect.add(option)
        }
    }
}

function finalizar() {
    //let clique = window.document.getElementById('btn')

    // INFORMA MAIOR VALOR DENTRO DA ARRAY
    let maior = Math.max.apply(null, myList)

    // INFORMA MENOR VALOR DENTRO DA ARRAY
    let menor = Math.min.apply(null, myList)

    // SOMA DE TODOS OS VALORES DA SUA ARRAY
    let soma = 0
    for (i = 0; i < myList.length; i++) {
        soma += myList[i]
    }

    // MEDIA DE TODOS OS VALORES DA SUA ARRAY
    let media = soma / myList.length

    // TOTAL DE NUMEROS DENTRO DA ARRAY
    res.innerHTML = `
                    </br> Ao todo, temos ${myList.length} numeros cadastrados. 
                    </br> O maior valor informado foi ${maior}.
                    </br> O menor valor informado foi ${menor}.
                    </br> Somando todos os valores, temos ${soma}.
                    </br> A media dos valores digitados e ${media}.
                    `
}