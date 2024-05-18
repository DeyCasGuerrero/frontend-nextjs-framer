'use client';
import { motion } from "framer-motion"
export default function CardComponent() {
    return (
        <motion.div
            className="box h-[20em] w-[35em] shadow-2xl bg-white m-auto rounded-[1em] overflow-hidden relative group p-2 z-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            >
            <div className="circle absolute h-[10em] w-[10em] -top-[2.5em] -right-[4.5em] rounded-full bg-green-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>

            <button className="text-[0.8em] absolute bottom-[1em] left-[1em] text-gray-800 group-hover:text-[white] duration-500">
                <span className="relative before:h-[0.16em] before:absolute text-sm before:w-full before:content-['']  duration-300 before:bottom-0 before:left-0">More Info</span>

            </button>

            <h1 className="z-20 font-bold text-black group-hover:text-white duration-500 text-[1.4em]">
                CARD
            </h1>

            <p className="text-justify text-black font-bold group-hover:text-white duration-500 text-xl p-10">Explora y descubre canciones a través de la API de Spotify, accediendo a muchas pistas y crea tus propias listas personalizadas. 🤑🎵🎸🎸</p>
        </motion.div>

    )
}