import Lottie from "lottie-react";
import errorLottie from "../../public/404Lottie.json";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Lottie
          className="max-w-[1000px] mx-auto ml-36"
          animationData={errorLottie}
        ></Lottie>
      </div>
    </div>
  );
};

export default ErrorPage;
