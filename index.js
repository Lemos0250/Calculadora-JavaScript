
function result() {
    let question = document.getElementById('resultado').innerHTML

    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(question)
    }
    else {
        document.getElementById('resultado').innerHTML = "Error "
    }

}

function insertion(dig) {
   let digito = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = digito + dig

   digito.length = 2
}

function erase_one_by_one() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}

function erase(C) {
    document.getElementById('resultado').innerHTML = ""
}


