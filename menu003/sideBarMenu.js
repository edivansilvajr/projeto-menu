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



