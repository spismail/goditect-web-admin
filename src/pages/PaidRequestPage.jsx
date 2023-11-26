import React from "react";
import { useLottie } from "lottie-react";
import comingsoon from "../assets/lottie/comingsoonlottie.json";

function PaidRequestPage() {
  const style = {
    height: 300,
  };
  const options = {
    animationData: comingsoon,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);
  return <div className="flex justify-center items-center">{View}</div>;
}

export default PaidRequestPage;
