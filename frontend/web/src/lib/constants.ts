export const APP_CONFIG = {
    name: "Jinvani OTT",
    description: "Unlimited movies, TV shows, and more.",
};

export const ROUTES = {
    home: "/",
    login: "/login",
    signup: "/signup",
    browse: "/browse",
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
    },
    placeholders: {
        heroBg: "/images/landing-bg.png",
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
