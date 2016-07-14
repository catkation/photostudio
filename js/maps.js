    function initMap() {
    var styleArray = [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#1a1a1a"}]}]
    var myLatLng = {lat: -24.120, lng: 133.100};
    var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    styles: styleArray,
    zoom: 10
  });
    var image = 'img/location.png';
    var marker = new google.maps.Marker({
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: myLatLng,
    map: map,
    icon: image,
    title: 'We are here!'
  });
    marker.addListener('click', toggleBounce);
}
  function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}