import { lazy } from "react";
// import Dashboard from "../Pages/Dashboard";


const Login = lazy(()=>import("../Components/Common/Login"))
const ServiceCategory = lazy(()=>import('../Pages/ServiceCategory'))
const Dashboard = lazy(()=>import('../Pages/Dashboard'))

export interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<React.FC> | React.FC;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: Login,
  },
  {
    path: "/service",
    element: ServiceCategory,
  },
  {
    path: "/dashboard",
    element: Dashboard,
  },


];