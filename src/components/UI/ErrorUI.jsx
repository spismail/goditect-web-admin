import { useLottie } from "lottie-react";
import ErrorLottie from "../../assets/lottie/errorlottie.json";

const style = {
  height: 300,
};

function ErrorUI() {
  const options = {
    animationData: ErrorLottie,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}

export default ErrorUI;
