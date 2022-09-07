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
})


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


var body = document.body;
var menuButton = document.getElementById('menu-nav');
var menu = document.getElementById('menu');
var content = document.getElementById('content');

menuButton.addEventListener('click', function (e) {
    menu.classList.add('active');
    body.classList.add('body-height-fixed');
    e.preventDefault();
});






// var page = document.getElementById('page-transition');
// var btn = document.getElementById('close')
//
// btn.addEventListener('click', function (e) {
//     page.classList.add('page-close');
// });
