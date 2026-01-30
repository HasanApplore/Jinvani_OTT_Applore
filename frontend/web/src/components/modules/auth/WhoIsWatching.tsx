"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { ROUTES } from "@/lib/constants";

// Mock profiles data based on the image
const PROFILES = [
    { id: 1, name: "Harshit", color: "from-[#FF512F] to-[#DD2476]" }, // Red-ish
    { id: 2, name: "Harshit", color: "from-[#F09819] to-[#EDDE5D]" }, // Yellow-ish
    { id: 3, name: "Harshit", color: "from-[#2193b0] to-[#6dd5ed]" }, // Blue-ish
    { id: 4, name: "Harshit", color: "from-[#56ab2f] to-[#a8e063]" }, // Green-ish
];

export default function WhoIsWatching() {
    return (
        // Main Div: 836x392
        <div className="w-[836px] flex flex-col items-center gap-[67px]">

            {/* Heading: 50px font */}
            <h1
                className="text-white font-normal text-center"
                style={{
                    fontSize: "50px",
                    lineHeight: "100%",
                }}
            >
                Who&apos;s watching?
            </h1>

            {/* Profiles Row + Add Profile: gap 29px */}
            <div className="flex items-start justify-center gap-[29px]">

                {PROFILES.map((profile) => (
                    <div
                        key={profile.id}
                        className="w-[144px] flex flex-col items-center gap-[13.75px] cursor-pointer group"
                    >
                        {/* Profile Pic: 144x144, radius 1.88px */}
                        <div
                            className={`w-[144px] h-[144px] rounded-[1.88px] bg-gradient-to-b ${profile.color} flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 relative`}
                        >
                            {/* Simple User Icon - matching the reference image */}
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute">
                                {/* Head */}
                                <circle cx="40" cy="28" r="16" fill="white" opacity="0.9" />
                                {/* Body */}
                                <path d="M10 80 C10 55, 25 45, 40 45 C55 45, 70 55, 70 80 Z" fill="white" opacity="0.9" />
                            </svg>
                        </div>

                        {/* Name: 144x23 */}
                        <span
                            className="text-white font-medium text-center w-full"
                            style={{
                                fontSize: "18px",
                                lineHeight: "128%",
                            }}
                        >
                            {profile.name}
                        </span>
                    </div>
                ))}

                {/* Add Profile Button */}
                <Link href={ROUTES.setupProfile} className="w-[144px] flex flex-col items-center gap-[13.75px] cursor-pointer group">
                    {/* Icon Circle */}
                    <div className="w-[144px] h-[144px] rounded-[1.88px] bg-[#333333] flex items-center justify-center transition-transform group-hover:scale-105">
                        <div className="w-[80px] h-[80px] rounded-full bg-[#808080] flex items-center justify-center">
                            <Plus className="w-10 h-10 text-black" strokeWidth={3} />
                        </div>
                    </div>
                    {/* Text */}
                    <span
                        className="text-white font-medium text-center w-full"
                        style={{
                            fontSize: "18px",
                            lineHeight: "128%",
                        }}
                    >
                        Add Profile
                    </span>
                </Link>

            </div>

            {/* Manage Profiles Button */}
            <button
                className="w-[178px] h-[42px] border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                <span
                    style={{
                        fontSize: "17px",
                        fontWeight: 400,
                        color: "#A6A6A6"
                    }}
                >
                    Manage Profiles
                </span>
            </button>

        </div>
    );
}
