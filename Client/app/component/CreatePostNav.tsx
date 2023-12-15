import Link from "next/link";
import React from "react";
import { LuUserCircle } from "react-icons/lu";

function CreatePostNav() {
  return (
    <div className="bg-white py-2 px-4  flex items-center gap-2">
      <LuUserCircle className="text-[30px] cursor-pointer" />
      <Link href="#" className="bg-[#efefef] w-full border p-2 transition-all hover:border-[#1373bc] rounded-md cursor-text">
        <p className="text-[#b5b2b2]">create post</p>
      </Link>
    </div>
  );
}

export default CreatePostNav;
