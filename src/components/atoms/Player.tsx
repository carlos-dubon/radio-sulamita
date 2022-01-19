import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useMemo } from "react";
import { RootState } from "src/state/store";
import { loading } from "src/state/slices/playerSlice";

const Player: FC = () => {
  const dispatch = useAppDispatch();

  const streamUrl: string = "https://stream1.srvnetplus.com:18122/stream";

  const stream: HTMLAudioElement = useMemo(
    () => new Audio(streamUrl),
    [streamUrl]
  );

  const playerState: boolean = useAppSelector(
    (state: RootState) => state.player.playing
  );

  useEffect(() => {
    const play: () => Promise<void> = async () => {
      await stream.play();
      dispatch(loading(false));
    };

    if (playerState) {
      play();
    } else {
      stream.pause();
    }
  }, [playerState, stream, dispatch]);

  return <></>;
};

export { Player };
