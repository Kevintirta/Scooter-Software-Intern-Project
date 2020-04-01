import React, { Component } from 'react';
import InputBar from '../../components/InputBar/InputBar'
import Mapbox from '../../components/Mapbox/Mapbox'
import './StoreLocator.css'

const SINGAPORE_CENTER = [103.82528859, 1.3406]
const DEFAULT_ZOOM = [10]

class StoreLocator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            distance: 0,
            latitude: 0,
            longitude: 0,
            area: [],
            showScooter: [],
            center: SINGAPORE_CENTER,
            zoom: DEFAULT_ZOOM
        }
    }

    findDistance = (lat1, lon1, lat2, lon2) => {
        /**
        * To find the distance between 2 coordinates
        * @param lat1 - latitude of first coordinate
        * @param lat2 - latitude of second coordinate
        * @param lon1 - longitude of first coordinate
        * @param lon2 - longitude of second coordinate
        * @return distance - distance of the 2 coordinates in meters
        */
        var R = 6371000;
        var a = 0.5 - Math.cos((lat2 - lat1) * Math.PI / 180) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos((lon2 - lon1) * Math.PI / 180)) / 2;
        return R * 2 * Math.asin(Math.sqrt(a));
    }

    findScooter = (quantity, distance, latitude, longitude) => {
        /**
        * To find the closest X number of scooters given particular distance, latitude, and longitude
        * @param quantity - X number of scooters to be search
        * @param distance - radius of circle
        * @param latitude - latitude of the center
        * @param longitude - longitude of the center
        * @return points - array of X closest scooters for given distance, latitude, and longitude
        */
        let points = []

        this.props.locations.map((location) => {
            const pointsDist = this.findDistance(latitude, longitude, location.coordinate[1], location.coordinate[0])
            if (pointsDist < distance) {
                const obj = {
                    'type': 'Feature',
                    'properties': {
                        'iconSize': [35, 35],
                        'distance': pointsDist
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': location.coordinate
                    }
                }
                points.push(obj)
            }
            return null
        })
        if (quantity !== "") {
            points = points.sort((a, b) => a.properties.distance - b.properties.distance)
            points = points.slice(0, quantity)
        }
        return points
    }

    submitHandler = () => {
        /**
        * To update the state based on the results which will be passed to Mapbox as props
        */
        const { quantity, distance, latitude, longitude } = this.state

        if (distance <= 30) {
            this.setState({ zoom: [19.1] })
        } else if (distance <= 50) {
            this.setState({ zoom: [18.5] })
        } else if (distance <= 70) {
            this.setState({ zoom: [18] })
        } else {
            this.setState({ zoom: [17.5] })
        }

        this.setState({ center: [longitude, latitude] })

        const foundScooter = this.findScooter(quantity, distance, latitude, longitude)

        const area_obj = [{
            type: "Feature",
            properties: {
                "radius": distance / 0.075 / Math.cos(latitude * Math.PI / 180)
            },
            geometry: {
                type: "Point",
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
            }
        }]

        this.setState({ showScooter: foundScooter })
        this.setState({ area: area_obj })
    }

    resetHandler = () => {
        /**
        * To update the state back to default
        */
        this.setState({ showScooter: [] })
        this.setState({ area: [] })
        this.setState({ center: SINGAPORE_CENTER })
        this.setState({ zoom: DEFAULT_ZOOM })
    }

    quantityHandler = (quantity) => {
        /**
        * To update quantity based on user inputs
        */
        this.setState({ quantity: quantity })
    }

    distanceHandler = (distance) => {
        /**
        * To update distance based on user inputs
        */
        this.setState({ distance: distance })
    }

    latitudeHandler = (latitude) => {
        /**
        * To update latitude based on user inputs
        */
        this.setState({ latitude: latitude })
    }

    longitudeHandler = (longitude) => {
        /**
        * To update longitude based on user inputs
        */
        this.setState({ longitude: longitude })
    }

    render() {
        return (
            <div className="groupLocator">
                {
                    this.props.locations.length > 0 ? <p className="status">Number of Scooters available: {this.props.locations.length}</p> : null
                }
                {
                    this.state.showScooter.length > 0 ? <p className="status">For given parameters, there are {this.state.showScooter.length} scooters available</p> : null
                }
                <div className="storeLocator">
                    <div className="inputBarGroup split">
                        <InputBar inputHandler={this.quantityHandler} text="Number of Scooter" placeholder="quantity" />
                        <InputBar inputHandler={this.distanceHandler} text="Distance" placeholder="in meters" />
                        <InputBar inputHandler={this.latitudeHandler} text="Latitude" placeholder="in degrees" />
                        <InputBar inputHandler={this.longitudeHandler} text="Longitude" placeholder="in degrees" />
                        <button className="button" onClick={this.submitHandler}>Submit</button>
                        <button className="button" onClick={this.resetHandler}>Reset</button>
                    </div>
                    <div className="map split">
                        <Mapbox
                            showScooter={this.state.showScooter}
                            area={this.state.area}
                            center={this.state.center}
                            zoom={this.state.zoom}
                            locations={this.props.locations}
                        />
                    </div>
                    <p className="author">Built by Kevin Gondokusumo</p>
                </div>
            </div>
        )
    }
}

export default StoreLocator;