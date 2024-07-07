import React,{useState} from "react";
import Header from "./Header";

const Login = () => {
    const [isSigneduP,setIsSignedUp] = useState(true);

  return  (
    
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/cc9ca4c0-cb83-4175-9a10-97d1a99a1e9a/PK-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4a0aded4-19f1-4fd7-b6ba-f65282911095_large.jpg"
          alt="bg"
        />
      </div>

      <form className="absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white p-10 bg-opacity-80">

        <h1 className="text-3xl font-bold my-3">{isSigneduP ? "Sign in" : "Sign up"}</h1>

        
        {!isSigneduP && <input 
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-gray-600" 
        />}

        <input 
            type="text"
            placeholder="Email or Phone Number"
            className="p-3 my-4 w-full bg-gray-600"
         />

        <input 
            type="text"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-600" 
        />


        <button 
            type="button"
            className="p-3 mt-6 mb-3 w-full rounded-lg bg-red-700 w-4/12"
        >{isSigneduP ? "Sign in" : "Sign up"}</button>

        <p className="text-center">OR</p> 
    
        {
            isSigneduP &&
            <button 
            type="button"
            className="p-3 my-3 w-full rounded-lg bg-white bg-opacity-30 w-4/12"
            >Use Sign in Code</button>
        }

        <div>New to Netflix? <span className="cursor-pointer my-2"
        onClick={() => {setIsSignedUp(!isSigneduP)}}>
            {isSigneduP ? "Sign up now." : "Already a user"}</span></div>
      </form>
    </div>
  )
};

export default Login;
