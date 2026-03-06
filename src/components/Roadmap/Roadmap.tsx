"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Roadmap Component
 * @returns JSX.Element
 */
const Roadmap = () => {
    const items = [
        {
            status: "Live Now",
            isLive: true,
            title: "Fleet Operations",
            desc: "Load booking, rate negotiation, FMCSA compliance, and ELD support — running across an active managed fleet.",
            strong: "Profitable from the first truck. Real back-office infrastructure, proven on real freight."
        },
        {
            status: "Live Now",
            isLive: true,
            title: "Superload — Ops Tooling",
            desc: "Proprietary tooling used by our ops team on every load — instant RPM checks, real routing, profitability scoring on DAT and Truckstop.",
            strong: "Built in-house. Used in-house. Available free to any dispatcher."
        },
        {
            status: "Building Now",
            isLive: false,
            title: "Carrier Operations Suite",
            desc: "Full visibility into your fleet's performance, compliance record, and load history — in one place.",
            strong: "Your trucks, your numbers, your operation — all in view. The back office that stops being invisible."
        }
    ];

    return (
        <section id="roadmap" className="bg-dark2 py-[120px]">
            <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.72 }}
                    variants={revealVariants}
                    className="mb-[72px]"
                >
                    <SectionLabel label="Where We&apos;re Going" />
                    <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em]">
                        Building the<br />back office<br /><em className="not-italic text-teal">for your fleet.</em>
                    </h2>
                    <p className="text-[15px] text-text-muted leading-[1.7] max-w-[480px] mt-[20px]">
                        Supernova is not a back-office outfit that might eventually build a product. It&apos;s an operational infrastructure company. Here&apos;s what&apos;s live and what&apos;s coming.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-[1px] relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal to-border-subtle z-0" />

                    {items.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.72, delay: idx * 0.1 }}
                            variants={revealVariants}
                            className={`
                bg-dark3 p-[36px_28px_36px_32px] md:p-[36px_36px_36px_80px] relative transition-colors duration-250 border-l-[3px] 
                ${item.isLive ? 'border-teal' : 'border-text-muted hover:border-teal'}
                hover:bg-dark4 group
              `}
                        >
                            {/* Node */}
                            <div className={`
                hidden md:flex absolute left-[28px] top-[40px] w-[24px] h-[24px] border-2 bg-dark items-center justify-center z-10
                ${item.isLive ? 'border-teal bg-teal' : 'border-text-muted'}
              `}>
                                <div className={`
                  ${item.isLive ? 'w-[6px] h-[6px] rounded-full bg-dark' : 'w-[8px] h-[8px] bg-dark'}
                `} />
                            </div>

                            <div className={`
                font-mono text-[9px] tracking-[0.25em] uppercase mb-[10px]
                ${item.isLive ? 'text-teal' : 'text-text-muted'}
              `}>
                                {item.status}
                            </div>

                            <h3 className="font-display font-bold text-[22px] tracking-[0.04em] uppercase text-text-main mb-[10px]">
                                {item.title}
                            </h3>

                            <p className="text-[14px] leading-[1.75] text-text-muted max-w-[640px]">
                                {item.desc} <strong className="text-text-soft font-normal">{item.strong}</strong>
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Roadmap;
