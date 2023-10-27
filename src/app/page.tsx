import Image from "next/image";
import Banner from "@/assets/livingroom.jpg";
import { Footer } from "@/components/Footer";
import { createClient } from "@/prismicio";
import * as prismicH from '@prismicio/helpers';
import Link from "next/link";

export const revalidate = 60 * 2;

export default async function Home() {
  const client = createClient();

  const response = await client.getAllByType('itens', {
    lang: 'pt-br'
  });

  const itens = response.map(item => {
    return {
      uid: item.uid,
      title: prismicH.asText(item.data.title),
      description: prismicH.asText(item.data.description),
      qnt: item.data.qnt,
      price: prismicH.asText(item.data.price),
      code: prismicH.asText(item.data.code),
      image: item.data.image,
      link: prismicH.asLink(item.data.link_whats)
    }
  });

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
          <ul className="flex gap-3 flex-wrap justify-center">
            {itens.map((item) => {
              return (
                <li key={item.uid} className="w-[290px] h-[389.5px] overflow-hidden bg-slate-50 cursor-pointer hover:scale-105 transition">
                  <Link href={`item/${item.uid}`}>
                    <Image 
                      src={item.image.url ? item.image.url : ''} 
                      width={290} height={100} quality={100} alt={`Imagem ${item.title}`}
                    />
                  
                  <article className="mt-1 p-3">
                    <h2 className="font-medium">{item.title}</h2>
                    <h3 className="font-bold flex justify-between"><span>qnt: {item.qnt}</span><span>R$ {item.price}</span></h3>
                    <p className="text-sm text-zinc-500 line-clamp-2">
                      {item.description}
                    </p>
                    <h4 className="text-zinc-600 text-xs">COD: {item.code}</h4> 
                  </article>
                  </Link>
                  <Link href={item.link ? item.link : '/'} className="w-full h-10 flex justify-center items-center bg-emphasis-background text-background-start hover:text-zinc-600 transition">
                    Comprar
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
