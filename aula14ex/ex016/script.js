function contar() {
    var res = window.document.querySelector('div#resultado')
    var inicio = window.document.querySelector('input#txtn1')
    var fim = window.document.querySelector('input#txtn2')
    var passo = window.document.querySelector('input#txtn3')

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    var display = ""

    for (inicio; inicio <= fim; inicio+=passo) {
        display += `${inicio} 👉 `
    }

    res.innerHTML = `Contando: </br> ${display} 🏁`
}