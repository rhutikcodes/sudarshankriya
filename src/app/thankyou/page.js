"use client";

import RightArrow from "@/Svg/RightArrow";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    //@ts-ignore
    window.fbq('track', 'Thank You Page Loaded');
  }, []);
  return (
    <div className="w-full grid place-items-center">
      <div className="flex flex-col items-center md:w-[390px] pt-10 min-h-[670px] gradient-bg">
        <div className="text-center text-orange-500 text-[34px] font-bold mt-12">Continue To Register</div>
        <div className="text-center w-80 mt-7">
          Please Click on the button below to <strong>complete your registration</strong>  / we have also <i>sent you the link to register on your WhatsApp Number</i>
        </div>
        <button className="text-white w-[330px] h-[42px] rounded bg-secondary mt-9" onClick={() => {
          //@ts-ignore
          window.fbq('track', 'Complete Registration Button Clicked');
          window.open("https://online.vvmvp.org/home/donate/?reg_for=qr&place=&Dtype=12", "_blank")
        }}>
          Complete Your Registration <RightArrow />
        </button>
        <button className="text-white w-[330px] h-[42px] rounded bg-secondary mt-6" onClick={() => {
          //@ts-ignore
          window.fbq('track', 'Join WhatsApp Group Button Clicked');
          window.open("https://chat.whatsapp.com/FeBowrHfFnQ9rJjisx9u5I", "_blank")
        }}>
          Join WhatsApp Group For Updates
        </button>
      </div>
    </div>

  );
}