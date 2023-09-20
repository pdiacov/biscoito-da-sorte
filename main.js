// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgCracker = document.querySelector('#imgCracker')
const btnOpenAnother = document.querySelector('.screen2 button')
let randonNumber = (Math.round(Math.random () * 10))
let phrases =[
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'A maior de todas as torres começa no solo.',
  'Não há que ser forte. Há que ser flexível.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
]

// Eventos
imgCracker.addEventListener('click', luckCrackerClick)
btnOpenAnother.addEventListener('click', luckAnotherClick)
document.addEventListener('keydown', pressEnter)

// Functions
function luckCrackerClick() {
  toggleClass()
  
  screen2.querySelector('p').innerText = phrases[randonNumber]

  randonNumber = (Math.round(Math.random () * 10))
}

function luckAnotherClick() {
  toggleClass()
}

function toggleClass() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function pressEnter (e) {
  if(e.key == 'Enter' && screen2.classList.contains('hide')) {
    luckCrackerClick()
  }
}


