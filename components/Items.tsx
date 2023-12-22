import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
const Items = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full lg:w-[1000px] h-auto  pb-4 border-2 border-black">
        <div className="flex flex-row justify-between">
          <div className="w-[80%] p-4">Title</div>
          <div className="flex w-[20%] p-4 flex-row justify-evenly">
            <Link href={"/edit/id"} className="text-red-400">
              <HiPencilAlt size={24} />
            </Link>
            <button>
              <HiOutlineTrash size={24} />
            </button>
          </div>
        </div>
        <div className="w-[80%] px-4">
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
