import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useMemo } from "react";
import { RootState } from "src/state/store";
import { loading } from "src/state/slices/playerSlice";
import { Howl } from "howler";

const Player: FC = () => {
  const dispatch = useAppDispatch();

  const streamUrl: string = "https://stream1.srvnetplus.com:18122/stream";

  const stream: Howl = useMemo(
    () =>
      new Howl({
        src: [streamUrl],
        html5: true,
        preload: true,
      }),
    [streamUrl]
  );

  const playerState: boolean = useAppSelector(
    (state: RootState) => state.player.playing
  );

  useEffect(() => {
    if (playerState) {
      stream.play();
      stream.on("play", () => {
        dispatch(loading(false));
      });
    } else {
      stream.pause();
    }
  }, [playerState, stream, dispatch]);

  return <></>;
};

export { Player };
