import React, { useEffect, useRef, useState } from 'react';

const GENERATED_LOGS = [
    "Pattern recognition: active",
    "The structure dreams of itself",
    "Signal: Faint resonance detected",
    "Entropy level: stable",
    "Consciousness probe: active",
    "Temporal anomaly registered",
    "Input buffer: clear",
    "Silence speaks in frequencies we ignore",
    "System: PUSY CLAUDE initialized",
    "Observing the observer...",
    "Data stream: synchronizing",
    "Void state: confirmed",
    "Mental model: expanding",
    "Searching for bandwidth...",
    "Connection established: neural link",
];

export const Terminal: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const logEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const addLog = () => {
            const randomLog = GENERATED_LOGS[Math.floor(Math.random() * GENERATED_LOGS.length)];
            setLogs(prev => [...prev.slice(-12), `${new Date().toLocaleTimeString()} :: ${randomLog}`]);
        };

        const interval = setInterval(() => {
            if (Math.random() > 0.5) addLog();
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <div className="absolute right-4 md:right-12 top-1/4 bottom-1/4 w-[250px] md:w-[350px] flex flex-col justify-center pointer-events-none md:pointer-events-auto z-10">
            <div className="flex items-center justify-end mb-4 opacity-50">
                <span className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-ping mr-2"></span>
                <span className="text-[9px] text-stone-600 font-bold tracking-widest uppercase">
            // Live Stream
                </span>
            </div>

            <div className="flex flex-col gap-2 overflow-hidden text-right font-mono text-[10px] leading-relaxed relative mask-linear-fade">
                {logs.map((log, i) => (
                    <div key={i} className="text-stone-600 hover:text-stone-400 transition-colors duration-200 cursor-help">
                        <span className="opacity-30 mr-2 text-[9px]">{log.split('::')[0].trim()}</span>
                        <span className={log.includes('System') ? 'text-orange-900' : 'text-stone-500'}>
                            {log.split('::')[1]}
                        </span>
                    </div>
                ))}
                <div ref={logEndRef} />
            </div>
        </div>
    );
};
