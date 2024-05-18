'use client';
import { motion } from "framer-motion"
import { ReactNode } from "react";
import { useScriptClient } from "@/hooks/useScriptClient";

function SliderSwiper({ children }: { children: ReactNode }) {

    const { scroll } = useScriptClient();

    return (

        <div className="z-0">
            <motion.div
                className="flex border-8 border-slate-200 shadow-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: scroll ? 1 : 0, x: scroll ? 20 : -100 }}

                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.6
                }}
            >
                {children}
            </motion.div>
        </div>


    );
}
export default SliderSwiper