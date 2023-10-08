"use client";

import React, { useState } from "react";
import BusinessNav from "./business_comps/businessNav";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import BasicInfo_form from "./business_comps/BasicInfo_form";
import Calendar_form from "./business_comps/calendar_form";
import Service_form from "./business_comps/Service_form";

export default function Buisness() {
  //  current page
  const [page, setPage] = useState<number>(1);

  const basicInfoHandler = (data: any) => {
    console.log("form:", data);
    setPage(2);
  };

  const calendarHandler = (data: any) => {
    console.log("Selected Time Slots:", data);

    setPage(3);
  };

  return (
    <section>
      <div className="nav">
        <BusinessNav currentPage={page} />
        <div className=" container pt-10">
          {/*  if page is 1 show basic info handler */}
          {page === 1 && <BasicInfo_form handler={basicInfoHandler} />}
          {/*  if page is 2 show calendar form */}
          {page === 2 && <Calendar_form handler={calendarHandler} />}
          {/*  if page is 3 show service form */}
          {page === 3 && <Service_form handler={basicInfoHandler} />}
        </div>
      </div>
    </section>
  );
}
