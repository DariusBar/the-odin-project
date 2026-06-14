const menuButton = document.getElementById("menuButton");

function toggleSideNav() {
    const sideNav = document.getElementById("sideNav");
    sideNav.classList.toggle('show');

    console.log("button has been clicked.")
}

menuButton.addEventListener('click', toggleSideNav);