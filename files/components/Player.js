import YouTube from "react-youtube";
//import { videoInner } from "./style.module.scss";

const Player = ({ setHasLoaded, videoId }) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={_onReady}
      className="react-player"
      iframeClassName="react-player"
    />
  );
};

export default Player;
