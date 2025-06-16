"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const headerImages = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Développement Web",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Applications Mobile",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    title: "Design UI/UX",
  },
]

export function HeaderCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {headerImages.map((item) => (
          <CarouselItem key={item.id}>
            <div className="relative w-full h-[400px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">{item.title}</h2>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
} 