"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";

// Category types
const CATEGORIES = ["All", "Puja", "Darshan", "Mandir Construction", "Seva", "Shiksha"];

// Location options
const LOCATIONS = ["All Locations", "Ahmedabad, Gujarat", "Mumbai, Maharashtra", "Delhi", "Bangalore, Karnataka"];

// Mock donation data
const DONATIONS_DATA = [
    {
        id: "1",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/movie1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Mandir Construction"
    },
    {
        id: "2",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/Poster 1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Mandir Construction"
    },
    {
        id: "3",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/movie1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Puja"
    },
    {
        id: "4",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/Poster 2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Darshan"
    },
    {
        id: "5",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/movie1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Seva"
    },
    {
        id: "6",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/Poster 3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Shiksha"
    },
    {
        id: "7",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/movie2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Puja"
    },
    {
        id: "8",
        title: "Shri Mahavir Jain Mandir",
        category: "Construction",
        location: "Ahmedabad, Gujarat",
        thumbnail: "/images/Poster 1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inter...",
        categoryType: "Mandir Construction"
    },
];

export default function DonationsContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    // Filter donations based on active category, location, and search query
    const filteredDonations = DONATIONS_DATA.filter((donation) => {
        const matchesCategory = activeCategory === "All" || donation.categoryType === activeCategory;
        const matchesLocation = selectedLocation === "All Locations" || donation.location === selectedLocation;
        const matchesSearch = donation.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesLocation && matchesSearch;
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
                {/* Categories + Location + Search Bar */}
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
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
                                    background: activeCategory === category ? '#FF2E63' : '#3a3a3a',
                                    color: 'white',
                                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                    fontWeight: 590,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    border: 'none',
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

                    {/* Location + Search */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        {/* Location Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLocationOpen(!isLocationOpen)}
                                style={{
                                    width: '200px',
                                    height: '56px',
                                    opacity: 1,
                                    borderRadius: '4px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    gap: '10px',
                                    padding: '18px 16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'white',
                                    fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                    fontSize: '14px',
                                    cursor: 'pointer'
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="truncate">{selectedLocation}</span>
                                </div>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            {isLocationOpen && (
                                <div
                                    className="absolute top-full mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-md overflow-hidden z-10"
                                    style={{
                                        maxHeight: '200px',
                                        overflowY: 'auto'
                                    }}
                                >
                                    {LOCATIONS.map((location) => (
                                        <button
                                            key={location}
                                            onClick={() => {
                                                setSelectedLocation(location);
                                                setIsLocationOpen(false);
                                            }}
                                            className="w-full text-left px-4 py-2 text-white hover:bg-zinc-800 transition"
                                            style={{
                                                fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {location}
                                        </button>
                                    ))}
                                </div>
                            )}
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
                </div>

                {/* Donations Grid */}
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
                    {filteredDonations.map((donation) => (
                        <div
                            key={donation.id}
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
                            {/* Donation Thumbnail */}
                            <div className="relative w-full h-[140px] overflow-hidden">
                                <Image
                                    src={donation.thumbnail}
                                    alt={donation.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* Category Badge */}
                                <div
                                    className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold"
                                    style={{
                                        background: '#FF2E63',
                                        color: 'white',
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif'
                                    }}
                                >
                                    {donation.category}
                                </div>
                            </div>

                            {/* Donation Content */}
                            <div className="p-4 flex flex-col h-[212px]">
                                <h3
                                    className="text-white font-semibold mb-2 line-clamp-1"
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontSize: '16px',
                                        lineHeight: '1.4'
                                    }}
                                >
                                    {donation.title}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-1 mb-3">
                                    <MapPin className="w-3 h-3 text-zinc-400" />
                                    <span
                                        className="text-zinc-400 text-xs"
                                        style={{
                                            fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif'
                                        }}
                                    >
                                        {donation.location}
                                    </span>
                                </div>

                                <p
                                    className="text-zinc-400 text-sm mb-4 line-clamp-3 flex-1"
                                    style={{
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif',
                                        fontSize: '12px',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {donation.description}
                                </p>

                                {/* Donate Button */}
                                <button
                                    className="w-full text-white text-sm font-semibold py-2 rounded transition"
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6600 0%, #FF2E63 100%)',
                                        fontFamily: 'SF Pro, system-ui, -apple-system, sans-serif'
                                    }}
                                >
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
