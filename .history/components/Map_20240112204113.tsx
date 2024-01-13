import {MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

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

const millenniumLine:[number,number][]=[
        [49.26583, -123.07914],
        [49.26295, -123.06849],
        [49.25895, -123.04526],
        [49.26079, -123.03288],
        [49.265, -123.01342],
        [49.2664, -123.00172],
        [49.26473, -122.98195],
        [49.25879, -122.96399],
        [49.25461, -122.93928],
        [49.25342, -122.91815],
        [49.24769, -122.89512],
        [49.26133, -122.88994],
        [49.27794, -122.84551],
        [49.27719, -122.82799],
        [49.27388, -122.79999],
        [49.28037, -122.79402],
        [49.28547, -122.79174]
]

const blueOptions = {
    color: 'blue',
    weight: 8 
};

const redOptions = {
    color: 'red',
    weight: 4 
};

const Map = () => {
    return(
       <>
<header style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:40}}>
<img src="images/logo.png" style={{width:50, marginRight:10}}/>
<h1>Expo Line and Millenial Line</h1>
</header>

        <MapContainer
            style={{height: "100vh"}}
            center={[49.24966, -123.00000]} zoom={12} scrollWheelZoom={true}
        >

        <TileLayer
            attribution='&copy; <a href="https://github.com/SaraShio/Expo-Line-and-Millennium-Line-T4.git">By Sara Shiojima</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />      

        
        <Polyline pathOptions={blueOptions} positions={expoLine}/>
        
        <Marker position={[49.28596, -123.11165]} icon={icon}>
            <Popup>
                Waterfront Station
           </Popup>
        </Marker>

        <Marker position={[49.28564, -123.11982]} icon={icon}>
            <Popup>
                Burrard Station
           </Popup>
        </Marker>

        <Marker position={[49.28323, -123.11604]} icon={icon}>
            <Popup>
                Grandville Station
           </Popup>
        </Marker>

        <Marker position={[49.2794, -123.10931]} icon={icon}>
            <Popup>
                Stadium—Chinatown Station
           </Popup>
        </Marker>

        <Marker position={[49.27315, -123.10044]} icon={icon}>
            <Popup>
                Main Street—Science World Station
           </Popup>
        </Marker>

        <Marker position={[49.26295, -123.06849]} icon={icon}>
            <Popup>
                Commercial—Broadway Station
           </Popup>
        </Marker>

        <Marker position={[49.24837, -123.05602]} icon={icon}>
            <Popup>
                Nanaimo Station
           </Popup>
        </Marker>

        <Marker position={[49.24421, -123.04592]} icon={icon}>
            <Popup>
                29th Avenue Station
           </Popup>
        </Marker>

        <Marker position={[49.23837, -123.03168]} icon={icon}>
            <Popup>
                Joyce—Collingwood Station
           </Popup>
        </Marker>

        <Marker position={[49.22983, -123.01279]} icon={icon}>
            <Popup>
                Patterson Station
           </Popup>
        </Marker>

        <Marker position={[49.22585, -123.00389]} icon={icon}>
            <Popup>
                Metrotown Station
           </Popup>
        </Marker>

        <Marker position={[49.22007, -122.98842]} icon={icon}>
            <Popup>
                Royal Oak Station
           </Popup>
        </Marker>

        <Marker position={[49.21213, -122.95923]} icon={icon}>
            <Popup>
                Edmonds Station
           </Popup>
        </Marker>

        <Marker position={[49.20007, -122.94902]} icon={icon}>
            <Popup>
                22nd Street Station
           </Popup>
        </Marker>

        <Marker position={[49.20137, -122.91274]} icon={icon}>
            <Popup>
                New Westminster Station
           </Popup>
        </Marker>

        <Marker position={[49.20482, -122.90613]} icon={icon}>
            <Popup>
                Columbia Station
           </Popup>
        </Marker>

        <Marker position={[49.22455, -122.88952]} icon={icon}>
            <Popup>
                Sapperton Station
           </Popup>
        </Marker>

        <Marker position={[49.23311, -122.88278]} icon={icon}>
            <Popup>
                Braid Station
           </Popup>
        </Marker>

        <Marker position={[49.24769, -122.89512]} icon={icon}>
            <Popup>
                Lougheed Town Centre Station
           </Popup>
        </Marker>

        <Marker position={[49.25342, -122.91815]} icon={icon}>
            <Popup>
                Production Way—University Station
           </Popup>
        </Marker>


        <Marker position={[49.20443, -122.87413]} icon={icon}>
            <Popup>
                Scott Road Station
           </Popup>
        </Marker>


  <Marker position={ [49.19911, -122.85061]} icon={icon}>
            <Popup>
                Gateway Station
           </Popup>
        </Marker>


  <Marker position={[49.18951, -122.84788]} icon={icon}>
            <Popup>
                Surrey Central Station
           </Popup>
        </Marker>


  <Marker position={[49.18278, -122.84473]} icon={icon}>
            <Popup>
                King George Station
           </Popup>
        </Marker>


        
        <Polyline pathOptions={redOptions} positions={millenniumLine}/>

        <Marker position={[49.26583, -123.07914]} icon={icon}>
            <Popup>
                VCC-Clark Station
           </Popup>
        </Marker>

        <Marker position={[49.25895, -123.04526]} icon={icon}>
            <Popup>
                Renfrew Station
           </Popup>
        </Marker>

        <Marker position={[49.26079, -123.03288]} icon={icon}>
            <Popup>
                Rupert Station
           </Popup>
        </Marker>

        <Marker position={[49.265, -123.01342]} icon={icon}>
            <Popup>
                Gilmore Station
           </Popup>
        </Marker>

        <Marker position={[49.2664, -123.00172]} icon={icon}>
            <Popup>
                Brentwood Town Centre Station
           </Popup>
        </Marker>

        <Marker position={[49.26473, -122.98195]} icon={icon}>
            <Popup>
                Holdom Station
           </Popup>
        </Marker>

        <Marker position={[49.25879, -122.96399]} icon={icon}>
            <Popup>
                Sperling-Burnaby Lake Station
           </Popup>
        </Marker>

        <Marker position={[49.25461, -122.93928]} icon={icon}>
            <Popup>
                Lack City Way Station
           </Popup>
        </Marker>

        <Marker position={[49.26133, -122.88994]} icon={icon}>
            <Popup>
                Burquitlam Station
           </Popup>
        </Marker>

        <Marker position={[49.27794, -122.84551]} icon={icon}>
            <Popup>
                Moody Centre Station
           </Popup>
        </Marker>

        <Marker position={[49.27719, -122.82799]} icon={icon}>
            <Popup>
                Inlet Centre Station
           </Popup>
        </Marker>

        <Marker position={[49.27388, -122.79999]} icon={icon}>
            <Popup>
                Coquitlam Central Station
           </Popup>
        </Marker>

        <Marker position={[49.28037, -122.79402]} icon={icon}>
            <Popup>
                Lincoln Station
           </Popup>
        </Marker>

        <Marker position={[49.28547, -122.79174]} icon={icon}>
            <Popup>
                Lafarge Lake—Douglas Station
           </Popup>
        </Marker>

        </MapContainer>
       </>
    )
}

export default Map;