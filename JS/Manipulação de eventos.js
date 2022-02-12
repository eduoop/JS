var btn = document.querySelector('#btnev')
var input = document.querySelector('input#idade')

const showAge = () => {
    alert(`Sua idade é: ${input.value}`)
}

btn.addEventListener('click', showAge)

