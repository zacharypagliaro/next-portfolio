import React from 'react';
import ClientCardDisplay from './ClientCards/ClientCardDisplay';


const MusicClients = () => {

    const nicodetails = {
        name: "Nico.wav",
        imgpath: "/img/oldsoul.png",
        subtitle: "An artist from PG County, MD.",
        description: "While he's actually a skilled producer and engineer in his own right, I've gotten to produce several records for the talented rapper.",
        album: "Old Soul",
        badges: ["Producer", "Audio Engineer"],
        mainparagraph: "An album that I had the pleasure of producing, from composing the music to engineering the vocals. Recorded and mixed at Blast Off Productions, a studio located in the center of NYC, we were able to get really clean material. It's our attempt at making something classic and we hope you enjoy putting it on.",
        soundcloudembed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/549183315&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        ending: "We are continually making new music - stay tuned for the next release!",
    };

    const zealdetails = {
        name: "Zealxt",
        imgpath: "/img/overzealous.png",
        subtitle: "A personal music project.",
        description: "",
        album: "Over Zealous",
        badges: ["Producer"],
        mainparagraph: "",
        soundcloudembed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1425402859&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        ending: "",
    };

    const lushdetails =
    {
        name: "Lushwork",
        imgpath: "/img/lushwork.png",
        subtitle: "A 5 piece band from NYC.",
        description: 'We recently released an EP of tracks we assembled from our recordings over the years. You can check out my guitar playing on the songs "How you do it ?", "What If The Sand Helps Us", and "Day Trip."',
        album: "Lushwork EP",
        badges: ["Guitarist", "Producer", "Audio Engineer"],
        mainparagraph: "A collection of hiphop/jazz tracks inspired by artists like MF DOOM and BBNG. They consist of pieces that were recorded when live tracking the band during rehearsal/composition sessions in Brooklyn, NY and Truro, MA.",
        soundcloudembed: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1585746298&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        ending: "Lushwork has been playing music together since we were all kids, and you can definitely look forward to more coming from us in the future.",
    };


    return (
        < div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" >
            <section className="w-full">
                <h2 id="music" className="secondary-title">My music</h2>
                <p className="section-paragraph">Thanks for listening</p>

                {/*-- Clients */}
                <div >
                    <ClientCardDisplay clientdetails={(nicodetails)} />
                    <ClientCardDisplay clientdetails={(zealdetails)} />
                    <ClientCardDisplay clientdetails={(lushdetails)} />

                </div>

            </section>
        </div >
    )
}

export default MusicClients;