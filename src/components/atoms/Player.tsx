import { useAppSelector } from "@app/hooks";
import { FC, useEffect, useMemo } from "react";
import { RootState } from "src/state/store";

const Player: FC = () => {
  const streamUrl: string = "https://stream1.srvnetplus.com:18122/stream";

  const stream: HTMLAudioElement = useMemo(
    () => new Audio(streamUrl),
    [streamUrl]
  );

  const playerState: boolean = useAppSelector(
    (state: RootState) => state.player.value
  );

  useEffect(() => {
    if (playerState) {
      stream.play();
    } else {
      stream.pause();
    }
  }, [playerState, stream]);

  return <></>;
};

export { Player };
