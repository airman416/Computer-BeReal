import React, { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      // html {
      //   box-sizing: border-box;
      // }
      // *,
      // *:before,
      // *:after {
      //   box-sizing: inherit;
      // }
      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        // background: rgba(0, 0, 0, 0.05);
        // background-color: red;
      }
      button {
        cursor: pointer;
      }
      // .layout {
      //   padding: 0 2rem;
      // }
    `}</style>
  </div>
);

export default Layout;
