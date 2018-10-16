let mymap = L.map('mapid').setView([40.746054, -73.990257], 16);
mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
const flowerStores = [
	{
		location: [40.746754,-73.991971],
		name: 'Associated Cut Flower'
	},
	{
		location: [40.746054, -73.990257],
		name: "Bill's Flower Store",
		id: "billsflowermarket",
	},
	{
		location: [40.746344,-73.989944],
		name: "Superior Florist Ltd"
	}
];

for (let i = 0; i < flowerStores.length; i++) {
	let marker = L.marker(flowerStores[i].location).addTo(mymap);
	let popup = marker.bindPopup(`<b>
<a href='#${flowerStores[i].id}'>${flowerStores[i].name}</a>
	</b>`);
	if (i === 0) {
		popup.openPopup();
	}
	
}



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiaXZpbWVuYWNoZSIsImEiOiJjam5jZDhpaTcwMnFhM2twZ21nN2pjZWdqIn0.k5dIRW7wuAdsvijvD_qE6A'
}).addTo(mymap);