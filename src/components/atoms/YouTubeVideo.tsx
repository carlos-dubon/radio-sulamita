import { FC } from "react";

interface Props {
  title: string;
  videoId: string;
}

const YouTubeVideo: FC<Props> = ({ title, videoId }) => {
  return (
    <iframe
      className="w-full h-64"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export { YouTubeVideo };
