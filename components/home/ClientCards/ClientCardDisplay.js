import React, { useState } from 'react';

const ClientCardDisplay = ({ clientdetails }) => {

    const [showMore, setShowMore] = useState(false);
    const showMoreTextStyle = "badge text-white mt-10";
    const showLessTextStyle = "badge text-secondary mt-10";
    const showMoreSoundcloud = "hidden";
    const showLessSoundcloud = "w-full px-6 sm:px-16 lg:px-32 py-3 lg:py-10 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap";
    const hidden = "hidden";
    const display = "";
    return (
        <>
            <div className="space-y-12 my-16">

                <div className="w-full border border-nav md:pb-10 xl:pb-11">
                    <div className="w-full pt-16 px-3 sm:px-16 lg:px-32 lg:pt-8 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">

                        {/* Client logo */}
                        <div className="mb-6 lg:mb-0">
                            <img src={clientdetails.imgpath} className="object-contain h-48 md:h-48 lg:h-80 md:object-scale-down" />
                        </div>
                        {/* -- Client info */}
                        <div className="w-full md:w-1/2 flex flex-wrap justify-center text-center lg:text-left lg:block lg:w-2/3">
                            <div className="lg:pt-10 lg:pl-0 xl:pt-0">
                                <h3 className="text-white text-3xl font-semibold">{clientdetails.name}</h3>

                                <p className="text-secondary pt-3">{clientdetails.subtitle}</p>
                            </div>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center text-left lg:text-left gap-3">
                                <p className="sm pl-3 lg:pt-10 lg:pl-0 xl:pt-0 text-secondary">
                                    {showMore ? clientdetails.description : ""}

                                </p>
                                <div className="pb-16 md:pb-0 pr-5 lg:pl-0 xl:pt-0 text-secondary justify-center text-center place-items-center">
                                    <button className={showMore ? showLessTextStyle : showMoreTextStyle} onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "Show less" : "Show more"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={showMore ? display : hidden}>
                        <div className="w-full px-3 sm:px-16 lg:px-32 lg:pt-20 lg:space-x-24 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                            <div className="mb-6 lg:mb-0 mt-6">
                                <div className="text-xl font-bold">
                                    <p>{clientdetails.album}</p>
                                </div>
                            </div>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center text-center lg:text-left gap-3 mb-5">

                                {clientdetails.badges.map((clientbadge, index) => (
                                    <div key={index}>
                                        <div className="badge">
                                            {clientbadge}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                    <div className={showMore ? display : hidden}>
                        <div className="w-full md:w-full flex flex-wrap justify-center text-left lg:text-left lg:block lg:w-full">
                            <div className="px-3 sm:px-16 lg:px-32">
                                <div className="text-secondary">
                                    <p>{clientdetails.mainparagraph}</p>
                                </div>
                            </div></div>

                    </div>

                    <div className={showMore ? showLessSoundcloud : showMoreSoundcloud} >

                        <iframe width="100%" height="450" scrolling="no" allow="autoplay" src={clientdetails.soundcloudembed}></iframe>

                    </div>

                    <div className={showMore ? display : hidden}>
                        <div className="w-full md:w-full flex flex-wrap justify-center text-left lg:text-left lg:block lg:w-full">
                            <div className="px-3 sm:px-16 lg:px-32 pb-8">
                                <div className="text-secondary">
                                    {clientdetails.ending}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default ClientCardDisplay;