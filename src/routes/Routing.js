import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from '../components/SignUp/SignUp';
import SignIn from '../components/SignIn/SignIn';
import Home from '../components/Home/Home';
import useUser from "../hooks/useUser";

function Routing() {
  const { isLogged } = useUser();
  
  return (
    <Routes>
      <Route path="/" element={isLogged ? (<Navigate to="/home" />) : (<SignUp />)} />
      <Route path="/sign-in" element={isLogged ? (<Navigate to="/home" />) : (<SignIn />)} />
      <Route path="/home" element={isLogged ? (<Home />) : (<Navigate to="/sign-in" />)} />
    </Routes>
  );
}

export default Routing;