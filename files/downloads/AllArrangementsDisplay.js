import { React } from 'react';
import SingleProductDisplay from './SingleProductDisplay';

const AllArrangementsDisplay = ({ songdetailsarray }) => {


    return (

        <div className="">
            <div className="mx-auto max-w-2xl py-16  sm:py-24  lg:max-w-7xl ">
                <h2 className="sr-only">Shop</h2>

                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">

                    {songdetailsarray.map((detail, index) =>
                        <SingleProductDisplay key={index} songdetails={(detail)} />
                    )}

                </div>
            </div>
        </div>

    )
}

export default AllArrangementsDisplay;