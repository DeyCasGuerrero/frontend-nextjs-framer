
import Link from 'next/link';
import SpotifyIcon from '../icons/SpotifyIcon';

function Navbar() {

    return (
        <header className='w-full flex justify-center'>
            <nav className="bg-black flex w-[100rem] items-center p-3 justify-between fixed z-10 rounded-3xl" >
                <SpotifyIcon width={60} height={60}></SpotifyIcon>

                <div className="flex text-white gap-32 lowercase font-bold text-lg w-1/2 justify-around" >
                    <Link href="" legacyBehavior><a className="hover:text-white p-2 rounded-full hover:bg-green-500 hover:scale-110 transition duration-300">inicio</a></Link>

                    <Link href="#info" legacyBehavior><a className="hover:text-white rounded-full p-2 hover:bg-green-500 hover:scale-110 transition duration-300">info</a></Link>

                    <Link href="#news" legacyBehavior><a className="hover:text-white rounded-full hover:bg-green-500 p-2 hover:scale-110 transition duration-300">Buscar</a></Link>
                </div>
            </nav>
        </header>
    )
}


export default Navbar