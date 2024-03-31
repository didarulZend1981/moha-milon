import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h1 className="text-3xl center">Home for:{authInfo.name}</h1>
    </div>
  );
};

export default Home;