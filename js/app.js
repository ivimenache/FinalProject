let mymap = L.map('mapid').setView([40.746054, -73.990257], 16);
mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
const flowerStores = [
	{
		location: [40.746754,-73.991971],
		name: 'Associated Cut Flower',
		color: 'red',
	},
	{
		location: [40.746054, -73.990257],
		name: "Bill's Flower Store",
		id: "billsflowermarket",
	},
	{
		location: [40.746344,-73.989944],
		name: "Superior Florist Ltd",
		id: "superiorflorist",
	},
	{
		location: [40.746308,-73.991744],
		name: "Carribean Cuts",
		id: "carribeancuts",
	},
	{
		location: [40.746308,-73.991744],
		name: "Foliage Gardens",
		id: "foliagegardens",
	},
	{
		location: [40.746775,-73.992810],
		name: "Dutch flower line",
		id: "dutchflowerline",
	},
	{
		location: [40.745842,-73.989550],
		name: "Major Wholesale Florist",
	},
	{
		location: [40.745793,-73.990935],
		name: "George Rallis",
	},
	{
		location: [40.745894,-73.990849],
		name: "International Garden",
	},
	{
		location: [40.746100,-73.991133],
		name: "Noble Planta",
	},
	{
		location: [40.746132,-73.991271],
		name: "Lasting Art",
	},
	{
		location: [40.746209,-73.991547],
		name: "Holiday Flower & Plant",
	},
	{
		location: [40.746308,-73.991744],
		name: "G.Page Wholesale Flowers",
	},
	{
		location: [40.746840,-73.992965],
		name: "Mahir Floral & Event Design",
	},
	{
		location: [40.746993,-73.992511],
		name: "Center of Floral Design",
	},
	{
		location: [40.747131,-73.992556],
		name: "Jamali Floral & Garden",
	},
	{
		location: [40.747182,-73.992675],
		name: "Empire Cut Flower Inc",
	},
	{
		location: [40.746458,-73.991227],
		name: "Foliage Paradise",
		id: "foliageparadise",
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

$('.slideshow').slick({
	arrows: false,
	autoplay: true,
});


