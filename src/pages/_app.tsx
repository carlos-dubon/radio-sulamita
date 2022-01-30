import "../styles/globals.scss";
import "../styles/swiper.scss";
import "../styles/spinner.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@state/store";
import dynamic from "next/dynamic";

// fix to: Audio is not defined
const Player = dynamic<{}>(
  import("@lib/atoms").then((module) => module.Player),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Player />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
