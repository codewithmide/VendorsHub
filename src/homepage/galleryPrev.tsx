// gallery.tsx
import React from "react";
import { VideoData } from "./utils/videodata";
import VideoGrid from "../components/videoGrid";

const GalleryPrev: React.FC = () => {
  return (
    <>
      <VideoGrid VideoData={VideoData} />
    </>
  );
};

export default GalleryPrev;
