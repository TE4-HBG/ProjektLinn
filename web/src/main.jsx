import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { rootRoute } from "./routes/index.jsx";
import { PocketbaseProvider } from "./components/PocketbaseProvider";

const queryClient = new QueryClient();

const router = createBrowserRouter([rootRoute]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PocketbaseProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </PocketbaseProvider>
    </React.StrictMode>
);
