'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

//Maybe u can add props for this component, but i don't do because i have 1 section
function Words() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x:-300 }}
            animate={isInView ? {
                opacity: 1,
                x:0,
                transition: { duration: 1.8 }
            } : {  }}
            className="w-full "
        >
            <h1 className= "max-sm:text-4xl text-center text-slate-900 text-5xl uppercase font-extrabold tracking-widest">Información</h1>
            <br />
            <h2 className=" text-center text-slate-900 text-xl font-mono">Encuentra nuestra información sobre lo que hacemos: Nuestro objetivo es proporcionar una plataforma fácil de usar donde los usuarios puedan descubrir, buscar y escuchar música de manera eficiente y personalizada.</h2>
        </motion.div >
    )
}

export default Words