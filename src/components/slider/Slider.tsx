'use client';
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { ReactNode } from "react";



function SliderSwiper({ children }: { children: ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView( ref, {once:true} );

    return (
        <div className="z-0" ref={ref}>
            <motion.div
                className="flex border-8 border-slate-200 shadow-2xl"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ?{ opacity:  1 , x: 20}:{opacity:0, x:-100}}

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