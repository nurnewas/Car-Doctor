import { Outlet } from "react-router-dom";
import Footer from "../Pages/AllPageShow/Footer/Footer";
import Navbar from "../Pages/AllPageShow/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;