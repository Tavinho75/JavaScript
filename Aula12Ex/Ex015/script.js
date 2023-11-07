function Verificar() {
    var data = new Date()
    var ano = data. getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 6) {
                // Bebê
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 6) {
                // Bebê
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 12) {
                // Criança
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}