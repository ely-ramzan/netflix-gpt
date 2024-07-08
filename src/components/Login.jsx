import React, { useState, useRef } from "react";
import Header from "./Header";
import validateForm from "../utils/validateForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSigneduP, setIsSignedUp] = useState(true);
  const [isSingnedOut,setIsSignedOut] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSign = () => {
    const validationResult = validateForm(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationResult);

    if (validationResult) return;

    if (!isSigneduP) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          setIsSignedOut(false);
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg"
          }).then(() => {
            // Profile updated!
          }).catch((error) => {
            // An error occurred
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
        
    } else {
      signInWithEmailAndPassword(auth,email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          setIsSignedOut(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header isSignedout={isSingnedOut} setIsSignedout={setIsSignedOut} />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/cc9ca4c0-cb83-4175-9a10-97d1a99a1e9a/PK-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4a0aded4-19f1-4fd7-b6ba-f65282911095_large.jpg"
          alt="bg"
        />
      </div>

      <form className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white p-10 bg-opacity-80">
        <h1 className="text-3xl font-bold my-3">
          {isSigneduP ? "Sign in" : "Sign up"}
        </h1>

        {!isSigneduP && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 my-4 w-full bg-gray-600"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-600"
        />

        <p className="text-red-700">{errorMessage}</p>

        <button
          type="button"
          className="p-3 mt-6 mb-3 w-full rounded-lg bg-red-700"
          onClick={handleSign}
        >
          {isSigneduP ? "Sign in" : "Sign up"}
        </button>

        <p className="text-center">OR</p>

        {isSigneduP && (
          <button
            type="button"
            className="p-3 my-3 w-full rounded-lg bg-white bg-opacity-30"
          >
            Use Sign in Code
          </button>
        )}

        <div>
          New to Netflix?{" "}
          <span
            className="cursor-pointer my-2"
            onClick={() => {
              setIsSignedUp(!isSigneduP);
            }}
          >
            {isSigneduP ? "Sign up now." : "Already a user"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
