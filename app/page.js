import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4 space-y-4 bg-white p-4">

      <div className="text-center p-4 bg-white text-black font-bold text-2xl">
        Meus carros
      </div>

      {/* Aqui começa a primeira div */}

      <div className="flex bg-white p-4 space-x-4">

        <div className="border-4 border-gray-800 text-black m-4 bg-gray-300 p-4 w-1/2  text-center rounded-xl">
          <Image
            src="/celta.jpg"
            alt="Celta"
            width={500}
            height={300}
            className="m-auto"
            rounded="xl"
          />
          <h1>CHEVROLET CELTA</h1>
          <h2>Ano: 2010</h2>
          <p>R$ 11.000</p>
        </div>

        <div className="border-4 border-red text-black text-center m-4 bg-gray-300 p-4 w-1/2 rounded-xl">
          <Image
            src="/fusca.jpg"
            alt="fusca"
            width={500}
            height={300}
            className="m-auto"
          />
          <h1>VOLKSWAGEN FUSCA</h1>
          <h2>Ano: 1981</h2>
          <p>R$ 20.000</p>
        </div>

        <div className="border-4 border-red text-black text-center m-4 bg-gray-300 p-4 w-1/2 rounded-xl">
          <Image
            src="/gol.jpg"
            alt="gol"
            width={500}
            height={300}
            className="m-auto"
          />
          <h1>VOLKSWAGEN GOL</h1>
          <h2>Ano: 2013</h2>
          <p>R$ 34.000</p>
        </div>
      </div>

      {/* Aqui começa a segunda div */}

      <div className="flex bg-white p-4 space-x-4">
        <div className="border-4 border-black text-black m-4 bg-gray-300 p-4 w-1/2  text-center rounded-xl">
          <Image
            src="/kwid.webp"
            alt="Kwid"
            width={500}
            height={300}
            className="m-auto"
          />
          <h1>KWID Zen</h1>
          <h2>Ano: 2020</h2>
          <p>R$ 78.690</p>
        </div>

        <div className="border-4 border-black text-black m-4 bg-gray-300 p-4 w-1/2  text-center rounded-xl">
          <Image
            src="/mobi.webp"
            alt="Mobi"
            width={500}
            height={300}
            className="m-auto"
          />
          <h1>Fiat Mobi</h1>
          <h2>Ano: 2016</h2>
          <p>R$ 66.690</p>
        </div>


        <div className="border-4 border-black text-black m-4 bg-gray-300 p-4 w-1/2  text-center rounded-xl">
          <Image
            src='/palio.jpg'
            alt="Palio"
            width={500}
            height={300}
            className="m-auto"
          />
          <h1>FIAT PALIO</h1>
          <h2>Ano: 2008</h2>
          <p>R$ 29.990</p>
        </div>

      </div>
      
    </div>
    
  );
}
