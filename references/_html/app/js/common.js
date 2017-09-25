jQuery(document).ready(function($) {

	$("#my-menu").mmenu({
		
		extensions: 
			['theme-black', 'fx-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Beauty salon">'
		},
		offCanvas: {
			position: "right"
		}
		
	});

	// var $hamburger = $(".hamburger");
	// $hamburger.on("click", function() {
	// $hamburger.toggleClass("is-active");
	// });

	var api = $("#my-menu").data( "mmenu" );
	console.log( "This panel is now opening:" + api);
	api.bind( "Opened", function( $panel ) {
		console.log( "This panel is now opening: #" + $panel.attr( "id" ) );
	 });
	 api.bind( "openPanel:finish", function( $panel ) {
		console.log( "This panel is now opened: #" + $panel.attr( "id" ) );
	 });
	// api.bind("opened", function() {
	// 	$(".hamburger").addClass("is-active");
	// });
	// api.bind("closed", function() {
	// 	$(".hamburger").removeClass("is-active");
	// });

});
