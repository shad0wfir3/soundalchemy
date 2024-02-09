"use client";
import React, { useState } from "react";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import { PlayCircle } from "lucide-react";
import AudioPlayer from "react-modern-audio-player";

// Define the full playlist outside the component if it does not change,
// or fetch it from an API/context if it's dynamic
const fullPlayList = [
  {
    name: "Podcast Promo",
    type: "Promo",
    src: "http://localhost:3000/podcast_promo.wav",
    description: "A promo for a podcast",
    id: 1,
  },
  {
    name: "Cape Talk Imaging",
    type: "Imaging",
    src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
    description: "Imaging for Cape Talk",
    id: 2,
  },
  {
    name: "Adoozie",
    type: "Generic",
    src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
    description: "Generic ad for Adoozie",
    id: 3,
  },
  {
    name: "Bla Bla",
    type: "Generic",
    src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
    description: "Generic ad for Bla Bla",
    id: 4,
  },
  {
    name: "Axion",
    src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
    type: "Generic",
    description: "Generic ad for Axion",
    id: 5,
  },
];
export default function ProjectsYearPage({ params }) {
  const { year } = params;

  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Handles play/pause toggling and track selection
  const handleCardClick = (trackId) => {
    if (currentTrackId === trackId && isPlaying) {
      setIsPlaying(false); // Pause if the same track is clicked
    } else {
      setCurrentTrackId(trackId);
      setIsPlaying(true); // Play the new track or if paused
    }
  };

  // Filter the playlist for the AudioPlayer based on selection
  const selectedPlayList = fullPlayList.filter(
    ({ id }) => id === currentTrackId
  );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {year}'s Favorite Audio Work
        </h2>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {fullPlayList.map((track) => (
            <div
              key={track.id}
              className="cursor-pointer"
              onClick={() => handleCardClick(track.id)}
            >
              <Card>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">{track.type}</div>
                    <div className="text-xs text-zinc-100">{track.type}</div>
                  </div>
                  <div className="flex flex-items item-center">
                  <PlayCircle className="text-zinc-100 w-11 h-11 mt-4" />
                    <h2 className="ml-3 mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                       {track.name}
                    </h2>
                  </div>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {track.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8"></div>
                </article>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <AudioPlayer
        playList={isPlaying && currentTrackId ? selectedPlayList : fullPlayList}
        activeUI={{ all: true, progress: "waveform" }}
        audioInitialState={{ isPlaying, curPlayId: currentTrackId }}
        autoPlay={true}
        placement={{
          player: "bottom-left",
          interface: {},
          playList: "bottom",
          volumeSlider: undefined,
        }}
        rootContainerProps={{
          colorScheme: "dark",
          width: "100%",
        }}
      />
    </div>
  );
}
