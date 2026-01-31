// TODO: to knon *

const menu_btn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.mobile-sidebar');
const overlay = document.getElementById('sidebar-overlay');
const body = document.body;

function closeSidebar() {
	sidebar.classList.remove('open');
	overlay.classList.remove('active');
	body.classList.remove('no-scroll');
}

if (menu_btn && sidebar && overlay) {
    menu_btn.addEventListener('click', () => {

		window.scrollTo({top: 0, behavior: 'instant'});

        sidebar.classList.toggle('open');

    	overlay.classList.toggle('active');
        
        body.classList.toggle('no-scroll');
    });

	overlay.addEventListener('click', () => {
		closeSidebar();
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			closeSidebar();
		}
	});
}

// *
