"use client";

import Image from "next/image";
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";

interface Top10CardProps {
    rank: number;
    title: string;
    thumbnail: string;
    isRecentlyAdded?: boolean;
    categories?: string[]; // Category tags
}

export default function Top10Card({ rank, title, thumbnail, isRecentlyAdded, categories }: Top10CardProps) {
    // Use provided categories or fallback to default
    const displayCategories = categories || ["Spiritual", "Documentary", "Inspirational"];

    return (
        <div className="group relative flex-shrink-0 w-[215px] h-[193px] cursor-pointer">
            {/* Large Rank Number (Left Side - Behind movie) */}
            <div
                className="absolute font-black text-right transition-opacity duration-300"
                style={{
                    width: '96px',
                    height: '193px',
                    top: '0px',
                    left: '30px',
                    fontSize: '204px',
                    lineHeight: '100%',
                    fontWeight: 860,
                    color: 'transparent',
                    WebkitTextStroke: '4px rgba(255, 255, 255, 0.3)',
                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                    letterSpacing: '0px',
                    userSelect: 'none',
                    zIndex: 1
                }}
            >
                {rank}
            </div>

            {/* Movie Preview Container */}
            <div
                className="absolute"
                style={{
                    width: '130px',
                    height: '193px',
                    left: '106px',
                    top: '0px',
                    zIndex: 10
                }}
            >
                {/* Expandable Card - Netflix Style */}
                <div
                    className="relative rounded-sm overflow-visible transition-all duration-300 ease-in-out
                        group-hover:scale-[1.5] group-hover:translate-x-[30px] group-hover:-translate-y-[20px]
                        group-hover:z-50"
                    style={{
                        width: '130px',
                        height: '193px'
                    }}
                >
                    {/* Main Card Container with Border and Shadow on Hover */}
                    <div className="relative w-full h-full rounded-sm overflow-hidden
                        group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)]
                        group-hover:border group-hover:border-[#404040]
                        transition-all duration-300">

                        {/* Image Section */}
                        <div className="relative w-full h-full group-hover:h-[130px] transition-all duration-300">
                            <Image
                                src={thumbnail}
                                alt={title}
                                fill
                                className="object-cover"
                            />

                            {/* Title Overlay on Image (Netflix Style) - Only on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-2 left-2 right-2">
                                    <h3 className="text-white text-[11px] font-bold line-clamp-2 leading-tight">
                                        {title}
                                    </h3>
                                </div>
                            </div>

                            {/* Recently Added Badge - Hide on hover */}
                            {isRecentlyAdded && (
                                <div
                                    className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-white text-[9px] font-semibold 
                                        group-hover:opacity-0 transition-opacity"
                                    style={{
                                        backgroundColor: '#FF2E63',
                                        padding: '2px 4px',
                                        borderRadius: '2px',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Recently Added
                                </div>
                            )}
                        </div>

                        {/* Info Section - Only visible on hover */}
                        <div className="absolute bottom-0 left-0 right-0 w-full h-0 group-hover:h-[63px] 
                            bg-[#181818] transition-all duration-300 overflow-hidden">

                            {/* Action Buttons Row */}
                            <div className="w-full h-[28px] flex items-center justify-between px-2 pt-1">
                                {/* Left Action Buttons */}
                                <div className="flex items-center gap-1">
                                    {/* Play Button */}
                                    <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center 
                                        hover:bg-zinc-200 transition">
                                        <Play className="w-3 h-3 text-black fill-black ml-[1px]" />
                                    </button>

                                    {/* Add to List Button */}
                                    <button className="w-6 h-6 bg-transparent border-[1.5px] border-zinc-500 rounded-full 
                                        flex items-center justify-center hover:border-white transition">
                                        <Plus className="w-3 h-3 text-white" strokeWidth={2.5} />
                                    </button>

                                    {/* Like Button */}
                                    <button className="w-6 h-6 bg-transparent border-[1.5px] border-zinc-500 rounded-full 
                                        flex items-center justify-center hover:border-white transition">
                                        <ThumbsUp className="w-3 h-3 text-white" strokeWidth={2} />
                                    </button>
                                </div>

                                {/* Right More Info Button */}
                                <button className="w-6 h-6 bg-transparent border-[1.5px] border-zinc-500 rounded-full 
                                    flex items-center justify-center hover:border-white transition">
                                    <ChevronDown className="w-3 h-3 text-white" strokeWidth={2.5} />
                                </button>
                            </div>

                            {/* Categories Row */}
                            <div className="w-full px-2 py-1">
                                <div className="flex items-center gap-1 flex-wrap">
                                    {displayCategories.slice(0, 3).map((category, index) => (
                                        <span key={index} className="flex items-center">
                                            <span
                                                className="text-white font-normal whitespace-nowrap"
                                                style={{
                                                    fontSize: '10px',
                                                    color: '#E5E5E5'
                                                }}
                                            >
                                                {category}
                                            </span>
                                            {index < Math.min(displayCategories.length - 1, 2) && (
                                                <span className="mx-1 text-zinc-600 text-[8px]">•</span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
