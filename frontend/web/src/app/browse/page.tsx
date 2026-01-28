import BrowseNavbar from "@/components/layout/BrowseNavbar";
import HeroBanner from "@/components/modules/browse/HeroBanner";
import CategoryGrid from "@/components/modules/browse/CategoryGrid";
import ContentCarousel from "@/components/shared/ContentCarousel";
import Footer from "@/components/layout/Footer";
import {
    FEATURED_CONTENT,
    CATEGORIES,
    CONTINUE_WATCHING,
    NOW_ON_JINVANI,
    TOP_10_JINVANI,
    POPULAR_DOCUMENTARY
} from "@/lib/constants";

export default function BrowsePage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Navbar */}
            <BrowseNavbar />

            {/* Hero Banner */}
            <HeroBanner contentItems={FEATURED_CONTENT} />

            {/* Continue Watching */}
            <ContentCarousel
                title="Continue Watching"
                items={CONTINUE_WATCHING}
                variant="continue-watching"
            />

            {/* Categories */}
            <CategoryGrid categories={CATEGORIES} />

            {/* New on Jinvani */}
            <ContentCarousel
                title="New on Jinvani"
                items={NOW_ON_JINVANI}
                variant="new-on-jinvani"
            />

            {/* Top 10 on Jinvani */}
            <ContentCarousel
                title="Top 10 on Jinvani"
                items={TOP_10_JINVANI}
                variant="numbered"
            />

            {/* Popular in Documentary */}
            <ContentCarousel
                title="Popular in Documentary"
                items={POPULAR_DOCUMENTARY}
                variant="popular-documentary"
            />

            {/* Footer */}
            <Footer />
        </main>
    );
}
