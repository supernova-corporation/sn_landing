"use client";

import React from "react";

/**
 * LogoProps Interface
 * @interface LogoProps
 */
export interface LogoProps {
    /** Optional size for the logo (width and height) */
    size?: number;
    /** Optional height override */
    height?: number;
    /** Optional width override */
    width?: number;
    /** Optional additional CSS classes */
    className?: string;
}

/**
 * Logo Component
 * A reusable SVG logo component for the Supernova brand.
 * 
 * @param {LogoProps} props - The component props
 * @returns {JSX.Element} The rendered SVG logo
 */
export const Logo = ({ size = 32, width, height, className }: LogoProps) => {
    const finalWidth = width || size;
    const finalHeight = height || size;

    return (
        <svg width={finalWidth} height={finalHeight} viewBox="0 0 32 32" fill="none" className={className}>
            <rect x="0.6" y="0.6" width="30.8" height="30.8" stroke="#00C49A" strokeWidth="1.2" rx="5" ry="5" />
            <line x1="16" y1="3" x2="16" y2="29" stroke="#00C49A" strokeWidth="1.2" />
            <line x1="3" y1="16" x2="29" y2="16" stroke="#00C49A" strokeWidth="1.2" />
            <line x1="6" y1="6" x2="26" y2="26" stroke="#00C49A" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="26" y1="6" x2="6" y2="26" stroke="#00C49A" strokeWidth="0.8" strokeOpacity="0.6" />
            <circle cx="16" cy="16" r="3.5" fill="#00C49A" />
        </svg>
    );
};

export default Logo;
