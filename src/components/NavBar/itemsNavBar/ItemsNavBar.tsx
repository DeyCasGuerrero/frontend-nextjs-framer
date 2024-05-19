
import Link from "next/link"
import { useState } from "react";

interface NavProps {
    txtColorhover: string;
    txtColor: string;
    scroll: boolean | undefined;
}

function ItemsNavbar ({ txtColorhover, txtColor, scroll }:NavProps) {

    return (
        <>
            <Link href="/" legacyBehavior >
                <a className={` ${txtColorhover} p-3 ${txtColor} rounded-xl hover:bg-green-500 hover:scale-110 transition duration-300 flex items-center justify-center ${scroll ? '' : ''}`}>inicio</a>
            </Link>

            <Link href="#info" legacyBehavior>
                <a className={`${txtColorhover} rounded-xl p-3 ${txtColor} hover:bg-green-500 hover:scale-110 transition duration-300 flex items-center justify-center ${scroll ? '' : ''}`}>información</a>
            </Link>

            <Link href="/nosotros" legacyBehavior>
                <a className={`${txtColorhover} rounded-xl ${txtColor} hover:bg-green-500 p-3 hover:scale-110 transition duration-300 flex items-center justify-center ${scroll ? '' : ''}`}>nosotros</a>
            </Link>

            <Link href="/buscar" legacyBehavior>
                <a className={`${txtColorhover} rounded-xl ${txtColor} hover:bg-green-500 p-3 hover:scale-110 transition duration-300 flex items-center justify-center  ${scroll ? '' : ''}`}>Buscar</a>
            </Link>
        </>
    );
};

export default ItemsNavbar;