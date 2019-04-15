 
    var map;
    let myLatLng={lat: 53.555630, lng: 10.009230};
    let myLatLng1={lat: 53.556530, lng: 10.009230};
    function initMap() {
      map = new google.maps.Map(document.getElementById('myMap'), {
        center: myLatLng,
        zoom: 12
      });
      var marker = new google.maps.Marker({
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable:true,
        title: 'DCI Hamburg'
      });
      var marker = new google.maps.Marker({
        position: myLatLng1,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable:true,
        title: 'new marker'
      });
    }

  



