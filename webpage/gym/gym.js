//script.js
document.addEventListener('DOMContentLoaded',
	function () {
		const navItems = document
			.querySelectorAll('.navbar');

		navItems.forEach(item => {
			item.addEventListener('click',
				function () {
					navItems.forEach(navItem => navItem
						.classList.remove('active'));
					this.classList.add('active');
				});
		});
	});
