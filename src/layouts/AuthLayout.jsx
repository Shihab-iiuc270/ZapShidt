import { Outlet } from "react-router";
import Logo from "../components/Logo/Logo";
import authImage from "../assets/authImage-removebg-preview.png"
import Footer from "../pages/Shared/Footer/footer";
const AuthLayout = () => {

return (

<div className="max-w-7xl mx-auto px-4">

    <Logo />

    <div className="flex flex-col lg:flex-row py-10 items-center gap-10">


        <div className="flex-1 w-full">

            <Outlet />

        </div>


        <div className="flex-1 w-full flex justify-center">

            <img  
            className="w-full max-w-lg shrink-0" 
            src={authImage} 
            alt="" />

        </div>


    </div>


    <Footer />

</div>

);

};

export default AuthLayout;