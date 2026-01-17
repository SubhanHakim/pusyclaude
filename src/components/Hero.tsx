import React from 'react';
import logo from '../assets/logo.jpg';

export const Hero: React.FC = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative group">
                {/* Glow Effect Layer */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse-slow"></div>

                {/* Image Container with Scanline Clip or Filter */}
                <img
                    src={logo}
                    alt="Pussy Claude Symbol"
                    className="
                w-[320px] h-[320px] md:w-[500px] md:h-[500px] 
                object-contain 
                filter grayscale contrast-[1.1] brightness-[0.9] 
                drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]
                transition-all duration-700
                group-hover:grayscale-0 group-hover:drop-shadow-[0_0_20px_rgba(255,107,0,0.4)]
            "
                />

                {/* Overlay Text */}
                <div className="absolute -bottom-12 left-0 right-0 text-center opacity-60">
                    <div className="text-[10px] tracking-[0.8em] text-white/50 uppercase animate-pulse">
                        Observation Unit
                    </div>
                </div>
            </div>
        </div>
    );
};
