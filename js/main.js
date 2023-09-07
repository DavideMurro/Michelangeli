var	$window = $(window),
	$body = $('body'),
	$wrapper = $('#wrapper');

// Breakpoints.
	breakpoints({
		xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ '481px',   '736px'  ],
		xsmall:  [ null,      '480px'  ]
	});

// Hack: Enable IE workarounds.
	if (browser.name == 'ie')
		$body.addClass('ie');

// Touch?
	if (browser.mobile)
		$body.addClass('touch');

// Transitions supported?
	if (browser.canUse('transition')) {

		// Play initial animations on page load.
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-preload');
				}, 100);
			});

		// Prevent transitions/animations on resize.
			var resizeTimeout;

			$window.on('resize', function() {

				window.clearTimeout(resizeTimeout);

				$body.addClass('is-resizing');

				resizeTimeout = window.setTimeout(function() {
					$body.removeClass('is-resizing');
				}, 100);

			});

	}

var sound = null;
(function($) {
	sound = new Sound("sounds/03.Tchaikovsky Suite da Lo Schiaccianoci - Danza della fata confetto.mp3", 50, true);

	// Scroll back to top.
		$window.scrollTop(0);

	// Panels.
		var $panels = $('.panel');

		$panels.each(function() {

			var $this = $(this),
				$toggles = $('[href="#' + $this.attr('id') + '"]'),
				$closer = $('<div class="closer" />').appendTo($this);

			// Closer.
				$closer
					.on('click', function(event) {
						$this.trigger('---hide');
					});

			// Events.
				$this
					.on('click', function(event) {
						event.stopPropagation();
					})
					.on('---toggle', function() {

						if ($this.hasClass('active'))
							$this.triggerHandler('---hide');
						else
							$this.triggerHandler('---show');

					})
					.on('---show', function() {

						// Hide other content.
							if ($body.hasClass('content-active'))
								$panels.trigger('---hide');

						// Activate content, toggles.
							$this.addClass('active');
							$toggles.addClass('active');

						// Activate body.
							$body.addClass('content-active');

					})
					.on('---hide', function() {

						// Deactivate content, toggles.
							$this.removeClass('active');
							$toggles.removeClass('active');

						// Deactivate body.
							$body.removeClass('content-active');

					});

			// Toggles.
				$toggles
					.removeAttr('href')
					.css('cursor', 'pointer')
					.on('click', function(event) {

						event.preventDefault();
						event.stopPropagation();

						$this.trigger('---toggle');

					});

		});

		// Global events.
			$body
				.on('click', function(event) {

					if ($body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

			$window
				.on('keyup', function(event) {

					if (event.keyCode == 27
					&&	$body.hasClass('content-active')) {

						event.preventDefault();
						event.stopPropagation();

						$panels.trigger('---hide');

					}

				});

	// Header.
		var $header = $('#header');

		// Links.
			$header.find('a').each(function() {

				var $this = $(this),
					href = $this.attr('href');

				// Internal link? Skip.
					if (!href
					||	href.charAt(0) == '#')
						return;

				// Redirect on click.
					$this
						.removeAttr('href')
						.css('cursor', 'pointer')
						.on('click', function(event) {

							event.preventDefault();
							event.stopPropagation();

							window.location.href = href;

						});

			});

	// Footer.
		var $footer = $('#footer');

		// Copyright.
		// This basically just moves the copyright line to the end of the *last* sibling of its current parent
		// when the "medium" breakpoint activates, and moves it back when it deactivates.
			$footer.find('.copyright').each(function() {

				var $this = $(this),
					$parent = $this.parent(),
					$lastParent = $parent.parent().children().last();

				breakpoints.on('<=medium', function() {
					$this.appendTo($lastParent);
				});

				breakpoints.on('>medium', function() {
					$this.appendTo($parent);
				});

			});

})(jQuery);


function load_thumbs() {
// Scroll back to top.
	//$window.scrollTop(0);

// Main.
	var $main = $('#main');

	// Thumbs.
		$main.children('.thumb').each(function() {

			var	$this = $(this),
				$image = $this.find('.image'), $image_img = $image.children('img'),
				x;

			// No image? Bail.
				if ($image.length == 0)
					return;

			// Image.
			// This sets the background of the "image" <span> to the image pointed to by its child
			// <img> (which is then hidden). Gives us way more flexibility.

				// Set background.
					$image.css('background-image', 'url(' + $image_img.attr('src') + ')');

				// Set background position.
					if (x = $image_img.data('position'))
						$image.css('background-position', x);

				// Hide original img.
					$image_img.hide();

		});

	// Poptrox.
		$main.poptrox({
			baseZIndex: 20000,
			caption: function($a) {

				var s = '';

				$a.nextAll().each(function() {
					s += this.outerHTML;
				});

				return s;

			},
			fadeSpeed: 300,
			onPopupClose: function() { $body.removeClass('modal-active'); },
			onPopupOpen: function() { $body.addClass('modal-active'); },
			overlayOpacity: 0,
			popupCloserText: '',
			popupHeight: 150,
			popupLoaderText: '',
			popupSpeed: 300,
			popupWidth: 150,
			selector: '.thumb > a.image',
			usePopupCaption: true,
			usePopupCloser: true,
			usePopupDefaultStyling: false,
			usePopupForceClose: true,
			usePopupLoader: true,
			usePopupNav: true,
			windowMargin: 50
		});

		// Hack: Set margins to 0 when 'xsmall' activates.
			breakpoints.on('<=xsmall', function() {
				$main[0]._poptrox.windowMargin = 0;
			});

			breakpoints.on('>xsmall', function() {
				$main[0]._poptrox.windowMargin = 50;
			});
}

function onPopupClickCaption(event, elem) {
	event.preventDefault();
	event.stopPropagation();
	//$(elem).find(".more-info").toggleClass("fa-window-maximize");
	//$(elem).find(".more-info").toggleClass("fa-window-minimize");
	$(elem).find(".more-info").slideToggle(200);
	$(elem).find("p").slideToggle(200);
}


function Sound(source, volume, loop) {
    this.source=source;
    this.volume=volume;
    this.loop=loop;
    var son;
    this.son=son;
    this.finish=false;
    this.stop=function()
    {
        document.body.removeChild(this.son);
    }
    this.start=function()
    {
        this.son=document.createElement("embed");
        this.son.setAttribute("src",this.source);
        this.son.setAttribute("hidden","true");
        this.son.setAttribute("volume",this.volume);
        this.son.setAttribute("autostart","true");
        this.son.setAttribute("loop",this.loop);
		this.son.style.position = "absolute";
        document.body.appendChild(this.son);
    }
    this.remove=function()
    {
        document.body.removeChild(this.son);
        this.finish=true;
    }
    this.init=function(volume,loop)
    {
        this.finish=false;
        this.volume=volume;
        this.loop=loop;
    }
}
function sound_toggle(obj) {
	if($(obj).hasClass("fa-sound-on")) {
		$(obj).addClass("fa-sound-off");
		$(obj).removeClass("fa-sound-on");
		sound.stop();
	} else if($(obj).hasClass("fa-sound-off")) {
		$(obj).removeClass("fa-sound-off");
		$(obj).addClass("fa-sound-on");
		sound.start();
	}
}

function home_next_position() {
    if(($(window).height() + $(this).scrollTop()) > $(".next").offset().top) {
    	$("#home").find(".next-container").removeClass("fixed");
    	$("#header").removeClass("hidden");
    } else {
    	$("#home").find(".next-container").addClass("fixed");
    	$("#header").addClass("hidden");
    }
}
function home_next_click() {
	$('html, body').animate({ scrollTop: $('#main').offset().top }, 600);
}
function scrolltop() {
	$('html, body').animate({ scrollTop: 0 }, 600);
}

$(document).scroll(function() {
    home_next_position();
});
$(window).resize(function() {
    home_next_position();
});


function date_format(date, format) {
	var d = date,
        month = ("0" + (d.getMonth() + 1)).slice(-2),
        day = ("0" + d.getDate()).slice(-2),
        year = d.getFullYear();
        hours = ("0" + d.getHours()).slice(-2);
        minutes = ("0" + d.getMinutes()).slice(-2);
    var ret = "";

    if(format == 'dd-mm-yyyy') {
    	ret = [day, month, year].join('-');
    }
    if(format == 'dd-mm-yyyy HH:ii') {
    	ret = [day, month, year].join('-');
    	ret += " " + ([hours, minutes].join(':'));
    }
    if(format == 'HH:ii') {
    	ret = [hours, minutes].join(':');
    }

    return ret;
}


$(document).ready(function() {
    home_next_position();
	select_articles_categories();
	select_articles_list($("#articles_categories").val());
	select_markets_list();
})