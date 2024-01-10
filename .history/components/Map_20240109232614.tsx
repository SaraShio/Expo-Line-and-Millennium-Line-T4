import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const icon = L.icon({ 
    iconUrl: "images/starfish.png",
    iconSize: [30, 30] 
});

const expoLine:[number,number][][]=[
  [ 
    [49.28596, -123.11165],
    [49.28564, -123.11982],
    [49.28323, -123.11604],
    [49.2794, -123.10931],
    [49.27315, -123.10044],
    [49.26295, -123.06849],
    [49.24837, -123.05602],
    [49.24421, -123.04592],
    [49.23837, -123.03168],
    [49.22983, -123.01279],
    [49.22585, -123.00389],
    [49.22007, -122.98842],
    [49.21213, -122.95923],
    [49.20007, -122.94902],
    [49.20137, -122.91274],
    [49.20482, -122.90613],
    [49.22455, -122.88952],
    [49.23311, -122.88278],
    [49.24769, -122.89512],
    [49.25342, -122.91815]
    ],
    [
        [49.20482, -122.90613],
        [49.20443, -122.87413],
        [49.19911, -122.85061],
        [49.18951, -122.84788],
        [49.18278, -122.84473]
    ]
]

const millenniumLine:[number,number][][]=[
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
                Waterfront
           </Popup>
        </Marker>


        <Polyline pathOptions={blueOptions} positions={expoLine}/>
        {/* <Polyline pathOptions={redOptions} positions={millenniumLine}/> */}


        </MapContainer>
    )
}

export default Map;