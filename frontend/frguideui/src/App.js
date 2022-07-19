import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Home.js";
import Login from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Login.js";
import Signup from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Signup.js";
import Routeprotected from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Routeprotected.js";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
    return (
        <Container style={{ width: "400px" }}>
            <Row>
                <Col>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route path="/home" element={
                                    <Routeprotected>
                                        <Home />
                                    </Routeprotected>
                                } />
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default App;