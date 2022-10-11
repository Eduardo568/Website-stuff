let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".sidenav");
    let getSidebarUl = document.querySelector(".sidenav ul");
    let getSidebarLink = document.querySelectorAll(".sidenav a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarLink.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLink[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLink.length;

        for (let i = 0; i < arrayLength; i++) {
            getSidebarLink[i].style.opacity = "0";

        }
        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;

    }
}