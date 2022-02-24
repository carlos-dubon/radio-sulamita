import "../styles/globals.scss";
import "baby-i-am-faded/styles.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@state/store";
import dynamic from "next/dynamic";
import { ScrollToProvider } from "@app/context";
import { GoToTop } from "@lib/atoms";

// fix to: Audio is not defined
const Player = dynamic<{}>(
  import("@lib/atoms").then((module) => module.Player),
  { ssr: false }
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ScrollToProvider>
          <GoToTop />
          <Player />
          <Component {...pageProps} />
        </ScrollToProvider>
      </Provider>
    </>
  );
};

export default MyApp;
