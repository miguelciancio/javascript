var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break  //  MEGA OBRIGATORIO NO SWITCH.
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terca-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia Invalido !')
}
