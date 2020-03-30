import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import ScooterLocator from '../StoreLocator/StoreLocator'
import {db} from '../../index'
import './HomePage.css'

class HomePage extends Component{

    componentDidMount(){
        db.collection("locations").get().then((snapshot =>{
            console.log(snapshot.docs)
            snapshot.docs.forEach(
                doc =>{
                    console.log(doc.data())
                }
            )
        }))

    }

    render(){
        console.log("homepage")
        return(
            <div>
                <Header />
                <ScooterLocator />
            </div>
        )
    }
}

export default HomePage;