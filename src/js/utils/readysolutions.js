//Hide header on scroll
const header = document.querySelector('header')
const subHeader = document.querySelector('.sub-header')
window.onscroll = function (e) {

    if (this.scrollY > 0 && window.innerWidth >= 1200) {
        if ((this.oldScroll > this.scrollY) && this.scrollY >= 0) {

            header.classList.add('scroll-up');
            header.classList.remove('scroll-down');

            subHeader.classList.add('scroll-up');
            subHeader.classList.remove('scroll-down');

        } else if (!header.classList.contains('show')) {

            if (window.pageYOffset > 80) {

                header.classList.add('scroll-down');
                header.classList.remove('scroll-up');

                subHeader.classList.add('scroll-down');
                subHeader.classList.remove('scroll-up');
            }

        }
        this.oldScroll = this.scrollY;
        delete window.onscroll;
    }
};
