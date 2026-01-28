import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
            {/* Brand Logo */}
            <Link href="/" className="text-brand font-bold text-4xl tracking-tighter">
                J
                <span className="hidden">invani</span>
            </Link>

            {/* Sign In Button */}
            <Link
                href="/login"
                className="bg-brand text-white text-sm font-medium px-4 py-1.5 rounded-sm hover:opacity-90 transition-opacity"
            >
                Sign In
            </Link>
        </nav>
    );
}
