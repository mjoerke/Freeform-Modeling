// bind fullpage.js to HTML sections

new fullpage('#fullpage', {
	anchors: ['coverPage', 'spaceTimeVolkmar', 'designerModeler', 
			 'clayModeling', 'clayModeling2', 'clayModeling3', 
			 'modelingTools', 'gypsumModeling', 'gypsum2', 
			 'meditativeExperience', 'meditativeExperience2', 'windowClose'],

	menu: "#navbar",
	scrollingSpeed: 2000,
	verticalCentered: false,

	// navbar color change to white on title (slide 0) or window (slide 11)
	onLeave: function(origin, destination, direction){
		var leavingSection = this;

		if (destination.index == 0 || destination.index == 11) {
			setTimeout(() => $("#navOpenButton").css('fill', 'white'), 500)
		}
		else {
			setTimeout(() => $("#navOpenButton").css('fill', '#1f1a41'), 500)
		}
	}
});

// manage navbar collapse / animations on click
var collapsed = true
btn = $("#navOpenButton")
bar = $("#navbar")

btn.click(function() {
	if (collapsed) {
		bar.removeClass('collapsed')
		btn.removeClass('flip')
		btn.css('fill', '#1f1a41')
		fullpage_api.setAllowScrolling(false)
		collapsed = false;
	} else {
		setTimeout(function() {
			if (fullpage_api.getActiveSection().index == 0) {
				$("#navOpenButton").css('fill', 'white')
			}
		}, 1500)
		bar.addClass('collapsed')
		fullpage_api.setAllowScrolling(true)
		btn.addClass('flip')
		collapsed = true;
	}
})

$(".navCol").click(function() {
	if (!$(this).hasClass('dead')) {
		$("#navOpenButton").click()
	}
})


// video autoplay on hover function
function play(video) {
	if (video.paused) {
  		video.play();     
	}
}    

function pause(el) {
	this.pause();     
}  