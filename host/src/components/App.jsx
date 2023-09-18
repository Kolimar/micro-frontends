import React, { lazy } from "react";
import Navbar from "./Navbar";

const DashboardLazy = lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <div className={"container"}>
      <section>
        <Navbar />
      </section>
      <section>
        <DashboardLazy />
      </section>
    </div>
  );
}
