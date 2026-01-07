import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {path:"", element: <Home/>}
    ]
  },
])
