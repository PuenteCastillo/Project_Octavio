import React from "react";

interface Post {
  user: string;
  avatar: string;
  //   Occupation: string;
  title: string;
  description?: string;
  image?: string;
  featuredImage?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
  avatar,
  user,
  featuredImage,
}: Post) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        {avatar ? (
          <div className="flex items-center space-x-4">
            <img
              className="w-7 h-7 rounded-full"
              src={avatar}
              alt="Jese Leos avatar"
            />
            <span className="font-medium dark:text-white">{user}</span>
          </div>
        ) : null}
      </div>
      {featuredImage ? (
        <div className=" rounded-lg h-60 overflow-hidden mb-2">
          <img className="rounded-t-lg" src={featuredImage} alt="" />
        </div>
      ) : null}

      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a href="#">{title}</a>
      </h2>
      {description ? (
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
      ) : null}
    </article>
  );
}
