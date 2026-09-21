"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <nav className="navbar">
            <Link href="/" className="logo">
            Joshua Song
            </Link>

            <div className="navLinks">
            <Link href="/work">Work</Link>
            <Link href="/sketchbook">Sketchbook</Link>
            <Link href="/misc">Misc</Link>
            <Link href="/about">About</Link>
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