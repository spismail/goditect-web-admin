import { useLottie } from "lottie-react";
import NotfoundLottie from "../../assets/lottie/notfoundlottie.json";

const style = {
  height: 300,
};

function NotfoundUI() {
  const options = {
    animationData: NotfoundLottie,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
}

export default NotfoundUI;
