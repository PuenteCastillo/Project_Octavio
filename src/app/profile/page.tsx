"use client";
import Image from "next/image";
import ProfileHeader from "./components/Profile_Header";
import Profile_Service_Carousel from "./components/Profile_Service_Carousel";
import Gallary from "./components/Gallary";

export default function Home() {
  return (
    <main>
      <div className="container px-4 lg:px-0 lg:max-w-[895px] ">
        <div className="  xl:gap-10 md:gap-3 md:mt-1  py-20  ">
          {/* hero */}
          <ProfileHeader />

          <Profile_Service_Carousel />

          <Gallary />
        </div>
      </div>
    </main>
  );
}

// styles set .swiper-slide to a with of 150px
