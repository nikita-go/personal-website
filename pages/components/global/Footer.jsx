import React from "react";
import Link from "next/link";

export const Footer = () => {
    return(
        <nav className="bg-[#101010] w-screen flex justify-between items-center bottom">
            <div className="mx-auto flex my-6 w-full max-w-[90%] justify-between">
                <p className="text-white text-lg font-semibold">© Nikita Gorshkov 2022</p>
                <ul className="list-none text-[#648ccd] text-lg space-x-12">
                    <Link href="/contact" className="hover:text-[#7d9dd0]">Contact me</Link>
                </ul>
            </div>
        </nav> 
    )
}