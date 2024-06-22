import React from "react";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-[1530px] h-[50px] bg-slate-300 px-4">
      <div className="w-full flex flex-row justify-between h-full items-center font-medium ">
        <div className="text-2xl font-semibold font-mono">Logo</div>
        <div className="flex flex-row gap-8">
          <div>Home</div>
          <div>About</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
