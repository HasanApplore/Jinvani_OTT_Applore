"use client";

import Image from "next/image";
import { Play } from "lucide-react";

// Mock data for Categories
const CATEGORIES_DATA = [
    {
        id: "spiritual",
        title: "Spiritual",
        items: [
            { id: "1", title: "PARAMPARA", thumbnail: "/images/movie1.png" },
            { id: "2", title: "मंगल पुराण", thumbnail: "/images/Poster 1.png" },
            { id: "3", title: "कुण्डकुण्ड कथा", thumbnail: "/images/Poster 3.png" },
            { id: "4", title: "Swaminarayan", thumbnail: "/images/Poster 2.png" },
            { id: "5", title: "JEEVAMPIKA", thumbnail: "/images/movie2.png" },
            { id: "6", title: "आदि पुराण", thumbnail: "/images/Poster 1.png" },
        ]
    },
    {
        id: "documentary",
        title: "Documentary",
        items: [
            { id: "1", title: "AADIPURAN", thumbnail: "/images/movie1.png" },
            { id: "2", title: "PARAMPARA", thumbnail: "/images/movie2.png" },
            { id: "3", title: "Documentary Series", thumbnail: "/images/Poster 1.png" },
            { id: "4", title: "JEEVAMPIKA", thumbnail: "/images/Poster 2.png" },
            { id: "5", title: "Historical Tales", thumbnail: "/images/Poster 3.png" },
            { id: "6", title: "Cultural Stories", thumbnail: "/images/movie1.png" },
        ]
    },
    {
        id: "devotional",
        title: "Devotional",
        items: [
            { id: "1", title: "Swaminarayan", thumbnail: "/images/Poster 1.png" },
            { id: "2", title: "जीना जी", thumbnail: "/images/Poster 2.png" },
            { id: "3", title: "मंगल पुराण", thumbnail: "/images/Poster 3.png" },
            { id: "4", title: "PARAMPARA", thumbnail: "/images/movie1.png" },
            { id: "5", title: "कुण्डकुण्ड कथा", thumbnail: "/images/movie2.png" },
            { id: "6", title: "आदिपुराण", thumbnail: "/images/Poster 1.png" },
        ]
    },
    {
        id: "biography",
        title: "Biography",
        items: [
            { id: "1", title: "कुण्डकुण्ड कथा", thumbnail: "/images/Poster 3.png" },
            { id: "2", title: "Swaminarayan", thumbnail: "/images/Poster 1.png" },
            { id: "3", title: "जीना जी", thumbnail: "/images/Poster 2.png" },
            { id: "4", title: "Life Stories", thumbnail: "/images/movie1.png" },
            { id: "5", title: "Great Souls", thumbnail: "/images/movie2.png" },
            { id: "6", title: "Historical Figures", thumbnail: "/images/Poster 3.png" },
        ]
    },
];

export default function CategoriesContent() {
    return (
        <main
            className="pt-40 pb-12"
            style={{
                backgroundColor: '#000000',
                width: '1440px',
                margin: '0 auto'
            }}
        >
            {/* Categories Container */}
            <div
                style={{
                    width: '1440px',
                    minHeight: '860px',
                    opacity: 1
                }}
            >
                {CATEGORIES_DATA.map((category) => (
                    <div
                        key={category.id}
                        style={{
                            width: '1440px',
                            height: '215px',
                            opacity: 1,
                            gap: '24px',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            paddingLeft: '58px'
                        }}
                    >
                        {/* Heading Div */}
                        <div
                            style={{
                                width: '218px',
                                height: '28px',
                                opacity: 1,
                                marginBottom: '24px'
                            }}
                        >
                            <h2
                                className="text-white"
                                style={{
                                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                    fontWeight: 590,
                                    fontSize: '20px',
                                    lineHeight: '28px',
                                    letterSpacing: '0px'
                                }}
                            >
                                {category.title}
                            </h2>
                        </div>

                        {/* Content Items Div */}
                        <div
                            className="flex overflow-x-auto scrollbar-hide"
                            style={{
                                width: '1382px',
                                height: '123px',
                                opacity: 1,
                                gap: '8px'
                            }}
                        >
                            {category.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                                    style={{
                                        width: '218px',
                                        height: '123px',
                                        opacity: 1,
                                        borderRadius: '2px'
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-sm"
                                    />

                                    {/* Simple Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-sm flex items-center justify-center">
                                        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-zinc-200 transition">
                                            <Play className="w-6 h-6 text-black fill-black ml-1" />
                                        </button>
                                    </div>

                                    {/* Title on Hover */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-b-sm">
                                        <h3 className="text-white text-xs font-semibold line-clamp-1">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
