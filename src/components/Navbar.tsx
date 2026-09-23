"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS, SITE } from "@/lib/site";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link href="/" className="logo">
                    {SITE.name}
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
