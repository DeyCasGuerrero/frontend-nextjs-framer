"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import SpotifyIcon from '@/components/icons/SpotifyIcon'; 
import { useScriptClient } from '@/hooks/useScriptClient';

const Header = () => {

    const {scroll}=useScriptClient();
    

    return (
        <header className="w-full flex justify-center sticky top-0 z-10 overflow-hidden">
            <nav
                className={`bg-black flex items-center p-3 justify-between rounded-3xl transition-all duration-1000 ${scroll ? 'w-[100rem] bg-transparent shadow-2xl' : 'w-full'}`}
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
        </header>
    );
};

export default Header;
