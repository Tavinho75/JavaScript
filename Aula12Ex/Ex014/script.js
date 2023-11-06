function Carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 15

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6) {
        img.src = 'NascerSol.png'
        document.body.style.background = '#C5B161'
    } else if (hora >= 6 && hora < 12) {
        img.src = 'Manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 16) {
        img.src = 'MeioDia.png'
        document.body.style.background = '#7CACDD'
    } else if (hora >= 16 && hora < 18) {
        img.src = 'Tarde.png'
        document.body.style.background = '#A56154'
    } else {
        img.src = 'Noite.png'
        document.body.style.background = '#1B4354'
    }
}