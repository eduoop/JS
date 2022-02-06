var isActive = false
var message = ''

if (isActive) {
    message = 'Active'
} else {
    message = 'Not active'
}

console.log(message)


var semaforo = 'vermelho'
var message2 = ''

// if(semaforo === 'verde') {
//     message2 = 'Pode passar'
// }

// else if(semaforo === 'amarelo') {
//     message2 = 'Atenção'
// }

// else if (semaforo === 'vermelho') {
//     message2 = 'Pare!'
// }

// console.log(message2)

switch (semaforo) {
    case 'verde':
        message2 = 'Pode passar.'
    break

    case 'amarelo':
        message2 = 'Atenção'
    break

    case 'vermelho':
        message2 = 'Pare!'
    break

    default:
        message2 = 'Valor inválido'
}

console.log(message2)