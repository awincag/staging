var btn = document.getElementsByClassName('copied');
// var btn = document.getElementById('btn');
var message = document.getElementsByClassName('msg');
var failMessage = document.getElementById('f-msg');
var footerClick = document.getElementById('foot-btn');
var footerMessage = document.getElementById('foot-msg');

var clipboard = new Clipboard(btn);

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();

    message.classList.toggle('content-open');
    window.setTimeout(function() {
      message.classList.remove('content-open');
    }, 2500);

    footerMessage.classList.remove('f-active');
    footerClick.classList.toggle('f-active');
    window.setTimeout(function() {
      footerClick.classList.remove('f-active');
      footerMessage.classList.toggle('f-active')
    }, 2500);
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);

    failMessage.classList.toggle('content-open');
    window.setTimeout(function() {
      failMessage.classList.remove('content-open');
    }, 5500);
});




var message = document.getElementById('msg');
var failMessage = document.getElementById('f-msg');
var close = document.getElementsByClassName("closebtn");
var label = document.getElementById("email");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        message.classList.remove('active');
    }
};

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        failMessage.classList.remove('active');
    }
};


const [red, green, blue] = [1, 1, 1]
const section1 = document.querySelector('.archive')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 2.25
  const [r, g, b] = [y/red, y/green, y/blue].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
});


$(document).ready(function() {
  $(".links-item-click").each(function() {
    $(this).mouseenter(function() {
      var target = $(this).data("target");
      $('[data-target="'+target+'"]').addClass("active");
      var target = $(this).data("target");
      $('[data-target="availability"]').removeClass("active");
    });

    $(this).mouseleave(function() {
      var target = $(this).data("target");
      $('[data-target="'+target+'"]').removeClass("active");
      var target = $(this).data("target");
      $('[data-target="availability"]').addClass("active");
    });
  });
});


// var body = document.body;
// var menuButton = document.getElementById('menu-nav');
// var menu = document.getElementById('menu');
// var content = document.getElementById('content');

// menuButton.addEventListener('click', function (e) {
//    menu.classList.add('active');
//    body.classList.add('body-height-fixed');
//    e.preventDefault();
// });

var start = null;
var body = document.body;
var toggle = document.getElementById('toggle');
var carousel = document.getElementById('carousel');
var cards = document.querySelectorAll('.hero-asset-item');
var tray = document.getElementById('tray');
var indicator = document.getElementById('indicator');
var info = {
  numCards: cards.length
};

var getDimensions = function() {
  info.container_width = carousel.clientWidth;
  info.card_width = carousel.firstElementChild.clientWidth;
  info.tray_width = tray.clientWidth;
}

var moveIndicator = function(timestamp) {
  var amount_inview = info.container_width / (info.card_width * info.numCards); // < 1
  var tray_scale = info.tray_width / info.container_width;

  var indicator_width = info.tray_width * amount_inview;
  var indicator_offset = (info.scroll_left * amount_inview) * tray_scale;

  indicator.style.width = indicator_width + 'px';
  indicator.style.left = indicator_offset + 'px';

  requestAnimationFrame(moveIndicator);
}

var onScroll = function() {
  info.scroll_left = carousel.scrollLeft;
}

// var toggleView = function() {
//  if (body.style.width == '320px') {
//    body.removeAttribute('style');
//  } else {
//    body.style.width = '320px';
//  }
//  getDimensions();
//}

// initialize
getDimensions();
toggle.addEventListener('click', toggleView);
carousel.addEventListener('scroll', onScroll);
window.addEventListener('resize', getDimensions);
requestAnimationFrame(moveIndicator);






// var page = document.getElementById('page-transition');
// var btn = document.getElementById('close')
//
// btn.addEventListener('click', function (e) {
//     page.classList.add('page-close');
// });
