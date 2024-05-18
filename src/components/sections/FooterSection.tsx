
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
                    <p>Puedes ponerte en contacto con nosotros a través de:</p>
                    <ul className="mt-4">
                        <li>Email: contacto@tudominio.com</li>
                        <li>Teléfono: +123456789</li>
                        <li>Redes Sociales: @tudominio</li>
                    </ul>
                </div>
                <div className="md:w-1/3 mt-8 md:mt-0">
                    <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
                    <p>¡No te pierdas nuestras últimas actualizaciones!</p>
                    <div className="flex mt-4">
                        <a href="#" className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">Facebook</a>
                        <a href="#" className="mr-4 hover:text-gray-400 transition duration-300 ease-in-out">Twitter</a>
                        <a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Instagram</a>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <p className="text-center md:text-right">© 2024 Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>

    )
}