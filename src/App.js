import React, { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import UseReducerTailoredPage from "./components/UseReducerTailoredPage";
import PreLoader from "./components/PreLoader";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

export const appRoutes = [
  {
    path: "/",
    layout: lazy(() => import("./components/Layout")),
    component: lazy(() => import("./components/UseReducerTailoredPage")),
  },
  {
    path: "/CustomHookTailoredPage",
    layout: lazy(() => import("./components/Layout")),
    component: lazy(() => import("./components/CustomHookTailoredPage")),
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {appRoutes?.map((appRoute) => {
          const Layout = appRoute.layout;
          const Component = appRoute.component;

          return (
            <Route
              path={appRoute.path}
              element={
                <React.Suspense fallback={<PreLoader />}>
                  <Layout>
                    <Component />
                  </Layout>
                </React.Suspense>
              }
              key={appRoute.path}
            />
          );
        })}
        <Route
          path="/errorPage"
          element={
            <ErrorBoundary>
              <ErrorPage person={{}} />
            </ErrorBoundary>
          }
        />
        <Route path="/" element={<UseReducerTailoredPage />} />
        <Route path="404" element={<NoMatch homeRoute="/" />} />
        <Route path="*" element={<NoMatch homeRoute="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
