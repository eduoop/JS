var formbtn = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app main')

formbtn.addEventListener('click', run)

function run (event) {
    event.preventDefault()

    var zipCode = zipCodeField.value

    zipCode = zipCode.replace(' ', '')
    zipCode = zipCode.replace('.', '')
    zipCode = zipCode.trim()

    axios.get(`http://viacep.com.br/ws/${zipCode}/json/`)
    .then(function(response) {
        if(response.data.erro) {
            throw new Error('cep inválido')
        }

        content.innerHTML = ''
        createLine(response.data.localidade + ' ' + response.data.uf)
        createLine('DDD ' + response.data.ddd)
    })
    .catch(function() {
        content.innerHTML = ''
        createLine('Ops, algo deu errado!')
    })
}

function createLine(data) {
    var line = document.createElement('p')
    var text = document.createTextNode(data)

    line.appendChild(text)
    content.appendChild(line)
}

