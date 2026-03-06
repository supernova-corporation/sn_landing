"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthService } from "@/services/AuthService";
import { Logo as CommonLogo } from "@/components/common/logo";

/**
 * Login Page component for Supernova Access Control
 * @returns JSX.Element
 */
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    /**
     * Handle Login form submission
     */
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        try {
            const result = await AuthService.signIn(email, password);
            if (result.success) {
                router.push("/");
            } else {
                setError(result.error || "Invalid credentials. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-dark flex items-center justify-center px-[24px]">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
                }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[400px] bg-dark3 border border-border-muted border-t-[3px] border-t-teal p-[40px] relative z-10"
            >
                <Link href="/" className="flex items-center gap-[12px] mb-[32px] no-underline group">
                    <CommonLogo size={28} />
                    <div>
                        <div className="font-display font-black text-[15px] tracking-[0.12em] uppercase text-text-main">
                            Supernova
                        </div>
                    </div>
                </Link>

                <h1 className="font-display font-bold text-[24px] tracking-[0.03em] mb-[8px] uppercase">
                    Welcome Back
                </h1>
                <p className="font-mono text-[9px] tracking-[0.2em] text-text-muted uppercase mb-[32px]">
                    Sign in to your account
                </p>

                <form onSubmit={handleLogin} className="space-y-[24px]">
                    <div className="space-y-[8px]">
                        <label className="font-mono text-[9px] tracking-[0.28em] uppercase text-text-muted block">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="fleet@supernova.center"
                            className="w-full bg-dark4 border border-border-subtle p-[12px_16px] font-mono text-[14px] text-teal focus:outline-none focus:border-teal transition-colors"
                            autoFocus
                        />
                    </div>

                    <div className="space-y-[8px]">
                        <label className="font-mono text-[9px] tracking-[0.28em] uppercase text-text-muted block">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-dark4 border border-border-subtle p-[12px_16px] font-mono text-[14px] text-teal focus:outline-none focus:border-teal transition-colors"
                        />
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-warn font-mono text-[10px] tracking-[0.05em]"
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting || !email || !password}
                        className={`
              w-full font-mono text-[11px] tracking-[0.2em] uppercase py-[16px] transition-all duration-200
              ${isSubmitting || !email || !password
                                ? 'bg-border-muted text-text-muted cursor-not-allowed'
                                : 'bg-teal text-dark hover:bg-[#00d9a8] cursor-pointer'
                            }
            `}
                    >
                        {isSubmitting ? "Authenticating..." : "Sign In"}
                    </button>
                </form>

                <div className="mt-[32px] pt-[24px] border-t border-border-subtle flex justify-between items-center">
                    <div className="font-mono text-[8px] tracking-[0.14em] text-text-muted uppercase">
                        Restricted System
                    </div>
                    <a href="mailto:support@supernova.center" className="font-mono text-[8px] tracking-[0.14em] text-teal uppercase border-b border-teal-mid no-underline hover:border-teal">
                        Need Help?
                    </a>
                </div>
            </motion.div>

            <div className="absolute bottom-[32px] font-mono text-[9px] tracking-[0.2em] text-text-muted uppercase">
                © Supernova Log-Tech
            </div>
        </main>
    );
}
