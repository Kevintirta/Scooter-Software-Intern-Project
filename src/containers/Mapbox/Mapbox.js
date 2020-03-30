import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import './Mapbox.css'

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1Ijoia2V2aW50aXJ0YWdvbiIsImEiOiJjazhlaTFzZ2gxNTlxM2VuczN0YmtrYjN4In0.SRZhp_TbwD9M-7tkamCzvg'
});


class Mapbox extends Component {

    render() {
        return (
            <div className="Mapbox">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "100%",
                        width: "100%"
                    }}
                    onStyleLoad ={ (Map)=>{
      
                    }}
                    center={[103.82528859,1.3406]}
                    zoom={[10]}
                >
                </Map>
            </div>
        )
    }
}

export default Mapbox;