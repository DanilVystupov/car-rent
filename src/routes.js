import { HOME, ABOUT, MODELS, TESTIMONIALS, TEAM, CONTACT } from "./utils/consts";
import { lazy } from "react";

const LazyHome = lazy(() => import('./Pages/Home'))
const LazyAbout = lazy(() => import('./Pages/About'))
const LazyModels = lazy(() => import('./Pages/Models'))
const LazyTestimonialsPage = lazy(() => import('./Pages/TestimonialsPage'))
const LazyTeam = lazy(() => import('./Pages/Team'))
const LazyContact = lazy(() => import('./Pages/Contact'))


const routes = [
    { path: HOME, element: <LazyHome />, index: true },
    { path: ABOUT, element: <LazyAbout /> },
    { path: MODELS, element: <LazyModels /> },
    { path: TESTIMONIALS, element: <LazyTestimonialsPage /> },
    { path: TEAM, element: <LazyTeam /> },
    { path: CONTACT, element: <LazyContact /> },
];

export default routes;
