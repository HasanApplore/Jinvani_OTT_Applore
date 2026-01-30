import BrowseNavbar from "@/components/layout/BrowseNavbar";
import Footer from "@/components/layout/Footer";
import ArticlesContent from "@/components/modules/articles/ArticlesContent";

export default function ArticlesPage() {
    return (
        <div className="min-h-screen bg-black">
            <BrowseNavbar />
            <ArticlesContent />
            <Footer />
        </div>
    );
}
