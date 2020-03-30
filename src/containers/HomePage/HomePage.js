import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import ScooterLocator from '../StoreLocator/StoreLocator'
import './HomePage.css'

class HomePage extends Component{

    render(){
        return(
            <div>
                <Header />
                <ScooterLocator />
            </div>
        )
    }
}

export default HomePage;