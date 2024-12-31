'use client'

import Avatar from "@/components/Avatar/Avatar";
import NavToggle from "@/components/Navtoggle/NavToggle";
import React, {useState} from "react";


export default function LeftBarToggle() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <main className={`${isSidebarVisible? "w-[40%] " : "w-[4%]"} transition-all duration-700 ease-out flex relative`}>
            
            <NavToggle toggleSideBar={toggleSidebar} />

            {isSidebarVisible && (
                <div className="rounded-[20px] border border-[3px] w-[100%] text-black shadow-md">
                    <div className="ml-[1.5rem] mt-[1.5rem]">
                        <Avatar /> 
                    </div>
                    {/* change to accept input */}
                    <div className="flex flex-col items-start ml-[1.5rem] mt-[1.5rem]">
                        <span className="text-[1.5rem]">John Doe</span>
                        <span className="text-[1rem] text-gray-600">John@gmail.com</span>
                    </div>
                    <div className="flex align-baseline justify-start w-[90%] m-[auto] mt-[1rem] bg-gray-300 rounded-[20px] h-[5rem]">
                        <span className="ml-[2rem] my-[auto] text-[2.5rem]">7</span>
                        <span className="ml-[0.4rem] my-[auto]">Pending task this week</span>
                    </div>
                    <div className="flex flex-col items-start ml-[1.5rem] mt-[1.5rem]">
                        <span className="text-[1.2rem] font-sub font-900">Recent Activity</span>
                        <div className="mt-[1rem] h-[10rem]">
                            <span className="text-gray-400">Recent</span>
                        </div>
                        <div className="h-[10rem]">
                            <span className="text-gray-400">Yesterday</span>
                        </div>

                    </div>
                </div>
            )}
        </main>
    )}


    