import React from "react";
import Head from "next/head";
import { Header } from "../components/global/Header";
import { Footer } from "../components/global/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nikita Gorshkov</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div class="flex flex-col h-screen">
        <div className="h-[76px]"></div>
        <div className="flex justify-center items-center flex-auto">
          <div className="max-w-[80%] text-left">
            <h1 className="text-5xl text-[#ECDBBA] font-bold">Nikita Gorshkov</h1>
            <div className="text-[#faf8f0] font-semibold text-xl">
              <br />
              <p>Hi! I'm currently a high school junior who enjoys web development and loves using technology to help others.</p>
              <br />
              <p>On the side I like to do competitive programming.</p>
              <br />
              <p>This website doesn't have a strict purpose and will simply be a place for me to put my thoughts.</p>
              <br />
              <p>In the meantime, check out my GitHub profile (@nikita-go)!</p>
              <br />
              <p>P.S. I'll add a light theme... eventually.</p>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}
