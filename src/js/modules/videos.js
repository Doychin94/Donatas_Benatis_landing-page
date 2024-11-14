/**
 * Play Video.
 *
 * @param {jQuery} $video
 * @returns { Void }
 */
function playVideo($video) {
	$video.addClass('is-playing');
	$video.find('video')[0].play();
}

/**
 * Pause All Videos Except Current.
 *
 * @param {jQuery} $videos
 * @param {jQuery} $currentVideo
 * @returns {Void}
 */
function pauseAllVideosExceptCurrent($videos, $currentVideo) {
	$videos.each((index, video) => {
		const $video = $(video);

		if ($video[0] === $currentVideo[0]) {
			return;
		}

		$video.find('video')[0].pause();
		$video.removeClass('is-playing');
	});
}

/**
 * Handle video trigger click event.
 */
$('.js-media .media__btn').on('click', function (event) {
	event.preventDefault();

	const $this = $(this);
	const $currentVideo = $this.closest('.js-media');

	playVideo($currentVideo);
	pauseAllVideosExceptCurrent($('.js-media'), $currentVideo);
});
