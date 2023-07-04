// Swiper-slider
new Swiper('.block1', {
	loop: true,
	autoplay: { delay: 2500 },
	navigation: { nextEl: '.block1__left', prevEl: '.block1__right' },
});

// Animation
const animationElements = document.querySelectorAll('.animation');
if (animationElements.length > 0) {
	const animate = () => {
		for (let i = 0; i < animationElements.length; i++) {
			const element = animationElements[i];
			const offsetHeight = element.offsetHeight;
			const topSetHeight = element.getBoundingClientRect().top + window.scrollY;
			let totalHeight = window.innerHeight - offsetHeight / 4;
			if (offsetHeight > window.innerHeight) {
				totalHeight = window.innerHeight - window.innerHeight / 4;
			}
			if (
				scrollY > topSetHeight - totalHeight &&
				scrollY < topSetHeight + offsetHeight
			) {
				element.classList.add('active');
			}
		}
	};
	window.addEventListener('scroll', animate);
	setTimeout(animate, 300);
}

// Menu burger
const menuIcon = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

menuIcon.addEventListener('click', () => {
	document.body.classList.toggle('lock');
	menuIcon.classList.toggle('active');
	menuList.classList.toggle('active');
});

menuLink.forEach(e => {
	e.addEventListener('click', () => {
		document.body.classList.remove('lock');
		menuIcon.classList.remove('active');
		menuList.classList.remove('active');
	});
});

// Tabs
const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsBlock = document.querySelectorAll('.tabs__block');
tabsBtn.forEach(tabBtn => {
	tabBtn.addEventListener('click', () => {
		const dataTab = document.querySelector(tabBtn.getAttribute('data-tab'));
		if (!tabBtn.classList.contains('active')) {
			tabsBtn.forEach(el => el.classList.remove('active'));
			tabsBlock.forEach(el => el.classList.remove('active'));
			tabBtn.classList.add('active');
			dataTab.classList.add('active');
		}
	});
});
