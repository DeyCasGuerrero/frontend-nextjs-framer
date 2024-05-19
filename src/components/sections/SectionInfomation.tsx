import CardsInformation from "../common/CardsInformation"
import Words from "../common/WordsSections"
import ImagenComponent from "../slider/img/ImagenMap"
import { text } from "@/utils/textCards"


function InformationSection() {
    
    return (
        <>
            <hr className="border-2" />
            <section id="info" className="p-20 max-sm:p-4 bg-gradient-to-b from-slate-50 to-green-200 overflow-hidden">
                <Words></Words>
                <br />

                <div className="mt-20 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
                    <div className="flex max-sm:flex-col justify-start max-sm:justify-center gap-20 items-center">
                        <ImagenComponent index={1} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[0].content} title={text[0].title}></CardsInformation>
                    </div>
                    <div className="flex  gap-20 flex-row-reverse max-sm:flex-col max-sm:justify-center items-center">
                        <ImagenComponent index={2} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[1].content} title={text[1].title}></CardsInformation>
                    </div>
                    <div className="flex justify-start gap-20 max-sm:flex-col max-sm:justify-center items-center">
                        <ImagenComponent index={3} withprop={400}></ImagenComponent>
                        <CardsInformation text={text[2].content} title={text[2].title}></CardsInformation>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InformationSection