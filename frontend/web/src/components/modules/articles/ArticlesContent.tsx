"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Plus, ThumbsUp, Share2 } from "lucide-react";

// Category types
const CATEGORIES = ["All", "Fiction", "Spirituality", "Kids", "Documentary", "Sci-Fi"];

// Mock article data
const ARTICLES_DATA = [
    {
        id: "1",
        title: "SIROMANI",
        thumbnail: "/images/movie1.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Spirituality"
    },
    {
        id: "2",
        title: "PARAMPARA",
        thumbnail: "/images/movie2.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Documentary"
    },
    {
        id: "3",
        title: "JAIN STORIES",
        thumbnail: "/images/Poster 1.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Fiction"
    },
    {
        id: "4",
        title: "KIDS TALES",
        thumbnail: "/images/Poster 2.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Kids"
    },
    {
        id: "5",
        title: "SCI-FI WORLD",
        thumbnail: "/images/Poster 3.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Sci-Fi"
    },
    {
        id: "6",
        title: "DOCUMENTARY",
        thumbnail: "/images/movie1.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Documentary"
    },
    {
        id: "7",
        title: "SPIRITUAL JOURNEY",
        thumbnail: "/images/movie2.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Spirituality"
    },
    {
        id: "8",
        title: "FICTION TALES",
        thumbnail: "/images/Poster 1.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        readTime: "5 min",
        category: "Fiction"
    },
];

export default function ArticlesContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter articles based on active category and search query
    const filteredArticles = ARTICLES_DATA.filter((article) => {
        const matchesCategory = activeCategory === "All" || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="pt-40 pb-12 bg-black">
            {/* Main Container */}
            <div
                style={{
                    width: '1323px',
                    minHeight: '808px',
                    opacity: 1,
                    margin: '0 auto',
                    marginLeft: '55px',
                    gap: '24px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* Categories + Search Bar */}
                <div
                    style={{
                        width: '1323px',
                        height: '56px',
                        opacity: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    {/* Category Types */}
                    <div
                        style={{
                            width: '559px',
                            height: '39px',
                            opacity: 1,
                            gap: '16px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    minWidth: '61px',
                                    height: '39px',
                                    opacity: 1,
                                    borderRadius: '12px',
                                    gap: '10px',
                                    padding: '10px',
                                    background: activeCategory === category ? '#FF2E63' : 'transparent',
                                    color: 'white',
                                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                    fontWeight: 590,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    border: activeCategory === category ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    whiteSpace: 'nowrap'
                                }}
                                className="hover:bg-opacity-80"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search Box */}
                    <div
                        style={{
                            width: '368px',
                            height: '56px',
                            opacity: 1,
                            borderRadius: '4px',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            gap: '10px',
                            paddingTop: '18px',
                            paddingRight: '16px',
                            paddingBottom: '18px',
                            paddingLeft: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.05)'
                        }}
                    >
                        <Search className="w-5 h-5 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Search Articles"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-400"
                            style={{
                                fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                fontSize: '14px'
                            }}
                        />
                    </div>
                </div>

                {/* Articles Grid */}
                <div
                    style={{
                        width: '1323px',
                        opacity: 1,
                        gap: '36px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, 236px)',
                        gridAutoRows: '352px'
                    }}
                >
                    {filteredArticles.map((article) => (
                        <div
                            key={article.id}
                            className="group cursor-pointer"
                            style={{
                                width: '236px',
                                height: '352px',
                                opacity: 1,
                                borderRadius: '4px',
                                background: '#1a1a1a',
                                overflow: 'hidden',
                                transition: 'transform 0.2s',
                            }}
                        >
                            {/* Article Thumbnail */}
                            <div className="relative w-full h-[140px] overflow-hidden">
                                <Image
                                    src={article.thumbnail}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* Overlay Icons */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                                        <Plus className="w-4 h-4 text-white" />
                                    </button>
                                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                                        <ThumbsUp className="w-4 h-4 text-white" />
                                    </button>
                                    <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                                        <Share2 className="w-4 h-4 text-white" />
                                    </button>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-4 flex flex-col h-[212px]">
                                <h3
                                    className="text-white font-semibold mb-2 line-clamp-2"
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontSize: '16px',
                                        lineHeight: '1.4'
                                    }}
                                >
                                    {article.title}
                                </h3>

                                <p
                                    className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-1"
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontSize: '12px',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-700">
                                    <span className="text-zinc-500 text-xs">{article.readTime}</span>
                                    <button
                                        className="text-white text-sm font-semibold hover:text-[#FF2E63] transition flex items-center gap-1"
                                        style={{
                                            fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif'
                                        }}
                                    >
                                        Read
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
