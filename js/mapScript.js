let map = L.map('NetwerkbeheerMap').setView([51.23009, 4.41616], 17)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let NetwerkbeheerMarker = L.marker([51.23009, 4.41616]).addTo(map);
NetwerkbeheerMarker.bindPopup("<b>Netwerkbeheer</b><br>Ellermanstraat 33").openPopup();