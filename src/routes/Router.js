import { lazy } from "react";
// import { Navigate } from "react-router-dom";

/****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const SignIn = lazy(() => import("../views/auth/SignIn"));
const SignUp = lazy(() => import("../views/auth/SignUp"));
const ResetPassword = lazy(() => import("../views/auth/ResetPassword"));
const Landing = lazy(() => import("../views/home/Landing"));
const ExampleCarousel = lazy(() => import("../components/Carousel"));
const UsersList = lazy(() => import("../views/auth/UsersList"));

/*****Routes******/
const Routes = [
  {
    path: "/",
    element: <Landing />,
    // children: [{ path: "/", element: <Navigate to="/" /> }],
  },
  { path: "/home", exact: true, element: <Landing /> },
  { path: "/dashboard", exact: true, element: <Landing /> },
  { path: "/signIn", exact: true, element: <SignIn /> },
  { path: "/signUp", exact: true, element: <SignUp /> },
  { path: "/profile", exact: true, element: <SignUp /> },
  { path: "/carousel", exact: true, element: <ExampleCarousel /> },
  { path: "/usersList", exact: true, element: <UsersList /> },
  { path: "/reset-password", exact: true, element: <ResetPassword /> },
];

export default Routes;
