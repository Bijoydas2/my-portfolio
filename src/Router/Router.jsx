import { createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Components/ProjectsDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/projects/:id',
         Component:ProjectDetails
      }
    ]
  },
]);
