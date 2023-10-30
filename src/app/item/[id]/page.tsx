import { createClient } from "@/prismicio";
import * as prismicH from '@prismicio/helpers';
import { ImagesView } from "./components/images";
import Link from "next/link";

interface ItemPageProps {
  params: {
    id: string;
  }
}

export default async function Item({ params }: ItemPageProps) {
  const client = createClient();

  const response = await client.getByUID('itens', params.id, {
    fetchOptions: {
      cache: 'no-cache',
      next: { tags: ['prismic', 'itens'] },
    },
    lang: 'pt-br'
  });

  const {
    title, description, code,
    price, qnt, long_description,
    image, image_two, image_three, image_four,
    link_whats
  } = response.data;

  const item = {
    uid: response.uid,
    title: prismicH.asText(title),
    description: prismicH.asText(description),
    code: prismicH.asText(code),
    price: prismicH.asText(price),
    qnt,
    long_description: long_description.map(item => {
      return 'text' in item ? item.text : '';
    }),
    images: [image.url, image_two.url, image_three.url, image_four.url] as string[],
    link_whats: prismicH.asLink(link_whats),
  }

  return (
    <>
      <main className="container mx-auto my-2">
        <h1 className="text-2xl uppercase font-bold mt-6 mb-3">
          {item.title}
        </h1>
        <ImagesView images={item.images} />
        <hr className="my-3 border-zinc-500"/>
        <section className="flex justify-between items-end mx-5 flex-col md:flex-row gap-3">
          <p className="text-lg self-start">
            {item.description}
          </p>
          <div className="flex flex-col w-64 items-end gap-2">
            <h2 className="text-4xl font-extrabold">R$ {item.price}</h2>
            <h2 className="font-light">Quantidade: {item.qnt}</h2>
            <Link href={`https://api.whatsapp.com/send?phone=5551995119425&text=Bom dia, vim pelos móveis usados, estou buscando o item: ${item.title}, código: ${item.code}`} 
              className="w-full h-16 flex justify-center items-center bg-emphasis-background text-background-start hover:text-zinc-600 transition"
              target="_blank"
            >
              Comprar
            </Link>
            
            
          </div>
        </section>
        <section>
          <h2 className="text-xl font-extrabold mb-4">Descrição:</h2>
          <div className="flex flex-col gap-2">
          {item.long_description.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            )
          })}
          </div>
        </section>
      </main>
    </>
  )
}