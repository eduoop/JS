function doAction() {
    console.log('ola')
}

function doActions() {
    console.log('ola mundo')
}

setInterval(doAction, 3000)


setTimeout(doActions, 1000)