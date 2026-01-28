"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Bell, ChevronDown, User, HelpCircle, LogOut, Users } from "lucide-react";
import { ASSETS, APP_CONFIG } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

export default function BrowseNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent">
            <div className="flex items-center w-full h-[142px] px-[56px] py-[30px] gap-[143px]">
                {/* Logo */}
                <Link href="/browse" className="relative w-[82px] h-[82px]">
                    <Image
                        src={ASSETS.logoWithBg}
                        alt={APP_CONFIG.name}
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-[45px]"
                    style={{
                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                        fontWeight: 510, // Medium/Specific
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                    }}
                >
                    <Link href="/browse" className="text-white hover:text-zinc-300 transition" style={{ verticalAlign: 'middle' }}>
                        Home
                    </Link>
                    <Link href="/categories" className="text-zinc-300 hover:text-white transition" style={{ verticalAlign: 'middle' }}>
                        Categories
                    </Link>
                    <Link href="/my-list" className="text-zinc-300 hover:text-white transition" style={{ verticalAlign: 'middle' }}>
                        My List
                    </Link>
                    <Link href="/settings" className="text-zinc-300 hover:text-white transition" style={{ verticalAlign: 'middle' }}>
                        Settings
                    </Link>
                    <Link href="/donations" className="text-zinc-300 hover:text-white transition" style={{ verticalAlign: 'middle' }}>
                        Donations
                    </Link>
                </div>

                {/* Right Side Icons */}
                <div
                    className="flex items-center ml-auto"
                    style={{
                        width: '154px',
                        height: '32px',
                        gap: '15px'
                    }}
                >
                    {/* Search Icon */}
                    <button
                        className="flex items-center justify-center text-white hover:text-zinc-300 transition"
                        style={{
                            width: '36px',
                            height: '32px',
                            gap: '10px',
                            paddingTop: '2px',
                            paddingBottom: '2px'
                        }}
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Notification Bell */}
                    <button
                        className="relative flex items-center justify-center text-white hover:text-zinc-300 transition"
                        style={{
                            width: '36px',
                            height: '32px',
                            gap: '10px',
                            paddingTop: '2px',
                            paddingBottom: '2px'
                        }}
                    >
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-2 w-2 h-2 bg-brand rounded-full"></span>
                    </button>

                    {/* User Profile Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-white hover:text-zinc-300 transition"
                            style={{
                                width: '52px',
                                height: '32px',
                                justifyContent: 'space-between'
                            }}
                        >
                            {/* User Icon */}
                            <div className="relative w-8 h-8 rounded overflow-hidden">
                                <Image
                                    src="/icons/user_icon.png"
                                    alt="User"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Arrow Down */}
                            <div className={`relative w-[12px] h-[6px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                <Image
                                    src="/icons/Name=ArrowDown.png"
                                    alt="Arrow"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 top-12 w-56 bg-zinc-900/95 backdrop-blur-sm rounded shadow-lg py-2 border border-zinc-800">
                                {/* Manage Profiles */}
                                <Link
                                    href="/profiles"
                                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-800 transition"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <Users className="w-5 h-5" />
                                    <span className="text-sm font-medium">Manage Profiles</span>
                                </Link>

                                {/* Account */}
                                <Link
                                    href="/account"
                                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-800 transition"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <User className="w-5 h-5" />
                                    <span className="text-sm font-medium">Account</span>
                                </Link>

                                {/* Help Centre */}
                                <Link
                                    href="/help"
                                    className="flex items-center gap-3 px-4 py-3 text-white hover:bg-zinc-800 transition"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <HelpCircle className="w-5 h-5" />
                                    <span className="text-sm font-medium">Help Centre</span>
                                </Link>

                                {/* Divider */}
                                <div className="border-t border-zinc-800 my-2"></div>

                                {/* Sign Out */}
                                <button
                                    className="flex items-center justify-center w-full px-4 py-3 text-white hover:bg-zinc-800 transition"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        // Add sign out logic here
                                    }}
                                >
                                    <span className="text-sm font-medium">Sign Out</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
