// imports data files from /arrangements

import React from 'react';
import AllArrangementsDisplay from './AllArrangementsDisplay';
import MainSongDisplayModule from "./MainSongDisplayModule";

// Import arrangement details from separate files
import { detailsvalsop8no4 } from './arrangements/valsop8no4';
import { detailselmarabino } from './arrangements/elmarabino';
import { detailsgreatfairysfountain } from './arrangements/greatfairysfountain';
import { detailsmichelle } from './arrangements/michelle';
import { detailsnowomannocry } from './arrangements/nowomannocry';
import { detailssomewhereovertherainbow } from './arrangements/somewhereovertherainbow';
import { detailspokemoncenter } from './arrangements/pokemoncenter';
import { detailssupermarioworld } from './arrangements/supermarioworld';
import { detailszeldaslullaby } from './arrangements/zeldaslullaby';

// ... import other arrangements ...

const allSongs = [detailsvalsop8no4, detailselmarabino, detailsgreatfairysfountain, detailsnowomannocry, detailssomewhereovertherainbow, detailsmichelle, detailspokemoncenter, detailssupermarioworld, detailszeldaslullaby];


const sortedAllSongs = allSongs.slice().sort((a, b) => a.date.localeCompare(b.date));

const PurchaseArrangements = () => {
    return (
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full">
                <h2 id="arrangements" className="secondary-title">All Arrangements</h2>
                <h3 className="mt-4 text-sm">Download the sheet music and guitar tabs below</h3>
                {/* Youtube thumbnail display */}
                <AllArrangementsDisplay songdetailsarray={sortedAllSongs} />

                {/* BEGIN SONGS DETAILS - Large format youtube display */}
                {sortedAllSongs.map((detail, index) =>
                    detail && detail.anchorid ? (
                        <MainSongDisplayModule key={index} songdetails={detail} />
                    ) : null
                )}
            </section>
        </div>
    );
};

export default PurchaseArrangements;
