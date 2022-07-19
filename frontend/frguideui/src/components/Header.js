import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/components/Header.css";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar className = "head" >
        <Container>
          <div className="logo">
          <h2 class="title">
    <span class="title-word title-word-1">FRIENDLY </span> 
    <span class="title-word title-word-2"> GUIDE</span>
    {/* <span class="title-word title-word-3">my</span>
    <span class="title-word title-word-4">text</span> */}
  </h2>
            {/* <h2>
            Friendly Guide
              </h2> */}
              </div>
          <Nav className="logoutbutton">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header