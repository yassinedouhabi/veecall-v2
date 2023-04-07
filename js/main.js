const menu = document.getElementById("menu");
const openMenuButton = menu.querySelector(".open-menu");
const closeMenuButton = menu.querySelector(".close-menu");
const menuList = menu.querySelector(".menu-list");

openMenuButton.addEventListener("click", () => {
	menuList.style.display = "block";
	openMenuButton.style.display = "none";
	closeMenuButton.style.display = "flex";
});

closeMenuButton.addEventListener("click", () => {
	menuList.style.display = "none";
	openMenuButton.style.display = "flex";
	closeMenuButton.style.display = "none";
});

// Modal Start Here
var modal = document.querySelector(".modal");
var btn = document.querySelector(".cta-btn");

btn.onclick = function () {
	modal.style.display = "block";
};

var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
// Modal End Here
