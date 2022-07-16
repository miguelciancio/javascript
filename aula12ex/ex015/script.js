function verificar() {
    // DATA ATUAL
    var data = new Date()
    var ano = data.getFullYear()

    // DATA DE NASCIMENTO
    var fano = window.document.querySelector('input#txtano')

    // DIV DO RESULTADO QUE SERA IMPRESSO
    var res = window.document.querySelector('div#res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        
        var idade = ano - Number(fano.value)
        
        var genero = ''
        
        var img = window.document.createElement('img')  //  Criacao de atributo foto por JS.
        img.setAttribute('id', 'foto')  //  Criacao do ID - foto - do atributo img por JS.
        
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // CRIANCA
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                // CRIANCA
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}