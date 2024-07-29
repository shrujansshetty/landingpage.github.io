function toggleMenu(x) {
    x.classList.toggle("change");
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "250px";
    }
}
