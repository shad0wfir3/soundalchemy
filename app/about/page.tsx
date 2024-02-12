"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@chronark_",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "dev@chronark.com",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid grid-flow-row lg:grid-flow-col gap-8 mt-8">
          <div className="flex justify-center">
          <div>
            <Card>
              <img src="tasneem.webp" alt="" />
            </Card>
          </div>
          </div>
          <div className="flex justify-center lg:col-span-2">
          <Card>
              <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <span>ABOUT ME</span>
                  </span>
                  <span className="text-zinc-500 text-xs  flex items-center gap-1">
                    Sound Alchemy
                  </span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  Tasneem Boonzaaier
                </h2>
                <p className="mt-4  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Hello! Tasneem here, the driving force of Sound Alchemy. My
                  domain is the realm of sound, a place where I transform
                  auditory input into deep, tangible feelings.
                </p>
                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  I'm part of the team at Primedia Broadcasting, where my
                  day-to-day involves the intricate art of radio audio
                  production. My specialty lies in the creation of engaging
                  imaging, compelling advertisements, dynamic promos, and
                  detailed sound design. This is where my expertise truly
                  shines, crafting soundscapes that not only capture attention
                  but linger in the memory.
                </p>

                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Sound Alchemy represents more than just a project; it's my
                  creative sanctuary. It's the intersection where my flair for
                  innovation merges with the latest in audio technology to
                  produce something truly unique. I'm perpetually on the hunt
                  for the next groundbreaking sound, eager to explore the
                  possibilities and extend the boundaries of what we can achieve
                  with audio.
                </p>

                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  This space serves as an open invitation to my portfolio, a
                  curated collection of my endeavors and achievements over
                  recent years. Here, you'll get a glimpse into the breadth of
                  my work, each piece a testament to the journey of exploration
                  and creation I'm on.
                </p>

                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Welcome to the showcase of Sound Alchemy. Dive in, and let's
                  embark on this auditory adventure together, discovering the
                  stories and experiences I've woven through sound.
                </p>
              </article>
            </Card>
          </div>
        </div>
        {/* <div className="grid w-full grid-col-3  gap-8 mx-auto mt-32 sm:mt-0  md:grid-col-2 sm-grid-col-2 lg:gap-16 grid-flow-row"> */}
          
      
        {/* </div> */}
      </div>
    </div>
  );
}
