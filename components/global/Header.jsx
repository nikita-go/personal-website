import React from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";

export function Header() {
    return(
        <nav className="fixed z-10 flex min-w-full justify-between items-center backdrop-blur-lg">
            <div className="mx-auto my-[20px] flex w-full max-w-[90%] justify-between">
                <Link href="/" className="text-white font-bold text-3xl">nikitago.xyz</Link>
                <Navbar />
            </div>
        </nav>
    )
}