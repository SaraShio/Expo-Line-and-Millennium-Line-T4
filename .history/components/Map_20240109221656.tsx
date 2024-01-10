import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const icon = L.icon({ 
    iconUrl: "images/star-fruit.png",
    iconSize: [40, 40] 
});

const Map = () => {
    return(
        <MapContainer
            style={{height: "100vh"}}
            center={[49.24966, -123.00000]} zoom={12} scrollWheelZoom={true}
        >

        <TileLayer
            attribution='&copy; <a href="https://github.com/SaraShio/Expo-Line-and-Millennium-Line-T4.git">By Sara Shiojima</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />      

        <Marker position={[49.25000, -123.00800]} icon={icon}>
            <Popup>
                BCIT
           </Popup>
        </Marker>

        </MapContainer>
    )
}

export default Map;