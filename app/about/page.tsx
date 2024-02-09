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
        <div className="grid w-full grid-cols-3 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          <div>
            <Card>
              <img src="tasneem.webp" alt="" />
            </Card>
          </div>
          <div className="col-span-2">
            <Card>
              <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                    <span>ABOUT ME</span>
                  </span>
                  <span className="text-zinc-500 text-xs  flex items-center gap-1">
                    asdfadsf
                  </span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                  Tasneem @ Sound Alchemy
                </h2>
                <p className="mt-4  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Hey there, I’m Tasneem, the force behind Sound Alchemy. I live
                  in the world of sound, turning{" "}
                  <i>what you hear into something you feel</i>. At Primedia
                  Broadcasting, I’ve got my hands on everything from radio
                  dramas to live shows, making sure it's not just sound—it's an
                  experience.
                </p>
                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Sound Alchemy is my playground. It's where creativity meets
                  tech to make audio that sticks with you. I’m always on the
                  lookout for the next thing in sound, pushing the limits to see
                  how far we can go.
                </p>
                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  Welcome to Sound Alchemy. Here, every piece tells a story, and
                  I’m here to make sure it’s one you won’t forget.
                </p>
                <p className="mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  If you are interested in my CV - you can download it here{" "}
                  <Link
                    href={`pdfURL.pdf`}
                    className="cursor-pointer text-zinc-400 border-0 block"
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <span className="inline-flex items-baseline">
                      <svg
                        width="100%"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-center w-5 h-5 mx-1"
                      >
                        <path
                          d="M8.5 7L8.5 14M8.5 14L11 11M8.5 14L6 11"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.5 7L15.5 14M15.5 14L18 11M15.5 14L13 11"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 17H12H6"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                          stroke="#fff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span>Download Resume</span>
                    </span>
                  </Link>
                </p>
              </article>
            </Card>
          </div>

          {/* {socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))} */}
        </div>
      </div>
    </div>
  );
}
