
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div>
        <div className="rounded-xl p-2 w-[1300px] h-[90px] mt-8 bg-base-200">
          <h1 className=" mt-4 text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
            Please Register
          </h1>
        </div>
        <div className="flex items-center justify-center mb-36 mt-12">
          <div>
            {/* <img className="w-[600px]" src={registerGIF} /> */}
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
              <div className="form-control mt-6">
                <button className="border p-2 w-full rounded-xl text-green-500 bg-green-200 border-green-300 font-bold text-lg shadow-md transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default RegisterPage;