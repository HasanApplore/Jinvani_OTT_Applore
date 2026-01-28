"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Category {
    id: string;
    name: string;
    thumbnail: string;
    isRecentlyAdded?: boolean; // Show "Recently Added" badge
}

interface CategoryGridProps {
    categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="mb-8 px-[80px]">
            <h2
                className="font-semibold mb-4"
                style={{
                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                    fontWeight: 590,
                    fontSize: '20px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    color: '#E5E5E5'
                }}
            >
                Categories
            </h2>

            {/* Carousel Container */}
            <div className="relative group/carousel">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-full bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-start pl-2"
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                {/* Horizontal Scrolling Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative flex-shrink-0 w-[193px] h-[247px] rounded overflow-hidden cursor-pointer transition-opacity hover:opacity-90"
                        >
                            {/* Category Image */}
                            <Image
                                src={category.thumbnail}
                                alt={category.name}
                                fill
                                className="object-cover"
                            />

                            {/* Recently Added Badge */}
                            {category.isRecentlyAdded && (
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

                            {/* Overlay with Title */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                                <h3 className="text-white text-sm font-semibold line-clamp-2">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-full bg-gradient-to-l from-black/80 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-end pr-2"
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
}
