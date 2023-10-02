import React from "react";
import Image from "next/image";

function ProfileHeader() {
  return (
    <>
      <section className="grid  grid-cols-1 md:grid-cols-12  ">
        <div className=" md:col-span-4  ">
          <div className="avatart_container rounded-full w-32 h-32 md:w-44 md:h-44 p-1 bg-white overflow-hidden m-auto  ">
            <Image
              src="https://i.pravatar.cc/350"
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        <div className=" md:col-span-8 col-span-9 mt-5">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Monroe Parker
          </h1>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
            Photographer
          </p>
          <div className="bio">
            <p className="text-sm  md:font-normal font-light ">
              I love beauty and emotion. 🥰 I’m passionate about photography and
              learning. 📚 I explore genres and styles. 🌈 I think photography
              is storytelling. 📖 I hope you like and feel my photos. 😊
            </p>
          </div>
          <div className="meta md:flex space-y-5 mt-5 ">
            <div className="meta_data flex-grow flex">
              <div className="services mr-10">
                <h2>Services</h2>
                <p className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal text-center ">
                  5
                </p>
              </div>
              <div className="services mr-5">
                <h2>Likes</h2>
                <p className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal text-center ">
                  300k
                </p>
              </div>
            </div>
            <div className="links ">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Follow
                </span>
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="divider border-b border-gray-400 dark:border-gray-400 mt-10 "></div>
    </>
  );
}

export default ProfileHeader;
