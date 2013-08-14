
function scrollToPosition(position) {
	var from = {count: $(document).scrollTop()};
	var to = {count: position};
	
	$(from).animate(to, {duration: 100, step: function (stepNumber, fx) {
		$(document).scrollTop(stepNumber);
	}});
}

function scrollToPost(postid) {
	var target = $(postid).parent().offset().top - 60;
	scrollToPosition(target);
}

$(document).ready(function () {
	$(".post a").bind("click", function (e) {
		var target = $(e.currentTarget).attr("href");
		scrollToPost(target);
	});
});
