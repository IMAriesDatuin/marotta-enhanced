/* -------------------------------------------------- */
/* OPTIONS
/* -------------------------------------------------- */

// THROTTLE / DEBOUNCE INTERVAL
var interval = {	
	delay: 1,
	update: 66,
	trailing: true,
	leading: true
};


// ELEMENTS
var $win = $(window),
	$doc = $(document),
	$html = $('html'),
	$body = $('body'),
	$main = $('main');


// ANIMATION ENGINE
var Tween = TweenMax,
	Timeline = TimelineMax;

/* -------------------------------------------------- */
/* VARS
/* -------------------------------------------------- */

// BROWSERS
var isChrome = browserDetect.browser === 'Chrome',
	isExplorer = browserDetect.browser === 'Explorer',
	isEdge = browserDetect.browser === 'MS Edge',
	isFirefox = browserDetect.browser === 'Fireforx',
	isOpera = browserDetect.browser === 'Opera',
	isSafari = browserDetect.browser === 'Safari';


// DEVICES
var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1,
	isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone') > -1,
	isiPad = navigator.userAgent.toLowerCase().indexOf('ipad') > -1,
	isiPod = navigator.userAgent.toLowerCase().indexOf('ipod') > -1,
	
	isMobile = isAndroid || isiPhone || isiPad || isiPod,
	
	isPortrait = window.innerWidth < window.innerHeight,
	isLandscape = window.innerWidth > window.innerHeight,
	
	//orientationPortrait = isMobile && orientation === 0,
	//orientationLandscape = isMobile && orientation === 90,
	
	isDesktop = !isMobile,
	isTouchScreen = isTouch && isDesktop; // Detects any touch-enabled device that is not a mobile device.


// SCREEN SIZES
var isMobileScreen = window.matchMedia('(min-width: 320px) and (max-width: 667px)').matches,
	isTabletScreen = window.matchMedia('(min-width: 668px) and (max-width: 1024px)').matches,
	isLaptopScreen = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches,
	isDesktopScreen = window.matchMedia('(min-width: 1025px)').matches;


// CACHE
var $isiOS = $('.is-ios'),
	$isAndroid = $('.is-android'),
	$isMobile = $('.is-mobile'),
	//$isTablet = $('.is-tablet'),
	$isDesktop = $('.is-desktop');


/* -------------------------------------------------- */
/* TOUCH
/* -------------------------------------------------- */

function detectTouch() {

	if (isTouch) {
		
		console.log('This device is touch enabled and will disable all :hover states.');
		//alert('This device is touch enabled and will disable all :hover states.');

		try {

			// Prevent exception on browsers not supporting DOM 'styleSheet' properly.
			for (var si in document.styleSheets) {

				var styleSheet = document.styleSheets[si];

				if (!styleSheet.rules) continue;

				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {

					if (!styleSheet.rules[ri].selectorText) continue;

					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						
						styleSheet.deleteRule(ri);

					}

				}

			}

		}

		catch (ex) {

		}

	}

}


/* -------------------------------------------------- */
/* BROWSERS
/* -------------------------------------------------- */

function detectBrowser() {

	console.log('You are using ' + browserDetect.browser + ' with version ' + browserDetect.version);


	/* -------------------------------------------------- */
	/* CHROME
	/* -------------------------------------------------- */

	if (isChrome) {

	}


	/* -------------------------------------------------- */
	/* EDGE / EXPLORER
	/* -------------------------------------------------- */

	if (isEdge) {

	}


	/* -------------------------------------------------- */
	/* EXPLORER
	/* -------------------------------------------------- */

	if (isExplorer) {

	}


	/* -------------------------------------------------- */
	/* FIREFOX
	/* -------------------------------------------------- */

	if (isFirefox) {

	}


	/* -------------------------------------------------- */
	/* OPERA
	/* -------------------------------------------------- */

	if (isOpera) {

	}


	/* -------------------------------------------------- */
	/* SAFARI
	/* -------------------------------------------------- */

	if (isSafari) {

	}

}


/* -------------------------------------------------- */
/* DEVICES
/* -------------------------------------------------- */

function detectDevice() {

	/* -------------------------------------------------- */
	/* ANDROID
	/* -------------------------------------------------- */

	if (isAndroid) {
		
		console.log('Android device detected.');
		
		$isiOS.addClass('hide');
		$isDesktop.addClass('hide');

	}


	/* -------------------------------------------------- */
	/* APPLE
	/* -------------------------------------------------- */

	if ( isiPhone || isiPad || isiPod ) {
		
		console.log('iOS device detected.');
		
		$isAndroid.addClass('hide');
		$isDesktop.addClass('hide');
		
	}


	/* -------------------------------------------------- */
	/* MOBILE
	/* -------------------------------------------------- */

	if (isMobile) {
		
		console.log('Viewing on mobile device.');
		
		$isDesktop.addClass('hide');
		
	} else {
		
		$isMobile.addClass('hide');
		
	}


	/* -------------------------------------------------- */
	/* DESKTOP
	/* -------------------------------------------------- */

	if (isDesktop) {
		
		console.log('Viewing on desktop / laptop.');
		
		$isMobile.addClass('hide');
		
	} else {
		
		$isDesktop.addClass('hide');
		
	}

}


/* -------------------------------------------------- */
/* SCREEN SIZES
/* -------------------------------------------------- */

function detectScreen() {

	/* -------------------------------------------------- */
	/* MOBILE SCREEN (SMALL)
	/* -------------------------------------------------- */

	if (isMobileScreen) {
		
		console.log('Viewing on MOBILE (SMALL) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* TABLET SCREEN (MEDIUM)
	/* -------------------------------------------------- */

	if (isTabletScreen) {
		
		console.log('Viewing on TABLET (MEDIUM) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* LAPTOP (LARGE)
	/* -------------------------------------------------- */

	if (isLaptopScreen) {
		
		console.log('Viewing on LAPTOP (LARGE) screen: ' + $win.width() + 'px' );

	}


	/* -------------------------------------------------- */
	/* DESKTOP (EXTRA LARGE)
	/* -------------------------------------------------- */

	if (isDesktopScreen) {
		
		console.log('Viewing on a DESKTOP (X-LARGE) screen: ' + $win.width() + 'px' );

	}

}

/* -------------------------------------------------- */
/* DATA HELPERS
/* -------------------------------------------------- */

var dataAttr = (function dataAttr($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('dataAttr', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		backgroundColorDataAttrName: 'background-color',
		colorDataAttrName: 'color',
		imageDataAttrName: 'image',
		pageDataAttrName: 'page'

	};


	/* -------------------------------------------------- */
	/* COLOR
	/* -------------------------------------------------- */

	// BACKGROUND
	function backgroundColor() {

		var $element = document.querySelectorAll('[data-' + options.backgroundColorDataAttrName + ']');

		for (var i = 0; i < $element.length; i++) {
			 var attribute = $element[i].getAttribute('data-' + options.backgroundColorDataAttrName);
			 $element[i].style.backgroundColor = attribute;
		}
		console.log(attribute);

	}


	// TEXT
	function color() {

		var $element = document.querySelectorAll('[data-' + options.colorDataAttrName + ']');

		for (var i = 0; i < $element.length; i++) {
			 var attribute = $element[i].getAttribute('data-' + options.colorDataAttrName);
			 $element[i].style.color = attribute;
		}
		console.log(attribute);

	}


	/* -------------------------------------------------- */
	/* IMAGE
	/* -------------------------------------------------- */

	function image() {

		var $element = document.querySelectorAll('[data-' + options.imageDataAttrName + ']');

		if (Modernizr.webp) {

			console.log('WebP supported.');

			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-' + options.imageDataAttrName).replace(/jpg|png/ig, "webp");
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-webp');

		} else {

			console.log('WebP is not supported.');
			
			for (var i = 0; i < $element.length; i++) {
				 var url = $element[i].getAttribute('data-' + options.imageDataAttrName).replace(/webp/ig, 'png');
				 $element[i].style.backgroundImage = 'url(' + url + ')';
			}
			console.log(url);

			//img.src = img.getAttribute('data-jpg');

		}

	}


	/* -------------------------------------------------- */
	/* PAGE
	/* -------------------------------------------------- */

	function page() {

		/*
		var $element = document.querySelectorAll('[data-' + options.pageDataAttrName + ']');
		
		for (var i = 0; i < $element.length; i++) {
			var attribute = $element[i].getAttribute("data-page");
		}
		console.log(attribute);
		*/

		
		var $page = $('[data-page]').not('main');
		var href = window.location.pathname.split('/').pop();

		if(location.pathname === '/') { // Check if url is at root location.

			$page.attr('data-' + options.pageDataAttrName, 'index');

		} else {

			$page.attr('data-' + options.pageDataAttrName, href);

		}
		
	}

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		backgroundColor: backgroundColor,
		color: color,
		image: image,
		page: page

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* HEADROOM
/* -------------------------------------------------- */

var headroom = (function headroom($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('headroom', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.headroom');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			scroller: window, // Element to listen to scroll events on, defaults to 'window'.
			offset: $('main').find('section').first().height() * 0.2, // Vertical offset in px before element is first unpinned.
			//offset: 75, // Vertical offset in px before element is first unpinned.
			tolerance: { // Or you can specify tolerance individually for up / down scroll.
				up: 0,
				down: 0
			},

			classes: {
				initial: 'is-ready', // Element is initialised.
				top: 'is-top', // When above offset.
				notTop: 'is-not-top', // When below offset.
				bottom: 'is-bottom', // When at bottom of scoll area.
				notBottom: 'is-not-bottom', // when not at bottom of scroll area.
				pinned: 'is-scrolling-up', // When scrolling up.
				unpinned: 'is-scrolling-down' // When scrolling down.
			},

			onTop: function(element) {

				//console.log('At top of page (above offset if defined).');

			},

			onNotTop: function(element) {

				//console.log('Away from top of page (below offser if defined).');
				
			},

			onBottom: function(element) {

				//console.log('At bottom of page.');

			},

			onNotBottom: function(element) {

				//console.log('Moving away from bottom of page.');

			},

			onPin: function(element) {

				//console.log('Scrolling up.');

			},

			onUnpin: function(element) {

				//console.log('Scrolling down.');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$element.headroom(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* PAGE VISIBILITY
/* -------------------------------------------------- */

var pageVisibility = (function pageVisibility($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('pageVisibility', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			onHidden: function(element) {

				console.log('Page is inactive.');

			},
			onVisible: 	function(element) {

				console.log('Page is active');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var pageVisibility = new Visibility(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* PRINT
/* -------------------------------------------------- */

var print = (function print($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('print', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.print');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */
		
		var options = {
			addGlobalStyles : false,
			mediaPrint: false,
			stylesheet : null,
			rejectWindow : true,
			noPrintSelector : '.no-print',
			iframe : true,
			append : null,
			prepend : '<div style="top: 1em;">Company</div>'

		};


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.on('click', function(e) {

			e.preventDefault();
			win.print(options);

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* RANDOM PROPS
/* -------------------------------------------------- */

var randomProps = (function randomProps($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('randomProps', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		positionDataAttrName: 'position',
		min: 0,
		max: 1920

	};


	/* -------------------------------------------------- */
	/* POSITION
	/* -------------------------------------------------- */

	function position() {

		$('[data-random=' + options.positionDataAttrName + ']').each(function() {

			var $self = $(this),
				x = (Math.random() * ( $self.parent().width() )).toFixed(),
				y = (Math.random() * ( $self.parent().height() * 0.5 )).toFixed();

			$self.css({'position' : 'absolute',
						'z-index' : _.random(0, 10),
						'top' : _.random(-10, 25) + 'em',
						'left' : ( _.random(options.min, $self.parent().width()) * 0.4 ) + 'px'
						//'top' : y + 'px',
						//'left' : x + 'px'
					});

		});

	}

	$win.on('resize', _.throttle(position, 250, { leading: interval.leading, trailing: interval.trailing } ));

	
	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		position: position

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* SCROLL LOCK
/* -------------------------------------------------- */

var scroll = (function scroll($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('scrollLock', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $element = document.querySelector('.is-unlocked');


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	// ENABLE / DISABLE CONTENT
	function lock() {

		console.log('Content is locked.');
		$html.addClass('is-locked');
		bodyScrollLock.disableBodyScroll($element);

	}

	function unlock() {
		
		console.log('Content is unlocked.');
		$html.removeClass('is-locked');
		bodyScrollLock.enableBodyScroll($element);
		//bodyScrollLock.clearAllBodyScrollLocks();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		lock: lock,
		unlock: unlock

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* SKEW SCROLL
/* -------------------------------------------------- */

var skewScroll = (function skewScroll($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('skewScroll', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.skew-scroll');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var currentScrollY = 0,
			documentHeight = 0,
			windowHeight = 0,
			velocity = 0,
			total = 0,
			strength = 0.75,
			amount = 2,
			ticking = false;


		/* -------------------------------------------------- */
		/* ANIMATION
		/* -------------------------------------------------- */

		Tween.set($element, {skewType: 'simple', skewY: 0, transformOrigin: 'left center'});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function addEvent() {

			Tween.ticker.addEventListener('tick', animate);

		}


		function removeEvent() {

			Tween.ticker.removeEventListener('tick', animate);
			
		}


		function animate() {

			currentScrollY += (window.pageYOffset - currentScrollY) * strength;
			var velocity = (window.pageYOffset - currentScrollY) / 20;
			total = Math.min(Math.max(velocity, -amount), amount);

			if(total < 0) {

				//console.log('Negative');
				Tween.to($element, strength * 0.25, {skewY: total + 'deg', transformOrigin: 'right center', ease: Expo.easeOut});

			} else {

				//console.log('Positive');
				Tween.to($element, strength * 0.25, {skewY: total + 'deg', transformOrigin: 'left center', ease: Expo.easeOut});

			}

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('scrollstart', _.throttle(addEvent, interval.update, { leading: interval.leading, trailing: interval.trailing } ));
		$win.on('scrollstop', _.throttle(removeEvent, interval.update, { leading: interval.leading, trailing: interval.trailing } ));

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* STACK ORDER (Z-INDEX)
/* -------------------------------------------------- */

var stackOrder = (function stackOrder($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('stackOrder', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */		

		var $element = $('.stack-order'),
			$ignore = $('.no-stack-order');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */	

		var zIndexNum = 1;


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		$element.children().not($ignore).each(function(index) {

			var $self = $(this);
			$self.css({
				'z-index' : zIndexNum + index,
				'position' : 'relative'
			});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* TOUCH FEEDBACK
/* -------------------------------------------------- */

var touchFeedback = (function touchFeedback($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('touchFeedback', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.button, .watch-touch');


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		// Apply a '.is-touch' class to show ':hover' or ':focus' and ':active' states on touch devices.
		$element.addClass('is-touch');

		$element.on('touchstart', function() {
		
			var $self = $(this);
			$self.addClass('is-active');
			//Tween.to($self, 0.5, {x: 0, y: 1, scale: 0.98, className: '+=is-active', ease: Expo.easeInOut});
		
		}).on('touchend touchleave touchmove', function() {
		
			var $self = $(this);
			$self.removeClass('is-active');
			//Tween.to($self, 0.25, {x: 0, y: 0, scale: 1, className: '-=is-active', ease: Expo.easeOut});
			
		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* WAVE
/* -------------------------------------------------- */

var waves = (function waves($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('waves', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */
		
		var	$element = $('.button'),
			$ignore = $('.no-waves');
		

		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */
			
		var options = {
			// Delay showing Waves effect on touch
			// and hide the effect if user scrolls
			// (0 to disable delay) (in milliseconds)
			duration: 600,

			// How long Waves effect duration 
			// when it's clicked (in milliseconds)
			delay: 600
		};
	   
		
		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		//buttonElement.addClass('overflow-hidden');
		Waves.attach($element.not($ignore), ['waves-float', 'waves-light']);

		/*
		Waves.attach(element.not(ignore), ['waves-block', 'waves-float', 'waves-light']);
		Waves.attach(element.not(ignore), ['waves-button', 'waves-float', 'waves-light']);
		Waves.attach(element.not(ignore), ['waves-circle', 'waves-float', 'waves-light']);
		*/

		var waves = new Waves.init(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//Waves.calm(element);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* LAZY LOAD
/* -------------------------------------------------- */

var lazyLoad = (function lazyLoad($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('lazyLoad', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $container =  '.lazy',
			$element = '.lazy-load';


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		//removeIf(production)
		function log(eventName, element) {

			console.log(Date.now(), eventName, element.getAttribute('data-src'));
			
		}
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: $element,
			threshold: 500,
			//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			load_delay: 0,
			auto_unobserve: true,
			data_bg: 'bg',
			data_sizes: 'sizes',
			data_src: 'src',
			data_srcset: 'srcset',
			class_loading: 'is-loading',
			class_loaded: 'is-loaded',
			class_error: 'on-error',
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			},

			callback_reveal: function(element) {

				//console.log('Loading: ', element);

			},

			callback_loaded: function(element) {

				//console.log('Loaded: ', element);
				$(element).closest($container).addClass('is-loaded');

			},

			callback_error: function(element) {

				//console.log('Error loading: ', element);
				$(element).closest($container).addClass('on-error');

			},

			callback_finish: function() {

				console.log('All elements loaded.');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//ioLazyLoad.update();
		//ioLazyLoad.load(element, force);
		//ioLazyLoad.loadAll();
		//ioLazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* INTERSECTION OBSERVER
/* -------------------------------------------------- */

var io = (function reveal($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('io', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $container =  '.lazy',
			$element = '.io';


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		//removeIf(production)
		function log(eventName, element) {

			console.log(Date.now(), eventName, element.getAttribute('data-src'));

		}
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($('.io'), {autoAlpha: 0});


		// HEADLINE
		function revealHeadline(element) {

			if ( $(element).find('.io-headline').length ) {

				var mySplitText = new SplitText($(element).find('.io-headline').find('.headline-title'), {position: null, reduceWhiteSpace: true, type: 'words', wordsClass: 'split-text'}), 
					$mySplitText = mySplitText.words;

				var tl = new Timeline({paused: true});
					tl


					  // TITLE
					  .staggerFromTo($mySplitText, 2, {autoAlpha: 0, className: '-=io-headline-reveal'},
													  {autoAlpha: 1, className: '+=io-headline-reveal', ease: Expo.easeOut}, 0.05, 'group-01')


					  // SUBTITLE
					  .fromTo($(element).find('.io-headline').find('.headline-subtitle'), 2, {autoAlpha: 0, y: 25},
																							 {autoAlpha: 1, y: 0, ease: Expo.easeOut}, 'group-01+=0.25')


					  // REVERT TEXT
					  .addCallback(function() { mySplitText.revert(); });


					tl.delay(0.5).play();

			}

		}


		// COPY
		function revealCopy(element) {

			if ( $(element).find('.io-copy').length ) {

				var mySplitText = new SplitText($(element).find('.io-copy'), {position: null, reduceWhiteSpace: true, type: 'lines', linesClass: 'split-text'}), 
					$mySplitText = mySplitText.lines;

				var tl = new Timeline({paused: true});
					tl

					  // DEFAULT
					  .staggerFromTo($mySplitText, 2, {autoAlpha: 0, y: 25, className: '-=io-copy-reveal'},
													  {autoAlpha: 1, y: 0, className: '+=io-copy-reveal', ease: Expo.easeOut}, 0.075, 'group-01')


					  // REVERT TEXT
					  .addCallback(function() { mySplitText.revert(); });


					tl.delay(1.25).play();

			}

			Tween.fromTo($(element).find('p').not('.io-copy'), 2, {autoAlpha: 0, y: 25, className: '-=io-copy-reveal'},
																  {autoAlpha: 1, y: 0, className: '+=io-copy-reveal', delay: 1.5, ease: Expo.easeOut});

		}


		// LIST
		function revealList(element) {

			var tl = new Timeline({paused: true, onComplete: function() { /*mySplitText.revert()*/ } });
				tl

				  // UL
				  .fromTo($(element).find('.io-list'), 1, {autoAlpha: 0},
										 				  {autoAlpha: 1, ease: Expo.easeOut}, 'group-01')

				  // LIST ITEMS
				  .staggerFromTo($(element).find('.io-list').children(), 2, {autoAlpha: 0, className: '-=io-list-reveal'},
																			{autoAlpha: 1, className: '+=io-list-reveal', ease: Expo.easeOut}, 0.075, 'group-01');


				tl.delay(0).play();

		}


		// BUTTONS
		function revealButton(element) {

			var tl = new Timeline({paused: true, onComplete: function() { /*mySplitText.revert()*/ } });
				tl.fromTo($(element).find('.io-button'), 1, {autoAlpha: 0, className: '-=io-button-reveal'},
														 	{autoAlpha: 1, className: '+=io-button-reveal', ease: Expo.easeOut});


				tl.delay(1.5).play();

		}


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.io',
			threshold: 300,
			//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: true,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');


				// CONTAINER
				Tween.to($(element), 1, {autoAlpha: 1, ease: Expo.easeOut});

				revealHeadline(element);
				revealCopy(element);
				revealList(element);
				revealButton(element);

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//lazyLoad.update();
		//lazyLoad.load(element, force);
		//lazyLoad.loadAll();
		//lazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* LIST SEPERATOR
/* -------------------------------------------------- */

var listSeparator = (function listSeperator($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('listSeparator', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.list-separator');


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function parentList(c, e) {

			var last,
				lastHeight;

			$('li', e).each(function(count, listItem) {

				var height = $(listItem).offset().top;

				if(typeof last !== 'undefined') {

					if(lastHeight < height) { // Is not last in line.

						$(last).addClass('no-separator');

					} else { // Is last in line.

						$(last).removeClass('no-separator');

					}

				}

				last = listItem;
				lastHeight = height;

			});

		}

		$element.each(parentList);

		$win.resize(function() {

			$element.each(parentList);

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* MAGNETIC
/* -------------------------------------------------- */

var magnetic = (function magnetic($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('magnetic', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = document.querySelectorAll('.magnetic');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var strength = 25;


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.forEach(function (element) {

			element.addEventListener('mousemove', magnetic);

			element.addEventListener('mouseout', function (event) {

				Tween.to(event.currentTarget, 1, {x: 0, y: 0, scale: 1.1, ease: Expo.easeOut});
			});
 
		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function magnetic(event) {

			var $self = event.currentTarget,
				bounding = $self.getBoundingClientRect();

			Tween.to($self, 0.5, {
				x: ((event.clientX - bounding.left) / $self.offsetWidth - 0.5) * strength,
				y: ((event.clientY - bounding.top) / $self.offsetHeight - 0.5) * strength,
				scale: 1,
				ease: Expo.easeOut});

		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* CURSOR
/* -------------------------------------------------- */

var cursor = (function cursor($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('cursor', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		// Cursor components
		var $cursor = $('.cursor'),
			$cursorCore = $('.cursor-core'),
			$cursorTrail = $('.cursor-trail'),
			$cursorCircular = $('.cursor-circular');


		// Interactive elements
		var $cursorPrevious = $('.previous'),
			$cursorNext = $('.next'),
			$cursorElements = $('a, button, .button, .cursor-hover, .dot'),
			$cursorIgnore = $('.no-cursor');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var active = false;


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($cursorCircular.find('.cursor-circular-wavelength'), {autoAlpha: 0, rotation: '0', svgOrigin:'40 40'});


		// TIMELINE
		var tlCursorCircularWavelength = new Timeline({paused: true});
			tlCursorCircularWavelength.to([$cursorCircular.find('.cursor-circular-foreground'),$cursorCircular.find('.cursor-circular-background')], 0.1, {autoAlpha: 0, ease: Expo.easeOut}, 'group-01')
									  .to($cursorCircular.find('.cursor-circular-wavelength'), 0.1, {autoAlpha: 1, directionalRotation: '360_cw', ease: Expo.easeOut}, 'group-01')
									  .to($cursorCircular.find('.cursor-circular-wavelength'), 0.1, {autoAlpha: 0, directionalRotation: '0_cw', ease: Expo.easeOut}, 'group-02')
									  .to([$cursorCircular.find('.cursor-circular-foreground'),$cursorCircular.find('.cursor-circular-background')], 0.1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-02');

		function drawSVG() {
			
			//console.log(_.random(180, 360));
			Tween.to($cursorCircular.find('.cursor-circular-foreground'), 0.75, {drawSVG: '100%', ease: Expo.easeInOut, delay: 0.25, overwrite: 'true'});
		}

		function resetSVG() {
			Tween.to($cursorCircular.find('.cursor-circular-foreground'), 0.75, {drawSVG: (window.scrollY / ( $doc.height() - $win.height() ) * 100) + '%', ease: Expo.easeInOut, delay: 0, overwrite: 'true'});
		}


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		// DEFAULT
		$html.on('mousedown', function() {
			
			$cursor.addClass('is-down');

			tlCursorCircularWavelength.restart();
			//drawSVG();

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('is-down');

			//tlCursorCircularWavelength.reverse();
			//resetSVG();

		});


		// ELEMENT INERACTION (HOVER, CLICK, MOUSEENTER, MOUSEDOWN, MOUSELEAVE, ETC...)
		$cursorElements.not($cursorIgnore).on('mouseenter', function() {

			$cursor.addClass('is-hovering');
			drawSVG();

		}).on('mousedown', function() {
			
			$cursor.addClass('is-down');
			tlCursorCircularWavelength.play(0);

		}).on('mouseleave', function() {

			$cursor.removeClass('is-hovering is-down');
			resetSVG();

		});


		// PREVIOUS / NEXT
		$cursorPrevious.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-previous is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-previous is-hovering');

			});

		});

		$cursorNext.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-next is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-next is-hovering');

			});

		});


		// IGNORE CURSOR INTERACTION
		$cursorIgnore.on('mouseover', function() {

			$cursor.addClass('no-cursor');

		}).on('mousedown', function() {
			
			$cursor.addClass('no-cursor');

		}).on('mouseout mouseup', function() {

			$cursor.removeClass('no-cursor');

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('no-cursor');

		});


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('mousemove', _.throttle( function(e) { 

			var mouseX = e.clientX,
				mouseY = e.clientY;

			function mousemove() {

				if (!active) {

					//cursor.style.opacity = 1;
					Tween.set(cursor, {autoAlpha: 1});
					active = true;

				}

				//cursor.css({top: mouseY, left: mouseX});
				Tween.to($cursor, 0.25, { css: {top: mouseY, left: mouseX} });

				if(!isEdge || !isExplorer) {
					Tween.to($cursorCircular, 0.08, { css: {top: e.clientY, left: e.clientX} });
				}

			}

			raf(mousemove);

		}, 0, { leading: interval.leading, trailing: interval.trailing } ));


		$win.on('mouseover', function(e) {

			//Tween.to($cursor, 0.5, {opacity: 0, ease: Expo.easeInOut});
			active = false;

		}).on('mouseenter', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 1, ease: Expo.easeInOut});

		}).on('mouseleave', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 0, ease: Expo.easeInOut});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* NAV PANEL
/* -------------------------------------------------- */

var navPanel = (function navPanel($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	console.log('navPanel ' + ' 1.0 ' + ' Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* MAIN
	/* -------------------------------------------------- */

	function init() {

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $navbar = $('.navbar, .menubar-logo, .menubar-toggle'),
			$menuToggle = $('.menu-toggle'),
			$navPanel = $('.nav-panel'),
			$menu = $('.nav-panel-menu'),
			$social = $('.nav-panel-social'),

			$overlayFade = $('.nav-panel-fade'),
			$particleGrid = $('.nav-panel-particle-grid'),
			$grayscaleDisplacement = $('.grayscale-displacement'),
			$background = $('.nav-panel-background');


		/*
		$slider.find('li').find('.lazy').ripples({
			dropRadius: 20,
			perturbance: 0.03,
			resolution: 256,
			interactive: true,
			//crossOrigin: ''
		});
		*/


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var state = 'is-closed';


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($menu.children(), {autoAlpha: 0, x: -25});
		Tween.set($social.children(), {autoAlpha: 0, y: 25});

		Tween.set($overlayFade, {autoAlpha: 0});
		Tween.set($particleGrid, {autoAlpha: 0, scale: 1.12});
		Tween.set($grayscaleDisplacement, {autoAlpha: 0});
		Tween.set($background.children(), {scaleX: 0});


		// TIMELINE
		var tl = new Timeline({paused: true, onStart: isOpening, onReverseComplete: isClosed});
			tl.staggerTo($background.children(), 1, {scaleX: 1, ease: Expo.easeInOut}, 0.2)

			  .staggerTo($menu.children(), 1, {autoAlpha: 1, x: 0, className: '+=nav-panel-menu-reveal', ease: Expo.easeOut}, 0.075, 'group-01-=0.25')
			  .staggerTo($social.children(), 1, {autoAlpha: 1, y: 0, ease: Expo.easeOut}, 0.05, 'group-01-=0.25')

			  .to($overlayFade, 1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-01-=0.25')

			  .to($particleGrid, 1, {autoAlpha: 1, scale: 1, ease: Back.easeOut}, 'group-01-=0.25')

			  .to($grayscaleDisplacement, 1, {autoAlpha: 1, ease: Expo.easeOut}, 'group-01+=0.25')

			  .addCallback(isOpen);


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		// TOGGLE
		$menuToggle.on('click touchstart touchmove', function(e) {

			e.preventDefault();
			controller();

		});


		// LINKS
		$menu.find('li').find('a').on('mouseover', function() {

			//Tween.to($grayscaleDisplacement.children(), 1, {autoAlpha: 0.25, ease: Expo.easeOut});

		}).on('mouseout mouseleave', function() {

			//Tween.to($grayscaleDisplacement.children(), 1, {autoAlpha: 1, ease: Expo.easeOut});

		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		// CONTROLLER
		function controller() {

			if ( state === 'is-opening' || state === 'is-open' ) {

				tl.reverse().timeScale(1.75);

			} else if ( state === 'is-closing' || state === 'is-closed' ) {

				tl.play().timeScale(1.5);

			}

			if ( tl.reversed() ) {

				isClosing();

			}

		}


		// EVENTS
		function isOpening() {

			$navbar.addClass('is-open');
			$navPanel.addClass('is-opening');
			$navPanel.scrollTop(0);
			scroll.lock();

			state = 'is-opening';
			console.log('Nav Panel ' + state);

			quotes.init.playPause();

		}


		function isOpen() {

			$navPanel.addClass('is-open');
			$$('.is-animating').find('*').addClass('animate-pause');

			state = 'is-open';
			console.log('Nav Panel ' + state);

			listSeparator.init();

		}


		function isClosing() {

			$$('.is-animating').find('*').removeClass('animate-pause');

			state = 'is-closing';
			console.log('Nav Panel ' + state);
			
		}


		function isClosed() {

			$navbar.removeClass('is-open');
			$navPanel.removeClass('is-opening is-open');
			scroll.unlock();

			state = 'is-closed';
			console.log('Nav Panel ' + state);

			quotes.init.playPause();

		}


		/* -------------------------------------------------- */
		/* SWUP API
		/* -------------------------------------------------- */

		document.addEventListener('swup:animationOutStart', function() {

			if( $navPanel.hasClass('is-open') ) {

				controller();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init
		//controller: controller,
		//$navPanel: $navPanel

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* CARD CAROUSEL
/* -------------------------------------------------- */

var cardCarousel = (function cardCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('cardCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element,
			$carousel = $($element),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {	
			cellSelector: $cell,
			initialIndex: 0,
			accessibility: false,
			setGallerySize: true,
			resize: true,

			cellAlign: 'left',
			contain: true,
			percentPosition: true,
			rightToLeft: false,

			draggable: '>1',
			freeScroll: false,
			wrapAround: false,
			groupCells: false,
			autoPlay: false,
			timer: 10,
			pauseAutoPlayOnHover: true,
			fullscreen: false,
			fade: false,
			adaptiveHeight: false,
			watchCSS: false,
			//asNavFor: $carousel,
			hash: null,
			dragThreshold: 10,
			selectedAttraction: 0.05,
			friction: 0.75,
			freeScrollFriction: 0.025,

			prevNextButtons: true,
			pageDots: false,
			//arrowShape: null,

			imagesLoaded: true,
			lazyLoad: 1,
			bgLazyLoad: 1
		};


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		function rate(element) {

			var rating = $(element).data('rating');
			console.log('Rating: ' + (rating + 1) + '-star');

			Tween.set($(element).find('li'), {autoAlpha: 0, x: 0, y: -0, scale: 0, rotation: '32deg', transformOrigin: 'center center'});

			var tl = new Timeline({paused: true});
				tl.staggerTo($('.rating').children(), 1, {autoAlpha: 0, x: 0, y: 0, scale: 0, rotation: '-32deg', transformOrigin: 'center center'}, -0.02, 'reset')
				  .to($(element).find('li:nth-of-type(1)'), 1, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: '0deg', ease: Expo.easeInOut}, '1-star')
				  .to($(element).find('li:nth-of-type(2)'), 1, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: '0deg', ease: Expo.easeInOut}, '2-star')
				  .to($(element).find('li:nth-of-type(3)'), 1, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: '0deg', ease: Expo.easeInOut}, '3-star')
				  .to($(element).find('li:nth-of-type(4)'), 1, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: '0deg', ease: Expo.easeInOut}, '4-star')
				  .to($(element).find('li:nth-of-type(5)'), 0.5, {autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: '0deg', ease: Expo.easeInOut}, '5-star')
				  .add('6-star');

				tl.tweenFromTo( 'reset', (rating + 1) + '-star' ).duration(1);

		}
		*/


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity is ready.');
				//rate( $self.find('.is-selected').find('.rating') );

			});

			$self.flickity(options);
			//Tween.delayedCall( 1, function() { $self.flickity('resize'); } );


			/* -------------------------------------------------- */
			/* TRANSITIONS
			/* -------------------------------------------------- */

			/*
			var docStyle = document.documentElement.style,
				prop = typeof docStyle.transform === 'string' ? 'transform' : 'WebkitTransform';
			
			$self.on('scroll.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;
					flkty.slides.forEach(function(slide, i) {

				var $element = $self.find($cell).find('> div')[i],
					x = (slide.target + flkty.x) * - 1 / 2;
					$element.style[prop] = 'translateX(' + x + 'px)';
				});

			});
			*/


			//var docStyle = document.documentElement.style,
				//prop = typeof docStyle.filter === 'string' ? 'filter' : 'WebkitFilter';
			
			/*
			$self.on('scroll.flickity', function(event, progress) {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				flkty.slides.forEach(function(slide, i) {

					var $element = $self.find($cell)[i],
						//x = (slide.target / flkty.x) * 1;

						total = Math.abs(slide.target / flkty.x) * 0.5;

						//Tween.set($element, {webkitFilter: 'blur(' + total + 'px)'﻿});	

						//$element.style[prop] = 'filter:blur(' + x + 'px)';
						//console.log(total);

				});


				var total = Math.round(progress * 100) / 100;

				var tl = new Timeline({paused: true});
					tl.to($self.find('.test').find('li:nth-of-type(1)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(2)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(3)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(4)'), 1, {autoAlpha: 0, ease: Expo.easeInOut})
					  .to($self.find('.test').find('li:nth-of-type(5)'), 1, {autoAlpha: 0, ease: Expo.easeInOut});

				console.log(total);


				tl.progress(total);

				console.log('Progress: '+ tl.progress());



			});
			*/


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			$self.on('settle.flickity', function() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				//$self.find('.is-selected').addClass('is-settled');
				//rate( $self.find('.is-selected').find('.rating') );
				

				if ( flkty.selectedIndex === 0 ) {

					//console.log('First cell.');

				} else if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					//console.log('Last cell.');

				}

			}).on('change.flickity', function(event, cellIndex) {

				//console.log( 'Sliding to cell ' + (cellIndex + 1) + '.' );
				//$self.find($cell).removeClass('is-active');

				//Tween.staggerTo($('.rating').children(), 0.25, {autoAlpha: 0, x: 0, y: 0, scale: 0, rotation: '-32deg', transformOrigin: 'center center'}, -0.02);

				// < less than / > greater than
				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement;

				if ( flkty.selectedIndex === 0 ) { 

					console.log('First cell.');
					$self.find('.previous').addClass('is-disabled');

				}

				if ( flkty.selectedIndex > 0 ) { 

					console.log('Free');
					$self.find('.previous').removeClass('is-disabled');
					$self.find('.next').removeClass('is-disabled');

				}

				if ( flkty.selectedIndex === flkty.cells.length - 1 ) {

					console.log('Last cell.');
					$self.find('.next').addClass('is-disabled');

				}

			}).on('dragStart.flickity', function() {


			}).on('dragEnd.flickity', function() {


			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				console.log(event.originalEvent.type, img.src);

			});


			/* -------------------------------------------------- */
			/* STATUS
			/* -------------------------------------------------- */

			var updateStatus = function updateStatus() {

				var flkty = $self.data('flickity'),
					$element = flkty.selectedElement,
					cellNumber = flkty.selectedIndex + 1;

				console.log( cellNumber + ' of ' + flkty.slides.length);

				//$carousel.find('.status').html( '<span class='current'>' + cellNumber + '</span>' + '/' + '<span class='total'>' + $element.data('flickity').slides.length + '</span>' );

			};

			updateStatus();
			$self.on('select.flickity', updateStatus);


			/* -------------------------------------------------- */
			/* OBSERVER
			/* -------------------------------------------------- */

			var lazyLoad = new LazyLoad({
				container: document,
				elements_selector: $element,
				threshold: 0,
				//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
				//load_delay: 0,
				auto_unobserve: false,
				use_native: false,

				callback_enter: function(element) {

					//console.log('ENTERING');
					$(element).addClass('in-view');

					if ( $(element).find($cell).find('img').hasClass('is-loaded') ) {

						//$carousel.controller();

					}

				},

				callback_exit: function(element) {

					//console.log('EXITING');
					$(element).removeClass('in-view');
					//$carousel.controller();

				}

			});

		});


		/* -------------------------------------------------- */
		/* CUSTOM CONTROLS
		/* -------------------------------------------------- */

		$('.flickity-custom-prev').on('mousedown touchstart', function() {
			
			$carousel.flickity( 'previous', false, false );

		});
		
		$('.flickity-custom-next').on('mousedown touchstart', function() {
			
			$carousel.flickity( 'next', false, false );

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* COMMON CAROUSEL
/* -------------------------------------------------- */

var commonCarousel = (function commonCarousel($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('commonCarousel', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element,
			$carousel = $($element),
			$cell = '.carousel-cell';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			adaptiveHeight: false
		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$carousel.each(function() {

			var $self = $(this);

			// READY
			$self.on('ready.flickity', function() {

				console.log('Flickity is ready.');

			});

			//$self.flickity(options);
			$self.addClass('is-ready');
			Tween.delayedCall( 1, function() { $self.flickity('resize'); } );
			$self.find('.carousel-lazy-load.is-selected').addClass('is-loaded');


			/* -------------------------------------------------- */
			/* LISTENERS
			/* -------------------------------------------------- */

			// SETTLE
			$self.on('change.flickity', function() {

				var flkty = $self.data('flickity'),
					element = flkty.selectedElement;

				if (flkty.selectedIndex === 0) {

					//console.log('First cell.');

				}

				if (flkty.selectedIndex === flkty.cells.length - 1) {

					//console.log('Last cell.');

				}

			});


			/* -------------------------------------------------- */
			/* LAZY LOAD
			/* -------------------------------------------------- */

			$self.on('lazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

				$self.on('scroll.flickity', function() {

					$(img).addClass('is-loaded');

					if( $(img).hasClass('is-loaded') ) {

						//console.log('Flickity img loaded');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('is-loaded');

					}

					if( $(img).hasClass('flickity-lazyerror') ) {

						//console.log('Flickity img error');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('flickity-lazyerror');

					}

				});

				Tween.delayedCall(1, function() { $self.flickity('resize'); } );

			}).on('bgLazyLoad.flickity', function(event, cellElement) {

				var img = event.originalEvent.target;
				//console.log(event.originalEvent.type, img.src);

				$self.on('scroll.flickity', function() {

					$(img).addClass('is-loaded');

					if( $(img).hasClass('is-loaded') ) {

						//console.log('Flickity img loaded');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('is-loaded');

					}

					if( $(img).hasClass('flickity-lazyerror') ) {

						//console.log('Flickity img error');
						$(img).closest('.carousel-lazy-load.is-selected').addClass('flickity-lazyerror');

					}

				});

				Tween.delayedCall(1, function() { $self.flickity('resize'); } );

			});

		});

	}


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* HERO
/* -------------------------------------------------- */

var hero = (function hero($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('hero', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.hero');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */



		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		function textRotator($element, text) {

			$($element).html(text);

		}
		*/

		if ( $('.quotes').length ) {

			quotes.init('.quote');
			
		}


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		var tl = new Timeline({paused: true});
			tl
			  .staggerFromTo($element.find('ul').children(), 1, {autoAlpha: 0, y: 25},
																{autoAlpha: 1, y: 0, ease: Expo.easeInOut}, 0.05);


			tl.delay(1).play();



		//Tween.set($element.children(), {autoAlpha: 0});

		// HEADING
		/*
		if( $element.find('.hero-copy').find('h1').length ) {


			textRotator($element.find('.hero-copy').find('h1'), "Hi, I'm<br>Sam");


			var mySplitText = new SplitText($element.find('.hero-copy').find('h1'), {type: 'words', wordsClass: 'text-whiteout', reduceWhiteSpace: true}), 
				$mySplitText = mySplitText.words;


			var tl = new Timeline({paused: false, delay: 2, onComplete: restoreText});
				tl
				  .staggerTo($mySplitText, 1, {className: '+=text-whiteout-reveal', ease: Expo.easeOut}, 0.05)
				  .staggerTo($mySplitText, 1, {className: '-=text-whiteout-reveal', delay: 3, ease: Expo.easeOut}, -0.05)
				  
				  .staggerTo($mySplitText, 1, {className: '+=text-whiteout-reveal', delay: 1, onStart: textRotator, onStartParams: [$element.find('.hero-copy').find('h1'), "Test"], ease: Expo.easeOut}, 0.05);



					//.staggerFromTo($mySplitText, 1, {autoAlpha: 0, y: $element.find('.hero-copy').height() * 0.2, scaleY: 0.75, transformOrigin: 'bottom center' },
												 // {autoAlpha: 1, y: 0, scaleY: 1, ease: Expo.easeOut}, 0.05, '-=0');

		}
		*/

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* LEGAL
/* -------------------------------------------------- */

var legal = (function legal($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('legal', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $element = $('.legal');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var	cookiePrivacyPolicy = 'privacy-policy',
		valuePrivacyPolicy = 'accepted',
		cookieExpireDate = 30,
		cookieSecure = false;


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function checkCookie() {
		
		if ( Cookies(cookiePrivacyPolicy) ) {	

			console.log( Cookies.get(cookiePrivacyPolicy) + ' cookie found! Visitor has already accepted Privacy and Cookie Policy.');
			$element.addClass('hide');

		} else {

			console.log('First visit. User has not accepted Privacy / Cookie Policy yet.');
			//Tween.to($element, 0.5, {display: 'block', opacity: 1, y: 0, ease: Power4.easeOut});

		}

	}


	function createCookie() {

		console.log('Cookie created for visitor.');
		Cookies.set(cookiePrivacyPolicy, valuePrivacyPolicy, { expires: cookieExpireDate, secure: cookieSecure });

	}


	/* -------------------------------------------------- */
	/* LISTENERS
	/* -------------------------------------------------- */

	$element.find('.munch-munch').on('click', function(e) {

		e.preventDefault();

		var $self = $(this);
		Tween.to($self.parent(), 0.5, {display: 'none', opacity: 0, scale: 0.9, y: $self.parent().height() * 0.2, ease: Back.easeInOut, onComplete: createCookie});

	});


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	checkCookie();


	/* -------------------------------------------------- */
	/* HELPERS
	/* -------------------------------------------------- */

	/*
	if ( window.location.hash === '#delete' ) {
		
		console.log( Cookie.get(cookiePrivacyPolilcy) + ' deleted.');
		Cookies.remove(cookiePrivacyPolicy);
		
	}
	*/


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		//init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* QUOTES
/* -------------------------------------------------- */

var quotes = (function quotes($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('quotes', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $($element);


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var duration = 1,
			stagger = 0.05,
			pause = 5, // Quote static time.
			overlap = 0.5, // Next animation start overlap.
			positionParam = 0,
			master = new Timeline({}),
			timelines = [];


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function playPause() {

			if ( timelines[index].paused() ) {

				//console.log('Playing...');
				timelines[index].delay(0).play(0);

			} else {

				//console.log('Pausing...');
				timelines[index].pause(0);

			}

		}
		init.playPause = playPause;



		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		//Tween.set($element, {autoAlpha: 0});


		// MASTER
		//for (var k = 0; k < $element.length; k++) {
		$element.each(function(index) {

			var $self = $(this);


			// SPLITTEXT
			var mySplitText = new SplitText($self, {position: null, reduceWhiteSpace: true, type: 'words', wordsClass: 'split-text'}), 
				$mySplitText = mySplitText.words;


				Tween.set($mySplitText, {autoAlpha: 0, y: 10, className: '-=split-text-reveal'});


			// TIMELINE
			var tl = new Timeline({paused: true});
				tl.staggerTo($mySplitText, 0.25, {autoAlpha: 0, y: 10, className: '-=split-text-reveal', ease: Expo.easeOut}, 0)
				  .staggerTo($mySplitText, duration, {autoAlpha: 1, y: 0, className: '+=split-text-reveal', ease: Expo.easeOut}, stagger)
				  .staggerTo($mySplitText, duration, {autoAlpha: 0, y: 10, className: '-=split-text-reveal', ease: Expo.easeInOut}, stagger, '+=' + pause)

				  //call a function to trigger the next timeline	 
				  .add(nextTimeline, '-=' + overlap);


			timelines.push(tl);

		});
		timelines[0].play();


		var index = 0;
		function nextTimeline() {

			index++;

			if(index >= timelines.length) {

				index = 0;

			}

			//console.log(index)
			timelines[index].restart();

		}
		master.timeScale(0.5);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init,

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* SCROLL PROGRESS
/* -------------------------------------------------- */

var scrollProgress = (function scrollProgress($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('scrollProgress', '1.0', 'Aries Datuin');
		//endRemoveIf(production)
	

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $scrollProgress = $('.scroll-progress'),
			$scrollProgressCursor = $('.cursor').find('.cursor-circular');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var currentScrollY = 0,
			documentHeight = 0,
			windowHeight = 0,
			total = 0,
			ticking = false;


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($scrollProgressCursor.find('.cursor-circular-foreground'), {drawSVG: '0%'});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function animate() {

			//console.log(total + '%');
			Tween.staggerTo($scrollProgress.find('.scroll-progress-bar').find('span'), 2, {scaleY: (total * 1), ease: Expo.easeOut}, 0.05);
			Tween.to($scrollProgressCursor.find('.cursor-circular-foreground'), 1, {drawSVG: (total * 100) + '%', ease: Expo.easeOut});
			//item[0].style.width = currentScrollY + 100 + 'px';
			ticking = false;

		}


		function update() {

			currentScrollY = window.scrollY; // No IE8.
			documentHeight = $doc.height();
			windowHeight = $win.height();
			total = currentScrollY / (documentHeight - windowHeight);
			request();

		}


		function request() {

			if(!ticking) {

				raf(animate);

			}

			ticking = true;

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('scroll', _.throttle(update, interval.update, { leading: interval.leading, trailing: interval.trailing } ));

		update();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* ICON
/* -------------------------------------------------- */

var icon = (function icon($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('icon', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $iconContainer = $('.icon'),
			$iconLotus = $('.icon-lotus'),
			$iconMuscle = $('.icon-muscle'),
			$iconClipboard = $('.icon-clipboard');


		/* -------------------------------------------------- */
		/* ANIMATIONS: CORE
		/* -------------------------------------------------- */

		var tlIconLotus = new Timeline({paused: true, onReverseComplete: controller});
			tlIconLotus.staggerFrom($iconLotus.children(), 1, {scale: 0, autoAlpha: 0, transformOrigin: 'bottom center', ease: Expo.easeInOut}, 0.05);


		var tlIconMuscle = new Timeline({paused: true, onReverseComplete: controller});
			tlIconMuscle.staggerFrom($iconMuscle.children().children(), 1, {autoAlpha: 0, scaleY: 0.9, transformOrigin: 'bottom center', ease: Expo.easeInOut}, 0.05);


		var tlIconClipboard = new Timeline({paused: true, onReverseComplete: controller});
			tlIconClipboard.staggerFrom($iconClipboard.find('.body').children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: 'center center', ease: Expo.easeInOut}, 0.02, 'group-01')
						   .fromTo($iconClipboard.find('.checkmark'), 0.5, {drawSVG: '0%'},
																		   {drawSVG: '100%', delay: 1, ease: Expo.easeOut}, 'group-01-=0.5')
						   .staggerFrom($iconClipboard.find('.checkbox').children(), 0.75, {autoAlpha: 0, scale: 0, transformOrigin: 'center center', ease: Expo.easeInOut}, -0.02, 'group-01')
						   .staggerFrom($iconClipboard.find('.lines').children(), 0.75, {autoAlpha: 0, scaleX: 0, transformOrigin: 'left center', ease: Expo.easeInOut}, 0.02, 'group-01');


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		$iconContainer.each(function(i, e) {

			var $self = $(this);
			//e.hover = tl;

			$self.hover(function() {

				console.log('Mouseover');


			}, function() {

				console.log('Mouseout');

			});

		});
		*/


		function controller() {

			if( $iconClipboard.hasClass('in-view') ) {

				/*
				if(tlIconClipboard.progress() === 1) {

					tlIconClipboard.restart();

				}
				*/

				if( tlIconClipboard.reversed() ) {

					tlIconClipboard.play();

				} else {

					tlIconClipboard.play();

				}

			}

			if( $iconMuscle.hasClass('in-view') ) {

				if( tlIconMuscle.reversed() ) {

					tlIconMuscle.play();

				} else {

					tlIconMuscle.play();

				}

			}

			if( $iconLotus.hasClass('in-view') ) {

				if( tlIconLotus.reversed() ) {

					tlIconLotus.play();

				} else {

					tlIconLotus.play();

				}

			}


		}


		function resetTimeline() {

			tlIconClipboard.reverse();
			tlIconMuscle.reverse();
			tlIconLotus.reverse();

		}


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		//$iconContainer.on('mouseover touchstart', function(){ controller(); } );
		$iconClipboard.on('mouseover touchstart', function() { tlIconClipboard.reverse(); } );
		$iconMuscle.on('mouseover touchstart', function() { tlIconMuscle.reverse(); } );
		$iconLotus.on('mouseover touchstart', function() { tlIconLotus.reverse(); } );


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.icon',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');
				controller();

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');
				resetTimeline();

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init
		//init.content: content,
		//init.websites: websites

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* PAGES
/* -------------------------------------------------- */

var pages = (function pages($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('pages', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	function init() {

		// > = greatar than
		// < = less than
		

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */
		
		var page = $('.page').data('page');


		/* -------------------------------------------------- */
		/* HOME
		/* -------------------------------------------------- */

		if ( page === 'index' ) {
			
			console.log('Home Page');
			
		}
	    
		
	    /* -------------------------------------------------- */
		/* PRIVACY AND TERMS OF USE
		/* -------------------------------------------------- */

		else if ( page === 'legal' ) {

			console.log('Privacy and Terms of Use Page');
			
		}
	    
		
		/* -------------------------------------------------- */
		/* ERROR
		/* -------------------------------------------------- */

		else {

			console.log('Error Page');
			
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* APP
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('modules', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CORE (RUN ONCE ONLY)
	/* -------------------------------------------------- */

	function core() {

		$doc.foundation();
		detectBrowser();
		detectDevice();
		detectScreen();
		//musicPlayer.init();
		navPanel.init();
		scroll.lock();
		scrollProgress.init();

		Tween.delayedCall(interval.delay, listSeparator.init);


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		//if(!isTouch) {
			//grayscaleDisplacement.init();
		//}

		//if(!isEdge && !isSafari) {
			//filmGrain.init();
		//}

	}


	/* -------------------------------------------------- */
	/* MODULES
	/* -------------------------------------------------- */

	function components() {

		/* -------------------------------------------------- */
		/* UTILITIES
		/* -------------------------------------------------- */

		detectTouch();
		dataAttr.backgroundColor();
		dataAttr.color();
		//dataAttr.image();
		dataAttr.page();
		//distortion.init();
		//glitch.init();
		headroom.init();
		io.init();
		lazyLoad.init();
		pageVisibility.init();
		print.init();
		randomProps.position();
		//skewScroll.init();
		//smoothScroll.init('main');
		//stackOrder.init();
		//tilt.init();
		//water.init();

		Tween.delayedCall(interval.delay, onScroll.init);


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		//component.init();

		hero.init();
		//icon.init();

		commonCarousel.init('.carousel');
		cardCarousel.init('.testimonials-carousel');

		//Tween.delayedCall(interval.delay, parallax.init);

		//pages.init();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		if(!isTouch) {
			//cursor.init();
			magnetic.init();
		}


		if(isTouch) {
			touchFeedback.init();
			waves.init();
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		core: core,
		components: components

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* PAGE MANAGER
/* -------------------------------------------------- */

var pageManager = (function pageManager($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('pageManager', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $pageTransition = $('.page-transition');


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */

	var state = 'is-loading',
		rootLink = '/';


	/* -------------------------------------------------- */
	/* ANIMATIONS
	/* -------------------------------------------------- */

	// SET
	//Tween.set($logo, {autoAlpha: 0, y: 50});


	// TIMELINE



	/* -------------------------------------------------- *	/
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function checkLink() {

		/*
		console.log(url.href);		// https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
		console.log(url.protocol);	// https:
		console.log(url.host);		// developer.mozilla.org:8080
		console.log(url.hostname);	// developer.mozilla.org
		console.log(url.port);		// 8080
		console.log(url.pathname);	// /en-US/search
		console.log(url.search);	// ?q=URL
		console.log(url.hash);		// #search-results-close-container
		console.log(url.origin);	// https://developer.mozilla.org:8080
		*/

		var currentOrigin = location.origin,
			//currentPath = location.pathname,
			currentPath = location.pathname.split('/').pop(),
			currentFullPath = location.href;


		console.log('Currently viewing: ' + currentPath);


		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').removeClass('is-active');
		$('a[href^="' + rootLink + '"]:not(.button):not([data-no-swup])').parent().removeClass('is-active');


		if(location.pathname === '' + rootLink + '') { // Check if url is at root location.

			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href="' + rootLink + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		} else {

			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').addClass('is-active');
			$('a[href^="' + rootLink + '' + currentPath + '"]:not(.button):not([data-no-swup]').parent().addClass('is-active');

		}

	}


	function isLoading() {

		console.log('Content is loading...');
		$pageTransition.removeClass('is-loaded');
		scroll.lock();

	}


	function isLoaded() {

		console.log('Content is loaded successfully.');
		$pageTransition.addClass('is-loaded');
		scroll.unlock();
		checkLink();

	}


	function intro() {
		
		var tl = new Timeline({paused: false});
			tl.to($pageTransition, 1, {autoAlpha: 0, ease: Expo.easeInOut})
			  .addCallback(isLoaded);
	
	}


	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var pageManagerOptions = {
		LINK_SELECTOR: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
		FORM_SELECTOR: 'form[data-swup-form]',
		elements: ['.swup'],
		animationSelector: '[class*="page-transition-"]',
		pageClassPrefix: '',
		cache: false,
		preload: false,
		scroll: true,
		doScrollingRightAway: false,
		animateScroll: true,
		scrollFriction: 0.4,
		scrollAcceleration: 0.05,
		support: true,
		debugMode: false,
		animateHistoryBrowsing: true,
		plugins: [],

		skipPopStateHandling: function(event){

			if (event.state && event.state.source === 'swup') {

				return false;

			}

			return true;

		},

		animations: {

			'*': {

				in: function(next) {

					// TRANSITION OUT (PULL BACK THE CURTAINS
					var tl = new Timeline({paused: false});
						tl.to($pageTransition, 1, {autoAlpha: 1, ease: Expo.easeInOut})
						  .addCallback(next)
						  .addCallback(isLoaded);

				},

				out: function(next) {

					// TRANSITION IN (BRIEF INTERMISSION)
					var tl = new Timeline({paused: false});
						tl.addCallback(isLoading)
						  .to($pageTransition, 1, {autoAlpha: 0, ease: Expo.easeInOut})
						  .addCallback(next);

				}

			}

		}

	};


	/* -------------------------------------------------- */
	/* API
	/* -------------------------------------------------- */

		/* -------------------------------------------------- */
		/* REQUESTS / PAGE LOAD
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:pagePreloaded', function() {

			console.log('Page is preloading...');

		}).on('swup:pageLoaded', function() {

			console.log('Page successfully loaded.');

		}).on('swup:pageView', function() {

			console.log('Page ready and successfully loaded.');

		});
		*/


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:animationOutStart', function() {

			console.log('Adding is-animating class to HTML.');

		}).on('swup:animationInStart', function() {

			console.log('Removing is-animating class from HTML.');

		}).on('swup:animationOutDone', function() {

			console.log('Animation is done. Content is being replaced...');

		}).on('swup:animationInDone', function() {

			console.log('Animation is done. Content successfully replaced.');

		});
		*/


		/* -------------------------------------------------- */
		/* RENDERING
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:willReplaceContent', function() {

			console.log('Content is being replaced...');

		}).on('swup:contentReplaced', function() {

			console.log('Content successfully replaced.');

		});
		*/


		/* -------------------------------------------------- */
		/* MOUSE EVENTS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:hoverLink', function() {

			console.log('Hovering over link.');

		}).on('swup:clickLink', function() {

			console.log('Link clicked.');

		}).on('swup:submitForm', function() {

			console.log('Submit button clicked.');

		});
		*/


		/* -------------------------------------------------- */
		/* SCROLL EVENTS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:scrollStart', function() {

			console.log('Scrolling to anchor.');

		}).on('swup:scrollDone', function() {

			console.log('Scroll completed. Arrived at anchor.');

		}).on('swup:samePage', function() {

			console.log('Currently viewing the same page.');

		});
		*/


		/* -------------------------------------------------- */
		/* HISTORY
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:popState', function() {

			console.log('History state changed.');

		}).on('swup:animationSkipped', function() {

			console.log('Skipping animation.');

		});
		*/


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		/*
		$doc.on('swup:openPageInNewTab', function() {

			console.log('Page opened in new tab.');

		}).on('swup:pageRetrievedFromCache', function() {

			console.log('Page retrieved from cache.');

		}).on('swup:samePage', function() {

			console.log('Currently viewing the same page.');

		}).on('swup:samePageWithHash', function() {

			console.log('Currently viewing the same page.');

		}).on('swup:enabled', function() {

			console.log('Swup enabled.');

		}).on('swup:disabled', function() {

			console.log('Swup destroyed.');

		});
		*/


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	var swup = new Swupjs(pageManagerOptions);
	//swup.usePlugin(pluginName, {option: 'value of option'});


	docReady(function() {

		intro();
		modules.core();
		modules.components();

		if(isExplorer) {
			$html.addClass('visible');
		}

	});


	/* -------------------------------------------------- */
	/* EVENTS
	/* -------------------------------------------------- */

	document.addEventListener('swup:willReplaceContent', function() {
		
		//console.log('Destroying modules.');
		//$('.headroom').headroom('destroy');
		//$('.carousel').flickity('destroy')

	});


	document.addEventListener('swup:contentReplaced', function() {

		modules.components();

	});


	document.addEventListener('swup:pageView', function() {

		/*
		dataLayer.push({

			'event': 'VirtualPageview',
			'virtualPageURL': window.location.pathname,
			'virtualPageTitle' : document.title

		});
		*/

	});


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		//init: init

	};


}(jQuery, window, document));

//# sourceMappingURL=maps/b.cb758a1bff.app.js.map
