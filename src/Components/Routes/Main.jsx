import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../AuthenticationPart/Login";
import SignUp from "../AuthenticationPart/SignUp";
import AllToys from "../Shared/NavComponents/AllToys";
import AddToys from "../Shared/NavComponents/AddToys";
import MyToys from "../Shared/NavComponents/MyToys";
import Blogs from "../Shared/NavComponents/Blogs";
import PrivateRoute from "../AuthenticationPart/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
        ]
    },
]);