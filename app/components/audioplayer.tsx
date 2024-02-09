'use client'
import AudioPlayer from 'react-modern-audio-player';

const playList = [
  {
    name: 'name',
    writer: 'writer',
    img: 'image.jpg',
    src: 'audio.mp3',
    id: 1,
  },
]
export default function Player (){
	return (
		<AudioPlayer playList={playList} />
	)
}