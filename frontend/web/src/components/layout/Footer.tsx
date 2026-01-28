import Image from "next/image";
import Link from "next/link";
import { ASSETS, SOCIAL_LINKS, FOOTER_LINKS, APP_CONFIG } from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#1a1a1a] text-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo Section */}
                    <div className="flex items-start">
                        <Link href="/" className="block">
                            <Image
                                src={ASSETS.logoWithBg}
                                alt={APP_CONFIG.name}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[16px] leading-[24px] font-semibold mb-4 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[14px] leading-[20px] font-normal text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Others */}
                    <div>
                        <h3 className="text-[16px] leading-[24px] font-semibold mb-4 text-white">
                            Others
                        </h3>
                        <ul className="space-y-2">
                            {FOOTER_LINKS.others.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-[14px] leading-[20px] font-normal text-zinc-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media & Language */}
                    <div className="flex flex-col gap-6">
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <Link
                                href={SOCIAL_LINKS.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={ASSETS.icons.facebook}
                                    alt="Facebook"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>
                            <Link
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={ASSETS.icons.instagram}
                                    alt="Instagram"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>

                            <Link
                                href={SOCIAL_LINKS.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity"
                            >
                                <Image
                                    src={ASSETS.icons.youtube}
                                    alt="YouTube"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </Link>
                        </div>

                        {/* Language Selector */}
                        <div className="relative w-full md:w-auto">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                                <Image
                                    src={ASSETS.icons.translator}
                                    alt="Language"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            </div>
                            <select
                                className="w-full md:w-auto bg-transparent border border-zinc-600 rounded-lg pl-12 pr-10 py-3 text-[16px] leading-[20px] font-normal text-white cursor-pointer hover:border-zinc-400 transition-colors appearance-none"
                                defaultValue="en"
                            >
                                <option value="en" className="bg-[#1a1a1a] text-white">English</option>
                                <option value="hi" className="bg-[#1a1a1a] text-white">हिंदी</option>
                            </select>


                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-zinc-800 pt-6">
                    <p className="text-[12px] leading-[16px] font-normal text-zinc-500 text-center">
                        © {currentYear} {APP_CONFIG.name}. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
