import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "~/tailwind.css";

import Header from "./client/components/header/header";
import Main from "./client/components/layout/main/main";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),

  {
    rel: "preload",
    as: "font",
    href: "/assets/fonts/Satoshi-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/assets/fonts/Satoshi-Bold.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "icon", href: "/assets/favicons/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/assets/favicons/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/assets/favicons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/assets/favicons/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/assets/favicons/site.webmanifest",
  },
  {
    rel: "mask-icon",
    href: "/assets/favicons/safari-pinned-tab.svg",
    color: "#5bbad5",
  }
];

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Main>
          <Header />
          <Outlet />
        </Main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
