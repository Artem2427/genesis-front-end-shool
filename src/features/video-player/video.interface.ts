export interface VideoPlayerInterface {
  videoSource: string;
  preload: string;
}

export interface VideoElementInterface extends HTMLVideoElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
