"use client";

import React, { useState } from "react";
import Desciptions from "./templates/Desciptions";

const outline = {
  Title: "Lets get to know you better",
  Description:
    "Filling out your profile will help us better connect you local buisnesses and services. You're data will never be shared with anyone without your permission.",
  Question: "Basic Info",
  // Options: ["Business Owner", "Casual User"],
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
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const selectHandler = (answer: boolean) => {
    // setIsBusiness(answer);
  };

  const updateHandler = () => {
    console.log(address);
    //  capitalize all address answers

    for (let key in address) {
      if (Object.prototype.hasOwnProperty.call(address, key)) {
        const addressKey = key as keyof typeof address; // add this line to define the type of the key
        address[addressKey] =
          address[addressKey].charAt(0).toUpperCase() +
          address[addressKey].slice(1);
      }
    }

    console.log("address : ", address);

    handler({
      nextSlide: 3,
      data: {
        Type: "address",
        address,
      },
    });
  };

  return (
    <div className="slide grid grid-cols-1 md:grid-cols-2 min-h-full h-full">
      <div className="survey p-5 relative min-h-fit p-14 ">
        <div className="title_row mb-5">
          <h1 className="text-xl font-bold"> {outline.Title}</h1>
          <p className="text-mg ">{outline.Description}</p>
        </div>
        <div className="survey_row">
          <label htmlFor=" " className="text-lg font-semibold ">
            {outline.Question}
          </label>
          <div className="survey_options mt-5">
            {/* form */}
            {/* address */}
            <div className="flex flex-col ">
              <div className="flex flex-row ">
                <div className="flex flex-col  w-full">
                  <label htmlFor="address" className="text-sm font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address.street}
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row mt-5  gap-5 ">
                <div className="flex flex-col  w-1/2 ">
                  <label htmlFor="city" className="text-sm font-semibold">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={address.city}
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col  w-1/2 ">
                  <label htmlFor="state" className="text-sm font-semibold">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="flex flex-row mt-5 gap-5">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="country" className="text-sm font-semibold">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    value={address.country}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="zip" className="text-sm font-semibold">
                    Zip
                  </label>
                  <input
                    type="number"
                    name="zip"
                    id="zip"
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    value={address.zip}
                    onChange={(e) =>
                      setAddress({ ...address, zip: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="  bottom-0 w-full justify-items-end bg-slate-400 mt-10">
            <button
              type="button"
              className=" py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-rose-500 rounded-lg hover:bg-rose-400 focus:z-10 focus:ring-4 focus:ring-rose-300 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 float-right "
              onClick={updateHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="description overflow-hidden h-full">content</div>
    </div>
  );
}
