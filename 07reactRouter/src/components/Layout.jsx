import React from "react";
import Header from "./Header/header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}