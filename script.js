
function scrollToPost(postid) {
	var target = $(postid).parent().offset().top - 60;
	var from = {count: $(document).scrollTop()};
	var to = {count: target};
	
	$(from).animate(to, {duration: 100, step: function (stepNumber, fx) {
		$(document).scrollTop(stepNumber);
	}});
}

$(document).ready(function () {
	var isMobile = false;
	
	$('.comments-button').html('Load comments');
	
	if (navigator.userAgent.match(/Mobile|Android|iPhone|iPod|iPad/gi)) {
		isMobile = true;
		$('#header').css('position', 'absolute');
	}
	
	if (!isMobile) {
		$('.post a').bind('click', function (e) {
			var target = $(e.currentTarget).attr('href');
			scrollToPost(target);
		});
	}
});
