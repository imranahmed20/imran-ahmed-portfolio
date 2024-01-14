import { Outlet } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const Main = () => {
    return (
        <div className="text-white" style={{ backgroundColor: "#0a101e" }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;