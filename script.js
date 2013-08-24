
var isMobile = false;
var opened = 0;
var oldBox = 0;
var newBox = 0;

function scrollToPost(postid) {
	var target = $(postid).parent().offset().top - 60;
	var from = {count: $(document).scrollTop()};
	var to = {count: target};
	
	$(from).animate(to, {duration: 100, step: function (stepNumber, fx) {
		$(document).scrollTop(stepNumber);
	}});
}

// function openBox(element) {
// 	$(element).parent().append('<div class=\'comment-box\'></div>');
// 	newBox = $(element).next('.comment-box');
// 	newBox.html('<iframe src=\'comments.html\'></iframe>');
// 	newBox.css('height', 0);
	
// 	newBox.children('iframe').on('load', function (e) {
// 		var box = $(e.currentTarget).parent();
		
// 		var shortname = 'operationhelios';
// 		var title = $(element).parent().children('.title').html();
// 		var id = $(opened).parent().children('.anchor').attr('id');
// 		var url = $(location).attr('origin') + $(location).attr('pathname') + '#' + id;
		
// 		var code = '\
// 		<script type="text/javascript">\
// 			(function() {\
// 	            var dsq = document.createElement(\'script\'); dsq.type = \'text/javascript\'; dsq.async = true;\
// 	            dsq.src = \'http://operationhelios.disqus.com/embed.js\';\
// 	            (document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(dsq);\
// 	        })();\
// 		</script>';
		
//     	newBox.children('iframe').contents().find('.container').append('<div id="disqus_thread"></div>');
// 		newBox.children('iframe').contents().find('.container').append(code);
		
// 		var h = box.children('iframe').contents().find('html').height() + 20;
		
// 		if (!isMobile) {
// 			box.css('height', 0);
// 			box.animate({height: h}, {duration: 100});
// 		}
// 		else
// 			box.height(h);
// 	});
// }

// function closeBox(element) {
// 	oldBox = $(element).next('.comment-box');
// 	if (!isMobile) {
// 		oldBox.animate({height: 0}, {duration: 100, done: function () {
// 			oldBox.remove();
// 		}});
// 	}
// 	else
// 		oldBox.remove();
// }

$(document).ready(function () {
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
	
	// $('.comments-button').html('Load comments');
	// $('.comments-button').bind('click', function (e) {
	// 	if (opened == 0) {
	// 		opened = e.currentTarget;
	// 		openBox(opened);
	// 		$(opened).html('Hide comments');
	// 	}
	// 	else if (opened == e.currentTarget) {
	// 		closeBox(opened);
	// 		$(opened).html('Load comments');
	// 		opened = 0;
	// 	}
	// 	else {
	// 		closeBox(opened);
	// 		$(opened).html('Load comments');
	// 		opened = e.currentTarget;
	// 		openBox(opened);
	// 		$(opened).html('Hide comments');
	// 	}
	// });
});
