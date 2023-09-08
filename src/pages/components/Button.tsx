import RightArrow from "@/Svg/RightArrow";
import { NextPage } from "next";

type ButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

const Button: NextPage<ButtonProps> = ({ onClick, isLoading }) => {
  return (
    <button className="text-white w-[330px] h-[42px] rounded bg-secondary flex justify-center items-center " onClick={onClick}>

      {isLoading ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 2.965 7.926l1.176-1.25a8.126 8.126 0 004.859-3.385z"></path>
      </svg>
        : <span>Join WhatsApp Group Now <RightArrow /></span>}

    </button>
  );
};

export default Button;
