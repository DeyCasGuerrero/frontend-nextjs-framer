'use client';
import { motion, useInView } from "framer-motion";
import { useScriptClient } from "@/hooks/useScriptClient";
import { useRef } from "react";
import ButtonClient from "../common/Button";

export default function Slogan() {

    const { scroll } = useScriptClient();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scroll ? 1 : 0, y: scroll ? 0 : 50 }}
            transition={{ 
                duration: 0.7,
                ease: "linear",
                delay: 0.5
            }}
            className="p-10 overflow-hidden mb-8 flex items-center flex-col "
        >
            <h1
                className=" tracking-widest text-6xl text-left uppercase font-bold text-green-500 max-sm:text-5xl"
            >
                Busca cualquier canción de Spotify!!
            </h1>
            <motion.p
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: scroll ? 1 : 0, x: scroll ? 50 : -300 }}
                transition={{
                    duration: 0.7,
                    ease: "linear",
                    delay: 0.5
                }}
                className="text-black text-right text-5xl max-sm:text-4xl p-8 font-mono uppercase">
                Sigue bajando y enterate de nuesta web
            </motion.p>
            <ButtonClient bg="bg-green-500" text="Ir al buscador" ></ButtonClient>
        </motion.div>
    )
}