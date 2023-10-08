"use client";
import React, { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

import { Calendar } from "primereact/calendar";

interface TimeSlot {
  openTime: string;
  closeTime: string;
  days: string[];
}

const initialTimeSlot: TimeSlot = {
  openTime: "",
  closeTime: "",
  days: [],
};

const initialSelectedDays: string[] = [];
export default function BasicInfo_form({
  handler,
}: {
  handler: (data: any) => void;
}) {
  const [date, setDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([initialTimeSlot]);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const times = generateTimes();

  function generateTimes() {
    const timesArray = [];
    const startTime = new Date("1970-01-01T00:00:00");
    const endTime = new Date("1970-01-01T23:59:00");
    while (startTime <= endTime) {
      timesArray.push(formatTime(startTime));
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    return timesArray;
  }

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const handleTimeSlotChange = (
    index: number,
    field: keyof TimeSlot,
    value: string | string[]
  ) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index] = {
      ...updatedTimeSlots[index],
      [field]: value,
    };
    setTimeSlots(updatedTimeSlots);
  };

  const handleDayChange = (index: number, day: string) => {
    const updatedTimeSlots = [...timeSlots];
    const currentDays = updatedTimeSlots[index].days;
    if (currentDays.includes(day)) {
      updatedTimeSlots[index].days = currentDays.filter((d) => d !== day);
    } else {
      updatedTimeSlots[index].days = [...currentDays, day];
    }
    setTimeSlots(updatedTimeSlots);
  };

  const getClosingTimes = (openTime: string) => {
    const startTime = times.findIndex((time) => time === openTime);
    return times.slice(startTime + 1); // Adding 2 to skip the current open time and the next half-hour
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedTimeSlots = timeSlots.filter(
      (slot) => slot.openTime && slot.closeTime && slot.days.length > 0
    );
    console.log("Selected Time Slots:", selectedTimeSlots);

    let isValid = true;
    if (selectedTimeSlots.length === 0) {
      isValid = false;
      alert("please select at least one time slot");
    }

    selectedTimeSlots.forEach((slot) => {
      if (slot.days.length === 0) {
        isValid = false;
        alert("error witrh days ");
      }
      if (slot.openTime === "" || slot.closeTime === "") {
        isValid = false;
        alert("Error with time selected ");
      }
    });

    if (!isValid) {
      alert("general error");
      return;
    }
    handler(selectedTimeSlots);
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, initialTimeSlot]);
  };

  const removeTimeSlot = (index: number) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  return (
    <section className="Basic Info md:w-[576px] w-full">
      <h1 className="mb-3 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {"Lets Set up you'r Calendar"}
      </h1>
      <p className=" text-center mb-5 font-light text-gray-500 dark:text-gray-400">
        We need some basic information to set up your calendar
      </p>

      <div className=" mt-10 max-w-[450px] m-auto">
        <h2 className="text-xl font-semibold">Business Hours</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 divide-y">
            {timeSlots.map((timeSlot, index) => (
              <div key={index} className=" py-6">
                <div className="grid grid-cols-2 ">
                  <h3 className="text-lg font-semibold pt-2  ">
                    Hours Set {index + 1}
                  </h3>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-600 mt-2 float-right text-right mb-5  "
                    onClick={() => removeTimeSlot(index)}
                  >
                    <TrashIcon className="w-5 h-5 inline" />
                  </button>
                </div>
                <div className="flex space-x-4">
                  <select
                    className="w-1/2 p-2 border rounded-md"
                    value={timeSlot.openTime}
                    onChange={(e) =>
                      handleTimeSlotChange(index, "openTime", e.target.value)
                    }
                  >
                    <option value="">Open Time</option>
                    {times.map((time, idx) => (
                      <option key={idx} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-1/2 p-2 border rounded-md"
                    value={timeSlot.closeTime}
                    onChange={(e) =>
                      handleTimeSlotChange(index, "closeTime", e.target.value)
                    }
                    disabled={!timeSlot.openTime}
                  >
                    <option value="">Close Time</option>
                    {timeSlot.openTime &&
                      getClosingTimes(timeSlot.openTime).map((time, idx) => (
                        <option key={idx} value={time}>
                          {time}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    {daysOfWeek.map((day) => (
                      <label key={day} className="items-center space-x-2">
                        <span className="mr-2 block">{day}</span>
                        <input
                          type="checkbox"
                          checked={timeSlot.days.includes(day)}
                          onChange={() => handleDayChange(index, day)}
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={addTimeSlot}
            >
              Add Hours
            </button>
          </div>

          <div className="ml-auto w-fit">
            <button
              type="submit"
              className="relative mt-10  inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Save
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
