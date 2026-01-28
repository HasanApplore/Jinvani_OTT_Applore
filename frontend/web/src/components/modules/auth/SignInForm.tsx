"use client";

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function SignInForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement authentication logic
        console.log("Sign in with:", email);
    };

    return (
        <div className="w-[510px] h-[429px] mx-auto bg-black/60 backdrop-blur-md rounded-[4px] px-[68px] py-[48px] flex flex-col gap-[12px]">
            {/* Heading */}
            <div className="space-y-3">
                <h1 className="text-[28px] leading-[38px] font-semibold text-white mb-4">
                    Sign In to Continue Watching
                </h1>
                <p className="text-[18px] leading-[24px] text-zinc-300 ">
                    Live TV, Spiritual Stories & Meaningful Shows Await
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                {/* Email/Phone Input */}
                <input
                    type="text"
                    placeholder="Email or phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-14 bg-transparent border border-zinc-600 rounded-lg px-4 text-[16px] leading-[24px] font-normal text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
                    required
                />

                {/* Sign In Button */}
                <button
                    type="submit"
                    className="btn-primary w-full h-14 rounded-lg text-[18px] leading-[24px] font-semibold"
                >
                    Sign In
                </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
                <span className="text-[16px] leading-[24px] font-medium text-zinc-400">
                    New to Jinvani?{" "}
                </span>
                <Link
                    href={ROUTES.home}
                    className="text-[16px] leading-[24px] font-medium bg-gradient-to-r from-[var(--notification-active)] to-[var(--brand)] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                >
                    Sign up now
                </Link>
            </div>
        </div>
    );
}
