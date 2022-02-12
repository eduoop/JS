var btn = document.querySelector('#btnev')
var inpu = document.querySelector('#idade')

const showIdade = (event) => {
    event.preventDefault()
    alert('Sua idade é ' + inpu.value)
}

btn.addEventListener('click', showIdade)