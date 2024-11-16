$(document).ready(function () {
	// Set the target date for Black Friday in EET (Eastern European Time)
	const blackFridayDate = new Date('2024-11-29T00:00:00+02:00');

	function updateCountdown($counter) {
		const $days = $counter.find('.days');
		const $hours = $counter.find('.hours');
		const $minutes = $counter.find('.minutes');
		const $seconds = $counter.find('.seconds');

		const now = new Date(); // Current time
		const difference = blackFridayDate - now; // Difference in milliseconds

		if (difference <= 0) {
			// Black Friday has arrived
			$('.list-counters').html("<li><strong>It's Black Friday!</strong></li>");
			clearInterval(timer); // Stop the timer
			return;
		}

		// Calculate time components
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((difference / (1000 * 60)) % 60);
		const seconds = Math.floor((difference / 1000) % 60);

		// Update the HTML
		$days.text(days.toString().padStart(2, '0'));
		$hours.text(hours.toString().padStart(2, '0'));
		$minutes.text(minutes.toString().padStart(2, '0'));
		$seconds.text(seconds.toString().padStart(2, '0'));
	}

	const $counter = $('.js-counter'); // Cache the counter element
	const timer = setInterval(() => updateCountdown($counter), 1000); // Pass the counter element

	// Initialize the countdown
	updateCountdown($counter);
});
