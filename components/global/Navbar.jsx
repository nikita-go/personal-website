import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return(
        <div className="flex items-center">
            <ul className="list-none text-[#ff7357] text-lg space-x-12 ">
                <Link href="/fun" className="hover:text-[#ff866d]">fun</Link>
                <Link href="/posts" className="hover:text-[#ff866d]">posts</Link>
                <Link href="/projects" className="hover:text-[#ff866d]">projects</Link>
            </ul>
        </div>
    )
}