let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".sidenav");
    let getSidebarDiv = document.querySelector(".sidelink");
    let getSidebarDiv2 = document.querySelector(".sidelink2");
    let getSidebarDiv3 = document.querySelector(".sidelink3");
    let getSidebarDiv4 = document.querySelector(".sidelink4");

    if (toggleNavStatus === false) {
        getSidebar.style.width = "272px";
        getSidebarDiv.style.visibility = "visible"
        getSidebarDiv2.style.visibility = "visible"
        getSidebarDiv3.style.visibility = "visible"
        getSidebarDiv4.style.visibility = "visible"

        toggleNavStatus = true;
    }
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarDiv.style.visibility = "hidden"
        toggleNavStatus = false;

        getSidebarDiv2.style.visibility = "hidden"
        getSidebarDiv3.style.visibility = "hidden"
        getSidebarDiv4.style.visibility = "hidden"
    }
}