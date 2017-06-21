$(function() {

//стилизация меню и анимация
var $menu = $("#my-menu").mmenu({
   	extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo2.svg" alt="salon">'
		},
		offCanvas: {
			position: 'right'
		}
});

var api = $('#my-menu').data( 'mmenu' );
api.bind('open:finish', function(){
	$('.hamburger').addClass('is-active');
});
api.bind('close:finish', function(){
	$('.hamburger').removeClass('is-active');
});
// var $icon = $("#my-icon");
// var API = $menu.data( "mmenu" );

// $icon.on( "click", function() {
//    API.open();
// });

// API.bind( "open:finish", function() {
//    setTimeout(function() {
//       $icon.addClass( "is-active" );
//    }, 100);
// });
// API.bind( "close:finish", function() {
//    setTimeout(function() {
//       $icon.removeClass( "is-active" );
//    }, 100);
// });



});

 // $(document).ready(function() {
 //      $("#my-menu").mmenu({
 //         // Options
 //      });
 //      var API = $("#my-menu").data( "mmenu" );

 //      $("#my-button").click(function() {
 //         API.close();
 //      });
 //   });