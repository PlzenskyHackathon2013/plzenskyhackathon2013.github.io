$(document).ready(function(){
	// Mapa
	var map = new L.Map('map').setView([49.96, 13.16], 9);
	L.tileLayer('http://{s}.tile.cloudmade.com/c9b3bc0a3e0847b6b1ae4448538fff92/997/256/{z}/{x}/{y}.png', { maxZoom: 18 })
		.addTo(map);
	L.marker([49.958917, 13.160076])
		.addTo(map)
		.bindPopup("<h5 class='subheader'>Plzeňský Hackathon 2013</h5><b>Zámek Nečtiny</b><br/>Nečtiny 1<br/>331 63 Hrad Nečtiny")
		.openPopup();
});
