import { Outlet } from "react-router-dom";
import Header from "./header/index";


const Main = () => {
  return (
      <>
      <Header/>
      <Outlet/>
      </>
  );
}

export default Main;
