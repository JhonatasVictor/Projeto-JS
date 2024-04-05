  function somar()  {
    let numero1 = document.getElementById('num1')
    let numero2 = document.getElementById('num2')
    let res = document.getElementById('res')
    if (numero1.value.length == 0 || numero2.value.length == 0) {
        window.alert('[ERRO] Digite um número e tente novamente!')
    } else {
        n1 = Number(numero1.value)
        n2 = Number(numero2.value)
  if ('+') {
         res.innerHTML = `O resultado é igual à <strong>${n1 + n2}</strong>`
  }
}
  }
function subtrair() {
    let numero1 = document.getElementById('num1')
    let numero2 = document.getElementById('num2')
    let res = document.getElementById('res')
    if (numero1.value.length == 0 || numero2.value.length == 0) {
        window.alert('[ERRO] Digite um número e tente novamente!')
    } else {
        n1 = Number(numero1.value)
        n2 = Number(numero2.value)
  if ('-') {
         res.innerHTML = `O resutado é igual à <strong>${n1 - n2}</strong>`
  }
    }
}
function multiplicar () {
    let numero1 = document.getElementById('num1')
    let numero2 = document.getElementById('num2')
    let res = document.getElementById('res')
    if (numero1.value.length == 0 || numero2.value.length == 0) {
        window.alert('[ERRO] Digite um número e tente novamente!')
    } else {
        n1 = Number(numero1.value)
        n2 = Number(numero2.value)
  if ('*') {
         res.innerHTML = `O resultado é igual à <strong>${n1 * n2}</strong>`
  }
    }
}
function dividir () {
    let numero1 = document.getElementById('num1')
    let numero2 = document.getElementById('num2')
    let res = document.getElementById('res')
    if (numero1.value.length == 0 || numero2.value.length == 0) {
        window.alert('[ERRO] Digite um número e tente novamente!')
    } else {
        n1 = Number(numero1.value)
        n2 = Number(numero2.value)
  if ('/') {
         res.innerHTML = `O resultado é igual à <strong>${n1 / n2}</strong>`
  } if (n1, n2 == 0) {
    res.innerHTML = '<strong>Resutado Indefinido</strong>'
  }
    }
}



