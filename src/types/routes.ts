import { PropsWithChildren } from "react";

type Route = {
  path: "/" | "/favorites";
  Component: () => JSX.Element;
};

export type Routes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: Route[];
};
