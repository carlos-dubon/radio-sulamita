import { FC, memo } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

interface Props {
  title: string;
  videoId: string;
}

const VideoPlayer: FC<Props> = ({ title, videoId }) => {
  return (
    <div className="h-64 w-full">
      <Plyr
        source={{
          title,
          type: "video",
          sources: [
            {
              src: videoId,
              provider: "youtube",
            },
          ],
        }}
        options={
          {
            //
          }
        }
      />
    </div>
  );
};

export const MemoizedVideoPlayer = memo(VideoPlayer);
