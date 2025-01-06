import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registerLottie from "../../../../public/registerLottie.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register } = useContext(AuthContext);
  const redirects = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo_URL = e.target.photo_URL.value;
    const password = e.target.password.value;

    // Password Validations //

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Atleast one Uppercase, one Lowercase Letter & minimum Six Characters!",
        { position: "top-center" }
      );
      return;
    }

    // Register
    register(email, password)
      .then((result) => {
        const user = result.user;

        // Update Profile
        const profile = {
          displayName: name,
          photoURL: photo_URL,
        };
        return updateProfile(user, profile);
      })
      .then(() => {
        toast.success("Register Successfully!", {
          position: "top-center",
        });
        redirects("/");
      })
      .catch((error) => {
        toast.error("Something Went Wrong!", { position: "top-center" });
      });
  };

  return (
    <div className="font-3">
      <Helmet>
        <title>GameLoom || Register</title>
      </Helmet>
      <div className="w-[1200px] ml-28 rounded-xl mt-24 mb-24">
        <h1
          style={{ animationDuration: "4s" }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-purple-600 -mb-6 p-8 ml-[500px] animate__animated
         animate__backInDown"
        >
          Please Register
        </h1>
        <div className="flex items-center justify-center  mt-12">
          {/* Lottie Animation */}
          <div>
            <Lottie
              className="w-[500px]"
              animationData={registerLottie}
            ></Lottie>
          </div>

          {/* Registration Card */}
          <div className="card bg-base-100 border w-[600px] shadow-lg transition-all hover:shadow-2xl rounded-lg">
            <form className="card-body" onSubmit={handleRegister}>
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                  required
                />
              </div>
              {/* Email Field */}
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
              {/* Photo URL Field */}
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
                  className="input input-bordered shadow-lg transition-all hover:shadow-xl focus:shadow-xl"
                  required
                />
              </div>
              {/* Password Field */}
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
                  className="btn btn-xs absolute w-12 right-3 top-[56px] transition duration-300 ease-in-out hover:scale-105"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {/* Login Link */}
              <div className="flex items-center gap-2 p-2 mt-4">
                <h1 className="font-bold text-slate-600 text-base">
                  Want To Login?
                </h1>
                <Link to={"/login"}>
                  <h1 className="font-bold text-purple-600 text-base underline hover:text-purple-800 transition duration-300">
                    Login
                  </h1>
                </Link>
              </div>
              {/* Submit Button */}
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
