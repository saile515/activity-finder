import "maplibre-gl/dist/maplibre-gl.css";

import Map, { Marker, ViewState } from "react-map-gl";
import { useEffect, useState } from "react";

import maplibregl from "maplibre-gl";

interface Location {
	coords: { longitude: number; latitude: number };
}

export default function MapLayer() {
	const [location, setLocation] = useState<Location>({ coords: { longitude: 18.073024, latitude: 59.321423 } });
	const [viewState, setViewState] = useState<ViewState>({
		zoom: 14,
		longitude: location.coords.longitude,
		latitude: location.coords.latitude,
		pitch: 0,
		bearing: 0,
		padding: { top: 0, right: 0, bottom: 0, left: 0 },
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(setLocation);
	}, []);

	useEffect(() => {
		setViewState({ ...viewState, ...location.coords });
	}, [location]);

	return (
		<Map
			initialViewState={viewState}
			onMove={(event) => setViewState(event.viewState)}
			mapLib={maplibregl}
			minZoom={7}
			maxPitch={0}
			maxBounds={[
				[8.046100094223362, 54.77668140906945],
				[25.61884007037367, 69.25024932892349],
			]}
			mapStyle="https://api.maptiler.com/maps/e3048aa2-7f9f-4e85-a78b-985e965da0a4/style.json?key=wsrvM5VV1ml8XRwjH9Ws">
			<Marker longitude={location.coords.longitude} latitude={location.coords.latitude}>
				<img src="/icons/LocationMarker.svg" alt="Your Location" />
			</Marker>
		</Map>
	);
}
