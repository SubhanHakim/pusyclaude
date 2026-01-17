import React, { useEffect, useState } from 'react';

type PageType = 'live' | 'archive' | 'experiment';

interface HeaderProps {
    currentPage: PageType;
    onNavigate: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [time, setTime] = useState(new Date());
    const [entropy, setEntropy] = useState(0.0234);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        const entropyInterval = setInterval(() => {
            setEntropy(e => Math.max(0, e + (Math.random() - 0.5) * 0.002));
        }, 2500);
        return () => {
            clearInterval(timer);
            clearInterval(entropyInterval);
        };
    }, []);

    const navItems: { id: PageType; label: string }[] = [
        { id: 'live', label: 'LIVE' },
        { id: 'archive', label: 'ARCHIVE' },
        { id: 'experiment', label: 'EXPERIMENT' },
    ];

    return (
        <header className="w-full shrink-0 z-50">
            {/* Main Content Aligned Container - Matches max-w-6xl from pages */}
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 pt-8 md:pt-12 pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-0 border-b border-white/5">

                {/* Brand Section */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white hover:text-orange-500 transition-colors cursor-pointer select-none font-sans"
                        onClick={() => onNavigate('live')}>
                        PUSSY CLAUDE
                    </h1>

                    {/* Minimalist Stats */}
                    <div className="flex items-center gap-4 text-[10px] text-stone-500 font-mono tracking-widest pl-1">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                            ONLINE
                        </span>
                        <span className="text-stone-700">|</span>
                        <span>{time.toLocaleTimeString([], { hour12: false })}</span>
                        <span className="text-stone-700">|</span>
                        <span>E-{entropy.toFixed(3)}</span>
                    </div>
                </div>

                {/* Navigation Section */}
                <nav className="flex items-center gap-8 md:gap-12 w-full md:w-auto overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-none">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={`group relative text-[11px] font-bold tracking-[0.2em] transition-all duration-300 uppercase bg-transparent border-none cursor-pointer whitespace-nowrap ${currentPage === item.id ? 'text-orange-500' : 'text-stone-500 hover:text-stone-300'
                                }`}
                        >
                            {item.label}
                            {/* Simple Underline Indicator */}
                            <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-orange-500 transition-all duration-300 origin-left ${currentPage === item.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50'
                                }`}></span>
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};
