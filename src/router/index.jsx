import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Header from "../pages/common/header";
import Login from "../pages/login";

const Routers = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        </>
    );
};

export default Routers;