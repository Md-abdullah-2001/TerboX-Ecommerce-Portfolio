import { createBrowserRouter } from "react-router-dom";
import Brands from "../Components/Brands/Brands";
import Home from "../Components/Home/Home";
import Main from "./Main";

export const router = createBrowserRouter([
    {
        path: '/' , element: <Main></Main>,
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/brands', element: <Brands></Brands>},
        ]
    }

])
