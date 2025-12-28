import Link from "next/link"
import { Separator } from "./ui/separator"

const dataFooter = [
    {
        id: 1,
        name: "Contactar vía Gmail",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=thiagosterren@gmail.com"
    },
    {
        id: 2,
        name: "Contactar vía WhatsApp",
        link: "https://wa.me/5493493520698"
    },
] 

export default function Footer() {
    return (
        <footer className="mt-4 select-none">
            <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between px-5 sm:px-0">
                    <p className="whitespace-nowrap sm:px-5">
                        <span className="font-bold text-4xl text-[#8B7FDB]">
                            nele
                        </span>
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-500 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} target="_blank" className="hover:underline me-4 md:me-6 whitespace-nowrap text-md">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025 <Link href="https://wa.me/5493493520698" target="_blank" className="hover:underline font-bold">SterrenDev</Link>. Todos los derechos reservados
                </span>
            </div>
        </footer>
    )
}