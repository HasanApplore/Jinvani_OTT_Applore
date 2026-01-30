import BrowseNavbar from "@/components/layout/BrowseNavbar";
import Footer from "@/components/layout/Footer";
import DonationsContent from "@/components/modules/donations/DonationsContent";

export default function DonationsPage() {
    return (
        <div className="min-h-screen bg-black">
            <BrowseNavbar />
            <DonationsContent />
            <Footer />
        </div>
    );
}
