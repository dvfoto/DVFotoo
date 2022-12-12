
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
            sidebar.classList.remove('open');
        });

        navItem.classList.add('active');
        sidebar.classList.remove('open');

    });

});

const openerMobile = document.querySelector('.mobile_meniu .pionter_down');
const navItemsMobile = document.querySelectorAll('.mobile_meniu .mobile_icons');
const sidebarMobile = document.querySelector('.mobile_meniu');

openerMobile.addEventListener('click', () => {

    if (sidebarMobile.className === 'mobile_meniu')
        sidebarMobile.classList.add('open');
    else
        sidebarMobile.classList.remove('open');

});

navItemsMobile.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItemsMobile.forEach(navItem => {
            navItem.classList.remove('active');
            sidebarMobile.classList.remove('open');
        });

        navItem.classList.add('active');
        sidebarMobile.classList.remove('open');

    });

});

