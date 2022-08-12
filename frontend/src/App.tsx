import "./App.css";

import MapLayer from "./components/MapLayer";
import UILayer from "./components/UILayer";

function App() {
	return (
		<div className="w-screen h-screen">
			<MapLayer />
			<UILayer />
		</div>
	);
}

export default App;
