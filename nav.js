document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const openMenuButton = document.getElementById("openMenu");
    const closeMenuButton = document.getElementById("closeMenu");
    const mobileMenu = document.querySelector(".hidden");

    // Open mobile menu
    openMenuButton.addEventListener("click", function () {
        mobileMenu.classList.remove("hidden");
        openMenuButton.classList.add("hidden");
        closeMenuButton.classList.remove("hidden");
    });

    // Close mobile menu
    closeMenuButton.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        openMenuButton.classList.remove("hidden");
        closeMenuButton.classList.add("hidden");
    });
});
