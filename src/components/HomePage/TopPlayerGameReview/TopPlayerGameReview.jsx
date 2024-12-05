import { useEffect, useState } from "react";


const TopPlayerGameReview = () => {


    const [review, setReview]= useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/topPlayerGameReview")
          .then((res) => res.json())
          .then((data) => console.log(data));
    },[])

    return (
      <div className="font-1 mt-36 mb-72">
        <h1
          className="text-5xl font-extrabold text-center text-sky-700 border w-[650px] ml-[430px] p-2 rounded-xl border-sky-200 bg-sky-50 animate__animated animate__tada animate__infinite"
          style={{ animationDuration: "4s" }}
        >
          Top Player Recommendations
        </h1>
      </div>
    );
};

export default TopPlayerGameReview;