
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});

const openerMobile = document.querySelector('.mobile_meniu .pionter_down');
const meniuMobile = document.querySelector('.mobile_meniu');
const navItemsMobile = document.querySelectorAll('.pionter_down');

openerMobile.addEventListener('click', () => {

    if (meniuMobile.className === 'mobile_meniu')
        openerMobile.classList.add("openMobile");
    else (
        openerMobile.classList.remove("openMobile")
    )

});


