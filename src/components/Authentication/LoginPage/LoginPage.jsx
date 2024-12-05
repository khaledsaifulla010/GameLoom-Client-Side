import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import Lottie from "lottie-react";
import loginGIF from "../../../../public/loginLottie.json";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="font-3">
      <div className="w-[1200px] ml-2 rounded-xl mb-36 mt-12">
        <h1 className="  text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600 mb-4 p-8 ml-[600px]">
          Please Login
        </h1>
        <div className="flex items-center justify-between  ">
          <div>
            {/* <img className="w-[500px]" src={loginGIF} /> */}
            <Lottie className="w-[700px]" animationData={loginGIF}></Lottie>
          </div>

          <div className="card bg-base-100 border w-[600px] ">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered shadow-sm"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold text-xl">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered shadow-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute w-12 right-3 top-[56px]"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <label className="label ">
                <Link
                  to={"/forgetPassword"}
                  className="label-text-alt text-red-500 font-semibold text-base underline"
                >
                  Forgot password?
                </Link>
              </label>
              <div className="form-control mt-6">
                <button className="border p-2 w-full rounded-xl text-purple-500 bg-purple-200 border-purple-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                  Login
                </button>
              </div>
            </form>
            <div className="ml-8 -mt-4 flex items-center gap-2 p-2">
              <h1 className="font-bold text-slate-600 text-lg">
                Don't have any account?
              </h1>
              <Link to={"/register"}>
                <h1 className="font-bold text-green-600 text-lg">Register</h1>
              </Link>
            </div>
            <div className="divider px-9">OR</div>
            <button className="border p-2 rounded-xl w-[440px] flex items-center gap-2 ml-8 mb-8 mt-2 text-lg shadow-md font-bold transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
              <FcGoogle className="ml-28 text-2xl mt-1"></FcGoogle>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
