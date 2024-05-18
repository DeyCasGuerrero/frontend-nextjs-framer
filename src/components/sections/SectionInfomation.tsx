
import CardsInformation from "../common/CardsInformation"
import ImagenComponent from "../img/Imagen"
import { text } from "@/utils/textCards"


function InformationSection() {
    
    return (
        <>
            <hr className="border-2" />
            <section id="info" className="p-20 bg-gradient-to-b from-slate-50 to-green-200">
                <div>
                    <h1 className="text-center text-slate-900 text-5xl uppercase font-extrabold tracking-widest">Información</h1>
                    <br/>
                    <h2 className="text-center text-slate-900 text-xl font-mono">Encuentra nuestra información sobre lo que hacemos: Nuestro objetivo es proporcionar una plataforma fácil de usar donde los usuarios puedan descubrir, buscar y escuchar música de manera eficiente y personalizada.</h2>
                </div>
                <br />

                <div className="mt-20">
                    <div className="flex justify-start gap-20 items-center">
                        <ImagenComponent index={1} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[0].content} title={text[0].title}></CardsInformation>
                    </div>
                    <div className="flex  gap-20 flex-row-reverse items-center">
                        <ImagenComponent index={2} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[1].content} title={text[1].title}></CardsInformation>
                    </div>
                    <div className="flex justify-start gap-20 items-center">
                        <ImagenComponent index={3} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[2].content} title={text[2].title}></CardsInformation>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InformationSection