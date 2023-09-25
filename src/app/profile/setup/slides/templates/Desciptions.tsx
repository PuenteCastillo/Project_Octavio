import React from "react";
import Browser from "./Browser";

interface outline {
  title: string;
  features: { text: string }[];
}

export default function Descriptions(outline: outline) {
  return (
    <div className="description">
      <Browser>
        <h2 className="text-lg font-semibold">{outline.title}</h2>

        <div className="checks p-10">
          <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
            {outline.features.map((feature, index) => (
              <FeatureItem key={index} text={feature.text} />
            ))}
          </ul>
        </div>
      </Browser>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center space-x-3">
      <svg
        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span className=" capitalize">{text}</span>
    </li>
  );
}
