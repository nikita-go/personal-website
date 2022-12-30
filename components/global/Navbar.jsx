import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return(
        <div className="flex items-center">
            <ul className="list-none text-[#ff7357] text-lg space-x-12">
                <Link href="/posts" className="hover:text-[#ff866d] ease-in-out transition duration-300">posts</Link>
                <Link href="/projects" className="hover:text-[#ff866d] ease-in-out transition duration-300">projects</Link>
            </ul>
        </div>
    )
}