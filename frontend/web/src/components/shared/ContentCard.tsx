"use client";

import Image from "next/image";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";

interface ContentCardProps {
    title: string;
    thumbnail: string;
    rank?: number;
    badge?: string;
    size?: "small" | "medium" | "large" | "continue-watching" | "new-on-jinvani" | "popular-documentary";
    progress?: number; // Progress percentage (0-100)
    isRecentlyAdded?: boolean; // Show "Recently Added" badge
    categories?: string[]; // Category tags like ["Spiritual", "Documentary", "Thriller"]
}

export default function ContentCard({ title, thumbnail, rank, badge, size = "medium", progress, isRecentlyAdded, categories }: ContentCardProps) {
    const sizeClasses = {
        small: "w-32 h-48",
        medium: "w-40 h-60",
        large: "w-48 h-72",
        "continue-watching": "w-[218px] h-[133px]",
        "new-on-jinvani": "w-[193px] h-[247px]",
        "popular-documentary": "w-[218px] h-[123px]"
    };

    // Use provided categories or fallback to default
    const displayCategories = categories || ["Spiritual", "Documentary", "Inspirational"];

    return (
        <div className="group relative flex-shrink-0 cursor-pointer">
            {/* Rank Number (for Top 10) */}
            {rank && (
                <div className="absolute -left-4 bottom-0 z-10 text-[120px] font-bold text-white/10 leading-none select-none">
                    {rank}
                </div>
            )}

            {/* Card Container - Netflix Style Hover */}
            <div
                className={`relative ${sizeClasses[size]} rounded overflow-hidden transition-all duration-300 ease-in-out
                    group-hover:scale-150 group-hover:z-50 group-hover:w-[324px] group-hover:h-[320px]
                    group-hover:border group-hover:border-[#333333] group-hover:shadow-[1px_2px_4px_0px_rgba(0,0,0,0.1)]`}
            >
                {/* Thumbnail Image */}
                <div className="relative w-full h-full group-hover:h-[157px] transition-all duration-300">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover"
                    />

                    {/* Recently Added Badge - Only show when NOT hovering */}
                    {isRecentlyAdded && (
                        <div
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white text-xs font-semibold group-hover:opacity-0 transition-opacity"
                            style={{
                                backgroundColor: '#FF2E63',
                                paddingTop: '2px',
                                paddingRight: '6px',
                                paddingBottom: '2px',
                                paddingLeft: '6px',
                                borderRadius: '2px',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Recently Added
                        </div>
                    )}

                    {/* Custom Badge (if any) - Only show when NOT hovering */}
                    {badge && !isRecentlyAdded && (
                        <div className="absolute top-2 left-2 bg-brand px-2 py-1 rounded text-xs font-semibold group-hover:opacity-0 transition-opacity">
                            {badge}
                        </div>
                    )}

                    {/* Video Progress Indicator - Only show when NOT hovering */}
                    {progress !== undefined && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-800 group-hover:opacity-0 transition-opacity">
                            <div
                                className="h-full bg-red-600 transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    )}
                </div>

                {/* Hover Info Section - 324x163px (increased from 124px) */}
                <div className="absolute bottom-0 left-0 right-0 w-[324px] h-[163px] bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">

                    {/* Button Section - 324x60px */}
                    <div
                        className="w-[324px] h-[60px] flex items-center justify-between px-[20px] py-[10px]"
                        style={{ gap: '111px' }}
                    >
                        {/* Left Action Buttons */}
                        <div className="flex items-center gap-2">
                            {/* Play Button */}
                            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition">
                                <Play className="w-4 h-4 text-black fill-black" />
                            </button>

                            {/* Add to List Button */}
                            <button className="w-8 h-8 bg-transparent border-2 border-zinc-400 rounded-full flex items-center justify-center hover:border-white transition">
                                <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </button>

                            {/* Like Button */}
                            <button className="w-8 h-8 bg-transparent border-2 border-zinc-400 rounded-full flex items-center justify-center hover:border-white transition">
                                <ThumbsUp className="w-4 h-4 text-white" strokeWidth={2} />
                            </button>
                        </div>

                        {/* Right More Info Button */}
                        <button className="w-8 h-8 bg-transparent border-2 border-zinc-400 rounded-full flex items-center justify-center hover:border-white transition">
                            <ChevronDown className="w-4 h-4 text-white" strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Categories Section - 324x64px */}
                    <div className="w-[324px] h-[64px] flex items-center gap-[10px] px-[10px] py-[10px] flex-wrap">
                        {displayCategories.map((category, index) => (
                            <span
                                key={index}
                                className="text-white text-xs font-medium"
                                style={{
                                    fontSize: '12px',
                                    color: '#E5E5E5'
                                }}
                            >
                                {category}
                                {index < displayCategories.length - 1 && (
                                    <span className="mx-1 text-zinc-500">•</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
