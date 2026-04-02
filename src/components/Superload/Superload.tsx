"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";
import { LOCATIONS } from "@/constants/locations.constant";
import { AnimatePresence } from "framer-motion";
import { getRandomRPM, getRandomSteppedNumber, getRandomItem } from "@/utils/math.util";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

const TRUCK_TYPES = [
    "Van",
    "Flatbed",
    "Reefer",
    "Conestoga",
    "Container",
    "Double Drop",
    "Dry Bulk"
];

/**
 * Superload Component
 * @returns JSX.Element
 */
const Superload = () => {
    /**
     * Generates a new random load object
     */
    const generateLoad = React.useCallback(() => {
        const location = getRandomItem(LOCATIONS);
        const rpmStr = getRandomRPM(1.5, 3.2);
        const rpm = parseFloat(rpmStr.replace('$', ''));
        const isWorth = rpm > 2.0;
        const weight = getRandomSteppedNumber(30000, 42000, 100);
        const type = getRandomItem(TRUCK_TYPES);

        return {
            id: `${Date.now()}-${Math.random()}`,
            ...location,
            rpm: rpmStr,
            weight: weight,
            type: type,
            worth: isWorth ? 'yes' : 'no',
            label: isWorth ? 'Book It' : 'Pass'
        };
    }, []);

    const [activeLoads, setActiveLoads] = React.useState<any[]>([]);

    // Initialize with 4 loads
    React.useEffect(() => {
        setActiveLoads([generateLoad(), generateLoad(), generateLoad(), generateLoad()]);
    }, [generateLoad]);

    // Update feed every 2 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveLoads(prev => {
                const nextLoad = generateLoad();
                return [nextLoad, ...prev.slice(0, 3)];
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [generateLoad]);

    return (
        <section id="superload" className="bg-dark py-[120px] overflow-hidden relative">
            {/* Background Glow */}
            <div
                className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(ellipse, var(--teal-dim) 0%, transparent 65%)'
                }}
            />

            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[96px] items-center relative z-10">

                    {/* Left - Copy */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72 }}
                        variants={revealVariants}
                    >
                        <SectionLabel label="Technology" />
                        <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em] mb-[24px]">
                            We don&apos;t<br />just run ops.<br /><em className="not-italic text-teal">We build tools.</em>
                        </h2>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft mt-[24px]">
                            Our ops team doesn&apos;t use off-the-shelf software. They work with tools we built specifically for how freight is actually dispatched on DAT and Truckstop — instant RPM checks, real routing, profitability scoring on every load before it gets booked.
                        </p>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft mt-[16px]">
                            When you&apos;re with Supernova, you don&apos;t need to know the tools exist. You just see the results — better loads, fewer wasted miles, cleaner decisions.
                        </p>

                        <div className="mt-[32px]">
                            <div className="inline-flex items-center gap-[8px] bg-teal-dim border border-teal p-[7px_16px] mb-[8px]">
                                <span className="w-[6px] h-[6px] rounded-full bg-teal shrink-0 animate-pulse" />
                                <span className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-teal">Superload.app — Live & Free</span>
                            </div>
                            <p className="text-[13px] text-text-muted mt-[12px] leading-[1.65] max-w-[360px]">
                                Our dispatcher tooling is available free to any dispatcher in the industry. If you run your own back office, your team can use it too.
                            </p>
                            <a
                                href="https://superload.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[11px] tracking-[0.18em] uppercase text-teal no-underline border-b border-teal-mid pb-[2px] transition-all duration-200 hover:border-teal mt-[12px] inline-block"
                            >
                                superload.app ↗
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Mock UI */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72 }}
                        variants={revealVariants}
                    >
                        <div className="bg-dark3 border border-border-muted overflow-hidden">
                            {/* Browser Bar */}
                            <div className="bg-dark4 p-[12px_16px] flex items-center gap-[10px] border-b border-border-muted">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#E05252]" />
                                <div className="w-[8px] h-[8px] rounded-full bg-[#D9963F]" />
                                <div className="w-[8px] h-[8px] rounded-full bg-[#00C49A]" />
                                <div className="flex-1 bg-dark5 border border-border-subtle p-[5px_12px] font-mono text-[10px] text-text-muted tracking-[0.04em] ml-[8px]">
                                    dat.com/loadboard
                                </div>
                                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-teal bg-teal-dim border border-teal p-[4px_10px] whitespace-nowrap">
                                    SUPERLOAD ▲
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative min-h-[220px]">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {activeLoads.map((load, idx) => (
                                        <motion.div
                                            key={load.id}
                                            layout
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{
                                                duration: 1,
                                                ease: [0.23, 1, 0.32, 1]
                                            }}
                                            className={`
                                                p-[20px_24px] border-b border-border-subtle grid grid-cols-[1fr_auto] gap-[16px] items-start transition-colors duration-200 hover:bg-dark4
                                                ${idx === activeLoads.length - 1 ? 'border-b-0' : ''}
                                            `}
                                        >
                                            <div>
                                                <div className="font-display font-bold text-[18px] tracking-[0.04em] uppercase text-text-main mb-[6px]">
                                                    {load.from} → {load.to}
                                                </div>
                                                <div className="font-mono text-[10px] tracking-[0.12em] text-text-muted">
                                                    {load.distance_miles.toLocaleString()} mi · {load.type} · {load.weight.toLocaleString()} lbs
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[4px] items-end">
                                                <div className="font-display font-black text-[26px] text-teal leading-none">
                                                    {load.rpm}
                                                </div>
                                                <div className="font-mono text-[8.5px] tracking-[0.2em] uppercase text-teal">
                                                    / mile
                                                </div>
                                                <div className={`
                                                    font-mono text-[9px] tracking-[0.14em] uppercase p-[3px_9px] mt-[2px] border
                                                    ${load.worth === 'yes' ? 'bg-teal-dim text-teal border-teal' : 'bg-[#D96B3F1A] text-warn border-warn'}
                                                `}>
                                                    {load.label}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>
                        <p className="font-mono text-[10px] tracking-[0.14em] text-text-muted mt-[16px] uppercase">
                            Every load our team books goes through this. Instant. Every time.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Superload;
