import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Home.js";
import Login from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Login.js";
import Signup from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Signup.js";
import Header from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/components/Header.js";
import Routeprotected from "/Volumes/Seagate/Github/friendly-guide/frontend/frguideui/src/pages/Routeprotected.js";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
    return (
        
                    <UserAuthContextProvider>
                        
                        <Routes>
                            <Route path="/home" element={
                                    <Routeprotected>
                                        <Header />
                                        <Home />
                                    </Routeprotected>
                                } />
                            <Route path="/" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </UserAuthContextProvider>
    );
}

export default App;