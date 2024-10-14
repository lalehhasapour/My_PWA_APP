// ایجاد فضای نام برای مدیریت بهتر کد
const Navbar = (function() {
	const listItems = document.querySelectorAll('.navbar__item');

	function activateLink() {
		listItems.forEach(item => {
			item.classList.remove('navbar__item--active');
		});
		this.classList.add('navbar__item--active');
	}

	listItems.forEach(item => {
		item.addEventListener('click', activateLink);
	});
})();
