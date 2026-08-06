import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProjectsPage from "../components/app/projects/ProjectsPage";
import NotFoundPage from "../components/helpers/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },

    {
        path: '/projects/:id',
        element: <ProjectsPage />,
    },

    {
        path: "*",
        element: <NotFoundPage />,
    }
])