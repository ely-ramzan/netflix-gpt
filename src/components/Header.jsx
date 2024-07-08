import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = ({isSignedout,setIsSignedout}) => {
    const navigate = useNavigate();
    
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/"); 
        setIsSignedout(true); 
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-6 py-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
    
      {!isSignedout && 
        <div>
            <button
            type="button"
            className="font-bold text-red-700 text-4xl font-serif px-8 py-3"
            onClick={handleSignout}
            >
            Sign out
            </button>
      </div>}
    </div>
  );
};

export default Header;
