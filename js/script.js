
document.addEventListener("DOMContentLoaded", function (){
    let btn = document.querySelector('.left-sidebar__header__button')
    let sidebar = document.querySelector('.left-sidebar')
    let sidebarFooter = document.querySelector('.left-sidebar__footer')
    let sidebarMenu = document.querySelector('.left-sidebar__menu')
    let darkLayer = document.querySelector('.dark-layer')
    let rightBarToggle = document.querySelector('.right-sidebar-toggle')
    let middleContent = document.querySelector('.middle-content')
    let rightSideBar = document .querySelector('.right-sidebar')

    rightBarToggle.onclick = function () { 
        middleContent.classList.toggle('expanded');
        rightSideBar.classList.toggle('collapsed');
        rightBarToggle.classList.toggle('collapsed');
    };


    btn.onclick = function () { 
        sidebar.classList.toggle('is-open');
        btn.classList.toggle('is-open');
        sidebarFooter.classList.toggle('is-open');
        sidebarMenu.classList.toggle('is-open');
        darkLayer.classList.toggle('is-open');

    };
} )
