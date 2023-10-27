import { Footer } from "@/components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full">
      <section className='container mx-auto w-full my-5 overflow-hidden min-h-[62.3vh]'>
        <h1 className="text-3xl font-bold">Venda de Usados</h1>
        <h2 className="text-lg font-bold">Informações importantes!</h2>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Como funciona?</h3>
          <p className="md:w-[80%]">
            Este site é um catálogo completo dos móveis usados que tenho disponíveis para venda. 
            Aqui, você encontrará uma variedade de opções, todas cuidadosamente listadas com detalhes 
            sobre a quantidade disponível e os preços que estou oferecendo. 
            Espero que encontre algo que atenda às suas necessidades!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Como comprar?</h3>
          <div className="md:w-[80%]">
            <p>Para efetuar uma compra, é fácil e conveniente. Basta seguir uma destas opções:</p>
            <ol className="list-decimal pl-6 ">
              <li className="mt-2">
                Escolha o item desejado e clique em Comprar. 
                Em seguida, um link para o WhatsApp será automaticamente aberto. 
                Você verá uma mensagem pré-preenchida com o nome do item e seu código. 
                Basta enviá-la, e entrarei em contato para negociar os detalhes.
              </li>
              <li className="mt-2">
                Você também pode me contatar diretamente. Pelo <Link className="text-emerald-500" href={"https://wa.me/5551995119425?text=Ol%C3%A1%2C+vim+pelos+itens+usados%21"}>link</Link> ou
                salvando o número [(51) 99511-9425] e enviando uma mensagem. 
                Informe sobre o item que você deseja adquirir.
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Como ver os itens pessoalmente?</h3>
          <p className="md:w-[80%]">
            Todos os itens estão atualmente localizados em meu apartamento em Santa Helena, Paraná. 
            Fique à vontade para entrar em contato para agendar uma visita e conhecer os itens pessoalmente.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Seu DDD é de fora do estado como confiar?</h3>
          <p className="md:w-[80%]">
            Sou do Rio Grande de Sul e estou em Santa Helena para estudos. 
            Pode ficar tranquilo, não é necessário efetuar nenhum pagamento antecipado. 
            Fique à vontade para agendar uma visita e confirmar pessoalmente a autenticidade dos itens. 
            Estou comprometido em proporcionar a você uma experiência segura e confiável.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Achou o preço inadequado?</h3>
          <p className="md:w-[80%]">
            Caso você ache que algum preço não corresponde ao valor do item, sinta-se à vontade para fazer uma nova proposta.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row my-5 md:items-center p-3">
          <h3 className="font-bold w-60 mr-2">Tem frete?</h3>
          <p className="md:w-[80%]">
            Em todos os itens o frete é por conta do comprador, o comprador deve retirar os itens no apartamento.
          </p>
        </div>

      </section>
      <Footer />
    </main>
  )
}
