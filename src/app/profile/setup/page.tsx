"use client";
import Image from "next/image";
import styles from "./setup.module.scss";
import SlideOne from "./slides/SlideOne";
import SlideBusinessOne from "./slides/SlideBusinessOne";
import SlideUserOne from "./slides/SlideUserOne";
import SlideUserTwo from "./slides/SlideUserTwo";
import { useState } from "react";

const example = {
  isBusiness: true,
  occupation: "Software Engineer",
  address: {},
  phone: "123-456-7890",
};

export default function Home() {
  const [slide, setSlide] = useState(1);
  const [profileData, setprofileData] = useState(example);

  const handleChange = ({
    nextSlide,
    data,
  }: {
    nextSlide: number;
    data: any;
  }) => {
    setSlide(nextSlide);
    console.log("data :", data);
    const key = data.Type;
    const value = data[key];

    // after state is set, log it to see if it is correct
    setprofileData((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });

    console.log(profileData);
  };

  const logData = () => {
    console.log(profileData);
  };

  return (
    <main className={styles.setup_parent}>
      <div className={styles.setup_child}>
        {slide === 1 && <SlideOne handler={handleChange} />}
        {slide === 2 && profileData.isBusiness && (
          <SlideBusinessOne handler={handleChange} />
        )}
        {slide === 2 && !profileData.isBusiness && (
          <SlideUserOne handler={handleChange} />
        )}
        {slide === 3 && !profileData.isBusiness && (
          <SlideUserTwo handler={logData} />
        )}
      </div>
    </main>
  );
}
