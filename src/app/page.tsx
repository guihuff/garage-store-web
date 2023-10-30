import Image from "next/image";
import Banner from "@/assets/livingroom.jpg";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Catalog } from "@/components/Catalog";

export default async function Home() {
  

  return (
    <main className="w-full">
      <section className='md:h-80 w-full flex flex-col md:flex-row justify-center items-center md:gap-8 my-5 overflow-hidden'>
        <div className="flex flex-col-reverse md:flex-col md:w-[340px] text-center md:text-end">
          <h1 className="text-7xl md:text-8xl font-medium">Venda</h1>
          <p><span className="text-zinc-800">Catálogo de itens usados à venda.</span> Aqui é apenas um catálogo. As negociações serão realizadas via WhatsApp.</p>
        </div>
        <div className="flex md:flex-col md:text-7xl font-thin text-center">
          <h1>d</h1>
          <h1>e</h1>
        </div>
        <div className="flex flex-col-reverse md:flex-col md:w-[340px] text-center md:text-start">
          <p>Estou desapegando de alguns itens devido à mudança após a conclusão da faculdade. Sinta-se à vontade para entrar em contato!</p>
          <h1 className="text-7xl font-light">Usados</h1>
        </div>
      </section>
      <section className="relative w-full flex flex-col items-center">
        <div className="h-[230px] md:h-[360px] w-full bg-emphasis-background"></div>
        <Image src={Banner} alt="Imagem banner sala de estar" quality={100}
          className="w-[80%] object-cover h-[250px] md:h-[350px] translate-y-1/4 absolute object-bottom bg-zinc-200"
        />
        <div className="h-[130px] md:h-[140px] w-full bg-background-start"></div>
      </section>
      <section className="my-3 container mx-auto ">
        <div>
          <h1 className="uppercase text-center font-extrabold text-2xl">Catálogo de itens disponíveis</h1>
        </div>
        <div className="w-full my-5">
          <Catalog />
        </div>
      </section>
      <Footer />
    </main>
  )
}
