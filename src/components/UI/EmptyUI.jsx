import { useLottie } from "lottie-react";
import EmptyLottie from "../../assets/lottie/emptylottie.json";

const style = {
  height: 300,
};

function EmptyUI() {
  const options = {
    animationData: EmptyLottie,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}

export default EmptyUI;
