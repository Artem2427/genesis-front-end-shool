import React, { FC } from 'react';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { StyledVideo } from './style';
import { useVideo } from './useVideo';
import { VideoPlayerInterface } from './video.interface';

const VideoPlayer: FC<VideoPlayerInterface> = ({ videoSource }) => {
  const { actions, video, videoRef } = useVideo();

  return (
    <div>
      <StyledVideo ref={videoRef} src={videoSource} preload="metadata" />
      <div className="progressBarContainer">
        <div style={{ width: `${video.progress}%` }} />
      </div>

      <div>
        <div>
          <button onClick={actions.revert} type="button">
            <Replay10Icon />
          </button>
          <button onClick={actions.toggleVideo} type="button">
            {video.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
          <button onClick={actions.forward} type="button">
            <Forward10Icon />
          </button>
          <div className="timeControl">
            <p>
              {`${Math.floor(video.currentTime / 60)}:${`0${Math.floor(
                video.currentTime % 60
              )}`.slice(-2)}`}
            </p>
            <p> / </p>
            <p>
              {`${Math.floor(video.videoTime / 60)}:${`0${Math.floor(
                video.videoTime % 60
              )}`.slice(-2)}`}
            </p>
          </div>
        </div>
        <div>
          <button onClick={actions.fullScreen} type="button">
            <FullscreenIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
