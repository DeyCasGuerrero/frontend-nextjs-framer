'use client';

import Link from 'next/link';
import SpotifyIcon from '@/components/icons/SpotifyIcon'; 
import { useScriptClient } from '@/hooks/useScriptClient';

const Header = () => {

    const {scroll}=useScriptClient();
    

    return (
        
            <nav
                className={`bg-black flex items-center z-10 p-3 justify-between overflow-hidden rounded-3xl top-0 sticky transition-all duration-1000 ${scroll ? 'w-[80rem] bg-transparent shadow-2xl' : 'w-full'}`}
                style={{ margin: '0 auto' }}
            >
                <SpotifyIcon width={60} height={60} />

                <div className="flex text-white gap-32 lowercase font-bold text-lg w-1/2 justify-around">
                    <Link href="" legacyBehavior>
                        <a className={`hover:text-white p-3 rounded-xl hover:bg-green-500 hover:scale-110 transition duration-300 ${scroll ? 'text-black ':''}`}>inicio</a>
                    </Link>

                    <Link href="#info" legacyBehavior>
                        <a className={`hover:text-white rounded-xl p-3 hover:bg-green-500 hover:scale-110 transition duration-300 ${scroll ? 'text-black':''}` }>información</a>
                    </Link>

                    <Link href="#news" legacyBehavior>
                        <a className={`hover:text-white rounded-xl hover:bg-green-500 p-3 hover:scale-110 transition duration-300 ${scroll ? 'text-black':''}`}>Buscar</a>
                    </Link>
                </div>
            </nav>
        
    );
};

export default Header;
