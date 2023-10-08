"use client";
import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { InputNumber } from "primereact/inputnumber";

export default function BasicInfo_form({
  handler,
}: {
  handler: (data: any) => void;
}) {
  const [value, setValue] = useState(50);
  // states
  const [formData, setFormData] = useState({
    serviceName: "",
    durationHours: 0,
    durationMinutes: 0,
    bio: "",
    businessName: "",
    country: "United States",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
  });

  //  handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  submit handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handler(formData);
  };

  return (
    <section className="">
      <div className="Basic Info border-b border-gray-900/10 dark:border-gray-50/10 pb-12">
        <h1 className="mb-3 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Let Set up your First Service!
        </h1>
        <p className=" text-center mb-5 font-light text-gray-500 dark:text-gray-400">
          Services are the core of your business. Let's get started by creating
        </p>
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Service Info
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="occupatio"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Service Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                autoComplete="serviceName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Mens Haircut, Car Detailing, etc."
                value={formData.serviceName}
                // onChange={changeHandler}
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            {/* //todo check if user name exist  */}
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Duration (in minutes)
            </label>
            <div className="mt-2 gap-3 grid grid-cols-2">
              {/* input for hours  */}
              <input
                type="number"
                name="hours"
                id="hours"
                className="inline w-25 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Hours"
                value={formData.durationHours}
                onChange={changeHandler}
              />

              {/* input for minutes */}
              <input
                type="number"
                name="minutes"
                id="minutes"
                className="inline w-25 rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Minutes"
                value={formData.durationMinutes}
                onChange={changeHandler}
              />
            </div>
          </div>
          {/* bio */}
          <div className="sm:col-span-6">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Bio
            </label>
            <div className="mt-2">
              <textarea
                id="bio"
                name="bio"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                placeholder="Write a few sentences about your service."
                value={formData.bio}
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >
              Featured Image
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <div className=" bg-gray-300 h-32 w-32 flex rounded-lg">
                <PhotoIcon
                  className=" h-20 w-20 text-white m-auto"
                  aria-hidden="true"
                />
              </div>

              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
          Service Form Info
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Collect information from your customers to better serve them.
        </p>
      </div>
    </section>
  );
}
