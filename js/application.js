$(document).on("pageinit", function(event){
	var loadApp = null; // init loadApp
	function h1(text){ return "<h1>" + text + "</h1>";  };
	// custom code goes here
	var mainContent = $('#main-content');
	var motivationalMessages = [
		["That's awesome!", "Fantastic!", "Kudos. :)"],
		["Not bad, not bad.", "That's nice!", "Good sport!"],
		["Dude!<br />Be careful...", "Well... But take control next time."],
		["Ok, you've messed up...<br />Do better next time!", "Duuude! Don't do that... :("]
	];
	var SMILEYS = ['☼', '☺', '☹', '☠'];
	var getRandomElement = function(items) {
		return items[Math.floor(Math.random()*items.length)];
	};
	var getFeedback = function(level) {
		var msg = "<div class='feedback'>";
		msg += "<h1 class='smiley'>" + SMILEYS[level] + "</h1>"
		msg += "<h1>" + getRandomElement(motivationalMessages[level]) + "</h1>"
		msg += '<a href="index.html" data-role="button" data-icon="check" data-theme="b">Okay</a>';
		msg += "</div>";
		msg = $(msg);
		msg.find('a').click(loadApp);
		return msg;
	};

	var setupEvents = function(){
		// setup main events
		$('#very-much').click(function(){
			mainContent.html(getFeedback(0));
			mainContent.trigger('create');
		});
		$('#reasonably').click(function(){
			mainContent.html(getFeedback(1));
			mainContent.trigger('create');
		});
		$('#not-much').click(function(){
			mainContent.html(getFeedback(2));
			mainContent.trigger('create');
		});
		$('#anything-but').click(function(){
			mainContent.html(getFeedback(3));
			mainContent.trigger('create');
		});
	}

	// load app
	loadApp = function() {
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
