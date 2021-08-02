function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
 
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/menino.png')

            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/garoto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/senhor.png')
            }
                
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'images/menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/garota.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    }
}