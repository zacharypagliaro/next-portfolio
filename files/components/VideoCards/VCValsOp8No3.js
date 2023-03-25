import { useTransition, useState, lazy } from "react";
import Link from 'next/link'

const Player = lazy(() => import("../Player"));

const ValsOp8No3VideoCard = () => {
    // useTransition is used to let React know there will be a
    // rerender when the button is pressed.
    const [, startTransition] = useTransition();

    // These two states handle the button press, and
    // the loading of the YouTube iframe.
    const [showVideo, setShowVideo] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    return (
        <div>
            <div>
                {
                    // If the button has not been pressed, and the YouTube
                    // video is not loading - keep the button rendered.
                }
                {(!showVideo || !hasLoaded) && (
                    <button
                        onClick={() => {
                            startTransition(() => {
                                setShowVideo(true);
                            });
                        }}
                    >
                        <div>
                            <img
                                alt="Zachary Pagliaro - Vals Op. 8 No. 3 thumbnail"
                                src="https://img.youtube.com/vi/w9aKnh98pis/maxresdefault.jpg"
                                loading="lazy"
                                className="w-full bg-nav h-36 lg:h-72 object-cover"
                            />
                        </div>
                    </button>
                )}
                <div>
                    {showVideo && (
                        <Player
                            videoId="w9aKnh98pis"
                            setHasLoaded={setHasLoaded}
                            className="player-wrapper"
                        />

                    )}
                    {showVideo && (
                        <div className="section-paragraph">
                            Composed by Agustín Barrios Mangoré. {" "}
                            <Link href='/downloads#ValsOp8No3' className="hover:underline hover:text-theme">
                                Download the sheet music or tab.
                            </Link>

                        </div>

                    )}

                </div>

            </div>
        </div>
    );
}

export default ValsOp8No3VideoCard;