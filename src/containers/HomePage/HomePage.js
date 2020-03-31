import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import ScooterLocator from '../StoreLocator/StoreLocator'
import { db } from '../../index'
import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locations: []
        }
        //extract data from Firebase
        db.collection("locations").get().then((snapshot => {
            var locations = []
            snapshot.docs.forEach(
                doc => {
                    locations.push(doc.data())
                }
            )
            this.setState({ locations: locations })
        }))
    }

    render() {
        return (
            <div>
                <Header />
                <ScooterLocator locations={this.state.locations} />
            </div>
        )
    }
}

export default HomePage;