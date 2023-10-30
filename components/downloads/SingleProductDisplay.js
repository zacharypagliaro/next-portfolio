import { React } from 'react';
import Script from 'next/script';
import Link from 'next/link';


const SingleProductDisplay = ({ songdetails }) => {
    const hidden = "hidden";
    const display = "";

    return (
        <>
            <div className="mt-5">
                <div className="relative grid grid-cols-2 mb-8 pt-6">

                    <div className="absolute mt-3">

                    </div>
                    <div className="absolute left-0 bottom-1">
                        <Link href={"#" + songdetails.anchorid}>
                            <h3 className="text-sm md:text-md lg:text-lg">{songdetails.name}</h3>
                        </Link>
                    </div>
                    <div className="absolute right-0 bottom-1">
                        <Link href={"#" + songdetails.anchorid}>
                            <p className="absolute right-0 text-lg text-theme">{songdetails.price}</p>
                        </Link>
                    </div>

                </div>

                <Link href={"#" + songdetails.anchorid} className="group">

                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                        <img src={"https://img.youtube.com/vi/" + songdetails.youtubeid + "/maxresdefault.jpg"} alt={songdetails.name + " Thumbnail"} className="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>


                </Link>

                <div className="relative grid grid-cols-2 mb-8">
                    <div className={songdetails.available ? display : hidden}>
                        <div className="absolute mt-2 sm:mt-3 md:mt-4">

                            <Link href={songdetails.sendowlurl} rel="nofollow">
                                <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                    {songdetails.free ? "Download" : "Buy"}
                                </button>
                            </Link>
                            <Script id="sendowl-script" type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></Script>
                        </div>

                    </div>
                    <div className="absolute top-0 right-0">
                        <Link href={"#" + songdetails.anchorid}>
                            <div className="text-right sm:w-[200px] lg:w-full xl:w-[200px]">
                                <h3 className="hidden mt-1 text-sm md:text-lg truncate block">{songdetails.name}</h3>
                            </div>
                            <p className="hidden absolute right-0 text-lg text-theme">{songdetails.price}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>


    )
}

export default SingleProductDisplay;