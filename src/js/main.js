import "./utils/slider";
import "./utils/readysolutions";

//Тег img переводим в background===============================================================================================================================================================
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();
//===============================================================================================================================================================
// let burgerMenu = document.querySelector('.icon-menu');
// let menu = document.querySelector('.menu-header__body');
// let menuLink = document.querySelectorAll('.menu-header__link');
//
//
// 	burgerMenu.addEventListener('click', function () {
// 		burgerMenu.classList.toggle('active');
// 		menu.classList.toggle('active');
// 		document.querySelector('body').classList.toggle('lock');
// 	})

//===============================================================================================================================================================
let unlock = true;

//=================
//Popups


const pop = (el, i) => {
    let popup_link = document.querySelectorAll('.popup-link');
    let popups = document.querySelectorAll('.popup');
    let videoBlock = document.querySelector('.video-block');

    // for (let index = 0; index < popup_link.length; index++) {
    //     const el = popup_link[index];
    //     el.addEventListener('click', function (e) {
    //         if (unlock) {
    //             let item = el.getAttribute('href').replace('#', '');
    //             let video = el.getAttribute('data-video');
    //             popup_open(item, video);
    //         }
    //         e.preventDefault();
    //     })
    // }
    let item = el.getAttribute('href').replace('#', '');
    let video = el.getAttribute('data-video');
    popup_open(item, video)

    for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        popup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__body')) {
                popup_close(e.target.closest('.popup'));
            }
        });
    }

    function popup_open(item, video = '') {
        let activePopup = document.querySelectorAll('.popup.active');
        if (activePopup.length > 0) {
            popup_close('', false);
        }
        let curent_popup = document.querySelector('.popup_' + item);
        if (curent_popup && unlock) {
            if (video != '' && video != null) {
                let popup_video = document.querySelector('.popup_video');
                popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            }
            if (!document.querySelector('.menu__body.active')) {
                body_lock_add(500);
            }
            curent_popup.classList.add('active');
            history.pushState('', '', '#' + item);
        }
    }

    function popup_close(item, bodyUnlock = true) {
        if (unlock) {
            if (!item) {
                for (let index = 0; index < popups.length; index++) {
                    const popup = popups[index];
                    let video = popup.querySelector('.popup__video');
                    if (video) {
                        video.innerHTML = '';
                    }
                    popup.classList.remove('active');
                }
            } else {
                let video = item.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                item.classList.remove('active');
            }
            if (!document.querySelector('.menu__body.active') && bodyUnlock) {
                body_lock_remove(500);
            }
            history.pushState('', '', window.location.href.split('#')[0]);
        }
    }

    let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
    if (popup_close_icon) {
        for (let index = 0; index < popup_close_icon.length; index++) {
            const el = popup_close_icon[index];
            el.addEventListener('click', function () {
                popup_close(el.closest('.popup'));
            })
        }
    }
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Escape') {
            popup_close();
        }
    });

    //BodyLock
    function body_lock(delay) {
        let body = document.querySelector("body");
        if (body.classList.contains('lock')) {
            body_lock_remove(delay);
        } else {
            body_lock_add(delay);
        }
    }

    function body_lock_remove(delay) {
        let body = document.querySelector("body");
        if (unlock) {
            let lock_padding = document.querySelectorAll("._lp");
            setTimeout(() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = '0px';
                }
                body.style.paddingRight = '0px';
                body.classList.remove("lock");
            }, delay);

            unlock = false;
            setTimeout(function () {
                unlock = true;
            }, delay);
        }
    }

    function body_lock_add(delay) {
        let body = document.querySelector("body");
        if (unlock) {
            let lock_padding = document.querySelectorAll("._lp");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
            }
            body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
            body.classList.add("lock");

            unlock = false;
            setTimeout(function () {
                unlock = true;
            }, delay);
        }
    }
}


// document.querySelector("body").on("click",".popup-link", function(){
//   pop();
// });
document.querySelectorAll('.popup-link').forEach((el, i) => {
    el.addEventListener('click', (e) => {
        console.log(e.target, el)
        e.preventDefault()
        pop(el, i)
    })
})
//===============================================================================================================================================================

let comments = document.querySelectorAll('.comment');
if (comments) {
    for (let index = 0; index < comments.length; index++) {
        const comment = comments[index];
        comment.querySelector(".footer-comment__reply").addEventListener('click', (e) => {
            e.preventDefault();
            comment.querySelector('.comment > .comments-area-reply').classList.toggle('active');
        })
    }
}

let commentsReplys = document.querySelectorAll('.message-reply');

for (let index = 0; index < commentsReplys.length; index++) {
    const commentsReply = commentsReplys[index];
    commentsReply.querySelector(".message-reply__reply").addEventListener('click', (e) => {
        e.preventDefault();
        commentsReply.querySelector('.comments-area').classList.toggle('active');
    })
}



