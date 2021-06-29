import {IRoute} from "../models/IRoute";
import HomePage from "../Pages/HomePage";
import LocationPage from "../Pages/LocationPage";
import EpisodesPage from "../Pages/EpisodesPage";
import CharacterPage from "../Pages/CharacterPage";

export default [
    {
        component: HomePage,
        name: 'home',
        path: '/rick-and-morty-api',
        exact: true
    },
    {
        component: CharacterPage,
        name: 'character-id',
        path: '/character/:id',
        exact: true
    },
    {
        component: LocationPage,
        name: 'location-id',
        path: '/location/:id',
        exact: true
    },
    {
        component: EpisodesPage,
        name: 'episodes',
        path: '/episodes',
        exact: true
    }

] as IRoute[];