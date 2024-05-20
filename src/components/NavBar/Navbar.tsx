'use client';
import { useState } from 'react';
import SpotifyIcon from '@/components/icons/SpotifyIcon';
import { useScriptClient } from '@/hooks/useScriptClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import ItemsNavbar from './itemsNavBar/ItemsNavBar';
import { motion } from "framer-motion"
import Link from 'next/link';


function Header() {
    const { scroll } = useScriptClient();

    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    };

    return (
        <motion.nav
            className={`bg-black flex max-lg:rounded-none items-center z-10 p-3 justify-between overflow-hidden rounded-3xl top-0 sticky transition-all duration-1000 ${isClick ? 'fixed  inset-0 max-lg:bg-black z-50 flex-col justify-start h-screen' : ''} ${scroll ? 'max-xl:w-full w-4/5 bg-transparent shadow-2xl' : 'w-full'}`}
            style={{ margin: '0 auto' }}
            initial={isClick ? { opacity: 0, x: -300 } : {}}
            animate={isClick ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
            <Link href="/">
                <SpotifyIcon width={60} height={60} />
            </Link>

            <div className={`max-lg:hidden flex text-white gap-8 lowercase font-bold tracking-widest w-1/2 justify-around `}>
                <ItemsNavbar scroll={scroll} txtColor='text-green-500' txtColorhover='hover:text-black' ></ItemsNavbar>
            </div>

            <div className='hidden max-lg:block'>
                <button className='bg-white rounded-full' onClick={handleClick} aria-label={isClick ? 'Cerrar menú' : 'Abrir menú'}>
                    {!isClick ? (
                        <FontAwesomeIcon color='#000' width={60} height={60} icon={faBars} />
                    ) : (
                        <FontAwesomeIcon color='#000' width={100} height={100} icon={faX} />
                    )}
                </button>
            </div>

            {isClick && (
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.8 }
                    }}
                    className='absolute p-40 sm:px-3 rounded-lg text-xl font-mono flex flex-col gap-16'
                >
                    <ItemsNavbar scroll={scroll} txtColor='text-green-500' txtColorhover='hover:text-black'></ItemsNavbar>
                </motion.div>
            )}
        </motion.nav>

    );
};

export default Header;
