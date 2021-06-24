/*Abre e fecha menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/*links do menu, quando clicados fecham o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/*adicionar sombra ao header quando o scroll for acionado*/
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/*CARROSEL/SLIDER COM O SWIPER*/
const swiper = new Swiper('.swiper-container', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*SCROLLREVEAL- OTIMIZAÇÃO DE ROLAGEM DA PÁGINA*/
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home .text, #home .image,
   #about .text, #about .image,
   #services header, #about .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links
   footer .brand, footer .social`,
  {
    interval: 100
  }
)

/*Button back-to-top*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
