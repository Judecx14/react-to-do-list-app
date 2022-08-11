import './AuthNavigationButton.css'
import { Link } from "react-router-dom";

function AuthNavigationButton({ signUp = false, signIn = false }) {
  return (
    <nav className='flex columns-2 justify-around w-1/2 mx-auto mt-16 mb-5 animate__animated animate__fadeInUp'>
      <Link to="/" className={`${signUp ? "a-nav-disabled" : "a-nav-actived"}`}>Sign Up</Link>
      <Link to="/sign-in" className={`${signIn ? "a-nav-disabled" : "a-nav-actived"}`}>Sign In</Link>
    </nav>
  );
}

export default AuthNavigationButton;