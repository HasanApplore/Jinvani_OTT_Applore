"use client";

import Image from "next/image";

interface Top10CardProps {
    rank: number;
    title: string;
    thumbnail: string;
    isRecentlyAdded?: boolean;
}

export default function Top10Card({ rank, title, thumbnail, isRecentlyAdded }: Top10CardProps) {
    return (
        <div className="group relative flex-shrink-0 w-[215px] h-[193px] cursor-pointer">
            {/* Large Rank Number (Left Side - Behind movie) */}
            <div
                className="absolute font-black text-right"
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

            {/* Movie Preview (Right Side - In front of number) */}
            <div
                className="absolute right-0 top-0 overflow-hidden transition-opacity duration-300 group-hover:opacity-90"
                style={{
                    width: '130px',
                    height: '193px',
                    left: '106px',
                    borderTopRightRadius: '2px',
                    borderBottomRightRadius: '2px',
                    zIndex: 10
                }}
            >
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

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                        <h3 className="text-white text-xs font-semibold line-clamp-2">{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
