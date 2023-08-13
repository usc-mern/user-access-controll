import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/ErrorPage";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyTeams from "../pages/Dashboard/MyTeams/MyTeams";
import InvitedTeams from "../pages/Dashboard/InvitedTeams/InvitedTeams";
import Profile from "../pages/Dashboard/Profile/Profile";
import CreateAccount from "../pages/Dashboard/CreateAccount/CreateAccount";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'my-teams',
                element: <MyTeams />
            },
            {
                path: 'invited-teams',
                element: <InvitedTeams />
            },
            {
                path: 'create-account',
                element: <CreateAccount />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ]
    }

])
