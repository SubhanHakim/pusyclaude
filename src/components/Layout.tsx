import React, { type ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-orange-500 selection:text-black">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none z-50 shadow-[inset_0_0_150px_rgba(0,68,255,0.2)]" />
            <div className="scanlines fixed inset-0 pointer-events-none z-40 opacity-20" />

            {/* Noise Texture (Optional visual noise) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 mixture-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Main Container - Full Height, Central constrained width */}
            <div className="relative z-10 w-full h-full flex flex-col max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8">
                {children}
            </div>
        </div>
    );
};
