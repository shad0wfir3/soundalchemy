"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navigation } from "../../components/nav";
import AudioPlayer from "react-modern-audio-player";
import { Eye } from "lucide-react";
import { Card } from "@/app/components/card";
import { toTitleCase } from "@/util/functions";
import { PlayCircle } from "lucide-react";
import { StopCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


type AudioFile = {
  id: number;
  name: string;
  src: string;
  description: string;
  duration: number; // Assuming duration is a number (in seconds, for example)
};

type ApiResponse = { Key: string }[];

export default function ProjectsPerYearPage() {
  const params = useParams<{ year: string }>();
  const year = params?.year ?? "";

  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (year) {
      setIsLoading(true);
      fetch(`/api/audioclips/${year}`)
        .then((response) => response.json())
        .then(async (data: ApiResponse) => {
          const promises = data.map(async (file: { Key: string; }, index: any) => {
            const audio = new Audio(
              `https://s3.af-south-1.amazonaws.com/soundalchemy.studio/${file.Key}`
            );
            return new Promise((resolve) => {
              audio.onloadedmetadata = () => {
                resolve({
                  id: index,
                  name: toTitleCase(
                    file.Key.split("/")[1]
                      .replace(".wav", "")
                      .replace(".mp3", "")
                      .replace(/_/g, " ")
                  ),
                  src: audio.src,
                  description: "Sample Description",
                  duration: audio.duration,
                });
              };
            });
          });

          const adaptedData = await Promise.all(promises);
          setAudioFiles(adaptedData);
          setIsLoading(false); // End loading
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Failed to fetch audio files:", error);
        });
    }
  }, [year]);

  const handleCardClick = (trackId: number) => {
    // If the clicked track is already playing, stop the playback.
    if (isPlaying && currentTrackId === trackId) {
      setIsPlaying(false); // Stops the playback
    } else {
      // Otherwise, start playing the clicked track.
      setIsPlaying(true); // Starts playback
      setCurrentTrackId(trackId); // Sets the current track to the clicked one
    }
  };

  function formatDuration(duration: number) {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="">
          <div className="flex justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects of {year}
          </h2>
          <Link href="/projects">
          <ArrowLeft className="w-10 h-10 mt-2 text-zinc-500" />
          </Link>
          

          </div>
         

          <p className="mt-4 text-zinc-400">
            Some of my most FAVOURITE projects from {year} that I have worked
            on.
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="text-xl text-white">Loading...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            {audioFiles.map((track) => (
              <div
                key={track.id} // Cast the type of track.id to string
                className="cursor-pointer"
                onClick={() => handleCardClick(track.id)}
              >
                {/* Card Component with track details */}
                <Card>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <span>SOON</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <Eye className="w-4 h-4" />{" "}
                        {formatDuration(track.duration as number)}
                      </span>
                    </div>
                    <div className="flex items-center mt-4">
                             {/* Conditional rendering of Play/Stop icon */}
                             {currentTrackId === track.id && isPlaying ? (
                        <StopCircle
                          className="w-10 h-10 text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying(false);
                          }}
                        />
                      ) : (
                        <PlayCircle
                          className="w-10 h-10 text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(track.id);
                          }}
                        />
                      )}
                    <h2 className=" ml-4 mb-1text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                      {track.name}
                    </h2>
                    </div>
                    {/* <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {track.description}
                    </p> */}
                  </article>
                </Card>
              </div>
            ))}
          </div>
        )}

        {audioFiles.length > 0 && (
          <AudioPlayer
            playList={audioFiles}
            audioInitialState={{
              isPlaying,
              curPlayId: currentTrackId ?? 0,
            }}
            activeUI={{
              all: false,
              playButton: true,
              playList: false,
              prevNnext: true,
              volume: true,
              volumeSlider: true,
              repeatType: true,
              trackTime: true,
              trackInfo: false,
              artwork: false,
            }}
            placement={{
              player: "bottom-left",
            }}
            rootContainerProps={{
              colorScheme: "dark",
              width: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
}
