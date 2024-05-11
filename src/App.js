import Map, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css"


//https://docs.mapbox.com/playground/geocoding/?search_text=koper&proximity=ip&access_token=pk.eyJ1IjoiamFua283MjYyIiwiYSI6ImNrenZqYjhsZzAzaHoybnM5dTAzb25zajcifQ.2wwRrsWDu3ALDhhXxq4MTA&searchType=forward

function App() {
  return (
    <Map style={{ width: "100%", height: "100vh" }}
      mapboxAccessToken="pk.eyJ1IjoiamFua283MjYyIiwiYSI6ImNsdzEzMTg1YTA2cnkyanBoeW9xaTRpZ3QifQ.7vbQ1Xgo0cBUlpxFx8LveQ"
      initialViewState={{
        longitude: 13.7304781,
        latitude: 45.5479864,
        zoom: 3.5,
      }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12" //mapbox://styles/mapbox/satellite-streets-v12 //mapbox://styles/mapbox/streets-v11
    >

      <Marker longitude={13.7304781} latitude={45.5479864} anchor="bottom" >
        <img className="circle" src="./balon.jpg"/>
      </Marker>
      {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
    </Map>
  );
}

export default App;
