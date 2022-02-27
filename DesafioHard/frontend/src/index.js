import renderRanking from './requests/ranking.js';

$(document).ready(() => {
	$('#play_game').click(() => {
		window.location = '/gameplay';
	});

	// When the user clicks on the button, render the ranking modal
	$('.red__button').click(() => {
		renderRanking();
	});

	let soundToggle = false;
	$('.sound__button').click(function () {
		if (soundToggle) {
			this.style.backgroundImage = `url('./assets/images/sound_button.svg')`;
		} else {
			this.style.backgroundImage = `url('./assets/images/sound_button_disabled.svg')`;
		}

		soundToggle = !soundToggle;
	});

	// When the user clicks anywhere outside of the modal, closes it
	$(window).click((event) => {
		if (event.target === $('.close_modal')[0]) {
			$('.modal')[0].style.display = 'none';
		}
	});
});
