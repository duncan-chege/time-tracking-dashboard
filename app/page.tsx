"use client";

import * as React from "react";
import Sidebar from "./components/Sidebar";
import Schedule from "./components/Schedule";

export default function Page() {
    return (
        <div className="bg-very-dark-blue min-h-screen flex items-center justify-center">
            <div className="flex md:flex-row flex-col gap-8 h-auto md:mx-16 m-8 w-full">
                <Sidebar />
                <Schedule />
            </div>
        </div>
    )
}