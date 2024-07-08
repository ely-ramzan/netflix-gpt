import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(appStore => appStore.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed-in or up
          const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/");
        }
      });

      //called when component unmounts:
      return () => unsubscribe();
    }
    , []);
    const handleSignout = () => {
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }

  return (
    <div className="absolute px-6 py-8 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
      />
    
      {user && 
        <div className="flex">
            <div>
              <img className="w-24 -my-2" src={user?.photoURL} alt="userIcon" />
              <p className="mt-1 text-yellow-600 font-bold text-center">{user?.displayName}</p>
            </div>
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
