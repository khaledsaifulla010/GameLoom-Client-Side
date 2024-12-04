import slider1 from "../../../assets/images/sliders/slider1.jpeg";
import slider3 from "../../../assets/images/sliders/slider3.jpeg";
import slider4 from "../../../assets/images/sliders/slider4.jpeg";
import slider5 from "../../../assets/images/sliders/slider5.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="mt-12">
      <div className="carousel w-[1400px] ml-12 font-1">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            className="w-full h-[600px] rounded-xl opacity-90"
            src={slider1}
            alt=""
          />

          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <span
            className="absolute ml-[100px] mt-[160px]"
            style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}
          >
            <Typewriter
              words={["Unleash Your Inner Gamer With GameLoom Today"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={4000}
              cursor
              cursorStyle="."
            />
          </span>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img className="w-full h-[600px] rounded-xl" src={slider5} alt="" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <span
            className="absolute ml-[100px] mt-[160px]"
            style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}
          >
            <Typewriter
              words={["Game Anytime, Anywhere with GameLoom"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={4000}
              cursor
              cursorStyle="."
            />
          </span>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img className="w-full h-[600px] rounded-xl" src={slider3} alt="" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
          <span
            className="absolute ml-[100px] mt-[160px]"
            style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}
          >
            <Typewriter
              words={["Built by Gamers, Crafted for Ultimate Experience"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={4000}
              cursor
              cursorStyle="."
            />
          </span>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img className="w-full h-[600px] rounded-xl" src={slider4} alt="" />
          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <span
            className="absolute ml-[100px] mt-[160px]"
            style={{ color: "white", fontWeight: "bold", fontSize: "100px" }}
          >
            <Typewriter
              words={["Level Up Your Gaming Experience With US"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={120}
              delaySpeed={4000}
              cursor
              cursorStyle="."
            />
          </span>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
