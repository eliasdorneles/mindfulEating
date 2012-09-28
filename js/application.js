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
	};
	var getFeedback = function(level) {
		var msg = "<div class='feedback'>";
		msg += "<h1 class='smiley'>" + SMILEYS[level] + "</h1>"
		msg += "<h1>" + getRandomElement(motivationalMessages[level]) + "</h1>"
		msg += "</div>";
		return msg;
	};

	var setupEvents = function(){
		// setup main events
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
	}

	// load app
	var loadApp = function() {
		function createOption(id, label, comment) {
			return '<li id="' + id + '"><h3>' + label + '</h3><p>' + comment + '</p>';
		};
		var question = "<h4>How healthy was your last meal?</h4>";
		var options = '<ul data-role="listview" data-inset="true" class="main-options">';
		options += createOption('very-much', '☼ Very much', 'I actually chose to eat well!');
		options += createOption('reasonably', '☺ Reasonably', 'I ate fairly healthy.');
		options += createOption('not-much', '☹ Not much', "I didn't pay attention how I ate.");
		options += createOption('anything-but', '☠ Anything but', 'I ended up eating junk again.');
		options += '</ul>'
		options = $(options);
		mainContent.html(question);
		mainContent.append(options);
		mainContent.trigger('create');
		setupEvents();
	};
	loadApp();
});
