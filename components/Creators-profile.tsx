"use client"

import FacebookIcon from "@/public/icons/FacebookIcon"
import LinkedinIcon from "@/public/icons/LinkedinIcon"
import TwitterIcon from "@/public/icons/TwiterIcon"
import { Menu, X, MapPin } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"


export type Profile = {
  image: string
  name: string
  location: string
  role: string
  username: string
  bio: string
}

const profiles: Profile[] = [
  {
  image: "/images/esteban.jpeg",
    name: "Juan Pérez",
    location: "Medellín, CO",
    role: "UI designer",
    username: "juanperez",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta aliquam accusantium laborum. Earum magni necessitatibus, cupiditate atque voluptatem, obcaecati."
  },
  {
  image: "/images/carlos.jpg",
    name: "Ana Gómez",
    location: "Bogotá, CO",
    role: "Content Creator",
    username: "anagomez",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta aliquam accusantium laborum. Earum magni necessitatibus, cupiditate atque voluptatem, obcaecati."
  },
  {
  image: "/images/esteban.jpeg",
    name: "Carlos Ruiz",
    location: "Cali, CO",
    role: "Web Developer",
    username: "carlosruiz",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta aliquam accusantium laborum. Earum magni necessitatibus, cupiditate atque voluptatem, obcaecati."
  },
  {
  image: "/images/carlos.jpg",
    name: "Carlos Ruiz",
    location: "Cali, CO",
    role: "Web Developer",
    username: "carlosruiz",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta aliquam accusantium laborum. Earum magni necessitatibus, cupiditate atque voluptatem, obcaecati."
  }
]

export function CreatorsProfile() {
  return (
    <section className="flex flex-col justify-start items-center py-0">
      <h2 className="text-4xl font-extrabold mb-4 w-full max-w-4xl text-center mx-auto bg-gradient-to-r from-white via-green-400 to-green-700 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
        Creadores destacados de la comunidad
      </h2>
      <p className="text-lg text-white text-center max-w-2xl mx-auto mb-24 font-medium drop-shadow">
        Conoce a las mentes que hacen posible este proyecto.<br />
        Detrás de cada línea de código y cada decisión de diseño hay un equipo comprometido con la innovación y la excelencia.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {profiles.map((profile, idx) => (
          <GlassProfileCard key={idx} profile={profile} />
        ))}
      </div>
    </section>
  )
}

function GlassProfileCard({ profile }: { profile: Profile }) {
  const [showData, setShowData] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      <input type="checkbox" id={`data-${profile.username}`} className="sr-only peer/data" role="switch" aria-label="Data Toggle" />
      <input type="checkbox" id={`content-${profile.username}`} className="sr-only peer/content" role="switch" aria-label="Content Toggle" />
      
      <div className="z-10 rounded-xl overflow-hiddenS group relative w-60
        before:absolute
        before:w-42
        before:aspect-square
        before:rounded-full
        before:bg-green-200
        before:blur-lg 
        before:right-3
        before:top-0
        before:-z-10
        after:absolute
        after:w-32
        after:aspect-square
        after:rounded-full
        after:bg-teal-300
        after:blur-lg 
        after:left-4
        after:bottom-0
        after:-z-10
        peer-checked/data:first:[&_#toggle-data>span]:scale-0
        peer-checked/data:last:[&_#toggle-data>span]:scale-100
        peer-checked/data:[&_#panel-data]:-translate-y-14
        peer-checked/data:[&_#panel-social]:translate-y-12
        peer-checked/content:[&_#panel-content]:opacity-100
        peer-checked/content:[&_#panel-content]:pointer-events-auto">
        
        <div className="relative bg-black rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 w-60 p-12 text-center border-2 border-green-900/30 shadow-green-900/10 shadow-lg">
          <Image 
            src={profile.image} 
            width={110}
            height={110}
            alt={profile.name}
            className="rounded-full mx-auto w-28 h-28 border-4 border-green-900/20 object-cover opacity-70 group-hover:opacity-100 transition"
          />
          <h3 className="font-bold mt-6 text-white">{profile.name}</h3>
          <p className="flex items-center justify-center gap-1 text-sm">
            <MapPin className="w-4 h-4 text-green-300" />
            {profile.location}
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowContent(true)}
              className="text-xs rounded-full p-2 px-3 bg-white text-black transition hover:shadow-xl hover:scale-110"
            >
              Ver contenido
            </button>
          </div>
        </div>
        
        <div className="grid [grid-template-areas:'stack'] place-content-center absolute top-4 right-4 cursor-pointer hover:scale-150 transition"
          onClick={() => setShowData((v) => !v)}
        >
          <span className={`[grid-area:stack] transition-all duration-300 text-sm ${showData ? 'scale-0' : 'scale-100'}`}><Menu className="w-5 h-5" /></span>
          <span className={`[grid-area:stack] transition-all duration-300 text-sm ${showData ? 'scale-100' : 'scale-0'}`}><X className="w-5 h-5" /></span>
        </div>
        
        <div id="panel-data" className={`absolute -top-4 left-8 right-8 w-8/10 h-40 -z-20 bg-[#38EB81] rounded-t-md text-white p-6 pt-4 transition duration-300 ${showData ? '-translate-y-14 opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <p>{profile.role}</p>
          <a href="#">@{profile.username}</a>
        </div>
        
        <div id="panel-social" className={`absolute transition duration-300 -bottom-4 left-8 right-8 p-6 pb-2 w-8/10 h-20 -z-20 bg-[#38EB81] text-white rounded-b-md flex items-center justify-between gap-2 [&>svg]:cursor-pointer [&>svg]:w-5 [&>svg]:h-5 [&>svg:hover]:scale-125 [&>svg]:transition ${showData ? 'translate-y-12 opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <TwitterIcon />
          <LinkedinIcon />
          <FacebookIcon />
          
        </div>
        
        <div className="absolute bg-black inset-0 -z-20 rounded-xl"></div>
        
        <div id="panel-content" className={`absolute bg-black inset-0 rounded-xl p-8 space-y-4 transition-all duration-500 ${showContent ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <h2 className="font-bold">{profile.name}</h2>
          <p className="text-sm">{profile.bio}</p>
          <button
            onClick={() => setShowContent(false)}
            className="cursor-pointer absolute top-4 right-4 w-6 h-6 text-base text-gray-500 grid place-items-center hover:scale-150 transition"
          ><X className="w-5 h-5" /></button>
        </div>
      </div>
    </>
  )
}

export default CreatorsProfile