import RightArrow from "@/Svg/RightArrow";
import { NextPage } from "next";

type ButtonProps = {
  onClick: () => void;
  text: string
  showIcon: boolean
};

const Button: NextPage<ButtonProps> = ({ onClick, text, showIcon }) => {
  return (
    <button className="text-white w-[330px] h-[42px] rounded bg-secondary" onClick={onClick}>
      {text} {showIcon && <RightArrow />}
    </button>
  );
};

export default Button;
