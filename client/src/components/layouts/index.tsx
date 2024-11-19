import React, { Suspense } from 'react';

// Lazy load Header and Footer components
const Header = React.lazy(() => import('./header'));
const Footer = React.lazy(() => import('./footer'));

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Suspense to handle the fallback while loading the header */}
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>

            {/* Main Content */}
            <main className="flex-grow pt-14"> {/* Adjust padding-top as per header height */}
                {children}
            </main>

            {/* Suspense to handle the fallback while loading the footer */}
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Layout;
