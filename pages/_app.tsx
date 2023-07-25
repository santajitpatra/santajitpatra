import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";
import { SessionProvider } from "next-auth/react";

const progress = new ProgressBar({
  size: 4,
  color: "#22d3ee",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
