"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";

import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function calendar() {
  return (
    <div className="w-11/12 m-auto pt-20 grid  ">
      <div className="bg-white rounded-md md:p-10 col-span-8">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          allDaySlot={false}
          viewClassNames={["h-screen"]}
          businessHours={{
            daysOfWeek: [1, 2, 3, 4],
            startTime: "9:00",
            endTime: "18:00",
          }}
        />
      </div>
      <div className="col-span-4">content</div>
    </div>
  );
}
