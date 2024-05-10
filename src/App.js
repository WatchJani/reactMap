import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


function App() {
  return (
      <Map  style={{width:"100%", height:"100vh"}}
        mapboxAccessToken="pk.eyJ1IjoiamFua283MjYyIiwiYSI6ImNsdzEzMTg1YTA2cnkyanBoeW9xaTRpZ3QifQ.7vbQ1Xgo0cBUlpxFx8LveQ"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
      </Map>
  );
}

export default App;
