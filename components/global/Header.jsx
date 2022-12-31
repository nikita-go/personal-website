import React from "react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import {useEffect, useState, useRef} from 'react';

export function Header() {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
      setHeight(ref.current.offsetHeight);
    }, []);

    return(
        <>
            <nav ref={ref} className="fixed z-10 top-0 flex min-w-full justify-between items-center backdrop-blur-md">
                <div className="mx-auto my-[20px] flex w-full max-w-[90%] justify-between">
                    <Link href="/" className="text-white font-bold text-3xl">nikitago.xyz</Link>
                    <Navbar />
                </div>
            </nav>
            <div className={`h-[${height}px]`}></div>
        </>
    )
}