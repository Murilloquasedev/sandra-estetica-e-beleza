import { Logo } from "./components/logo";



export default function Home() {
  return (
      <main className="min-h-screen w-full relative flex items-center flex-col">
        <title>Sandra Estética e Beleza</title>
        <header className="flex items-center justify-between w-full p-6 text-gray-500 bg-pink-100">
          <Logo/>
          <nav className="flex items-center justify-center gap-12  ">
            <a href="">Serviços</a>
            <a href="">Por que nos escolher</a>
            <a href="">Quem somos</a>
           </nav>
          <button className="">Contatos</button>
        </header>
        <div className="w-full h-fit p-10 bg-pink-100 py-40 pb-72">
          <div className="items-center flex flex-col text-center ">
             <h1 className="text-gray-500 text-5xl ">Sandra Estética e Beleza</h1> 
             <h2 className="text-slate-500 mb-12 mt-8 text-xl font-extralight">"Realce sua beleza interior e exterior"</h2>
             
          </div>
        </div>
        <div className="bg-pink-100 w-full flex flex-col p-6">
          <div className="flex flex-col items-center text-center p-12">
            <h1 className="text-gray-700 text-2xl">Serviços</h1>
          </div>

          <div className="m-12">
            <h2 className="text-gray-700 text-2xl font-light">Sobrancelha a linha</h2>
            <p className="text-gray-700 font-extralight">Descubra a arte da definição  de sobrancelhas através da técnica milenar da linha. <br />
            Dominanamos a arte do threading para criar sobrancelhas
            impecáveis e elegantes.</p>
          </div>

          <div className="m-12 text-right">
            <h2 className="text-gray-700 text-2xl font-light">Depilação com Cera</h2>
            <p className="text-gray-700 font-extralight">Do rosto às pernas e além, oferecemos uma depilação precisa e cuidadosa <br />
             que deixa a sua pele incrivelmente macia e livre de pelos por semanas.</p>
          </div>

          <div className="m-12">
            <h2 className="text-gray-700 text-2xl font-light">Depilação a laser</h2>
            <p className="text-gray-700 font-extralight">A depilação a laser não só proporciona uma pele suave e sedosa, mas também reduz <br />
             gradualmente o crescimento dos pelos, garantindo uma sensação de frescor e confiança duradoura. </p>
          </div>

          <div className="m-12 text-right">
            <h2 className="text-gray-700 text-2xl font-light">Micropigmentação</h2>
            <p className="text-gray-700 font-extralight">Descubra a arte da micropigmentação, uma técnica refinada que redefine a beleza natural. <br />
            envolve a aplicação cuidadosa de pigmentos de qualidade premium na camada superficial da pele, <br /> criando uma aparência natural e duradoura. </p>
          </div>

          <div className="m-12">
            <h2 className="text-gray-700 text-2xl font-light">Dermaplaning</h2>
            <p className="text-gray-700 font-extralight">Explore a suavidade e o brilho da sua pele com a dermaplaning, um tratamento inovador de esfoliação. <br />
            utilizamos uma técnica delicada que remove suavemente as camadas superficiais de células mortas e pelos faciais, <br /> revelando uma pele radiante e renovada. </p>
          </div>          

          <div className="m-12 text-right">
            <h2 className="text-gray-700 text-2xl font-light">Limpeza de pele</h2>
            <p className="text-gray-700 font-extralight">Revitalize a sua pele com a nossa experiência de limpeza profunda. Nossa limpeza de pele é projetada <br />
             para remover impurezas, desobstruir os poros e proporcionar uma tez fresca e radiante.</p>
          </div>

          <div className="m-12">
            <h2 className="text-gray-700 text-2xl font-light">Remoção de tatoo e sobrancelha</h2>
            <p className="text-gray-700 font-extralight">Oferecemos soluções de remoção eficazes para trazer um novo começo à sua pele. <br />
            As escolhas de ontem podem não refletir o que você é hoje, e é por isso que <br /> oferecemos serviços de remoção de tatuagens e sobrancelhas</p>
          </div>       
        </div>
        <div>
        <div className="flex flex-col bg-pink-100 text-gray-700 p-32">
            <h1 className="text-center m-12 text-2xl">Quem somos</h1>
            <p className="font-extralight">Nos comprometemos em proporcionar uma experiência única de beleza e bem-estar. Há 10 anos, estamos dedicados a realçar
             a sua beleza natural e elevar a sua confiança.
             Nosso objetivo é oferecer um ambiente acolhedor e relaxante, onde cada visita seja uma pausa revitalizante da agitação do dia a dia. Nossa equipe
              de profissionais altamente treinados e experientes está pronta para oferecer serviços excepcionais, desde tratamentos de pele de última geração até serviços de cuidados com as sobrancelhas e muito mais.
             Aqui, acreditamos que a beleza vai além da superfície. Buscamos criar uma conexão pessoal com cada cliente, entendendo suas necessidades individuais
              e personalizando nossos serviços para alcançar resultados notáveis. Nosso compromisso com a qualidade e a satisfação do cliente é o que nos diferencia.
             Obrigado por nos escolher como o seu destino de cuidados com a beleza. Estamos ansiosos para cuidar de você e ajudá-lo a alcançar
              a sua melhor versão. Junte-se a nós nessa jornada de beleza, autoestima e bem-estar.</p>
          </div>

          <div className="flex flex-col bg-pink-100 text-gray-700 p-32">
            <h1 className="text-center m-12 text-2xl">Porque somos um diferencial</h1>
            <p className="font-extralight">Nossa dedicação à excelência, nossa paixão pela beleza e nossa busca incessante por proporcionar uma experiência excepcional
             são apenas algumas das razões pelas quais somos a escolha ideal para os seus cuidados com a beleza. Aqui estão alguns motivos que nos tornam únicos</p>
          </div>

        </div>
      </main>
  )
}
