"use client"

import Image from "next/image";
import { useState } from "react";

interface ImagesViewProps {
  images: string[] ;
}
export function ImagesView ({ images }: ImagesViewProps) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <Image src={images[activeImage]} alt={"Imagem principal do item"}  width={1920} height={1080}
          className="w-full max-w-[800px] max-h-[450px] object-contain " 
        />
        <div className="flex md:flex-col items-start">
          {images.map((item, index) => {
            return (
              <button key={index} 
                className={`hover:scale-105 transition mx-2 p-2 flex justify-center items-center ${index === activeImage && 'border rounded-xl border-emphasis-background'}`}
                onClick={() => setActiveImage(index)}
              >
                <Image src={item} alt={`Imagem numero ${index}`}  width={300} height={180}
                  className="md:w-32 object-contain" 
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}