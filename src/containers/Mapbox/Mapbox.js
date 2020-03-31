import React from 'react'
import ReactMapboxGl, { Layer, Source } from 'react-mapbox-gl'
import scooterIcon from '../../assets/scooter.png'
import './Mapbox.css'

const image = new Image(35, 35)
image.src = scooterIcon
const images = ['scooter', image];


const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1Ijoia2V2aW50aXJ0YWdvbiIsImEiOiJjazhlaTFzZ2gxNTlxM2VuczN0YmtrYjN4In0.SRZhp_TbwD9M-7tkamCzvg'
});


const Mapbox = (props) => {
    return (
        <div className="Mapbox">
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                center={props.center}
                zoom={props.zoom}
            >
                <Source
                    id="scooter_id"
                    geoJsonSource={{
                        type: "geojson",
                        data: {
                            'type': 'FeatureCollection',
                            'features': props.showScooter
                        }
                    }}
                />
                <Layer
                    type="symbol"
                    sourceId="scooter_id"
                    layout={{ 'icon-image': 'scooter' }}
                    images={images}
                />
                <Source
                    id={"area"}
                    geoJsonSource={{
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            features: props.area
                        }
                    }}
                ></Source>

                <Layer
                    type="circle"
                    sourceId={"area"}
                    paint={{
                        "circle-color": "#cc0052",
                        "circle-opacity": 0.5,
                        "circle-radius":
                            [
                                "interpolate",
                                ["exponential", 2],
                                ["zoom"],
                                0, 0,
                                20, ["get", "radius"]
                            ]
                    }}
                ></Layer>
            </Map>
        </div>
    )
}

export default Mapbox;