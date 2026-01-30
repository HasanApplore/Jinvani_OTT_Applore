"use client";

import ContentCard from "@/components/shared/ContentCard";

// Mock data for My List
const NEWS_ITEMS = [
    {
        id: "1",
        title: "आदिपुराण",
        thumbnail: "/images/movie1.png",
        isRecentlyAdded: true,
        categories: ["Documentary", "Historical", "Spiritual"]
    },
    {
        id: "2",
        title: "PARAMPARA",
        thumbnail: "/images/movie2.png",
        isRecentlyAdded: false,
        categories: ["Spiritual", "Documentary", "Cultural"]
    },
    {
        id: "3",
        title: "JAIN",
        thumbnail: "/images/Poster 1.png",
        isRecentlyAdded: false,
        categories: ["Religious", "Educational", "Documentary"]
    },
    {
        id: "4",
        title: "Documentary",
        thumbnail: "/images/Poster 2.png",
        isRecentlyAdded: false,
        categories: ["Documentary", "Educational", "Cultural"]
    },
    {
        id: "5",
        title: "आदिपुराण",
        thumbnail: "/images/Poster 3.png",
        isRecentlyAdded: true,
        categories: ["Documentary", "Historical", "Spiritual"]
    },
];

const WATCH_LATER_ITEMS = [
    {
        id: "1",
        title: "PARAMPARA - Episode 3",
        thumbnail: "/images/movie1.png",
        categories: ["Spiritual", "Documentary", "Cultural"]
    },
    {
        id: "2",
        title: "मंगल पुराण - Episode 5",
        thumbnail: "/images/Poster 2.png",
        categories: ["Spiritual", "Religious", "Educational"]
    },
    {
        id: "3",
        title: "कुण्डकुण्ड कथा",
        thumbnail: "/images/Poster 3.png",
        categories: ["Biography", "Spiritual", "Inspirational"]
    },
    {
        id: "4",
        title: "Swaminarayan",
        thumbnail: "/images/Poster 1.png",
        categories: ["Biography", "Devotional", "Historical"]
    },
    {
        id: "5",
        title: "JEEVAMPIKA",
        thumbnail: "/images/movie2.png",
        categories: ["Drama", "Spiritual", "Family"]
    },
    {
        id: "6",
        title: "आदि पुराण",
        thumbnail: "/images/Poster 2.png",
        categories: ["Documentary", "Historical", "Spiritual"]
    },
];

export default function MyListContent() {
    return (
        <main className="pt-40 pb-12" style={{ backgroundColor: '#000000' }}>
            {/* News Section */}
            <section className="px-20 mb-12">
                <div className="mb-6">
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
                        News
                    </h2>
                </div>

                {/* News Items Grid */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {NEWS_ITEMS.map((item) => (
                        <div key={item.id} className="flex-shrink-0">
                            <ContentCard
                                title={item.title}
                                thumbnail={item.thumbnail}
                                size="new-on-jinvani"
                                isRecentlyAdded={item.isRecentlyAdded}
                                categories={item.categories}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Watch Later Section */}
            <section className="px-20">
                <div className="mb-6">
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
                        Watch Later
                    </h2>
                </div>

                {/* Watch Later Items Grid */}
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                    {WATCH_LATER_ITEMS.map((item) => (
                        <div key={item.id} className="flex-shrink-0">
                            <ContentCard
                                title={item.title}
                                thumbnail={item.thumbnail}
                                size="new-on-jinvani"
                                categories={item.categories}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
