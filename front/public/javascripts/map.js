var map = L.map('map');

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var bicycles = JSON.parse(document.currentScript.dataset.var);
var markers = L.featureGroup();

bicycles.forEach(element => {
    var marker = L.marker([element.latitud, element.longitud]).addTo(map);
    marker.biciId = element.id;
    marker.on('click', function(e) {
        window.location.href = '/bicicletas/' + e.target.biciId + '/show';
    });
    marker.addTo(markers);
});

map.fitBounds(markers.getBounds());
