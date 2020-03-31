import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature, Source } from 'react-mapbox-gl'
import scooterIcon from '../../assets/scooter.png'
import './Mapbox.css'

const image = new Image(30, 30)
image.src = scooterIcon

const images = ['scooter', image];

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Foo',
                'iconSize': [30, 30]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [103.82528859, 1.3406]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Bar',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-61.2158203125, -15.97189158092897]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Baz',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-63.29223632812499, -18.28151823530889]
            }
        }
    ]
};


const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1Ijoia2V2aW50aXJ0YWdvbiIsImEiOiJjazhlaTFzZ2gxNTlxM2VuczN0YmtrYjN4In0.SRZhp_TbwD9M-7tkamCzvg'
});


class Mapbox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showScooter: []
        }
    }


    submitHandler = (quantity, distance, latitude, longitude) => {
        console.log("map")
        console.log(this.props.locations)
        this.map.state.map.flyTo({
            center: [103.82528859, 1.3406],
            zoom: [15]
        })
        console.log(this.props.locations)

        const point = [{
            'type': 'Feature',
            'properties': {
                'message': 'Foo',
                'iconSize': [30, 30]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [103.82528859, 1.3406]
            }
        }]
        this.setState({showScooter:point})


    }

    render() {
        return (
            <div className="Mapbox">
                <Map
                    ref={(e) => { this.map = e; }}
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "100%",
                        width: "100%"
                    }}
                    onStyleLoad={(Map) => {

                    }}
                    center={[103.82528859, 1.3406]}
                    zoom={[10]}
                >
                    <Source
                        id="scooter_id"
                        geoJsonSource={{
                            type: "geojson",
                            data: {
                                'type': 'FeatureCollection',
                                'features': this.state.showScooter
                            }
                        }}
                    />

                    <Layer
                        type="symbol"
                        sourceId="scooter_id"
                        layout={{ 'icon-image': 'scooter' }}
                        images={images}
                    />

                </Map>
            </div>
        )
    }
}

export default Mapbox;