$(document).ready(function() {

	$('.index-video').click(function() {

		var data_id = $(this).attr('data-id');

		$('#thumbnail-' + data_id + ' > img').click();
	});
});