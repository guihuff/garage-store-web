import Link from "next/link";
import { AiOutlineWhatsApp } from 'react-icons/ai';

export function Header () {
  return (
    <header className="w-full h-14 bg-header-background text-header-foreground">
      <div className="container m-auto flex justify-start items-center gap-5">
        <Link href={"/"}  className="font-light text-xl">bazarG</Link>
        <nav className="font-medium">
          <ul className="flex h-14 items-center justify-start gap-2">
            <li>
              <Link href={"/"} className="px-3 py-2 hover:text-emphasis-background transition">Home</Link>
            </li>
            <li>
              <Link href={"/info"} className="px-3 py-2 hover:text-emphasis-background transition">Info</Link>
            </li>
          </ul>
        </nav>
        <Link href={"https://wa.me/5551995119425?text=Ol%C3%A1%2C+vim+pelos+itens+usados%21"} 
          target="_blank" 
          className="ml-auto hover:text-green-500 transition">
          <AiOutlineWhatsApp size={25} />
        </Link>
      </div>
      
    </header>
  )
}