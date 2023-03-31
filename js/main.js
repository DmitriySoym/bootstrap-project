window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
};

document.addEventListener("DOMContentLoaded", () => {
	function calcWindowHeight() {
		let vh = window.innerHeight * 0.01;
		let vw = document.documentElement.clientWidth * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
		document.documentElement.style.setProperty("--vw", `${vw}px`);
	}

	window.addEventListener("resize", calcWindowHeight);

	const scrollingItem = document.querySelector(".scroll__wrapper");

	function scrollHorizontally(event) {
		event = event || window.event;
		let delta = Math.max(
			-1,
			Math.min(1, event.wheelDelta || -event.detail)
		);
		scrollingItem.scrollLeft -= delta * 10;
		event.preventDefault();
	}

	if (scrollingItem.addEventListener) {
		scrollingItem.addEventListener("mousewheel", scrollHorizontally, false);

		scrollingItem.addEventListener(
			"DOMMouseScroll",
			scrollHorizontally,
			false
		);
	} else {
		scrollingItem.attachEvent("onmousewheel", scrollHorizontally);
	}

	//faq section
	const collapseBtn = document.querySelectorAll(".card-header");
	const collapseBlock = document.querySelectorAll(".collapse");
	const collapseArray = Array.from(collapseBlock);

	collapseBtn.forEach((item) => {
		item.addEventListener("click", function () {
			collapseArray.forEach((el) => {
				el.classList.remove("open");
				if (el.classList.contains(item.id)) {
					el.classList.add("open");
				}
			});
		});
	});

	//burger
	const menuBurger = document.querySelector(".header__burger");
	const menuBurgerBtn = document.querySelector(".header__bueger-wrapper");
	const overlay = document.querySelector(".overlay");
	const closeBurger = document.querySelector(".header__close");

	function toggleClass(item, className) {
		item.classList.toggle(className);
	}

	function handleBurger() {
		let itemsArr = [menuBurger, overlay, closeBurger];

		if (window.matchMedia("(max-width: 1200px)").matches) {
			for (let item of itemsArr) {
				toggleClass(item, "active");
			}
			document.body.classList.toggle("stop-scrolling");
		}
	}

	menuBurgerBtn.addEventListener("click", handleBurger);
	closeBurger.addEventListener("click", handleBurger);

	document.body.addEventListener("click", (event) => {
		if (event.target.classList.contains("overlay", "active")) {
			handleBurger();
		}
	});

	document.body.addEventListener(
		"touchmove",
		function (event) {
			event.preventDefault();
			event.stopPropagation();
		},
		false
	);

	//menu
	const menuItems = document.querySelectorAll(".header__nav-item");

	menuItems.forEach((item) => {
		item.addEventListener("click", function () {
			menuItems.forEach((item) => item.classList.remove("active"));
			item.classList.add("active");
		});
	});
});
