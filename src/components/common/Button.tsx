import Link from "next/link"

interface ButtonProps {
    text: string;
    bg?: string;
    color?: string;
    onClick?: () => void;
}

function ButtonClient({ text, bg, color, onClick }: ButtonProps) {

    const stylesButton = {
        bg: bg || "bg-black",
        color: color || "text-white"
    }

    return (
        <div>
            <Link href="/buscar">
                <h1 className={`${stylesButton.bg} p-4 rounded-lg`}>
                    {text}
                </h1>
            </Link>
        </div>
    )
}

export default ButtonClient