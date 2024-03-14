import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app-context/store.ts";
import "./index.css";
import { Routes } from "./app-utils/routes.ts";
import { SignUpPage } from "./app-components/SignUp/SignUpPage.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
  },
  {
    path: Routes.REGISTER,
    element: <SignUpPage />,
  },
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
