"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";
import Top10Card from "./Top10Card";

interface Content {
    id: string;
    title: string;
    thumbnail: string;
    rank?: number;
    badge?: string;
    progress?: number; // Video progress percentage (0-100)
    isRecentlyAdded?: boolean; // Show "Recently Added" badge
}

interface ContentCarouselProps {
    title: string;
    items: Content[];
    variant?: "default" | "numbered" | "continue-watching" | "new-on-jinvani" | "popular-documentary";
}

export default function ContentCarousel({ title, items, variant = "default" }: ContentCarouselProps) {
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
        <div className="relative group/carousel mb-8 overflow-hidden">
            {/* Section Title */}
            <h2
                className="font-semibold mb-4 px-[80px]"
                style={{
                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                    fontWeight: 590,
                    fontSize: '20px',
                    lineHeight: '24px',
                    letterSpacing: '0px',
                    color: '#E5E5E5'
                }}
            >
                {title}
            </h2>

            {/* Carousel Container */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-full bg-gradient-to-r from-black/80 to-transparent opacity-0 group-hover/carousel:opacity-100 transition-opacity flex items-center justify-start pl-2"
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                {/* Scrollable Content */}
                <div
                    ref={scrollRef}
                    className={`flex overflow-x-auto overflow-y-hidden scrollbar-hide px-[80px] scroll-smooth ${variant === "continue-watching" ? "gap-[7px]" :
                        variant === "new-on-jinvani" ? "gap-2" :
                            variant === "numbered" ? "gap-[6px]" :
                                variant === "popular-documentary" ? "gap-2" :
                                    "gap-4"
                        }`}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {variant === "numbered" ? (
                        items.map((item, index) => (
                            <Top10Card
                                key={item.id}
                                rank={item.rank || index + 1}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                isRecentlyAdded={item.isRecentlyAdded}
                            />
                        ))
                    ) : (
                        items.map((item, index) => (
                            <ContentCard
                                key={item.id}
                                title={item.title}
                                thumbnail={item.thumbnail}
                                rank={undefined}
                                badge={item.badge}
                                size={
                                    variant === "continue-watching" ? "continue-watching" :
                                        variant === "new-on-jinvani" ? "new-on-jinvani" :
                                            variant === "popular-documentary" ? "popular-documentary" :
                                                "medium"
                                }
                                progress={item.progress}
                                isRecentlyAdded={item.isRecentlyAdded}
                            />
                        ))
                    )}
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
