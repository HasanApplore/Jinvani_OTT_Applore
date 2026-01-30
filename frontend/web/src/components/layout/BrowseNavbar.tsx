"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Bell, ChevronDown, User, HelpCircle, LogOut, Users } from "lucide-react";
import { ASSETS, APP_CONFIG } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

export default function BrowseNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        if (isDropdownOpen || isSearchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen, isSearchOpen]);

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // TODO: Implement actual search functionality
        }
    };

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
                    <Link href="/articles" className="text-zinc-300 hover:text-white transition" style={{ verticalAlign: 'middle' }}>
                        Articles
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
                    {/* Search - Inline Expandable (Right to Left) */}
                    <div ref={searchRef} className="relative flex items-center">
                        {isSearchOpen ? (
                            <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                                <div
                                    className="relative flex items-center rounded-sm overflow-hidden transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, rgba(255, 46, 99, 0.15) 100%)',
                                        border: '1px solid rgba(255, 102, 0, 0.5)',
                                        width: '280px',
                                        height: '32px'
                                    }}
                                >
                                    {/* Search Icon */}
                                    <div className="flex items-center justify-center pl-3">
                                        <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
                                    </div>

                                    {/* Search Input */}
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search Movies & Series"
                                        className="flex-1 bg-transparent text-white px-3 py-1 outline-none placeholder:text-zinc-400"
                                        style={{
                                            fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                            fontSize: '14px',
                                            fontWeight: 400
                                        }}
                                    />

                                    {/* Close Button */}
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsSearchOpen(false);
                                            setSearchQuery("");
                                        }}
                                        className="flex items-center justify-center pr-3 text-white hover:text-zinc-300 transition"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <button
                                onClick={() => setIsSearchOpen(true)}
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
                        )}
                    </div>

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
