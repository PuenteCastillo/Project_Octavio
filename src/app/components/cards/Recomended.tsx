import React from "react";

interface ServiceProps {
  service: string;
  imageSrc: string;
  fullName: string;
}

function Service({ service, imageSrc, fullName }: ServiceProps) {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={imageSrc}
            alt={`${fullName} image`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {service}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {fullName}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Follow
          </button>
        </div>
      </div>
    </li>
  );
}

export default function Recommended() {
  const services = [
    {
      service: "Mens Haircut",
      imageSrc: "https://i.pravatar.cc/550",
      fullName: "Tio Puente",
    },
    {
      service: "Massage",
      imageSrc: "https://i.pravatar.cc/500",
      fullName: "Bonnie Green",
    },
    {
      service: "Car Repair",
      imageSrc: "https://i.pravatar.cc/400",
      fullName: "Michael Gough",
    },
    {
      service: "Legal Services",
      imageSrc: "https://i.pravatar.cc/450",
      fullName: "Michael Gough",
    },
    {
      service: "Boxing Coach",
      imageSrc: "https://i.pravatar.cc/650",
      fullName: "Lana Byrd",
    },
  ];

  return (
    <section className="p-4 lg:p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
        Services Near You
      </h2>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {services.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </ul>
    </section>
  );
}
