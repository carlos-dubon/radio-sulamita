import { useAppSelector, useAppDispatch } from "@app/hooks";
import { FC, useEffect, useMemo } from "react";
import { RootState } from "src/state/store";
import { loading } from "src/state/slices/playerSlice";
import ReactGA from "react-ga4";
import to from "await-to-js";
import { analyticsConfig } from "@app/analytics";

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
      const [err] = await to(stream.play());

      dispatch(loading(false));

      if (err) {
        console.error(err);
        ReactGA.event(analyticsConfig.customEvents.playerFailed);
        return;
      }

      ReactGA.event(analyticsConfig.customEvents.playerSuccess);
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
