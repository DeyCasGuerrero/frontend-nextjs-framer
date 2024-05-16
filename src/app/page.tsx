import InformationSection from "@/components/sections/Infomation";
import Slogan from "@/components/sections/Slogan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-neutral-100 to-slate-300 min-h-screen w-full flex flex-col items-center gap-20 justify-center" >
        <div className=" mt-12 flex flex-row items-center gap-36 ">
          <div className="border-8 border-slate-200 shadow-2xl">
            <Image
              src="https://i.postimg.cc/BQCxwqcG/fondo.webp"
              alt="fondo"
              width={600}
              height={0}
              quality={100}
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="h-[20em] w-[35em] shadow-2xl bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0">
            <div className="circle absolute h-[10em] w-[10em] -top-[2.5em] -right-[4.5em] rounded-full bg-green-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>

            <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-[#6C3082] group-hover:text-[white] duration-500">
              <span className="relative before:h-[0.16em] before:absolute before:w-full before:content-[''] before:bg-[#6C3082] group-hover:before:bg-[white] duration-300 before:bottom-0 before:left-0">More Info</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <h1 className="z-20 font-bold text-black group-hover:text-white duration-500 text-[1.4em]">
              HEADING
            </h1>

            <p className="text-center text-black font-bold group-hover:text-white duration-500 text-[1.4em] p-10">Conoce y busca diferentes canciones de la API de Spotify</p>
          </div>

        </div>

        <Slogan />
      </main>
      <InformationSection></InformationSection>
    </>
  );
}