'use client';
import { motion, useInView } from "framer-motion"
import Image from "next/image";
import { useRef } from "react";


function AboutSection() {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    return (
        <section className="min-h-screen p-20 bg-gradient-to-b from-slate-50 to-slate-100 max-md:p-2 ">
            <motion.h1
                className="text-center max-sm:text-4xl text-5xl tracking-widest mt-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut"
                }}
            >

                Bienvenidos a nuestra sección
            </motion.h1>
            <div className="flex gap-12 justify-around mt-10 text-black">
                <div className="p-1rounded-2xl overflow-hidden w-full">
                    <div className=" text-justify p-4">
                        <h1 className="text-3xl p-4 underline">Acerca de Nosotros</h1>
                        <div className="flex flex-col items-center">
                            <p className="leading-loose">Somos una empresa dedicada a ofrecer la mejor experiencia musical a través de la API de Spotify. Nuestro objetivo es transformar la manera en que disfrutas de la música, proporcionándote herramientas y servicios que enriquecen tu experiencia auditiva. Trabajamos incansablemente para integrar las capacidades avanzadas de la API de Spotify en nuestras soluciones, permitiéndote acceder a una amplia gama de funcionalidades. Desde la creación de listas de reproducción personalizadas basadas en tus gustos musicales, hasta el descubrimiento de nuevas canciones y artistas que se alinean con tus preferencias, nos aseguramos de que cada interacción con nuestra plataforma sea única y gratificante. Nuestro equipo de expertos en desarrollo y diseño trabaja continuamente para innovar y mejorar nuestras ofertas, asegurando una interfaz intuitiva y fácil de usar. Con la API de Spotify, podemos proporcionar recomendaciones musicales precisas y relevantes, información detallada sobre tus artistas favoritos, y acceso a una biblioteca musical global que abarca todos los géneros y épocas.</p>
                            <motion.div
                                className="border-4 border-white w-full h-80 bg-black shadow-2xl rounded-full"
                                initial={{opacity:0, scale:0.5}}
                                animate={{opacity:1, scale:1}}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                <Image
                                    src="https://i.postimg.cc/HW2697hX/papuh.jpg"
                                    alt="img"
                                    width={1000}
                                    height={0}
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </motion.div>
                        </div>

                    </div>
                    <hr className="border-gray-700 my-4" />
                    <div ref={ref} className=" text-justify p-4">
                        <h1 className="text-3xl p-4 underline ">Nuestra WebPage</h1>
                        <div className="flex gap-12 max-2xl:flex-col">
                            <p className="leading-loose">Somos una empresa dedicada a ofrecer la mejor experiencia musical a través de la API de Spotify. Nuestro objetivo es transformar la manera en que disfrutas de la música, proporcionándote herramientas y servicios que enriquecen tu experiencia auditiva. Trabajamos incansablemente para integrar las capacidades avanzadas de la API de Spotify en nuestras soluciones, permitiéndote acceder a una amplia gama de funcionalidades. Desde la creación de listas de reproducción personalizadas basadas en tus gustos musicales, hasta el descubrimiento de nuevas canciones y artistas que se alinean con tus preferencias, nos aseguramos de que cada interacción con nuestra plataforma sea única y gratificante. Nuestro equipo de expertos en desarrollo y diseño trabaja continuamente para innovar y mejorar nuestras ofertas, asegurando una interfaz intuitiva y fácil de usar. Con la API de Spotify, podemos proporcionar recomendaciones musicales precisas y relevantes, información detallada sobre tus artistas favoritos, y acceso a una biblioteca musical global que abarca todos los géneros y épocas.</p>
                            <motion.div
                                className="grid grid-cols-2 max-2xl:grid-cols-3 max-sm:grid-cols-1 gap-4 p-4"
                                initial={{ opacity: 0, x: 300 }}
                                animate={isInView ? {
                                    opacity: 1, x: 0,
                                    transition: {
                                        delay: 0.6,
                                        duration: 0.8
                                    }
                                } : {}}
                            >
                                <div className="border-4 border-white shadow-2xl">
                                    <Image
                                        src="https://i.postimg.cc/RV6DR05R/si.webp"
                                        alt="img"
                                        width={1000}
                                        height={0}
                                        layout="responsive"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="border-4 border-white shadow-2xl">
                                    <Image
                                        src="https://i.postimg.cc/L61xP0LQ/reudechill.webp"
                                        alt="imagen"
                                        width={1000}
                                        height={0}
                                        layout="responsive"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="border-4 border-white col-span-2 max-2xl:col-span-1 shadow-2xl">
                                    <Image
                                        src="https://i.postimg.cc/j5BF0VyN/reu.webp"
                                        alt="imagen"
                                        width={1000}
                                        height={0}
                                        layout="responsive"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <hr className="border-gray-700 my-4" />
                    <div className="text-justify p-4">
                        <h1 className="text-3xl p-4 underline">Nuestra Misión</h1>
                        <div className="flex">
                            <p className="leading-loose">Somos una empresa dedicada a ofrecer la mejor experiencia musical a través de la API de Spotify. Nuestro objetivo es transformar la manera en que disfrutas de la música, proporcionándote herramientas y servicios que enriquecen tu experiencia auditiva. Trabajamos incansablemente para integrar las capacidades avanzadas de la API de Spotify en nuestras soluciones, permitiéndote acceder a una amplia gama de funcionalidades. Desde la creación de listas de reproducción personalizadas basadas en tus gustos musicales, hasta el descubrimiento de nuevas canciones y artistas que se alinean con tus preferencias, nos aseguramos de que cada interacción con nuestra plataforma sea única y gratificante. Nuestro equipo de expertos en desarrollo y diseño trabaja continuamente para innovar y mejorar nuestras ofertas, asegurando una interfaz intuitiva y fácil de usar. Con la API de Spotify, podemos proporcionar recomendaciones musicales precisas y relevantes, información detallada sobre tus artistas favoritos, y acceso a una biblioteca musical global que abarca todos los géneros y épocas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default AboutSection;