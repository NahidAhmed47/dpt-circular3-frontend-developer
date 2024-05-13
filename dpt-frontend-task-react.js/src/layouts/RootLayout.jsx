import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";

const RootLayout = () => {
 return (
  <>
   <Header></Header>
   <div className='max-w-7xl mx-auto'>
    <Outlet></Outlet>
   </div>
  </>
 );
};

export default RootLayout;
