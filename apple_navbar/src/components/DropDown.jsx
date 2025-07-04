import React from "react";

const DropDown = ({ label, leftLinks, midLinks, rightLinks }) => {
  return (
    <div className="relative group inline-block">
      {/* Trigger link */}
      <a
        href="#"
        className="mr-10 text-gray-700 hover:text-blue-600 inline-block py-3"
      >
        {label}
        {/* Small visual indicator */}
        <span className="block h-0.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-200"></span>
      </a>

      {/* Full-width dropdown stays open when hovering over it */}
      <div
        className="fixed top-[48px] left-0 hidden w-screen bg-white shadow-md z-50 
                      group-hover:block hover:block transition-opacity duration-200"
      >
        <div className="max-w-6xl mx-auto flex justify-start p-6">
          {/* Left column with links */}
          <div className="pr-12 w-1/3">
            <h1 className="text-gray-600 text-xs mb-4 uppercase tracking-wider">
              {leftLinks[0]}
            </h1>
            <div className="grid gap-2">
              {leftLinks.slice(1).map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 text-2xl font-bold hover:text-blue-600 
                             hover:bg-gray-100 p-2 -m-2 rounded block transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mid and Right columns container */}
          <div className="flex flex-1 gap-8">
            {/* Mid column */}
            <div className="w-1/3">
              <h1 className="text-gray-600 text-xs mb-4 uppercase tracking-wider">
                {midLinks[0]}
              </h1>
              <div className="grid gap-2">
                {midLinks.slice(1).map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 text-sm font-semibold hover:text-blue-600 
                               hover:bg-gray-100 p-2 -m-2 rounded block transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="w-1/3">
              <h1 className="text-gray-600 text-xs mb-4 uppercase tracking-wider">
                {rightLinks[0]}
              </h1>
              <div className="grid gap-2">
                {rightLinks.slice(1).map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-700 text-sm font-semibold hover:text-blue-600 
                               hover:bg-gray-100 p-2 -m-2 rounded block transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
