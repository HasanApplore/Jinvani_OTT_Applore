import BrowseNavbar from "@/components/layout/BrowseNavbar";
import Footer from "@/components/layout/Footer";
import CategoriesContent from "@/components/modules/categories/CategoriesContent";

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-black">
            <BrowseNavbar />
            <CategoriesContent />
            <Footer />
        </div>
    );
}
