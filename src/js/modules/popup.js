/**
 * External dependencies
 */
import 'magnific-popup';

$('.js-popup-trigger').magnificPopup({
	type: 'ajax',
	tLoading: '',
	callbacks: {
		ajaxContentAdded: function () {
			$('.js-popup').toggleClass('is-active', true);
		},
		beforeClose: function () {
			$('.js-popup').toggleClass('is-active', false);
		},
	},
});
