function menuShow() {
    let menuMbile = document.querySelector('.mobile-menu')
    if (menuMbile.classList.contains('open')) {
        menuMbile.classList.remove('open')
        document.querySelector('.icon').src = 'assets/images/menu_white_36dp.svg'
    }else{
        menuMbile.classList.add('open')
        document.querySelector('.icon').src = 'assets/images/close_white_36dp.svg'
    }
}