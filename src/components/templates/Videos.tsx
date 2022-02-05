import { FC } from "react";
import { Section } from "@lib/molecules";
import { VideoPlayer } from "@lib/atoms";

interface Video {
  title: string;
  description: string;
  youtubeId: string;
}

const Videos: FC = () => {
  const videos: Video[] = [
    {
      title: "El hacha",
      description: `“Estamos tan preocupados por llegar pronto a nuestro destino, que nos olvidamos de mirar y disfrutar del paisaje.”`,
      youtubeId: "lnLVBS5G7fQ",
    },
    {
      title: "El vaso de agua",
      description: "Esta es la forma de acabar con todos tus problemas.",
      youtubeId: "9fgTo5DTzsA",
    },
  ];

  return (
    <Section
      title="Videos"
      subtitle="“Cada acontecimiento, grande y pequeño, es una parábola por medio de la cual Dios nos habla y el arte de vivir es recibir el mensaje.”"
      bibleVerse="2 Timoteo 3:16-17"
      id="videos"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        {videos.map((video: Video) => {
          return (
            <div
              key={video.youtubeId}
              className="w-11/12 sm:w-4/5 mb-7 md:mb-0"
            >
              <div className="mb-1">{video.title}</div>
              <div className="text-rs-primary text-sm mb-4 sm:mb-3 md:h-16 lg:h-16 xl:h-10">
                {video.description}
              </div>
              <VideoPlayer title={video.title} videoId={video.youtubeId} />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { Videos };
