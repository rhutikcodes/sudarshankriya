'use client';
import RightArrow from "@/Svg/RightArrow";
import { filterPhoneNumber } from "@/utils/phoneUtils";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calender from "../Svg/Calender";
import Logo from "../Svg/Logo";

type Props = {};

const Landing: NextPage<Props> = ({ }) => {
  const router = useRouter()

  const [name, setName] = useState('');
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [hasDoneCourse, setHasDoneCourse] = useState('');
  const [nameError, setNameError] = useState('');
  const [whatsAppNumberError, setWhatsAppNumberError] = useState('');
  const [hasDoneCourseError, setHasDoneCourseError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //@ts-ignore
    window.fbq('track', 'Home Page Loaded');
  }, []);


  const handleSubmit = async () => {
    console.log({ name, whatsAppNumber, hasDoneCourse }, isLoading);
    if (validate() && !isLoading) {
      try {
        setIsLoading(true);
        const phone = filterPhoneNumber(whatsAppNumber);
        await fetch("https://dailyyoga.careergpt.workers.dev/webhook/mumbai", {
          method: "POST",
          body: JSON.stringify({
            name,
            phone,
            source: "website",
            hasDoneCourse,
            sheetId: "1WIBEPF21PZzh7S28CQ5x8zIhHiEpiSJyRHU1tYqedS8"
          }),
        });
        // Send AiSensy Template
        await fetch('/api/whatsapp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: phone,
            templateName: '21daymeditation_new',
            userName: name,
            parameters: [name],
            attributes: {
              name: name,
            },
            mediaUrl: {
              url: 'https://i.imgur.com/Ups2Yaz.jpg',
              filename: 'Poster.jpg',
            },
          })
        });

        setIsLoading(false);
        //@ts-ignore
        window.fbq('track', 'Submit Form');
        router.push("/thankyou")
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  }

  const validate = () => {
    let status = true;
    if (name === "") {
      setNameError("*required field");
      status = false;
    }
    if (whatsAppNumber === "" || whatsAppNumber.length < 8) {
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
      <div className="bg-primary w-[390px] h-[650px]">
        <div className="flex items-center justify-center flex-col mt-[54px] mb-[10px]">
          <div>
            <Logo />
          </div>
          <div className="font-normal text-lg ">Triveni Ashram, Pune</div>
          <div className="text-secondary font-bold  text-center">
            <span className="text-[46px] leading-[35px]">GYAN </span>
            <span className="text-[46px]">GANGA</span>
            <div className="text-center text-black text-opacity-70 text-sm font-normal">Exclusive Knowledge Session</div>
          </div>
          <div className="border border-t-secondary border-b-secondary border-l-transparent border-r-transparent px-1 my-[16px]">
            with{" "}
            <span className="font-semibold ">
              Gurudev Sri Sri Ravi Shankar Ji
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Calender />
            <span>6 February, 10:30 AM - 12:30 PM </span>
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
          <button className="text-white w-[330px] h-[42px] rounded bg-secondary mt-9" onClick={handleSubmit}>
            {isLoading ? <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg> : (
              <>
                Continue To Register <RightArrow />
              </>)}
          </button>

        </div>
      </div>

      <div className='relative flex flex-col items-center w-full md:w-[390px] pt-9 min-h-[310px]'>
        <div className="text-center text-neutral-700 text-lg font-semibold">Unlock Wisdom in Gyan Ganga! </div>
        <div className="w-[292px] text-center mt-4">
          <span className="text-neutral-700 text-lg font-light">Exclusive Session with <br /></span>
          <span className="text-[#E87D19] text-lg font-bold">Gurudev Sri Sri Ravi Shankar</span>
        </div>
        <Image className='mt-4' src='/images/gurudev.webp' alt={''} width={154} height={160} />
      </div>
      {/* Highlights */}
      <div className='relative flex flex-col items-center w-full md:w-[390px] pt-10 min-h-[670px]  gradient-bg'>
        <div className="text-center text-neutral-800 text-2xl font-bold">Highlights</div>
        <div className="w-[298px] text-black text-opacity-70 text-base font-normal leading-snug mt-7">
          <ul className="list-disc pl-5">
            <li>Get Profound Spiritual Wisdom</li>
            <li>Learn The Art of Being Happy & Joyful</li>
            <li>Dive Deeper into the Self</li>
            <li>Limited Seats!</li>
          </ul>
        </div>
        <div className="w-72 text-center text-neutral-700 text-lg font-semibold mt-10">with this profound knowledge session, you can</div>
        <div className='relative'>
          <Image src='/images/feat.webp' alt={''} width={370} height={325} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
