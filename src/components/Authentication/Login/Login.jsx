import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginGIF from "../../../../public/loginLottie.json";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { googleSignIn, login } = useContext(AuthContext);
  const redirects = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Login Successfully", { position: "top-center" });
        redirects("/");
      })
      .catch((error) => {
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((result) => {
        toast.success("Login Successfully", { position: "top-center" });
        redirects("/");
      })
      .catch((error) => {
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  return (
    <div className="font-3">
      <Helmet>
        <title>GameLoom || Login</title>
      </Helmet>
      <div className="w-[1200px] ml-16 rounded-xl mt-24 mb-24 py-10">
        <h1
          style={{ animationDuration: "3s" }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 -mb-4 p-8 ml-[500px] animate__animated
         animate__backInDown "
        >
          Please Login
        </h1>
        <div className="flex items-center justify-between">
          <div>
            <Lottie className="w-[600px]" animationData={loginGIF}></Lottie>
          </div>

          <div className="card bg-base-100 border w-[600px] shadow-lg transition-all hover:shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
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
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
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
              <label className="label">
                <Link className="label-text-alt text-red-500 font-semibold text-base underline">
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
              <h1 className="font-bold text-slate-600 text-base">
                Don't have any account?
              </h1>
              <Link to={"/register"}>
                <h1 className="font-bold text-green-600 text-base">Register</h1>
              </Link>
            </div>
            <div className="divider px-9">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="border p-2 rounded-xl w-[530px] flex items-center gap-2 ml-8 mb-8 mt-2 text-lg shadow-md font-bold transition duration-500 ease-in-out transform hover:scale-105 active:scale-95"
            >
              <FcGoogle className="ml-40 text-2xl mt-1"></FcGoogle>
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
