"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Hero Component
 * @returns JSX.Element
 */
const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-end px-[24px] md:px-[64px] pb-[100px] pt-[120px] relative overflow-hidden max-w-full"
        >
            {/* Animated Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '68px 68px',
                    maskImage: 'radial-gradient(ellipse 65% 75% at 50% 55%, black 0%, transparent 70%)'
                }}
            />

            {/* Hero Glow */}
            <div
                className="absolute bottom-[-150px] left-[15%] width-[700px] height-[500px] pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(ellipse, var(--teal-glow) 0%, transparent 65%)'
                }}
            />

            <div className="relative z-10 max-w-[880px]">
                {/* Kicker */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-xs tracking-[0.32em] uppercase text-teal mb-[40px] flex items-center gap-[14px]"
                >
                    <span className="w-[28px] h-[1px] bg-teal shrink-0" />
                    Back-Office Operations for U.S. OTR Carriers
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-black text-[clamp(66px,8.5vw,124px)] leading-[0.87] tracking-[-0.01em] uppercase mb-[48px]"
                >
                    The back<br />
                    office your<br />
                    <em className="not-italic text-teal">fleet runs on.</em>
                </motion.h1>

                {/* Body */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[19px] font-light leading-[1.7] text-text-soft max-w-[560px] mb-[56px]"
                >
                    Load booking, rate negotiation, compliance — the back-office work that never stops.
                    Running under your trucks so you can run a tight, profitable operation without
                    carrying the back-office overhead yourself.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-[20px] items-center"
                >
                    <Link
                        href="mailto:admin@supernova.center"
                        className="font-mono text-[11px] tracking-[0.2em] uppercase text-dark bg-teal px-[38px] py-[16px] no-underline font-medium transition-colors duration-200 hover:bg-[#00d9a8] inline-block"
                    >
                        Talk to Us
                    </Link>
                    <Link
                        href="#truth"
                        className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-soft no-underline border-b border-muted pb-[3px] transition-all duration-200 hover:text-text-main hover:border-text-main"
                    >
                        Read Our Thinking &rarr;
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
