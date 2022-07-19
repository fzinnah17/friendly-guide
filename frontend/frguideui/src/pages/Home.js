import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Home.css";

const Home = () => {
  const { user } = useUserAuth();
  return (
    <>
    <div className="mainSection">
    </div>
    <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      
    </>
  );
};

export default Home;
