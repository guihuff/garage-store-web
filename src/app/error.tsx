"use client"

import Link from "next/link";

export default function Error ({error, reset}: {error: Error; reset: () => void}) {
  return (
    <div className="md:min-h-[83vh] flex justify-center items-center flex-col gap-4">
      <h1 className="text-xl">Algo deu errado!</h1>
    </div>
  )
}