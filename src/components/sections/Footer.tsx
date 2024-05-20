import Link from "next/link"
import SpotifyIcon from "../icons/SpotifyIcon"
import GitHubIcon from "../icons/GitHubIcon"
import TwitterIcon from "../icons/TwitterIcon"

export default function Footer() {
    return (
        <>
            <hr className="border-t-2 border-white" />
            <footer className="bg-gradient-to-t from-green-400 to-green-200 text-white py-8 overflow-hidden">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/3">
                        <h3 className="text-2xl font-bold mb-4 text-black">Contáctanos</h3>
                        <p>Puedes ponerte en contacto con nosotros a través de:</p>
                        <ul className="mt-4">
                            <li>Email: contacto@tudominio.com</li>
                            <li>Teléfono: +123456789</li>
                            <li>Redes Sociales: @tudominio</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0">
                        <h3 className="text-2xl font-bold mb-4 text-black">Síguenos</h3>
                        <p>¡No te pierdas nuestras últimas actualizaciones!</p>
                        <div className="flex mt-4">
                            <Link href="" target="_blank">

                                <div className="flex items-center gap-5">
                                    <GitHubIcon size={40} color="#000"></GitHubIcon>
                                    <h2 className="mr-4 hover:text-gray-800 transition duration-300 ease-in-out">
                                        Github
                                    </h2>
                                </div>

                            </Link>
                            <Link href="" target="_blank">
                                <div className="flex items-center gap-5">
                                    <SpotifyIcon size={40} color="#000"></SpotifyIcon>
                                    <h2 className="mr-4 hover:text-gray-800 transition duration-300 ease-in-out">
                                        Spotify
                                    </h2>
                                </div>
                            </Link>
                            <Link href="" target="_blank">
                                <div className="flex items-center gap-5">
                                    <TwitterIcon size={40} color="#000"></TwitterIcon>
                                    <h2 className="hover:text-gray-800 transition duration-300 ease-in-out">
                                        Twitter
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="text-center md:text-right">© 2024 Tu Empresa. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </>

    )
}