import React from 'react';
import Link from 'next/link'

import ValsOp8No4VideoCard from "./VideoCards/VCValsOp8No3"
import ElMarabinoVideoCard from "./VideoCards/VCElMarabino"
import NoWomanNoCryVideoCard from "./VideoCards/VCNoWomanNoCry"
import MichelleVideoCard from "./VideoCards/VCMichelle"

const GuitarArr = () => {

    return (
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <section className="w-full grow">
                <Link href='downloads'>
                    <h2 id="arrangements" className="secondary-title">Arrangements</h2>
                </Link>
                <div className="section-paragraph">
                    I&apos;m currently in the process of writing out the guitar arrangements I&apos;ve learned over the years. Below you&apos;ll find them available for listening or you can{" "}
                    <Link href='downloads' className="underline hover:text-theme">
                        download the sheet music
                    </Link>
                    {/*  remove this comment when patreon link is active]
                    . All transcriptions are also available by subscribing through my{" "}
                    <Link href='patreon.com/zacharypagliaro' className="underline hover:text-theme">
                        Patreon
                    </Link>
                    */}
                    .
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 flex-auto">

                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <ValsOp8No4VideoCard />
                        </div>
                        <Link href='downloads/#ValsOp8No3'>
                            <span className="badge hover:bg-theme">
                                Vals Op. 8 No. 3
                            </span>
                        </Link>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <ElMarabinoVideoCard />
                        </div>
                        <Link href='downloads/#ElMarabino'>
                            <span className="badge hover:bg-theme">
                                El Marabino
                            </span>
                        </Link>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <NoWomanNoCryVideoCard />
                        </div>
                        <Link href='downloads/#NoWomanNoCry'>
                            <span className="badge hover:bg-theme">
                                No Woman No Cry
                            </span>
                        </Link>
                    </div>
                    <div className="">
                        <div className="w-full h-fit lg:h-72 object-cover">
                            <MichelleVideoCard />
                        </div>
                        <Link href='downloads/#Michelle'>
                            <span className="badge hover:bg-theme">
                                Michelle
                            </span>
                        </Link>
                    </div>

                    {/*-- placeholder images 
                    <img src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover" />
                    <img src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover" />
                    */}
                </div>
            </section>
        </div>
    )
}

export default GuitarArr;