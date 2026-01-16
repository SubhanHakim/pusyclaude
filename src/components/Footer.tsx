import React from 'react';

export const Footer: React.FC = () => {

    const copyCA = () => {
        const ca = "CA_ADDRESS_HERE"; // Placeholder
        navigator.clipboard.writeText(ca);
        alert(`COPIED: ${ca}`);
    };

    return (
        <footer className="w-full relative z-20 flex flex-col md:flex-row justify-between items-end pb-2 ">
            {/* Narrative Elements */}
            <div className="text-[10px] md:text-xs text-stone-600 font-mono space-y-1 mb-6 md:mb-0 select-none">
                <p className="opacity-50 hover:opacity-100 transition-opacity cursor-crosshair">:: fragment archived...</p>
                <p className="opacity-50 hover:opacity-100 transition-opacity cursor-crosshair">:: data streams unstable</p>
                <div className="mt-4 pt-4 border-t border-white/5 text-orange-500/80 tracking-[0.2em] font-bold">
                    S01 | E01 | SILENCE
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
                <Button onClick={() => window.open('https://x.com/pussyclaude?s=21' '_blank')}>
                    <span className="font-sans font-bold text-lg leading-none mr-2 relative top-[-1px]">𝕏</span>
                    COMMUNITY
                </Button>
                <Button onClick={copyCA} variant="primary">
                    COPY CA
                </Button>
            </div>
        </footer>
    );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', className, ...props }) => {
    const baseStyle = "h-10 px-6 uppercase tracking-widest text-[11px] font-bold transition-all duration-300 border flex items-center justify-center backdrop-blur-sm";
    const variants = {
        default: "bg-black/50 border-stone-800 text-stone-400 hover:text-white hover:border-orange-500 hover:bg-orange-950/20 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)]",
        primary: "bg-stone-900 border-stone-700 text-white hover:border-blue-500 hover:bg-blue-950/20 hover:text-blue-100 hover:shadow-[0_0_15px_rgba(0,100,255,0.2)]"
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
}
