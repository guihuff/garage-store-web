

export default function Home() {
  return (
    <main className="w-full">
      <section className='md:h-80 w-full flex flex-col md:flex-row justify-center items-center md:gap-8 my-5 overflow-hidden'>
        <div className="flex flex-col-reverse md:flex-col md:w-[340px] text-center md:text-end">
          <h1 className="text-7xl md:text-8xl font-medium">Venda</h1>
          <p><span className="text-zinc-800">Catálogo de itens usados à venda.</span> Preços marcados, aberto a negociações! Aqui é apenas um catálogo. As negociações serão realizadas via WhatsApp.</p>
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
    </main>
  )
}
