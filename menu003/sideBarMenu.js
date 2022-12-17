let btnOpenMenu = document.getElementById('iconBurger')
let btnCloseMenu = document.getElementById('closeMenu')
let sideBarMenu = document.getElementById('sideBar')


btnOpenMenu.onclick = function() {
    if(sideBarMenu.style.left != '0') {
        sideBarMenu.style.left = '0'
    }
}

btnCloseMenu.onclick = function() {
    if(sideBarMenu.style.left == '0px') {
        sideBarMenu.style.left = '-250px'
    }
}

sideBarMenu.onmouseover = function () {
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchmove = function () {
    document.body.style.overflow = 'hidden'
}

sideBarMenu.ontouchend = function () {
    document.body.style.overflow = 'auto'
}



sideBarMenu.onmouseout = function () {
    document.body.style.overflow = 'auto'
}

window.onscroll = function () {
    sideBarMenu.style.left = '-250px'
}