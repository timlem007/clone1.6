import '../scss/style.scss';


const sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
	let mySwiper = new Swiper(el, {
		direction: 'horizontal',
		autoHeight: true,
		pagination: {
			el: el.querySelector('.swiper-pagination'),
			type: 'bullets',
			clickable: true,
		},
			breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 16,
				slidersPerColumn: 1
			}
		},
	
	})
});


const menuBrandsLoaded = document.querySelector('.service-brands-menu[hidden]');
const styleBrandsUnlo = document.querySelector('.read-more-brands__unloaded');
const styleBrandsLo = document.querySelector('.read-more-brands__loaded');
const btnBrands = document.querySelector("#btn-brands");
const menuBrandUnloaded = document.querySelector(".service-brands-menu__unloaded[hidden]");
let isClickedBrands = false;

btnBrands.addEventListener("click", () => {
	isClickedBrands = !isClickedBrands;

	if (isClickedBrands) {
		menuBrandsLoaded.style.maxHeight = "360px";
		styleBrandsLo.style.display = "none";
		styleBrandsUnlo.style.display = "block";
	} else {
		menuBrandsLoaded.style.maxHeight = "180px";
		styleBrandsLo.style.display = "block";
		styleBrandsUnlo.style.display = "none";
	}
       })

	   const menuTechnicsLoaded = document.querySelector('.service-technics-menu[hidden]');
	   const styleTechnicsUnlo = document.querySelector('.read-more-technics__unloaded');
	   const styleTechnicsLo = document.querySelector('.read-more-technics__loaded');
	   const btnTechnics = document.querySelector("#btn-technics");
const menuTechnicsUnloaded = document.querySelector(".service-technics-menu__unloaded[hidden]");
let isClickedTechnics = false;

btnTechnics.addEventListener("click", () => {
	isClickedTechnics = !isClickedTechnics;

	if (isClickedTechnics) {
		menuTechnicsLoaded.style.maxHeight = "650px";
		styleTechnicsLo.style.display = "none";
		styleTechnicsUnlo.style.display = "block";
	} else {
		menuTechnicsLoaded.style.maxHeight = "160px";
		styleTechnicsLo.style.display = "block";
		styleTechnicsUnlo.style.display = "none";
	}
       })


		
	const burger = document.querySelector('.header__menu');
	const sideMenu = document.querySelector('.side__menu');
	const bodyUnactive = document.querySelector('.body');
	const bodyWhite = document.querySelector('.bodyWhite');

	burger.addEventListener('click', () => {
					sideMenu.classList.add('side_menu_open');
					sideMenu.classList.remove('side_menu_close');
	});

	const burgerClose = document.querySelector('.side__menu__headerLeft__menu');

	burgerClose.addEventListener('click', () => {
		sideMenu.classList.remove('side_menu_open');
			sideMenu.classList.add('side_menu_close');
	}, 5000)





	const feedBackOpen = document.querySelector('.header__massage');
	const feedBack = document.querySelector('.feedback');

	feedBackOpen.addEventListener('click', () => {
		feedBack.classList.add('feedback_open');
		feedBack.classList.remove('feedback_close');
	});

	const feedBackClose = document.querySelector('.feedback__close');

	feedBackClose.addEventListener('click', () => {
		feedBack.classList.remove('feedback_open');
		feedBack.classList.add('feedback_close');
	}, 5000)


	const feedBackCloseToo = document.querySelector('.feedback__close_mobil');

	feedBackCloseToo.addEventListener('click', () => {
		feedBack.classList.remove('feedback_open');
		feedBack.classList.add('feedback_close');
	}, 5000)



	const orderCallOpen = document.querySelector('.header__tel');
	const orderCall = document.querySelector('.orderCall');

	orderCallOpen.addEventListener('click', () => {
		orderCall.classList.add('orderCall_open');
		orderCall.classList.remove('orderCall_close');
	});

	const orderCallClose = document.querySelector('.orderCall__close');

	orderCallClose.addEventListener('click', () => {
		orderCall.classList.remove('orderCall_open');
		orderCall.classList.add('orderCall_close');
	}, 5000)

	const orderCallCloseToo = document.querySelector('.orderCall__close_mobil');

	orderCallCloseToo.addEventListener('click', () => {
		orderCall.classList.remove('orderCall_open');
		orderCall.classList.add('orderCall_close');
	}, 5000)


	
	// const burger = document.querySelector('.header__menu');
	// const sideMenu = document.querySelector('.side__menu');
	// const bodyUnactive = document.querySelector('.body');
	// const bodyWhite = document.querySelector('.bodyWhite');

	// const burgerClose = document.querySelector('.side__menu__headerLeft__menu');


	// const feedBackOpen = document.querySelector('.icon__setting');
	// const feedBack = document.querySelector('.feedback');

	// const feedBackClose = document.querySelector('.feedback__close');

	// let sideWindows = function(btn, side, add, remove, time) {
	// 	btn.addEventListener('click', () => {
	// 		side.classList.remove('remove');
	// 		side.classList.add('add');
	// 			console.log('fjnvijmf');
	// 		}, time)
	// }
	
	// sideWindows(feedBackOpen, feedBack, side_menu_open, side_menu_close, 1)
	// sideWindows(feedBackclose, feedBack, side_menu_close, side_menu_open, 1)
