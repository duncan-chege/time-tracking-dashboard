"use client";

import * as React from "react";
import Sidebar from "./components/Sidebar";
import Schedule from "./components/Schedule";
import { useState } from "react";

export default function Page() {
  // Define options as a string array and use `as const` to make it a readonly tuple
  const options = ["Daily", "Weekly", "Monthly"] as const;

  // State to track the selected item. Lifted to the parent
  const [selectedPeriod, setSelectedPeriod] = useState<
    (typeof options)[number]
  >(options[0]);

  return (
    <main>
      <div className="bg-very-dark-blue min-h-screen flex items-center justify-center">
        <div className="max-w-7xl flex md:flex-row flex-col gap-8 h-auto md:mx-16 m-8 w-full">
          <Sidebar
            chosenTime={selectedPeriod}
            setChosenTime={setSelectedPeriod}
          />
          <Schedule chosenTime={selectedPeriod} />
        </div>
      </div>
    </main>
  );
}
