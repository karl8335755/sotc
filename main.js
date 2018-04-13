$(document).ready(function(){
	$(document).scroll(function() {
		var y = $(this).scrollTop();

		if (y > 800) {
		  $('.nav').fadeIn();
		} else {
		  $('.nav').fadeOut();
		}
	});
});

function initMap() {
	var uluru = {lat:40.7328111, lng: -74.0062288};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: uluru,
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
}