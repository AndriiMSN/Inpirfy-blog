const moreBtn = document.querySelector('.sub-header li.more')
const moreMenuCtg = document.querySelector('.mob-menu-ctg.ctg')
const closeBtnCtg = moreMenuCtg.querySelector('.header button')

moreBtn.addEventListener('click', () => {
    moreMenuCtg.classList.add('open')
})
closeBtnCtg.addEventListener('click', () => {
    moreMenuCtg.classList.remove('open')
})

moreMenuCtg.addEventListener('click', (e) => {
    if (!e.target.closest('.wrapper-mob')) {
        moreMenuCtg.classList.remove('open')
    }
})

const brgBtn = document.querySelector('.left-header .burger')
const headerMenu=document.querySelector('.mob-menu-ctg.brg')
const closeBtnBrg = headerMenu.querySelector('.header button')

brgBtn.addEventListener('click', () => {
    headerMenu.classList.add('open')
})
closeBtnBrg.addEventListener('click', () => {
    headerMenu.classList.remove('open')
})

headerMenu.addEventListener('click', (e) => {
    if (!e.target.closest('.wrapper-mob')) {
        headerMenu.classList.remove('open')
    }
})