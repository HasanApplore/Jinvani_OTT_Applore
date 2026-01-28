import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, APP_CONFIG, ROUTES } from "@/lib/constants";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-white">
            {/* Header / Navbar (Embedded) */}
            <header className="absolute top-0 w-full z-20 flex items-center justify-between px-6 py-6 md:px-12">
                <Link href={ROUTES.home} className="relative w-auto h-8 md:h-12">
                    {/* Logo Image */}
                    <Image
                        src={ASSETS.logo}
                        alt={APP_CONFIG.name}
                        width={120}
                        height={40}
                        className="object-contain h-full w-auto"
                        priority
                    />
                </Link>
            </header>

            {/* Background Image/Gradient Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.9)_100%)] z-10" />
                <Image
                    src={ASSETS.placeholders.heroBg}
                    alt="Background"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-4xl px-4 text-center space-y-4 bg-black/60 p-8 md:p-12 rounded-xl backdrop-blur-sm">
                <h1 className="text-[40px] leading-[48px] font-semibold tracking-[0px] text-center">
                    Unlimited movies, TV shows, and more
                </h1>

                <p className="text-[20px] leading-[28px] font-medium tracking-[0px]">
                    Live TV, Spiritual Stories & Meaningful Shows Await.
                </p>

                <p className="text-[16px] leading-[24px] font-normal tracking-[0px] text-zinc-300 pt-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/* Email Input Form */}
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center pt-4 w-full max-w-2xl mx-auto">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full md:flex-1 h-14 bg-black/60 border border-zinc-500 rounded px-4 text-[16px] text-white placeholder:text-zinc-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
                    />
                    <button className="btn-primary h-14 px-8 rounded flex items-center gap-2 text-[18px] leading-[24px] font-semibold whitespace-nowrap">
                        Get Started
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Divider & Socials */}
                <div className="pt-8 w-full max-w-md mx-auto">
                    <div className="flex items-center gap-4 text-zinc-400 text-[12px] leading-[16px] font-medium uppercase my-4">
                        <div className="h-[1px] bg-zinc-700 flex-1"></div>
                        <span>or</span>
                        <div className="h-[1px] bg-zinc-700 flex-1"></div>
                    </div>

                    <div className="flex gap-12 justify-center mt-6">
                        {/* Google Login */}
                        <div className="flex flex-col items-center gap-3 cursor-pointer group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                                <Image
                                    src={ASSETS.icons.google}
                                    alt="Google"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-zinc-300 group-hover:text-white transition-colors">
                                Sign up with Google
                            </span>
                        </div>

                        {/* Meta Login */}
                        <div className="flex flex-col items-center gap-3 cursor-pointer group">
                            <div className="w-16 h-16 bg-transparent border border-zinc-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-white">
                                <Image
                                    src={ASSETS.icons.meta}
                                    alt="Meta"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="text-[14px] leading-[20px] font-medium text-zinc-300 group-hover:text-white transition-colors">
                                Sign up with Meta
                            </span>
                        </div>
                    </div>

                    {/* Sign In Footer */}
                    <div className="pt-8 text-[16px] leading-[24px] font-medium">
                        <span className="text-zinc-400">Already have an account? </span>
                        <Link href={ROUTES.login} className="bg-gradient-to-r from-[var(--notification-active)] to-[var(--brand)] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
