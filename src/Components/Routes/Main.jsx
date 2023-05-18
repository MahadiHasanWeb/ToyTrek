import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../AuthenticationPart/Login";
import SignUp from "../AuthenticationPart/SignUp";

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
                element: <SignUp></SignUp>,
            },
            {
                path: '/addToys',
                element: <SignUp></SignUp>,
            },
            {
                path: '/myToys',
                element: <SignUp></SignUp>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/blogs',
                element: <SignUp></SignUp>,
            },
        ]
    },
]);