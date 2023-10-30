import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import IconMusicClefTreble from "./icons/IconMusicClefTreble"
import IconDocuments from "./icons/IconDocuments"
import Script from 'next/script';
import Link from 'next/link'
import remark from 'remark'
import remarkReact from 'remark-react';


function MarkdownToReact({ content }) {
    const processor = remark().use(remarkReact, {
        createElement: React.createElement,
        components: {
            // Define any custom React components to be used for specific markdown syntax
            a: ({ children, href }) => (
                <a className="underline" href={href}>
                    {children}
                </a>
            ),
        },
    });
    const result = processor.processSync(content).result;

    return <div className="prose"><div className="">{result}</div></div>;
}

const MainSongDisplayModule = ({ songdetails }) => {

    const hidden = "hidden";
    const display = "";


    return (
        <>


            {/** --------------------------------------------- */}

            <h2 id={songdetails.anchorid} className="secondary-title mt-40">{songdetails.name}</h2>
            <div className="lg:mr-32 xl:mr-64">
                <div className="mb-5">
                    <p className="section-paragraph ">{songdetails.subtitle}</p>


                    <YoutubeEmbed embedId={songdetails.youtubeid} />
                </div>

                <div className={songdetails.available ? display : hidden}>
                    <div className="container group">
                        <div className="flex w-3/4 space-x-4">
                            <div className="flex-none">

                                <Link href={songdetails.sendowlurl} rel="nofollow">
                                    <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">
                                        {songdetails.free ? "Download" : "Buy"}
                                    </button>
                                </Link>
                                <Script id="so-script" type="text/javascript" src="https://transactions.sendowl.com/assets/sendowl.js" ></Script>
                            </div>
                            <div className="top-2 flex-none">
                                <p className="group-hover:text-white text-secondary mt-2">{songdetails.price}</p>
                            </div>
                            <div className="grow">

                            </div>
                        </div>
                        <div className="container grid">
                            <div className="mt-3">
                                <div className="relative scale-80">
                                    <div className="absolute">
                                        <IconDocuments className="" />
                                    </div>
                                    <div className="absolute left-2 top-1">
                                        <IconMusicClefTreble />
                                    </div>
                                </div>

                                <div><p className="text-secondary justify-left mt-2 ml-16 group-hover:text-white">{songdetails.filename}</p></div>
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
                            <MarkdownToReact content={songdetails.blurb} />
                            <div className="text-secondary justify-left sm:mt-2 lg:m-0"></div>
                        </div>
                    </div>


                </div>
            </div>

            {/** --------------------------------------------- */}
        </>
    )
}

export default MainSongDisplayModule;