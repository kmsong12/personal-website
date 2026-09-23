"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NAV_ITEMS, SITE } from "@/lib/site";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link
                    href="/"
                    className="logo"
                    aria-label={`${SITE.name} — home`}
                >
                    <Image
                        src={SITE.wordmark.src}
                        alt={SITE.wordmark.alt}
                        width={SITE.wordmark.width}
                        height={SITE.wordmark.height}
                        priority
                    />
                </Link>

                <div className="navLinks">
                    {NAV_ITEMS.map((item) => (
                        <Link key={item.href} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button
                    className="menuButton"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
            </nav>

            {open && <MobileMenu closeMenu={() => setOpen(false)} />}
        </>
    );
}
