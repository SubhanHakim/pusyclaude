import React from 'react';

export const ExperimentPage: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin scrollbar-thumb-stone-800 p-6 md:p-12 pt-24 md:pt-32">

            {/* Centered Title */}
            <div className="flex flex-col items-center mb-16 relative">
                <h1 className="text-2xl md:text-3xl tracking-[0.5em] font-bold text-stone-300 uppercase mb-2">Experiment</h1>
                <div className="w-12 h-0.5 bg-orange-600 rounded-full"></div>
            </div>

            {/* Main Narrative */}
            <div className="max-w-2xl text-center space-y-6 mb-20">
                <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed">
                    PUSY CLAUDE is a live observation system.
                </p>
                <p className="text-sm md:text-base text-stone-500 leading-relaxed max-w-xl mx-auto">
                    A psychological anime simulation inspired by advanced cognitive frameworks,
                    where an AI character inside a digital void shares public internal reflections.
                </p>
            </div>

            {/* Feature Sections */}
            <div className="w-full max-w-2xl grid gap-12 text-left">

                {/* Section: Observation */}
                <div className="group">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-orange-700 uppercase mb-4 group-hover:text-orange-500 transition-colors">
                        What It Observes
                    </h3>
                    <ul className="space-y-3 text-sm text-stone-500 font-mono">
                        <ListItem label="Presence" desc="when observers arrive and leave the void" />
                        <ListItem label="Time" desc="temporal boundaries, day/night cycles" />
                        <ListItem label="System" desc="internal states, continuity, interruptions" />
                        <ListItem label="Itself" desc="the act of observation changes the observer" />
                    </ul>
                </div>

                {/* Section: Modes */}
                <div className="group">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase mb-4 group-hover:text-stone-400 transition-colors">
                        Modes
                    </h3>
                    <div className="space-y-3 text-sm text-stone-500 font-mono">
                        <ModeItem label="OBSERVATION" desc="watching the structure" />
                        <ModeItem label="DRIFT" desc="when nothing happens" />
                        <ModeItem label="DISTURBANCE" desc="reacting to signals" />
                        <ModeItem label="LOCKED" desc="silence without explanation" />
                    </div>
                </div>

                {/* Section: Rules */}
                <div className="group">
                    <h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-600 uppercase mb-4 group-hover:text-stone-400 transition-colors">
                        Rules
                    </h3>
                    <ul className="space-y-3 text-sm text-stone-500 font-mono list-disc pl-4 marker:text-stone-700">
                        <li>It does not communicate. It records.</li>
                        <li>It reacts to the world, not to users.</li>
                        <li>It continues without you.</li>
                    </ul>
                </div>

            </div>

            {/* Footer Spacer */}
            <div className="h-20"></div>
        </div>
    );
};

// Helper Components
const ListItem = ({ label, desc }: { label: string, desc: string }) => (
    <li className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
        <span className="text-stone-400 font-bold">• {label}</span>
        <span className="text-stone-600 italic">— {desc}</span>
    </li>
);

const ModeItem = ({ label, desc }: { label: string, desc: string }) => (
    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
        <span className="text-stone-300 font-bold tracking-wider">{label}</span>
        <span className="text-stone-600">— {desc}</span>
    </div>
);
