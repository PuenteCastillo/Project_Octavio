"use client";
import Register_nav from "./comps/register_nav";
import Intro from "./comps/intro";
import Buisness from "./comps/buisness";
import Normal_user from "./comps/normal_user";
import { useState } from "react";

export default function Register() {
  const [slide, setSlide] = useState<number>(1);
  const [isBusiness, setIsBusiness] = useState<boolean>(false);

  const slideHandler = (newSlide: number) => {
    setSlide(newSlide);
  };

  const selectHandler = (Business: boolean) => {
    setIsBusiness(Business);
    slideHandler(2);
    console.log(isBusiness);
  };

  return (
    <main className=" w-screen min-h-screen md:p-10 flex bg-gray-200 dark:bg-theme_dark">
      <div className="m-auto min-h-screen md:min-h-fit  rounded-lg drop-shadow-xl  p-10 bg-white dark:bg-gray-800">
        <div className=" container  ">
          {/*  if slide is 1 show intro */}
          {slide === 1 && <Intro handler={selectHandler} />}
          {/*  if slide is 2 and isBusiness is true  show buisness */}
          {slide === 2 && isBusiness && <Buisness />}
          {/*  if slide is 2 and isBusiness is false  show buisness */}
          {slide === 2 && !isBusiness && <Normal_user />}
        </div>
      </div>
    </main>
  );
}

// styles set .swiper-slide to a with of 150px
