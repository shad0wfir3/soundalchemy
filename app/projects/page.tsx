import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";

export const revalidate = 60;
export default function ProjectsYearsPage() {
  const years = [
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 items-centre pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 text-center">
        <h1 className="z-10 items-centre text-4xl tracking-wider text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          {years.map((year) => (
            <Link key={year} href={`/projects/${year}`}>
                {year}
                <br />
            </Link>
          ))}
        </h1>
      </div>
    </div>
  );
}
