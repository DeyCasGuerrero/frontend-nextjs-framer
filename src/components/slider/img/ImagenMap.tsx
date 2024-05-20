import Image from "next/image"
import SliderSwiper from "../Slider"
import { slides } from "@/utils/Imgs"


interface ImageProps{
    index?: number,
    withprop:number,
}

export default function ImagenComponent({ index, withprop}: ImageProps) {

    const renderSlide = () => {
        if (index!==null && index !== undefined) {
            return (
                <SliderSwiper  key={index}>
                    <Image
                        src={slides[index]}
                        alt="fondo"
                        width={withprop}
                        priority={false}
                        placeholder = 'empty' 
                        height={100}
                        quality={100}
                        style={{
                            objectFit: 'cover',
                        }}
                        className="max-sm:w-80"
                    />
                </SliderSwiper>
            )

        }
        else {
            return (
                <>
                    {slides.map((slide, index) => (

                        <SliderSwiper key={index}>
                            <Image
                                src={slide}
                                alt="fondo"
                                width={700}
                                priority={false}
                                placeholder = 'empty' 
                                height={700}
                                quality={100}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </SliderSwiper>
                    ))}
                </>
            )
        }
    }

    return (
        <div className="flex flex-row">
            {renderSlide()}
        </div >
    )
}