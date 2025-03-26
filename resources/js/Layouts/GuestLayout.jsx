import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* main content */}
            <div className="">
                {children}
            </div>


            {/* Footer */}
            <Footer />

        </div>
    );
}
