import { ChevronRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-white">
            {/* Background Image/Gradient Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.9)_100%)] z-10" />
                {/* Placeholder for Movie Poster Grid - Using a dark base for now */}
                <div className="w-full h-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e936102-168f-4aa3-bb43-5b868e622b37_small.jpg')] bg-cover bg-center opacity-50" />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-4xl px-4 text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                    Unlimited movies, TV shows, and more
                </h1>

                <p className="text-lg md:text-2xl font-medium">
                    Live TV, Spiritual Stories & Meaningful Shows Await.
                </p>

                <p className="text-base md:text-lg text-zinc-300 pt-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                {/* Email Input Form */}
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center pt-4 w-full max-w-2xl mx-auto">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full md:flex-1 h-14 bg-black/60 border border-zinc-500 rounded px-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
                    />
                    <button className="btn-primary h-14 px-8 rounded flex items-center gap-2 text-xl font-bold whitespace-nowrap">
                        Get Started
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Divider & Socials */}
                <div className="pt-8 w-full max-w-md mx-auto">
                    <div className="flex items-center gap-4 text-zinc-400 text-sm uppercase my-4">
                        <div className="h-[1px] bg-zinc-700 flex-1"></div>
                        <span>or</span>
                        <div className="h-[1px] bg-zinc-700 flex-1"></div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        {/* Google Place holder */}
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                            <span className="text-xl">G</span>
                        </div>
                        {/* Meta Place holder */}
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                            <span className="text-xl">M</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
