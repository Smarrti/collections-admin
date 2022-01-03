import { Typography } from "@mui/material";
import { FC } from "react";
import { VideoContentType } from "../../../utils/types/songContent.type";

type Props = {
  video: VideoContentType;
};

export const VideoIframe: FC<Props> = ({ video }) => {
  const videoUrl = `https://www.youtube-nocookie.com/embed/${video.id}`;

  return (
    <div>
      <Typography style={{ marginTop: 10 }}>Источник {video.source}</Typography>

      <iframe
        src={videoUrl}
        width={560}
        height={315}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
