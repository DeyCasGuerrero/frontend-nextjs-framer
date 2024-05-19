'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SpotifyIcon from "../icons/SpotifyIcon";
interface CardsInfoProps {
    text: string;
    title: string;
}

function CardsInformation({ text, title }: CardsInfoProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative flex w-96 flex-col h-60 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-green-300 to-green-500">
                <motion.div
                    className="flex justify-end"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.8 }}
                >
                    <SpotifyIcon size={100} color="#fff"></SpotifyIcon>
                </motion.div>
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {text}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-600 transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Read More
                </button>
            </div>
        </motion.div>
    )

}

export default CardsInformation