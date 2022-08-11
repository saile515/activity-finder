import { useEffect, useState } from "react";

import maplibregl from "maplibre-gl";

interface Location {
	coords: { longitude: number; latitude: number };
}

export default function Map() {
	const [map, setMap] = useState<maplibregl.Map>();
	const [location, setLocation] = useState<Location>({ coords: { longitude: 18.073024, latitude: 59.321423 } });

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(setLocation);
		initMap();
	}, []);

	useEffect(() => {
		if (!map) return;
		if (location) {
			new maplibregl.Marker().setLngLat([location.coords.longitude, location.coords.latitude]).addTo(map!);
			map?.setCenter([location.coords.longitude, location.coords.latitude]);
		}
	}, [location]);

	function initMap() {
		setMap(
			new maplibregl.Map({
				container: "map",
				style: "https://api.maptiler.com/maps/e3048aa2-7f9f-4e85-a78b-985e965da0a4/style.json?key=wsrvM5VV1ml8XRwjH9Ws",
				center: [location.coords.longitude, location.coords.latitude],
				zoom: 14,
				touchPitch: false,
				maxPitch: 0,
				minZoom: 6,
				maxBounds: [
					[8.046100094223362, 54.77668140906945],
					[25.61884007037367, 69.25024932892349],
				],
			})
		);
	}

	return <div id="map" className="w-screen h-screen"></div>;
}
