import React, { useContext, useState } from "react";
import { FaHome } from "react-icons/fa";
import { PiShoppingBag } from "react-icons/pi";
import { BiCube } from "react-icons/bi";
import { MdSchedule, MdOutlineContactSupport } from "react-icons/md";
import { LiaFileSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { TbCircleDottedLetterI } from "react-icons/tb";
import { BsLayoutSidebar } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import Profile from "./Profile";
import CollapsibleMenu from "./CollapsableMenu";
import ThemeContext from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa6";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark: boolean = theme === "dark";
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const menuItems = [
    { icon: <LiaFileSolid />, label: "All Files" },
    { icon: <AiOutlineTeam />, label: "Team Members" },
    { icon: <TbCircleDottedLetterI />, label: "Appearance" },
  ];

  const topMenu = [
    { icon: <FaHome />, label: "Home" },
    { icon: <PiShoppingBag />, label: "My Store" },
    { icon: <BiCube />, label: "My Projects" },
    { icon: <MdSchedule />, label: "Schedule" },
  ];

  const bottomMenu = [
    { icon: <MdOutlineContactSupport />, label: "Support" },
    { icon: <CiSettings />, label: "Settings" },
  ];

  return (
    <div
      className={`flex items-center p-2.5 ${
        isDark ? "bg-black" : "bg-white "
      } border-gray-300  border-1 top-0 left-0 h-screen ${
        collapsed ? "w-22" : "w-70"
      } border-2 relative rounded-2xl transition-all duration-300`}
    >
      <div
        className={`absolute h-[99%] rounded-2xl ${
          isDark ? "bg-black border-gray-300" : "bg-gray-100 border-gray-300 "
        } border-1 shadow-md transition-all duration-300 ${
          collapsed ? "w-16" : "w-64"
        } flex flex-col justify-between overflow-hidden`}
      >
        {/* Toggle Button - Fixed Top */}
        <div className="flex justify-between items-center p-2 h-[60px] shrink-0">
          <button
            onClick={toggleSidebar}
            className="text-gray-600  transition p-1"
            title={collapsed ? "Open sidebar" : "Close sidebar"}
          >
            <span
              className={`${isDark ? "text-white" : "text-gray-700"} text-lg`}
            >
              <BsLayoutSidebar />
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className={` rounded-full transition-all duration-300 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <span className="text-yellow-300 text-md">
                <FaSun />
              </span>
            ) : (
              <span className="text-gray-700 text-md">
                <FaMoon />
              </span>
            )}
          </button>
        </div>

        {/* Middle Content - No Scroll */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Top Menu */}
          <div className="px-2 pt-2 ">
            {topMenu.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center ${
                  isDark ? "text-white" : " text-gray-700"
                } text-sm font-medium rounded-md hover:text-blue-500 hover:bg-blue-100 transition ${
                  collapsed ? "justify-center p-3" : "px-3 py-2"
                }`}
              >
                <span className={`text-lg ${collapsed ? "" : "mr-3"}`}>
                  {item.icon}
                </span>
                <span
                  className={`transition-all duration-300 ${
                    collapsed ? "opacity-0 w-0" : "opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Folders Section */}
          <hr className={`mx-2  border-gray-300 border-1`} />
          <div className="px-2 py-2">
            <CollapsibleMenu
              title="Folders"
              links={["View All", "Recent", "Favorites", "Shared", "Archieved"]}
              collapsed={collapsed}
            />
          </div>
          <hr className="mx-2 border-gray-300 border-1" />
          {/* Middle Menu */}
          <div className="px-2 py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center ${
                  isDark ? "text-white" : " text-gray-700"
                } hover:text-blue-500 hover:bg-blue-100 text-sm font-medium rounded-md transition ${
                  collapsed ? "justify-center p-3" : "px-3 py-2"
                }`}
              >
                <span className={`text-lg ${collapsed ? "" : "mr-3"}`}>
                  {item.icon}
                </span>
                <span
                  className={`transition-all duration-300  ${
                    collapsed ? "opacity-0 w-0" : "opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Menu - Fixed Bottom */}

        <div className="px-2 pt-2">
          {bottomMenu.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center ${
                isDark ? "text-white" : " text-gray-700"
              } hover:text-blue-500 hover:bg-blue-100 text-sm font-medium rounded-m transition ${
                collapsed ? "justify-center p-3" : "px-3 py-2"
              }`}
            >
              <span className={`text-lg ${collapsed ? "" : "mr-3"}`}>
                {item.icon}
              </span>
              <span
                className={`transition-all duration-300 ${
                  collapsed ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
        <Profile collapsed={collapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
