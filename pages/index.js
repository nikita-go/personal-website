import React from "react";
import Head from "next/head";
import { Header } from "../components/global/Header";
import { Footer } from "../components/global/Footer";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikita Gorshkov</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col min-h-screen">
        <Header />
        <div className="flex grow justify-center items-center">
          <div className="max-w-[80%] text-left">
            <h1 className="text-5xl text-[#ECDBBA] font-bold">Nikita Gorshkov</h1>
            <span className="text-[#b3f7ff] text-3xl">
              <Typewriter words={[
                "competitive programmer",
                "problem solver",
                "IB student",
                "web developer",
              ]} 
              cursor 
              typeSpeed={70} 
              deleteSpeed={60}
              delaySpeed={1200} />
            </span>
            <br />
            <div className="text-[#faf8f0] text-xl my-4">
              <p>Hi! I'm currently a high school junior who enjoys web development and I do some competitive programming on the side.</p>
              <br />
              <p> I'm currently a web developer for the <a href="https://joincpi.org/" className="font-semibold text-purple-600">Competitive Programming Initiative</a> and <a href="https://www.cerealcodes.org/" className="font-semibold"><span className="text-sky-500">Cereal</span><span className="text-green-600">Codes</span></a>.</p>
              <br />
              <p>I'll be adding more to this website very soon since I currently have some free time.</p>
              <br />
              <p>In the meantime, check out my GitHub profile (<a href="https://github.com/nikita-go" className="font-semibold text-transparent text-animation">@nikita-go</a>)!</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
