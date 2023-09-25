import Image from "next/image";
import FeatureCard from "./components/cards/FeatureCard";
import Recomended from "./components/cards/Recomended";
import LoginCTA from "./components/cards/LoginCTA";

export default function Home() {
  return (
    <main>
      <div className="container px-4 lg:px-0 lg:max-w-[895px] ">
        <div className=" flex max-lg:flex-col xl:gap-10 md:gap-3 md:mt-1  py-10 ">
          <div className="md:max-w-[510px] mx-auto flex-1 xl:space-y-6 space-y-3 relative  w-full ">
            {/* //! Examples */}
            <FeatureCard
              user="Jese Leos"
              avatar="https://i.pravatar.cc/550"
              title="How to quickly deploy a static website"
              featuredImage="https://i.pravatar.cc/650"
              description="Photography is the art of capturing light with a camera. It can be used to create images that tell stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be a hobby, a profession, or a passion. 📷"
            />
            <FeatureCard
              user="Tio Puente"
              avatar="https://i.pravatar.cc/550"
              title="How to quickly deploy a static website"
              description="Photography is the art of capturing light with a camera. It can be used to create images that tell stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be a hobby, a profession, or a passion. 📷"
            />
            <FeatureCard
              user="Tio Puente"
              avatar="https://i.pravatar.cc/550"
              featuredImage="https://i.pravatar.cc/700"
              title="How to quickly deploy a static website"
            />
          </div>
          <div className="lg:max-w-[370px] md:max-w-[510px] mx-auto relative w-full">
            <div className="sticky top-10 w-full  xl:space-y-6 space-y-3 ">
              <Recomended />
              <LoginCTA />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
