import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import Navbar from "./routes/component/_navbar";
import Footer from "./routes/component/_footer";
import React from "react";


export function Layout({ children }: { children: React.ReactNode }) {
  // const data = useRouteLoaderData("root");
  // const error = useRouteError();
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar/>
        {children}
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <React.StrictMode>
    <Outlet />
  </React.StrictMode>
}
