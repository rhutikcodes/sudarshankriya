'use client';
import DownArrow from "@/Svg/DownArrow";
import UpArrow from "@/Svg/UpArrow";
import Money from "@/Svg/money";
import { filterPhoneNumber } from "@/utils/phoneUtils";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calender from "../Svg/Calender";
import Logo from "../Svg/Logo";
import Button from "./components/Button";

type Props = {};

const Landing: NextPage<Props> = ({ }) => {
  const router = useRouter()

  const [name, setName] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [hasDoneCourse, setHasDoneCourse] = useState('');
  const [nameError, setNameError] = useState('');
  const [whatsAppNumberError, setWhatsAppNumberError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasDoneCourseError, setHasDoneCourseError] = useState('');

  useEffect(() => {
    //@ts-ignore
    window.fbq('track', 'Home Page Loaded');
  }, []);


  const handleSubmit = async () => {
    console.log({ name, whatsAppNumber, hasDoneCourse });
    const whatsappLink = 'https://chat.whatsapp.com/EATaRjRQoUkKfANjdZ5dH5';

    if (validate() && !isLoading) {
      try {
        setIsLoading(true);
        const phone = filterPhoneNumber(whatsAppNumber);
        console.log("🚀 ~ file: landing.tsx:41 ~ handleSubmit ~ phone:", phone)
        await fetch("https://dailyyoga.careergpt.workers.dev/webhook/mumbai", {
          method: "POST",
          body: JSON.stringify({
            name,
            phone,
            source: "website",
            hasDoneCourse,
            sheetId: "12j-CZzc9hdd2b4_AICcvBzB9wgQWtGnXXCr8E_96j1M"
          }),
        });
      } catch (error) {
        console.log("🚀 ~ file: page.js:35 ~ formSubmitHandler ~ error:", error);
      }
      setIsLoading(false);
      //@ts-ignore
      window.fbq('track', 'Submit Form');
      router.push(`/thankyou?link=${whatsappLink}`)
    }
  }

  const validate = () => {
    let status = true;
    if (name === "") {
      setNameError("*required field");
      status = false;
    }
    if (whatsAppNumber === "") {
      setWhatsAppNumberError("*required field");
      status = false;
    }
    if (hasDoneCourse === "") {
      setHasDoneCourseError("*required field");
      status = false;
    }
    return status;
  };

  return (
    <div className="w-full grid place-items-center">
      {/* top-design */}
      <div className="bg-primary w-[390px] h-[680px]">
        <div className="flex items-center justify-center flex-col mt-[54px] mb-[10px]">
          <div>
            <Logo />
          </div>
          <div className="font-normal text-lg ">Offline</div>
          <div className="text-secondary font-bold  text-center my-2">
            <span className="text-[46px] leading-[50px]">Happiness </span>{" "}
            <span className="text-[46px]">Program</span>
          </div>
          <div className="border border-t-secondary border-b-secondary border-l-transparent border-r-transparent px-1 my-[16px]">
            at{" "}
            <span className="font-semibold ">
              The Art of Living, Malad (West)
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Calender />
            <div className="ml-2"> 25 - 27 August 2023 </div>
          </div>
          <div className="flex items-center justify-center mt-1">

            <Money />

            <div className="ml-2" >Donation- ₹3200/- </div>
          </div>
        </div>
        {/* form-start */}
        <div className="flex flex-col justify-center items-center space-y-4 mt-[20px]">
          <div className="flex flex-col w-[330px] ">
            <label className="text-sm mb-1 opacity-80" htmlFor="">
              Name
            </label>
            <input
              className="border border-gray-200 rounded h-[42px] p-2"
              type="text"
              name="name"
              id="name"
              placeholder="  Enter Name"
              value={name}
              onChange={e => {
                setNameError("");
                return setName(e.target.value);
              }}
            />
            {nameError && (
              <div className="xl:text-sm text-xs text-red-500">
                {nameError}
              </div>
            )}
          </div>

          <div className="flex flex-col w-[330px]">
            <label className="text-sm mb-1 opacity-80" htmlFor="">
              WhatsApp Number
            </label>
            <input
              className=" h-[42px] border border-gray-200 rounded p-2"
              name="whatsAppNumber"
              id="whatsAppNumber"
              placeholder="  Enter WhatsApp Number"
              value={whatsAppNumber}
              onChange={e => {
                setWhatsAppNumberError("");
                return setWhatsAppNumber(e.target.value);
              }}
            />
            {whatsAppNumberError && (
              <div className="xl:text-sm text-xs text-red-500">
                {whatsAppNumberError}
              </div>
            )}
          </div>

          {/* <div className="flex flex-col w-[330px]">
            <label className="mb-1 opacity-80" htmlFor="city">
              City
            </label>
            <select className="h-[42px] border rounded"
              name="city"
              id="city"
              value={city}
              onChange={e => {
                setCityError("");
                return setCity(e.target.value);
              }}>
              <option value="" disabled selected>Select a City</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
              <option value="other">Other</option>
            </select>
            {cityError && (
              <div className="xl:text-sm text-xs text-red-500">
                {cityError}
              </div>
            )}
          </div> */}

          <div className="flex flex-col w-[330px]">
            <label className="mb-1 opacity-80" htmlFor="ArtOfLiving">
              Have you done Art of Living Course?
            </label>
            <select
              className=" h-[42px] border border-gray-200 rounded"
              name="ArtOfLiving"
              id="ArtOfLiving"
              value={hasDoneCourse}
              onChange={e => {
                setHasDoneCourseError("");
                return setHasDoneCourse(e.target.value);
              }}
            >
              <option value="" disabled selected>Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {hasDoneCourseError && (
              <div className="xl:text-sm text-xs text-red-500">
                {hasDoneCourseError}
              </div>
            )}
          </div>
          <Button onClick={handleSubmit} />
        </div>
      </div>

      {/* <div
        className="w-[390px] flex items-center justify-center my-12 
      "
      >
        <div className="space-y-1 pl-1">
          <span className="font-bold text-xs opacity-70">Faculty</span>
          <h1 className="font-semibold text-xl text-secondary">
            Rashmin Pulekar
          </h1>
          <p className="text-xs font-normal opacity-70">
            TEDx Speaker, Youth Coach, International Art of Living Faculty
          </p>
          <h1 className="font-semibold text-xl   text-secondary">& Team</h1>
        </div>
        <div className="w-[270px] h-[170px]">
          <div className="rounded-full  bg-primary w-[150px] h-[150px] relative">
            <Image
              className="rounded-full absolute top-3 left-4"
              src={Rashmin}
              height={150}
              width={150}
              alt=""
            />
            <div
              className="bg-[#FFCB9B] w-8 h-8 rounded-full
          absolute bottom-[-14px] right-[0px]"
            ></div>
          </div>
        </div>
      </div> */}

      <div className="bg-primary w-[390px] h-[600px]">
        <h2
          className="text-secondary text-3xl font-bold mt-[60px] mb-[16px] flex
           justify-center"
        >
          Highlights
        </h2>
        <ul className="list-disc pl-8 space-y-7 text-base opacity-70 ">
          <li>
            Learn & Experience the world’s most powerful breathing technique -{" "}
            <span className="font-bold">Sudarshan Kriya</span>
          </li>
          <div className="bg-white w-[306px] py-3 px-5 rounded">
            <h2 className="pl-6 my-2">Benefits of Sudarshan Kriya</h2>
            <div className="flex justify-between">
              <div
                className="flex w-1/2
              "
              >
                <span>
                  <UpArrow />
                </span>
                <span
                  className="pl-1
                "
                >
                  Concentration Clarity of Mind Confidence
                </span>
              </div>
              <div className="flex w1/2">
                <span>
                  <DownArrow />
                </span>
                <span
                  className="pl-1
                "
                >
                  Stress <br /> Anxiety <br /> Overthinking
                </span>
              </div>
            </div>
          </div>
          {/* <li>
            Fulfilled Morning Yoga, Blissful Meditations & Musical Evenings
          </li> */}
          <li>Youth Activities, Games & Interactive Group Processes</li>
          <li>Opportunity to network with happy minds</li>
          {/* <li>Multiple accommodation options available</li> */}
        </ul>
        <div className="w-full flex justify-center my-5">
          <Button onClick={handleSubmit} />
        </div>
      </div>

    </div>
  );
};

export default Landing;
