import Favourites from "../pages/Favourites/Favourites";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { Routes } from "../types/routes";

export const HOME_PATH = "/";
export const FAVOURITES_PATH = "/favourites";

export const mainLayoutRoutes: Routes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: FAVOURITES_PATH, Component: Favourites },
  ],
};
