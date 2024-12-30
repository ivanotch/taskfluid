"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative h-[100%] w-[18%] rounded-tl-[20px] border border-gray-400 rounded-bl-[20px] flex flex-col">
      <span className="tracking-widest font-bold text-[1.3rem] mb-[4rem] ml-[2rem] mt-[2rem]">TASKFLUID</span>
      <span className="ml-[2rem] text-[0.9rem] text-gray-500">MAIN</span>
      <div className="mt-[1.5rem] mb-[4rem]">
        <div className="flex flex-col items-start w-[100%] ml-[auto]">
          <Link
            className={`w-[100%] text-[1.2rem] font-sub relative h-[3rem] flex justify-start ${
              pathname === "/dashboard"
                ? "bg-gray-200 border-r-[3px] border-[#726161]"
                : "hover:bg-gray-100"
            } transition-all`}
            href="/dashboard"
          >
            <div className="w-[100%] pl-[3rem] flex items-center">Overview</div>
          </Link>

          <Link
            className={`w-[100%] text-[1.2rem] font-sub relative h-[3rem] flex justify-start ${
              pathname === "/profile"
                ? "bg-gray-200 border-r-[3px] border-[#726161]"
                : "hover:bg-gray-100"
            } transition-all`}
            href="/profile"
          >
            <div className="w-[100%] pl-[3rem] flex items-center">Profile</div>
          </Link>

          <Link
            className={`w-[100%] text-[1.2rem] font-sub relative h-[3rem] flex justify-start ${
              pathname === "/task" ? "bg-gray-200 border-r-[3px] border-[#726161] " : "hover:bg-gray-100"
            } transition-all`}
            href="/task"
          >
            <div className="w-[100%] pl-[3rem] flex items-center">Task</div>
          </Link>

          <Link
            className={`w-[100%] text-[1.2rem] font-sub relative h-[3rem] flex justify-start ${
              pathname === "/sharedTask"
                ? "bg-gray-200 border-r-[3px] border-[#726161]"
                : "hover:bg-gray-100"
            } transition-all`}
            href="/sharedTask"
          >
            <div className="w-[100%] pl-[3rem] flex items-center">
              Shared Task
            </div>
          </Link>
        </div>
        <div className="my-[2rem] w-[100%] border border-gray-200"></div>
        <span className="ml-[2rem] text-[0.9rem] text-gray-500">SUPPORT</span>
      </div>
    </div>
  );
}
