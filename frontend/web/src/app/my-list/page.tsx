import BrowseNavbar from "@/components/layout/BrowseNavbar";
import Footer from "@/components/layout/Footer";
import MyListContent from "@/components/modules/my-list/MyListContent";

export default function MyListPage() {
    return (
        <div className="min-h-screen bg-black">
            <BrowseNavbar />
            <MyListContent />
            <Footer />
        </div>
    );
}
