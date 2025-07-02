import React, { useContext, useState } from "react";
import { MdOutlineFolderOpen } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

const CollapsibleMenu = ({
  title,
  links,
  collapsed,
}: {
  title: string;
  links: string[];
  collapsed: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === "dark";
  return (
    <div className="w-full mt-1/2">
      {/* Toggle Button - stays in normal document flow */}
      <a
        onClick={toggleOpen}
        className={`flex items-center w-full ${
          isDark ? "text-white" : "text-gray-700"
        }  hover:text-blue-500 hover:bg-blue-100 text-sm font-medium rounded-md transition ${
          collapsed ? "justify-center p-3" : "px-3 py-2"
        }`}
      >
        <span className={`text-lg ${collapsed ? "" : "mr-3"}`}>
          <MdOutlineFolderOpen />
        </span>
        {!collapsed && (
          <>
            <span className="flex-1">{title}</span>
            <BsThreeDots />
          </>
        )}
      </a>

      {/* Sub-links - in normal document flow but only when open */}
      {open && !collapsed && (
        <div className="w-full pl-8">
          <div className="flex flex-col gap-1 py-1">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`${
                  isDark ? "text-white" : "text-gray-700"
                } text-sm  hover:text-blue-500 hover:bg-blue-100 py-1 px-3 rounded`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleMenu;
