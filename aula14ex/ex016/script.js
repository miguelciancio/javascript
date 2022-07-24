function contar() {
    var res = window.document.querySelector('div#resultado')
    var inicio = window.document.querySelector('input#txtn1')
    var fim = window.document.querySelector('input#txtn2')
    var passo = window.document.querySelector('input#txtn3')

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    var display = ""

    if (inicio != 0 && fim != 0) {
        if (passo == 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            passo = 1
        }

        for (inicio; inicio <= fim; inicio+=passo) {
            display += `${inicio} 👉 `
        }
    
        res.innerHTML = `Contando: </br> ${display} 🏁`
    } else {
        res.innerHTML = 'Impossivel contar!'
    }
}