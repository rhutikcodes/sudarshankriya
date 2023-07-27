'use client';
import DownArrow from "@/Svg/DownArrow";
import UpArrow from "@/Svg/UpArrow";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calender from "../Svg/Calender";
import Logo from "../Svg/Logo";
import Rashmin from "../app/Rashmin.png";
import Button from "./components/Button";
import ScheduleList from "./components/ScheduleList";

type Props = {};

const Landing: NextPage<Props> = ({ }) => {
  const router = useRouter()

  const [name, setName] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [city, setCity] = useState('');
  const [hasDoneCourse, setHasDoneCourse] = useState('');
  const [nameError, setNameError] = useState('');
  const [whatsAppNumberError, setWhatsAppNumberError] = useState('');
  const [cityError, setCityError] = useState('');
  const [hasDoneCourseError, setHasDoneCourseError] = useState('');

  useEffect(() => {
    //@ts-ignore
    window.fbq('track', 'Home Page Loaded');
  }, []);


  const handleSubmit = async () => {
    console.log({ name, whatsAppNumber, city, hasDoneCourse });
    if (validate()) {
      // send to make.com
      try {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("whatsapp", whatsAppNumber);
        formData.append("city", city);
        formData.append("hasDoneCourse", hasDoneCourse);
        await fetch("https://hook.eu2.make.com/2egoy29ug7hkwf86tgi21px5sqliwkhg", {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.log("🚀 ~ file: page.js:35 ~ formSubmitHandler ~ error:", error);
      }

      // redirect to whatsapp
      let whatsappLink;
      if (city === 'pune' && hasDoneCourse === 'Yes') {
        whatsappLink = "https://chat.whatsapp.com/E1Ok9ej52DzCKyVlbKcvgN"
      }
      else if (city === 'pune' && hasDoneCourse === 'No') {
        whatsappLink = "https://chat.whatsapp.com/JZ1WjQEdcHMImnN5OkvIWZ"
      }
      else if (city === 'mumbai' && hasDoneCourse === 'Yes') {
        whatsappLink = "https://chat.whatsapp.com/DR5xrn6zSOp6mCTY2NUvz8"
      }
      else if (city === 'mumbai' && hasDoneCourse === 'No') {
        whatsappLink = "https://chat.whatsapp.com/HyiBYkxWaLs5diNuhcSSnD"
      }
      else if (city === 'other' && hasDoneCourse === 'Yes') {
        whatsappLink = "https://chat.whatsapp.com/HoqBXsXanZn4D0psFMrt3y"
      }
      else if (city === 'other' && hasDoneCourse === 'No') {
        whatsappLink = "https://chat.whatsapp.com/BWYgRiPfnwIDeWrZP1djQ4"
      }
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
    if (city === "") {
      setCityError("*required field");
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
      <div className="bg-primary w-[390px] h-[756px]">
        <div className="flex items-center justify-center flex-col mt-[54px] mb-[10px]">
          <div>
            <Logo />
          </div>
          <div className="font-normal text-lg ">Residential</div>
          <div className="text-secondary font-bold  text-center my-2">
            <span className="text-[46px] leading-[50px]">Happiness </span>{" "}
            <span className="text-[46px]">Program</span>
          </div>
          <div className="border border-t-secondary border-b-secondary border-l-transparent border-r-transparent px-1 my-[16px]">
            at{" "}
            <span className="font-semibold ">
              Art of Living Triveni Ashram, Pune
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span>
              <Calender />
            </span>
            <span>13 - 15 August 2023 </span>
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

          <div className="flex flex-col w-[330px]">
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
          </div>

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

      <div
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
      </div>

      <div className="bg-primary w-[390px] h-[689px]">
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
          <li>
            Fulfilled Morning Yoga, Blissful Meditations & Musical Evenings
          </li>
          <li>Youth Activities, Games & Interactive Group Processes</li>
          <li>Opportunity to network with happy minds</li>
          <li>Multiple accommodation options available</li>
        </ul>
        <div className="w-full flex justify-center my-5">
          <Button onClick={handleSubmit} />
        </div>
      </div>

      <div className="w-[390px] ">
        <h2 className="text-secondary font-bold text-center text-3xl mt-[50px] mb-[16px]">
          Schedule
        </h2>
        <div className="space-y-4">
          <div className="flex justify-center">
            <ScheduleList
              date="13 August"
              list={[
                "Reporting by 4 pm",
                "Session starts at 5 pm",
                "Understanding body - breath - mind",
                "Learning & Experiencing Sudarshan Kriya",
                "Dinner at 8 pm",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <ScheduleList
              date="14 August"
              list={[
                "Morning Yoga at 6:30 am",
                "Breakfast at 8:30 am",
                "Morning Session starts at 10 am",
                "Formula of Happy & Stress Free Life",
                "Lunch at 1 pm",
                "Afternoon Session starts at 2:30 pm",
                "Practical tips to reduce anxiety & frustration",
                "Ashram tour at 5 pm - River front, Campus, Goshala & much more...",
                "Dinner at 7:30 pm followed by Games & Musical Evening",
              ]}
            />
          </div>
          <div className="flex justify-center">
            <ScheduleList
              date="15 August"
              list={[
                "Morning Yoga at 6:30 am followed by Independance Day Celebration",
                "Breakfast at 8:30 am",
                "Morning Session starts at 10 am",
                "Dive deeper into the self",
                "Home going instructions",
                "Lunch at 1 pm",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="w-[390px]  bg-primary h-[740px]">
        <div className="text-center  my-8">
          <Button onClick={handleSubmit} />
        </div>
        <h2 className="text-secondary text-center text-4xl font-bold">
          Photo Gallery
        </h2>
        <div className="w-full relative px-4 ">
          <Image
            className="object-cover object-center h-[250px] w-[250px]  absolute top-[200px] left-[0px] rounded-full z-[5]"
            src={'/2.png'}
            width={250}
            height={250}
            alt=""
          />
          <Image
            className="object-cover h-[200px] z-[1] w-[200px] rounded-full absolute top-[50px]"
            src={'/2.png'}
            width={250}
            height={250}
            alt=""
          />
          <Image
            className="object-cover h-[195px] z-[2] w-[195px] rounded-full absolute top-[80px] left-[135px]"
            src={'/3.jpeg'}
            width={250}
            height={250}
            alt=""
          />
          <Image
            className="object-cover h-[190px] z-[3] w-[190px] rounded-full absolute top-[210px] left-[200px]"
            src={'/4.jpeg'}
            width={250}
            height={250}
            alt=""
          />
          <Image
            className="object-cover h-[190px] z-[4] w-[190px] rounded-full absolute top-[360px] left-[160px]"
            src={'/5.png'}
            width={250}
            height={250}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
