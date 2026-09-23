import Image from "next/image";
import type { CSSProperties } from "react";

type DoodleProps = {
    /** Path under /public, e.g. "/doodles/arrow.svg". */
    src: string;
    /** Absolute-position offsets in px (relative to the nearest positioned parent). */
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    /** Rendered width in px. Height auto-scales via SVG intrinsic ratio. */
    width?: number;
    height?: number;
    /** Rotation in degrees (positive = clockwise). */
    rotate?: number;
    /** Opacity 0–1. */
    opacity?: number;
    /** Alt text for screen readers. Empty by default (decorative). */
    alt?: string;
};

/**
 * Render a doodle SVG at an absolute position over its parent. Requires the
 * parent to be `position: relative` (SketchbookPage already is).
 *
 * Drop your own SVGs into `public/doodles/` and reference them by path.
 */
export default function Doodle({
    src,
    top,
    right,
    bottom,
    left,
    width = 80,
    height,
    rotate = 0,
    opacity = 1,
    alt = "",
}: DoodleProps) {
    const style: CSSProperties = {
        top,
        right,
        bottom,
        left,
        width,
        height: height ?? "auto",
        transform: `rotate(${rotate}deg)`,
        opacity,
    };

    return (
        <Image
            className="doodle"
            src={src}
            alt={alt}
            width={width}
            height={height ?? width}
            style={style}
            aria-hidden={alt === "" ? true : undefined}
        />
    );
}
