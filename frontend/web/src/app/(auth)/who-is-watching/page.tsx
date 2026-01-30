import Image from "next/image";
import Link from "next/link";
import { ASSETS, APP_CONFIG, ROUTES } from "@/lib/constants";
import WhoIsWatching from "@/components/modules/auth/WhoIsWatching";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: `Who is Watching - ${APP_CONFIG.name}`,
    description: "Select your profile",
};

export default function WhoIsWatchingPage() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-background text-white">
            {/* Header / Navbar */}
            <header className="absolute top-0 w-full z-20 flex items-center justify-between px-6 py-6 md:px-12">
                <Link href={ROUTES.home} className="relative w-auto h-8 md:h-12">
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

            {/* Main Content */}
            <main className="relative flex-1 flex items-center justify-center overflow-hidden">
                {/* Background Image/Gradient Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black z-10" />
                    {/* Image seems to have black background in the screenshot, or very dark opacity. 
                        Users said "same to same". Screenshot background is solid black. 
                        Asset placeholder suggests heroBg (monks). 
                        Let's use the same gradient overlay but maybe stronger?
                        Actually, the screenshot is PURE BLACK background.
                    */}
                </div>

                {/* Who Is Watching Component */}
                <div className="relative z-10 w-full px-4 py-20 flex justify-center">
                    <WhoIsWatching />
                </div>
            </main>

            {/* Footer */}
            {/* Footer might not be present in the profile selection screen usually? 
                Screenshot DOES NOT show footer.
                I will include it because user flow implies consistency, but hide it if needed.
                Actually, screenshot is just the center part. I'll keep it for now.
            */}
        </div>
    );
}
