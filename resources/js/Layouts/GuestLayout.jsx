import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import MobileNavbar from '@/Components/MobileNavbar';
import Navbar from '@/Components/Navbar';
import { usePage } from "@inertiajs/react";

export default function GuestLayout({ children }) {

    const { url } = usePage();

    return (
        <div className="min-h-screen flex flex-col">
                            
                {url !== "/login" && (
                    <div className="">
                        <Navbar />
                        <MobileNavbar />
                    </div>
                )}

            {/* main content */}
            <div className="">
                {children}
            </div>


            {/* Footer */}
            <Footer />

        </div>
    );
}
