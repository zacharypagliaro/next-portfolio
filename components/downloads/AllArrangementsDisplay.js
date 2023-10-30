import { React } from 'react';
import SingleProductDisplay from './SingleProductDisplay';

const AllArrangementsDisplay = ({ songdetailsarray }) => {
    // Sort the song details array by date in ascending order
    //const sortedSongDetailsArray = songdetailsarray.slice().sort((a, b) => a.date.localeCompare(b.date));

    return (

        <div className="">
            <div className="mx-auto max-w-2xl py-16  sm:py-24  lg:max-w-7xl ">
                <h2 className="sr-only">Shop</h2>

                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
                    {/* map arrangement data to each cell */}
                    {songdetailsarray.map((detail, index) => (
                        detail && detail.anchorid ? (

                            <SingleProductDisplay key={index} songdetails={(detail)} />
                        ) : null
                    ))}

                </div>
            </div>
        </div>

    )
}

export default AllArrangementsDisplay;