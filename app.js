const piDigits =
  '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235'

let currentIndex = 0
let displayedPi = '3.'

function checkInput() {
  const userInput = document.getElementById('userInput').value

  if (userInput === piDigits[currentIndex]) {
    currentIndex++
    displayedPi += userInput

    document.getElementById('message').innerText = 'Dobrze! Kontynuuj.'
    document.getElementById('userInput').value = ''
    document.getElementById('displayedPi').innerHTML = displayedPi
  } else {
    document.getElementById('message').innerText = 'Błąd! Gra skończona.'
    document.getElementById('userInput').disabled = true

    const nextDigits = piDigits.slice(currentIndex, currentIndex + 3)
    displayedPi += `<span style="color: blue; margin-left: 10px;">${nextDigits}</span>`
    document.getElementById('displayedPi').innerHTML = displayedPi
  }

  document.getElementById('score').innerText = `Twój wynik: ${currentIndex}`
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userInput').addEventListener('input', checkInput)
})
