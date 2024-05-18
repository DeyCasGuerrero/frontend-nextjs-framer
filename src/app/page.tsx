import CardComponent from "@/components/common/Card";
import Footer from "@/components/sections/Footer";
import ImagenComponent from "@/components/img/ImagenMap";
import InformationSection from "@/components/sections/SectionInfomation";
import Slogan from "@/components/sections/SectionSlogan";
import {motion, useScroll } from "framer-motion"

export default function Home() {
  return (
    <>
      <main className=" bg-gradient-to-t from-slate-50 to-slate-200 min-h-screen w-full flex flex-col items-center gap-20 justify-center" >
        <div className=" flex flex-row items-center gap-20 m-12 ">
          <ImagenComponent index={0} withprop={700}/>
          <CardComponent/>
        </div>
        <Slogan />
      </main>
      <InformationSection></InformationSection>
      <Footer></Footer>
    </>
  );
}