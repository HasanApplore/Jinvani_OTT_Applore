"use client";

import Image from "next/image";
import { Play, Info } from "lucide-react";

interface ContentCardProps {
    title: string;
    thumbnail: string;
    rank?: number;
    badge?: string;
    size?: "small" | "medium" | "large" | "continue-watching" | "new-on-jinvani" | "popular-documentary";
    progress?: number; // Progress percentage (0-100)
    isRecentlyAdded?: boolean; // Show "Recently Added" badge
}

export default function ContentCard({ title, thumbnail, rank, badge, size = "medium", progress, isRecentlyAdded }: ContentCardProps) {
    const sizeClasses = {
        small: "w-32 h-48",
        medium: "w-40 h-60",
        large: "w-48 h-72",
        "continue-watching": "w-[218px] h-[133px]",
        "new-on-jinvani": "w-[193px] h-[247px]",
        "popular-documentary": "w-[218px] h-[123px]"
    };

    return (
        <div className="group relative flex-shrink-0 cursor-pointer">
            {/* Rank Number (for Top 10) */}
            {rank && (
                <div className="absolute -left-4 bottom-0 z-10 text-[120px] font-bold text-white/10 leading-none select-none">
                    {rank}
                </div>
            )}

            {/* Card Container */}
            <div className={`relative ${sizeClasses[size]} rounded overflow-hidden transition-opacity duration-300 group-hover:opacity-90`}>
                {/* Thumbnail Image */}
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover"
                />

                {/* Recently Added Badge */}
                {isRecentlyAdded && (
                    <div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-white text-xs font-semibold"
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

                {/* Custom Badge (if any) */}
                {badge && !isRecentlyAdded && (
                    <div className="absolute top-2 left-2 bg-brand px-2 py-1 rounded text-xs font-semibold">
                        {badge}
                    </div>
                )}

                {/* Video Progress Indicator */}
                {progress !== undefined && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-zinc-800">
                        <div
                            className="h-full bg-red-600 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 space-y-2">
                        {/* Title */}
                        <h3 className="text-white text-sm font-semibold line-clamp-2">{title}</h3>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition">
                                <Play className="w-4 h-4 text-black fill-black" />
                            </button>
                            <button className="w-8 h-8 bg-zinc-800/80 rounded-full flex items-center justify-center hover:bg-zinc-700 transition">
                                <Info className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
