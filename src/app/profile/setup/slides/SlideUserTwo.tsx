"use client";

import React, { useState } from "react";

export default function SlideOne({ handler }: { handler: any }) {
  return (
    <div className="slide grid grid-cols-1 md:grid-cols-2 min-h-full h-full">
      <h1> Welcome </h1>
      <button
        onClick={() => {
          handler();
        }}
      >
        Show results
      </button>
    </div>
  );
}
