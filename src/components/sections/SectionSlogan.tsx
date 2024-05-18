'use client';
import { motion } from "framer-motion";
import { useScriptClient } from "@/hooks/useScriptClient";


export default function Slogan() {

    const { scroll } = useScriptClient();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scroll ? 1 : 0, y: scroll ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="p-10 overflow-hidden mb-8 "
        >
            <h1
                className=" tracking-widest text-6xl text-left uppercase font-bold text-green-500"
            >
                Busca cualquier canción de Spotify!!
            </h1>
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: scroll ? 1 : 0, x: scroll ? 50 : 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="text-black text-right text-5xl p-8 font-mono uppercase">
                Sigue bajando y enterate de nuesta web
            </motion.p>
        </motion.div>
    )
}