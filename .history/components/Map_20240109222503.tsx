import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const icon = L.icon({ 
    iconUrl: "images/starfish.png",
    iconSize: [40, 40] 
});

const expoLine:[number,number][]=[
    [49.25299, -123.00600],
    [49.25980, -123.01400],
    [49.25299, -123.04400],
]

const millenniumLine:[number,number][]=[
    [
        [49.25299, -123.00800],
        [49.25980, -123.03300],
        [49.25299, -123.07400], 
    ],
    [
        [49.25299, -123.00800],
        [49.25555, -123.03300],
        [49.25777, -123.07400], 
    ]
]

const blueOptions = {color: 'blue'}
const redOptions = {color: 'red'}
const fillOrangeOptions = {color: 'orange'}

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

        <Polyline pathOptions={blueOptions} positions={expoLine}/>
        <Polyline pathOptions={yellowOptions} positions={millenniumLine}/>


        </MapContainer>
    )
}

export default Map;