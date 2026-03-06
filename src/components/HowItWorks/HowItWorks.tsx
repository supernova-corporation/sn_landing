"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * HowItWorks Component
 * @returns JSX.Element
 */
const HowItWorks = () => {
    const steps = [
        {
            n: "01",
            tag: "Operations Intake",
            title: "We map how you run today",
            desc: "Before we touch anything, we learn your operation as it stands. That means understanding your load mix, your active lanes, how loads are currently being sourced, and what your rate structure looks like.",
            strong: "We're not here to replace what's working — we're here to take the parts that need to run better and run them right.",
            bullets: [
                "Current lane coverage and preferred corridors",
                "Broker relationships you already have — we continue and protect them",
                "Rate history and targets per lane",
                "Any operational gaps you're aware of — and some you might not be",
            ]
        },
        {
            n: "02",
            tag: "Driver & Asset Profiling",
            title: "We meet your drivers and profile every asset",
            desc: "Whether you run company drivers or owner-operators, we build a profile on each one — availability patterns, preferred lanes, communication style, current commitments.",
            strong: "The goal is zero disruption. Your drivers don't have to change how they work. We build around them.",
            bullets: [
                "Individual driver profiles — equipment type, availability, HOS patterns",
                "Owner-operator agreements reviewed and mapped",
                "Existing broker and shipper relationships transferred over with continuity",
                "As we see patterns over time, we bring you recommendations — you decide what changes",
            ]
        },
        {
            n: "03",
            tag: "For New Authorities",
            cond: "Skip if already operating",
            title: "New authority setup — from zero to first load",
            desc: "If you're a new MC, we can support the full setup process — not just operations. This means getting you structured before your trucks hit the road, so you're not building the back office while also trying to generate revenue.",
            bullets: [
                "MC and DOT authority setup guidance",
                "Factoring partner selection and onboarding — so you get paid on time from day one",
                "Initial lane and broker strategy for first 60–90 days",
                "Load board access setup and rate benchmarks for your lanes",
                "ELD and compliance infrastructure in place before first dispatch",
            ],
            isConditional: true
        },
        {
            n: "04",
            tag: "Live Operations",
            title: "We run the back office. You run the fleet.",
            desc: "Once your operation is mapped and your drivers are profiled, we take over. Load booking, rate negotiation, broker communication, HOS monitoring, compliance, invoicing, billing, and accounting — all running under your trucks, every day.",
            strong: "You focus on your drivers and your equipment. The rest is ours.",
            bullets: [
                "Loads sourced, negotiated, and booked on your behalf — every truck, every lane",
                "Broker communication handled start to finish — from rate confirmation to delivery",
                "Invoicing, billing, and collections — so your cash flow doesn't depend on you chasing it",
                "Compliance monitored daily — HOS gaps and FMCSA issues flagged before they become problems",
                "You step in whenever you want. We adjust immediately, no friction.",
            ]
        },
        {
            n: "05",
            tag: "Reporting & Success Plan",
            title: "You always know what's running and how",
            desc: "Every carrier gets a structured reporting cadence and a living customer success plan — so the operation is never a black box. You see every load, every rate, every exception. And as we learn your operation, we bring recommendations forward.",
            strong: "You decide what to act on. We track what we agreed to.",
            bullets: [
                "Weekly ops report — loads booked, rates achieved, gross per truck, any issues handled",
                "Monthly review — performance vs targets, lane analysis, what we'd tighten up",
                "Customer success plan updated as your operation evolves — not a one-time document",
                "Your ops team is reachable directly — not through a ticket queue or a shared inbox",
            ],
            highlight: true
        }
    ];

    return (
        <section id="hiw" className="bg-dark py-[120px]">
            <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
                <div className="grid grid-cols-1 lg:grid-cols-[4fr_8fr] gap-[48px] lg:gap-[96px] items-start">

                    {/* Left - Sticky Intro Wrapper */}
                    <div className="lg:sticky lg:top-[120px] lg:h-fit lg:self-start">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.72 }}
                            variants={revealVariants}
                        >
                            <SectionLabel label="How It Works" />
                            <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em] mb-[20px]">
                                We take over<br />clean. You stay<br /><em className="not-italic text-teal">in control.</em>
                            </h2>
                            <p className="text-[16px] font-light leading-[1.8] text-text-soft max-w-[320px] mt-[20px]">
                                From the first conversation to weekly reporting, every step is structured so there are no handoff surprises and no gaps in coverage. We learn your operation before we run it — and we keep you informed on everything we do.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right - Steps */}
                    <div className="flex flex-col gap-[1px]">
                        {steps.map((step) => (
                            <motion.div
                                key={step.n}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.72 }}
                                variants={revealVariants}
                                className={`
                                    bg-dark3 border-l-[3px] p-[40px_24px_40px_32px] md:p-[40px_40px_40px_44px] relative group transition-all duration-250
                                    ${step.highlight ? 'border-teal' : step.isConditional ? 'border-border-muted' : 'border-border-muted hover:border-teal'}
                                    ${step.isConditional ? 'hover:border-teal' : ''}
                                    hover:bg-dark4
                                    `}
                            >
                                <div className="font-display font-black text-[72px] leading-none text-border-muted absolute right-[36px] top-[28px] pointer-events-none select-none transition-colors duration-250 group-hover:text-teal-dim">
                                    {step.n}
                                </div>

                                <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px] mb-[18px] flex-wrap">
                                    <div className={`
                                        font-mono text-[9px] tracking-[0.22em] uppercase px-[12px] py-[5px] border whitespace-nowrap shrink-0
                                        ${step.isConditional ? 'text-text-muted border-text-muted' : 'text-teal border-teal bg-teal-dim'}
                                        `}>
                                        {step.tag}
                                    </div>
                                    {step.cond && (
                                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted">
                                            {step.cond}
                                        </span>
                                    )}
                                </div>

                                <div className="font-display font-bold text-[20px] tracking-[0.04em] uppercase text-text-main mb-[12px] leading-none relative z-10">
                                    {step.title}
                                </div>

                                <div className="text-[15px] leading-[1.78] text-text-muted max-w-[600px] relative z-10">
                                    {step.desc} {step.strong && <strong className="text-text-soft font-normal">{step.strong}</strong>}
                                </div>

                                <div className="mt-[18px] flex flex-col gap-[9px] relative z-10">
                                    {step.bullets.map((bullet, idx) => (
                                        <div key={idx} className="flex items-start gap-[12px] text-[14px] text-text-muted leading-[1.55]">
                                            <span className="font-mono text-teal shrink-0 mt-[1px]">—</span>
                                            {bullet}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
