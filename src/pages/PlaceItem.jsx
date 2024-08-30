import React from 'react';
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const PlaceItem = (props) => {
    return (
        <div className='mt-2 pr-2' onClick={() => props.setActiveMarker(props.place)}>
            <div className="overflow-auto lock max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">{props.place.displayName}</h5>
                <div className='flex flex-col items-center'>
                    {/* {console.log(props.place.allowsDogs)} */}
                    {props.place.photos
                        ? <div>
                            <img className="rounded-lg" src={props.place.photos[0].Fg[0].Fg} alt="" /><br></br>
                        </div>
                        :
                        <div>No image</div>
                    }
                </div>
                <div className='flex flex-row'>
                    {props.place.nationalPhoneNumber
                        ? <div className='flex items-center'>
                            <AiOutlinePhone /><a href={"tel:" + props.place.nationalPhoneNumber} className="font-normal text-gray-500">{props.place.nationalPhoneNumber}</a>
                            , &nbsp;
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700">Cannot find phone number, &nbsp;</div>
                    }
                    {props.place.hasWiFi
                        ? <div className='flex items-center'>
                            <AiOutlineWifi />, &nbsp;
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700"></div>
                    }

                    {props.place.rating
                        ? <div className='flex items-center'>
                            <AiFillStar /><p className="text-sm tracking-tight text-gray-700">{props.place.rating}</p>
                        </div>
                        :
                        <div className="text-sm tracking-tight text-gray-700">There is no Rating yet</div>
                    }
                </div>


                <p className="text-gray-700 text-base">
                    {props.place.editorialSummary}
                </p>

            </div>
        </div >);
};

export default PlaceItem;