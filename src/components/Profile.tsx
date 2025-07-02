import React, { useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import ThemeContext from "../context/ThemeContext";

const Profile = ({ collapsed }: { collapsed: boolean }) => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === "dark";
  return (
    <div
      className={` ${
        isDark ? "bg-gray-800" : "bg-white "
      } m-2 mb-4 rounded-xl p-3 flex items-center justify-between`}
    >
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt="Profile"
        />
        {!collapsed && (
          <div className="text-sm">
            <p
              className={`${
                isDark ? "text-white" : "text-gray-500"
              } font-semibold`}
            >
              Sahil Shrestha
            </p>
            <p className="text-gray-500 text-xs">sahilShrestha@gmail.com</p>
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="text-gray-500 hover:text-black cursor-pointer">
          <CiMenuKebab size={18} />
        </div>
      )}
    </div>
  );
};

export default Profile;
