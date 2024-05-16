import Link from "next/link";
import { useRouter } from "next/navigation";
import SpotifyIcon from "../icons/SpotifyIcon";

export default function Header() {
    const router = useRouter();

    return (
        <>
            <header className="bg-black flex p-3 justify-between items-center">
                <div className="flex items-center gap-8 text-white font-bold">
                    <SpotifyIcon width={70} height={70}></SpotifyIcon>
                    <p className="text-2xl tracking-widest">Next.js</p>
                </div>
            </header>
        </>
    );
}
