import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MapComponent from './MapComponent';
import GoogleMapComponent from './getphoto'
function Home() {

    return (
        <div className="flex flex-col h-screen">

            <div className="flex" >
                <Header />
            </div>

            <div className="grow">
                <div className="MapComponent">
                    <MapComponent />
                </div>
            </div >

            <div className="flex">
                <Footer />
            </div>
        </div >
    );
}

export default Home;