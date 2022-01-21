import { FC } from "react";

interface Props {
  title: string;
  videoId: string;
}

const YouTubeVideo: FC<Props> = ({ title, videoId }) => {
  return (
    <iframe
      className="w-full h-64"
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export { YouTubeVideo };
