import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MapComponent from './MapComponent';

function Home() {

    return (
        <div className="flex flex-col h-screen">

            <div className="flex" >
                <Header />
            </div>

            <div className="grow">
                <div className="MapComponent">
                    <MapComponent />
                    {/* <Newmap /> */}
                </div>
            </div >


            <div className="flex">
                <Footer />
            </div>
        </div >
        // <div className="flex flex-col min-h-screen overflow-hidden bg-white">
        //     <Header />
        //     <section>
        //         <div className="max-w-6xl mx-auto px-4 sm:px-4 relative py-10">

        //             <button onClick={getUserLocation} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get User Location</button>

        //             {userLocation && (
        //                 <div>
        //                     <h2>User Location</h2>
        //                     <p>Latitude: {userLocation.latitude}</p>
        //                     <p>Longitude: {userLocation.longitude}</p>
        //                 </div>
        //             )}

        //             <MapComponent />

        //         </div>
        //     </section>



        //     <Footer />
        // </div >
    );
}

export default Home;