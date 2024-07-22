import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Public = () => {
  return (
    <div className="relative">
      <Header />
      <div className="mt-[92px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Public;
