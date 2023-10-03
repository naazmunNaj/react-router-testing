
import { Outlet } from "react-router-dom";
import Footer from './Pages/Footer/Footer';
import Header from "../Components/Header";

const MainLayOut = () => {
  return (
    <div>
        <Header></Header>
        <div className="min-h-screen">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
     
      ,
    </div>
  );
};

export default MainLayOut;
