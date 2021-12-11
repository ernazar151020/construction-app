import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import AboutUs from "../pages/AboutUs/AboutUs";
import Gallery from "../pages/Gallery/Gallery";
import Projects from "../pages/Projects/Projects";
import Contacts from "../pages/Contacts/Contacts";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetial";
import ProjectsInMap from "../pages/ProjectsMap/ProjectsInMap";

const PageRoutes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/map" element={<ProjectsInMap />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRoutes
