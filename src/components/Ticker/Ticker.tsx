"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Ticker Component
 * @returns JSX.Element
 */
const Ticker = () => {
    const items = [
        "Load Booking",
        "Rate Negotiation",
        "FMCSA Compliance",
        "HOS & ELD",
        "Lean Before Fast",
        "Your Authority. Your Trucks. Your Call.",
        "We Adapt to How You Run",
        "Operational in Days",
    ];

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="h-[44px] bg-dark2 border-y border-border-muted overflow-hidden flex items-center ">
            <motion.div
                className="flex gap-12 whitespace-nowrap px-[28px]"
                animate={{
                    x: ["0%", "-33.33%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div
                        key={`${item}-${idx}`}
                        className="font-mono text-xs tracking-[0.22em] uppercase text-text-muted flex items-center gap-12"
                    >
                        <span className="w-[4px] h-[4px] rounded-full bg-teal shrink-0" />
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Ticker;
