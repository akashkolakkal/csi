import React, { lazy } from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Loader from "./components/Loader";
import ContextProvider from "./context/Provider";
const Home = lazy(() => import("./pages/Home"));
const Events = lazy(() => import("./pages/Events"));
const Teams = lazy(() => import("./pages/Teams"));
const Hackathons = lazy(() => import("./pages/Hackathons"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/hackathons" element={<Hackathons />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <ContextProvider>
      <React.Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </ContextProvider>
  );
}

export default App;
