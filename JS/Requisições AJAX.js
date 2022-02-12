var btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    var xhr = new  XMLHttpRequest()

    xhr.open('GET', 'https://api.github.com/users')
    xhr.send()

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText)

            console.log(data[5].login + ' (Sem o axios)')
        }
    }
})

// requisições com o axios

var btn = document.querySelector('.btna')

btn.addEventListener('click', function() {
    axios.get('https://api.github.com/users')
    .then(function(res) {
        console.log(res.data[5].login)
    }) 
    .catch(function(err) {
        console.log(err)
    })
    // .finally(() => {
    //     console.log('finalizou')
    // })
})
