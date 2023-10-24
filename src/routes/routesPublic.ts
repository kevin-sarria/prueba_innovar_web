import { AppRoutesInterface } from "../interfaces";
import { Details, Home } from "../pages";

export const routesPublic: AppRoutesInterface[] = [
    {
        path: '/home',
        Component: Home,
    },
    {
        path: '/details',
        Component: Details
    }
];