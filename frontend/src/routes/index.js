import { Home, AddMovie } from "../pages";

const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: AddMovie,
    exact: true,
    path: "/add-movie",
  },
];

export default routes;
