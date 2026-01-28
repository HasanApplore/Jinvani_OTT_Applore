"use client";

import Image from "next/image";
import { Play, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ASSETS } from "@/lib/constants";

interface ContentItem {
    id: string;
    title: string;
    description: string;
    backgroundImage: string;
    thumbnail: string;
    category: string;
}

interface HeroBannerProps {
    contentItems: ContentItem[];
}

export default function HeroBanner({ contentItems }: HeroBannerProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const activeContent = contentItems[activeIndex];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying || contentItems.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const nextIndex = (current + 1) % contentItems.length;
                // Scroll to keep active item visible
                scrollToIndex(nextIndex);
                return nextIndex;
            });
        }, 4000); // Change every 4 seconds (standard OTT timing)

        return () => clearInterval(interval);
    }, [isAutoPlaying, contentItems.length]);

    const scrollToIndex = (index: number) => {
        if (scrollRef.current) {
            const itemWidth = 144 + 12; // w-36 (144px) + gap-3 (12px)
            const scrollPosition = index * itemWidth;
            scrollRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 150;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const handleThumbnailClick = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false); // Pause auto-play when user manually selects
        scrollToIndex(index);
    };

    const handleMouseEnter = () => {
        setIsAutoPlaying(false); // Pause on hover
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true); // Resume on mouse leave
    };

    return (
        <div
            className="relative h-[60vh] md:h-[810px] w-full overflow-hidden bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background Image with Transition */}
            <div className="absolute inset-0 transition-opacity duration-500">
                <Image
                    key={activeContent.id}
                    src={activeContent.backgroundImage}
                    alt={activeContent.title}
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content Container - Fixed Position as per Figma */}
            <div
                className="absolute flex items-center"
                style={{
                    top: '467px',
                    left: '80px',
                    width: '1302px',
                    height: '256px',
                    gap: '600px', // Gap between content and potentially other elements (not fully utilized in this single block but spec'd)
                }}
            >
                <div>
                    {/* Category Badge */}
                    <div className="flex items-center gap-[2px] mb-4">
                        <div style={{ width: '22px', height: '22px', position: 'relative' }}>
                            {/* Assuming ASSETS.logo is available, otherwise using logoWithBg or a placeholder */}
                            <Image
                                src={ASSETS.logo || ASSETS.logoWithBg}
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span
                            style={{
                                fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '100%',
                                letterSpacing: '4px',
                                color: '#FFFFFF', // Assuming white for opacity 1
                                textTransform: 'uppercase'
                            }}
                        >
                            {activeContent.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        key={`title-${activeContent.id}`}
                        className="animate-fadeIn"
                        style={{
                            fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                            fontWeight: 1000,
                            fontSize: '72.91px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#FFFFFF',
                            width: '442px', // Approx based on layout, though text might wrap
                            maxWidth: '100%',
                        }}
                    >
                        {activeContent.title}
                    </h1>

                    {/* Description and Buttons Wrapper */}
                    <div
                        className="flex flex-col"
                        style={{
                            marginTop: '22px', // Gap from title/main block to this sub-div
                            width: '518px',
                            height: '133px',
                            gap: '22px'
                        }}
                    >
                        {/* Description */}
                        <p
                            key={`desc-${activeContent.id}`}
                            className="animate-fadeIn line-clamp-3"
                            style={{
                                width: '518px',
                                height: 'auto', // Changed to auto to allow text to breathe
                                fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                fontWeight: 510,
                                fontSize: '16px',
                                lineHeight: '150%', // Increased from 100% for readability
                                letterSpacing: '0%',
                                color: '#E5E5E5',
                            }}
                        >
                            {activeContent.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex items-center gap-[11px]" style={{ width: '291px', height: '42px' }}>
                            {/* Play Button */}
                            <button
                                className="flex items-center justify-center bg-white text-black transition hover:bg-zinc-200"
                                style={{
                                    width: '119px',
                                    height: '42px',
                                    borderRadius: '4px',
                                    padding: '8px 26px',
                                    gap: '10px'
                                }}
                            >
                                <Play className="w-[18px] h-[18px] fill-black" strokeWidth={2.5} />
                                <span
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontWeight: 590,
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                        letterSpacing: '0px',
                                        textAlign: 'center'
                                    }}
                                >
                                    Play
                                </span>
                            </button>

                            {/* More Info Button */}
                            <button
                                className="flex items-center justify-center text-white transition hover:bg-zinc-600"
                                style={{
                                    width: '161px',
                                    height: '42px',
                                    borderRadius: '4px',
                                    padding: '8px 26px',
                                    backgroundColor: '#6D6D6EB2',
                                    gap: '10px'
                                }}
                            >
                                <Info className="w-[26px] h-[26px] text-white" strokeWidth={2} />
                                <span
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontWeight: 590,
                                        fontSize: '18px',
                                        lineHeight: '24px',
                                        letterSpacing: '0px',
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    More Info
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Carousel (Bottom Right) */}
                {contentItems && contentItems.length > 0 && (
                    <div className="absolute bottom-8 group/carousel" style={{ right: '80px' }}>
                        <div className="relative">
                            {/* Left Arrow */}
                            {contentItems.length > 4 && (
                                <button
                                    onClick={() => scroll("left")}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                            )}

                            {/* Scrollable Thumbnails */}
                            <div
                                ref={scrollRef}
                                className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth max-w-[600px] px-1 py-2"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {contentItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`relative flex-shrink-0 w-28 md:w-36 aspect-video cursor-pointer transition-all ${activeIndex === index
                                            ? "border-[3px] border-white scale-105"
                                            : "border-[3px] border-transparent hover:border-zinc-600 hover:scale-105"
                                            }`}
                                        style={{ boxSizing: 'border-box' }}
                                    >
                                        <div className="relative w-full h-full rounded overflow-hidden shadow-lg">
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Arrow */}
                            {contentItems.length > 4 && (
                                <button
                                    onClick={() => scroll("right")}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-black"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>
                            )}

                            {/* Carousel Dots Indicator */}
                            <div className="flex items-center justify-center gap-1.5 mt-3">
                                {contentItems.map((item, index) => (
                                    <button
                                        key={`dot-${item.id}`}
                                        onClick={() => handleThumbnailClick(index)}
                                        className={`transition-all ${activeIndex === index
                                            ? "w-6 h-1.5 bg-white rounded-full"
                                            : "w-1.5 h-1.5 bg-zinc-500 rounded-full hover:bg-zinc-400"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
