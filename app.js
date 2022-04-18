const counters = document.querySelectorAll('.counter')



const logo = document.querySelector('.site-logo')
const followers = document.querySelector('.counter-container')


logo.addEventListener('click', () => {
    followers.classList.toggle('hidden')
    setTimeout(() => {
        followers.classList.toggle('transform')
        
    }, 100)
    setTimeout(() => {
        counters.forEach((counter) => {
            counter.textContent = 0
        
            function updateCounter() {
                const target = +counter.getAttribute('data-target')
                const c = +counter.textContent
        
                const increment = target / 200
        
                if (c < target) {
                    counter.textContent = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 18)
                } else {
                    counter.textContent = target
                }
            }
            updateCounter()
        })
    }, 200)
    
})

const showBtn = document.querySelector('.show-btn')
const navOpen = document.querySelector(".active-navbar")
const navClose = document.querySelector('.closer-navbar')

showBtn.addEventListener('click', () =>{
    navOpen.classList.remove('hidden-nav')    
    let i = 0
    navOpen.style.opacity = `${i}`
    appearance(i)

    function appearance(i) {
        if (i < 1){
            setTimeout(() => {
                navOpen.style.opacity = `${i}`
                appearance(i + 0.1)
            }, 40)
        }   
    } 
})  

navClose.addEventListener('click', () => {
    navOpen.classList.add('hidden-nav') 
})

navOpen.addEventListener('click', (e) => {
    navOpen.classList.add('hidden-nav')
})

document.addEventListener('keydown', (e)=> {
    if (e.key == 'Escape'){
        navOpen.classList.add('hidden-nav')
    }
})

const header = document.querySelector('.site-header')

document.addEventListener('scroll', () => {
     if (window.scrollY > header.clientHeight) {
        header.classList.add('white-header')
     } else {
        header.classList.remove('white-header')
     } 
    console.log(header.clientWidth)
})