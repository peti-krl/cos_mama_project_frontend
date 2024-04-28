import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app-context/store.ts";
import { Routes } from "./app-utils/routes.ts";
import { Profile } from "./app-components/ProfilePage/Profile.tsx";
import "./index.css";
import { SignInPage } from "./app-components/SignIn/SignInPage.tsx";
import { SignUpPage } from "./app-components/SignUp/SignUpPage.tsx";
import AboutPage from "./app-components/About/AboutPage.tsx";
import PartnersPage from "./app-components/Partners/PartnersPage.tsx";
import Events from "./app-components/home/Events.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
  },
  {
    path: Routes.LOGIN,
    element: <SignInPage />,
  },
  {
    path: Routes.REGISTER,
    element: <SignUpPage />,
  },
  {
    path: Routes.PROFILE,
    element: <Profile />,
  },
  {
    path: Routes.ABOUT,
    element: <AboutPage />
  },
  {
    path: Routes.PARTNERS,
    element: <PartnersPage children={undefined} />
  },
  {
    path: Routes.EVENTS,
    element: <Events />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  </Provider>
);
