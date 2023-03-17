import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { Routes } from "../types/routes";

export const HOME_PATH = "/";
export const FAVORITES_PATH = "/favorites";

export const mainLayoutRoutes: Routes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: FAVORITES_PATH, Component: Favorites },
  ],
};
