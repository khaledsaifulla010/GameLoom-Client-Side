import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";

import registerLottie from "../../../../public/registerLottie.json";
import { Link } from "react-router-dom";

const Register= () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="font-3">
      <div className="w-[1200px] ml-28 rounded-xl  mt-12">
        <h1 className="  text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-600 -mb-6 p-8 ml-[500px]">
          Please Register
        </h1>
        <div className="flex items-center justify-center mb-36 mt-12">
          <div>
            <Lottie
              className="w-[500px]"
              animationData={registerLottie}
            ></Lottie>
          </div>

          <div className="card bg-base-100 border w-[600px] shadow-lg">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered shadow-sm"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo_URL"
                  placeholder="Enter Your Photo URL"
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
              <div className="  flex items-center gap-2 p-2">
                <h1 className="font-bold text-slate-600 text-base">
                  Want To Login?
                </h1>
                <Link to={"/login"}>
                  <h1 className="font-bold text-purple-600 text-base">Login</h1>
                </Link>
              </div>
              <div className="form-control mt-6">
                <button className="border p-2 w-full rounded-xl text-green-500 bg-green-200 border-green-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
