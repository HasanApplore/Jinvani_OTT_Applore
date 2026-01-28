export const APP_CONFIG = {
    name: "Jinvani OTT",
    description: "Unlimited movies, TV shows, and more.",
};

export const ROUTES = {
    home: "/",
    browse: "/browse",
    login: "/login",
    signup: "/signup",
    shows: "/shows",
    articles: "/articles",
    helpCenter: "/help",
    giftCards: "/gift-cards",
    privacy: "/privacy",
    termsOfUse: "/terms",
};

export const ASSETS = {
    logo: "/images/logo.png", // Serves from public/images/logo.png
    logoWithBg: "/images/logowithbg.png", // Logo with background for footer
    icons: {
        google: "/icons/material-icon-theme_google.png",
        meta: "/icons/logos_meta-icon.png",
        facebook: "/icons/Name=Facebook.png",
        instagram: "/icons/Name=Instagram.png",
        twitter: "/icons/Name=Twitter.png",
        youtube: "/icons/Name=YouTube.png",
        translator: "/icons/translator icon.png",
        arrowDown: "/icons/Name=ArrowDown.png",
    },
    placeholders: {
        heroBg: "/images/landing-bg.png",
        contentPoster: "https://placehold.co/400x600/1a1a1a/white?text=Content",
    }
};

export const SOCIAL_LINKS = {
    facebook: "https://facebook.com/jinvani",
    instagram: "https://instagram.com/jinvani",
    twitter: "https://twitter.com/jinvani",
    youtube: "https://youtube.com/jinvani",
};

export const FOOTER_LINKS = {
    quickLinks: [
        { label: "Home", href: "/" },
        { label: "Shows", href: "/shows" },
        { label: "Articles", href: "/articles" },
        { label: "Articles", href: "/articles" },
    ],
    others: [
        { label: "Help Centre", href: "/help" },
        { label: "Gift Cards", href: "/gift-cards" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
    ],
};

// Mock Content Data for Browse Page
// Featured content carousel - each item has complete hero section data
export const FEATURED_CONTENT = [
    {
        id: "1",
        title: "AADIPURAN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        backgroundImage: "/images/Poster 1.png",
        thumbnail: "/images/Poster 1.png",
        category: "DOCUMENTARY",
    },
    {
        id: "2",
        title: "मंगल पुराण",
        description: "Experience the divine journey through ancient scriptures and spiritual wisdom. A profound exploration of sacred texts and timeless teachings.",
        backgroundImage: "/images/Poster 2.png",
        thumbnail: "/images/Poster 2.png",
        category: "SPIRITUAL",
    },
    {
        id: "3",
        title: "कुण्डकुण्ड कथा",
        description: "Discover the enlightening tales and philosophical insights from the great spiritual master. A journey through wisdom and devotion.",
        backgroundImage: "/images/Poster 3.png",
        thumbnail: "/images/Poster 3.png",
        category: "BIOGRAPHY",
    },
    {
        id: "4",
        title: "JEEVAMPIKA",
        description: "An inspiring story of life, faith, and transformation. Follow the remarkable journey of spiritual awakening and self-discovery.",
        backgroundImage: "/images/movie1.png",
        thumbnail: "/images/movie1.png",
        category: "DRAMA",
    },
    {
        id: "5",
        title: "PARAMPARA",
        description: "Explore the rich traditions and cultural heritage passed down through generations. A celebration of timeless values and beliefs.",
        backgroundImage: "/images/movie2.png",
        thumbnail: "/images/movie2.png",
        category: "CULTURAL",
    },
    {
        id: "6",
        title: "जीना जी",
        description: "A heartwarming tale of devotion, family, and spiritual growth. Experience the beauty of faith and community bonds.",
        backgroundImage: "/images/Poster 1.png",
        thumbnail: "/images/Poster 1.png",
        category: "FAMILY",
    },
    {
        id: "7",
        title: "Swaminarayan",
        description: "The inspiring life story of a great spiritual leader who transformed millions of lives through his teachings and compassion.",
        backgroundImage: "/images/Poster 2.png",
        thumbnail: "/images/Poster 2.png",
        category: "BIOGRAPHY",
    },
    {
        id: "8",
        title: "DIVINE WISDOM",
        description: "Unlock the secrets of ancient wisdom and spiritual enlightenment. A comprehensive guide to inner peace and self-realization.",
        backgroundImage: "/images/Poster 3.png",
        thumbnail: "/images/Poster 3.png",
        category: "EDUCATIONAL",
    },
];

export const CATEGORIES = [
    // Recently added items first
    { id: "8", name: "Divine Wisdom", thumbnail: "/images/Poster 3.png", isRecentlyAdded: true },
    { id: "9", name: "Sacred Teachings", thumbnail: "/images/movie1.png", isRecentlyAdded: true },
    // Regular items
    { id: "1", name: "मंगल पुराण", thumbnail: "/images/Poster 1.png" },
    { id: "2", name: "जीना जी", thumbnail: "/images/Poster 2.png" },
    { id: "3", name: "कुण्डकुण्ड कथा", thumbnail: "/images/Poster 3.png" },
    { id: "4", name: "PARAMPARA", thumbnail: "/images/movie1.png" },
    { id: "5", name: "JEEVAMPIKA", thumbnail: "/images/movie2.png" },
    { id: "6", name: "आदि पुराण", thumbnail: "/images/Poster 1.png" },
    { id: "7", name: "Spiritual Stories", thumbnail: "/images/Poster 2.png" },
    { id: "10", name: "Ancient Scriptures", thumbnail: "/images/movie2.png" },
];

export const CONTINUE_WATCHING = [
    { id: "1", title: "PARAMPARA - Episode 3", thumbnail: "/images/movie1.png", progress: 65 },
    { id: "2", title: "मंगल पुराण - Episode 5", thumbnail: "/images/Poster 2.png", progress: 30 },
    { id: "3", title: "AADIPURAN - Episode 1", thumbnail: "/images/Poster 1.png", progress: 85 },
    { id: "4", title: "कुण्डकुण्ड कथा - Episode 2", thumbnail: "/images/Poster 3.png", progress: 45 },
    { id: "5", title: "JEEVAMPIKA - Episode 4", thumbnail: "/images/movie2.png", progress: 20 },
];

export const NOW_ON_JINVANI = [
    // Recently added items first
    { id: "1", title: "PARAMPARA", thumbnail: "/images/movie1.png", isRecentlyAdded: true },
    { id: "2", title: "मंगल पुराण", thumbnail: "/images/Poster 1.png", isRecentlyAdded: true },
    { id: "5", title: "कुण्डकुण्ड कथा", thumbnail: "/images/Poster 3.png", isRecentlyAdded: true },
    // Regular items
    { id: "3", title: "JEEVAMPIKA", thumbnail: "/images/movie2.png" },
    { id: "4", title: "जीना जी", thumbnail: "/images/Poster 2.png" },
    { id: "6", title: "PARAMPARA", thumbnail: "/images/movie1.png" },
];

export const TOP_10_JINVANI = [
    { id: "1", title: "कुण्डकुण्ड कथा", thumbnail: "/images/Poster 3.png", rank: 1 },
    { id: "2", title: "कुण्डकुण्ड कथा", thumbnail: "/images/movie1.png", rank: 2 },
    { id: "3", title: "मंगल पुराण", thumbnail: "/images/movie2.png", rank: 3 },
    { id: "4", title: "Swaminarayan", thumbnail: "/images/Poster 1.png", rank: 4 },
    { id: "5", title: "Swaminarayan", thumbnail: "/images/Poster 2.png", rank: 5 },
    { id: "6", title: "Swaminarayan", thumbnail: "/images/Poster 3.png", rank: 6 },
    { id: "7", title: "PARAMPARA", thumbnail: "/images/movie1.png", rank: 7 },
    { id: "8", title: "जीना जी", thumbnail: "/images/Poster 1.png", rank: 8 },
    { id: "9", title: "JEEVAMPIKA", thumbnail: "/images/movie2.png", rank: 9 },
    { id: "10", title: "आदि पुराण", thumbnail: "/images/Poster 2.png", rank: 10 },
];

export const POPULAR_DOCUMENTARY = [
    { id: "1", title: "AADIPURAN", thumbnail: "/images/movie1.png" },
    { id: "2", title: "JEEVAMPIKA", thumbnail: "/images/movie2.png" },
    { id: "3", title: "Documentary", thumbnail: "/images/Poster 1.png" },
    { id: "4", title: "JEEVAMPIKA", thumbnail: "/images/Poster 2.png" },
    { id: "5", title: "AADIPURAN", thumbnail: "/images/Poster 3.png" },
];
