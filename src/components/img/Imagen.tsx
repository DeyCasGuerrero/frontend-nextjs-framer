import Image from "next/image"
export default function ImagenComponent() {
    return (
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
    )
}