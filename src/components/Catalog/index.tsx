import { createClient } from "@/prismicio";
import * as prismicH from '@prismicio/helpers';
import Image from "next/image";
import Link from "next/link";

export async function Catalog() {
  const client = createClient();

  const response = await client.getAllByType('itens', {
    fetchOptions: {
      cache: 'no-store',
      next: { tags: ['prismic', 'itens'] },
    },
    lang: 'pt-br', 
    orderings: {
      field: 'document.first_publication_date'
    },
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
    <ul className="flex gap-3 flex-wrap justify-center">
      {itens.map((item) => {
        return (
          <li key={item.uid} className="w-[290px] h-[389.5px] overflow-hidden bg-slate-50 cursor-pointer hover:scale-105 transition">
            <Link href={`item/${item.uid}`}>
              <Image 
                src={item.image.url ? item.image.url : ''} 
                width={290} height={170} quality={100} alt={`Imagem ${item.title}`}
                className="w-[290px] h-[220px] object-contain"
              />
            
            <article className="mt-1 p-3">
              <h2 className="font-medium">{item.title}</h2>
              <h3 className="font-bold flex justify-between"><span>qnt: {item.qnt}</span><span>R$ {item.price}</span></h3>
              <p className="text-sm text-zinc-500 line-clamp-2 h-10">
                {item.description}
              </p>
              <h4 className="text-zinc-600 text-xs">COD: {item.code}</h4> 
            </article>
            </Link>
            <Link 
              href={`https://api.whatsapp.com/send?phone=5551995119425&text=Bom dia, vim pelos móveis usados, estou buscando o item: ${item.title}, código: ${item.code}`} 
              className="w-full h-10 flex justify-center items-center bg-emphasis-background text-background-start hover:text-zinc-600 transition"
              target="_blank"
            >
              Comprar
            </Link>
          </li>
        )
      })}
  </ul>
  )
}
