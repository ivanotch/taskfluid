'use client'
import React, { useState } from "react";

export default function AvatarToggle({email, name, avatar}: {email: string, name: string, avatar: string}) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative inline-block">
      {/* Avatar Button */}
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={avatar}
        alt="User dropdown"
      />

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          id="userDropdown"
          className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{name}</div>
            <div className="font-medium truncate">{email}</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
