$(document).on("pageinit", function(event){
	function h1(text){ return "<h1>" + text + "</h1>";  };
	// custom code goes here
	var mainContent = $('#main-content');
	var motivationalMessages = [
		["That's awesome!"],
		["Not bad, not bad."],
		["Dude!<br />Be careful..."],
		["Ok, you've messed up...<br />Do better next time!"]
	];
	var SMILEYS = ['☼', '☺', '☹', '☠'];
	var getRandomElement = function(items) {
		return items[Math.floor(Math.random()*items.length)];
	}
	var getFeedback = function(level) {
		var msg = "<div class='feedback'>";
		msg += "<h1 class='smiley'>" + SMILEYS[level] + "</h1>"
		msg += "<h1>" + getRandomElement(motivationalMessages[level]) + "</h1>"
		msg += "</div>";
		return msg;
	}
	$('#very-much').click(function(){
		mainContent.html(getFeedback(0));
	});
	$('#reasonably').click(function(){
		mainContent.html(getFeedback(1));
	});
	$('#not-much').click(function(){
		mainContent.html(getFeedback(2));
	});
	$('#anything-but').click(function(){
		mainContent.html(getFeedback(3));
	});
});
