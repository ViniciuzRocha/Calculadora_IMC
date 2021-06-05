function calcular(){
    var nome = window.document.getElementById('nome').value 
    var txtaltura = window.document.getElementById('alt').value
    var txtpeso = window.document.getElementById('peso').value
    var res = window.document.getElementById('res')
    var altura = Number.parseFloat(txtaltura)
    var alturaq = altura/100//*altura
    var alturaf = alturaq*alturaq
    var peso = Number.parseFloat(txtpeso)
    var cal = peso/alturaf
    var imc = cal.toFixed(2)
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (txtpeso <= 0 || txtaltura <= 0 || nome.length == 0){
        window.alert('[Erro] Dados inválidos, favor verificar.')
    } else{ 
        //res.innerHTML = `Seu IMC é ${imc}`
       if (imc < 18.50){ 
            res.innerHTML=`${nome}, seu IMC é: ${imc}.<br>Você está abaixo do peso ideal.`
            img.setAttribute('src','foto.h.magro.jpg')
        } else if ( imc >= 18.50 && imc < 24.99){
            res.innerHTML=`${nome}, seu IMC é: ${imc}.<br>Você está no peso ideal`
            img.setAttribute('src','foto.h.normal.jpg')
        } else if ( imc > 24.99) {
            res.innerHTML = `${nome}, seu IMC é ${imc}.<br>Você está acima do peso ideal.`
            img.setAttribute('src','foto.h.gordo.jpg')
        }  res.appendChild(img)
    }
    
}