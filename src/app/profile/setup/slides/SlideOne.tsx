"use client";

import React, { useState } from "react";
import Browser from "./templates/Browser";
import Desciptions from "./templates/Desciptions";

const outline = {
  Title: "Welcome Tio Puente! 👋",
  Description: "Let's get to know you better",
  Question: "Business or Casual user?",
  Options: ["Business Owner", "Casual User"],
  descriptionOne: {
    title: "Owner Operator of a small business?",
    features: [
      {
        text: "Calendar",
      },
      {
        text: "Robust schedualing system",
      },
      {
        text: "Comnunicate with clients",
      },
      {
        text: "Manage your business",
      },
      {
        text: "Promote your Sservices",
      },
    ],
  },
  descriptionTwo: {
    title: "Connect with your local businesses",
    features: [
      {
        text: "find local businesses",
      },
      {
        text: "See their services",
      },
      {
        text: "quickly communicate with them",
      },
      {
        text: "like and save your favorites",
      },
      {
        text: "Suport local businesses",
      },
    ],
  },
};

export default function SlideOne({
  handler,
}: {
  handler: (data: any) => void;
}) {
  const [isBusiness, setIsBusiness] = useState(true);

  const selectHandler = (answer: boolean) => {
    setIsBusiness(answer);
  };

  const updateHandler = () => {
    console.log(isBusiness);
    handler({
      nextSlide: 2,
      data: {
        Type: "isBusiness",
        isBusiness,
      },
    });
  };

  return (
    <div className="slide grid grid-cols-1 md:grid-cols-2 min-h-full h-full">
      <div className="survey p-5 relative min-h-fit p-14 ">
        <div className="title_row mb-5">
          <h1 className="text-xl font-bold"> {outline.Title}</h1>
          <p className="text-mg font-semibold">{outline.Description}</p>
        </div>
        <div className="survey_row">
          <label htmlFor=" " className="text-lg font-semibold ">
            {outline.Question}
          </label>
          <div className="survey_options mt-5">
            <ul className="grid w-full gap-6 grid-cols-1">
              <li>
                <input
                  type="radio"
                  id="isBuisness"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  onChange={() => selectHandler(true)}
                  checked={isBusiness}
                />
                <label
                  htmlFor="isBuisness"
                  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-rose-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <svg
                      className="w-6 h-6 text-rose-400 dark:text-white mb-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>
                    <div className="w-full text-lg font-semibold">
                      Owner Operator
                    </div>
                    <div className="w-full text-sm">
                      Manage Schedualing, Communitcation, promotions, and more.
                    </div>
                  </div>
                </label>
              </li>
              <li className="block">
                <input
                  type="radio"
                  id="isNotBuisness"
                  name="hosting"
                  value="hosting-small"
                  className="hidden peer"
                  onChange={() => selectHandler(false)} // Handle change to set isBusiness
                  checked={!isBusiness}
                />
                <label
                  htmlFor="isNotBuisness"
                  className="block items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-rose-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block">
                    <svg
                      className="w-6 h-6 text-rose-400 dark:text-white mb-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 18"
                    >
                      <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <div className="w-full text-lg font-semibold">
                      Normal User
                    </div>
                    <div className="w-full text-sm">
                      Search, like, communicate with local profetionals and
                      buisnesses.
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="  bottom-0 w-full justify-items-end bg-slate-400 mt-10">
            <button
              type="button"
              className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-rose-500 rounded-lg hover:bg-rose-600 focus:z-10 focus:ring-4 focus:ring-rose-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right "
              onClick={updateHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="description overflow-hidden h-full">
        {isBusiness ? (
          <Desciptions
            title={outline.descriptionOne.title}
            features={outline.descriptionOne.features}
          />
        ) : (
          <Desciptions
            title={outline.descriptionTwo.title}
            features={outline.descriptionTwo.features}
          />
        )}
      </div>
    </div>
  );
}
