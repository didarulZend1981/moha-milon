import { Outlet } from "react-router-dom";
import NevBar from "./NevBar";


const Root = () => {
  return (
    <div>
      <NevBar></NevBar>
        <Outlet></Outlet>
    </div>
  );
};

export default Root;