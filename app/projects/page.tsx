"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";

export default function ProjectsYearsPage() {
  const [years, setYears] = useState([]);

  useEffect(() => {
    async function fetchYears() {
      const response = await fetch("/api/years");
      const yearsData = await response.json();
      setYears(yearsData);
    }

    fetchYears();
  }, []);

  return (
    <>
      <Navigation />
      <div className="flex justify-center pt-20">
        <div className="grid grid-cols-3 gap-4 mt-30 pt-10">
          {years.map((year) => (
            <div className="p-4">
            
                <Link href={`/projects/${year}`}>
                  <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                  <article className="relative w-full h-full p-4 md:p-8">
                    <h2 className="text-center text-5xl font-bold text-zinc-100 group-hover:text-white md:text-8xl sm:text-4xl font-display animate-title">
                      {year}
                    </h2>
                  </article>
                  <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
                </Link>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
