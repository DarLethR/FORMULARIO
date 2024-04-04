function iniciarMap(){
    var coord = {lat:22.269307565072545 ,lng: -97.77335140299266};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
