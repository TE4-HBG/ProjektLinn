import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { rootRoute } from "./routes/index.jsx";
import { PocketbaseProvider } from "./components/PocketbaseProvider";
import { adminRoute } from "./routes/admin_page";
import "./index.css";

const queryClient = new QueryClient();
const router = createBrowserRouter([rootRoute, adminRoute]);

/* Router */
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PocketbaseProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </PocketbaseProvider>
    </React.StrictMode>
);
