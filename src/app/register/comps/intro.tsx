import React from "react";

export default function Intro({
  handler,
}: {
  handler: (isBusiness: boolean) => void;
}) {
  return (
    <section>
      <div>
        <h1 className="mb-3 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Welcome to the Community!
        </h1>
        <p className=" text-center mb-5 font-light text-gray-500 dark:text-gray-400">
          Before we start, lets get to know you you a bit.
        </p>
        <div className="survey_options mt-10">
          <p className="  mb-5 font-light text-gray-500 dark:text-gray-400 dark:text-white">
            What type of user are you?
          </p>
          <ul className="grid w-full gap-6 grid-cols-1">
            <li>
              <input
                type="radio"
                id="isBuisness"
                name="hosting"
                value="hosting-small"
                className="hidden peer"
                onChange={() => handler(true)}
              />
              <label
                htmlFor="isBuisness"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-rose-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <svg
                    className="w-6 h-6 text-rose-400  mb-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                  </svg>
                  <div className="w-full text-lg font-semibold dark:text-white">
                    Owner Operator
                  </div>
                  <div className="w-full text-sm dark:text-white">
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
                onChange={() => handler(false)} // Handle change to set isBusiness
              />
              <label
                htmlFor="isNotBuisness"
                className="block items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-rose-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <svg
                    className="w-6 h-6 text-rose-400  mb-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 18"
                  >
                    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <div className="w-full text-lg font-semibold dark:text-white">
                    Normal User
                  </div>
                  <div className="w-full text-sm dark:text-white">
                    Search, like, communicate with local Professionals and
                    buisnesses.
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
