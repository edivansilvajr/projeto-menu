let btnOpenMenu = document.getElementById('iconBurger')
let btnCloseMenu = document.getElementById('closeMenu')
let sideBarMenu = document.getElementById('sideBar')


// btnOpenMenu.onclick = function() {
//     if(sideBarMenu.style.left != '0') {
//         sideBarMenu.style.left = '0'
//     }
// }

// btnCloseMenu.onclick = function() {
//     if(sideBarMenu.style.left == '0px') {
//         sideBarMenu.style.left = '-250px'
//         document.body.style.overflow = 'auto'
//     }
// }

// sideBarMenu.onmouseover = function () {
//     document.body.style.overflow = 'hidden'
// }


// sideBarMenu.onmouseout = function () {
//     document.body.style.overflow = 'auto'
// }

// window.onscroll = function () {
//     sideBarMenu.style.left = '-250px'
// }

// touch events ---------------------------
btnOpenMenu.onclick = function () {
    if (sideBarMenu.style.left != '0') {
        sideBarMenu.style.left = '0'
    }
}

btnCloseMenu.ontouchend = function () {
    if (sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-250px' 
    }
}

sideBarMenu.ontouchmove = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchstart = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchend = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchcancel = function (e) {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
}

document.body.ontouchmove = function () {
    sideBarMenu.style.left = '-250px'
}

document.body.ontouchstart = function () {
    document.body.style.overflow = 'auto'
}

document.body.ontouchend = function () {
    sideBarMenu.style.left = '-250px'
}
