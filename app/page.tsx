"use client";

import * as React from "react";
import Sidebar from "./components/Sidebar";
import Schedule from "./components/Schedule";

export default function Page() {
    return (
        <div className="bg-very-dark-blue min-h-screen flex items-center justify-center">
            <div className="flex flex-row gap-4 h-auto">
                <Sidebar />
                <Schedule />
            </div>
        </div>
    )
}