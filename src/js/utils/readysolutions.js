//Hide header on scroll
const header = document.querySelector('header')
const subHeader = document.querySelector('.sub-header .inner')
let items = subHeader.querySelectorAll('.sub-header-nav li')

function fitSubHeader(x = 0) {
    let subHeaderWidth = subHeader.clientWidth
    let subHeaderItemsWidth = subHeader.querySelector('.sub-header-nav').clientWidth
    let diff = subHeaderWidth - subHeaderItemsWidth

    if (diff >= 0) {
        let i = 0;
        while (diff - x > 0 && i < items.length - 2) {
            if (items[i].classList.contains('hide')) {
                items[i].classList.remove('hide')
                diff -= items[i].clientWidth
            }
            i++
        }
    } else {
        let i = 0
        while (diff - x < 0 && i < items.length - 2) {
            if (!items[items.length - 2 - i].classList.contains('hide')) {
                items[items.length - 2 - i].classList.add('hide')
                diff += items[items.length - 2 - i].clientWidth
            }
            i++
        }
    }
}

fitSubHeader(document.documentElement.clientWidth / 5)
window.onresize = () => fitSubHeader(document.documentElement.clientWidth / 5)
const subHeaderItem = document.querySelector('.sub-header ')
window.onscroll = function (e) {

    if (this.scrollY > 0 && window.innerWidth >= 1200) {
        if ((this.oldScroll > this.scrollY) && this.scrollY >= 0) {

            header.classList.add('scroll-up');
            header.classList.remove('scroll-down');

            subHeaderItem.classList.add('scroll-up');
            subHeaderItem.classList.remove('scroll-down');

        } else if (!header.classList.contains('show')) {

            if (window.pageYOffset > 80) {

                header.classList.add('scroll-down');
                header.classList.remove('scroll-up');

                subHeaderItem.classList.add('scroll-down');
                subHeaderItem.classList.remove('scroll-up');
            }

        }
        this.oldScroll = this.scrollY;
        delete window.onscroll;
    }
};
