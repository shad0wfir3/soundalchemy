"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Navigation } from "../../components/nav";
import AudioPlayer from "react-modern-audio-player";
import { Eye } from "lucide-react";
import { Card } from "@/app/components/card";
import { toTitleCase } from '@/util/functions';
import { PlayCircle } from "lucide-react";
import { StopCircle } from "lucide-react";

export default function ProjectsPerYearPage() {
  const params = useParams<{ year: string }>();
  const year = params?.year ?? "";

  const [audioFiles, setAudioFiles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState(null);

  useEffect(() => {
    if (year) {
      fetch(`/api/audioclips/${year}`)
        .then((response) => response.json())
        .then((data) => {
          const adaptedData = data.map((file, index) => ({
            id: index,
            name: toTitleCase(file.Key.split("/")[1].replace('.wav', '').replace('.mp3','').replace(/_/g, ' ')),
            src: `https://s3.af-south-1.amazonaws.com/soundalchemy.studio/${file.Key}`,
            description: "Sample Description",
          }));
          setAudioFiles(adaptedData);
        })
        .catch((error) => console.error("Failed to fetch audio files:", error));
    }
  }, [year]);

  const handleCardClick = (trackId) => {
    setIsPlaying(true); // Ensure the player is set to play
    setCurrentTrackId(trackId); // Update the current track ID to the clicked track
  };



  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {audioFiles.map((track) => (
            <div
              key={track.id}
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
                      <Eye className="w-4 h-4" /> 10:21
                    </span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {/* Conditional rendering of Play/Stop icon */}
                    {currentTrackId === track.id && isPlaying ? (
                      <StopCircle className="w-10 h-10" onClick={() => setIsPlaying(false)} />
                    ) : (
                      <PlayCircle className="w-10 h-10" onClick={() => handleCardClick(track.id)} />
                    )}
                    {track.name}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {track.description}
                  </p>
                </article>
              </Card>
            </div>
          ))}
        </div>
        {audioFiles.length > 0 && (
          <AudioPlayer
            playList={audioFiles}
            audioInitialState={{
              isPlaying,
              curPlayId: currentTrackId,
            }}
            autoPlay={isPlaying} // Auto-play when a track is clicked
            activeUI={{
              all: false,
              playButton: true,
              playList: "unSortable",
              prevNnext: true,
              volume: true,
              volumeSlider: true,
              repeatType: true,
              trackTime: true,
              trackInfo: true,
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
