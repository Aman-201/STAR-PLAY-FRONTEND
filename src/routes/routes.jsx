import React, { Children } from "react";
import {RouterProvider , createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           { path: "/",
            element:(<h1>Om Gan Ganpate Namah:</h1>)}
        ]

}
])
