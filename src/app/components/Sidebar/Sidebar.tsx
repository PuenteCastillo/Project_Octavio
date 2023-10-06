import React from "react";
import Styles from "./sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../images/local.png";
import Logo_small from "../../../images/logo_small.png";

export default function Sidebar() {
  return (
    <div id={Styles.mainSidebar} className=" bg-white dark:bg-theme_darker">
      <Link href="/" className={Styles.main_logo}>
        <Image
          className={Styles.logo}
          src={Logo}
          width={150}
          height={100}
          alt="Bulletin Logo"
        />
      </Link>
      <Link href="/" className={Styles.small_logo}>
        <Image
          className={Styles.logo}
          src={Logo_small}
          width={150}
          height={100}
          alt="Bulletin Logo"
        />
      </Link>
      <div className={Styles.links}>
        <ul>
          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Home
              </p>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Search
              </p>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Message
              </p>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 21"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9.046 3.59-.435-2.324m.435 2.324a5.338 5.338 0 0 1 6.033 4.333l.331 1.77c.439 2.344 2.383 2.587 2.599 3.76.11.586.22 1.171-.309 1.271L5 17.101c-.529.1-.639-.488-.749-1.074-.219-1.172 1.506-2.102 1.067-4.447l-.331-1.769a5.338 5.338 0 0 1 4.059-6.22Zm-7.13 4.602a8.472 8.472 0 0 1 2.17-5.048m2.646 13.633A3.472 3.472 0 0 0 13.46 16l.089-.5-6.817 1.277Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Notifications
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M6 1a1 1 0 0 0-2 0h2ZM4 4a1 1 0 0 0 2 0H4Zm7-3a1 1 0 1 0-2 0h2ZM9 4a1 1 0 1 0 2 0H9Zm7-3a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2ZM1 6a1 1 0 0 0 0 2V6Zm18 2a1 1 0 1 0 0-2v2ZM5 11v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 11v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM10 15v-1H9v1h1Zm0 .01H9v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 15v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM15 11v-1h-1v1h1Zm0 .01h-1v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM5 15v-1H4v1h1Zm0 .01H4v1h1v-1Zm.01 0v1h1v-1h-1Zm0-.01h1v-1h-1v1ZM2 4h16V2H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v14h2V4h-2Zm0 14v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V4H0v14h2ZM2 4V2a2 2 0 0 0-2 2h2Zm2-3v3h2V1H4Zm5 0v3h2V1H9Zm5 0v3h2V1h-2ZM1 8h18V6H1v2Zm3 3v.01h2V11H4Zm1 1.01h.01v-2H5v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H5v2h.01v-2ZM9 11v.01h2V11H9Zm1 1.01h.01v-2H10v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM9 15v.01h2V15H9Zm1 1.01h.01v-2H10v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H10v2h.01v-2ZM14 15v.01h2V15h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM14 11v.01h2V11h-2Zm1 1.01h.01v-2H15v2Zm1.01-1V11h-2v.01h2Zm-1-1.01H15v2h.01v-2ZM4 15v.01h2V15H4Zm1 1.01h.01v-2H5v2Zm1.01-1V15h-2v.01h2Zm-1-1.01H5v2h.01v-2Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Calendar
              </p>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Create
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className=" hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span>
                <svg
                  className="w-[25px] h-[25px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
              <p className=" text-sm font-bold text-gray-800 dark:text-white ml-2">
                Profile
              </p>
            </Link>
          </li>
        </ul>
      </div>

      <div className={Styles.footer}>
        <Link href="/" className="flex">
          <div className={Styles.Avatar_container}>
            <Image
              src="https://i.pravatar.cc/300"
              width={35}
              height={35}
              alt="Proilfe_avater"
            />
          </div>
          <div className={Styles.User_name}>
            <p className="mt-2 ml-3 text-sm font-bold text-gray-800 dark:text-white ">
              Tio Puente
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
