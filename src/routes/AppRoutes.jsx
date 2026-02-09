import { Routes, Route } from "react-router-dom";

// import Pages 
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProjectDetails from "../pages/ProjectDetails";
import Navbar from "../components/Navbar";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

function AppRoutes(){
    return (
        
        <>
            {/* Navbar stays here so it shows on every page */}
            <Navbar /> 
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Product/:id" element={<ProjectDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    )
}

export default AppRoutes;
