'use client'

import NavToggle from "@/components/Navtoggle/NavToggle";
import React, {useState} from "react";


export default function LeftBarToggle() {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <main className={`${isSidebarVisible? "w-[40%]" : ""} flex h-[100vh] relative`}>
            <div className="">
                <NavToggle toggleSideBar={toggleSidebar} />
            </div>

            {isSidebarVisible && (
                <div className="w-[100%] bg-gray-800 text-white shadow-md">
                    <ul className="">
                    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                        Dashboard
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                        Settings
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                        Profile
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-md cursor-pointer">
                        Logout
                    </li>
                    </ul>
                </div>
            )}
        </main>
    )}

    