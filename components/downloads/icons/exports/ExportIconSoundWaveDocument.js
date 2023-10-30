import React from 'react';
import ExportIconMusicSoundWave from "./ExportIconMusicSoundWave"
import ExportIconDocumentsOne from "./ExportIconDocumentsOne"





const ExportIconSoundWaveDocument = () => {



    return (
        <>


            {/** --------------------------------------------- */}

            <div className="lg:mr-32 xl:mr-64">


                <div>
                    <div className="container group">
                        <div className="flex w-3/4 space-x-4">

                        </div>
                        <div className="container grid">
                            <div className="mt-3">
                                <div className="relative scale-80">
                                    <div className="absolute top-1">
                                        <ExportIconDocumentsOne />
                                    </div>
                                    <div className="absolute">
                                        <ExportIconMusicSoundWave />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                <div className="container grid grid-flow-row">
                    <div className="relative grid grid-cols-2">

                        <div className="absolute top-2 left-24">
                        </div>
                    </div>
                    <div className="container grid">
                        <div className="mt-14">
                            <div className="relative scale-80">

                            </div>
                            <div className="text-secondary justify-left sm:mt-2 lg:m-0"></div>
                        </div>
                    </div>


                </div>
            </div>

            {/** --------------------------------------------- */}
        </>
    )
}

export default ExportIconSoundWaveDocument;