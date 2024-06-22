import React from "react";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-[1530px] h-[50px]  px-4">
      <div className="w-full flex flex-row justify-between h-full items-center font-medium ">
        <div className="text-2xl font-semibold font-mono">LoaderIO</div>
        <div className="flex flex-row gap-8">
          <div>Github</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
