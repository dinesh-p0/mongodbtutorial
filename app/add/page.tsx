import React from "react";

const page = () => {
  return (
    <div className="w-full center">
      <form className="flex flex-col mx-[17%] w-[1000px] justify-center ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          className=" my-3 border border-black px-4 py-2"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Description.."
          className="center border border-black px-4 py-2"
        />

        <button className="border border-blue-500 my-3 bg-blue-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default page;
