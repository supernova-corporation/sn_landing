"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * InfrastructureSection Component
 * @returns JSX.Element
 */
const InfrastructureSection = () => {
    const features = [
        {
            num: "01 — Live",
            title: "Load Booking & Ops",
            desc: "Round-the-clock coverage on every load — booking, calls, rate negotiation, exception handling. When a broker goes dark at 11pm, someone at Supernova picks it up."
        },
        {
            num: "02 — Live",
            title: "Rate Desk",
            desc: "Supernova pools capacity across every carrier it manages. That combined volume builds real broker relationships — and gets your trucks rates and lanes that a 10-truck operation can't negotiate alone."
        },
        {
            num: "03 — Live",
            title: "Compliance & ELD",
            desc: "HOS monitoring, FMCSA compliance, ELD support — handled daily, built into how we run. One out-of-service order costs more than months of clean logs to undo."
        }
    ];

    const values = [
        {
            title: "We Adapt to You",
            desc: "Your preferred lanes, your drivers, your rhythm. We learn how you run and build around it. You don't change for us."
        },
        {
            title: "Full Transparency",
            desc: "Every load booked, every decision made — you see it. Nothing moves without you knowing. We operate, you govern."
        },
        {
            title: "Ready When You Are",
            desc: "If you decide to add a truck, the back office is already sized for it. No scramble. No re-onboarding. The infrastructure runs the same at 6 trucks as it does at 20."
        }
    ];

    return (
        <section id="infra" className="bg-dark py-[120px]">
            <div className="container mx-auto">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.72 }}
                    variants={revealVariants}
                    className="mb-[72px]"
                >
                    <SectionLabel label="What We Are" />
                    <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em]">
                        Your operator.<br />Your baseline.<br /><em className="not-italic text-teal">Your infrastructure.</em>
                    </h2>
                    <p className="text-[16px] font-light leading-[1.8] text-text-soft max-w-[560px] mt-[20px]">
                        Not a software subscription. Not a dispatcher you hire and lose. The operational layer that runs under your fleet — load booking, rate negotiation, compliance, billing — built to hold and built to run without you having to manage it.
                    </p>
                </motion.div>

                {/* Feature Columns */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.72, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border-subtle border border-border-subtle"
                >
                    {features.map((feat) => (
                        <motion.div
                            key={feat.title}
                            variants={revealVariants}
                            className="bg-dark3 p-[48px] md:p-[40px] relative overflow-hidden group transition-colors duration-250 hover:bg-dark4"
                        >
                            <div className="font-mono text-xs tracking-[0.22em] text-teal mb-[20px]">
                                {feat.num}
                            </div>
                            <div className="font-display font-bold text-[22px] tracking-[0.04em] uppercase text-text-main mb-[14px] leading-none">
                                {feat.title}
                            </div>
                            <p className="text-[14px] leading-[1.75] text-text-muted">
                                {feat.desc}
                            </p>
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal scale-x-0 origin-left transition-transform duration-380 ease-out group-hover:scale-x-100" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Values Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.72, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border-subtle border border-border-subtle border-top-0 mt-[-1px]"
                >
                    {values.map((val) => (
                        <motion.div
                            key={val.title}
                            variants={revealVariants}
                            className="bg-dark2 p-[32px] md:p-[40px] grid grid-cols-[20px_1fr] gap-[18px] items-start transition-colors duration-200 hover:bg-dark3"
                        >
                            <div className="font-mono text-[11px] text-teal pt-[2px]">&rarr;</div>
                            <p className="text-[14px] leading-[1.65] text-text-soft">
                                <strong className="text-text-main font-medium block mb-[4px] font-display text-[15px] tracking-[0.05em] uppercase">
                                    {val.title}
                                </strong>
                                {val.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default InfrastructureSection;
