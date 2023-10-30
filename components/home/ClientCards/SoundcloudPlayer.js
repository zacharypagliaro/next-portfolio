import React from "react";
import ReactPlayer from "react-player";

const SoundcloudPlayer = (soundcloudurl) => (
    <div className="soundcloud-player-wrapper">
        <ReactPlayer
            url="https://soundcloud.com/nicodotwav/sets/old-soul"
            className="soundcloud-react-player"
            playing
            width="100%"
            height="100%"
            controls={false}
        />
    </div>
);

export default SoundcloudPlayer;
