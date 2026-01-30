import Image from "next/image";
import Link from "next/link";
import { ASSETS, APP_CONFIG, ROUTES } from "@/lib/constants";
import OtpVerificationForm from "@/components/modules/auth/OtpVerificationForm";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: `Verify - ${APP_CONFIG.name}`,
    description: "Verify your account",
};

export default function VerifyPage() {
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
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.4)_0%,_rgba(0,0,0,0.9)_100%)] z-10" />
                    <Image
                        src={ASSETS.placeholders.heroBg}
                        alt="Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </div>

                {/* OTP Form */}
                <div className="relative z-10 w-full px-4 py-20 flex justify-center">
                    <OtpVerificationForm />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
