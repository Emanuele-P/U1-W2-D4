/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const areaOfRectangle = function (l1, l2) {
  const area = l1 * l2
  console.log('The area of the rectangle is', area)
}
areaOfRectangle()

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let sum = n1 + n2
  if (n1 === n2) {
    sum = (n1 + n2) * 3
  } else {
    sum
  }
  console.log('The result of this operation is:', sum)
}
crazySum()

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (x) {
  const y = 19
  const diff = Math.abs(x - y)
  if (x > 19) {
    const result = diff * 3
    console.log('The result is:', result)
  } else {
    const result = diff
    console.log('The result is:', result)
  }
}
crazyDiff(22)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n < 100) || n === 400) {
    console.log('The result is true')
    return true
  } else {
    console.log('The result is false')
    return false
  }
}
boundary(400)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (string.startsWith('EPICODE')) {
    return string
  } else {
    return 'EPICODE' + string
  }
}
console.log(epify('hello this is a string'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    const result = true
    console.log('This number is a multiple of 3 or 7')
  } else {
    const result = false
    console.log('Not a multiple :(')
  }
}
check3and7(11)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let splitString = str.split('')
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join('')
  console.log(joinArray)
  return joinArray
}
reverseString('hello this is a string')

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  let words = str.split(' ')
  words = words.map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  })
  let result = words.join(' ')
  return result
}

console.log(upperFirst('hello how are you'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  let result = str.slice(1, -1)
  return result
}

console.log(cutString('string'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  let arrayRandom = []
  for (i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 11)
    arrayRandom.push(randomNumber)
  }
  return arrayRandom
}
console.log(giveMeRandom(7))
