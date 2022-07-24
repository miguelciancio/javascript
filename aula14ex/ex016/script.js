function contar() {
    let res = window.document.querySelector('div#resultado')
    let inicio = window.document.querySelector('input#txtn1')
    let fim = window.document.querySelector('input#txtn2')
    let passo = window.document.querySelector('input#txtn3')

    // VALIDACAO DE DADOS.
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    
    // IMPRIMINDO EM TELA O RESULTADO
    } else {
        res.innerHTML = 'Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        // CONTAGEM CRESCENTE
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        // CONTAGEM REGRESSIVA
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}