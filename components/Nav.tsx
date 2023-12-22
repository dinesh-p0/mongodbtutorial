import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="mb-5 mt-0 ">
      <div className="w-[1000px]  flex flex-row items-center justify-between p-5 bg-slate-500 h-auto">
        <p>Notes</p>
        <Link href={"/add"}>Add Note</Link>
      </div>
    </div>
  );
};

export default Nav;
