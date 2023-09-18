import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const DashboardLazy = lazy(() => import("./Dashboard"));
const ProjectsLazy = lazy(() => import("./Projects"));

const Router = () => {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<DashboardLazy />}></Route>
              <Route path="projects" element={<ProjectsLazy />}></Route>
              <Route path="*" element={<h1>404</h1>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Router;
