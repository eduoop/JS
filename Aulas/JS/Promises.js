var voceComprouOsProdutos = new Promise((resolve, reject) => {
    setTimeout(() => {
        var prod = ['camisa', 'sapato', 'calça']
        reject('deu ruim')
    }, 3000);

    
})
voceComprouOsProdutos.then((prod) => console.log(prod))
.catch((err) => console.log(err))