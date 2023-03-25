import { useTransition, useState, lazy } from "react";
import Link from 'next/link'

const Player = lazy(() => import("../Player"));

const NoWomanNoCryVideoCard = () => {
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
                                alt="Zachary Pagliaro - No Woman No Cry thumbnail"
                                src="https://img.youtube.com/vi/YiUi7z8TmR4/maxresdefault.jpg"
                                loading="lazy"
                                className="w-full bg-nav h-36 lg:h-72 object-cover"
                            />
                        </div>
                    </button>
                )}
                <div>
                    {showVideo && (
                        <Player
                            videoId="YiUi7z8TmR4"
                            setHasLoaded={setHasLoaded}
                            className="player-wrapper"
                        />

                    )}
                    {showVideo && (
                        <div className="section-paragraph">
                            Written by Bob Marley and the Wailers. {" "}
                            <Link href='/downloads#NoWomanNoCry' className="hover:underline hover:text-theme">
                                Download the sheet music or tab.
                            </Link>

                        </div>

                    )}

                </div>

            </div>
        </div>
    );
}

export default NoWomanNoCryVideoCard;