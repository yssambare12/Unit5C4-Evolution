import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { PrivateRoute } from "./PrivateRoute";
export const Router = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/dashboard'} element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>

        </>
    );
};