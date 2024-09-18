function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO]Verifica os dados e tente novamente!')
    } 
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotos/crianca_h.jpg')
            }
            else if (idade >= 10 && idade < 21) {
                // Jovem
                img .setAttribute('src', 'fotos/jovem_h.jpg' )
            }
            else if ((idade < 50)){
                // Adulto
                img.setAttribute('src', 'fotos/adulto_h.jpg' )
            }
            else{
                // Idoso
                img.setAttribute('src', 'fotos/idoso_h.jpg' )
            }

                    }

        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotos/crianca_m.jpg')
            }
            else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotos/jovem_m.jpg' )
            }
            else if ((idade < 50)){
                // Adulto
                img.setAttribute('src', 'fotos/adulto_m.jpg' )
            }
            else{
                // Idoso
                img.setAttribute('src', 'fotos/idosa_m.jpg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    
    
    }

}

