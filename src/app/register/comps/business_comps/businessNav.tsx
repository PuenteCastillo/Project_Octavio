"use client";
import React from "react";

export default function BusinessNav(props: { currentPage: number }) {
  const staticClasses =
    "flex md:w-full items-center after:content-['']  after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-5 after:w-full dark:after:border-gray-700";
  const activeClasses = "text-rose-600 dark:text-rose-500 ";

  console.log(" current page : ", props.currentPage);
  return (
    <section className="">
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li
          className={`flex md:w-full items-center after:content-['']  after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-5 after:w-full dark:after:border-gray-700 ${
            props.currentPage == 1 ? activeClasses : ""
          }`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Personal <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
        <li
          className={`flex md:w-full items-center after:content-['']  after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-5 after:w-full dark:after:border-gray-700 ${
            props.currentPage == 2 ? activeClasses : ""
          }`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">2</span>
            Business{" "}
            <span className="hidden sm:inline-flex sm:ml-2">hours</span>
          </span>
        </li>
        <li
          className={`flex items-center ${
            props.currentPage == 3 ? activeClasses : ""
          }`}
        >
          <span className="mr-2">3</span>
          Services
        </li>
      </ol>
    </section>
  );
}
