import RightArrow from "@/Svg/RightArrow";
import { NextPage } from "next";

type ButtonProps = {
  onClick: () => void;
};

const Button: NextPage<ButtonProps> = ({ onClick }) => {
  return (
    <button className="text-white w-[330px] h-[42px] rounded bg-secondary mt-2" onClick={onClick}>
      Join WhatsApp Group Now <RightArrow />
    </button>
  );
};

export default Button;
