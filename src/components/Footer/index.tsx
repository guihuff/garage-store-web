import Link from "next/link";
import { AiOutlineWhatsApp } from 'react-icons/ai';

export function Footer () {
  return (
    <footer className="w-full  py-6 mt-12 bg-header-background text-header-foreground">
      <div className="container min-h-[180px] m-auto flex flex-col md:flex-row justify-evenly items-center gap-5 text-center">
        <h1 className="font-light text-4xl">bazarG</h1>
        <div className="flex flex-col">
          <h2 className="font-bold">Endereço</h2>
          <h3>Rua Argentina, Centro</h3>
          <h3>Santa Helena, PR</h3>
          <h3>858920-000</h3>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">Contato</h2>
          <h3>Fone: (51) 99511-9425</h3>
          <h3>ghuff@alunos.utfpr.edu.br</h3>
          <h3>ghuffg00@gmail.com</h3>
        </div>
        <Link href="https://wa.me/5551995119425?text=Ol%C3%A1%2C+vim+pelos+itens+usados%21" target="_blank" className="bg-emerald-500 py-5 px-4 hover:text-zinc-500 transition">
          Contatar
        </Link>
      </div>
    </footer>
  )
}