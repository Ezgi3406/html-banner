//Caching the element IDs
var Banner = Banner || {}, addListeners, exitHandler, mainClick = document.getElementById('main-click'), cta = document.getElementById('cta');

Banner.init = function(){
	//Add the listeners for the clicks, and start the animation
	addListeners();
	Banner.animate();		
};

Banner.animate = function(){
	var d = 0; //delay in seconds before the animation should start.
	TweenLite.to('#bg1', 2.5, {x:0, opacity:1, delay: d});
	TweenLite.from('#copy-1', 1.5, {x:0,delay: d+0.5});
	TweenLite.to('#copy-1', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#bg1','#copy-1'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	TweenLite.to('#bg1', 2.5, {x:-180, opacity:1, delay: d});
	TweenLite.from('#copy-2', 1.5, {x:-300,delay: d+0.5});
	TweenLite.to('#copy-2', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#bg1','#copy-2'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	TweenLite.to('#bg1', 2.5, {x:-180, opacity:1, delay: d});
	TweenLite.from('#copy-3', 1.5, {x:-300,delay: d+0.5});
	TweenLite.to('#copy-3', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#bg1','#copy-3'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	TweenLite.to('#bg2', 2.5, {x:-180, opacity:1, delay: d});
	TweenLite.from('#copy-4', 1.5, {x:-300,delay: d+0.5});
	TweenLite.to('#copy-4', 1.5, {opacity:1, delay: d+0.5});

	TweenLite.to(['#bg2','#copy-4'], 0.5, {opacity:0, delay: d+5});

	d = d + 5;

	
	TweenLite.to(['#bg2','#copy-5'], 1, {alpha:1, delay: d});
	TweenLite.to('#cta', 1, {alpha:1, delay: d+1});

	

	

	
};

//Add Event Listeners, should probably put this in the Index.html, so clicks can be tracked even if the animation doesn't load.
addListeners = function() {
	mainClick.addEventListener('click', exitHandler, true);
	cta.addEventListener('click', exitHandler, true);
};

exitHandler = function(e) {
	var exit = e.target.id;
	switch(exit){
		case 'backup':
			Enabler.exit('BACKUP_EXIT');
		break;
		case 'cta':
			Enabler.exit('CTA_EXIT');
		break;
		case 'main-click':
		default:
			Enabler.exit('DEFAULT_EXIT');
		break;
	}
};