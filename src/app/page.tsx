import CardComponent from "@/components/common/Card";
import ImagenComponent from "@/components/img/Imagen";
import InformationSection from "@/components/sections/Infomation";
import Slogan from "@/components/sections/Slogan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-neutral-100 to-slate-300 min-h-screen w-full flex flex-col items-center gap-20 justify-center" >
        <div className=" flex flex-row items-center gap-36 m-12">
          
          <ImagenComponent/>
          <CardComponent/>

        </div>

        <Slogan />
      </main>
      <InformationSection></InformationSection>
    </>
  );
}